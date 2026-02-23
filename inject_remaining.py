import json
import re

path = r'c:\Users\MSI\OneDrive\Desktop\untitled\src\App.tsx'

questions = {
    'schizophrenia': [
        {
            'id': 'q3',
            'question': "3- A patient was admitted to hospital due to acute psychotic episode. Which one of the following features is a typical residual feature after the acute psychotic episode has resolved?",
            'options': [
                {'id': 'a', 'text': 'Hallucination'},
                {'id': 'b', 'text': 'Delusion'},
                {'id': 'c', 'text': 'Disconnected thought processes'},
                {'id': 'd', 'text': 'Anxiety'},
                {'id': 'e', 'text': 'None of the above'}
            ],
            'correctId': 'd',
            'explanation': "The sources state that after an acute psychotic episode has resolved, residual features may include anxiety, suspiciousness, lack of motivation, and poor insight."
        },
        {
            'id': 'q26',
            'question': "26- The drug of choice for patients with Schizophrenia, who had inadequate clinical response with two appropriate antipsychotic drugs:",
            'options': [
                {'id': 'a', 'text': 'Aripiprazole'},
                {'id': 'b', 'text': 'Clozapine'},
                {'id': 'c', 'text': 'Quetiapine'},
                {'id': 'd', 'text': 'Risperidone injection'},
                {'id': 'e', 'text': 'Use combination of first- and second-generation antipsychotic drugs'}
            ],
            'correctId': 'b',
            'explanation': "Clozapine monotherapy is specifically recommended in Stage 3 for patients who have had an inadequate response to at least two other antipsychotic trials."
        },
        {
            'id': 'q27',
            'question': "27- Initial therapy for schizophrenia to be successful, should be characterized by the following, EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'normalization of sleep and eating is the main goal'},
                {'id': 'b', 'text': 'agitation, hostility, anxiety, and aggression should be decreased within the first 7 days'},
                {'id': 'c', 'text': 'Aripiprazole or ziprasidone can be used to calm agitated patients'},
                {'id': 'd', 'text': 'Combining IM lorazepam with olanzapine or clozapine is recommended for patients with severe symptoms'},
                {'id': 'e', 'text': 'Recently, Inhaled loxapine powder, FDA-approved for acute agitation associated with schizophrenia'}
            ],
            'correctId': 'd',
            'explanation': "The sources explicitly state that combining IM lorazepam with olanzapine or clozapine is NOT recommended because of the risk of hypotension and respiratory depression."
        },
        {
            'id': 'q85',
            'question': r"85- A young adult suspected to have schizophrenia. Which one of the following set of symptoms if present for $\ge 1$ month can confirm the diagnosis of schizophrenia?",
            'options': [
                {'id': 'a', 'text': 'Delusion and impaired attention'},
                {'id': 'b', 'text': 'Catatonic behavior and anhedonia'},
                {'id': 'c', 'text': 'Disorganized speech and catatonic behavior'},
                {'id': 'd', 'text': 'Hallucinations and impaired memory'},
                {'id': 'e', 'text': 'None of the above'}
            ],
            'correctId': 'c',
            'explanation': "Diagnosis (Criterion A) requires at least two symptoms for one month, including delusions, hallucinations, disorganized speech, and grossly disorganized or catatonic behavior."
        },
        {
            'id': 'q86',
            'question': "86- H.K is a 28 years old woman was recently diagnosed to have schizophrenia. She also suffers from menstrual irregularities due to hyperprolactinemia. Which one of the following drugs is the preferred first line therapy for HK?",
            'options': [
                {'id': 'a', 'text': 'Ziprasidone'},
                {'id': 'b', 'text': 'Haloperidol'},
                {'id': 'c', 'text': 'Risperidone'},
                {'id': 'd', 'text': 'Aripiprazole'},
                {'id': 'e', 'text': 'Clozapine'}
            ],
            'correctId': 'd',
            'explanation': "Aripiprazole is among the antipsychotics with a low risk for extrapyramidal symptoms and hyperprolactinemia. Conversely, risperidone is known to increase prolactin levels."
        },
        {
            'id': 'q87',
            'question': "87- K.K is 47 years old man. His schizophrenia is treated by olanzapine. Olanzapine has a high risk for developing all these side effects EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Blurred vision'},
                {'id': 'b', 'text': 'New onset diabetes'},
                {'id': 'c', 'text': 'Dyslipidemia'},
                {'id': 'd', 'text': 'Pseudoparkinsonism'},
                {'id': 'e', 'text': 'Weight gain'}
            ],
            'correctId': 'd',
            'explanation': "Olanzapine is associated with high risks of metabolic side effects (weight gain, diabetes, dyslipidemia) and anticholinergic effects like blurred vision. The risk of extrapyramidal symptoms (like pseudoparkinsonism) is generally lower for SGAs like olanzapine compared to FGAs."
        },
        {
            'id': 'q99',
            'question': "99- concerning schizophrenia. The followings are negative symptoms, EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'illusions'},
                {'id': 'b', 'text': 'alogia'},
                {'id': 'c', 'text': 'anhedonia'},
                {'id': 'd', 'text': 'social isolation'},
                {'id': 'e', 'text': 'avolition'}
            ],
            'correctId': 'a',
            'explanation': "Illusions/hallucinations and delusions are positive symptoms. Alogia, avolition, anhedonia, and social isolation are categorized as negative symptoms."
        },
        {
            'id': 'q103',
            'question': "103- Different neurotransmitter play role in schizophrenia. The significant one is:",
            'options': [
                {'id': 'a', 'text': 'Serotonin'},
                {'id': 'b', 'text': 'Dopamine'},
                {'id': 'c', 'text': 'Acetylcholine'},
                {'id': 'd', 'text': 'GABA'},
                {'id': 'e', 'text': 'epinephrine'}
            ],
            'correctId': 'b',
            'explanation': "The dopamine receptor defect and hyperactivity/hypofunction in specific brain regions are central to the pathophysiology of schizophrenia."
        },
        {
            'id': 'q106',
            'question': "106- Which antipsychotic medication carries the highest risk of neutropenia and agranulocytosis, necessitating regular blood monitoring during treatment?",
            'options': [
                {'id': 'a', 'text': 'Risperidone'},
                {'id': 'b', 'text': 'Olanzapine'},
                {'id': 'c', 'text': 'Clozapine'},
                {'id': 'd', 'text': 'Paliperidone'},
                {'id': 'e', 'text': 'Haloperidol'}
            ],
            'correctId': 'c',
            'explanation': "Clozapine is contraindicated for nursing mothers due to the risk of severe neutropenia and requires strict monitoring."
        },
        {
            'id': 'q110',
            'question': "110- Which of the following statements about the use of antipsychotics in pregnancy is accurate?",
            'options': [
                {'id': 'a', 'text': 'All antipsychotics are completely safe to use throughout pregnancy'},
                {'id': 'b', 'text': 'Haloperidol has been the most studied first-generation antipsychotic in pregnancy'},
                {'id': 'c', 'text': 'Second-generation antipsychotics significantly increase the risk of congenital malformations'},
                {'id': 'd', 'text': 'Antipsychotics should never be used during pregnancy under any circumstance'},
                {'id': 'e', 'text': 'In utero exposure to antipsychotics has no effect on neonatal outcomes'}
            ],
            'correctId': 'b',
            'explanation': "The sources state that Haloperidol is the best studied FGA in pregnancy with approximately 400 reported exposures."
        }
    ],
    'insomnia': [
        {
            'id': 'q68',
            'question': "68- A.J. is 53 years old man who suffers from insomnia in the last 2.5 months. What can you consider the type of insomnia for this patient?",
            'options': [
                {'id': 'a', 'text': 'Short term'},
                {'id': 'b', 'text': 'Transient'},
                {'id': 'c', 'text': 'Long term'},
                {'id': 'd', 'text': 'Chronic'},
                {'id': 'e', 'text': 'Persistent'}
            ],
            'correctId': 'a',
            'explanation': "Short-term insomnia is defined as lasting less than 3 months."
        },
        {
            'id': 'q69',
            'question': "69- A patient with chronic insomnia was treated by zolpidem and educated about sleep hygiene. Which one of the following statements regarding the evaluation of therapeutic outcome for this patient is true?",
            'options': [
                {'id': 'a', 'text': 'After 1 week of therapy, the patient should be assessed for drug adherence, effectiveness, and adverse events'},
                {'id': 'b', 'text': 'After 7 days of therapy, the patient should be assessed for drug effectiveness, adverse events, and adherence to non-pharmacologic recommendations'},
                {'id': 'c', 'text': 'After 1 week of therapy, the patient should be assessed for drug effectiveness, and adverse events'},
                {'id': 'd', 'text': 'After 1 month of therapy, the patient should be assessed for drug effectiveness, adverse events, and adherence to non-pharmacologic recommendations'},
                {'id': 'e', 'text': 'None of the above'}
            ],
            'correctId': 'b',
            'explanation': "Patients with chronic insomnia should be assessed after 1 week for effectiveness, adverse events, and adherence to non-pharmacologic recommendations."
        }
    ],
    'contraception': [
        {
            'id': 'q5',
            'question': "5- In women with anovulatory bleeding with high androgen levels or signs of hyperandrogenism, the recommended combined hormonal contraceptives (CHCs) are the following except:",
            'options': [
                {'id': 'a', 'text': 'CHCs containing 35 mcg or less ethinyl estradiol'},
                {'id': 'b', 'text': 'CHCs containing levonorgestrel'},
                {'id': 'c', 'text': 'CHCs containing norgestimate'},
                {'id': 'd', 'text': 'CHCs containing drospirenone'},
                {'id': 'e', 'text': 'CHCs containing desogestrel'}
            ],
            'correctId': 'b',
            'explanation': "Women with high androgen levels should use CHCs with minimal androgenic side effects (norgestimate, desogestrel) or antiandrogenic effects (drospirenone). Levonorgestrel is an older progestin with higher androgenic activity."
        },
        {
            'id': 'q6',
            'question': "6- Which of the following should be considered when selecting a CHC for a woman who has a history of migraines with aura:",
            'options': [
                {'id': 'a', 'text': 'A lower dose of estrogen'},
                {'id': 'b', 'text': 'A higher dose of estrogen'},
                {'id': 'c', 'text': 'A progestin-only contraceptive method'},
                {'id': 'd', 'text': 'combined estrogen plus progesterone pills'},
                {'id': 'e', 'text': 'none of the above'}
            ],
            'correctId': 'c',
            'explanation': "Individuals of any age who have migraine with aura should NOT use CHCs due to the risk of stroke and should consider a progestin-only option."
        },
        {
            'id': 'q30',
            'question': "30- T.D is 37 years old female with negative past medical history, T.D is a smoker that smokes 15-20 cigarettes per day. She came to the women health clinic asking for an effective short-term contraceptive. What will be the best contraception method for T.D?",
            'options': [
                {'id': 'a', 'text': 'CHC with low dose estrogen'},
                {'id': 'b', 'text': 'CHC with high dose estrogen'},
                {'id': 'c', 'text': 'Transdermal patches'},
                {'id': 'd', 'text': 'Progestin only contraceptive'},
                {'id': 'e', 'text': 'Paragard'}
            ],
            'correctId': 'd',
            'explanation': "Smoking 15 or more cigarettes per day by individuals over 35 years is a contraindication to the use of CHCs, and progestin-only methods (or non-hormonal methods like IUDs) should be considered."
        },
        {
            'id': 'q32',
            'question': "32- What is the type should not be left in place for more than 24 hours because of the risk of toxic shock syndrome?",
            'options': [
                {'id': 'a', 'text': 'Diaphragms'},
                {'id': 'b', 'text': 'cervical cap'},
                {'id': 'c', 'text': 'Male condoms'},
                {'id': 'd', 'text': 'Female condoms'},
                {'id': 'e', 'text': 'Spermicide Implanted Barrier'}
            ],
            'correctId': 'a',
            'explanation': "A diaphragm should not be left in place longer than 24 hours due to the risk of toxic shock syndrome (TSS)."
        },
        {
            'id': 'q33',
            'question': "33- The following are the disadvantages of combined oral contraceptive pills, EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Increase the risk of blood clots.'},
                {'id': 'b', 'text': 'Irregular bleeding or spotting.'},
                {'id': 'c', 'text': 'Increase risk of endometrial cancer.'},
                {'id': 'd', 'text': 'Not suitable for breastfeeding women.'},
                {'id': 'e', 'text': 'Does not protect against sexual transmitted infections.'}
            ],
            'correctId': 'c',
            'explanation': "CHCs actually reduce the risk of ovarian and endometrial cancer."
        },
        {
            'id': 'q38',
            'question': "38- IUD is well known to have minimal systemic adverse effects, that is attributed to the primary contraceptive mechanism of the Levonorgestrel IUS through:",
            'options': [
                {'id': 'a', 'text': 'Negative feedback to the hypothalamus'},
                {'id': 'b', 'text': 'Endometrial atrophy'},
                {'id': 'c', 'text': 'Ovulatory Suppression'},
                {'id': 'd', 'text': 'Apoptosis of gametes'},
                {'id': 'e', 'text': 'All of the above'}
            ],
            'correctId': 'b',
            'explanation': "The contraceptive activity of progestin-releasing IUDs is caused by endometrial suppression/atrophy and thickening of cervical mucus."
        },
        {
            'id': 'q45',
            'question': "45- Which method of starting minipills involves taking the first pill on the day of the doctor office visit?",
            'options': [
                {'id': 'a', 'text': 'Sunday start method'},
                {'id': 'b', 'text': 'Quick start method'},
                {'id': 'c', 'text': 'First-day start method'},
                {'id': 'd', 'text': 'Emergency contraception method'},
                {'id': 'e', 'text': 'None of the above'}
            ],
            'correctId': 'b',
            'explanation': "The quick-start method involves initiating contraception on the day of the clinic visit, regardless of the timing of the menstrual cycle."
        },
        {
            'id': 'q46',
            'question': "46- Ulipristal is a prescription selective progesterone receptor modulator. It is taken as a single dose of 30 mg within _______ hours of unprotected intercourse.",
            'options': [
                {'id': 'a', 'text': '24'},
                {'id': 'b', 'text': '48'},
                {'id': 'c', 'text': '72'},
                {'id': 'd', 'text': '96'},
                {'id': 'e', 'text': '120'}
            ],
            'correctId': 'e',
            'explanation': "Ulipristal is taken within 120 hours (5 days) of unprotected intercourse."
        },
        {
            'id': 'q50',
            'question': "50- S A, is a 29 y o woman weighing 98 kg (her ideal body weight is 60Kg), taking oral contraceptive pills but she is afraid from her poor adherence. As a pharmacist, what is the best contraception must be used?",
            'options': [
                {'id': 'a', 'text': 'etonogestrel implant'},
                {'id': 'b', 'text': 'DMPA'},
                {'id': 'c', 'text': 'EE pills'},
                {'id': 'd', 'text': 'mini pills'},
                {'id': 'e', 'text': 'NuvaRing'}
            ],
            'correctId': 'b',
            'explanation': "For obese individuals or those with adherence issues, long-acting methods like DMPA (injection), implants, or IUDs are beneficial as they have lower failure rates than CHCs."
        },
        {
            'id': 'q51',
            'question': "51- Women with anovulatory bleeding from PCOS who are pursuing pregnancy. Women may be treated with:",
            'options': [
                {'id': 'a', 'text': 'letrozole'},
                {'id': 'b', 'text': 'ethinyl estradiol'},
                {'id': 'c', 'text': 'Norgestimate'},
                {'id': 'd', 'text': 'Desogestrel'},
                {'id': 'e', 'text': 'Drospirenone'}
            ],
            'correctId': 'a',
            'explanation': "Women with PCOS pursuing pregnancy may be treated with letrozole or clomiphene citrate for ovulation induction."
        },
        {
            'id': 'q62',
            'question': "62- When is a levonorgestrel-releasing IUD considered a first-line treatment for dysmenorrhea?",
            'options': [
                {'id': 'a', 'text': 'When combined with NSAIDs'},
                {'id': 'b', 'text': 'When other CHCs haven\'t been effective'},
                {'id': 'c', 'text': 'For dysmenorrhea secondary to endometriosis'},
                {'id': 'd', 'text': 'Always the first-line treatment'},
                {'id': 'e', 'text': 'Not recommended for treating dysmenorrhea'}
            ],
            'correctId': 'b',
            'explanation': "According to the treatment algorithm, if NSAIDs and CHCs are not effective, long-acting progestins like the levonorgestrel-releasing IUD should be considered."
        },
        {
            'id': 'q63',
            'question': "63- Which of these statements about the Twirla transdermal patch do you think is correct?",
            'options': [
                {'id': 'a', 'text': 'It provides Ethinyl estradiol (EE) (35 mg) and levonorgestrel (150 mg) daily'},
                {'id': 'b', 'text': 'It provides 0.35 mcg of EE and 120 mcg of norgestimate daily.'},
                {'id': 'c', 'text': 'EE (30 mcg) and levonorgestrel (120 mcg) are provided daily.'},
                {'id': 'd', 'text': 'It used to provide 120 mcg of norgestimate and 0.95 mg of EE daily.'},
                {'id': 'e', 'text': 'It provides 0.35 mg of EE and 0.15 mcg of levonorgestrel daily.'}
            ],
            'correctId': 'c',
            'explanation': "Based on the choices provided in the MCQ and standard pharmacology (as the patch details were brief in the text), Twirla provides 30 mcg of EE and 120 mcg of levonorgestrel daily."
        }
    ],
    'hrt': [
        {
            'id': 'q4',
            'question': "4- About menopause clinical presentation. Which of the following statements about menopause symptom(s) do you consider correct?",
            'options': [
                {'id': 'a', 'text': 'hot flushes and night sweats'},
                {'id': 'b', 'text': 'vaginal dryness and dyspareunia'},
                {'id': 'c', 'text': 'sexual dysfunction'},
                {'id': 'd', 'text': 'arthralgia'},
                {'id': 'e', 'text': 'All are correct.'}
            ],
            'correctId': 'e',
            'explanation': "All the listed symptoms (vasomotor, urogenital, sexual, and joint pain) are part of the clinical presentation of menopause."
        },
        {
            'id': 'q7',
            'question': "7- Regarding hormone therapy in menopausal females. Which of the following are serious health risks that have been associated with menopausal hormone therapy?",
            'options': [
                {'id': 'a', 'text': 'High blood pressure and diabetes'},
                {'id': 'b', 'text': 'Breast cancer and heart disease'},
                {'id': 'c', 'text': 'Colon cancer and hyperthyroidism'},
                {'id': 'd', 'text': 'Esophageal cancer and liver toxicity'},
                {'id': 'e', 'text': 'All the above'}
            ],
            'correctId': 'b',
            'explanation': "Serious adverse effects of MHT include an increased risk for stroke, VTE, and breast cancer (especially with combined progestogen use)."
        },
        {
            'id': 'q25',
            'question': "25- Which one of the following is FDA approved for the treatment of moderate-to-severe dyspareunia and vaginal dryness in post menopause women:",
            'options': [
                {'id': 'a', 'text': 'Ospemifene'},
                {'id': 'b', 'text': 'Raloxifene'},
                {'id': 'c', 'text': 'bazedoxifene'},
                {'id': 'd', 'text': 'Intermittent combined estrogen–progestogen treatment'},
                {'id': 'e', 'text': 'Continuous Combined Estrogen–Progestogen treatment'}
            ],
            'correctId': 'a',
            'explanation': "Ospemifene is a SERM approved for the treatment of dyspareunia from menopausal vulvar and vaginal atrophy."
        },
        {
            'id': 'q61',
            'question': "61- Dehydroepiandrosterone (DHEA) is a precursor hormone that can be converted into:",
            'options': [
                {'id': 'a', 'text': 'Only testosterone'},
                {'id': 'b', 'text': 'Only estrogen'},
                {'id': 'c', 'text': 'estrogen, estradiol, and testosterone'},
                {'id': 'd', 'text': 'Selective Estrogen Receptor Modulators (SERMs)'},
                {'id': 'e', 'text': 'Phytoestrogens'}
            ],
            'correctId': 'c',
            'explanation': "DHEA is a precursor hormone in the synthesis of estrone, estradiol, and testosterone."
        }
    ],
    'menstruation': [
        {
            'id': 'q17',
            'question': "17- A 14 age old female complains from crampy pelvic pain beginning shortly during menses. Pain radiates into lower back or thighs. Which of the following is the first-line therapy for dysmenorrhea?",
            'options': [
                {'id': 'a', 'text': 'Acupuncture'},
                {'id': 'b', 'text': 'Herbal supplements'},
                {'id': 'c', 'text': 'NSAIDs'},
                {'id': 'd', 'text': 'Exercise'},
                {'id': 'e', 'text': 'Watchful waiting'}
            ],
            'correctId': 'c',
            'explanation': "NSAIDs are the first-line therapy for dysmenorrhea and are effective in up to 80% of patients."
        },
        {
            'id': 'q18',
            'question': "18- A 23-year-old female complains of absence of menses (amenorrhea) over 3 months period. She experienced menarche at the age of 15 years. What is the first step in evaluating this complaint?",
            'options': [
                {'id': 'a', 'text': 'Evaluate whether she may have anorexia.'},
                {'id': 'b', 'text': 'Check her TSH level.'},
                {'id': 'c', 'text': 'Perform a pregnancy test.'},
                {'id': 'd', 'text': 'Evaluate whether she may have undernutrition.'},
                {'id': 'e', 'text': 'Quantify her level of exercise.'}
            ],
            'correctId': 'c',
            'explanation': "Unrecognized pregnancy is a common cause; therefore, a urine pregnancy test should be one of the first steps in evaluating amenorrhea."
        },
        {
            'id': 'q94',
            'question': "94- What is the recommended first-line therapy for patients with functional hypothalamic amenorrhea, according to the 2017 Endocrine Society Clinical Practice Guideline?",
            'options': [
                {'id': 'a', 'text': 'Oral contraceptives'},
                {'id': 'b', 'text': 'Conjugated equine estrogen'},
                {'id': 'c', 'text': 'Estradiol patch'},
                {'id': 'd', 'text': 'non-pharmacological treatment'},
                {'id': 'e', 'text': 'A short-term transdermal estrogen with cyclic oral progestins'}
            ],
            'correctId': 'e',
            'explanation': "The 2017 guidelines recommend trying nonpharmacological therapy first, and then starting a short-term transdermal estrogen with cyclic oral progestins."
        }
    ],
    'oncology': [
        {
            'id': 'q1',
            'question': "1- A patient with CML was treated by a tyrosine kinase inhibitor. How can deep, long-lasting molecular response be defined?",
            'options': [
                {'id': 'a', 'text': 'BCR-ABL < 0.1%'},
                {'id': 'b', 'text': 'BCR-ABL < 1%'},
                {'id': 'c', 'text': 'BCR-ABL > 0.1%'},
                {'id': 'd', 'text': 'Absence of BCR-ABL.'},
                {'id': 'e', 'text': 'BCR-ABL < 10%'}
            ],
            'correctId': 'a',
            'explanation': "A deep, long-lasting molecular response is defined as BCR-ABL < 0.1%."
        },
        {
            'id': 'q2',
            'question': "2- A patient with CML was treated by nilotinib. Which one of the followings is a unique side effect for nilotinib (a side effect that is not common with other TKIs)?",
            'options': [
                {'id': 'a', 'text': 'Pleural effusion'},
                {'id': 'b', 'text': 'QT prolongation'},
                {'id': 'c', 'text': 'Arterial thrombosis'},
                {'id': 'd', 'text': 'Hyperglycemia'},
                {'id': 'e', 'text': 'Myelosuppression'}
            ],
            'correctId': 'c',
            'explanation': "Pleural effusions are reported with imatinib and dasatinib but NOT with nilotinib. Nilotinib and other advanced TKIs are associated with arterial/vascular events."
        },
        {
            'id': 'q28',
            'question': "28- T.D is 9 years old boy with acute lymphoblastic leukemia. While you were observing his treatment you noticed that his induction phase regimen is: Cyclophosphamide, L-asparaginase, Vincristine, and Prednisolone. The senior clinical pharmacist suggested to add Mesna to the treatment regimen. What is the reason behind adding Mesna to this treatment protocol?",
            'options': [
                {'id': 'a', 'text': 'To further intensify the treatment protocol'},
                {'id': 'b', 'text': 'To reduce the risk of hemorrhagic cystitis of cyclophosphamide'},
                {'id': 'c', 'text': 'To reduce the risk of vincristine toxicity'},
                {'id': 'd', 'text': 'To boost immune system'},
                {'id': 'e', 'text': 'To relief the symptoms of leukemia'}
            ],
            'correctId': 'b',
            'explanation': "Nitrogen mustards like cyclophosphamide and ifosfamide cause hemorrhagic cystitis, which is mitigated by Mesna."
        },
        {
            'id': 'q52',
            'question': "52- Which drug is an anti-CD-22 and also used in relapsed and refractory B-ALL?",
            'options': [
                {'id': 'a', 'text': 'Clofarabine'},
                {'id': 'b', 'text': 'Blinatumomab'},
                {'id': 'c', 'text': 'Inotuzumab ozogamicin'},
                {'id': 'd', 'text': 'Tisagenlecleucel'},
                {'id': 'e', 'text': 'Nelarabine'}
            ],
            'correctId': 'c',
            'explanation': "Inotuzumab ozogamicin (anti-CD-22) is used in relapsed and refractory B-ALL."
        },
        {
            'id': 'q53',
            'question': "53- Small-Molecule Inhibitors used to treat CLL. Which drug that targets B-cell lymphoma 2 (BCL-2) protein and may be used as first line therapy or for patients with relapsed/refractory CLL?",
            'options': [
                {'id': 'a', 'text': 'Venetoclax'},
                {'id': 'b', 'text': 'Idelalisib'},
                {'id': 'c', 'text': 'duvelisib'},
                {'id': 'd', 'text': 'Ibrutinib'},
                {'id': 'e', 'text': 'Acalabrutinib'}
            ],
            'correctId': 'a',
            'explanation': "Venetoclax is a small molecule inhibitor that targets BCL-2."
        },
        {
            'id': 'q71',
            'question': "71- Many cytotoxic drugs are carcinogenic. All of the following drugs have a high risk to cause leukemia as a secondary malignancy EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Melphalan'},
                {'id': 'b', 'text': 'Fluorouracil'},
                {'id': 'c', 'text': 'Etoposide'},
                {'id': 'd', 'text': 'Doxorubicin'},
                {'id': 'e', 'text': 'Cyclophosphamide'}
            ],
            'correctId': 'b',
            'explanation': "Alkylating agents (melphalan, cyclophosphamide), anthracyclines (doxorubicin), and epipodophyllotoxins (etoposide) are linked to secondary leukemias."
        },
        {
            'id': 'q73',
            'question': "73- A patient with stage 1 colon cancer. The tumor was removed by surgery. What is the aim of surgery for this patient?",
            'options': [
                {'id': 'a', 'text': 'Palliative'},
                {'id': 'b', 'text': 'Preventive'},
                {'id': 'c', 'text': 'Curative'},
                {'id': 'd', 'text': 'Diagnostic'},
                {'id': 'e', 'text': 'None of the above'}
            ],
            'correctId': 'c',
            'explanation': "For localized disease, surgery is the primary treatment modality used with curative intent."
        },
        {
            'id': 'q74',
            'question': "74- A patient with stage 3 rectal cancer. 5FU and leucovorin was given before performing surgical removal of the tumor. What is the type of chemotherapeutic regimen that used for this patient?",
            'options': [
                {'id': 'a', 'text': 'Adjuvant'},
                {'id': 'b', 'text': 'Neoadjuvant'},
                {'id': 'c', 'text': 'Palliative'},
                {'id': 'd', 'text': 'Salvage'},
                {'id': 'e', 'text': 'Induction'}
            ],
            'correctId': 'b',
            'explanation': "Chemotherapy given before surgical resection to decrease tumor burden is called neoadjuvant chemotherapy."
        },
        {
            'id': 'q83',
            'question': "83- A 63 years old patient with CML was not responding to imatinib. Upon investigations T315I mutation was negative. The patient has a history of torsades de pointes (a type of arrhythmia with long QT interval). What is the most suitable therapy for this patient?",
            'options': [
                {'id': 'a', 'text': 'Ibrutinib'},
                {'id': 'b', 'text': 'Nilotinib'},
                {'id': 'c', 'text': 'Omacetaxine'},
                {'id': 'd', 'text': 'Ponatinib'},
                {'id': 'e', 'text': 'Bosutinib'}
            ],
            'correctId': 'd',
            'explanation': "Ponatinib is a high-potency salvage choice, though clinicians must be cautious with QTC-prolonging drugs."
        },
        {
            'id': 'q84',
            'question': "84- A 67 years old man with a history of atrial fibrillation. He is recently diagnosed to have CLL with deletion of 17 P. What is the best initial therapy for this patient?",
            'options': [
                {'id': 'a', 'text': 'Ibrutinib'},
                {'id': 'b', 'text': 'Venetoclax plus obinutuzumab'},
                {'id': 'c', 'text': 'FCR (fludarabine, cyclophosphamide, and rituximab)'},
                {'id': 'd', 'text': 'Idelalisib plus rituximab'},
                {'id': 'e', 'text': 'Duvelisib'}
            ],
            'correctId': 'b',
            'explanation': "While ibrutinib is a first-line option, it is associated with an increased risk of atrial fibrillation. Therefore, for a patient with existing AF, Venetoclax plus obinutuzumab is a preferred first-line alternative."
        },
        {
            'id': 'q97',
            'question': "97- Remission induction therapy of acute lymphocytic leukemia. A 44 years old adult patient diagnosed with acute lymphocytic leukemia, which option of the following is not included for his remission induction therapy?",
            'options': [
                {'id': 'a', 'text': 'Vincristine'},
                {'id': 'b', 'text': 'Lasparaginase'},
                {'id': 'c', 'text': 'Clofarabine'},
                {'id': 'd', 'text': 'Dexamethasone'},
                {'id': 'e', 'text': 'Anthracycline'}
            ],
            'correctId': 'c',
            'explanation': "Induction for ALL typically consists of vincristine, L-asparaginase, and a steroid (like dexamethasone), with an anthracycline added for adults. Clofarabine is used for relapsed cases."
        },
        {
            'id': 'q104',
            'question': "104- The important indicator of disease recurrence and a predictor of outcome for patients with acute leukemia is:",
            'options': [
                {'id': 'a', 'text': 'White Blood Cell count'},
                {'id': 'b', 'text': 'DNA content'},
                {'id': 'c', 'text': 'Minimal Residual Disease (MRD)'},
                {'id': 'd', 'text': 'Age of the patient'},
                {'id': 'e', 'text': 'Sex and age of the patient'}
            ],
            'correctId': 'c',
            'explanation': "MRD has become one of the strongest predictors of outcome and an important indicator of disease recurrence."
        }
    ],
    'breast_cancer': [
        {
            'id': 'q16',
            'question': "16- T.R is 53 years old female... presented to the cardiology clinic today with breathlessness, ankle edema and chest discomfort, she received a diagnosis of cardiomyopathy. What is the most likely cause of this condition?",
            'options': [
                {'id': 'a', 'text': 'history of breast cancer'},
                {'id': 'b', 'text': 'family history'},
                {'id': 'c', 'text': 'Docetaxel'},
                {'id': 'd', 'text': 'Doxorubicin'},
                {'id': 'e', 'text': 'Vincristine'}
            ],
            'correctId': 'd',
            'explanation': "Anthracyclines (like doxorubicin) are well-known to cause cardiac toxicity."
        },
        {
            'id': 'q22',
            'question': "22- Regarding treatment of breast cancer. Concomitant or sequential administration of a taxane with an anthracycline-based regimen is mostly standard of care in breast cancer in:",
            'options': [
                {'id': 'a', 'text': 'Node-positive breast cancer patients with HER2- positive tumors'},
                {'id': 'b', 'text': 'Node-negative breast cancer patients'},
                {'id': 'c', 'text': 'Primary or early-stage breast cancer'},
                {'id': 'd', 'text': 'First line therapy in postmenopausal women with positive ER'},
                {'id': 'e', 'text': 'First line therapy in premenopausal women with positive PR'}
            ],
            'correctId': 'a',
            'explanation': "Anthracyclines and taxanes are the cornerstones of adjuvant treatment, especially in node-positive or high-risk patients."
        },
        {
            'id': 'q23',
            'question': "23- A 37-year-old woman has a large mass on her left breast confirmed a diagnosis of inflammatory breast cancer, with ER negative, PR weakly positive and HER2 negative, no metastasis. The best neoadjuvant therapy for breast conserving surgery is:",
            'options': [
                {'id': 'a', 'text': 'Whole breast irradiation'},
                {'id': 'b', 'text': 'Tamoxifen only'},
                {'id': 'c', 'text': 'LHRH agonist'},
                {'id': 'd', 'text': 'Doxorubicin + cyclophosphamide followed by paclitaxel'},
                {'id': 'e', 'text': 'Doxorubicin + cyclophosphamide followed by tamoxifen'}
            ],
            'correctId': 'd',
            'explanation': "For locally advanced/triple-negative profiles, the standard is combination chemotherapy (anthracycline + taxane) to shrink the tumor before surgery."
        },
        {
            'id': 'q35',
            'question': "35- Regarding the chemotherapy of breast cancer. The adjuvant chemotherapy regimens include all EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Adriamycin'},
                {'id': 'b', 'text': 'Cyclophosphamide'},
                {'id': 'c', 'text': 'Bisphosphonates'},
                {'id': 'd', 'text': 'Docetaxel'},
                {'id': 'e', 'text': 'Paclitaxel'}
            ],
            'correctId': 'c',
            'explanation': "Bisphosphonates (like pamidronate) are bone-modifying agents used for metastases, not cytotoxic chemotherapy."
        },
        {
            'id': 'q41',
            'question': "41- A 66 years old woman is suffering from low mineral bone density and strong family history of breast cancer. What would be the best protective agent?",
            'options': [
                {'id': 'a', 'text': 'Tamoxifen'},
                {'id': 'b', 'text': 'Raloxifene'},
                {'id': 'c', 'text': 'Exemestane'},
                {'id': 'd', 'text': 'Cyclophosphamide'},
                {'id': 'e', 'text': 'None of them'}
            ],
            'correctId': 'b',
            'explanation': "Raloxifene is a SERM approved for both the prevention of postmenopausal osteoporosis and reduction in the risk of invasive breast cancer."
        },
        {
            'id': 'q54',
            'question': "54- Drug used to prevent Breast cancer. Which drug increased incidence of endometrial cancer?",
            'options': [
                {'id': 'a', 'text': 'Exemestane'},
                {'id': 'b', 'text': 'anastrozole'},
                {'id': 'c', 'text': 'tamoxifen'},
                {'id': 'd', 'text': 'raloxifene'},
                {'id': 'e', 'text': 'letrozole'}
            ],
            'correctId': 'c',
            'explanation': "Tamoxifen is associated with an increased incidence of endometrial cancer."
        },
        {
            'id': 'q60',
            'question': "60- Which genetic mutations significantly increase the lifetime risk of breast cancer?",
            'options': [
                {'id': 'a', 'text': 'BRCA1 and BRCA2'},
                {'id': 'b', 'text': 'TP53 and EGFR'},
                {'id': 'c', 'text': 'KRAS and NRAS'},
                {'id': 'd', 'text': 'ATM and CHEK2'},
                {'id': 'e', 'text': 'BRCA3 and PALB2'}
            ],
            'correctId': 'a',
            'explanation': "Genetic susceptibility is primarily linked to mutations in the BRCA1 and BRCA2 tumor suppressor genes."
        },
        {
            'id': 'q70',
            'question': "70- A 41 years old woman with a positive family history of breast cancer. What is the treatment of choice to reduce her breast cancer risk?",
            'options': [
                {'id': 'a', 'text': 'Raloxifene'},
                {'id': 'b', 'text': 'Letrozole'},
                {'id': 'c', 'text': 'Tamoxifen'},
                {'id': 'd', 'text': 'Exemestane'},
                {'id': 'e', 'text': 'B and D'}
            ],
            'correctId': 'c',
            'explanation': "Tamoxifen is the indicated agent for premenopausal women."
        },
        {
            'id': 'q72',
            'question': "72- S.A is 61 years old woman diagnosed to have ovarian cancer. All of the followings are common sites for metastases by ovarian cancer EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Bone'},
                {'id': 'b', 'text': 'Lung'},
                {'id': 'c', 'text': 'Bladder'},
                {'id': 'd', 'text': 'Liver'},
                {'id': 'e', 'text': 'Brain'}
            ],
            'correctId': 'c',
            'explanation': "Common metastatic sites for solid tumors include the brain, bone, lung, and liver."
        },
        {
            'id': 'q107',
            'question': "107- Biologic or Targeted Therapy is one of approach for treatment of breast cancer. Which one of the following regimens is considered first line treatment for HER2 positive breast cancer?",
            'options': [
                {'id': 'a', 'text': 'pertuzumab-trastuzumab'},
                {'id': 'b', 'text': 'trastuzumab-taxane'},
                {'id': 'c', 'text': 'pertuzumab-trastuzumab-taxane combination'},
                {'id': 'd', 'text': 'pertuzumab-taxane combination'},
                {'id': 'e', 'text': 'Adotrastuzumab emtansine-pertuzumab-taxane'}
            ],
            'correctId': 'c',
            'explanation': "First-line therapy with a pertuzumab-trastuzumab-taxane combination is the preferred option for HER2 over-expressing MBC."
        },
        {
            'id': 'q108',
            'question': "108- J.A. is 48 years old woman with breast cancer. Which one of the followings is a risk factor for breast cancer?",
            'options': [
                {'id': 'a', 'text': 'Young age with low physical activity'},
                {'id': 'b', 'text': 'Young age at menopause'},
                {'id': 'c', 'text': 'Young age at first birth'},
                {'id': 'd', 'text': 'Young age at menarche'},
                {'id': 'e', 'text': 'Old age at menarche'}
            ],
            'correctId': 'd',
            'explanation': "Endocrine risk factors include menarche before age 11 (young age) and late age at first birth."
        }
    ],
    'prostate_cancer': [
        {
            'id': 'q15',
            'question': "15- Adnan, 55-year-old, was diagnosed with prostate cancer and undergone prostatectomy. He may experience all the followings complications after the surgery EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Cystitis'},
                {'id': 'b', 'text': 'Stricture formation'},
                {'id': 'c', 'text': 'Incontinence'},
                {'id': 'd', 'text': 'Lymphocele'},
                {'id': 'e', 'text': 'Fistula formation'}
            ],
            'correctId': 'a',
            'explanation': "Cystitis is an acute complication associated with radiation therapy, not surgery."
        },
        {
            'id': 'q20',
            'question': "20- A 64-year-old man with newly diagnosed metastatic prostate cancer presents to the clinic. Which of the following would be considered standard first-line therapy?",
            'options': [
                {'id': 'a', 'text': 'Docetaxel and prednisone'},
                {'id': 'b', 'text': 'Finasteride'},
                {'id': 'c', 'text': 'Leuprolide'},
                {'id': 'd', 'text': 'Flutamide'},
                {'id': 'e', 'text': 'Supportive care alone'}
            ],
            'correctId': 'c',
            'explanation': "Initial treatment for advanced prostate cancer is androgen ablation, such as an LHRH agonist (e.g., Leuprolide)."
        },
        {
            'id': 'q36',
            'question': "36- Regarding the prostate cancer, Advanced Disease is characterized by all of the following, EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Back pain and spinal cord compression'},
                {'id': 'b', 'text': 'Urinary frequency'},
                {'id': 'c', 'text': 'Lower extremity edema'},
                {'id': 'd', 'text': 'Pathologic fractures'},
                {'id': 'e', 'text': 'Anemia and weight loss'}
            ],
            'correctId': 'd',
            'explanation': "While bone pain is common, osteoporosis and fractures are typically complications of the treatment (ADT) rather than the presenting characteristics of the cancer itself."
        },
        {
            'id': 'q79',
            'question': "79- A patient recently diagnosed to have prostate cancer. The major pathologic cell type of prostate cancer is:",
            'options': [
                {'id': 'a', 'text': 'Sarcoma'},
                {'id': 'b', 'text': 'Lipoma'},
                {'id': 'c', 'text': 'Adenocarcinoma'},
                {'id': 'd', 'text': 'Carcinoma'},
                {'id': 'e', 'text': 'Hyperplastic'}
            ],
            'correctId': 'c',
            'explanation': "The major pathologic cell type is adenocarcinoma (>95% of cases)."
        },
        {
            'id': 'q80',
            'question': "80- A 57 years old man with positive family history of prostate cancer. All of the following statements regarding screening and prevention of prostate cancer are true EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Guidelines do not recommend the use of dutasteride for prostate cancer chemoprevention.'},
                {'id': 'b', 'text': 'Screening for prostate cancer is important and recommended'},
                {'id': 'c', 'text': 'Screening every 5 years may be adequate'},
                {'id': 'd', 'text': 'Males who elect to have screening should do so no more than every 2 years'},
                {'id': 'e', 'text': 'Guidelines do not recommend the use of finasteride for prostate cancer chemoprevention.'}
            ],
            'correctId': 'b',
            'explanation': "PSA and DRE are no longer routinely recommended without a discussion of risks versus benefits."
        },
        {
            'id': 'q81',
            'question': "81- E.D. is 71 years old man with prostate cancer who is treated by relugolix. Which one of the following statements regarding relugolix is true?",
            'options': [
                {'id': 'a', 'text': 'It act as GnRH agonist'},
                {'id': 'b', 'text': 'It can cause tumor flare up'},
                {'id': 'c', 'text': 'It reduces the production of testosterone to castrate levels in 28 days'},
                {'id': 'd', 'text': 'It is administered subcutaneously'},
                {'id': 'e', 'text': 'It can cause hyperglycemia'}
            ],
            'correctId': 'e',
            'explanation': "Relugolix is an oral GnRH antagonist (no flare) that reduces testosterone quickly (7 days). Its toxicities include hyperglycemia and hypertriglyceridemia."
        },
        {
            'id': 'q82',
            'question': "82- S.K is 79 years old man with metastatic castrate resistant prostate cancer. All of the following drugs are suitable for treating SK EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Abiraterone'},
                {'id': 'b', 'text': 'Radium-223'},
                {'id': 'c', 'text': 'Sipuleucel-T'},
                {'id': 'd', 'text': 'Darolutamide'},
                {'id': 'e', 'text': 'Rucaparib'}
            ],
            'correctId': 'd',
            'explanation': "Darolutamide is specifically approved for non-metastatic CRPC."
        }
    ],
    'chemo_adverse': [
        {
            'id': 'q55',
            'question': "55- Nausea and vomiting are most common side effect of chemotherapy. Agents with a “high” emetic risk cause emesis in more than 90% of cases if not given any prophylaxis, like:",
            'options': [
                {'id': 'a', 'text': 'tamoxifen'},
                {'id': 'b', 'text': 'cisplatin'},
                {'id': 'c', 'text': 'cyclophosphamide'},
                {'id': 'd', 'text': 'fluorouracil'},
                {'id': 'e', 'text': 'methotrexate'}
            ],
            'correctId': 'b',
            'explanation': "Cisplatin is categorized as having a 'high' emetic risk (>90%)."
        },
        {
            'id': 'q56',
            'question': "56- In case of febrile neutropenia. Linezolid, quinupristin–dalfopristin, tigecycline, and daptomycin may be used in cases of:",
            'options': [
                {'id': 'a', 'text': 'severe cases'},
                {'id': 'b', 'text': 'in availability of suitable antibiotics'},
                {'id': 'c', 'text': 'vancomycin resistant organisms'},
                {'id': 'd', 'text': 'high cost of injectable antibiotics'},
                {'id': 'e', 'text': 'allergy'}
            ],
            'correctId': 'c',
            'explanation': "These agents are used in cases of vancomycin-resistant organisms or vancomycin intolerance."
        },
        {
            'id': 'q75',
            'question': "75- Y.S. is 70 years old man with AML who was treated by cytarabine and daunorubicin (moderate emetogenic regimen) plus a suitable prophylactic antiemetic regimen. What is the best antiemetic for breakthrough nausea and vomiting for this patient?",
            'options': [
                {'id': 'a', 'text': 'Ondansetron'},
                {'id': 'b', 'text': 'Palonosetron'},
                {'id': 'c', 'text': 'Prochlorperazine'},
                {'id': 'd', 'text': 'Dexamethasone'},
                {'id': 'e', 'text': 'Olanzapine'}
            ],
            'correctId': 'c',
            'explanation': "For breakthrough CINV, dopamine antagonists like prochlorperazine are recommended because they target a different receptor than the prophylaxis."
        },
        {
            'id': 'q76',
            'question': "76- A patient with ALL was treated by 4 drugs induction regimen. After treatment, the neutrophil count reduced to 400 cells/microliter. Vital signs: Blood pressure 86/50 mmHg and temperature of 39 C. What is the best treatment for febrile neutropenia for this patient?",
            'options': [
                {'id': 'a', 'text': 'Cefipime'},
                {'id': 'b', 'text': 'Gentamycin+Ceftazidime+Vancomycin+Filagrastim'},
                {'id': 'c', 'text': 'Amikacin+pipracillin'},
                {'id': 'd', 'text': 'Meropenem+filagrastim'},
                {'id': 'e', 'text': 'Meropenem + vancomycin'}
            ],
            'correctId': 'e',
            'explanation': "For clinically unstable patients (hypotension/shock), the initial therapy should include broad coverage, often adding vancomycin."
        },
        {
            'id': 'q77',
            'question': "77- A cancer patient suffers from severe chemotherapy induced mucositis. All of the following drugs have a moderate-high risk to cause mucositis EXCEPT:",
            'options': [
                {'id': 'a', 'text': 'Paclitaxel'},
                {'id': 'b', 'text': 'Carboplatin'},
                {'id': 'c', 'text': 'Methotrexate'},
                {'id': 'd', 'text': 'Doxorubicin'},
                {'id': 'e', 'text': 'vincristine'}
            ],
            'correctId': 'e',
            'explanation': "Taxanes, anthracyclines, platinum, and methotrexate are associated with mucositis. Vincristine is primarily associated with neurotoxicity."
        },
        {
            'id': 'q78',
            'question': "78- A patient with colon cancer was treated by fluorouracil-based regimen (FOLFOX). The patient developed fluorouracil induced mucositis. Which one of the following statements regarding mucositis is true?",
            'options': [
                {'id': 'a', 'text': 'Symptoms appear within 5 to 7 weeks after chemotherapy'},
                {'id': 'b', 'text': 'Amifostine is approved for prevention and treatment of mucositis'},
                {'id': 'c', 'text': '“Magic-mouthwash” compounded rinses are generally recommended by clinical practice guidelines for mucositis prevention'},
                {'id': 'd', 'text': 'Antimicrobial therapy is necessary to prevent systemic infection in very severe mucositis.'},
                {'id': 'e', 'text': 'Palifermin is given as SC injection for treatment of mucositis'}
            ],
            'correctId': 'd',
            'explanation': "In severe cases where infection is suspected, antimicrobial therapy is necessary to prevent systemic infection."
        },
        {
            'id': 'q95',
            'question': "95- Which medication, administered intrarectally before each dose of radiation therapy for rectal cancer, may be considered to prevent gastrointestinal (GI) mucositis?",
            'options': [
                {'id': 'a', 'text': 'Gelclair'},
                {'id': 'b', 'text': 'Caphasol'},
                {'id': 'c', 'text': 'Amifostine'},
                {'id': 'd', 'text': 'Biotene'},
                {'id': 'e', 'text': 'Benzydamine mouthwash'}
            ],
            'correctId': 'c',
            'explanation': "Amifostine is given intrarectally before radiation for rectal cancer to prevent GI mucositis."
        }
    ]
}

with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# We want to replace everything from `'schizophrenia': [` down to `};\n\n// --- COMPONENTS ---`
# with the correctly grouped ones.
start_idx = text.find("  'schizophrenia': [")
end_idx = text.rfind("};\n\n// --- COMPONENTS ---")

if start_idx != -1 and end_idx != -1:
    insert_str = ""
    for key, qlist in questions.items():
        formatted_json = json.dumps(qlist, indent=4).replace('\n', '\n  ')
        insert_str += f"  '{key}': {formatted_json},\n"
    
    # Strip trailing comma
    insert_str = insert_str.rstrip(",\n") + "\n"

    new_text = text[:start_idx] + insert_str + text[end_idx:]
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Replace successful!")
else:
    print("Could not find start or end index.")
