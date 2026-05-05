import json

def main():
    with open('src/App.tsx', 'r', encoding='utf-8') as f:
        app_code = f.read()

    start_idx = app_code.find("'mass_spectrometry': [")
    if start_idx != -1:
        bracket_count = 0
        in_string = False
        escape = False
        end_idx = -1
        # The '[' is at start_idx + 21
        for i in range(start_idx + 21, len(app_code)):
            c = app_code[i]
            if escape:
                escape = False
                continue
            if c == '\\':
                escape = True
            elif c == '"':
                in_string = not in_string
            elif not in_string:
                if c == '[':
                    bracket_count += 1
                elif c == ']':
                    bracket_count -= 1
                    if bracket_count == 0:
                        end_idx = i + 1
                        break

        if end_idx != -1:
            json_str = app_code[start_idx + 21:end_idx]
            try:
                data = json.loads(json_str)
                if len(data) == 40:
                    new_data = data[:20]
                    new_json_str = json.dumps(new_data, indent=4)
                    
                    new_app_code = app_code[:start_idx + 21] + new_json_str + app_code[end_idx:]
                    with open('src/App.tsx', 'w', encoding='utf-8') as f:
                        f.write(new_app_code)
                    print('Successfully removed the 20 questions.')
                else:
                    print(f'Expected 40 questions, found {len(data)}')
            except Exception as e:
                print('JSON parse error:', e)
        else:
            print('Could not find end of array')
    else:
        print('Could not find mass_spectrometry key')

if __name__ == '__main__':
    main()
