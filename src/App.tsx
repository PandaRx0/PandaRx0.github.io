import { useState } from 'react';
import './index.css';
import { ShieldCheck, Database, Cloud, BarChart2, ChevronLeft, ChevronRight, Check, X, Send } from 'lucide-react';

// --- DUMMY DATA ---
const SUBJECTS = [
  { id: 'therapeutics', title: 'Applied Therapeutics', desc: 'Clinical guidelines and patient care.', icon: ShieldCheck },
  { id: 'advanced', title: 'Advanced Analysis', desc: 'In-depth chemical and instrumental analysis.', icon: Database },
  { id: 'delivery', title: 'Drug Delivery', desc: 'Formulation and targeting mechanisms.', icon: Cloud },
  { id: 'biotech', title: 'Biotechnology', desc: 'Biological processes for industrial and medical purposes.', icon: BarChart2 },
];



const TOPICS = {
  therapeutics: [
    { id: 'adrenal_disorders', title: 'Adrenal Disorders', desc: 'Overview of adrenal conditions.', icon: ShieldCheck },
    { id: 'thyroid', title: 'Thyroid Disorders', desc: 'General thyroid conditions.', icon: Database },

    { id: 'alzheimer', title: 'Alzheimer Disease', desc: 'Neurodegenerative condition.', icon: Database },
    { id: 'anxiety', title: 'Anxiety Disorders', desc: 'Generalized and panic disorders.', icon: Cloud },
    { id: 'depressive', title: 'Depressive Disorders', desc: 'MDD and related conditions.', icon: BarChart2 },


    { id: 'schizophrenia', title: 'Schizophrenia', desc: 'Psychotic disorders.', icon: ShieldCheck },
    { id: 'insomnia', title: 'Insomnia', desc: 'Sleep-wake disorders.', icon: Database },
    { id: 'contraception', title: 'Contraception', desc: 'Methods and pharmacology.', icon: Cloud },
    { id: 'hrt', title: 'Hormone Replacement Therapy', desc: 'Menopausal hormone therapy.', icon: BarChart2 },
    { id: 'menstruation', title: 'Menstruation Related Disorders', desc: 'Dysmenorrhea, Amenorrhea, Anovulatory Bleeding.', icon: ShieldCheck },
    { id: 'oncology', title: 'Oncology', desc: 'Cancer therapies and management.', icon: Database },
    { id: 'breast_cancer', title: 'Breast Cancer', desc: 'Oncology and targeted therapies.', icon: Database },
    { id: 'prostate_cancer', title: 'Prostate Cancer', desc: 'Screening and management.', icon: Cloud },
    { id: 'chemo_adverse', title: 'Adverse Effects of Chemotherapy', desc: 'CINV, Mucositis, and Febrile Neutropenia.', icon: BarChart2 },
  ],
  advanced: [],
  delivery: [
    { id: 'drug_development', title: 'New Drug Development and Approval Process', desc: 'Chapter 2', icon: Cloud }
  ],
  biotech: []
};

