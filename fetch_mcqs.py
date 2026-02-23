import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import json
import time

def fetch_all_mcqs():
    mcqs = []
    seen = set()
    
    print("Starting deep scrape of Telegram channel...")
    # Loop over message offsets to get all history history
    for i in range(1600, 0, -20): 
        url = f"https://t.me/s/MCQ_5th_Pharmacy?before={i}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            html = urllib.request.urlopen(req).read()
        except Exception as e:
            continue
            
        soup = BeautifulSoup(html, 'html.parser')
        messages = soup.find_all('div', class_='tgme_widget_message')
        
        for msg in messages:
            # Check for regular text
            text_elem = msg.find('div', class_='tgme_widget_message_text')
            text = text_elem.get_text(separator='\\n').strip() if text_elem else ""
            
            # Check for poll
            poll_elem = msg.find('div', class_='tgme_widget_message_poll')
            if poll_elem:
                poll_question_elem = poll_elem.find('div', class_='tgme_widget_message_poll_question')
                poll_question = poll_question_elem.get_text(separator='\\n').strip() if poll_question_elem else ""
                
                poll_options = poll_elem.find_all('div', class_='tgme_widget_message_poll_option_text')
                options_text = "\\n".join([f"- {opt.get_text(strip=True)}" for opt in poll_options])
                
                # Combine them
                text = text + "\\n" + poll_question + "\\n" + options_text
                text = text.strip()
                
            if not text or text in seen:
                continue
            seen.add(text)
            
            # Criteria: must contain any adrenal-related keyword
            text_lower = text.lower()
            keywords = [
                'adrenal', 'cushing', 'addison', 'aldosteronism', 'hyperaldosteronism', 
                'pheochromocytoma', 'cortisol', 'aldosterone'
            ]
            
            if any(k in text_lower for k in keywords):
                # We want 5 options. If it's a poll we can count the '-' lines, or just check 'e-' in regular text.
                if text.count('\\n- ') == 5 or 'e-' in text_lower or 'e)' in text_lower or 'e.' in text_lower or 'e ' in text_lower or '\\ne-' in text_lower or '\\ne ' in text_lower:
                    mcqs.append(text)
        
        time.sleep(0.1) # Small delay to avoid rate limiting
        
    print(f"Scrape complete. Found {len(mcqs)} matching 5-option MCQs.")
    with open('scraped_all_mcqs.json', 'w', encoding='utf-8') as f:
        json.dump(mcqs, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    fetch_all_mcqs()
