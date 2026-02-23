import re

def inject():
    with open('parsed_mcqs.txt', 'r', encoding='utf-8') as f:
        new_mcqs = f.read()

    with open('src/App.tsx', 'r', encoding='utf-8') as f:
        app_code = f.read()

    # The MCQS object starts at `const MCQS = {` and ends before `// --- COMPONENTS ---`
    pattern = r'const MCQS = \{[\s\S]*?\n\};\n\n// --- COMPONENTS ---'
    
    replacement = f"const MCQS = {{\n{new_mcqs}}};\n\n// --- COMPONENTS ---"
    
    new_app_code = re.sub(pattern, replacement, app_code)

    with open('src/App.tsx', 'w', encoding='utf-8') as f:
        f.write(new_app_code)

if __name__ == '__main__':
    inject()
