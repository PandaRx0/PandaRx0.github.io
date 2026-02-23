import json
import re

path = r'c:\Users\MSI\OneDrive\Desktop\untitled\src\App.tsx'

questions = [
    {
        'id': 'q8',
        'question': "8- Regarding thyrotoxicosis. All of the following hyperthyroid patients are candidates for methimazole therapy as first-line treatment over propylthiouracil (PTU) EXCEPT:",
        'options': [
            {'id': 'a', 'text': "A 55-year-old male with thyroid storm"},
            {'id': 'b', 'text': "A 24-year-old pregnant female at her second trimester of pregnancy"},
            {'id': 'c', 'text': "A 26-year-old postpartum female"},
            {'id': 'd', 'text': "A 66-year-old male with a recent incidence of COVID-19"},
            {'id': 'e', 'text': "A 10-year-old boy with two days history of common cold"}
        ],
        'correctId': 'a',
        'explanation': "According to the sources, methimazole is generally preferred as first-line therapy. However, PTU is specifically recommended as an exception for the treatment of thyroid storm because it blocks the peripheral conversion of T4 to T3 in addition to interfering with hormone production. For pregnancy, PTU is only preferred during the first trimester; methimazole is acceptable in the second and third trimesters."
    },
    {
        'id': 'q14',
        'question': "14- Regarding hyperthyroidism, β-Blockers are usually used as adjunctive therapy in which specific condition, β-Blockers may be used as a first line rather than being used as adjunctive therapy in:",
        'options': [
            {'id': 'a', 'text': "treating Graves' disease"},
            {'id': 'b', 'text': "treating thyroiditis"},
            {'id': 'c', 'text': "preparation for thyroid surgery"},
            {'id': 'd', 'text': "treating thyroid storm"},
            {'id': 'e', 'text': "treating toxic nodules"}
        ],
        'correctId': 'b',
        'explanation': "The sources state that β-blockers are typically used as adjunctive therapy with antithyroid drugs, RAI, or iodides. However, they are considered primary (first-line) therapy for thyrotoxicosis associated with thyroiditis, as these conditions involve the release of preformed hormone rather than overproduction, making thionamides ineffective."
    },
    {
        'id': 'q21',
        'question': "21- Regarding replacement therapy of hypothyroidism. The following statements are true regarding Levothyroxine (L-thyroxine, T4) therapy for patients with hypothyroidism EXCEPT:",
        'options': [
            {'id': 'a', 'text': "Young patients with long-standing disease and patients older than 45 years without known cardiac disease should be started on 50 mcg daily"},
            {'id': 'b', 'text': "The initial daily dose for older patients with cardiac disease is 25mcg/day titrated upward in increments of 25 mcg at monthly intervals"},
            {'id': 'c', 'text': "The average maintenance dose for most adults is about 125 mcg/day"},
            {'id': 'd', 'text': "Levothyroxine is the drug of choice for pregnant women, it does not need to adjust the dose to maintain free T4 concentrations in the normal range"},
            {'id': 'e', 'text': "Cholestyramine, and dietary fiber supplements may impair the absorption of levothyroxine from the GI tract"}
        ],
        'correctId': 'd',
        'explanation': "While levothyroxine is the drug of choice for pregnant women, the statement that it \"does not need to adjust the dose\" is incorrect. The sources state that the goal in pregnancy is to decrease TSH to the normal reference range for pregnancy, which necessitates individualized therapy and monitoring, often requiring dose increases."
    },
    {
        'id': 'q47',
        'question': "47- Samir is 39 years old patient with hypothyroidism on thyroxine. He came to you with prescription for his new GIT problem. The new prescription is (Aluminum hydroxide chewing tab., pantoprazole cap. and sucralfate) for 2 months. You phoned the physician to do the following:",
        'options': [
            {'id': 'a', 'text': "cancel pantoprazole"},
            {'id': 'b', 'text': "cancel sucralfate"},
            {'id': 'c', 'text': "decrease dose of pantoprazole"},
            {'id': 'd', 'text': "increase dose of thyroxin"},
            {'id': 'e', 'text': "decrease the dose of thyroxin"}
        ],
        'correctId': 'd',
        'explanation': "The sources state that aluminum hydroxide, sucralfate, and acid suppression therapy like proton pump inhibitors (pantoprazole) can all impair the gastrointestinal absorption of levothyroxine. Because these medications will lower the amount of thyroxine Samir absorbs, his dose of thyroxin would likely need to be increased to maintain therapeutic levels."
    },
    {
        'id': 'q59',
        'question': "59- What test results would indicate thyrotoxicosis caused by Graves' disease?",
        'options': [
            {'id': 'a', 'text': "Elevated TSH, low RAIU"},
            {'id': 'b', 'text': "Elevated free T4, elevated free T3, suppressed TSH"},
            {'id': 'c', 'text': "Normal TSH, low RAIU"},
            {'id': 'd', 'text': "Elevated T3, normal T4, elevated TSH"},
            {'id': 'e', 'text': "Reduced iodine uptake in specific areas of the thyroid"}
        ],
        'correctId': 'b',
        'explanation': "In thyrotoxic Graves' disease, the thyroid overproduces hormone, leading to elevated concentrations of free T4 and free T3. Due to the negative feedback of these high hormone levels on the pituitary gland, the TSH level becomes undetectable or suppressed. Graves' disease is also associated with an elevated RAIU, not a low one."
    },
    {
        'id': 'q65',
        'question': "65- Radioactive iodine therapy is helpful for treatment of hyperthyroidism. What is a contraindication for radioactive iodine therapy?",
        'options': [
            {'id': 'a', 'text': "Moderate to severe eye disease"},
            {'id': 'b', 'text': "Suspicious thyroid nodules"},
            {'id': 'c', 'text': "Desire to become pregnant in the next 12 months"},
            {'id': 'd', 'text': "Need for quick control of hyperthyroidism"},
            {'id': 'e', 'text': "Thyroid adenoma"}
        ],
        'correctId': 'c',
        'explanation': "The sources state that pregnancy is an absolute contraindication for the use of RAI. Because RAI can cause permanent hypothyroidism and has potential (though unproven) risks for mutation, clinical guidelines generally advise women to avoid pregnancy for 6–12 months following treatment. Additionally, while not an absolute contraindication, RAI can sometimes worsen moderate-to-severe ophthalmopathy (eye disease)."
    }
]

