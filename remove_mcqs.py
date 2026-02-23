import re

path = r'c:\Users\MSI\OneDrive\Desktop\untitled\src\App.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find("'adrenal_disorders': [")
if start_idx != -1:
    end_idx = text.find("\n  ];", start_idx)
    next_topic_idx = text.find("  '", start_idx + 22)
    eof_idx = text.find("\n};", start_idx)

    # We want to replace everything from 'adrenal_disorders': [ ... until the next key or end of dict
    if next_topic_idx != -1 and (eof_idx == -1 or next_topic_idx < eof_idx):
        end_idx = text.rfind("],\n", start_idx, next_topic_idx) + 4
    elif eof_idx != -1:
        end_idx = text.rfind("]", start_idx, eof_idx) + 1
        
    if end_idx != -1:
        new_text = text[:start_idx] + "'adrenal_disorders': [\n\n  ],\n" + text[end_idx:]
        with open(path, 'w', encoding='utf-8') as f2:
            f2.write(new_text)
        print('success')
    else:
        print('end not found')
else:
    print('start not found')
