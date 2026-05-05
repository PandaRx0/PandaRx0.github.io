import re

file_path = r"c:\Users\MSI\OneDrive\Desktop\untitled\src\App.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Inject imports at the top
imports = """
import mcq1 from './assets/advancedassets/mcq1.png';
import mcq2 from './assets/advancedassets/mcq2.png';
import mcq3 from './assets/advancedassets/mcq3.png';
import mcq4 from './assets/advancedassets/mcq4.png';
"""
if "import mcq1" not in content:
    content = content.replace("import { useState } from 'react';", "import { useState } from 'react';\n" + imports)

# 2. Inject image rendering in the UI
# We look for <h3 className="mcq-question" ...>{q.question}</h3> and insert the image below it.
image_ui = """
                  <h3 className="mcq-question" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>{q.question}</h3>
                  {q.image && (
                    <div className="mcq-image-container" style={{ marginBottom: '1.5rem', textAlign: 'center', background: '#222', padding: '1rem', borderRadius: '8px' }}>
                      <img src={q.image} alt="Question figure" style={{ maxWidth: '100%', borderRadius: '8px' }} />
                    </div>
                  )}
"""
if "q.image &&" not in content:
    content = re.sub(
        r'<h3 className="mcq-question"[^>]*>\{q\.question\}</h3>',
        image_ui.strip(),
        content
    )

# 3. Append the 4 questions to ir_spectroscopy
new_ir_mcqs = """
    ,{
      "id": "q15",
      "question": "15. Concerning the following IR chart, the peaks at 3291 cm\u207b\u00b9 and 3368 cm\u207b\u00b9 represent the presence of the:",
      "image": mcq1,
      "options": [
        { "id": "a", "text": "Carbonyl group." },
        { "id": "b", "text": "Primary amine group." },
        { "id": "c", "text": "Hydroxyl group." },
        { "id": "d", "text": "Secondary amine group." },
        { "id": "e", "text": "ether group." }
      ],
      "correctId": "b",
      "explanation": "Primary amines characteristically show two stretching bands in the 3400\u20133300 cm\u207b\u00b9 region due to symmetrical and asymmetrical stretching. Secondary amines show only one band, and hydroxyl groups typically show one very broad band."
    },
    {
      "id": "q16",
      "question": "16. Concerning the following IR chart, the shape of the peak in the box represent the presence of the:",
      "image": mcq2,
      "options": [
        { "id": "a", "text": "Carbonyl group." },
        { "id": "b", "text": "Aliphatic amine group." },
        { "id": "c", "text": "Hydroxyl group." },
        { "id": "d", "text": "Carboxylic acid group." },
        { "id": "e", "text": "primary amine" }
      ],
      "correctId": "d",
      "explanation": "The sources state that carboxylic acid dimers exhibit extremely broad and intense O-H stretching absorptions in the 3300\u20132500 cm\u207b\u00b9 region, often obscuring the C-H stretching region."
    },
    {
      "id": "q17",
      "question": "17. Given below four isomers (C\u2084H\u2088O) and one IR spectrum. Identify the isomer to which the spectrum is corresponded.",
      "image": mcq3,
      "options": [
        { "id": "a", "text": "I." },
        { "id": "b", "text": "II." },
        { "id": "c", "text": "III." },
        { "id": "d", "text": "IV." },
        { "id": "e", "text": "None of the above." }
      ],
      "correctId": "b",
      "explanation": "The IR spectrum shows a prominent C=O stretching band at ~1715 cm\u207b\u00b9, which is the standard absorption frequency for a saturated aliphatic ketone/aldehyde."
    },
    {
      "id": "q18",
      "question": "18. Regarding IR spectroscopy, which of the following statement is true about the frequency of the following compounds?",
      "image": mcq4,
      "options": [
        { "id": "a", "text": "The compound 1 has lower frequency than compound 2 which in turn lower than compound 3" },
        { "id": "b", "text": "The compound 1 has lower frequency than compound 3 which in turn lower than compound 2" },
        { "id": "c", "text": "The compound 2 has lower frequency than compound 1 which in turn lower than compound 3" },
        { "id": "d", "text": "The compound 3 has lower frequency than compound 2 which in turn lower than compound 1" },
        { "id": "e", "text": "The compound 3 has lower frequency than compound 1 which in turn lower than compound 2" }
      ],
      "correctId": "e",
      "explanation": "Frequency is affected by ring strain and conjugation. While conjugation (1) normally lowers frequency and ring strain (2) increases it, the specific comparison provided in the exam source identifies compound 3 as having the lowest frequency and compound 2 as the highest."
    }
"""

ir_start = content.find("'ir_spectroscopy': [")
ir_end = content.find("],", ir_start)

if ir_start != -1 and ir_end != -1:
    content = content[:ir_end] + new_ir_mcqs + content[ir_end:]
else:
    print("Warning: ir_spectroscopy array not found!")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected images successfully.")