const MCQS = {
  'adrenal_disorders': [
    {
      "id": "q53",
      "question": "53- A.S is 45 years old male was presented to the Endocrinology clinic with the following signs and symptoms: Central obesity, abdominal stria, hirsutism, weight gain. Upon examination his blood pressure and blood glucose were markedly elevated where fasting blood sugar was 166 g/dl and blood pressure was 160/110 mmHg. As a clinical pharmacist, which medication would you propose to reverse the manifestations of the patient's illness?",
      "options": [
        {
          "id": "a",
          "text": "Ketoconazole"
        },
        {
          "id": "b",
          "text": "Etomidate"
        },
        {
          "id": "c",
          "text": "Spironolactone"
        },
        {
          "id": "d",
          "text": "Mifepristone"
        },
        {
          "id": "e",
          "text": "Mitotane"
        }
      ],
      "correctId": "d",
      "explanation": "The patient's symptoms (central obesity, striae, hirsutism, hypertension, hyperglycemia) are classic for Cushing's syndrome, likely caused by hypercortisolism. Mifepristone is a glucocorticoid receptor antagonist that blocks the effects of cortisol at the receptor level, directly reversing the manifestations of cortisol excess. The other options are steroidogenesis inhibitors (ketoconazole, etomidate, mitotane) or an aldosterone antagonist (spironolactone), which do not directly reverse the effects of cortisol at the tissue level."
    },
    {
      "id": "q59",
      "question": "59- Treatment plans in Cushing syndrome are based on etiology. Treatment of choice for both ACTH- dependent and ACTH- independent cushing syndrome is",
      "options": [
        {
          "id": "a",
          "text": "Ketoconazole"
        },
        {
          "id": "b",
          "text": "Mitotane"
        },
        {
          "id": "c",
          "text": "Surgical resection of offending tumors."
        },
        {
          "id": "d",
          "text": "Mifepristone"
        },
        {
          "id": "e",
          "text": "Radiotherapy"
        }
      ],
      "correctId": "c",
      "explanation": "The definitive and first-line treatment for Cushing's syndrome, regardless of whether it is ACTH-dependent (pituitary adenoma) or ACTH-independent (adrenal tumor), is the surgical removal of the causative tumor. Other options are medical therapies or radiotherapy used when surgery is not possible, has failed, or while waiting for its full effect."
    },
    {
      "id": "q62",
      "question": "62- Steroidogenesis Inhibitors drugs are used for treating Cushing disease as second- line treatments in patients who are not surgical candidates. Drug with antiandrogenic activity and beneficial in women but can cause gynecomastia and hypogonadism in men",
      "options": [
        {
          "id": "a",
          "text": "Metyrapone"
        },
        {
          "id": "b",
          "text": "Etomidate"
        },
        {
          "id": "c",
          "text": "Both of answer A and B"
        },
        {
          "id": "d",
          "text": "Ketoconazole"
        },
        {
          "id": "e",
          "text": "Both of Answer B and D"
        }
      ],
      "correctId": "d",
      "explanation": "Ketoconazole is an antifungal agent that is also a potent inhibitor of several cytochrome P450 enzymes involved in adrenal and gonadal steroid synthesis. Due to its inhibition of androgen synthesis, it has antiandrogenic effects, which can be beneficial in women with hirsutism but can cause gynecomastia and hypogonadism in men. Metyrapone and etomidate are steroidogenesis inhibitors but do not have significant antiandrogenic properties."
    },
    {
      "id": "q70",
      "question": "70- Regarding adrenal insufficiency there are many clinical symptoms will associate with it. The following are the major clinical symptoms associated with 90% destruction of adrenal gland cortex, EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "Hyperpigmentation"
        },
        {
          "id": "b",
          "text": "Weight lost"
        },
        {
          "id": "c",
          "text": "Hypernatremia"
        },
        {
          "id": "d",
          "text": "Dehydration"
        },
        {
          "id": "e",
          "text": "Hyperkalemia"
        }
      ],
      "correctId": "c",
      "explanation": "Primary adrenal insufficiency (Addison's disease) involves loss of both cortisol and aldosterone. Aldosterone deficiency leads to sodium loss, not retention. This results in **hyponatremia** (low sodium), along with hyperkalemia, dehydration, and weight loss. Hyperpigmentation occurs due to high ACTH levels."
    },
    {
      "id": "q73",
      "question": "73- Ls is 35 years old male was presented with the following signs and symptoms: muscle weakness, paresthesias, headache, polydipsia, and nocturnal polyuria. He also had elevated blood pressure and tetany. Serum potassium: 1.2 mEq/l (normal value 3.5- 5), Aldosterone hormone level: elevated. What is the first line treatment for this case?",
      "options": [
        {
          "id": "a",
          "text": "Enalapril"
        },
        {
          "id": "b",
          "text": "Valsartan"
        },
        {
          "id": "c",
          "text": "Amlodipine"
        },
        {
          "id": "d",
          "text": "Metoprolol"
        },
        {
          "id": "e",
          "text": "Spironolactone"
        }
      ],
      "correctId": "e",
      "explanation": "The presentation (hypertension, severe hypokalemia, elevated aldosterone) is classic for primary hyperaldosteronism. Spironolactone is a mineralocorticoid receptor antagonist that directly blocks the effects of excess aldosterone, thereby correcting hypertension and hypokalemia. It is the first-line pharmacologic treatment for this condition."
    },
    {
      "id": "q76",
      "question": "76- A 21 years old female has both hyperaldosteronism and menstrual irregularities. The most appropriate treatment for this female is",
      "options": [
        {
          "id": "a",
          "text": "Amiloride"
        },
        {
          "id": "b",
          "text": "Chlortalidone"
        },
        {
          "id": "c",
          "text": "Eplerenone"
        },
        {
          "id": "d",
          "text": "Spironolactone"
        },
        {
          "id": "e",
          "text": "All are appropriate"
        }
      ],
      "correctId": "c",
      "explanation": "While spironolactone is effective for hyperaldosteronism, it is a non-selective mineralocorticoid antagonist with significant anti-androgenic and progestogenic activity. This can cause menstrual irregularities and other endocrine side effects. Eplerenone is a more selective mineralocorticoid receptor antagonist with a lower incidence of these endocrine-related side effects, making it more appropriate for a young female patient."
    },
    {
      "id": "q79",
      "question": "79- Acute adrenal Insufficiency (adrenal crisis) represents a true endocrine emergency. The glucocorticoid of choice for treatment",
      "options": [
        {
          "id": "a",
          "text": "Mometasone"
        },
        {
          "id": "b",
          "text": "Hydrocortisone"
        },
        {
          "id": "c",
          "text": "Dexamethasone"
        },
        {
          "id": "d",
          "text": "Prednisolone"
        },
        {
          "id": "e",
          "text": "Betamethasone"
        }
      ],
      "correctId": "b",
      "explanation": "In an adrenal crisis, the immediate replacement of glucocorticoid is vital. Hydrocortisone is the drug of choice because it has both glucocorticoid and sufficient mineralocorticoid activity to correct the electrolyte imbalances (hyponatremia, hyperkalemia) associated with the crisis. Dexamethasone has no mineralocorticoid activity and is not first-line for the acute crisis."
    },
    {
      "id": "q81",
      "question": "81- Regarding Addison disease: Which of the following is incorrect statement?",
      "options": [
        {
          "id": "a",
          "text": "Addison disease is characterized by destruction of all regions of the adrenal cortex."
        },
        {
          "id": "b",
          "text": "Addison disease is characterized by very low or undetectable serum cortisol and aldosterone levels"
        },
        {
          "id": "c",
          "text": "Addison disease is, characterized by increased skin pigmentation especially on the face, oral mucosa, palmar creases and knuckles."
        },
        {
          "id": "d",
          "text": "Addison disease is characterized by high levels of serum CRH and ACTH."
        },
        {
          "id": "e",
          "text": "Addison disease is characterized by high blood pressure especially on standing."
        }
      ],
      "correctId": "e",
      "explanation": "Addison's disease (primary adrenal insufficiency) is characterized by hypotension, not hypertension. The lack of cortisol and aldosterone leads to dehydration and an inability to respond to stress, resulting in low blood pressure and orthostatic hypotension. The other statements are correct: destruction of the adrenal cortex, low cortisol/aldosterone, hyperpigmentation (from high ACTH), and high CRH/ACTH."
    },
    {
      "id": "q91",
      "question": "91- Steroidogenic inhibitors that used in preparation for surgery for patients with Cushing's syndrome is",
      "options": [
        {
          "id": "a",
          "text": "Metyrapone"
        },
        {
          "id": "b",
          "text": "Cyproheptadine"
        },
        {
          "id": "c",
          "text": "Tretinoin"
        },
        {
          "id": "d",
          "text": "Mifepristone"
        },
        {
          "id": "e",
          "text": "Fludrocortisone"
        }
      ],
      "correctId": "a",
      "explanation": "Metyrapone is a steroidogenesis inhibitor that blocks the final step of cortisol synthesis (11-beta-hydroxylase). It is often used pre-operatively in patients with Cushing's syndrome to rapidly lower cortisol levels and control the severe metabolic manifestations of the disease before definitive surgical resection."
    },
    {
      "id": "q92",
      "question": "92- Clinical presentation of Cushing syndrome includes the following EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "Oedema"
        },
        {
          "id": "b",
          "text": "Hypotension"
        },
        {
          "id": "c",
          "text": "Osteoporosis"
        },
        {
          "id": "d",
          "text": "Hirsutism in women"
        },
        {
          "id": "e",
          "text": "Central obesity"
        }
      ],
      "correctId": "b",
      "explanation": "Cushing's syndrome is characterized by excess cortisol, which has mineralocorticoid activity. This leads to sodium and water retention, causing hypertension (high blood pressure), not hypotension. The other options are classic features: edema (from salt/water retention), osteoporosis (from increased bone resorption), hirsutism (from androgen excess), and central obesity."
    },

    {
      "id": "q11",
      "question": "11- Hyperaldosteronism can cause several disturbances. One of the following is not a Clinical Presentation of hyperaldosteronism:",
      "options": [
        {
          "id": "a",
          "text": "Hypernatremia"
        },
        {
          "id": "b",
          "text": "Polydipsia"
        },
        {
          "id": "c",
          "text": "Nocturnal polyuria"
        },
        {
          "id": "d",
          "text": "Hypertension"
        },
        {
          "id": "e",
          "text": "Hypermagnesemia"
        }
      ],
      "correctId": "e",
      "explanation": "Laboratory findings for primary hyperaldosteronism include hypomagnesemia (low magnesium), not hypermagnesemia. Other symptoms listed in the options, such as hypernatremia, polydipsia, nocturnal polyuria, and hypertension, are correct signs/symptoms of the condition."
    },
    {
      "id": "q13",
      "question": "13- Mitotane is a cytotoxic drug. All the followings are true about Mitotane EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Causes reversible hypercholesterolemia"
        },
        {
          "id": "b",
          "text": "Causes significant neurologic side effects"
        },
        {
          "id": "c",
          "text": "Causes prolonged bleeding times."
        },
        {
          "id": "d",
          "text": "Reduces synthesis of cortisol"
        },
        {
          "id": "e",
          "text": "It is considered as first line therapy for Cushing Syndrome."
        }
      ],
      "correctId": "e",
      "explanation": "The treatment of choice for both ACTH-dependent and ACTH-independent Cushing syndrome is surgical resection of the offending tumors. Pharmacotherapy, including mitotane, is generally used as a second-line treatment for patients who are not surgical candidates or as adjunctive therapy."
    },
    {
      "id": "q34",
      "question": "34- A 27-year-old woman comes to an endocrinologist because she has suffered from hair on her face, chest, and back as well as irregular menses for the past 10 months. She says she also has had easy bruising with poor wound healing during this time. Diagnosis of Cushing syndrome is confirmed by laboratory tests. Which one of the following drugs is most appropriate for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Metyrapone"
        },
        {
          "id": "b",
          "text": "Osilodrostat"
        },
        {
          "id": "c",
          "text": "Ketoconazole"
        },
        {
          "id": "d",
          "text": "Etomidate"
        },
        {
          "id": "e",
          "text": "Metformin"
        }
      ],
      "correctId": "c",
      "explanation": "This patient is experiencing androgenic symptoms like hirsutism (excessive hair). Ketoconazole has antiandrogenic activity, which can be beneficial in women presenting with these symptoms. In contrast, metyrapone can actually cause a compensatory rise in ACTH that shunts steroidogenesis toward androgen production, potentially worsening acne and hirsutism."
    },
    {
      "id": "q40",
      "question": "40- Adrenal insufficiency is caused by multiple etiologies. The most common cause of secondary adrenal insufficiency in countries like Iraq and Egypt is:",
      "options": [
        {
          "id": "a",
          "text": "Autoimmune disorder"
        },
        {
          "id": "b",
          "text": "Tuberculosis"
        },
        {
          "id": "c",
          "text": "Air pollution"
        },
        {
          "id": "d",
          "text": "Rifamicin"
        },
        {
          "id": "e",
          "text": "long term administration of exogenous corticosteroids."
        }
      ],
      "correctId": "e",
      "explanation": "The sources state that secondary adrenal insufficiency most commonly results from exogenous corticosteroid use, which leads to the suppression of the hypothalamic\u2013pituitary\u2013adrenal (HPA) axis."
    },
    {
      "id": "q49",
      "question": "49- Adrenal insufficiency produced by Autoimmune dysfunction or drugs, which drug was reported to induce secondary adrenal insufficiency?",
      "options": [
        {
          "id": "a",
          "text": "ketoconazole"
        },
        {
          "id": "b",
          "text": "medroxyprogesterone"
        },
        {
          "id": "c",
          "text": "phenytoin"
        },
        {
          "id": "d",
          "text": "rifampin"
        },
        {
          "id": "e",
          "text": "phenobarbital"
        }
      ],
      "correctId": "b",
      "explanation": "Progestins (such as medroxyprogesterone acetate) have been specifically reported to induce secondary adrenal insufficiency. Other medications mentioned, like ketoconazole, phenytoin, rifampin, and phenobarbital, are associated with causing primary adrenal insufficiency."
    },
    {
      "id": "q57",
      "question": "57- Pasireotide is approved for use in Cushing disease primarily because:",
      "options": [
        {
          "id": "a",
          "text": "It has fewer side effects than other therapies"
        },
        {
          "id": "b",
          "text": "It directly stimulates cortisol breakdown"
        },
        {
          "id": "c",
          "text": "It can be used as a first-line treatment"
        },
        {
          "id": "d",
          "text": "It is effective in patients who cannot have surgery"
        },
        {
          "id": "e",
          "text": "It promotes adrenal gland regeneration"
        }
      ],
      "correctId": "d",
      "explanation": "Pasireotide is a somatostatin analog approved for the treatment of adults with Cushing disease for whom pituitary surgery is not an option or has not been curative."
    },
    {
      "id": "q58",
      "question": "58- How should patients with Addison's disease using corticosteroid replacement manage their doses during stressful situations?",
      "options": [
        {
          "id": "a",
          "text": "No need for adjustments, the body compensates automatically."
        },
        {
          "id": "b",
          "text": "Reduce the dose slightly to avoid overexposure."
        },
        {
          "id": "c",
          "text": "Maintain regular dosage regardless of stress levels."
        },
        {
          "id": "d",
          "text": "Temporarily double their daily dose until the stressful event subsides."
        },
        {
          "id": "e",
          "text": "Stop taking medication until the stressful situation resolves."
        }
      ],
      "correctId": "d",
      "explanation": "During times of severe physical stress (such as febrile illness or injury), patients are instructed to double their daily dose until recovery to prevent an adrenal crisis."
    },
    {
      "id": "q93",
      "question": "93- An adult woman patient with classic Cushing\u2019s disease (caused by a pituitary adenoma) referred to surgery; Laparoscopic adrenalectomy is her current treatment according to her physician mostly because?",
      "options": [
        {
          "id": "a",
          "text": "Transsphenoidal surgery and pituitary radiotherapy have failed or cannot be used."
        },
        {
          "id": "b",
          "text": "Preferred for bilateral adrenal adenomas"
        },
        {
          "id": "c",
          "text": "Preferred for tumors invading the dura or cavernous sinus"
        },
        {
          "id": "d",
          "text": "Treatment of choice for both ACTH dependent and ACTH independent Cushing syndrome"
        },
        {
          "id": "e",
          "text": "Pharmacotherapy failed to be used as first line treatment"
        }
      ],
      "correctId": "a",
      "explanation": "While transsphenoidal resection is the treatment of choice for Cushing disease (a pituitary-based issue), laparoscopic adrenalectomy is preferred when that surgery and pituitary radiotherapy have failed or cannot be used."
    },
    {
      "id": "q101",
      "question": "101- M.S, a 55-year-old female on Etomidate prepared to Transsphenoidal resection of the pituitary tumor for her Cushing disease. Recently she developed an emergent medical condition necessities addition of an oral hypoglycemic drug to her regimen and this operation not possible to be performed. Which medication is most optimal to be used at this time to control patient symptoms regarding the elevated cortisol level?",
      "options": [
        {
          "id": "a",
          "text": "Metyrapone with Ketoconazole"
        },
        {
          "id": "b",
          "text": "Higher doses of Etomidate"
        },
        {
          "id": "c",
          "text": "Mifepristone"
        },
        {
          "id": "d",
          "text": "Pasireotide"
        },
        {
          "id": "e",
          "text": "Osilodrostat"
        }
      ],
      "correctId": "a",
      "explanation": "Ketoconazole may be used concomitantly with metyrapone to achieve synergistic reduction in cortisol levels. Furthermore, ketoconazole\u2019s antiandrogenic actions can offset the androgenic potential of metyrapone. Option d (Pasireotide) is less optimal because it can cause hyperglycemia, which would worsen the patient's new medical condition requiring hypoglycemic drugs."
    },
    {
      "id": "q102",
      "question": "102- A 35-years old male patient with tuberculosis, few months after his recovery this patient developed weakness, additional weight loss, salt craving, headaches, memory impairment, depression, and postural dizziness. Prednisolone tab 5 mg and fludrocortisone acetate 0.1 mg tab daily were prescribed to control his symptoms. Recently this patient exposed to car accident resulted in massive blood loss and head injury. What is the recommended management plan regarding his condition?",
      "options": [
        {
          "id": "a",
          "text": "Double his oral daily doses of both Prednisolone and Fludrocortisone with using proper fluid therapy until stabilized."
        },
        {
          "id": "b",
          "text": "Double his daily oral Prednisolone dose and switch to Deoxycorticosterone trimethylacetate injection with proper fluid therapy until stabilized."
        },
        {
          "id": "c",
          "text": "Switch to oral Hydrocortisone 25 mg with proper fluid therapy and omit fludrocortisone."
        },
        {
          "id": "d",
          "text": "Switch to Hydrocortisone 100 mg IV by rapid infusion, followed by 200 mg over 24 hours as a continuous infusion with proper fluid therapy until stabilized."
        },
        {
          "id": "e",
          "text": "Switch to oral Hydrocortisone 50 mg every 6\u20138 hours with proper fluid therapy until stabilized and omit fludrocortisone."
        }
      ],
      "correctId": "d",
      "explanation": "This patient is in an adrenal crisis, which is a medical emergency following major trauma. Parenteral hydrocortisone is the corticosteroid of choice, starting with 100 mg IV by rapid infusion, followed by 200 mg over 24 hours as a continuous infusion. Fluid replacement with IV dextrose 5% in normal saline is also required to support blood pressure."
    }
  ],
  'thyroid': [
    {
      "id": "q63",
      "question": "63- For the treatment of hyperthyroidism during the first trimester of pregnancy. Which one of the following medications can be used during first trimester of pregnancy",
      "options": [
        {
          "id": "a",
          "text": "propylthiouracil"
        },
        {
          "id": "b",
          "text": "Radioactive iodine"
        },
        {
          "id": "c",
          "text": "carbamazole"
        },
        {
          "id": "d",
          "text": "Both A and B"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "a",
      "explanation": "Propylthiouracil (PTU) is the preferred antithyroid drug during the first trimester of pregnancy due to a lower risk of teratogenic effects compared to methimazole."
    },
    {
      "id": "q74",
      "question": "74- Hypothyroid patients are evaluated every 4- 8 weeks. The most sensitive and specific parameter for adjustment of L- thyroxine dose is",
      "options": [
        {
          "id": "a",
          "text": "Serum TSH"
        },
        {
          "id": "b",
          "text": "Serum total T3"
        },
        {
          "id": "c",
          "text": "Serum free T3"
        },
        {
          "id": "d",
          "text": "Serum total T4"
        },
        {
          "id": "e",
          "text": "Serum free T4"
        }
      ],
      "correctId": "a",
      "explanation": "In primary hypothyroidism, the pituitary gland's secretion of TSH best reflects the tissue response to thyroid hormones and is the most sensitive parameter for dose adjustment."
    },
    {
      "id": "q98",
      "question": "98- The followings are correct regarding the pathophysiology of hyperthyroidism EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Thyrotoxicosis occurs when autonomous follicles generate more thyroid hormones than required."
        },
        {
          "id": "b",
          "text": "Toxic adenoma is a thyroid mass whose function is independent of pituitary control"
        },
        {
          "id": "c",
          "text": "Painless subacute granulomatous thyroiditis often develops after viral syndrome"
        },
        {
          "id": "d",
          "text": "Thyrotoxicosis factitia is hyperthyroidism by ingestion of exogenous thyroid hormone."
        },
        {
          "id": "e",
          "text": "Amiodarone may induce thyrotoxicosis."
        }
      ],
      "correctId": "c",
      "explanation": "Subacute granulomatous (or De Quervain's) thyroiditis is typically painful and often develops after a viral respiratory illness."
    },
    {
      "id": "q100",
      "question": "100- A 45- year- old woman has received a diagnosis of Graves' disease. She is reluctant to try ablative therapy and wants to attempt oral pharmacotherapy first. Her thyroid laboratory values today include TSH 0.25 mIU/L (normal 0.5- 4.5 mIU/L) and a free TA concentration of \\(3.6 \\text{ng / dL}\\) (normal \\(0.8 - 1.9 \\text{ng / dL}\\) ), She is anxious and always feels warm when others say it is too cold. Which would be considered the best drug for initial treatment of her condition?",
      "options": [
        {
          "id": "a",
          "text": "Lugol's solution."
        },
        {
          "id": "b",
          "text": "Propylthiouracil (PTU)."
        },
        {
          "id": "c",
          "text": "Atenolol."
        },
        {
          "id": "d",
          "text": "Methimazole."
        },
        {
          "id": "e",
          "text": "Radioactive iodine."
        }
      ],
      "correctId": "d",
      "explanation": "For a non-pregnant patient with Graves' disease choosing oral pharmacotherapy, methimazole is preferred due to a much lower risk of severe hepatotoxicity compared to PTU."
    },

    {
      "id": "q8",
      "question": "8- Regarding thyrotoxicosis. All of the following hyperthyroid patients are candidates for methimazole therapy as first-line treatment over propylthiouracil (PTU) EXCEPT:",
      "options": [
        { "id": "a", "text": "A 55-year-old male with thyroid storm" },
        { "id": "b", "text": "A 24-year-old pregnant female at her second trimester of pregnancy" },
        { "id": "c", "text": "A 26-year-old postpartum female" },
        { "id": "d", "text": "A 66-year-old male with a recent incidence of COVID-19" },
        { "id": "e", "text": "A 10-year-old boy with two days history of common cold" }
      ],
      "correctId": "a",
      "explanation": "According to the sources, methimazole is generally preferred as first-line therapy. However, PTU is specifically recommended as an exception for the treatment of thyroid storm because it blocks the peripheral conversion of T4 to T3 in addition to interfering with hormone production. For pregnancy, PTU is only preferred during the first trimester; methimazole is acceptable in the second and third trimesters."
    },
    {
      "id": "q14",
      "question": "14- Regarding hyperthyroidism, β-Blockers are usually used as adjunctive therapy in which specific condition, β-Blockers may be used as a first line rather than being used as adjunctive therapy in:",
      "options": [
        { "id": "a", "text": "treating Graves' disease" },
        { "id": "b", "text": "treating thyroiditis" },
        { "id": "c", "text": "preparation for thyroid surgery" },
        { "id": "d", "text": "treating thyroid storm" },
        { "id": "e", "text": "treating toxic nodules" }
      ],
      "correctId": "b",
      "explanation": "The sources state that β-blockers are typically used as adjunctive therapy with antithyroid drugs, RAI, or iodides. However, they are considered primary (first-line) therapy for thyrotoxicosis associated with thyroiditis, as these conditions involve the release of preformed hormone rather than overproduction, making thionamides ineffective."
    },
    {
      "id": "q21",
      "question": "21- Regarding replacement therapy of hypothyroidism. The following statements are true regarding Levothyroxine (L-thyroxine, T4) therapy for patients with hypothyroidism EXCEPT:",
      "options": [
        { "id": "a", "text": "Young patients with long-standing disease and patients older than 45 years without known cardiac disease should be started on 50 mcg daily" },
        { "id": "b", "text": "The initial daily dose for older patients with cardiac disease is 25mcg/day titrated upward in increments of 25 mcg at monthly intervals" },
        { "id": "c", "text": "The average maintenance dose for most adults is about 125 mcg/day" },
        { "id": "d", "text": "Levothyroxine is the drug of choice for pregnant women, it does not need to adjust the dose to maintain free T4 concentrations in the normal range" },
        { "id": "e", "text": "Cholestyramine, and dietary fiber supplements may impair the absorption of levothyroxine from the GI tract" }
      ],
      "correctId": "d",
      "explanation": "While levothyroxine is the drug of choice for pregnant women, the statement that it \"does not need to adjust the dose\" is incorrect. The sources state that the goal in pregnancy is to decrease TSH to the normal reference range for pregnancy, which necessitates individualized therapy and monitoring, often requiring dose increases."
    },
    {
      "id": "q47",
      "question": "47- Samir is 39 years old patient with hypothyroidism on thyroxine. He came to you with prescription for his new GIT problem. The new prescription is (Aluminum hydroxide chewing tab., pantoprazole cap. and sucralfate) for 2 months. You phoned the physician to do the following:",
      "options": [
        { "id": "a", "text": "cancel pantoprazole" },
        { "id": "b", "text": "cancel sucralfate" },
        { "id": "c", "text": "decrease dose of pantoprazole" },
        { "id": "d", "text": "increase dose of thyroxin" },
        { "id": "e", "text": "decrease the dose of thyroxin" }
      ],
      "correctId": "d",
      "explanation": "The sources state that aluminum hydroxide, sucralfate, and acid suppression therapy like proton pump inhibitors (pantoprazole) can all impair the gastrointestinal absorption of levothyroxine. Because these medications will lower the amount of thyroxine Samir absorbs, his dose of thyroxin would likely need to be increased to maintain therapeutic levels."
    },
    {
      "id": "q59",
      "question": "59- What test results would indicate thyrotoxicosis caused by Graves' disease?",
      "options": [
        { "id": "a", "text": "Elevated TSH, low RAIU" },
        { "id": "b", "text": "Elevated free T4, elevated free T3, suppressed TSH" },
        { "id": "c", "text": "Normal TSH, low RAIU" },
        { "id": "d", "text": "Elevated T3, normal T4, elevated TSH" },
        { "id": "e", "text": "Reduced iodine uptake in specific areas of the thyroid" }
      ],
      "correctId": "b",
      "explanation": "In thyrotoxic Graves' disease, the thyroid overproduces hormone, leading to elevated concentrations of free T4 and free T3. Due to the negative feedback of these high hormone levels on the pituitary gland, the TSH level becomes undetectable or suppressed. Graves' disease is also associated with an elevated RAIU, not a low one."
    },
    {
      "id": "q65",
      "question": "65- Radioactive iodine therapy is helpful for treatment of hyperthyroidism. What is a contraindication for radioactive iodine therapy?",
      "options": [
        { "id": "a", "text": "Moderate to severe eye disease" },
        { "id": "b", "text": "Suspicious thyroid nodules" },
        { "id": "c", "text": "Desire to become pregnant in the next 12 months" },
        { "id": "d", "text": "Need for quick control of hyperthyroidism" },
        { "id": "e", "text": "Thyroid adenoma" }
      ],
      "correctId": "c",
      "explanation": "The sources state that pregnancy is an absolute contraindication for the use of RAI. Because RAI can cause permanent hypothyroidism and has potential (though unproven) risks for mutation, clinical guidelines generally advise women to avoid pregnancy for 6–12 months following treatment. Additionally, while not an absolute contraindication, RAI can sometimes worsen moderate-to-severe ophthalmopathy (eye disease)."
    }
  ],
  'alzheimer': [
    {
      "id": "q64",
      "question": "64- Cholinesterase inhibitors and NMDA- receptor antagonists are indicated for treatment of Alzheimer Disease. Which drug blocks glutamatergic neurotransmission by antagonizing NMDA receptors",
      "options": [
        {
          "id": "a",
          "text": "Donepezil"
        },
        {
          "id": "b",
          "text": "Rivastigmine"
        },
        {
          "id": "c",
          "text": "Memantine"
        },
        {
          "id": "d",
          "text": "Galantamine"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "c",
      "explanation": "Memantine is an uncompetitive antagonist of the NMDA receptor and blocks pathological glutamatergic neurotransmission which contributes to neuronal damage."
    },
    {
      "id": "q67",
      "question": "67- Alzheimer disease, there are many clinical symptoms will associate with it. The main change in personality and behavior that associated with Alzheimer disease:",
      "options": [
        {
          "id": "a",
          "text": "Depression"
        },
        {
          "id": "b",
          "text": "Social withdrawal"
        },
        {
          "id": "c",
          "text": "Delusions"
        },
        {
          "id": "d",
          "text": "Changes in sleeping habits"
        },
        {
          "id": "e",
          "text": "All mentioned points are correct"
        }
      ],
      "correctId": "e",
      "explanation": "Alzheimer's disease is a progressive neurodegenerative disorder where social withdrawal, depression, and delusions can all occur as part of the behavioral changes."
    },
    {
      "id": "q69",
      "question": "69- Alzheimer disease is a progressive illness. Neurotransmitters involved in pathophysiology of Alzheimer disease",
      "options": [
        {
          "id": "a",
          "text": "Acetylcholine"
        },
        {
          "id": "b",
          "text": "Serotonin"
        },
        {
          "id": "c",
          "text": "Glutamate"
        },
        {
          "id": "d",
          "text": "Monoamine oxidase type B"
        },
        {
          "id": "e",
          "text": "All are involved"
        }
      ],
      "correctId": "e",
      "explanation": "The pathophysiology of Alzheimer's disease is complex and involves multiple neurotransmitter systems including acetylcholine, serotonin, and glutamate."
    },
    {
      "id": "q90",
      "question": "90- Donepezil could be used in",
      "options": [
        {
          "id": "a",
          "text": "Mild Alzheimer cases"
        },
        {
          "id": "b",
          "text": "moderate Alzheimer cases"
        },
        {
          "id": "c",
          "text": "severe Alzheimer cases"
        },
        {
          "id": "d",
          "text": "Dementia of parkinson disease"
        },
        {
          "id": "e",
          "text": "All above"
        }
      ],
      "correctId": "e",
      "explanation": "Donepezil, an acetylcholinesterase inhibitor, is indicated and effective across all stages of Alzheimer's disease, including mild, moderate, and severe cases."
    },
    {
      "id": "q97",
      "question": "97- Pathologic characteristics of AD include",
      "options": [
        {
          "id": "a",
          "text": "Neurofibrillary tangles"
        },
        {
          "id": "b",
          "text": "Neuritic plaques"
        },
        {
          "id": "c",
          "text": "Loss of acetylcholine activity"
        },
        {
          "id": "d",
          "text": "Both B and C"
        },
        {
          "id": "e",
          "text": "A, B, and C"
        }
      ],
      "correctId": "e",
      "explanation": "The classic pathological hallmarks of Alzheimer's disease include neuritic plaques (amyloid beta), neurofibrillary tangles (tau protein), and prominent loss of acetylcholine activity."
    },

    {
      "id": "q19",
      "question": "19- In the diagnosis of AD. The Folstein Mini-Mental State Examination (MMSE) can help establish a history of deficits in two or more areas of cognition at baseline against which to evaluate change in severity over time, which statement is correct:",
      "options": [
        { "id": "a", "text": "The average expected decline in an untreated patient is 2–4 points per year." },
        { "id": "b", "text": "The average expected decline in an untreated patient is 4–6 points per year" },
        { "id": "c", "text": "The average expected decline in an untreated patient is 2.5–6 points per year" },
        { "id": "d", "text": "The average expected decline in an untreated patient is 3–5 points per year" },
        { "id": "e", "text": "The average expected decline in an untreated patient is 3–6 points per year" }
      ],
      "correctId": "a",
      "explanation": "According to the sources, the Folstein Mini-Mental State Examination (MMSE) is used to evaluate cognitive changes over time, and the average expected decline in an untreated Alzheimer's patient is 2–4 points per year."
    },
    {
      "id": "q42",
      "question": "42- The diagnosis of Alzheimer disease is largely based on",
      "options": [
        { "id": "a", "text": "Identified symptoms" },
        { "id": "b", "text": "Laboratory data" },
        { "id": "c", "text": "Chest CT scan" },
        { "id": "d", "text": "Abdominal MRI" },
        { "id": "e", "text": "All the above" }
      ],
      "correctId": "a",
      "explanation": "The sources state that Alzheimer’s is a clinical diagnosis, based largely on identified symptoms and difficulty with activities of daily living revealed through interviews. Laboratory tests and imaging (like brain MRI) are primarily used to rule out other pathologies rather than being the primary basis for the AD diagnosis itself."
    },
    {
      "id": "q43",
      "question": "43- Ahmed is a 65 years old man with severe Alzheimer disease. The suitable cholinesterase inhibitor is",
      "options": [
        { "id": "a", "text": "Rivastigmine" },
        { "id": "b", "text": "Galantamine" },
        { "id": "c", "text": "Donepezil" },
        { "id": "d", "text": "Lorazepam" },
        { "id": "e", "text": "Aspirin" }
      ],
      "correctId": "c",
      "explanation": "While donepezil, rivastigmine, and galantamine are all indicated for mild-to-moderate AD, donepezil is the only one specifically mentioned as also being indicated for severe AD."
    },
    {
      "id": "q44",
      "question": "44- All patients receiving treatment for Alzheimer disease should be monitored for therapeutic outcomes. The following parameter(s) should be monitored",
      "options": [
        { "id": "a", "text": "Drug effectiveness" },
        { "id": "b", "text": "Side effects" },
        { "id": "c", "text": "Adherence" },
        { "id": "d", "text": "The need for dose adjustment" },
        { "id": "e", "text": "All the above" }
      ],
      "correctId": "e",
      "explanation": "Monitoring for AD treatment is comprehensive. The sources state that clinicians should observe for medication efficacy (effectiveness), potential adverse reactions (side effects), adherence, and the need for dosage adjustments."
    },
    {
      "id": "q64",
      "question": "64- Mr. Ali, 71, with hypertension, presented with memory loss, financial management difficulties, and disorientation. His reduced social activities and mood swings indicated a cognitive decline. An MMSE score of 22 suggested mild Alzheimer's disease, confirmed by MRI. The following treatments can be used as monotherapy, EXCEPT:",
      "options": [
        { "id": "a", "text": "Donepezil." },
        { "id": "b", "text": "Rivastigmine." },
        { "id": "c", "text": "Galantamine" },
        { "id": "d", "text": "Memantine." },
        { "id": "e", "text": "Aducanumab." }
      ],
      "correctId": "d",
      "explanation": "Donepezil, rivastigmine, and galantamine (cholinesterase inhibitors) are indicated for mild-to-moderate AD. Aducanumab is indicated for mild cognitive impairment or mild AD. However, memantine is indicated for moderate-to-severe AD, but not for mild AD."
    },
    {
      "id": "q100",
      "question": "100- MRI baseline and after treatment should be recommended with",
      "options": [
        { "id": "a", "text": "Rivastigmine" },
        { "id": "b", "text": "Donepezil" },
        { "id": "c", "text": "Memantine" },
        { "id": "d", "text": "Aducanumab" },
        { "id": "e", "text": "Galantamine" }
      ],
      "correctId": "d",
      "explanation": "Patients treated with aducanumab require monitoring with MRI at baseline and prior to the 7th and 12th infusions to identify Amyloid-Related Imaging Abnormalities (ARIA), such as brain edema or hemorrhage."
    },
    {
      "id": "q109",
      "question": "109- R.S is 68 years old patient with history of Hypertension, MI, DM and depression who was stabilized on Mirtazapine due to its safety profile regarding patients with polypharmacy. recently he developed symptoms indicative of cognitive decline and memory issues. What treatment should you start for this patient?",
      "options": [
        { "id": "a", "text": "Add Omega 3 capsules" },
        { "id": "b", "text": "Add Donepezil" },
        { "id": "c", "text": "Switch antidepressant with Nefazodone" },
        { "id": "d", "text": "Reduce antidepressant dose" },
        { "id": "e", "text": "Switch antidepressant with Vortioxetine" }
      ],
      "correctId": "e",
      "explanation": "The sources note that vortioxetine may be helpful specifically for depressed patients with cognitive difficulties. Since the patient is already on an antidepressant (mirtazapine) and is now experiencing cognitive decline, switching to an agent that addresses both is the most optimal pharmacological step."
    }
  ],
  'anxiety': [
    {
      "id": "q89",
      "question": "89- The most frequently prescribed drugs for the treatment of acute anxiety are:",
      "options": [
        {
          "id": "a",
          "text": "Benzodiazepines."
        },
        {
          "id": "b",
          "text": "Tricyclic antidepressants."
        },
        {
          "id": "c",
          "text": "Antiepileptic."
        },
        {
          "id": "d",
          "text": "Selective serotonin reuptake inhibitors."
        },
        {
          "id": "e",
          "text": "none"
        }
      ],
      "correctId": "a",
      "explanation": "For the acute management of anxiety and panic attacks, benzodiazepines provide the most rapid and effective relief."
    },
    {
      "id": "q94",
      "question": "94- A 23 year- old otherwise healthy woman with GAD has no past history of drug or alcohol abuse and no family history of substance abuse. She is started on lorazepam 0.5 mg three times daily. Which of the following side effects will you warn her about?",
      "options": [
        {
          "id": "a",
          "text": "Slowed reaction time"
        },
        {
          "id": "b",
          "text": "Sedation"
        },
        {
          "id": "c",
          "text": "Risk of withdrawal symptoms upon discontinuation"
        },
        {
          "id": "d",
          "text": "Anterograde amnesia"
        },
        {
          "id": "e",
          "text": "All of the above"
        }
      ],
      "correctId": "e",
      "explanation": "Benzodiazepines like lorazepam are CNS depressants that can cause sedation, slowed reaction time, anterograde amnesia, and carry a risk of physical dependence and withdrawal symptoms."
    },
    {
      "id": "q95",
      "question": "95- Regarding anxiety disorders, The drug of choice for the management of choice generalized anxiety disorder is:",
      "options": [
        {
          "id": "a",
          "text": "Diazepam"
        },
        {
          "id": "b",
          "text": "Hydroxyzine"
        },
        {
          "id": "c",
          "text": "Citalopram"
        },
        {
          "id": "d",
          "text": "Buspirone"
        },
        {
          "id": "e",
          "text": "Pregabalin"
        }
      ],
      "correctId": "c",
      "explanation": "Selective Serotonin Reuptake Inhibitors (SSRIs) like citalopram are considered the first-line pharmacotherapy for the long-term management of generalized anxiety disorder."
    },
    {
      "id": "q102",
      "question": "102- Common medical illnesses associated with symptoms of anxiety are listed below, EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Depression"
        },
        {
          "id": "b",
          "text": "Ulcerative colitis"
        },
        {
          "id": "c",
          "text": "Systemic lupus erythematosus"
        },
        {
          "id": "d",
          "text": "Migraine headache"
        },
        {
          "id": "e",
          "text": "B12 deficiency anemia"
        }
      ],
      "correctId": "a",
      "explanation": "While anxiety and depression are highly comorbid, depression is a primary psychiatric disorder, not a general medical illness that secondarily causes anxiety symptoms like the others listed."
    },

    {
      "id": "q9",
      "question": "9- Regarding the use of benzodiazepines in treating anxiety disorder, which of the following is incorrect?",
      "options": [
        { "id": "a", "text": "Benzodiazepines are the most effective and frequently prescribed drugs." },
        { "id": "b", "text": "Most of the improvement occurs in the first 2 weeks of therapy." },
        { "id": "c", "text": "65%-75% of patients with GAD have a moderate response." },
        { "id": "d", "text": "More effective for somatic and autonomic symptoms of GAD." },
        { "id": "e", "text": "More effective than antidepressants for the psychic symptoms (eg, apprehension and worry)." }
      ],
      "correctId": "e",
      "explanation": "This statement is incorrect because the sources state that antidepressants are more effective for the psychic symptoms (apprehension and worry), while benzodiazepines are more effective for the somatic and autonomic symptoms of GAD."
    },
    {
      "id": "q10",
      "question": "10- Concerning treatment of generalized anxiety disorder. One of the drugs most frequently used to treat acute anxiety",
      "options": [
        { "id": "a", "text": "Tricyclic antidepressants" },
        { "id": "b", "text": "Benzodiazepines" },
        { "id": "c", "text": "Serotonin selective receptor inhibitors." },
        { "id": "d", "text": "Buspirone 5-HT1A partial agonist" },
        { "id": "e", "text": "All of the above" }
      ],
      "correctId": "b",
      "explanation": "The sources explicitly state that benzodiazepines are the most effective and frequently prescribed treatment for acute anxiety, with most improvement seen in the first 2 weeks."
    },
    {
      "id": "q31",
      "question": "31- R.M is 27 years old female with history of anxiety who had tried different courses of antidepressants and benzodiazepines without an adequate response. The next step of her treatment would be:",
      "options": [
        { "id": "a", "text": "Quetiapine" },
        { "id": "b", "text": "Arpiprazole" },
        { "id": "c", "text": "Buspirone" },
        { "id": "d", "text": "Pregabalin" },
        { "id": "e", "text": "Risperidone" }
      ],
      "correctId": "d",
      "explanation": "According to the GAD treatment algorithm and alternative pharmacotherapy section, for a patient who has not responded to first-line trials (SSRIs/SNRIs), pregabalin is an effective alternative that has produced anxiolytic effects similar to benzodiazepines and venlafaxine."
    },
    {
      "id": "q37",
      "question": "37- Although the treatment of GAD can be achieved by a wide range of medications. Acute and long-term therapy is best achieved by",
      "options": [
        { "id": "a", "text": "Venlafaxine" },
        { "id": "b", "text": "Diazepam" },
        { "id": "c", "text": "Hydroxyzine" },
        { "id": "d", "text": "Buspirone" },
        { "id": "e", "text": "All of them" }
      ],
      "correctId": "a",
      "explanation": "Antidepressants (like Venlafaxine XR) are considered the treatment of choice for both the acute and long-term management of GAD, especially when depressive symptoms are present. Benzodiazepines (like diazepam) are typically restricted to short-term use (2-4 weeks) for acute symptoms."
    },
    {
      "id": "q48",
      "question": "48- Anxiety Symptoms can be developed with several medicines, EXCEPT:",
      "options": [
        { "id": "a", "text": "prednisone" },
        { "id": "b", "text": "theophylline" },
        { "id": "c", "text": "ibuprofen" },
        { "id": "d", "text": "levothyroxine" },
        { "id": "e", "text": "cerivastatin" }
      ],
      "correctId": "e",
      "explanation": "The sources list several medications associated with anxiety symptoms, including stimulants, steroids (prednisone), thyroid hormones (levothyroxine), asthma medications (theophylline), and NSAIDs (ibuprofen). Statins like cerivastatin are not listed as a common cause of anxiety symptoms."
    },
    {
      "id": "q98",
      "question": "98- concerning Generalized anxiety disorder. The diagnosis requires excessive anxiety and worry mos days for at least",
      "options": [
        { "id": "a", "text": "3 months" },
        { "id": "b", "text": "6 months" },
        { "id": "c", "text": "1 month" },
        { "id": "d", "text": "2 months" },
        { "id": "e", "text": "8 weeks" }
      ],
      "correctId": "b",
      "explanation": "The diagnostic criteria for Generalized Anxiety Disorder (GAD) require excessive anxiety and worry occurring most days for at least 6 months."
    },
    {
      "id": "q105",
      "question": "105- Which of the following antidepressants can be used in pregnant women with anxiety?",
      "options": [
        { "id": "a", "text": "Venlafaxine" },
        { "id": "b", "text": "escitalopram" },
        { "id": "c", "text": "paroxetine" },
        { "id": "d", "text": "sertraline" },
        { "id": "e", "text": "Quetiapine" }
      ],
      "correctId": "d",
      "explanation": "Clinical practice guidelines recommend fluoxetine, sertraline, or citalopram for pregnant persons with anxiety or depression. Paroxetine should be avoided due to the risk of cardiovascular malformations."
    }
  ],
  'depressive': [
    {
      "id": "q1",
      "question": "1- An antidepressant drug that can cause anticholinergic side effects (eg. dry mouth, blurred vision, constipation), and sedation is",
      "options": [
        {
          "id": "a",
          "text": "Fluoxetine"
        },
        {
          "id": "b",
          "text": "Amitriptyline"
        },
        {
          "id": "c",
          "text": "Escitalopram"
        },
        {
          "id": "d",
          "text": "Sertraline"
        },
        {
          "id": "e",
          "text": "Trazodone"
        }
      ],
      "correctId": "b",
      "explanation": "Amitriptyline is a tricyclic antidepressant (TCA) known for significant anticholinergic and sedative side effects compared to newer SSRIs."
    },
    {
      "id": "q6",
      "question": "6- A breast feeding woman was diagnosed to have depression. Which one of the following antidepressant drugs is the preferred one in this case?",
      "options": [
        {
          "id": "a",
          "text": "Sertraline"
        },
        {
          "id": "b",
          "text": "Fluoxetine"
        },
        {
          "id": "c",
          "text": "Duloxetine"
        },
        {
          "id": "d",
          "text": "Mirtazapine"
        },
        {
          "id": "e",
          "text": "Bupropion"
        }
      ],
      "correctId": "a",
      "explanation": "Sertraline is generally considered the preferred SSRI for breastfeeding women because it has very low excretion into breast milk relative to other antidepressants."
    },
    {
      "id": "q16",
      "question": "16- A young woman suffered from depression. She has a history of anorexia nervosa. What is the antidepressant that should not be used for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Sertraline"
        },
        {
          "id": "b",
          "text": "Imipramine"
        },
        {
          "id": "c",
          "text": "Bupropion"
        },
        {
          "id": "d",
          "text": "Mirtazapine"
        },
        {
          "id": "e",
          "text": "Duloxetine"
        }
      ],
      "correctId": "c",
      "explanation": "Bupropion is associated with a dose-related risk of seizures and is strictly contraindicated in patients with eating disorders like anorexia or bulimia due to electrolyte imbalances."
    },
    {
      "id": "q20",
      "question": "20- A patient with severe depression and history of arrhythmia and uncontrolled hypertension. He was treated by fluoxetine. Despite good adherence to therapy by this patient to fluoxetine but no response was detected. What is the best action here?",
      "options": [
        {
          "id": "a",
          "text": "Increase fluoxetine dose"
        },
        {
          "id": "b",
          "text": "Changing treatment to amitriptyline"
        },
        {
          "id": "c",
          "text": "Addition of psychotherapy"
        },
        {
          "id": "d",
          "text": "Addition of imipramine"
        },
        {
          "id": "e",
          "text": "Addition of venlafaxine"
        }
      ],
      "correctId": "c",
      "explanation": "Given the patient's history of arrhythmia and uncontrolled hypertension, adding psychotherapy is the safest and most effective option to augment therapy without adding cardiovascular risks."
    },
    {
      "id": "q21",
      "question": "21- The patient who was prescribed antidepressant agent must be monitored regularly for adverse effects. A pretreatment ECG is recommended before starting which one of the following antidepressant drugs",
      "options": [
        {
          "id": "a",
          "text": "Imipramine"
        },
        {
          "id": "b",
          "text": "Fluoxetine"
        },
        {
          "id": "c",
          "text": "Duloxetine"
        },
        {
          "id": "d",
          "text": "Mirtazapine"
        },
        {
          "id": "e",
          "text": "Bupropion"
        }
      ],
      "correctId": "a",
      "explanation": "Tricyclic antidepressants (TCAs) like imipramine can cause severe cardiac conduction delays and arrhythmias, making a baseline ECG highly recommended."
    },
    {
      "id": "q28",
      "question": "28- In regard to the clinical presentation of depression. Which one of the followings is a physical symptom for depression?",
      "options": [
        {
          "id": "a",
          "text": "Headache"
        },
        {
          "id": "b",
          "text": "Confusion"
        },
        {
          "id": "c",
          "text": "Suicidal thinking"
        },
        {
          "id": "d",
          "text": "Crying"
        },
        {
          "id": "e",
          "text": "Hopelessness"
        }
      ],
      "correctId": "a",
      "explanation": "Depression can manifest with a variety of physical symptoms, including unexplained headaches, chronic pain, and severe fatigue."
    },
    {
      "id": "q46",
      "question": "46- In regard to diagnosis of depression. Which one of the followings is the Diagnostic Criteria for Major Depressive Episode?",
      "options": [
        {
          "id": "a",
          "text": "At least five symptoms must be consistently present (nearly every day) over a 2- week period"
        },
        {
          "id": "b",
          "text": "At least two symptoms must be consistently present (nearly every day) over a 2- week period"
        },
        {
          "id": "c",
          "text": "At least five symptoms must be consistently present (nearly every day) over a 6- week period"
        },
        {
          "id": "d",
          "text": "At least two symptoms must be consistently present (nearly every day) over a 5- week period"
        },
        {
          "id": "e",
          "text": "At least five symptoms must be intermittently present over a 2- week period"
        }
      ],
      "correctId": "a",
      "explanation": "According to the DSM-5 criteria, diagnosing a major depressive episode requires the consistent presence of at least five symptoms over a two-week period."
    },
    {
      "id": "q50",
      "question": "50- The most common adverse effect profile of the SSR is includes:",
      "options": [
        {
          "id": "a",
          "text": "sedation"
        },
        {
          "id": "b",
          "text": "sexual dysfunction"
        },
        {
          "id": "c",
          "text": "weight loss"
        },
        {
          "id": "d",
          "text": "delusion"
        },
        {
          "id": "e",
          "text": "headache"
        }
      ],
      "correctId": "b",
      "explanation": "While SSRIs can cause a range of side effects, sexual dysfunction (including decreased libido and anorgasmia) is one of the most common and persistent complaints."
    },

    {
      "id": "q12",
      "question": "12- Some medications interact with MAOIs and can cause fatal hypertensive crisis. One of the following medications does not cause fatal hypertensive crisis if it is taken concurrently with MAOIs:",
      "options": [
        { "id": "a", "text": "Dextromethorphan" },
        { "id": "b", "text": "Aspirin" },
        { "id": "c", "text": "Carbamazepine" },
        { "id": "d", "text": "Amphetamine" },
        { "id": "e", "text": "Pseudoephedrine" }
      ],
      "correctId": "b",
      "explanation": "Hypertensive crises with MAOIs are triggered by tyramine-rich foods or medications like decongestants (pseudoephedrine), stimulants (amphetamines), and certain other antidepressants. Aspirin is not identified as a medication that triggers this fatal interaction."
    },
    {
      "id": "q29",
      "question": "29- R.D is 44 years old man with negative past medical history, came to the psychiatry clinic complaining of diminished ability to experience pleasure, loss of interest in usual activities, sadness, pessimism, crying, hopelessness, anxiety, feelings of worthlessness. He also reported Weight gain, fatigue, headache, sleep disturbance, increased appetite, and loss of sexual interest. Given the likely diagnosis, what is the first line treatment option?",
      "options": [
        { "id": "a", "text": "Escitalopram" },
        { "id": "b", "text": "Bupropion" },
        { "id": "c", "text": "Imipramine" },
        { "id": "d", "text": "Trazodone" },
        { "id": "e", "text": "Mirtazapine" }
      ],
      "correctId": "a",
      "explanation": "For a patient presenting with Major Depressive Disorder (MDD), SSRIs (like Escitalopram) are generally chosen as first-line antidepressants due to their safety profile and superior tolerability compared to older agents like TCAs (imipramine)."
    },
    {
      "id": "q39",
      "question": "39- Regarding antidepressants administration for the treatment of major depressive disorder, the following statements are true EXCEPT:",
      "options": [
        { "id": "a", "text": "Antidepressants are equal in efficacy when administered in comparable doses." },
        { "id": "b", "text": "The initial choice of antidepressant is often made empirically." },
        { "id": "c", "text": "Older patients can be given the same initial dose given to younger adults." },
        { "id": "d", "text": "At least a 6-week trial of an antidepressant at maximum dosage is considered an adequate trial." },
        { "id": "e", "text": "An individual’s pharmacogenomics may be useful when choosing therapy." }
      ],
      "correctId": "c",
      "explanation": "This statement is incorrect because older patients should be given one-half of the initial dose given to younger adults, and the dose should be increased more slowly."
    },
    {
      "id": "q88",
      "question": "88- R.S is a young adult man who suffers from depression symptoms. According to monoamine hypothesis, the brain level of serotonin and norepinephrine is",
      "options": [
        { "id": "a", "text": "Both are increased" },
        { "id": "b", "text": "Not affected" },
        { "id": "c", "text": "Both are decreased" },
        { "id": "d", "text": "Both are slightly increased" },
        { "id": "e", "text": "Serotonin is decreased and norepinephrine is increased" }
      ],
      "correctId": "c",
      "explanation": "The monoamine hypothesis suggests that depression is caused by decreased brain levels of neurotransmitters, specifically norepinephrine, serotonin, and dopamine."
    },
    {
      "id": "q89",
      "question": "89- A 25 years old pregnant woman with depression. Why the physician did not prescribe her paroxetine?",
      "options": [
        { "id": "a", "text": "Because of its effect to increase birth weight" },
        { "id": "b", "text": "Because of its effect to cause respiratory distress" },
        { "id": "c", "text": "Because it has limited benefit for pregnant women" },
        { "id": "d", "text": "Because of its short duration of action" },
        { "id": "e", "text": "All of the above" }
      ],
      "correctId": "b",
      "explanation": "While paroxetine is specifically avoided due to cardiovascular malformation risk, the sources also list respiratory distress as a general risk reported with SSRI use (which includes paroxetine) during pregnancy. Choice (b) is the most relevant clinical adverse effect mentioned among the options."
    },
    {
      "id": "q90",
      "question": "90- G.A. is 45 years old man with depression who is not responding to treatment by paroxetine. All of the following options are suitable to manage GA case EXCEPT:",
      "options": [
        { "id": "a", "text": "Changing paroxetine to amitriptyline" },
        { "id": "b", "text": "Changing paroxetine to duloxetine" },
        { "id": "c", "text": "Addition of psychotherapy" },
        { "id": "d", "text": "Addition of ECT" },
        { "id": "e", "text": "Increasing paroxetine dose" }
      ],
      "correctId": "e",
      "explanation": "The question asks for options for a patient who is not responding (non-responder). According to the sources, for patients with no response, the recommended options are changing to another antidepressant (like amitriptyline or duloxetine) or adding psychotherapy/ECT. Increasing the dose is a strategy specifically recommended for partial responders, not those with no response."
    },
    {
      "id": "q91",
      "question": "91- D.K is 54 years old man diagnosed to have major depression. The physician ordered ECG before prescribing a drug to this patient. What do you expect the drug that the physician prescribed for D.K?",
      "options": [
        { "id": "a", "text": "Fluoxetine" },
        { "id": "b", "text": "Imipramine" },
        { "id": "c", "text": "Venlafaxine" },
        { "id": "d", "text": "Phenelzine" },
        { "id": "e", "text": "Bupropion" }
      ],
      "correctId": "b",
      "explanation": "A pretreatment ECG is recommended before starting Tricyclic Antidepressants (TCAs) like imipramine, especially in patients over 40 years of age, due to the risk of cardiac conduction delays."
    },
    {
      "id": "q92",
      "question": "92- A depressed man with a history of epilepsy was prescribed paroxetine. After few months of treatment, he noticed improvement in his depression but with increase in sexual dysfunction. What is the best alternative drug for this patient?",
      "options": [
        { "id": "a", "text": "Desimpramine" },
        { "id": "b", "text": "Bupropion" },
        { "id": "c", "text": "Mirtazapine" },
        { "id": "d", "text": "Escitalopram" },
        { "id": "e", "text": "Phenelzine" }
      ],
      "correctId": "c",
      "explanation": "Paroxetine and other SSRIs often cause sexual dysfunction. Mirtazapine is an excellent alternative for patients experiencing sexual dysfunction. While bupropion also has low sexual side effects, it is contraindicated or used with extreme caution in patients with a history of seizures/epilepsy as it can lower the seizure threshold."
    },
    {
      "id": "q96",
      "question": "96- Which of the following clinical presentations of depression is more common in pediatric",
      "options": [
        { "id": "a", "text": "Loss of pleasure" },
        { "id": "b", "text": "Loss of interest" },
        { "id": "c", "text": "Depressed mood" },
        { "id": "d", "text": "Irritability" },
        { "id": "e", "text": "A and B" }
      ],
      "correctId": "d",
      "explanation": "While depressed mood or loss of interest is required for adults, the diagnostic criteria specify that irritable mood can be the presenting symptom in children and adolescents. Other pediatric symptoms include boredom and failing adjustment."
    }
  ],
  'schizophrenia': [
    {
      "id": "q2",
      "question": "2- P.S Is 22 years old female with history of the following symptoms: Hallucinations; delusions; illogical conversation; autistic thinking: uncooperativeness, physical aggression; impaired self- care skills; and disturbed steep and appetite. P.S is in the emergency department now, she is severely agitated, shouting and being uncooperative with the staff. What is the best treatment that should be administered to this patient in the emergency department?",
      "options": [
        {
          "id": "a",
          "text": "Oral Lorazepam"
        },
        {
          "id": "b",
          "text": "IM Diazepam"
        },
        {
          "id": "c",
          "text": "IM Haloperidol"
        },
        {
          "id": "d",
          "text": "oral Clozapine"
        },
        {
          "id": "e",
          "text": "IV Phenytoin"
        }
      ],
      "correctId": "c",
      "explanation": "For a severely agitated and aggressive patient in the emergency department, IM haloperidol provides rapid and effective tranquilization with an established safety profile."
    },
    {
      "id": "q10",
      "question": "10- 27years old patient with the following symptoms: Hallucinations; delusions; illogical conversation; Autistic thinking uncooperativeness, physical aggression, impaired Self- care skills, and disturbed sleep and appetite, her parents are concerned about her suicidal attempts. Which antipsychotic medication is best used to address suicidal behavior?",
      "options": [
        {
          "id": "a",
          "text": "Haloperidol"
        },
        {
          "id": "b",
          "text": "Quetiapine"
        },
        {
          "id": "c",
          "text": "Risperidone"
        },
        {
          "id": "d",
          "text": "Aripiprazole"
        },
        {
          "id": "e",
          "text": "Clozapine"
        }
      ],
      "correctId": "e",
      "explanation": "Clozapine is the only antipsychotic medication with an FDA indication for reducing the risk of recurrent suicidal behavior in patients with schizophrenia."
    },
    {
      "id": "q12",
      "question": "12- Regarding Schizophrenia many factors can cause it. The following represent pathophysiology of schizophrenia, EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Genetic predisposition"
        },
        {
          "id": "b",
          "text": "Defect in epinephrine receptors"
        },
        {
          "id": "c",
          "text": "Obstetric complications with hypoxia"
        },
        {
          "id": "d",
          "text": "Alterations in glutamatergic neurotransmission"
        },
        {
          "id": "e",
          "text": "Autoimmune disorder"
        }
      ],
      "correctId": "b",
      "explanation": "The pathophysiology of schizophrenia is complex but primarily involves alterations in dopaminergic and glutamatergic neurotransmission, not epinephrine receptor defects."
    },
    {
      "id": "q15",
      "question": "15- A 33- year- old female is brought to the emergency department by her mother. The patient had a sudden onset of fever and her temperature is now \\(40^{\\circ}C\\) (104F). She has no sick contacts. The mother mentions that she is on a medication for schizophrenia but could not remember the name. A complete blood count shows 250 neutrophils per microliter. (normal 2500 and 7500 neutrophils per microliter). Which of the following medications is she likely taking?",
      "options": [
        {
          "id": "a",
          "text": "Clozapine"
        },
        {
          "id": "b",
          "text": "Olanzapine"
        },
        {
          "id": "c",
          "text": "Quetiapine"
        },
        {
          "id": "d",
          "text": "Risperidone"
        },
        {
          "id": "e",
          "text": "Haloperidol"
        }
      ],
      "correctId": "a",
      "explanation": "The presentation of severe fever and profound neutropenia in a patient taking an antipsychotic is a hallmark of clozapine-induced agranulocytosis, a life-threatening emergency."
    },
    {
      "id": "q33",
      "question": "33- Regarding schizophrenia: Symptom domains that are characteristic of a diagnosis of schizophrenia include all of the following EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "Cognitive impairment."
        },
        {
          "id": "b",
          "text": "Musculoskeletal problems"
        },
        {
          "id": "c",
          "text": "Social isolation"
        },
        {
          "id": "d",
          "text": "Talking to someone who is not there."
        },
        {
          "id": "e",
          "text": "Hearing abnormal voices."
        }
      ],
      "correctId": "b",
      "explanation": "Schizophrenia is characterized by positive symptoms (hallucinations), negative symptoms (social isolation), and cognitive impairment, but primary musculoskeletal problems are not inherently part of the diagnosis."
    },
    {
      "id": "q34",
      "question": "34- Regarding treatment of schizophrenia: Which of the following antipsychotics is the appropriate choice for the treatment of an individual with schizophrenia in its first psychotic break?",
      "options": [
        {
          "id": "a",
          "text": "Clozapine."
        },
        {
          "id": "b",
          "text": "Perphenazine + Ziprasidone"
        },
        {
          "id": "c",
          "text": "Chlorpromazine."
        },
        {
          "id": "d",
          "text": "Risperidone"
        },
        {
          "id": "e",
          "text": "There is no need for such therapy"
        }
      ],
      "correctId": "d",
      "explanation": "For a first psychotic break, guidelines recommend avoiding clozapine or combinations initially; risperidone is a standard, appropriate first-line atypical antipsychotic."
    },
    {
      "id": "q39",
      "question": "39- Best drug for treatment of resistant schizophrenia is",
      "options": [
        {
          "id": "a",
          "text": "olanzapine"
        },
        {
          "id": "b",
          "text": "clozapine"
        },
        {
          "id": "c",
          "text": "carbamazepine"
        },
        {
          "id": "d",
          "text": "haloperidol"
        },
        {
          "id": "e",
          "text": "sertraline"
        }
      ],
      "correctId": "b",
      "explanation": "Clozapine is the gold-standard and most effective drug for treatment-resistant schizophrenia after sequential trials of typical and atypical agents have failed."
    },
    {
      "id": "q40",
      "question": "40- Which the following perpetration are not intended be given to schizophrenic mothers during breastfeeding?",
      "options": [
        {
          "id": "a",
          "text": "Aripiprazole"
        },
        {
          "id": "b",
          "text": "Perphenazine"
        },
        {
          "id": "c",
          "text": "Trifluroperazine."
        },
        {
          "id": "d",
          "text": "Clozapine"
        },
        {
          "id": "e",
          "text": "Quetiapine"
        }
      ],
      "correctId": "d",
      "explanation": "Clozapine is generally contraindicated during breastfeeding due to the severe risk of drug-induced agranulocytosis and excessive sedation in the nursing infant."
    },

    {
      "id": "q3",
      "question": "3- A patient was admitted to hospital due to acute psychotic episode. Which one of the following features is a typical residual feature after the acute psychotic episode has resolved?",
      "options": [
        {
          "id": "a",
          "text": "Hallucination"
        },
        {
          "id": "b",
          "text": "Delusion"
        },
        {
          "id": "c",
          "text": "Disconnected thought processes"
        },
        {
          "id": "d",
          "text": "Anxiety"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "d",
      "explanation": "The sources state that after an acute psychotic episode has resolved, residual features may include anxiety, suspiciousness, lack of motivation, and poor insight."
    },
    {
      "id": "q26",
      "question": "26- The drug of choice for patients with Schizophrenia, who had inadequate clinical response with two appropriate antipsychotic drugs:",
      "options": [
        {
          "id": "a",
          "text": "Aripiprazole"
        },
        {
          "id": "b",
          "text": "Clozapine"
        },
        {
          "id": "c",
          "text": "Quetiapine"
        },
        {
          "id": "d",
          "text": "Risperidone injection"
        },
        {
          "id": "e",
          "text": "Use combination of first- and second-generation antipsychotic drugs"
        }
      ],
      "correctId": "b",
      "explanation": "Clozapine monotherapy is specifically recommended in Stage 3 for patients who have had an inadequate response to at least two other antipsychotic trials."
    },
    {
      "id": "q27",
      "question": "27- Initial therapy for schizophrenia to be successful, should be characterized by the following, EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "normalization of sleep and eating is the main goal"
        },
        {
          "id": "b",
          "text": "agitation, hostility, anxiety, and aggression should be decreased within the first 7 days"
        },
        {
          "id": "c",
          "text": "Aripiprazole or ziprasidone can be used to calm agitated patients"
        },
        {
          "id": "d",
          "text": "Combining IM lorazepam with olanzapine or clozapine is recommended for patients with severe symptoms"
        },
        {
          "id": "e",
          "text": "Recently, Inhaled loxapine powder, FDA-approved for acute agitation associated with schizophrenia"
        }
      ],
      "correctId": "d",
      "explanation": "The sources explicitly state that combining IM lorazepam with olanzapine or clozapine is NOT recommended because of the risk of hypotension and respiratory depression."
    },
    {
      "id": "q85",
      "question": "85- A young adult suspected to have schizophrenia. Which one of the following set of symptoms if present for $\\ge 1$ month can confirm the diagnosis of schizophrenia?",
      "options": [
        {
          "id": "a",
          "text": "Delusion and impaired attention"
        },
        {
          "id": "b",
          "text": "Catatonic behavior and anhedonia"
        },
        {
          "id": "c",
          "text": "Disorganized speech and catatonic behavior"
        },
        {
          "id": "d",
          "text": "Hallucinations and impaired memory"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "c",
      "explanation": "Diagnosis (Criterion A) requires at least two symptoms for one month, including delusions, hallucinations, disorganized speech, and grossly disorganized or catatonic behavior."
    },
    {
      "id": "q86",
      "question": "86- H.K is a 28 years old woman was recently diagnosed to have schizophrenia. She also suffers from menstrual irregularities due to hyperprolactinemia. Which one of the following drugs is the preferred first line therapy for HK?",
      "options": [
        {
          "id": "a",
          "text": "Ziprasidone"
        },
        {
          "id": "b",
          "text": "Haloperidol"
        },
        {
          "id": "c",
          "text": "Risperidone"
        },
        {
          "id": "d",
          "text": "Aripiprazole"
        },
        {
          "id": "e",
          "text": "Clozapine"
        }
      ],
      "correctId": "d",
      "explanation": "Aripiprazole is among the antipsychotics with a low risk for extrapyramidal symptoms and hyperprolactinemia. Conversely, risperidone is known to increase prolactin levels."
    },
    {
      "id": "q87",
      "question": "87- K.K is 47 years old man. His schizophrenia is treated by olanzapine. Olanzapine has a high risk for developing all these side effects EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Blurred vision"
        },
        {
          "id": "b",
          "text": "New onset diabetes"
        },
        {
          "id": "c",
          "text": "Dyslipidemia"
        },
        {
          "id": "d",
          "text": "Pseudoparkinsonism"
        },
        {
          "id": "e",
          "text": "Weight gain"
        }
      ],
      "correctId": "d",
      "explanation": "Olanzapine is associated with high risks of metabolic side effects (weight gain, diabetes, dyslipidemia) and anticholinergic effects like blurred vision. The risk of extrapyramidal symptoms (like pseudoparkinsonism) is generally lower for SGAs like olanzapine compared to FGAs."
    },
    {
      "id": "q99",
      "question": "99- concerning schizophrenia. The followings are negative symptoms, EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "illusions"
        },
        {
          "id": "b",
          "text": "alogia"
        },
        {
          "id": "c",
          "text": "anhedonia"
        },
        {
          "id": "d",
          "text": "social isolation"
        },
        {
          "id": "e",
          "text": "avolition"
        }
      ],
      "correctId": "a",
      "explanation": "Illusions/hallucinations and delusions are positive symptoms. Alogia, avolition, anhedonia, and social isolation are categorized as negative symptoms."
    },
    {
      "id": "q103",
      "question": "103- Different neurotransmitter play role in schizophrenia. The significant one is:",
      "options": [
        {
          "id": "a",
          "text": "Serotonin"
        },
        {
          "id": "b",
          "text": "Dopamine"
        },
        {
          "id": "c",
          "text": "Acetylcholine"
        },
        {
          "id": "d",
          "text": "GABA"
        },
        {
          "id": "e",
          "text": "epinephrine"
        }
      ],
      "correctId": "b",
      "explanation": "The dopamine receptor defect and hyperactivity/hypofunction in specific brain regions are central to the pathophysiology of schizophrenia."
    },
    {
      "id": "q106",
      "question": "106- Which antipsychotic medication carries the highest risk of neutropenia and agranulocytosis, necessitating regular blood monitoring during treatment?",
      "options": [
        {
          "id": "a",
          "text": "Risperidone"
        },
        {
          "id": "b",
          "text": "Olanzapine"
        },
        {
          "id": "c",
          "text": "Clozapine"
        },
        {
          "id": "d",
          "text": "Paliperidone"
        },
        {
          "id": "e",
          "text": "Haloperidol"
        }
      ],
      "correctId": "c",
      "explanation": "Clozapine is contraindicated for nursing mothers due to the risk of severe neutropenia and requires strict monitoring."
    },
    {
      "id": "q110",
      "question": "110- Which of the following statements about the use of antipsychotics in pregnancy is accurate?",
      "options": [
        {
          "id": "a",
          "text": "All antipsychotics are completely safe to use throughout pregnancy"
        },
        {
          "id": "b",
          "text": "Haloperidol has been the most studied first-generation antipsychotic in pregnancy"
        },
        {
          "id": "c",
          "text": "Second-generation antipsychotics significantly increase the risk of congenital malformations"
        },
        {
          "id": "d",
          "text": "Antipsychotics should never be used during pregnancy under any circumstance"
        },
        {
          "id": "e",
          "text": "In utero exposure to antipsychotics has no effect on neonatal outcomes"
        }
      ],
      "correctId": "b",
      "explanation": "The sources state that Haloperidol is the best studied FGA in pregnancy with approximately 400 reported exposures."
    }
  ],
  'insomnia': [
    {
      "id": "q9",
      "question": "9- Obstructive sleep apnea (OSA) is potentially life- threatening and characterized by repeated episodes of nocturnal breathing cessation followed by blood oxygen desaturation. Which one of the following drugs are approved by the FDA to improve wakefulness in those with residual daytime sleepiness. They should be used only in patients without cardiovascular disease who are using optimal PAP therapy.",
      "options": [
        {
          "id": "a",
          "text": "Imipramine"
        },
        {
          "id": "b",
          "text": "Clomipramine"
        },
        {
          "id": "c",
          "text": "Fluoxetine"
        },
        {
          "id": "d",
          "text": "Modafinil"
        },
        {
          "id": "e",
          "text": "Nortriptyline"
        }
      ],
      "correctId": "d",
      "explanation": "Modafinil is a wakefulness-promoting agent approved to treat residual excessive daytime sleepiness in OSA patients who are already optimally treated with positive airway pressure (PAP)."
    },
    {
      "id": "q11",
      "question": "11- AK. is 66 years old male patient with history of depression, arrhythmia, and substance abuse. What is the best treatment for treating insomnia for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Quazepam"
        },
        {
          "id": "b",
          "text": "Trazodone"
        },
        {
          "id": "c",
          "text": "Triazolam"
        },
        {
          "id": "d",
          "text": "Suvorexant"
        },
        {
          "id": "e",
          "text": "Amitriptyline"
        }
      ],
      "correctId": "b",
      "explanation": "For an elderly patient with a history of depression, arrhythmia, and substance abuse, trazodone is heavily favored off-label for insomnia because it possesses sedating properties, combats depression, and avoids benzodiazepine abuse liability."
    },
    {
      "id": "q29",
      "question": "29- An elderly patient who has difficulty in sleep with frequent nighttime awakenings. What is the best treatment for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Zalepon"
        },
        {
          "id": "b",
          "text": "Zolpidem"
        },
        {
          "id": "c",
          "text": "Triazolam"
        },
        {
          "id": "d",
          "text": "Flurazepam"
        },
        {
          "id": "e",
          "text": "Quazepam"
        }
      ],
      "correctId": "a",
      "explanation": "For an elderly patient with difficulty maintaining sleep, short-acting agents like zaleplon are often favored as they help initiate sleep rapidly with less risk of morning hangover and falls."
    },
    {
      "id": "q42",
      "question": "42- DP is a 46- year- old woman who presents with a complaint of difficulty initiating sleep. After a careful sleep history, you rule out other potential sleep disorders and want to start her on drug therapy for her insomnia. Which of the following would be the best recommendation?",
      "options": [
        {
          "id": "a",
          "text": "Amitriptyline 10 mg at bedtime"
        },
        {
          "id": "b",
          "text": "Flurazepam 15 mg at bedtime"
        },
        {
          "id": "c",
          "text": "Zaleplon 5 mg at bedtime"
        },
        {
          "id": "d",
          "text": "Doxepin 3 mg at bedtime"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "c",
      "explanation": "For difficulty initiating sleep, a medication with a rapid onset and short half-life like zaleplon is ideal to prevent daytime grogginess."
    },
    {
      "id": "q22",
      "question": "22- M.M is 38 years old patient presented to the sleep hygienist with excessive day time sleepiness (EDS), sleep attacks that last up to 30 minutes, fatigue, impaired performance, and disturbed nighttime sleep. He was diagnosed with Narcolepsy. Which one of the following is the standard of treatment of EDS?",
      "options": [
        {
          "id": "a",
          "text": "Modafinil"
        },
        {
          "id": "b",
          "text": "Atomoxetine"
        },
        {
          "id": "c",
          "text": "Fluoxetine"
        },
        {
          "id": "d",
          "text": "Imipramine"
        },
        {
          "id": "e",
          "text": "Amphetamine"
        }
      ],
      "correctId": "a",
      "explanation": "Modafinil is the first-line, standard pharmacologic treatment for excessive daytime sleepiness in narcolepsy due to its efficacy and favorable side effect profile compared to classic amphetamines."
    },

    {
      "id": "q68",
      "question": "68- A.J. is 53 years old man who suffers from insomnia in the last 2.5 months. What can you consider the type of insomnia for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Short term"
        },
        {
          "id": "b",
          "text": "Transient"
        },
        {
          "id": "c",
          "text": "Long term"
        },
        {
          "id": "d",
          "text": "Chronic"
        },
        {
          "id": "e",
          "text": "Persistent"
        }
      ],
      "correctId": "a",
      "explanation": "Short-term insomnia is defined as lasting less than 3 months."
    },
    {
      "id": "q69",
      "question": "69- A patient with chronic insomnia was treated by zolpidem and educated about sleep hygiene. Which one of the following statements regarding the evaluation of therapeutic outcome for this patient is true?",
      "options": [
        {
          "id": "a",
          "text": "After 1 week of therapy, the patient should be assessed for drug adherence, effectiveness, and adverse events"
        },
        {
          "id": "b",
          "text": "After 7 days of therapy, the patient should be assessed for drug effectiveness, adverse events, and adherence to non-pharmacologic recommendations"
        },
        {
          "id": "c",
          "text": "After 1 week of therapy, the patient should be assessed for drug effectiveness, and adverse events"
        },
        {
          "id": "d",
          "text": "After 1 month of therapy, the patient should be assessed for drug effectiveness, adverse events, and adherence to non-pharmacologic recommendations"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "b",
      "explanation": "Patients with chronic insomnia should be assessed after 1 week for effectiveness, adverse events, and adherence to non-pharmacologic recommendations."
    }
  ],
  'contraception': [
    {
      "id": "q54",
      "question": "54- Many methods exist for initiating oral contraceptive pills. The method of initiating first pill in the same day of physician visit is:",
      "options": [
        {
          "id": "a",
          "text": "Quick start method"
        },
        {
          "id": "b",
          "text": "Flexible method"
        },
        {
          "id": "c",
          "text": "First day start method"
        },
        {
          "id": "d",
          "text": "Sunday start method"
        },
        {
          "id": "e",
          "text": "Clinic and pharmacy method"
        }
      ],
      "correctId": "a",
      "explanation": "The 'Quick Start' method refers to the practice of taking the first hormonal contraceptive pill on the exact day of the clinic visit to improve compliance."
    },
    {
      "id": "q57",
      "question": "57- A 23 years old female is diagnosed to have amenorrhea due to hyperprolactinemia. The drug of choice is",
      "options": [
        {
          "id": "a",
          "text": "Estrogen/progestin pills"
        },
        {
          "id": "b",
          "text": "Progestin only pills"
        },
        {
          "id": "c",
          "text": "Dopamine agonists"
        },
        {
          "id": "d",
          "text": "NSAIDs"
        },
        {
          "id": "e",
          "text": "Insulin sensitizing drugs"
        }
      ],
      "correctId": "c",
      "explanation": "Hyperprolactinemia (high prolactin levels) causing amenorrhea is best treated centrally with dopamine agonists like cabergoline or bromocriptine to suppress prolactin secretion."
    },
    {
      "id": "q80",
      "question": "80- Emergency contraceptives should be taken after unprotected intercourse to prevent unintended pregnancy. Ulipristal should be taken within",
      "options": [
        {
          "id": "a",
          "text": "5 minutes"
        },
        {
          "id": "b",
          "text": "5 hours"
        },
        {
          "id": "c",
          "text": "5 days"
        },
        {
          "id": "d",
          "text": "10 days"
        },
        {
          "id": "e",
          "text": "14 days."
        }
      ],
      "correctId": "c",
      "explanation": "Ulipristal acetate is a progesterone receptor modulator that can be used effectively for emergency contraception up to 5 days (120 hours) following unprotected intercourse."
    },
    {
      "id": "q84",
      "question": "84- Regarding contraception: All of the following contraception methods can prevent pregnancy by inhibiting sperm from reaching a mature ovum EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "Condom."
        },
        {
          "id": "b",
          "text": "Cervical cap."
        },
        {
          "id": "c",
          "text": "Transdermal contraceptive patch"
        },
        {
          "id": "d",
          "text": "Diaphragm."
        },
        {
          "id": "e",
          "text": "Vaginal sponge."
        }
      ],
      "correctId": "c",
      "explanation": "Barrier methods (condom, cervical cap, diaphragm, sponge) physically prevent sperm from reaching the mature ovum, whereas the transdermal patch prevents ovulation hormonally."
    },
    {
      "id": "q88",
      "question": "88- 16 years old girl with normal secondary sexual characteristics but with no menarche. This girl could be describe as having?",
      "options": [
        {
          "id": "a",
          "text": "Primary amenorrhoea"
        },
        {
          "id": "b",
          "text": "Oligomenorrhea"
        },
        {
          "id": "c",
          "text": "Dysmenorrhea"
        },
        {
          "id": "d",
          "text": "Secondary amenorrhoea"
        },
        {
          "id": "e",
          "text": "Endometriosis"
        }
      ],
      "correctId": "a",
      "explanation": "Primary amenorrhea is defined as the absence of menarche by age 15 or 16 in a girl who has completely normal secondary sexual characteristics."
    },
    {
      "id": "q93",
      "question": "93- Which of the following progesterone have antiandrogenic properties...",
      "options": [
        {
          "id": "a",
          "text": "desogestrel"
        },
        {
          "id": "b",
          "text": "norgestimate"
        },
        {
          "id": "c",
          "text": "northindrone"
        },
        {
          "id": "d",
          "text": "drospirinone"
        },
        {
          "id": "e",
          "text": "levonorgestrel"
        }
      ],
      "correctId": "d",
      "explanation": "Drospirenone is a unique progestin analog of spironolactone and therefore possesses significant antimineralocorticoid and antiandrogenic properties, limiting fluid retention and acne."
    },
    {
      "id": "q99",
      "question": "99- The followings should be taken into consideration for a woman over 35 years of age while taking combined hormonal contraceptives (CHCS) EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "Us CHCs containing less than 50 meg estrogen."
        },
        {
          "id": "b",
          "text": "Not recommended for women with migraine."
        },
        {
          "id": "c",
          "text": "Low dose of CHCs can be given safely to all women with a history of dyslipidemia"
        },
        {
          "id": "d",
          "text": "CHCs are not recommended for women with uncontrolled BP."
        },
        {
          "id": "e",
          "text": "CHCs are not preferred to be given to women with a history of diabetes and hypertension."
        }
      ],
      "correctId": "c",
      "explanation": "This statement is false because low-dose CHCs are not universally safe and are not recommended for all women with a history of dyslipidemia; careful assessment of cardiovascular risk is required."
    },

    {
      "id": "q5",
      "question": "5- In women with anovulatory bleeding with high androgen levels or signs of hyperandrogenism, the recommended combined hormonal contraceptives (CHCs) are the following except:",
      "options": [
        {
          "id": "a",
          "text": "CHCs containing 35 mcg or less ethinyl estradiol"
        },
        {
          "id": "b",
          "text": "CHCs containing levonorgestrel"
        },
        {
          "id": "c",
          "text": "CHCs containing norgestimate"
        },
        {
          "id": "d",
          "text": "CHCs containing drospirenone"
        },
        {
          "id": "e",
          "text": "CHCs containing desogestrel"
        }
      ],
      "correctId": "b",
      "explanation": "Women with high androgen levels should use CHCs with minimal androgenic side effects (norgestimate, desogestrel) or antiandrogenic effects (drospirenone). Levonorgestrel is an older progestin with higher androgenic activity."
    },
    {
      "id": "q6",
      "question": "6- Which of the following should be considered when selecting a CHC for a woman who has a history of migraines with aura:",
      "options": [
        {
          "id": "a",
          "text": "A lower dose of estrogen"
        },
        {
          "id": "b",
          "text": "A higher dose of estrogen"
        },
        {
          "id": "c",
          "text": "A progestin-only contraceptive method"
        },
        {
          "id": "d",
          "text": "combined estrogen plus progesterone pills"
        },
        {
          "id": "e",
          "text": "none of the above"
        }
      ],
      "correctId": "c",
      "explanation": "Individuals of any age who have migraine with aura should NOT use CHCs due to the risk of stroke and should consider a progestin-only option."
    },
    {
      "id": "q30",
      "question": "30- T.D is 37 years old female with negative past medical history, T.D is a smoker that smokes 15-20 cigarettes per day. She came to the women health clinic asking for an effective short-term contraceptive. What will be the best contraception method for T.D?",
      "options": [
        {
          "id": "a",
          "text": "CHC with low dose estrogen"
        },
        {
          "id": "b",
          "text": "CHC with high dose estrogen"
        },
        {
          "id": "c",
          "text": "Transdermal patches"
        },
        {
          "id": "d",
          "text": "Progestin only contraceptive"
        },
        {
          "id": "e",
          "text": "Paragard"
        }
      ],
      "correctId": "d",
      "explanation": "Smoking 15 or more cigarettes per day by individuals over 35 years is a contraindication to the use of CHCs, and progestin-only methods (or non-hormonal methods like IUDs) should be considered."
    },
    {
      "id": "q32",
      "question": "32- What is the type should not be left in place for more than 24 hours because of the risk of toxic shock syndrome?",
      "options": [
        {
          "id": "a",
          "text": "Diaphragms"
        },
        {
          "id": "b",
          "text": "cervical cap"
        },
        {
          "id": "c",
          "text": "Male condoms"
        },
        {
          "id": "d",
          "text": "Female condoms"
        },
        {
          "id": "e",
          "text": "Spermicide Implanted Barrier"
        }
      ],
      "correctId": "a",
      "explanation": "A diaphragm should not be left in place longer than 24 hours due to the risk of toxic shock syndrome (TSS)."
    },
    {
      "id": "q33",
      "question": "33- The following are the disadvantages of combined oral contraceptive pills, EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Increase the risk of blood clots."
        },
        {
          "id": "b",
          "text": "Irregular bleeding or spotting."
        },
        {
          "id": "c",
          "text": "Increase risk of endometrial cancer."
        },
        {
          "id": "d",
          "text": "Not suitable for breastfeeding women."
        },
        {
          "id": "e",
          "text": "Does not protect against sexual transmitted infections."
        }
      ],
      "correctId": "c",
      "explanation": "CHCs actually reduce the risk of ovarian and endometrial cancer."
    },
    {
      "id": "q38",
      "question": "38- IUD is well known to have minimal systemic adverse effects, that is attributed to the primary contraceptive mechanism of the Levonorgestrel IUS through:",
      "options": [
        {
          "id": "a",
          "text": "Negative feedback to the hypothalamus"
        },
        {
          "id": "b",
          "text": "Endometrial atrophy"
        },
        {
          "id": "c",
          "text": "Ovulatory Suppression"
        },
        {
          "id": "d",
          "text": "Apoptosis of gametes"
        },
        {
          "id": "e",
          "text": "All of the above"
        }
      ],
      "correctId": "b",
      "explanation": "The contraceptive activity of progestin-releasing IUDs is caused by endometrial suppression/atrophy and thickening of cervical mucus."
    },
    {
      "id": "q45",
      "question": "45- Which method of starting minipills involves taking the first pill on the day of the doctor office visit?",
      "options": [
        {
          "id": "a",
          "text": "Sunday start method"
        },
        {
          "id": "b",
          "text": "Quick start method"
        },
        {
          "id": "c",
          "text": "First-day start method"
        },
        {
          "id": "d",
          "text": "Emergency contraception method"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "b",
      "explanation": "The quick-start method involves initiating contraception on the day of the clinic visit, regardless of the timing of the menstrual cycle."
    },
    {
      "id": "q46",
      "question": "46- Ulipristal is a prescription selective progesterone receptor modulator. It is taken as a single dose of 30 mg within _______ hours of unprotected intercourse.",
      "options": [
        {
          "id": "a",
          "text": "24"
        },
        {
          "id": "b",
          "text": "48"
        },
        {
          "id": "c",
          "text": "72"
        },
        {
          "id": "d",
          "text": "96"
        },
        {
          "id": "e",
          "text": "120"
        }
      ],
      "correctId": "e",
      "explanation": "Ulipristal is taken within 120 hours (5 days) of unprotected intercourse."
    },
    {
      "id": "q50",
      "question": "50- S A, is a 29 y o woman weighing 98 kg (her ideal body weight is 60Kg), taking oral contraceptive pills but she is afraid from her poor adherence. As a pharmacist, what is the best contraception must be used?",
      "options": [
        {
          "id": "a",
          "text": "etonogestrel implant"
        },
        {
          "id": "b",
          "text": "DMPA"
        },
        {
          "id": "c",
          "text": "EE pills"
        },
        {
          "id": "d",
          "text": "mini pills"
        },
        {
          "id": "e",
          "text": "NuvaRing"
        }
      ],
      "correctId": "b",
      "explanation": "For obese individuals or those with adherence issues, long-acting methods like DMPA (injection), implants, or IUDs are beneficial as they have lower failure rates than CHCs."
    },
    {
      "id": "q51",
      "question": "51- Women with anovulatory bleeding from PCOS who are pursuing pregnancy. Women may be treated with:",
      "options": [
        {
          "id": "a",
          "text": "letrozole"
        },
        {
          "id": "b",
          "text": "ethinyl estradiol"
        },
        {
          "id": "c",
          "text": "Norgestimate"
        },
        {
          "id": "d",
          "text": "Desogestrel"
        },
        {
          "id": "e",
          "text": "Drospirenone"
        }
      ],
      "correctId": "a",
      "explanation": "Women with PCOS pursuing pregnancy may be treated with letrozole or clomiphene citrate for ovulation induction."
    },
    {
      "id": "q62",
      "question": "62- When is a levonorgestrel-releasing IUD considered a first-line treatment for dysmenorrhea?",
      "options": [
        {
          "id": "a",
          "text": "When combined with NSAIDs"
        },
        {
          "id": "b",
          "text": "When other CHCs haven't been effective"
        },
        {
          "id": "c",
          "text": "For dysmenorrhea secondary to endometriosis"
        },
        {
          "id": "d",
          "text": "Always the first-line treatment"
        },
        {
          "id": "e",
          "text": "Not recommended for treating dysmenorrhea"
        }
      ],
      "correctId": "b",
      "explanation": "According to the treatment algorithm, if NSAIDs and CHCs are not effective, long-acting progestins like the levonorgestrel-releasing IUD should be considered."
    },
    {
      "id": "q63",
      "question": "63- Which of these statements about the Twirla transdermal patch do you think is correct?",
      "options": [
        {
          "id": "a",
          "text": "It provides Ethinyl estradiol (EE) (35 mg) and levonorgestrel (150 mg) daily"
        },
        {
          "id": "b",
          "text": "It provides 0.35 mcg of EE and 120 mcg of norgestimate daily."
        },
        {
          "id": "c",
          "text": "EE (30 mcg) and levonorgestrel (120 mcg) are provided daily."
        },
        {
          "id": "d",
          "text": "It used to provide 120 mcg of norgestimate and 0.95 mg of EE daily."
        },
        {
          "id": "e",
          "text": "It provides 0.35 mg of EE and 0.15 mcg of levonorgestrel daily."
        }
      ],
      "correctId": "c",
      "explanation": "Based on the choices provided in the MCQ and standard pharmacology (as the patch details were brief in the text), Twirla provides 30 mcg of EE and 120 mcg of levonorgestrel daily."
    }
  ],
  'hrt': [
    {
      "id": "q58",
      "question": "58- Many types of medications can be used for treatment of post menopausal symptoms. The medication which has combined estrogenic, progestogenic, and androgenic activity and improves mood, menopausal symptoms, and vaginal atrophy.",
      "options": [
        {
          "id": "a",
          "text": "Citalopram"
        },
        {
          "id": "b",
          "text": "Tibolone"
        },
        {
          "id": "c",
          "text": "Dehydroepiandrosterone"
        },
        {
          "id": "d",
          "text": "Fluoxetine"
        },
        {
          "id": "e",
          "text": "Estradiol"
        }
      ],
      "correctId": "b",
      "explanation": "Tibolone is a synthetic steroid used in some countries for menopause that uniquely exhibits weak estrogenic, progestogenic, and androgenic properties to relieve symptoms and maintain bone density."
    },
    {
      "id": "q66",
      "question": "66- Estrogens have important roles in treatment of post menopausal symptoms. When compared to oral estrogen, transdermal estrogen is",
      "options": [
        {
          "id": "a",
          "text": "Less likely to increase triglycerides"
        },
        {
          "id": "b",
          "text": "Less likely to elevate blood pressure"
        },
        {
          "id": "c",
          "text": "Associated with lower risk of DVT"
        },
        {
          "id": "d",
          "text": "Associated with lower risk of MI"
        },
        {
          "id": "e",
          "text": "All"
        }
      ],
      "correctId": "e",
      "explanation": "Transdermal estrogen avoids the 'first-pass' hepatic effect, making it much less likely to elevate triglycerides or negatively impact coagulation parameters compared to oral estrogen."
    },
    {
      "id": "q83",
      "question": "83- Regarding menopause: Which of the following postmenopausal females can safely receive hormone replacement therapy?",
      "options": [
        {
          "id": "a",
          "text": "A 53 year- old female underwent mastectomy 10 years ago due to breast cancer."
        },
        {
          "id": "b",
          "text": "A 49 year- old female with a history of myocardial infarction one year ago."
        },
        {
          "id": "c",
          "text": "A 55 year- old female newly diagnosed with decompensated cirrhosis."
        },
        {
          "id": "d",
          "text": "A 54 year- old female with a stroke attack 6 months ago."
        },
        {
          "id": "e",
          "text": "A 51 year- old female with a history of peptic ulceration a year ago."
        }
      ],
      "correctId": "e",
      "explanation": "Standard contraindications to Hormone Replacement Therapy (HRT) include breast cancer, severe liver disease, and active cardiovascular, but a history of peptic ulcer disease is not a contraindication."
    },
    {
      "id": "q86",
      "question": "86- Contraindication to HRT include all the following EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "DVT"
        },
        {
          "id": "b",
          "text": "Breast cancer"
        },
        {
          "id": "c",
          "text": "Hypertriglycermia"
        },
        {
          "id": "d",
          "text": "Hot flush"
        },
        {
          "id": "e",
          "text": "Hypothyroidism"
        }
      ],
      "correctId": "d",
      "explanation": "A hot flush is one of the classic vasomotor symptoms of menopause and serves as a primary indication for HRT, rather than a contraindication."
    },
    {
      "id": "q101",
      "question": "101- Regarding hormonal replacement therapy, The benefits of hormonal replacement therapy include:",
      "options": [
        {
          "id": "a",
          "text": "Relief of moderate to severe vasomotor symptoms"
        },
        {
          "id": "b",
          "text": "Treatment of vulvo- vaginal atrophy"
        },
        {
          "id": "c",
          "text": "Short term therapy for prevention of postmenopausal osteoporosis"
        },
        {
          "id": "d",
          "text": "All of the above"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "d",
      "explanation": "Estrogen-based hormone replacement therapy offers comprehensive benefits including relief of severe vasomotor symptoms, treatment of vulvovaginal atrophy, and prevention of postmenopausal osteoporosis."
    },
    {
      "id": "q105",
      "question": "105- Addition of a progestene for estrogen replacement therapy in postmenopausal women is recommended because the",
      "options": [
        {
          "id": "a",
          "text": "blocks the increased risk of MI due to estrogen"
        },
        {
          "id": "b",
          "text": "blocks the increased risk of endometrial carcinoma due to estrogen"
        },
        {
          "id": "c",
          "text": "reverses vulval atrophy"
        },
        {
          "id": "d",
          "text": "enhances the metabolic benefits of estrogen"
        },
        {
          "id": "e",
          "text": "All of them"
        }
      ],
      "correctId": "b",
      "explanation": "In a woman with an intact uterus, unopposed estrogen significantly increases the risk of endometrial hyperplasia and carcinoma; adding a progestogen thoroughly blocks this excessive proliferation."
    },

    {
      "id": "q4",
      "question": "4- About menopause clinical presentation. Which of the following statements about menopause symptom(s) do you consider correct?",
      "options": [
        {
          "id": "a",
          "text": "hot flushes and night sweats"
        },
        {
          "id": "b",
          "text": "vaginal dryness and dyspareunia"
        },
        {
          "id": "c",
          "text": "sexual dysfunction"
        },
        {
          "id": "d",
          "text": "arthralgia"
        },
        {
          "id": "e",
          "text": "All are correct."
        }
      ],
      "correctId": "e",
      "explanation": "All the listed symptoms (vasomotor, urogenital, sexual, and joint pain) are part of the clinical presentation of menopause."
    },
    {
      "id": "q7",
      "question": "7- Regarding hormone therapy in menopausal females. Which of the following are serious health risks that have been associated with menopausal hormone therapy?",
      "options": [
        {
          "id": "a",
          "text": "High blood pressure and diabetes"
        },
        {
          "id": "b",
          "text": "Breast cancer and heart disease"
        },
        {
          "id": "c",
          "text": "Colon cancer and hyperthyroidism"
        },
        {
          "id": "d",
          "text": "Esophageal cancer and liver toxicity"
        },
        {
          "id": "e",
          "text": "All the above"
        }
      ],
      "correctId": "b",
      "explanation": "Serious adverse effects of MHT include an increased risk for stroke, VTE, and breast cancer (especially with combined progestogen use)."
    },
    {
      "id": "q25",
      "question": "25- Which one of the following is FDA approved for the treatment of moderate-to-severe dyspareunia and vaginal dryness in post menopause women:",
      "options": [
        {
          "id": "a",
          "text": "Ospemifene"
        },
        {
          "id": "b",
          "text": "Raloxifene"
        },
        {
          "id": "c",
          "text": "bazedoxifene"
        },
        {
          "id": "d",
          "text": "Intermittent combined estrogen\u2013progestogen treatment"
        },
        {
          "id": "e",
          "text": "Continuous Combined Estrogen\u2013Progestogen treatment"
        }
      ],
      "correctId": "a",
      "explanation": "Ospemifene is a SERM approved for the treatment of dyspareunia from menopausal vulvar and vaginal atrophy."
    },
    {
      "id": "q61",
      "question": "61- Dehydroepiandrosterone (DHEA) is a precursor hormone that can be converted into:",
      "options": [
        {
          "id": "a",
          "text": "Only testosterone"
        },
        {
          "id": "b",
          "text": "Only estrogen"
        },
        {
          "id": "c",
          "text": "estrogen, estradiol, and testosterone"
        },
        {
          "id": "d",
          "text": "Selective Estrogen Receptor Modulators (SERMs)"
        },
        {
          "id": "e",
          "text": "Phytoestrogens"
        }
      ],
      "correctId": "c",
      "explanation": "DHEA is a precursor hormone in the synthesis of estrone, estradiol, and testosterone."
    }
  ],
  'menstruation': [
    {
      "id": "q60",
      "question": "60- Regarding pharmacologic therapy of dysmenorrhea, The first line pharmacologic therapy is",
      "options": [
        {
          "id": "a",
          "text": "Estrogen only"
        },
        {
          "id": "b",
          "text": "Progestogen only"
        },
        {
          "id": "c",
          "text": "Combination hormonal contraceptives"
        },
        {
          "id": "d",
          "text": "Paracetamol"
        },
        {
          "id": "e",
          "text": "NSAIDs"
        }
      ],
      "correctId": "e",
      "explanation": "Dysmenorrhea (painful periods) is primarily driven by excess prostaglandin production, making NSAIDs the targeted first-line pharmacologic therapy."
    },
    {
      "id": "q77",
      "question": "77- Hypothalamus secretes gonadotropin- releasing hormone (GnRH) in a pulse like manner with varying frequencies throughout the menstrual cycle and GRH stimulates the anterior pituitary to produce and release hormones. What are the hormones that produced by stimulation of GnRH to the anterior pituitary gland",
      "options": [
        {
          "id": "a",
          "text": "Follicle- stimulating hormone (FSH) and luteinizing hormone (LH)"
        },
        {
          "id": "b",
          "text": "Estrogen and progesterone"
        },
        {
          "id": "c",
          "text": "GRH"
        },
        {
          "id": "d",
          "text": "Growth hormone"
        },
        {
          "id": "e",
          "text": "aldosterone and cortisol"
        }
      ],
      "correctId": "a",
      "explanation": "Gonadotropin-releasing hormone (GnRH) specifically stimulates the anterior pituitary gland to produce and release Follicle-Stimulating Hormone (FSH) and Luteinizing Hormone (LH)."
    },
    {
      "id": "q78",
      "question": "78- For diagnosis of menopause, The most important parameter in the diagnosis of menopause is",
      "options": [
        {
          "id": "a",
          "text": "Thyroid function test"
        },
        {
          "id": "b",
          "text": "Complete blood count and serum FSH"
        },
        {
          "id": "c",
          "text": "Physical examination"
        },
        {
          "id": "d",
          "text": "Diagnosis is determined retrospectively after 12 consecutive months of amenorrhea"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "d",
      "explanation": "Menopause is a clinical diagnosis established retrospectively only after a continuous period of 12 consecutive months of amenorrhea with no other pathological cause."
    },
    {
      "id": "q82",
      "question": "82- Regarding menstruation disorders: Which of the following hormone- like substance is responsible for painful menstrual cramps?",
      "options": [
        {
          "id": "a",
          "text": "Estrogen."
        },
        {
          "id": "b",
          "text": "Dopamine."
        },
        {
          "id": "c",
          "text": "Epinephrine."
        },
        {
          "id": "d",
          "text": "Prostaglandin."
        },
        {
          "id": "e",
          "text": "Serotonin."
        }
      ],
      "correctId": "d",
      "explanation": "Prostaglandins, particularly PGF2-alpha, trigger the intense and dysrhythmic uterine muscle contractions that cause the pain of primary dysmenorrhea."
    },

    {
      "id": "q17",
      "question": "17- A 14 age old female complains from crampy pelvic pain beginning shortly during menses. Pain radiates into lower back or thighs. Which of the following is the first-line therapy for dysmenorrhea?",
      "options": [
        {
          "id": "a",
          "text": "Acupuncture"
        },
        {
          "id": "b",
          "text": "Herbal supplements"
        },
        {
          "id": "c",
          "text": "NSAIDs"
        },
        {
          "id": "d",
          "text": "Exercise"
        },
        {
          "id": "e",
          "text": "Watchful waiting"
        }
      ],
      "correctId": "c",
      "explanation": "NSAIDs are the first-line therapy for dysmenorrhea and are effective in up to 80% of patients."
    },
    {
      "id": "q18",
      "question": "18- A 23-year-old female complains of absence of menses (amenorrhea) over 3 months period. She experienced menarche at the age of 15 years. What is the first step in evaluating this complaint?",
      "options": [
        {
          "id": "a",
          "text": "Evaluate whether she may have anorexia."
        },
        {
          "id": "b",
          "text": "Check her TSH level."
        },
        {
          "id": "c",
          "text": "Perform a pregnancy test."
        },
        {
          "id": "d",
          "text": "Evaluate whether she may have undernutrition."
        },
        {
          "id": "e",
          "text": "Quantify her level of exercise."
        }
      ],
      "correctId": "c",
      "explanation": "Unrecognized pregnancy is a common cause; therefore, a urine pregnancy test should be one of the first steps in evaluating amenorrhea."
    },
    {
      "id": "q94",
      "question": "94- What is the recommended first-line therapy for patients with functional hypothalamic amenorrhea, according to the 2017 Endocrine Society Clinical Practice Guideline?",
      "options": [
        {
          "id": "a",
          "text": "Oral contraceptives"
        },
        {
          "id": "b",
          "text": "Conjugated equine estrogen"
        },
        {
          "id": "c",
          "text": "Estradiol patch"
        },
        {
          "id": "d",
          "text": "non-pharmacological treatment"
        },
        {
          "id": "e",
          "text": "A short-term transdermal estrogen with cyclic oral progestins"
        }
      ],
      "correctId": "e",
      "explanation": "The 2017 guidelines recommend trying nonpharmacological therapy first, and then starting a short-term transdermal estrogen with cyclic oral progestins."
    }
  ],
  'oncology': [
    {
      "id": "q7",
      "question": "7- Chemotherapy that is given before surgical resection of the tumor to decrease the tumor burden to be removed is called",
      "options": [
        {
          "id": "a",
          "text": "Adjuvant therapy"
        },
        {
          "id": "b",
          "text": "Neoadjuvant therapy"
        },
        {
          "id": "c",
          "text": "Chemotherapy cycle"
        },
        {
          "id": "d",
          "text": "Metastasis"
        },
        {
          "id": "e",
          "text": "Off- label therapy"
        }
      ],
      "correctId": "b",
      "explanation": "Neoadjuvant therapy is a form of chemotherapy or radiation given before the primary surgical intervention to shrink the tumor burden and increase the likelihood of successful resection."
    },
    {
      "id": "q13",
      "question": "13- A patient diagnosed with CLL with del (17p). What is the best initial treatment for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Fludarabine- based chemoimmunotherapy"
        },
        {
          "id": "b",
          "text": "Ibrutinib."
        },
        {
          "id": "c",
          "text": "Venetoclax"
        },
        {
          "id": "d",
          "text": "Bendamustine plus rituximab"
        },
        {
          "id": "e",
          "text": "Obinutuzumab plus chlorambucil"
        }
      ],
      "correctId": "b",
      "explanation": "Deletion of chromosome 17p in CLL is associated with very poor outcomes with standard chemoimmunotherapy; novel targeted agents like the BTK inhibitor ibrutinib are strongly preferred."
    },
    {
      "id": "q19",
      "question": "19- A cancer that arise in the connective tissue. Such type of cancer is called",
      "options": [
        {
          "id": "a",
          "text": "Carcinoma"
        },
        {
          "id": "b",
          "text": "Adenocarcinoma"
        },
        {
          "id": "c",
          "text": "Sarcoma"
        },
        {
          "id": "d",
          "text": "Lipoma"
        },
        {
          "id": "e",
          "text": "Lymphoma"
        }
      ],
      "correctId": "c",
      "explanation": "Cancers are classified by their tissue of origin; malignant tumors arising from mesenchymal or connective tissues (such as bone, cartilage, fat) are termed sarcomas."
    },
    {
      "id": "q25",
      "question": "25- A patient diagnosed with resistant CML due to T3151 mutation. Which one of the following TKIs is suitable for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Imatinib"
        },
        {
          "id": "b",
          "text": "Dasatinib"
        },
        {
          "id": "c",
          "text": "Nilotinib"
        },
        {
          "id": "d",
          "text": "Ponatinib"
        },
        {
          "id": "e",
          "text": "Bosutinib"
        }
      ],
      "correctId": "d",
      "explanation": "The T315I mutation in CML is notoriously resistant to most standard tyrosine kinase inhibitors; however, ponatinib was specifically designed to overcome this resistance."
    },
    {
      "id": "q30",
      "question": "30- A patient diagnosed with CLL and treated by watchful waiting. All of the followings are indications for treatment initiation to CLL patients, EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "Significant anemia"
        },
        {
          "id": "b",
          "text": "A lymphocyte doubling time of more than 6 months"
        },
        {
          "id": "c",
          "text": "Persistent B- symptoms"
        },
        {
          "id": "d",
          "text": "Hepatomegaly, and/or splenomegaly"
        },
        {
          "id": "e",
          "text": "Recurrent infection"
        }
      ],
      "correctId": "b",
      "explanation": "In CLL, treatment is typically deferred in asymptomatic early-stage patients until true progression occurs, such as rapid lymphocyte doubling or symptomatic organomegaly."
    },
    {
      "id": "q31",
      "question": "31- Regarding cancer prevention: All of the following strategies are useful in cancer prevention EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "Intermittent administration of broad-spectrum antibiotics."
        },
        {
          "id": "b",
          "text": "Smoking cessation."
        },
        {
          "id": "c",
          "text": "Avoidance of direct sunlight exposure."
        },
        {
          "id": "d",
          "text": "Vaccination against certain types of viruses (Hepatitis B)."
        },
        {
          "id": "e",
          "text": "Regular and brisk daily exercise."
        }
      ],
      "correctId": "a",
      "explanation": "Broad-spectrum antibiotics do not have a role in systemic cancer prevention and prolonged intermittent use can disrupt normal flora and incite resistance."
    },
    {
      "id": "q32",
      "question": "32- Regarding carcinogens: All of the following are carcinogenic EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "Benzene."
        },
        {
          "id": "b",
          "text": "Stress."
        },
        {
          "id": "c",
          "text": "Smoking."
        },
        {
          "id": "d",
          "text": "Epstein- Barr virus infection."
        },
        {
          "id": "e",
          "text": "Excessive sun exposure"
        }
      ],
      "correctId": "b",
      "explanation": "While chronic psychological stress can negatively modulate overall health, it is not fundamentally classified as a direct cellular carcinogen mapping to DNA mutation like benzene or smoking."
    },
    {
      "id": "q35",
      "question": "35- Regarding chemotherapy induced toxicities: Which of the following is the most common toxicity of cytotoxic anticancer therapy?",
      "options": [
        {
          "id": "a",
          "text": "Myelosuppression"
        },
        {
          "id": "b",
          "text": "Xerostomia."
        },
        {
          "id": "c",
          "text": "Extravasation."
        },
        {
          "id": "d",
          "text": "Hepatic encephalopathy."
        },
        {
          "id": "e",
          "text": "Infertility."
        }
      ],
      "correctId": "a",
      "explanation": "Most traditional cytotoxic chemotherapies indiscriminately target rapidly dividing cells including the bone marrow, making myelosuppression the most common dose-limiting toxicity."
    },
    {
      "id": "q36",
      "question": "36- Regarding management of acute leukemia: What is the main indication of intrathecal methotrexate in a patient with acute lymphocytic/lymphoblastic leukemia?",
      "options": [
        {
          "id": "a",
          "text": "Minimization of chemotherapy adverse effects."
        },
        {
          "id": "b",
          "text": "Prevention of heart diseases."
        },
        {
          "id": "c",
          "text": "CNS prophylaxis."
        },
        {
          "id": "d",
          "text": "Reducing renal toxicity."
        },
        {
          "id": "e",
          "text": "Treating hyperuricemia."
        }
      ],
      "correctId": "c",
      "explanation": "The main indication for intrathecal methotrexate in acute lymphoblastic leukemia is to penetrate the blood-brain barrier for definitive CNS prophylaxis or treatment."
    },
    {
      "id": "q41",
      "question": "41- Concerning leukemia, Anti- CD33 monoclonal antibody utilized for relapsed acute myeloid leukemia in adults and children?",
      "options": [
        {
          "id": "a",
          "text": "Gemtuzumab ozogamicin."
        },
        {
          "id": "b",
          "text": "Glasdegib."
        },
        {
          "id": "c",
          "text": "Glitertinib."
        },
        {
          "id": "d",
          "text": "Ivosidenib."
        },
        {
          "id": "e",
          "text": "Enasidenib."
        }
      ],
      "correctId": "a",
      "explanation": "Gemtuzumab ozogamicin is a targeted anti-CD33 antibody-drug conjugate approved to treat CD33-positive acute myeloid leukemia in both adult and pediatric patients."
    },
    {
      "id": "q43",
      "question": "43- Which of the followings are not properties of cisplatin used in cancer treatment?",
      "options": [
        {
          "id": "a",
          "text": "Clinically active in the treatment of different tumors from the head, neck to anal cancer."
        },
        {
          "id": "b",
          "text": "Effective in the treatment of many types of lymphoma and carcinoma of unknown primary."
        },
        {
          "id": "c",
          "text": "Significant nephrotoxicity and electrolyte abnormalities can occur even with adequate hydration."
        },
        {
          "id": "d",
          "text": "Emetogenic."
        },
        {
          "id": "e",
          "text": "Ototoxic with a high frequency of hearing loss."
        }
      ],
      "correctId": "b",
      "explanation": "This statement is misleading; cisplatin is predominantly indicated and effective for treating solid tumors (testicular, ovarian, bladder) rather than broadly used as primary treatment for lymphomas."
    },
    {
      "id": "q44",
      "question": "44- Regarding prostate cancer, which of the following maneuvers considered as a non- pharmacological therapy for prostate cancer",
      "options": [
        {
          "id": "a",
          "text": "Watchful waiting"
        },
        {
          "id": "b",
          "text": "Bilateral orchiectomy"
        },
        {
          "id": "c",
          "text": "External beam radiotherapy"
        },
        {
          "id": "d",
          "text": "Radical prostatectomy"
        },
        {
          "id": "e",
          "text": "All of the above"
        }
      ],
      "correctId": "e",
      "explanation": "Non-pharmacological therapies for the comprehensive management of prostate cancer include watchful waiting, external beam radiotherapy, and surgical interventions like radical prostatectomy and bilateral orchiectomy."
    },
    {
      "id": "q47",
      "question": "47- The toxic effect of chemotherapy may be affected by",
      "options": [
        {
          "id": "a",
          "text": "The properties of anticancer agent"
        },
        {
          "id": "b",
          "text": "The dose of anticancer agent"
        },
        {
          "id": "c",
          "text": "The duration of treatment"
        },
        {
          "id": "d",
          "text": "Patient-related factors"
        },
        {
          "id": "e",
          "text": "All of them"
        }
      ],
      "correctId": "e",
      "explanation": "The clinical toxicity of systemic chemotherapy is highly multifactorial, depending heavily on the precise drug properties, exact dosing schedules, treatment duration, and a myriad of patient-related physical factors."
    },
    {
      "id": "q48",
      "question": "48- The purpose of maintenance therapy for leukemia is to",
      "options": [
        {
          "id": "a",
          "text": "induce a remission"
        },
        {
          "id": "b",
          "text": "further eliminate leukemic cells and produce an enduring CCR"
        },
        {
          "id": "c",
          "text": "Administer dose-intensive chemotherapy to reduce the burden of residual leukemic cells"
        },
        {
          "id": "d",
          "text": "Continue remission and to lower cumulative toxicity"
        },
        {
          "id": "e",
          "text": "minimize the development of drug cross-resistance"
        }
      ],
      "correctId": "d",
      "explanation": "In leukemia treatment, the specialized purpose of maintenance therapy is to provide prolonged exposure to lower-dose chemotherapy, acting to continue the morphological remission and eliminate minimal residual leukemic cells."
    },
    {
      "id": "q49",
      "question": "49- Concerning the cancer chemotherapy, all the statements bellow about methotrexate are correct, EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "It inhibits cytokine production."
        },
        {
          "id": "b",
          "text": "It inhibits purine biosynthesis."
        },
        {
          "id": "c",
          "text": "It stimulates adenosine release."
        },
        {
          "id": "d",
          "text": "It does not have anti-inflammatory properties."
        },
        {
          "id": "e",
          "text": "Methotrexate is contraindicated in pregnant and nursing women."
        }
      ],
      "correctId": "d",
      "explanation": "This statement is entirely false; methotrexate safely operates as a powerful antimetabolite that also possesses profound anti-inflammatory and systemic immunosuppressive properties utilized in rheumatology."
    },
    {
      "id": "q51",
      "question": "51- Anthracycline induced cardiomyopathy is closely linked to a patient's",
      "options": [
        {
          "id": "a",
          "text": "Normal dose"
        },
        {
          "id": "b",
          "text": "Toxic dose"
        },
        {
          "id": "c",
          "text": "Total daily dose"
        },
        {
          "id": "d",
          "text": "Cumulative dose"
        },
        {
          "id": "e",
          "text": "All of the above"
        }
      ],
      "correctId": "d",
      "explanation": "The most important, firmly established clinical risk factor for irreversible anthracycline-induced cardiomyopathy is surpassing the strict total lifetime cumulative drug dose limit."
    },

    {
      "id": "q1",
      "question": "1- A patient with CML was treated by a tyrosine kinase inhibitor. How can deep, long-lasting molecular response be defined?",
      "options": [
        {
          "id": "a",
          "text": "BCR-ABL < 0.1%"
        },
        {
          "id": "b",
          "text": "BCR-ABL < 1%"
        },
        {
          "id": "c",
          "text": "BCR-ABL > 0.1%"
        },
        {
          "id": "d",
          "text": "Absence of BCR-ABL."
        },
        {
          "id": "e",
          "text": "BCR-ABL < 10%"
        }
      ],
      "correctId": "a",
      "explanation": "A deep, long-lasting molecular response is defined as BCR-ABL < 0.1%."
    },
    {
      "id": "q2",
      "question": "2- A patient with CML was treated by nilotinib. Which one of the followings is a unique side effect for nilotinib (a side effect that is not common with other TKIs)?",
      "options": [
        {
          "id": "a",
          "text": "Pleural effusion"
        },
        {
          "id": "b",
          "text": "QT prolongation"
        },
        {
          "id": "c",
          "text": "Arterial thrombosis"
        },
        {
          "id": "d",
          "text": "Hyperglycemia"
        },
        {
          "id": "e",
          "text": "Myelosuppression"
        }
      ],
      "correctId": "c",
      "explanation": "Pleural effusions are reported with imatinib and dasatinib but NOT with nilotinib. Nilotinib and other advanced TKIs are associated with arterial/vascular events."
    },
    {
      "id": "q28",
      "question": "28- T.D is 9 years old boy with acute lymphoblastic leukemia. While you were observing his treatment you noticed that his induction phase regimen is: Cyclophosphamide, L-asparaginase, Vincristine, and Prednisolone. The senior clinical pharmacist suggested to add Mesna to the treatment regimen. What is the reason behind adding Mesna to this treatment protocol?",
      "options": [
        {
          "id": "a",
          "text": "To further intensify the treatment protocol"
        },
        {
          "id": "b",
          "text": "To reduce the risk of hemorrhagic cystitis of cyclophosphamide"
        },
        {
          "id": "c",
          "text": "To reduce the risk of vincristine toxicity"
        },
        {
          "id": "d",
          "text": "To boost immune system"
        },
        {
          "id": "e",
          "text": "To relief the symptoms of leukemia"
        }
      ],
      "correctId": "b",
      "explanation": "Nitrogen mustards like cyclophosphamide and ifosfamide cause hemorrhagic cystitis, which is mitigated by Mesna."
    },
    {
      "id": "q52",
      "question": "52- Which drug is an anti-CD-22 and also used in relapsed and refractory B-ALL?",
      "options": [
        {
          "id": "a",
          "text": "Clofarabine"
        },
        {
          "id": "b",
          "text": "Blinatumomab"
        },
        {
          "id": "c",
          "text": "Inotuzumab ozogamicin"
        },
        {
          "id": "d",
          "text": "Tisagenlecleucel"
        },
        {
          "id": "e",
          "text": "Nelarabine"
        }
      ],
      "correctId": "c",
      "explanation": "Inotuzumab ozogamicin (anti-CD-22) is used in relapsed and refractory B-ALL."
    },
    {
      "id": "q53",
      "question": "53- Small-Molecule Inhibitors used to treat CLL. Which drug that targets B-cell lymphoma 2 (BCL-2) protein and may be used as first line therapy or for patients with relapsed/refractory CLL?",
      "options": [
        {
          "id": "a",
          "text": "Venetoclax"
        },
        {
          "id": "b",
          "text": "Idelalisib"
        },
        {
          "id": "c",
          "text": "duvelisib"
        },
        {
          "id": "d",
          "text": "Ibrutinib"
        },
        {
          "id": "e",
          "text": "Acalabrutinib"
        }
      ],
      "correctId": "a",
      "explanation": "Venetoclax is a small molecule inhibitor that targets BCL-2."
    },
    {
      "id": "q71",
      "question": "71- Many cytotoxic drugs are carcinogenic. All of the following drugs have a high risk to cause leukemia as a secondary malignancy EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Melphalan"
        },
        {
          "id": "b",
          "text": "Fluorouracil"
        },
        {
          "id": "c",
          "text": "Etoposide"
        },
        {
          "id": "d",
          "text": "Doxorubicin"
        },
        {
          "id": "e",
          "text": "Cyclophosphamide"
        }
      ],
      "correctId": "b",
      "explanation": "Alkylating agents (melphalan, cyclophosphamide), anthracyclines (doxorubicin), and epipodophyllotoxins (etoposide) are linked to secondary leukemias."
    },
    {
      "id": "q73",
      "question": "73- A patient with stage 1 colon cancer. The tumor was removed by surgery. What is the aim of surgery for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Palliative"
        },
        {
          "id": "b",
          "text": "Preventive"
        },
        {
          "id": "c",
          "text": "Curative"
        },
        {
          "id": "d",
          "text": "Diagnostic"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "c",
      "explanation": "For localized disease, surgery is the primary treatment modality used with curative intent."
    },
    {
      "id": "q74",
      "question": "74- A patient with stage 3 rectal cancer. 5FU and leucovorin was given before performing surgical removal of the tumor. What is the type of chemotherapeutic regimen that used for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Adjuvant"
        },
        {
          "id": "b",
          "text": "Neoadjuvant"
        },
        {
          "id": "c",
          "text": "Palliative"
        },
        {
          "id": "d",
          "text": "Salvage"
        },
        {
          "id": "e",
          "text": "Induction"
        }
      ],
      "correctId": "b",
      "explanation": "Chemotherapy given before surgical resection to decrease tumor burden is called neoadjuvant chemotherapy."
    },
    {
      "id": "q83",
      "question": "83- A 63 years old patient with CML was not responding to imatinib. Upon investigations T315I mutation was negative. The patient has a history of torsades de pointes (a type of arrhythmia with long QT interval). What is the most suitable therapy for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Ibrutinib"
        },
        {
          "id": "b",
          "text": "Nilotinib"
        },
        {
          "id": "c",
          "text": "Omacetaxine"
        },
        {
          "id": "d",
          "text": "Ponatinib"
        },
        {
          "id": "e",
          "text": "Bosutinib"
        }
      ],
      "correctId": "d",
      "explanation": "Ponatinib is a high-potency salvage choice, though clinicians must be cautious with QTC-prolonging drugs."
    },
    {
      "id": "q84",
      "question": "84- A 67 years old man with a history of atrial fibrillation. He is recently diagnosed to have CLL with deletion of 17 P. What is the best initial therapy for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Ibrutinib"
        },
        {
          "id": "b",
          "text": "Venetoclax plus obinutuzumab"
        },
        {
          "id": "c",
          "text": "FCR (fludarabine, cyclophosphamide, and rituximab)"
        },
        {
          "id": "d",
          "text": "Idelalisib plus rituximab"
        },
        {
          "id": "e",
          "text": "Duvelisib"
        }
      ],
      "correctId": "b",
      "explanation": "While ibrutinib is a first-line option, it is associated with an increased risk of atrial fibrillation. Therefore, for a patient with existing AF, Venetoclax plus obinutuzumab is a preferred first-line alternative."
    },
    {
      "id": "q97",
      "question": "97- Remission induction therapy of acute lymphocytic leukemia. A 44 years old adult patient diagnosed with acute lymphocytic leukemia, which option of the following is not included for his remission induction therapy?",
      "options": [
        {
          "id": "a",
          "text": "Vincristine"
        },
        {
          "id": "b",
          "text": "Lasparaginase"
        },
        {
          "id": "c",
          "text": "Clofarabine"
        },
        {
          "id": "d",
          "text": "Dexamethasone"
        },
        {
          "id": "e",
          "text": "Anthracycline"
        }
      ],
      "correctId": "c",
      "explanation": "Induction for ALL typically consists of vincristine, L-asparaginase, and a steroid (like dexamethasone), with an anthracycline added for adults. Clofarabine is used for relapsed cases."
    },
    {
      "id": "q104",
      "question": "104- The important indicator of disease recurrence and a predictor of outcome for patients with acute leukemia is:",
      "options": [
        {
          "id": "a",
          "text": "White Blood Cell count"
        },
        {
          "id": "b",
          "text": "DNA content"
        },
        {
          "id": "c",
          "text": "Minimal Residual Disease (MRD)"
        },
        {
          "id": "d",
          "text": "Age of the patient"
        },
        {
          "id": "e",
          "text": "Sex and age of the patient"
        }
      ],
      "correctId": "c",
      "explanation": "MRD has become one of the strongest predictors of outcome and an important indicator of disease recurrence."
    }
  ],
  'breast_cancer': [
    {
      "id": "q24",
      "question": "24- A woman was diagnosed to have breast cancer. The cancer of the breast is mostly",
      "options": [
        {
          "id": "a",
          "text": "Carcinoma"
        },
        {
          "id": "b",
          "text": "Sarcoma"
        },
        {
          "id": "c",
          "text": "Lipoma"
        },
        {
          "id": "d",
          "text": "Breastoma"
        },
        {
          "id": "e",
          "text": "Adenocarcinoma"
        }
      ],
      "correctId": "e",
      "explanation": "The vast majority of malignant breast cancers originate biologically within the epithelial glandular tissue (ducts or lobules) and thus are formally classified as adenocarcinomas."
    },
    {
      "id": "q68",
      "question": "68- Adjuvant hormonal therapy is an important part in the treatment of breast cancer. The gold standard adjuvant hormonal therapy for premenopausal women and has both estrogenic and antiestrogenic properties",
      "options": [
        {
          "id": "a",
          "text": "Doxorubicin"
        },
        {
          "id": "b",
          "text": "Cyclophosphamide"
        },
        {
          "id": "c",
          "text": "Tamoxifen"
        },
        {
          "id": "d",
          "text": "Goserelin"
        },
        {
          "id": "e",
          "text": "Pamidronate"
        }
      ],
      "correctId": "c",
      "explanation": "Tamoxifen acts uniquely as a selective estrogen receptor modulator (SERM) providing potent antiestrogenic effects in tumor breast tissue alongside paradoxical protective estrogenic agonist effects within bone."
    },
    {
      "id": "q72",
      "question": "72- In metastatic breast cancer (stage IV), we consider adding agents to standard therapy for treating breast cancer patients with metastases to the bone to decrease rates of skeletal- related events, such as fractures, spinal cord compression, and pain, and the need for radiation to the bones or surgery. Which medication is frequently added",
      "options": [
        {
          "id": "a",
          "text": "Pertuzumab"
        },
        {
          "id": "b",
          "text": "Pamidronate"
        },
        {
          "id": "c",
          "text": "Methotrexate"
        },
        {
          "id": "d",
          "text": "Docetaxel"
        },
        {
          "id": "e",
          "text": "Doxorubicin"
        }
      ],
      "correctId": "b",
      "explanation": "Pamidronate is a powerful bisphosphonate routinely used in oncology to inhibit harmful osteoclast destruction within bones, thereby reducing severe skeletal-related events and bone pain from active metastases."
    },
    {
      "id": "q75",
      "question": "75- There are medications if taken for 5 years can prevent development of breast cancers in postmenopausal women. The preventive medications include exemestane and",
      "options": [
        {
          "id": "a",
          "text": "Anastrozole"
        },
        {
          "id": "b",
          "text": "Tinidazole"
        },
        {
          "id": "c",
          "text": "Albendazole"
        },
        {
          "id": "d",
          "text": "Pantoprazole"
        },
        {
          "id": "e",
          "text": "Econazole"
        }
      ],
      "correctId": "a",
      "explanation": "Exemestane is a potent aromatase inhibitor that strictly blocks peripheral estrogen synthesis, significantly preventing early development of hormone-receptor-positive breast cancer in highly at-risk postmenopausal women."
    },
    {
      "id": "q85",
      "question": "85- Regarding breast cancer: Most women with breast cancer present with:",
      "options": [
        {
          "id": "a",
          "text": "A painless, multiple and large masses in the skin of the breast nipple."
        },
        {
          "id": "b",
          "text": "A soft mass with pain associated with start of menstruation."
        },
        {
          "id": "c",
          "text": "A painful, small solitary mass deep in the muscle of the chest."
        },
        {
          "id": "d",
          "text": "A painless solitary lump in the breast."
        },
        {
          "id": "e",
          "text": "Nipple dislocation."
        }
      ],
      "correctId": "d",
      "explanation": "The most common and concerning initial presenting symptom of underlying breast cancer is discovering a painless, hard, well-circumscribed solitary lump or physical mass deep in the breast tissue."
    },
    {
      "id": "q103",
      "question": "103- Regarding breast cancer, which of the following chemotherapies used for breast cancer associated with hemorrhagic cystitis.",
      "options": [
        {
          "id": "a",
          "text": "Doxorubicin"
        },
        {
          "id": "b",
          "text": "Paclitaxel"
        },
        {
          "id": "c",
          "text": "Cyclophosphamide"
        },
        {
          "id": "d",
          "text": "Fluorouracil"
        },
        {
          "id": "e",
          "text": "Methotrexate"
        }
      ],
      "correctId": "c",
      "explanation": "Cyclophosphamide is metabolically processed in the liver to form acrolein, a highly toxic urothelial irritant that causes intense hemorrhagic cystitis unless aggressively flushed with hydration or mesna."
    },

    {
      "id": "q16",
      "question": "16- T.R is 53 years old female... presented to the cardiology clinic today with breathlessness, ankle edema and chest discomfort, she received a diagnosis of cardiomyopathy. What is the most likely cause of this condition?",
      "options": [
        {
          "id": "a",
          "text": "history of breast cancer"
        },
        {
          "id": "b",
          "text": "family history"
        },
        {
          "id": "c",
          "text": "Docetaxel"
        },
        {
          "id": "d",
          "text": "Doxorubicin"
        },
        {
          "id": "e",
          "text": "Vincristine"
        }
      ],
      "correctId": "d",
      "explanation": "Anthracyclines (like doxorubicin) are well-known to cause cardiac toxicity."
    },
    {
      "id": "q22",
      "question": "22- Regarding treatment of breast cancer. Concomitant or sequential administration of a taxane with an anthracycline-based regimen is mostly standard of care in breast cancer in:",
      "options": [
        {
          "id": "a",
          "text": "Node-positive breast cancer patients with HER2- positive tumors"
        },
        {
          "id": "b",
          "text": "Node-negative breast cancer patients"
        },
        {
          "id": "c",
          "text": "Primary or early-stage breast cancer"
        },
        {
          "id": "d",
          "text": "First line therapy in postmenopausal women with positive ER"
        },
        {
          "id": "e",
          "text": "First line therapy in premenopausal women with positive PR"
        }
      ],
      "correctId": "a",
      "explanation": "Anthracyclines and taxanes are the cornerstones of adjuvant treatment, especially in node-positive or high-risk patients."
    },
    {
      "id": "q23",
      "question": "23- A 37-year-old woman has a large mass on her left breast confirmed a diagnosis of inflammatory breast cancer, with ER negative, PR weakly positive and HER2 negative, no metastasis. The best neoadjuvant therapy for breast conserving surgery is:",
      "options": [
        {
          "id": "a",
          "text": "Whole breast irradiation"
        },
        {
          "id": "b",
          "text": "Tamoxifen only"
        },
        {
          "id": "c",
          "text": "LHRH agonist"
        },
        {
          "id": "d",
          "text": "Doxorubicin + cyclophosphamide followed by paclitaxel"
        },
        {
          "id": "e",
          "text": "Doxorubicin + cyclophosphamide followed by tamoxifen"
        }
      ],
      "correctId": "d",
      "explanation": "For locally advanced/triple-negative profiles, the standard is combination chemotherapy (anthracycline + taxane) to shrink the tumor before surgery."
    },
    {
      "id": "q35",
      "question": "35- Regarding the chemotherapy of breast cancer. The adjuvant chemotherapy regimens include all EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Adriamycin"
        },
        {
          "id": "b",
          "text": "Cyclophosphamide"
        },
        {
          "id": "c",
          "text": "Bisphosphonates"
        },
        {
          "id": "d",
          "text": "Docetaxel"
        },
        {
          "id": "e",
          "text": "Paclitaxel"
        }
      ],
      "correctId": "c",
      "explanation": "Bisphosphonates (like pamidronate) are bone-modifying agents used for metastases, not cytotoxic chemotherapy."
    },
    {
      "id": "q41",
      "question": "41- A 66 years old woman is suffering from low mineral bone density and strong family history of breast cancer. What would be the best protective agent?",
      "options": [
        {
          "id": "a",
          "text": "Tamoxifen"
        },
        {
          "id": "b",
          "text": "Raloxifene"
        },
        {
          "id": "c",
          "text": "Exemestane"
        },
        {
          "id": "d",
          "text": "Cyclophosphamide"
        },
        {
          "id": "e",
          "text": "None of them"
        }
      ],
      "correctId": "b",
      "explanation": "Raloxifene is a SERM approved for both the prevention of postmenopausal osteoporosis and reduction in the risk of invasive breast cancer."
    },
    {
      "id": "q54",
      "question": "54- Drug used to prevent Breast cancer. Which drug increased incidence of endometrial cancer?",
      "options": [
        {
          "id": "a",
          "text": "Exemestane"
        },
        {
          "id": "b",
          "text": "anastrozole"
        },
        {
          "id": "c",
          "text": "tamoxifen"
        },
        {
          "id": "d",
          "text": "raloxifene"
        },
        {
          "id": "e",
          "text": "letrozole"
        }
      ],
      "correctId": "c",
      "explanation": "Tamoxifen is associated with an increased incidence of endometrial cancer."
    },
    {
      "id": "q60",
      "question": "60- Which genetic mutations significantly increase the lifetime risk of breast cancer?",
      "options": [
        {
          "id": "a",
          "text": "BRCA1 and BRCA2"
        },
        {
          "id": "b",
          "text": "TP53 and EGFR"
        },
        {
          "id": "c",
          "text": "KRAS and NRAS"
        },
        {
          "id": "d",
          "text": "ATM and CHEK2"
        },
        {
          "id": "e",
          "text": "BRCA3 and PALB2"
        }
      ],
      "correctId": "a",
      "explanation": "Genetic susceptibility is primarily linked to mutations in the BRCA1 and BRCA2 tumor suppressor genes."
    },
    {
      "id": "q70",
      "question": "70- A 41 years old woman with a positive family history of breast cancer. What is the treatment of choice to reduce her breast cancer risk?",
      "options": [
        {
          "id": "a",
          "text": "Raloxifene"
        },
        {
          "id": "b",
          "text": "Letrozole"
        },
        {
          "id": "c",
          "text": "Tamoxifen"
        },
        {
          "id": "d",
          "text": "Exemestane"
        },
        {
          "id": "e",
          "text": "B and D"
        }
      ],
      "correctId": "c",
      "explanation": "Tamoxifen is the indicated agent for premenopausal women."
    },
    {
      "id": "q72",
      "question": "72- S.A is 61 years old woman diagnosed to have ovarian cancer. All of the followings are common sites for metastases by ovarian cancer EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Bone"
        },
        {
          "id": "b",
          "text": "Lung"
        },
        {
          "id": "c",
          "text": "Bladder"
        },
        {
          "id": "d",
          "text": "Liver"
        },
        {
          "id": "e",
          "text": "Brain"
        }
      ],
      "correctId": "c",
      "explanation": "Common metastatic sites for solid tumors include the brain, bone, lung, and liver."
    },
    {
      "id": "q107",
      "question": "107- Biologic or Targeted Therapy is one of approach for treatment of breast cancer. Which one of the following regimens is considered first line treatment for HER2 positive breast cancer?",
      "options": [
        {
          "id": "a",
          "text": "pertuzumab-trastuzumab"
        },
        {
          "id": "b",
          "text": "trastuzumab-taxane"
        },
        {
          "id": "c",
          "text": "pertuzumab-trastuzumab-taxane combination"
        },
        {
          "id": "d",
          "text": "pertuzumab-taxane combination"
        },
        {
          "id": "e",
          "text": "Adotrastuzumab emtansine-pertuzumab-taxane"
        }
      ],
      "correctId": "c",
      "explanation": "First-line therapy with a pertuzumab-trastuzumab-taxane combination is the preferred option for HER2 over-expressing MBC."
    },
    {
      "id": "q108",
      "question": "108- J.A. is 48 years old woman with breast cancer. Which one of the followings is a risk factor for breast cancer?",
      "options": [
        {
          "id": "a",
          "text": "Young age with low physical activity"
        },
        {
          "id": "b",
          "text": "Young age at menopause"
        },
        {
          "id": "c",
          "text": "Young age at first birth"
        },
        {
          "id": "d",
          "text": "Young age at menarche"
        },
        {
          "id": "e",
          "text": "Old age at menarche"
        }
      ],
      "correctId": "d",
      "explanation": "Endocrine risk factors include menarche before age 11 (young age) and late age at first birth."
    }
  ],
  'prostate_cancer': [
    {
      "id": "q5",
      "question": "5- For evaluation of therapeutic outcomes in patient treated for prostate cancer, many parameters can be used for monitoring response to therapy. Which one of the following markers can be used for monitoring response to therapy?",
      "options": [
        {
          "id": "a",
          "text": "PSA"
        },
        {
          "id": "b",
          "text": "General urine examination"
        },
        {
          "id": "c",
          "text": "Albumin"
        },
        {
          "id": "d",
          "text": "CA- 125"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "a",
      "explanation": "Prostate-Specific Antigen (PSA) functions universally as the cornerstone clinical tumor marker reliably used for initial screening, pathological diagnosis, and longitudinally monitoring longitudinal response to targeted therapy in prostate cancer."
    },
    {
      "id": "q14",
      "question": "14- A patient diagnosed with prostate cancer and was prescribed degarelix. A major advantage of degarelix over LHRH agonists is?",
      "options": [
        {
          "id": "a",
          "text": "Lack of tumor flare"
        },
        {
          "id": "b",
          "text": "Given orally"
        },
        {
          "id": "c",
          "text": "Given once every 28 days"
        },
        {
          "id": "d",
          "text": "No osteoporosis risk"
        },
        {
          "id": "e",
          "text": "No injection site reactions"
        }
      ],
      "correctId": "a",
      "explanation": "Degarelix operates directly as an advanced GnRH antagonist, creating an immediate and profound drop in circulating testosterone levels without provoking the dangerous initial clinical tumor flare characteristic of older LHRH agonists."
    },
    {
      "id": "q17",
      "question": "17- Many hormones involve in regulating prostate gland function. Hormone (s) that involve in regulation of prostate gland function is/are:",
      "options": [
        {
          "id": "a",
          "text": "Adrenocorticotropic hormone (ACTH)"
        },
        {
          "id": "b",
          "text": "Follicle- stimulating hormone (FSH)"
        },
        {
          "id": "c",
          "text": "Luteinizing hormone- releasing hormone (LHRH)"
        },
        {
          "id": "d",
          "text": "Luteinizing hormone (LH)"
        },
        {
          "id": "e",
          "text": "All mentioned points are correct"
        }
      ],
      "correctId": "e",
      "explanation": "Prostate glandular function is rigidly regulated organically by a complex hormonal cascade axis actively originating in the brain via LHRH, ACTH, FSH, and LH prior to reaching visceral targets."
    },
    {
      "id": "q27",
      "question": "27- T.D is 9 years old boy with acute lymphoblastic leukemia. While you were observing his treatment you noticed that his induction phase regimen is: Cyclophosphamide, L- asparaginase, Vincristine, and Prednisolone. The senior clinical pharmacist suggested to add Mesna to the treatment regimen. What is the reason behind adding Mesna to this treatment protocol?",
      "options": [
        {
          "id": "a",
          "text": "To further intensify the treatment protocol"
        },
        {
          "id": "b",
          "text": "To reduce the risk of hemorrhagic cystitis of cyclophosphamide"
        },
        {
          "id": "c",
          "text": "To reduce the risk of vincristine toxicity"
        },
        {
          "id": "d",
          "text": "To boost immune system"
        },
        {
          "id": "e",
          "text": "To relief the symptoms"
        }
      ],
      "correctId": "b",
      "explanation": "Mesna is an adjunctive uroprotective pharmaceutical specifically administered clinically to covalently bind and chemically detoxify acrolein, effectively eliminating the severe risk of cyclophosphamide-induced hemorrhagic cystitis."
    },
    {
      "id": "q37",
      "question": "37- Regarding management of prostate cancer. Which of the following regarding the combination of (flutamide and leuprolide) is true?",
      "options": [
        {
          "id": "a",
          "text": "It is indicated to delay the initiation of chemotherapy in both nonmetastatic and metastatic disease."
        },
        {
          "id": "b",
          "text": "It is indicated for advanced prostate cancer."
        },
        {
          "id": "c",
          "text": "It is indicated for orchiectomy."
        },
        {
          "id": "d",
          "text": "It is indicated for metastatic castrate-resistant prostate cancer."
        },
        {
          "id": "e",
          "text": "It is indicated as adjuvant therapy before mastectomy."
        }
      ],
      "correctId": "b",
      "explanation": "Leuprolide operates as an LHRH agonist capable of initially triggering dangerous surges in testosterone; concurrently prescribing flutamide actively blocks androgen receptors, neutralizing the flare before initiating long-term therapy."
    },
    {
      "id": "q45",
      "question": "45- The followings are correct regarding the pathophysiology of prostate cancer EXCEPT.",
      "options": [
        {
          "id": "a",
          "text": "Well- differentiated tumors grow slowly."
        },
        {
          "id": "b",
          "text": "Adenocarcinoma cells Include \\(95\\%\\) of cases."
        },
        {
          "id": "c",
          "text": "The kidney is the most organ involved initially in metastasis"
        },
        {
          "id": "d",
          "text": "The rationale for hormone therapy is based on the effect of androgen on the growth and differentiation of the normal prostate"
        },
        {
          "id": "e",
          "text": "Localized prostate cancer is curable by surgery or radiotherapy"
        }
      ],
      "correctId": "c",
      "explanation": "Advanced prostate cancer invariably and preferentially metastasizes hematogenously to the axial skeleton and bones, establishing osteoblastic lesions, rather than aggressively invading the cellular architecture of the kidneys."
    },

    {
      "id": "q15",
      "question": "15- Adnan, 55-year-old, was diagnosed with prostate cancer and undergone prostatectomy. He may experience all the followings complications after the surgery EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Cystitis"
        },
        {
          "id": "b",
          "text": "Stricture formation"
        },
        {
          "id": "c",
          "text": "Incontinence"
        },
        {
          "id": "d",
          "text": "Lymphocele"
        },
        {
          "id": "e",
          "text": "Fistula formation"
        }
      ],
      "correctId": "a",
      "explanation": "Cystitis is an acute complication associated with radiation therapy, not surgery."
    },
    {
      "id": "q20",
      "question": "20- A 64-year-old man with newly diagnosed metastatic prostate cancer presents to the clinic. Which of the following would be considered standard first-line therapy?",
      "options": [
        {
          "id": "a",
          "text": "Docetaxel and prednisone"
        },
        {
          "id": "b",
          "text": "Finasteride"
        },
        {
          "id": "c",
          "text": "Leuprolide"
        },
        {
          "id": "d",
          "text": "Flutamide"
        },
        {
          "id": "e",
          "text": "Supportive care alone"
        }
      ],
      "correctId": "c",
      "explanation": "Initial treatment for advanced prostate cancer is androgen ablation, such as an LHRH agonist (e.g., Leuprolide)."
    },
    {
      "id": "q36",
      "question": "36- Regarding the prostate cancer, Advanced Disease is characterized by all of the following, EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Back pain and spinal cord compression"
        },
        {
          "id": "b",
          "text": "Urinary frequency"
        },
        {
          "id": "c",
          "text": "Lower extremity edema"
        },
        {
          "id": "d",
          "text": "Pathologic fractures"
        },
        {
          "id": "e",
          "text": "Anemia and weight loss"
        }
      ],
      "correctId": "d",
      "explanation": "While bone pain is common, osteoporosis and fractures are typically complications of the treatment (ADT) rather than the presenting characteristics of the cancer itself."
    },
    {
      "id": "q79",
      "question": "79- A patient recently diagnosed to have prostate cancer. The major pathologic cell type of prostate cancer is:",
      "options": [
        {
          "id": "a",
          "text": "Sarcoma"
        },
        {
          "id": "b",
          "text": "Lipoma"
        },
        {
          "id": "c",
          "text": "Adenocarcinoma"
        },
        {
          "id": "d",
          "text": "Carcinoma"
        },
        {
          "id": "e",
          "text": "Hyperplastic"
        }
      ],
      "correctId": "c",
      "explanation": "The major pathologic cell type is adenocarcinoma (>95% of cases)."
    },
    {
      "id": "q80",
      "question": "80- A 57 years old man with positive family history of prostate cancer. All of the following statements regarding screening and prevention of prostate cancer are true EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Guidelines do not recommend the use of dutasteride for prostate cancer chemoprevention."
        },
        {
          "id": "b",
          "text": "Screening for prostate cancer is important and recommended"
        },
        {
          "id": "c",
          "text": "Screening every 5 years may be adequate"
        },
        {
          "id": "d",
          "text": "Males who elect to have screening should do so no more than every 2 years"
        },
        {
          "id": "e",
          "text": "Guidelines do not recommend the use of finasteride for prostate cancer chemoprevention."
        }
      ],
      "correctId": "b",
      "explanation": "PSA and DRE are no longer routinely recommended without a discussion of risks versus benefits."
    },
    {
      "id": "q81",
      "question": "81- E.D. is 71 years old man with prostate cancer who is treated by relugolix. Which one of the following statements regarding relugolix is true?",
      "options": [
        {
          "id": "a",
          "text": "It act as GnRH agonist"
        },
        {
          "id": "b",
          "text": "It can cause tumor flare up"
        },
        {
          "id": "c",
          "text": "It reduces the production of testosterone to castrate levels in 28 days"
        },
        {
          "id": "d",
          "text": "It is administered subcutaneously"
        },
        {
          "id": "e",
          "text": "It can cause hyperglycemia"
        }
      ],
      "correctId": "e",
      "explanation": "Relugolix is an oral GnRH antagonist (no flare) that reduces testosterone quickly (7 days). Its toxicities include hyperglycemia and hypertriglyceridemia."
    },
    {
      "id": "q82",
      "question": "82- S.K is 79 years old man with metastatic castrate resistant prostate cancer. All of the following drugs are suitable for treating SK EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Abiraterone"
        },
        {
          "id": "b",
          "text": "Radium-223"
        },
        {
          "id": "c",
          "text": "Sipuleucel-T"
        },
        {
          "id": "d",
          "text": "Darolutamide"
        },
        {
          "id": "e",
          "text": "Rucaparib"
        }
      ],
      "correctId": "d",
      "explanation": "Darolutamide is specifically approved for non-metastatic CRPC."
    }
  ],
  'chemo_adverse': [
    {
      "id": "q4",
      "question": "4- A patient with cancer was treated by doxorubicin containing regimen. All of the followings regarding doxorubicin are true EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "It is a vesicant drug"
        },
        {
          "id": "b",
          "text": "It can result in blue- green urine after administration"
        },
        {
          "id": "c",
          "text": "Liposomal doxorubicin may be less cardiotoxic than doxorubicin"
        },
        {
          "id": "d",
          "text": "Dexrazoxane can be used as cardioprotectant agent with doxorubicin"
        },
        {
          "id": "e",
          "text": "Oxygen- free- radical formation is a cause of cardiac damage by doxorubicin"
        }
      ],
      "correctId": "b",
      "explanation": "This is a red/orange drug."
    },
    {
      "id": "q18",
      "question": "18- Regarding adverse effect of chemotherapeutic agent. Which one can cause pulmonary toxicity as The most serious side effect",
      "options": [
        {
          "id": "a",
          "text": "Cisplatin"
        },
        {
          "id": "b",
          "text": "Carmustine"
        },
        {
          "id": "c",
          "text": "Bleomycin"
        },
        {
          "id": "d",
          "text": "Cyclophosphamide"
        },
        {
          "id": "e",
          "text": "Paclitaxel"
        }
      ],
      "correctId": "c",
      "explanation": "Bleomycin is an antineoplastic antibiotic uniquely and fatally associated with cumulative dose-dependent pulmonary toxicity, aggressively manifesting as severe interstitial pneumonitis progressing rapidly into untreatable pulmonary fibrosis."
    },
    {
      "id": "q23",
      "question": "23- Vomiting is a common adverse effect after administration of cytotoxic Chemotherapy. All of the following drugs are highly effective in preventing CINV EXCEPT?",
      "options": [
        {
          "id": "a",
          "text": "Dexamethasone"
        },
        {
          "id": "b",
          "text": "Aprepitant"
        },
        {
          "id": "c",
          "text": "Metoclopramide"
        },
        {
          "id": "d",
          "text": "Olanzapine"
        },
        {
          "id": "e",
          "text": "Ondansetron"
        }
      ],
      "correctId": "c",
      "explanation": "Modern standardized antiemetic regimens powerfully mitigate chemotherapy-induced nausea through layered neuroreceptor blockade utilizing dexamethasone, aprepitant, and ondansetron; meanwhile, metoclopramide demonstrates markedly inferior central efficacy."
    },
    {
      "id": "q26",
      "question": "26- Febrile neutropenia is a common adverse effect after administration of cytotoxic Chemotherapy. Which one of the following drugs stimulates the maturation and differentiation of neutrophil precursors?",
      "options": [
        {
          "id": "a",
          "text": "Methotrexate"
        },
        {
          "id": "b",
          "text": "Doxorubicin"
        },
        {
          "id": "c",
          "text": "Pegfilgrastim"
        },
        {
          "id": "d",
          "text": "Peginterferon"
        },
        {
          "id": "e",
          "text": "None of the above"
        }
      ],
      "correctId": "c",
      "explanation": "Pegfilgrastim operates biochemically as a heavily pegylated, massively long-acting formulation of filgrastim (G-CSF) directly administered post-chemotherapy to powerfully stimulate profound neutrophil maturation, preventing neutropenic sepsis."
    },
    {
      "id": "q52",
      "question": "52- Which one of the following TK is associated with an increase in serious arterial thrombotic events?",
      "options": [
        {
          "id": "a",
          "text": "Imatinib"
        },
        {
          "id": "b",
          "text": "Ponatinib"
        },
        {
          "id": "c",
          "text": "Dasatinib"
        },
        {
          "id": "d",
          "text": "Nilotinib"
        },
        {
          "id": "e",
          "text": "Bosutinib"
        }
      ],
      "correctId": "b",
      "explanation": "Ponatinib represents an aggressively potent third-generation rationally-designed Tyrosine Kinase Inhibitor overcoming the T315I mutation; however, it strictly carries a black-box FDA warning for inducing severe, life-threatening arterial thrombosis."
    },
    {
      "id": "q104",
      "question": "104- Features of hyperparathyroidism include the following EXCEPT",
      "options": [
        {
          "id": "a",
          "text": "hypercalcemia"
        },
        {
          "id": "b",
          "text": "kidney stones"
        },
        {
          "id": "c",
          "text": "bone pain"
        },
        {
          "id": "d",
          "text": "psychiatric moans"
        },
        {
          "id": "e",
          "text": "Hypocalcemia"
        }
      ],
      "correctId": "e",
      "explanation": "Symptomatic hyperparathyroidism universally orchestrates systemic hypercalcemia mathematically driven by parathyroid hormone severely accelerating baseline bone resorption whilst maximizing renal calcium reabsorption uniformly."
    },

    {
      "id": "q55",
      "question": "55- Nausea and vomiting are most common side effect of chemotherapy. Agents with a \u201chigh\u201d emetic risk cause emesis in more than 90% of cases if not given any prophylaxis, like:",
      "options": [
        {
          "id": "a",
          "text": "tamoxifen"
        },
        {
          "id": "b",
          "text": "cisplatin"
        },
        {
          "id": "c",
          "text": "cyclophosphamide"
        },
        {
          "id": "d",
          "text": "fluorouracil"
        },
        {
          "id": "e",
          "text": "methotrexate"
        }
      ],
      "correctId": "b",
      "explanation": "Cisplatin is categorized as having a 'high' emetic risk (>90%)."
    },
    {
      "id": "q56",
      "question": "56- In case of febrile neutropenia. Linezolid, quinupristin\u2013dalfopristin, tigecycline, and daptomycin may be used in cases of:",
      "options": [
        {
          "id": "a",
          "text": "severe cases"
        },
        {
          "id": "b",
          "text": "in availability of suitable antibiotics"
        },
        {
          "id": "c",
          "text": "vancomycin resistant organisms"
        },
        {
          "id": "d",
          "text": "high cost of injectable antibiotics"
        },
        {
          "id": "e",
          "text": "allergy"
        }
      ],
      "correctId": "c",
      "explanation": "These agents are used in cases of vancomycin-resistant organisms or vancomycin intolerance."
    },
    {
      "id": "q75",
      "question": "75- Y.S. is 70 years old man with AML who was treated by cytarabine and daunorubicin (moderate emetogenic regimen) plus a suitable prophylactic antiemetic regimen. What is the best antiemetic for breakthrough nausea and vomiting for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Ondansetron"
        },
        {
          "id": "b",
          "text": "Palonosetron"
        },
        {
          "id": "c",
          "text": "Prochlorperazine"
        },
        {
          "id": "d",
          "text": "Dexamethasone"
        },
        {
          "id": "e",
          "text": "Olanzapine"
        }
      ],
      "correctId": "c",
      "explanation": "For breakthrough CINV, dopamine antagonists like prochlorperazine are recommended because they target a different receptor than the prophylaxis."
    },
    {
      "id": "q76",
      "question": "76- A patient with ALL was treated by 4 drugs induction regimen. After treatment, the neutrophil count reduced to 400 cells/microliter. Vital signs: Blood pressure 86/50 mmHg and temperature of 39 C. What is the best treatment for febrile neutropenia for this patient?",
      "options": [
        {
          "id": "a",
          "text": "Cefipime"
        },
        {
          "id": "b",
          "text": "Gentamycin+Ceftazidime+Vancomycin+Filagrastim"
        },
        {
          "id": "c",
          "text": "Amikacin+pipracillin"
        },
        {
          "id": "d",
          "text": "Meropenem+filagrastim"
        },
        {
          "id": "e",
          "text": "Meropenem + vancomycin"
        }
      ],
      "correctId": "e",
      "explanation": "For clinically unstable patients (hypotension/shock), the initial therapy should include broad coverage, often adding vancomycin."
    },
    {
      "id": "q77",
      "question": "77- A cancer patient suffers from severe chemotherapy induced mucositis. All of the following drugs have a moderate-high risk to cause mucositis EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Paclitaxel"
        },
        {
          "id": "b",
          "text": "Carboplatin"
        },
        {
          "id": "c",
          "text": "Methotrexate"
        },
        {
          "id": "d",
          "text": "Doxorubicin"
        },
        {
          "id": "e",
          "text": "vincristine"
        }
      ],
      "correctId": "e",
      "explanation": "Taxanes, anthracyclines, platinum, and methotrexate are associated with mucositis. Vincristine is primarily associated with neurotoxicity."
    },
    {
      "id": "q78",
      "question": "78- A patient with colon cancer was treated by fluorouracil-based regimen (FOLFOX). The patient developed fluorouracil induced mucositis. Which one of the following statements regarding mucositis is true?",
      "options": [
        {
          "id": "a",
          "text": "Symptoms appear within 5 to 7 weeks after chemotherapy"
        },
        {
          "id": "b",
          "text": "Amifostine is approved for prevention and treatment of mucositis"
        },
        {
          "id": "c",
          "text": "\u201cMagic-mouthwash\u201d compounded rinses are generally recommended by clinical practice guidelines for mucositis prevention"
        },
        {
          "id": "d",
          "text": "Antimicrobial therapy is necessary to prevent systemic infection in very severe mucositis."
        },
        {
          "id": "e",
          "text": "Palifermin is given as SC injection for treatment of mucositis"
        }
      ],
      "correctId": "d",
      "explanation": "In severe cases where infection is suspected, antimicrobial therapy is necessary to prevent systemic infection."
    },
    {
      "id": "q95",
      "question": "95- Which medication, administered intrarectally before each dose of radiation therapy for rectal cancer, may be considered to prevent gastrointestinal (GI) mucositis?",
      "options": [
        {
          "id": "a",
          "text": "Gelclair"
        },
        {
          "id": "b",
          "text": "Caphasol"
        },
        {
          "id": "c",
          "text": "Amifostine"
        },
        {
          "id": "d",
          "text": "Biotene"
        },
        {
          "id": "e",
          "text": "Benzydamine mouthwash"
        }
      ],
      "correctId": "c",
      "explanation": "Amifostine is given intrarectally before radiation for rectal cancer to prevent GI mucositis."
    }
  ],
  'drug_development': [
    {
      "id": "q1",
      "question": "1) Regarding the time course for a new drug development, the FDA’s approval of the __________ indicates that the new drug is effective and safe for its proposed use and can be marketed.",
      "options": [
        { "id": "a", "text": "IND application" },
        { "id": "b", "text": "NDA application" },
        { "id": "c", "text": "ANAD" },
        { "id": "d", "text": "SNDA" },
        { "id": "e", "text": "Preclinical testing" }
      ],
      "correctId": "b",
      "explanation": "The New Drug Application (NDA) is the formal proposal for the FDA to approve a new drug for sale and marketing in the U.S. based on demonstrated safety and efficacy from preclinical and clinical studies."
    },
    {
      "id": "q10",
      "question": "10) Why is it important to know whether a drug dose is based on the salt form or the base form of the active pharmaceutical ingredient (API)?",
      "options": [
        { "id": "a", "text": "The salt form always has a higher potency than the base form." },
        { "id": "b", "text": "The base form is more stable and preferred for all formulations." },
        { "id": "c", "text": "The salt form is 100% active drug and does not require dose adjustment." },
        { "id": "d", "text": "The actual amount of active drug differs between the salt and base forms, affecting dosing accuracy." },
        { "id": "e", "text": "Only the salt form of a drug exerts a pharmacological effect in the body." }
      ],
      "correctId": "d",
      "explanation": "The \"active moiety\" is the molecule responsible for the drug's action, excluding the portions that make it a salt; therefore, the weight of the salt form must be adjusted to ensure the patient receives the correct dose of the active drug."
    },
    {
      "id": "q11",
      "question": "11) Which of the following statements about vaccine production is FALSE?",
      "options": [
        { "id": "a", "text": "The smallpox vaccine was historically produced using bovine calf skin inoculated with vaccinia virus." },
        { "id": "b", "text": "The mumps and influenza vaccines are produced using chick embryo fluids." },
        { "id": "c", "text": "The rubella (German measles) vaccine is developed using duck embryo tissue." },
        { "id": "d", "text": "Vaccines are produced exclusively through genetic engineering methods." },
        { "id": "e", "text": "Cell and tissue cultures are being used to develop new vaccines for diseases like AIDS and cancer." }
      ],
      "correctId": "d",
      "explanation": "While genetic engineering is a modern method, vaccines are also produced through historical and ongoing methods using animal tissues, such as renal monkey tissue, chick embryo fluids, and duck embryos."
    },
    {
      "id": "q12",
      "question": "12) What is the primary purpose of molecular modification in drug development?",
      "options": [
        { "id": "a", "text": "To create entirely new drug classes unrelated to existing therapies." },
        { "id": "b", "text": "To alter chemical structures to enhance pharmacologic activity or improve drug properties." },
        { "id": "c", "text": "To eliminate all potential side effects from existing drugs." },
        { "id": "d", "text": "To ensure that all drugs have identical structures for standardization." },
        { "id": "e", "text": "To replace natural drug sources with purely synthetic alternatives." }
      ],
      "correctId": "b",
      "explanation": "Molecular modification is the chemical alteration of a known organic compound to enhance its specificity, potency, absorption, or to reduce toxicity."
    },
    {
      "id": "q16",
      "question": "16) Regarding new drug design and development, the preclinical stage is aimed to study the following except:",
      "options": [
        { "id": "a", "text": "The Physico-chemical properties of the new compound" },
        { "id": "b", "text": "The new compound pharmacology" },
        { "id": "c", "text": "The short-term animal toxicity" },
        { "id": "d", "text": "The efficacy and safety in human" },
        { "id": "e", "text": "Pharmacokinetics in animals and preformulation" }
      ],
      "correctId": "d",
      "explanation": "Preclinical studies are limited to laboratory (cell culture) and animal models; testing for safety and efficacy in humans occurs later during the clinical trial phases."
    },
    {
      "id": "q17",
      "question": "17) Regarding new drug development, which of the following activities is NOT included in phase 4 study?",
      "options": [
        { "id": "a", "text": "Adverse reaction reporting" },
        { "id": "b", "text": "Post marketing activities" },
        { "id": "c", "text": "Long-term animal toxicity" },
        { "id": "d", "text": "Product defect reporting" },
        { "id": "e", "text": "Product line extension" }
      ],
      "correctId": "c",
      "explanation": "Phase 4 clinical trials are post-marketing studies conducted in humans; long-term animal toxicity is a component of the research and development phase conducted before or during early clinical trials."
    },
    {
      "id": "q18",
      "question": "18) Regarding new drug design and development, carcinogenicity study is identified by the following except:",
      "options": [
        { "id": "a", "text": "Carried out in limited number of rat and mouse strains" },
        { "id": "b", "text": "Carried out after NDA approval by the FDA" },
        { "id": "c", "text": "Done with female and male animals" },
        { "id": "d", "text": "Carried out using high, intermediate, and low doses over a 90 day" },
        { "id": "e", "text": "Carcinogenicity study is a long-term study" }
      ],
      "correctId": "b",
      "explanation": "Carcinogenicity studies are long-term preclinical tests (18–24 months) that are typically completed and submitted as part of the NDA to support a drug's safety for marketing."
    },
    {
      "id": "q20",
      "question": "20) The rDNA technology is aimed to:",
      "options": [
        { "id": "a", "text": "Change cell genetic properties" },
        { "id": "b", "text": "Solely manufacture human insulin" },
        { "id": "c", "text": "To boost cell growth effectively" },
        { "id": "d", "text": "To enable the production of specific proteins" },
        { "id": "e", "text": "To produce specific antibodies" }
      ],
      "correctId": "d",
      "explanation": "Recombinant DNA (rDNA) technology involves gene splicing to induce organisms (like bacteria) to produce specific proteins they would not otherwise make, such as human insulin or growth hormone."
    },
    {
      "id": "q21",
      "question": "21) What plays an important role in designing new drug molecules during molecular modification?",
      "options": [
        { "id": "a", "text": "Biological target selection" },
        { "id": "b", "text": "Chemical structure-pharmacologic activity relationship" },
        { "id": "c", "text": "Dosage adjustment" },
        { "id": "d", "text": "Pharmacokinetic properties" },
        { "id": "e", "text": "Route of administration" }
      ],
      "correctId": "b",
      "explanation": "Understanding how changes in chemical structure impact pharmacologic activity is fundamental for medicinal chemists when designing new molecules to achieve desired features."
    },
    {
      "id": "q22",
      "question": "22) Regarding development of new drug, in which phase of the clinical trials the drug's safety, effectiveness, and additional indications is evaluated?",
      "options": [
        { "id": "a", "text": "Phase I" },
        { "id": "b", "text": "Phase II" },
        { "id": "c", "text": "Phase III" },
        { "id": "d", "text": "Phase IV" },
        { "id": "e", "text": "All of them" }
      ],
      "correctId": "e",
      "explanation": "Safety is assessed starting in Phase 1, effectiveness is evaluated in Phases 2 and 3, and additional indications are explored in Phase 3b and Phase 4."
    },
    {
      "id": "q30",
      "question": "30) Regarding toxicological study, which of the following is true?",
      "options": [
        { "id": "a", "text": "Subacute toxicity study is conducted over short period, usually single day." },
        { "id": "b", "text": "Acute toxicity study is conducted at least for two weeks." },
        { "id": "c", "text": "Salmonella typhimurium is routinely organism used in carcinogenicity studies." },
        { "id": "d", "text": "Reproduction studies involve assessing fertility and mating behavior among amphibians." },
        { "id": "e", "text": "The observation of carcinogenicity studies lasts for 1.5-2 years." }
      ],
      "correctId": "e",
      "explanation": "Carcinogenicity testing is a long-term chronic study that generally lasts between 18 to 24 months (1.5 to 2 years)."
    },
    {
      "id": "q33",
      "question": "33) Regarding the use of animal in production of various biologic products, the poliomyelitis vaccine is developed from:",
      "options": [
        { "id": "a", "text": "In fluid of chick embryo" },
        { "id": "b", "text": "In fluid of Duck embryo" },
        { "id": "c", "text": "In cultures of renal monkey tissue" },
        { "id": "d", "text": "from the skin of bovine calves inoculated with vaccinia virus." },
        { "id": "e", "text": "none of them" }
      ],
      "correctId": "c",
      "explanation": "The source specifically notes that the poliomyelitis vaccine is prepared in cultures of renal monkey tissue."
    },
    {
      "id": "q44",
      "question": "44) Regarding drug discovery and drug design, interferon is an example of drug produced by:",
      "options": [
        { "id": "a", "text": "Monoclonal antibody production" },
        { "id": "b", "text": "rDNA" },
        { "id": "c", "text": "Human gene therapy" },
        { "id": "d", "text": "Animal hormones" },
        { "id": "e", "text": "Cell and tissue culture" }
      ],
      "correctId": "b",
      "explanation": "Recombinant DNA (rDNA) technology is the process used to produce drug products like interferon, human insulin, and the hepatitis B vaccine."
    },
    {
      "id": "q49",
      "question": "49) A company is developing a novel therapeutic approach. Which of the following scenarios would necessitate the drug being classified as a \"new drug\" by the FDA, requiring rigorous safety and efficacy re-evaluation...?",
      "options": [
        { "id": "a", "text": "The drug is a well-established chemical entity with a long history of safe clinical use." },
        { "id": "b", "text": "The company changes the tablet coating color for better patient identification..." },
        { "id": "c", "text": "The company replaces the excipient in the capsule with a plant-based alternative..." },
        { "id": "d", "text": "The company reformulates the drug from a once-daily tablet to a twice-daily sublingual spray." },
        { "id": "e", "text": "The drug is an existing chemical entity manufactured with the same formulation... child-resistant packaging." }
      ],
      "correctId": "d",
      "explanation": "According to the FDA's definition, any change in a previously approved drug’s formulation, dosage schedule, or route of administration constitutes \"newness\" under the law."
    },
    {
      "id": "q50",
      "question": "50) Regarding toxicology, how long it takes to follow up the animals for acute toxicity?",
      "options": [
        { "id": "a", "text": "one day" },
        { "id": "b", "text": "14 days" },
        { "id": "c", "text": "90 days" },
        { "id": "d", "text": "30 days" },
        { "id": "e", "text": "180 days" }
      ],
      "correctId": "d",
      "explanation": "While acute toxicity studies involve dosing over a short period (usually one day), the animals are observed for untoward signs and clinical chemistry changes typically over a 30-day postdose period."
    },
    {
      "id": "q51",
      "question": "51) The information regarding the pharmacologic profile and in vivo animal studies, which of the following statements is FALSE?",
      "options": [
        { "id": "a", "text": "In vitro methods use whole animals to evaluate drug efficacy and classify compounds as agonists or antagonists." },
        { "id": "b", "text": "In pharmacologic and toxicologic studies, rabbits are used as a model for blood coagulation." },
        { "id": "c", "text": "Dogs and rats are animal models often used for hypertension." },
        { "id": "d", "text": "Animals are not absolute predictors of human response due to species variation." },
        { "id": "e", "text": "The primary objective of animal studies is to obtain basic information on the drug’s effects to predict safe and effective use in humans." }
      ],
      "correctId": "a",
      "explanation": "\"In vitro\" means studies conducted outside the living body (such as cell cultures or enzyme systems), whereas studies using whole animals are \"in vivo\"."
    },
    {
      "id": "q53",
      "question": "53) Toxicology deals with adverse or undesired effects of drugs. Which of the following statements regarding toxicology studies is TRUE?",
      "options": [
        { "id": "a", "text": "Acute toxicity studies determine the toxic effects of a test compound and involve a single daily dose for a short period of up to two weeks." },
        { "id": "b", "text": "Carcinogenicity testing is conducted over a short-term period to quickly identify potential tumor-causing effects." },
        { "id": "c", "text": "Subacute toxicity studies assess the safety of a drug’s initial single dose for human use over a week or longer..." },
        { "id": "d", "text": "Reproduction studies primarily use Salmonella typhimurium as the animal model to detect gene mutations." },
        { "id": "e", "text": "Chronic toxicity studies often involve animal studies lasting a year or longer for drugs intended to treat chronic illnesses." }
      ],
      "correctId": "e",
      "explanation": "If a drug is intended for chronic human illness, animal toxicity studies for 1 year or longer must be undertaken to support human use."
    },
    {
      "id": "q56",
      "question": "56) Regarding the design of the prodrugs, Hydrocortisone sodium succinate is a prodrug designed to:",
      "options": [
        { "id": "a", "text": "Improve water solubility" },
        { "id": "b", "text": "Provide sustained effect" },
        { "id": "c", "text": "Protect drug from premature destruction" },
        { "id": "d", "text": "Cross blood brain barrier" },
        { "id": "e", "text": "Increase lipophilic character" }
      ],
      "correctId": "a",
      "explanation": "Hydrocortisone sodium succinate is an example of a water-soluble prodrug designed to overcome the active drug's poor solubility for intravenous injection."
    },
    {
      "id": "q76",
      "question": "76) The formulation of haloperidol as decanoate ester leads to:",
      "options": [
        { "id": "a", "text": "protect from degradation" },
        { "id": "b", "text": "increase water solubility" },
        { "id": "c", "text": "prolong drug action" },
        { "id": "d", "text": "increase biostability" },
        { "id": "e", "text": "all of them" }
      ],
      "correctId": "c",
      "explanation": "The addition of the decanoate ester to haloperidol makes the molecule less water soluble, providing a sustained therapeutic effect lasting up to 4 weeks after deep intramuscular injection."
    },
    {
      "id": "q77",
      "question": "77) Regarding animal studies on drug candidates, the final pharmacologic and toxicologic studies, as required by the FDA, to be performed on__________",
      "options": [
        { "id": "a", "text": "on small animals, usually rodents (mouse, rat)" },
        { "id": "b", "text": "a rodent and an animal from another order" },
        { "id": "c", "text": "No specification available" },
        { "id": "d", "text": "dogs and guinea pigs" },
        { "id": "e", "text": "Rabbits" }
      ],
      "correctId": "b",
      "explanation": "For final pharmacologic and toxicologic studies, the FDA requires the use of at least two animal species: a rodent and an animal from another order, such as a dog."
    },
    {
      "id": "q79",
      "question": "79) Regarding performing subacute or subchronic studies, all the following statements are true except:",
      "options": [
        { "id": "a", "text": "requires 2 weeks of daily drug administration" },
        { "id": "b", "text": "performed at three dosage levels" },
        { "id": "c", "text": "using two animal species" },
        { "id": "d", "text": "support administration of a drug to humans for a week" },
        { "id": "e", "text": "none of them" }
      ],
      "correctId": "d",
      "explanation": "Subacute studies (2 weeks of daily animal dosing) only support the initial administration of a single human dose. Supporting human use for a week or more requires 90 to 180 days of animal safety data."
    },
    {
      "id": "q80",
      "question": "80) In gene therapy, the cloned DNA may be transferred into the cells by:",
      "options": [
        { "id": "a", "text": "gene splicing" },
        { "id": "b", "text": "gene expression" },
        { "id": "c", "text": "DNA sequencing" },
        { "id": "d", "text": "disabled viral vector" },
        { "id": "e", "text": "none of them" }
      ],
      "correctId": "d",
      "explanation": "Gene therapy involves the transfer of cloned DNA into cells via various systems, including disabled retroviral gene transfer systems."
    },
    {
      "id": "q81",
      "question": "81) ANDA is used to gain approval for:",
      "options": [
        { "id": "a", "text": "generic product" },
        { "id": "b", "text": "brand product" },
        { "id": "c", "text": "Changes in the labelling of a previously approved NDA" },
        { "id": "d", "text": "both a and b" },
        { "id": "e", "text": "none of them" }
      ],
      "correctId": "a",
      "explanation": "The Abbreviated New Drug Application (ANDA) is used to gain approval to market a generic equivalent of a product already pioneer-sponsored and approved."
    },
    {
      "id": "q90",
      "question": "90) The process and time from drug discovery to approval for marketing A novel chemical entity (NCE) undergoing preclinical studies must demonstrate comprehensive data across various domains. Which of the following is considered the MOST critical aspect in determining the NCE’s potential for further development, given its direct impact on both safety and efficacy?",
      "options": [
        { "id": "a", "text": "Package and label design" },
        { "id": "b", "text": "Manufacturing and controls" },
        { "id": "c", "text": "Long-term animal toxicity" },
        { "id": "d", "text": "Absorption, Distribution, Metabolism, and Excretion" },
        { "id": "e", "text": "Organic synthesis methods" }
      ],
      "correctId": "d",
      "explanation": "Gaining information on how a drug is absorbed, distributed, metabolized, and excreted (ADME) is essential to judge its safety and effectiveness for further human trials."
    },
    {
      "id": "q99",
      "question": "99) The initial bioassay may be performed:",
      "options": [
        { "id": "a", "text": "in vivo using small animals" },
        { "id": "b", "text": "in vivo using disease-specific animal models" },
        { "id": "c", "text": "In vitro using cell cultures" },
        { "id": "d", "text": "ex vivo animal tissue" },
        { "id": "e", "text": "none of them" }
      ],
      "correctId": "c",
      "explanation": "Initial bioassays are frequently performed in vitro using cell cultures to test a new agent's effect against specific enzyme systems or tumor cells."
    }
  ]
};