questions_json = json.dumps(questions, indent=2)

with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Remove subtopics from TOPICS
text = re.sub(r\"    \{ id: 'hyperthyroid'.*?\n\", \"\", text)
text = re.sub(r\"    \{ id: 'thyroid_storm'.*?\n\", \"\", text)
text = re.sub(r\"    \{ id: 'hypothyroid'.*?\n\", \"\", text)

# 2. Add MCQs to 'thyroid' and remove subtopics from MCQS
# It's safer to just replace 'thyroid': [ ... ] with the new json
# But we need to make sure we don't break JSON.

# the text has 'thyroid': [ ... ], 'hyperthyroid': [ ... ], etc.
# let's just use string replacement for the TOPICS first

if \"'thyroid': [\" not in text:
    print('thyroid key not found in MCQS')

# remove the old empty or filled subtopics from MCQS.
# finding the start of 'hyperthyroid'
# we will just delete the keys
text = re.sub(r\"  'hyperthyroid': \[\n.*?  \],\n\", \"\", text, flags=re.DOTALL)
text = re.sub(r\"  'thyroid_storm': \[\n.*?  \],\n\", \"\", text, flags=re.DOTALL)
text = re.sub(r\"  'hypothyroid': \[\n.*?  \],\n\", \"\", text, flags=re.DOTALL)

# replace 'thyroid' array with new questions
# Assuming it might be empty or have something
text = re.sub(r\"'thyroid': \[\n.*?  \],\", f\"'thyroid': {questions_json},\", text, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print('success')
