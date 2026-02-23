import json
import re

def process():
    with open('scraped_all_mcqs.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    mcqs = {
        'adrenal_gland': [],
        'cushing': [],
        'hyperaldosteronism': [],
        'adrenal_insuffi': [],
        'adrenal_crisis': []
    }

    # Helper to assign topic based on text
    def get_topic(text):
        t = text.lower()
        if 'crisis' in t or 'acute' in t and ('insufficiency' in t or 'adrenal' in t):
            return 'adrenal_crisis'
        if 'cushing' in t or 'etomidate' in t or 'mifepristone' in t or 'metyrapone' in t or 'mitotane' in t or 'ketoconazole' in t:
            return 'cushing'
        if 'aldosteronism' in t or 'conn' in t or 'eplerenone' in t or 'spironolactone' in t:
            return 'hyperaldosteronism'
        if 'addison' in t or 'insufficiency' in t or 'hydrocortisone' in t or 'fludrocortisone' in t:
            return 'adrenal_insuffi'
        return 'adrenal_gland'

    count = 1
    for item in data:
        # skip non-adrenal
        if 'prostate' in item.lower() or 'breast' in item.lower() or 'فهرس' in item:
            continue
            
        # replace literal \n with actual newline
        item = item.replace('\\n', '\n')
            
        # skip if no options are present
        if not re.search(r'\n-?\s*[a-eA-E][-\.\)]\s*', item):
            continue
            
        # extract question and options
        parts = re.split(r'\n-?\s*[a-eA-E][-\.\)]\s*', item)
        if len(parts) < 6:
            # maybe different format
            lines = item.split('\n')
            q_lines = []
            opt_lines = []
            for l in lines:
                if re.match(r'^-?\s*[a-eA-E][-\.\)]\s*', l.strip()):
                    opt_lines.append(l.strip())
                else:
                    if not opt_lines: # Still forming question
                        q_lines.append(l.strip())
            
            if len(opt_lines) >= 5:
                q = " ".join(q_lines).strip()
                opts = [re.sub(r'^-?\s*[a-eA-E][-\.\)]\s*', '', o).strip() for o in opt_lines[:5]]
            else:
                continue
        else:
            q = parts[0].strip()
            opts = [p.strip() for p in parts[1:6]]
        
        # Clean up question text (remove leading dashes)
        q = re.sub(r'^-\s*', '', q)
        q = q.replace('\n', ' ').replace('"', "'")
        opts = [o.replace('"', "'") for o in opts]
        
        topic = get_topic(q + ' ' + ' '.join(opts))
        
        opt_str = ""
        letters = ['a', 'b', 'c', 'd', 'e']
        for i, o in enumerate(opts):
            opt_str += f"        {{ id: '{letters[i]}', text: \"{o}\" }},\n"
            
        mcq_block = f"""    {{
      id: 'q{count}',
      question: "{q}",
      options: [
{opt_str.rstrip(',\n')}
      ],
      correctId: 'a', // Note: Placeholder, options were from polls
      explanation: 'Answer imported from Telegram channel polls.'
    }}"""
        mcqs[topic].append(mcq_block)
        count += 1
        
    # Write to a TS-like output
    with open('parsed_mcqs.txt', 'w', encoding='utf-8') as f:
        for t, blocks in mcqs.items():
            f.write(f"  '{t}': [\n")
            f.write(",\n".join(blocks))
            f.write("\n  ],\n")

if __name__ == '__main__':
    process()