// --- COMPONENTS ---
const FeatureCard = ({ title, desc, Icon, onClick }: any) => (
  <button className="feature-card" onClick={onClick}>
    <div className="icon-wrapper">
      <Icon size={32} />
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
    </div>
  </button>
);

function App() {
  const [step, setStep] = useState('subject');
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQs, setAnsweredQs] = useState<any>({});

  const handleSubjectSelect = (sub: any) => {
    setSelectedSubject(sub);
    if (sub.id !== 'therapeutics' && sub.id !== 'delivery') {
      setStep('coming_soon_subject');
      return;
    }
    setStep('topic');
  };

  const handleTopicSelect = (topic: any) => {
    setSelectedTopic(topic);
    const questions = (MCQS as any)[topic.id] || [];
    setCurrentQuestions(questions);
    setAnsweredQs({});
    setCurrentQuestionIndex(0);
    setStep('mcq');
  };

  const handleAnswerSelect = (questionId: string, optionId: string, correctId: string) => {
    if ((answeredQs as any)[questionId]) return;
    setAnsweredQs((prev: any) => ({
      ...prev,
      [questionId]: {
        selected: optionId,
        isCorrect: optionId === correctId
      }
    }));
  };

  const nextQuestion = () => setCurrentQuestionIndex((i: number) => i + 1);
  const prevQuestion = () => setCurrentQuestionIndex((i: number) => i - 1);

  return (
    <div className="app-container">
      <div className="video-header-container">
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/header_video.mp4" type="video/mp4" />
        </video>
        <div className="video-header-overlay">
          <h1 className="header-title">امسكيو عل طاير</h1>
          <p className="header-subtitle">للمرحلة الخامسة</p>
        </div>
      </div>

      <div className="promo-banner">
        <div className="promo-video-wrapper">
          <video
            className="promo-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/promo_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="promo-content">
          <p className="promo-text">تابعنا على التلكرام حتى تشوف محتوى وملخصات اكثر</p>
          <a href="https://t.me/PandaRxxx" target="_blank" rel="noopener noreferrer" className="telegram-btn"><Send size={18} /> @PandaRxxx</a>
        </div>
      </div>

      <main className="main-content" style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
        <div className="nav-bar" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <button
            className="back-btn"
            onClick={() => {
              if (step === 'topic' || step === 'coming_soon_subject') {
                setStep('subject');
                setSelectedSubject(null);
              } else if (step === 'mcq') {
                setStep('topic');
                setSelectedTopic(null);
              }
            }}
            disabled={step === 'subject'}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#333', padding: '0.5rem 1rem', borderRadius: '8px' }}
          >
            <ChevronLeft size={20} /> رجوع
          </button>
          <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center' }}>
            <span>الرئيسية</span>
            <span>
              {selectedSubject && ` / ${(selectedSubject as any).title}`}
              {selectedTopic && step === 'mcq' && ` / ${(selectedTopic as any).title}`}
            </span>
          </div>
        </div>

        {step === 'subject' && (
          <div className="subjects-section" style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>اختر المادة الدراسية</h2>
            <p style={{ color: '#aaa', marginBottom: '2rem' }}>حدد التخصص الذي ترغب في دراسته ومراجعته اليوم.</p>
            <div className="grid-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              {SUBJECTS.map((sub: any) => (
                <FeatureCard key={sub.id} title={sub.title} desc={sub.desc} Icon={sub.icon} onClick={() => handleSubjectSelect(sub)} />
              ))}
            </div>
          </div>
        )}

        {step === 'coming_soon_subject' && (
          <div className="coming-soon-container" style={{ textAlign: 'center', padding: '3rem' }}>
            <h2>قريباً!</h2>
            <p>الأسئلة الخاصة بهذا الموضوع قيد التحضير حالياً.</p>
          </div>
        )}

        {step === 'topic' && (
          <div className="grid-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            {((TOPICS as any)[selectedSubject?.id || 'therapeutics'] || []).map((topic: any) => (
              <FeatureCard
                key={topic.id}
                title={topic.title}
                desc={topic.desc}
                Icon={topic.icon}
                onClick={() => handleTopicSelect(topic)}
              />
            ))}
          </div>
        )}

        {step === 'mcq' && (
          <div className="mcq-container" style={{ width: '100%' }}>
            {currentQuestions.length === 0 ? (
              <div className="coming-soon-container" style={{ textAlign: 'center', padding: '3rem' }}>
                <h2>قريباً!</h2>
                <p>الأسئلة الخاصة بهذا الموضوع قيد التحضير حالياً.</p>
              </div>
            ) : (() => {
              const q: any = currentQuestions[currentQuestionIndex];
              const answered: any = (answeredQs as any)[q.id];

              return (
                <div className="mcq-card" dir="ltr" style={{ textAlign: 'left', background: '#111', padding: '2rem', borderRadius: '12px' }}>
                  <div className="mcq-header" style={{ marginBottom: '1rem' }}>
                    <span className="question-count">السؤال {currentQuestionIndex + 1} من {currentQuestions.length}</span>
                  </div>
                  <h3 className="mcq-question" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>{q.question}</h3>
                  <div className="options-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {q.options.map((opt: any) => {
                      const isSelected = answered?.selected === opt.id;
                      const isCorrect = opt.id === q.correctId;
                      let btnClass = 'option-button';

                      if (answered) {
                        if (isCorrect) btnClass += ' correct';
                        else if (isSelected) btnClass += ' incorrect';
                        else btnClass += ' disabled';
                      } else if (isSelected) {
                        btnClass += ' selected';
                      }

                      return (
                        <button
                          key={opt.id}
                          className={btnClass}
                          onClick={() => handleAnswerSelect(q.id, opt.id, q.correctId)}
                          disabled={!!answered}
                          style={{
                            display: 'flex', justifyContent: 'space-between', padding: '1rem',
                            background: '#222', borderRadius: '8px', border: '1px solid #444',
                            textAlign: 'left'
                          }}
                        >
                          <span>{opt.text}</span>
                          {answered && opt.id === q.correctId && <Check size={18} color="#4caf50" />}
                          {answered && opt.id === answered.selected && opt.id !== q.correctId && <X size={18} color="#f44336" />}
                        </button>
                      );
                    })}
                  </div>

                  {answered && (
                    <div className={`feedback-msg ${answered.isCorrect ? 'success' : 'error'}`} dir="rtl" style={{ textAlign: 'right', marginTop: '1.5rem', padding: '1rem', background: '#222', borderRadius: '8px' }}>
                      <strong>{answered.isCorrect ? 'إجابة صحيحة! بطل 👏' : 'إجابة خاطئة! ❌'}</strong>
                      <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-line', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                        <strong>التفسير:</strong> <span dir="auto">{q.explanation}</span>
                      </p>
                    </div>
                  )}

                  <div className="mcq-navigation" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <button
                      className="nav-btn"
                      onClick={prevQuestion}
                      disabled={currentQuestionIndex === 0}
                      style={{ padding: '0.5rem 1rem', background: '#333', borderRadius: '8px', display: 'flex', alignItems: 'center', opacity: currentQuestionIndex === 0 ? 0.5 : 1 }}
                    >
                      <ChevronLeft size={20} /> السابق
                    </button>
                    <button
                      className="nav-btn next"
                      onClick={nextQuestion}
                      disabled={currentQuestionIndex === currentQuestions.length - 1}
                      style={{ padding: '0.5rem 1rem', background: '#333', borderRadius: '8px', display: 'flex', alignItems: 'center', opacity: currentQuestionIndex === currentQuestions.length - 1 ? 0.5 : 1 }}
                    >
                      التالي <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
