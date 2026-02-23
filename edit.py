import re

path = r'c:\Users\MSI\OneDrive\Desktop\untitled\src\App.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "id: 'adrenal_gland'" in line:
        start_idx = i
    if "id: 'adrenal_crisis'" in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    lines = lines[:start_idx] + ["    { id: 'adrenal_disorders', title: 'Adrenal Disorders', desc: 'Overview of adrenal conditions.', icon: ShieldCheck },"] + lines[end_idx+1:]
    content = '\n'.join(lines)

content = content.replace("'adrenal_gland': [\n\n  ],\n  'cushing': [", "'adrenal_disorders': [")
content = content.replace("  ],\n  'hyperaldosteronism': [", ",")
content = content.replace("  ],\n  'adrenal_insuffi': [", ",")
content = content.replace("  ],\n  'adrenal_crisis': [", ",")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("done")
