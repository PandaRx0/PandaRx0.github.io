import json

path = r'c:\Users\MSI\OneDrive\Desktop\untitled\src\App.tsx'

questions = [
    {
        'id': 'q11',
        'question': '11- Hyperaldosteronism can cause several disturbances. One of the following is not a Clinical Presentation of hyperaldosteronism:',
        'options': [
            {'id': 'a', 'text': 'Hypernatremia'},
            {'id': 'b', 'text': 'Polydipsia'},
            {'id': 'c', 'text': 'Nocturnal polyuria'},
            {'id': 'd', 'text': 'Hypertension'},
            {'id': 'e', 'text': 'Hypermagnesemia'}
        ],
        'correctId': 'e',
        'explanation': 'Laboratory findings for primary hyperaldosteronism include hypomagnesemia (low magnesium), not hypermagnesemia. Other symptoms listed in the options, such as hypernatremia, polydipsia, nocturnal polyuria, and hypertension, are correct signs/symptoms of the condition.'
    },
    {
        'id': 'q13',
        'question': '13- Mitotane is a cytotoxic drug. All the followings are true about Mitotane EXCEPT:',
        'options': [
            {'id': 'a', 'text': 'Causes reversible hypercholesterolemia'},
            {'id': 'b', 'text': 'Causes significant neurologic side effects'},
            {'id': 'c', 'text': 'Causes prolonged bleeding times.'},
            {'id': 'd', 'text': 'Reduces synthesis of cortisol'},
            {'id': 'e', 'text': 'It is considered as first line therapy for Cushing Syndrome.'}
        ],
        'correctId': 'e',
        'explanation': 'The treatment of choice for both ACTH-dependent and ACTH-independent Cushing syndrome is surgical resection of the offending tumors. Pharmacotherapy, including mitotane, is generally used as a second-line treatment for patients who are not surgical candidates or as adjunctive therapy.'
    },
    {
        'id': 'q34',
        'question': '34- A 27-year-old woman comes to an endocrinologist because she has suffered from hair on her face, chest, and back as well as irregular menses for the past 10 months. She says she also has had easy bruising with poor wound healing during this time. Diagnosis of Cushing syndrome is confirmed by laboratory tests. Which one of the following drugs is most appropriate for this patient?',
        'options': [
            {'id': 'a', 'text': 'Metyrapone'},
            {'id': 'b', 'text': 'Osilodrostat'},
            {'id': 'c', 'text': 'Ketoconazole'},
            {'id': 'd', 'text': 'Etomidate'},
            {'id': 'e', 'text': 'Metformin'}
        ],
        'correctId': 'c',
        'explanation': 'This patient is experiencing androgenic symptoms like hirsutism (excessive hair). Ketoconazole has antiandrogenic activity, which can be beneficial in women presenting with these symptoms. In contrast, metyrapone can actually cause a compensatory rise in ACTH that shunts steroidogenesis toward androgen production, potentially worsening acne and hirsutism.'
    },
    {
        'id': 'q40',
        'question': '40- Adrenal insufficiency is caused by multiple etiologies. The most common cause of secondary adrenal insufficiency in countries like Iraq and Egypt is:',
        'options': [
            {'id': 'a', 'text': 'Autoimmune disorder'},
            {'id': 'b', 'text': 'Tuberculosis'},
            {'id': 'c', 'text': 'Air pollution'},
            {'id': 'd', 'text': 'Rifamicin'},
            {'id': 'e', 'text': 'long term administration of exogenous corticosteroids.'}
        ],
        'correctId': 'e',
        'explanation': 'The sources state that secondary adrenal insufficiency most commonly results from exogenous corticosteroid use, which leads to the suppression of the hypothalamic–pituitary–adrenal (HPA) axis.'
    },
    {
        'id': 'q49',
        'question': '49- Adrenal insufficiency produced by Autoimmune dysfunction or drugs, which drug was reported to induce secondary adrenal insufficiency?',
        'options': [
            {'id': 'a', 'text': 'ketoconazole'},
            {'id': 'b', 'text': 'medroxyprogesterone'},
            {'id': 'c', 'text': 'phenytoin'},
            {'id': 'd', 'text': 'rifampin'},
            {'id': 'e', 'text': 'phenobarbital'}
        ],
        'correctId': 'b',
        'explanation': 'Progestins (such as medroxyprogesterone acetate) have been specifically reported to induce secondary adrenal insufficiency. Other medications mentioned, like ketoconazole, phenytoin, rifampin, and phenobarbital, are associated with causing primary adrenal insufficiency.'
    },
    {
        'id': 'q57',
        'question': '57- Pasireotide is approved for use in Cushing disease primarily because:',
        'options': [
            {'id': 'a', 'text': 'It has fewer side effects than other therapies'},
            {'id': 'b', 'text': 'It directly stimulates cortisol breakdown'},
            {'id': 'c', 'text': 'It can be used as a first-line treatment'},
            {'id': 'd', 'text': 'It is effective in patients who cannot have surgery'},
            {'id': 'e', 'text': 'It promotes adrenal gland regeneration'}
        ],
        'correctId': 'd',
        'explanation': 'Pasireotide is a somatostatin analog approved for the treatment of adults with Cushing disease for whom pituitary surgery is not an option or has not been curative.'
    },
    {
        'id': 'q58',
        'question': '58- How should patients with Addison\'s disease using corticosteroid replacement manage their doses during stressful situations?',
        'options': [
            {'id': 'a', 'text': 'No need for adjustments, the body compensates automatically.'},
            {'id': 'b', 'text': 'Reduce the dose slightly to avoid overexposure.'},
            {'id': 'c', 'text': 'Maintain regular dosage regardless of stress levels.'},
            {'id': 'd', 'text': 'Temporarily double their daily dose until the stressful event subsides.'},
            {'id': 'e', 'text': 'Stop taking medication until the stressful situation resolves.'}
        ],
        'correctId': 'd',
        'explanation': 'During times of severe physical stress (such as febrile illness or injury), patients are instructed to double their daily dose until recovery to prevent an adrenal crisis.'
    },
    {
        'id': 'q93',
        'question': '93- An adult woman patient with classic Cushing’s disease (caused by a pituitary adenoma) referred to surgery; Laparoscopic adrenalectomy is her current treatment according to her physician mostly because?',
        'options': [
            {'id': 'a', 'text': 'Transsphenoidal surgery and pituitary radiotherapy have failed or cannot be used.'},
            {'id': 'b', 'text': 'Preferred for bilateral adrenal adenomas'},
            {'id': 'c', 'text': 'Preferred for tumors invading the dura or cavernous sinus'},
            {'id': 'd', 'text': 'Treatment of choice for both ACTH dependent and ACTH independent Cushing syndrome'},
            {'id': 'e', 'text': 'Pharmacotherapy failed to be used as first line treatment'}
        ],
        'correctId': 'a',
        'explanation': 'While transsphenoidal resection is the treatment of choice for Cushing disease (a pituitary-based issue), laparoscopic adrenalectomy is preferred when that surgery and pituitary radiotherapy have failed or cannot be used.'
    },
    {
        'id': 'q101',
        'question': '101- M.S, a 55-year-old female on Etomidate prepared to Transsphenoidal resection of the pituitary tumor for her Cushing disease. Recently she developed an emergent medical condition necessities addition of an oral hypoglycemic drug to her regimen and this operation not possible to be performed. Which medication is most optimal to be used at this time to control patient symptoms regarding the elevated cortisol level?',
        'options': [
            {'id': 'a', 'text': 'Metyrapone with Ketoconazole'},
            {'id': 'b', 'text': 'Higher doses of Etomidate'},
            {'id': 'c', 'text': 'Mifepristone'},
            {'id': 'd', 'text': 'Pasireotide'},
            {'id': 'e', 'text': 'Osilodrostat'}
        ],
        'correctId': 'a',
        'explanation': 'Ketoconazole may be used concomitantly with metyrapone to achieve synergistic reduction in cortisol levels. Furthermore, ketoconazole’s antiandrogenic actions can offset the androgenic potential of metyrapone. Option d (Pasireotide) is less optimal because it can cause hyperglycemia, which would worsen the patient\'s new medical condition requiring hypoglycemic drugs.'
    },
    {
        'id': 'q102',
        'question': '102- A 35-years old male patient with tuberculosis, few months after his recovery this patient developed weakness, additional weight loss, salt craving, headaches, memory impairment, depression, and postural dizziness. Prednisolone tab 5 mg and fludrocortisone acetate 0.1 mg tab daily were prescribed to control his symptoms. Recently this patient exposed to car accident resulted in massive blood loss and head injury. What is the recommended management plan regarding his condition?',
        'options': [
            {'id': 'a', 'text': 'Double his oral daily doses of both Prednisolone and Fludrocortisone with using proper fluid therapy until stabilized.'},
            {'id': 'b', 'text': 'Double his daily oral Prednisolone dose and switch to Deoxycorticosterone trimethylacetate injection with proper fluid therapy until stabilized.'},
            {'id': 'c', 'text': 'Switch to oral Hydrocortisone 25 mg with proper fluid therapy and omit fludrocortisone.'},
            {'id': 'd', 'text': 'Switch to Hydrocortisone 100 mg IV by rapid infusion, followed by 200 mg over 24 hours as a continuous infusion with proper fluid therapy until stabilized.'},
            {'id': 'e', 'text': 'Switch to oral Hydrocortisone 50 mg every 6–8 hours with proper fluid therapy until stabilized and omit fludrocortisone.'}
        ],
        'correctId': 'd',
        'explanation': 'This patient is in an adrenal crisis, which is a medical emergency following major trauma. Parenteral hydrocortisone is the corticosteroid of choice, starting with 100 mg IV by rapid infusion, followed by 200 mg over 24 hours as a continuous infusion. Fluid replacement with IV dextrose 5% in normal saline is also required to support blood pressure.'
    }
]

questions_json = json.dumps(questions, indent=2)

with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

import re
if "'adrenal_disorders': []" in text:
    target = "'adrenal_disorders': []"
    new_text = text.replace(target, f"'adrenal_disorders': {questions_json}")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("success")
    
else:
    print("not found")
