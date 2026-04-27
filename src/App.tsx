import { useState } from 'react';

import mcq1 from './assets/advancedassets/mcq1.png';
import mcq2 from './assets/advancedassets/mcq2.png';
import mcq3 from './assets/advancedassets/mcq3.png';
import mcq4 from './assets/advancedassets/mcq4.png';

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
    { id: 'insomnia', title: 'Insomnia', desc: 'Insomnia', icon: ShieldCheck },
    { id: 'cancer_chemo', title: 'Cancer Chemotherapy & Treatment', desc: 'Cancer Chemotherapy & Treatment', icon: ShieldCheck },
    { id: 'breast_cancer', title: 'Breast Cancer', desc: 'Breast Cancer', icon: ShieldCheck },
    { id: 'prostate', title: 'Prostate Cancer', desc: 'Prostate Cancer', icon: ShieldCheck },
    { id: 'leukemia', title: 'Leukemia', desc: 'Leukemia', icon: ShieldCheck },
    { id: 'menstrual_disorders', title: 'Menstrual related disorders', desc: 'Menstrual related disorders', icon: ShieldCheck },
    { id: 'hrt', title: 'HRT', desc: 'HRT', icon: ShieldCheck },
    { id: 'contraception', title: 'Contraception', desc: 'Contraception', icon: ShieldCheck },
    { id: 'depression', title: 'depression', desc: 'depression', icon: ShieldCheck },
    { id: 'anexity', title: 'anexity', desc: 'anexity', icon: ShieldCheck },
    { id: 'alzheimer', title: 'alzheimer disease', desc: 'alzheimer disease', icon: ShieldCheck },
    { id: 'schizophrenia', title: 'schizophrenia', desc: 'schizophrenia', icon: ShieldCheck },
    { id: 'thyroid', title: 'thyroid disorders', desc: 'thyroid disorders', icon: ShieldCheck },
    { id: 'adrenal', title: 'adrenal disorders', desc: 'adrenal disorders', icon: ShieldCheck }
  ],
  advanced: [
    { id: 'uv_spectroscopy', title: 'UV spectroscopy', desc: 'UV spectroscopy', icon: Database },
    { id: 'ir_spectroscopy', title: 'IR spectroscopy', desc: 'IR spectroscopy', icon: Database },
    { id: 'nmr', title: 'NMR spectroscopy', desc: 'NMR spectroscopy', icon: Database },
    { id: 'mass_spectrometry', title: 'Mass spectrometry', desc: 'Mass spectrometry', icon: Database }],
  delivery: [
    { id: 'nanotechnology', title: 'Nanotechnology', desc: 'Pharmaceutical Nanotechnology', icon: Cloud }
    , { id: 'drug_development', title: 'Drug Development', desc: 'New Drug Development and Approval Process', icon: Cloud }
  ],
  biotech: []
};

const SUMMARIES = {
  therapeutics: [
    { id: 'adrenal', title: 'Adrenal Insufficiency', url: '/summaries/Adrenal Insufficiency.pdf' },
    { id: 'alzheimer', title: 'Alzhiemers disease', url: '/summaries/Alzhiemers disease.pdf' },
    { id: 'anxiety', title: 'Anxiety', url: '/summaries/Anxiety.pdf' },
    { id: 'thyroid', title: 'Hyperthyrodism and thyroid storm', url: '/summaries/Hyperthyrodism and thyroid storm.pdf' },
    { id: 'cushing', title: 'Cushing Syndrome', url: '/summaries/cushing syndrome.pdf' },
    { id: 'hyperaldosteronism', title: 'Hyperaldosteronism', url: '/summaries/hyperaldosteronism.pdf' },
    { id: 'depression', title: 'Depression', url: '/summaries/Depression.pdf' },
    { id: 'schizophrenia', title: 'Schizophrenia', url: '/summaries/Schizophrenia.pdf' }
  ],
  advanced: [],
  delivery: [
  ],
  biotech: []
};

const MCQS = {
  'mass_spectrometry': [
    {
        "id": "q1",
        "question": "Compared to other spectroscopic methods, mass spectrometry is unique because it is considered:",
        "options": [
            {
                "id": "a",
                "text": "A non-destructive technique where the sample is recovered."
            },
            {
                "id": "b",
                "text": "A destructive micro-analytical technique where the sample is consumed."
            },
            {
                "id": "c",
                "text": "Only useful for analyzing pure metallic elements."
            },
            {
                "id": "d",
                "text": "Dependent on the absorption of radio-frequency radiation."
            },
            {
                "id": "e",
                "text": "Used to measure the vibration of covalent bonds."
            }
        ],
        "correctId": "b",
        "explanation": "The source defines mass spectrometry as a destructive technique because the sample is consumed during analysis as it is ionized and fragmented."
    },
    {
        "id": "q2",
        "question": "How much sample is typically required to obtain characteristic information using mass spectrometry?",
        "options": [
            {
                "id": "a",
                "text": "Several grams."
            },
            {
                "id": "b",
                "text": "1\u20132 milligrams."
            },
            {
                "id": "c",
                "text": "Only a few nanomoles."
            },
            {
                "id": "d",
                "text": "At least 10 milliliters of liquid."
            },
            {
                "id": "e",
                "text": "One full mole of the substance."
            }
        ],
        "correctId": "c",
        "explanation": "The source explicitly states that mass spectrometry is a micro-analytical technique requiring only a few nanomoles of the sample."
    },
    {
        "id": "q3",
        "question": "In mass spectrometry, from which site is an electron typically removed first to form the molecular ion?",
        "options": [
            {
                "id": "a",
                "text": "Sigma (\\sigma) bond electrons."
            },
            {
                "id": "b",
                "text": "Pi (\\pi) bond electrons."
            },
            {
                "id": "c",
                "text": "Non-bonding (NB) lone pair electrons."
            },
            {
                "id": "d",
                "text": "Inner-shell core electrons."
            },
            {
                "id": "e",
                "text": "All electrons are removed simultaneously."
            }
        ],
        "correctId": "c",
        "explanation": "Electrons are first removed from the site with the lowest ionization potential. The source provides the order: Non-bonding electrons > pi bond electrons > sigma bond electrons."
    },
    {
        "id": "q4",
        "question": "When a molecular ion fragments in the mass spectrometer, which of the resulting species is actually detected by the instrument?",
        "options": [
            {
                "id": "a",
                "text": "The neutral radical."
            },
            {
                "id": "b",
                "text": "The neutral molecule."
            },
            {
                "id": "c",
                "text": "The positively charged cation."
            },
            {
                "id": "d",
                "text": "Lighter anions."
            },
            {
                "id": "e",
                "text": "Both the radical and the cation."
            }
        ],
        "correctId": "c",
        "explanation": "Fragmentation of a molecular ion produces a radical and a cation; the source specifies that \"Only the cation is detected by MS\"."
    },
    {
        "id": "q5",
        "question": "In a mass spectrum plot, what does the \"base peak\" represent?",
        "options": [
            {
                "id": "a",
                "text": "The peak with the highest m/z value."
            },
            {
                "id": "b",
                "text": "The peak representing the intact parent molecule."
            },
            {
                "id": "c",
                "text": "The most intense peak, assigned a relative abundance of 100%."
            },
            {
                "id": "d",
                "text": "The peak caused by the carbon-13 isotope."
            },
            {
                "id": "e",
                "text": "The peak with the lowest mass-to-charge ratio."
            }
        ],
        "correctId": "c",
        "explanation": "The source defines the base peak as the most abundant/intense ion in the spectrum, which is assigned an abundance of 100%."
    },
    {
        "id": "q6",
        "question": "What is the correct functional order of the three major components an ion passes through in a mass spectrometer?",
        "options": [
            {
                "id": "a",
                "text": "Analyzer -> Ion Source -> Detector"
            },
            {
                "id": "b",
                "text": "Detector -> Analyzer -> Ion Source"
            },
            {
                "id": "c",
                "text": "Ion Source -> Analyzer -> Detector"
            },
            {
                "id": "d",
                "text": "Ion Source -> Detector -> Analyzer"
            },
            {
                "id": "e",
                "text": "Analyzer -> Detector -> Ion Source"
            }
        ],
        "correctId": "c",
        "explanation": "The source lists the three major components as: 1- Ion Source (produces ions), 2- Analyzer (resolves ions), and 3- Detector (records abundance)."
    },
    {
        "id": "q7",
        "question": "In the analyzer of a mass spectrometer, how does the mass-to-charge ratio (m/z) affect the deflection of ions by the magnetic field?",
        "options": [
            {
                "id": "a",
                "text": "Higher m/z ions are deflected the most."
            },
            {
                "id": "b",
                "text": "The magnetic field deflects all ions equally."
            },
            {
                "id": "c",
                "text": "Lowest m/z ions are deflected the most."
            },
            {
                "id": "d",
                "text": "Only neutral radicals are deflected."
            },
            {
                "id": "e",
                "text": "Deflection is independent of momentum."
            }
        ],
        "correctId": "c",
        "explanation": "The source states that the amount of deflection depends on m/z: highest m/z are deflected least, and lowest m/z are deflected most."
    },
    {
        "id": "q8",
        "question": "Ions that have very low mass (low momentum) in the analyzer undergo which of the following?",
        "options": [
            {
                "id": "a",
                "text": "They are not deflected enough."
            },
            {
                "id": "b",
                "text": "They are deflected the most and collide with the analyzer walls."
            },
            {
                "id": "c",
                "text": "They exit through the slit toward the detector perfectly."
            },
            {
                "id": "d",
                "text": "They are ignored by the magnetic field."
            },
            {
                "id": "e",
                "text": "They revert back to their vapor state."
            }
        ],
        "correctId": "b",
        "explanation": "According to the \"Working\" section, low mass/momentum ions are deflected the most and collide with the walls rather than reaching the detector."
    },
    {
        "id": "q9",
        "question": "A compound containing one chlorine atom will show a characteristic \"M\" and \"M+2\" isotope pattern. What is the approximate intensity ratio?",
        "options": [
            {
                "id": "a",
                "text": "1:1"
            },
            {
                "id": "b",
                "text": "1:3"
            },
            {
                "id": "c",
                "text": "3:1"
            },
            {
                "id": "d",
                "text": "1:2:1"
            },
            {
                "id": "e",
                "text": "9:6:1"
            }
        ],
        "correctId": "c",
        "explanation": "The source explains that Chlorine exists as ^{35}Cl and ^{37}Cl with an intensity ratio of 3:1."
    },
    {
        "id": "q10",
        "question": "What isotope pattern is characteristic of a molecule containing a single bromine atom?",
        "options": [
            {
                "id": "a",
                "text": "M+2 is one-third as large as M+."
            },
            {
                "id": "b",
                "text": "M+ and M+2 are approximately equal in intensity (1:1)."
            },
            {
                "id": "c",
                "text": "M+2 is 4% the height of M+."
            },
            {
                "id": "d",
                "text": "A peak appears at m/z 127 with a large gap."
            },
            {
                "id": "e",
                "text": "The molecular ion peak is always an odd number."
            }
        ],
        "correctId": "b",
        "explanation": "Bromine isotopes (^{79}Br and ^{81}Br) have a natural abundance ratio of approximately 1:1, leading to peaks of similar height."
    },
    {
        "id": "q11",
        "question": "The presence of which element is signaled by a cation peak at m/z 127 accompanied by a characteristically large gap in the spectrum?",
        "options": [
            {
                "id": "a",
                "text": "Bromine"
            },
            {
                "id": "b",
                "text": "Chlorine"
            },
            {
                "id": "c",
                "text": "Iodine"
            },
            {
                "id": "d",
                "text": "Sulfur"
            },
            {
                "id": "e",
                "text": "Nitrogen"
            }
        ],
        "correctId": "c",
        "explanation": "The source table for \"Easily Recognized Elements\" explicitly lists Iodine as having an I^+ peak at 127 and a large gap."
    },
    {
        "id": "q12",
        "question": "According to the Nitrogen Rule, if a molecule has an odd-numbered molecular ion mass (e.g., m/z = 101), what can be concluded?",
        "options": [
            {
                "id": "a",
                "text": "It contains zero nitrogen atoms."
            },
            {
                "id": "b",
                "text": "It contains an even number of nitrogen atoms."
            },
            {
                "id": "c",
                "text": "It contains an odd number of nitrogen atoms."
            },
            {
                "id": "d",
                "text": "It is a purely aromatic hydrocarbon."
            },
            {
                "id": "e",
                "text": "It must contain at least one oxygen atom."
            }
        ],
        "correctId": "c",
        "explanation": "The Nitrogen Rule states: \"When the number of nitrogen atoms present in the molecule is odd, the molecular mass will be an odd number\"."
    },
    {
        "id": "q13",
        "question": "If a molecule has an even-numbered molecular ion mass (e.g., m/z = 60), what does the Nitrogen Rule indicate about its nitrogen content?",
        "options": [
            {
                "id": "a",
                "text": "It must contain exactly one nitrogen atom."
            },
            {
                "id": "b",
                "text": "It contains an odd number of nitrogen atoms."
            },
            {
                "id": "c",
                "text": "It contains either zero or an even number of nitrogen atoms."
            },
            {
                "id": "d",
                "text": "It is highly branched and saturated."
            },
            {
                "id": "e",
                "text": "Nitrogen is not present in the molecule."
            }
        ],
        "correctId": "c",
        "explanation": "The rule states that if the mass is even, the number of nitrogens is even or zero."
    },
    {
        "id": "q14",
        "question": "Which of the following classes of compounds is most likely to produce the most intense and stable molecular ion peak?",
        "options": [
            {
                "id": "a",
                "text": "Aliphatic alcohols."
            },
            {
                "id": "b",
                "text": "Highly branched alkanes."
            },
            {
                "id": "c",
                "text": "Purely aromatic systems."
            },
            {
                "id": "d",
                "text": "Organic nitrates."
            },
            {
                "id": "e",
                "text": "Aliphatic nitriles."
            }
        ],
        "correctId": "c",
        "explanation": "The source states: \"The most stable molecular ions are those of purely aromatic systems\" and provides the order: aromatic compounds > conjugated alkenes > cyclic compounds."
    },
    {
        "id": "q15",
        "question": "In confirming a suspected molecular ion peak, which range of mass losses is considered \"unlikely\" and suggests the peak might be an impurity or fragment?",
        "options": [
            {
                "id": "a",
                "text": "M\u201315 (CH_3)"
            },
            {
                "id": "b",
                "text": "M\u201318 (H_2O)"
            },
            {
                "id": "c",
                "text": "M\u20133 to M\u201314"
            },
            {
                "id": "d",
                "text": "M\u201331 (OCH_3)"
            },
            {
                "id": "e",
                "text": "M\u20131 (H)"
            }
        ],
        "correctId": "c",
        "explanation": "The source notes: \"Peaks in the range of M- 3 to M-14, however, indicate that... the presumed molecular ion peak is actually a fragment ion peak\"."
    },
    {
        "id": "q16",
        "question": "If an unknown substance has a molecular formula resulting in an IHD of 0, what does this indicate about the structure?",
        "options": [
            {
                "id": "a",
                "text": "The compound has one double bond."
            },
            {
                "id": "b",
                "text": "The compound has one ring."
            },
            {
                "id": "c",
                "text": "The compound has no \\pi bonds and no rings."
            },
            {
                "id": "d",
                "text": "The compound contains a triple bond."
            },
            {
                "id": "e",
                "text": "The compound is aromatic."
            }
        ],
        "correctId": "c",
        "explanation": "An IHD of 0 specifically means \"the unknown substance has no \\pi bonds and/or rings\"."
    },
    {
        "id": "q17",
        "question": "Bombardment of molecules by an electron beam with energy between 10\u201315 eV typically results in which of the following?",
        "options": [
            {
                "id": "a",
                "text": "Complete destruction of the molecule."
            },
            {
                "id": "b",
                "text": "McLafferty rearrangement."
            },
            {
                "id": "c",
                "text": "Simple ionization to form the molecular ion (M^+)."
            },
            {
                "id": "d",
                "text": "High excitation and extensive fragmentation."
            },
            {
                "id": "e",
                "text": "Absorption of infrared radiation."
            }
        ],
        "correctId": "c",
        "explanation": "The source explains that energy between 10-15 eV \"usually results in the ionization of molecules by removal of one electron (Molecular ion formation)\"."
    },
    {
        "id": "q18",
        "question": "At what electron beam energy level does the molecular ion typically acquire enough excitation to break down into various fragments?",
        "options": [
            {
                "id": "a",
                "text": "1\u20135 eV"
            },
            {
                "id": "b",
                "text": "Exactly 10 eV"
            },
            {
                "id": "c",
                "text": "50\u201370 eV"
            },
            {
                "id": "d",
                "text": "1000 eV"
            },
            {
                "id": "e",
                "text": "Energy level does not affect fragmentation."
            }
        ],
        "correctId": "c",
        "explanation": "The source states: \"When the energy of electron beam is increased between 50-70ev, these molecular ions acquire a high excitation resulting in their break down into various fragments\"."
    },
    {
        "id": "q19",
        "question": "Fragmentation is often governed by the stability of the resulting cation. What is the correct order of cation stability according to the source?",
        "options": [
            {
                "id": "a",
                "text": "Methyl > Primary > Secondary > Tertiary"
            },
            {
                "id": "b",
                "text": "Tertiary > Secondary > Primary > Methyl"
            },
            {
                "id": "c",
                "text": "Primary > Tertiary > Secondary > Methyl"
            },
            {
                "id": "d",
                "text": "Secondary > Primary > Tertiary > Methyl"
            },
            {
                "id": "e",
                "text": "All cations are equally stable in a vacuum."
            }
        ],
        "correctId": "b",
        "explanation": "The source explicitly lists the cation stability order: CH_3^+ < R'CH_2^+ < R_2'CH^+ < R_3'C^+."
    },
    {
        "id": "q20",
        "question": "According to the source's categorization, which of the following is NOT a mode of \"Simple Cleavage\"?",
        "options": [
            {
                "id": "a",
                "text": "Homolytic cleavage"
            },
            {
                "id": "b",
                "text": "Heterolytic cleavage"
            },
            {
                "id": "c",
                "text": "Retro Diels-Alder reaction"
            },
            {
                "id": "d",
                "text": "McLafferty rearrangement"
            },
            {
                "id": "e",
                "text": "All are simple cleavages."
            }
        ],
        "correctId": "d",
        "explanation": "The source classifies McLafferty rearrangement under \"Rearrangement reactions accompanied by transfer of atoms,\" separate from the \"Simple cleavage\" category."
    }
],
    'nmr': [
    {
        "id": "q1",
        "question": "Which of the following nuclei is considered NMR-inactive?",
        "options": [
            {
                "id": "a",
                "text": "^1H"
            },
            {
                "id": "b",
                "text": "^{13}C"
            },
            {
                "id": "c",
                "text": "^{16}O"
            },
            {
                "id": "d",
                "text": "^{15}N"
            },
            {
                "id": "e",
                "text": "^{31}P"
            }
        ],
        "correctId": "c",
        "explanation": "Nuclei with an even mass number and an even atomic number (like ^{12}C and ^{16}O) are NMR-inactive. For a nucleus to be active in NMR, it must have an odd mass number, an odd atomic number, or both."
    },
    {
        "id": "q2",
        "question": "In the presence of an applied magnetic field (B_0), magnetic nuclear spins are oriented either with or against the field. Which statement regarding these orientations is INCORRECT?",
        "options": [
            {
                "id": "a",
                "text": "The spins are oriented randomly in the presence of B_0."
            },
            {
                "id": "b",
                "text": "More nuclei are oriented with the applied field because it is lower in energy."
            },
            {
                "id": "c",
                "text": "The parallel spin state is slightly lower in energy than the antiparallel state."
            },
            {
                "id": "d",
                "text": "When external energy (radio frequency) matching the energy gap is applied, the nucleus flips its orientation."
            },
            {
                "id": "e",
                "text": "The parallel spin state is more populated than the antiparallel state."
            }
        ],
        "correctId": "a",
        "explanation": "While nuclear magnets are randomly oriented in space normally, they orient with (parallel) or against (antiparallel) an external magnetic field once it is applied. The parallel arrangement is favored because it is the lower energy state."
    },
    {
        "id": "q3",
        "question": "A proton signal is recorded at 1590 Hz on a spectrometer operating at 300 MHz. What is the chemical shift (\\delta) in ppm?",
        "options": [
            {
                "id": "a",
                "text": "0.18 ppm"
            },
            {
                "id": "b",
                "text": "5.3 ppm"
            },
            {
                "id": "c",
                "text": "15.9 ppm"
            },
            {
                "id": "d",
                "text": "3.0 ppm"
            },
            {
                "id": "e",
                "text": "0.53 ppm"
            }
        ],
        "correctId": "b",
        "explanation": "The chemical shift is calculated by dividing the observed frequency shift (in Hz) by the spectrometer frequency (in MHz). Using the formula: \\delta = \\frac{1590 \\text{ Hz}}{300 \\text{ MHz}} = 5.3 \\text{ ppm}."
    },
    {
        "id": "q4",
        "question": "How many ^1H-NMR signals would you expect for methyl acetate (CH_3COOCH_3)?",
        "options": [
            {
                "id": "a",
                "text": "1"
            },
            {
                "id": "b",
                "text": "2"
            },
            {
                "id": "c",
                "text": "3"
            },
            {
                "id": "d",
                "text": "4"
            },
            {
                "id": "e",
                "text": "6"
            }
        ],
        "correctId": "b",
        "explanation": "The number of signals equals the number of sets of chemically equivalent protons. In methyl acetate, there are two sets: the three protons of the acetate group (H_a) and the three protons of the methyl ester group (H_b). Protons within each set are equivalent, but the two sets are in different electronic environments."
    },
    {
        "id": "q5",
        "question": "Why is Tetramethylsilane (TMS) chosen as the standard reference compound for NMR?",
        "options": [
            {
                "id": "a",
                "text": "It is chemically reactive and easy to detect."
            },
            {
                "id": "b",
                "text": "Its protons are more deshielded than most organic molecules."
            },
            {
                "id": "c",
                "text": "It gives twelve distinct signals for complex analysis."
            },
            {
                "id": "d",
                "text": "Its protons are highly shielded, providing a zero-point at the far right of the spectrum."
            },
            {
                "id": "e",
                "text": "It is insoluble in organic solvents."
            }
        ],
        "correctId": "d",
        "explanation": "TMS protons are highly shielded because silicon is less electronegative than carbon, meaning they absorb at a very low frequency. This provides a clear zero point at the far-right (upfield) edge of the spectrum. TMS is also chemically inert and symmetrical, giving a single intense sharp peak."
    },
    {
        "id": "q6",
        "question": "Regarding the ^1H-NMR spectrum of chloroethane (CH_3CH_2Cl), what splitting patterns will be observed for the methyl and methylene groups?",
        "options": [
            {
                "id": "a",
                "text": "A doublet and a triplet"
            },
            {
                "id": "b",
                "text": "A doublet and a quartet"
            },
            {
                "id": "c",
                "text": "A triplet and a quartet"
            },
            {
                "id": "d",
                "text": "Two doublets"
            },
            {
                "id": "e",
                "text": "A singlet and a quartet"
            }
        ],
        "correctId": "c",
        "explanation": "According to the n+1 rule, a signal is split by n neighboring non-equivalent protons. The CH_3 group has 2 neighboring protons from the CH_2 group, resulting in a triplet (2+1=3). The CH_2 group has 3 neighboring protons from the CH_3 group, resulting in a quartet (3+1=4)."
    },
    {
        "id": "q7",
        "question": "Which of the following atoms or groups would cause the greatest downfield (higher chemical shift) shift for nearby protons due to the inductive effect?",
        "options": [
            {
                "id": "a",
                "text": "Carbon"
            },
            {
                "id": "b",
                "text": "Silicon"
            },
            {
                "id": "c",
                "text": "Sulfur"
            },
            {
                "id": "d",
                "text": "Nitrogen"
            },
            {
                "id": "e",
                "text": "Oxygen"
            }
        ],
        "correctId": "e",
        "explanation": "The inductive effect (electronegativity) causes deshielding. Highly electronegative atoms like Oxygen pull electron density away from nearby protons, causing them to feel more of the external magnetic field and absorb at a higher frequency (downfield)."
    },
    {
        "id": "q8",
        "question": "Why do aromatic protons in benzene appear far downfield (6.5\u20138 ppm)?",
        "options": [
            {
                "id": "a",
                "text": "Because they are highly shielded by a ring current."
            },
            {
                "id": "b",
                "text": "Because they are bonded to a highly electronegative atom."
            },
            {
                "id": "c",
                "text": "Because the induced magnetic field from circulating \\pi electrons reinforces the applied field."
            },
            {
                "id": "d",
                "text": "Because they are exchangeable with the solvent."
            },
            {
                "id": "e",
                "text": "Due to hydrogen bonding with the solvent."
            }
        ],
        "correctId": "c",
        "explanation": "This is known as diamagnetic anisotropy. Circulating \\pi electrons in the benzene ring create a ring current that induces a magnetic field. This induced field reinforces the external field (B_0) in the vicinity of the protons, causing them to be deshielded and shift downfield."
    },
    {
        "id": "q9",
        "question": "How do protons directly bonded to heteroatoms, such as the hydroxyl group (O-H) in alcohols, typically behave in ^1H-NMR?",
        "options": [
            {
                "id": "a",
                "text": "They always appear as sharp quartets."
            },
            {
                "id": "b",
                "text": "They do not appear on the spectrum at all."
            },
            {
                "id": "c",
                "text": "They generally do not split their neighbors and often appear as broad singlets."
            },
            {
                "id": "d",
                "text": "They always appear upfield at 0 ppm."
            },
            {
                "id": "e",
                "text": "They are unaffected by the concentration of the solution."
            }
        ],
        "correctId": "c",
        "explanation": "Protons on heteroatoms (O-H or N-H) exchange rapidly with solvent or other molecules, which prevents them from splitting neighboring protons. Their chemical shift is highly dependent on concentration and hydrogen bonding, often appearing as broad singlets between 0.5 and 5 ppm."
    },
    {
        "id": "q10",
        "question": "Compared to Mass Spectrometry, NMR spectroscopy is uniquely advantageous because it is:",
        "options": [
            {
                "id": "a",
                "text": "Destructive to the sample."
            },
            {
                "id": "b",
                "text": "Inaccurate but fast."
            },
            {
                "id": "c",
                "text": "A non-destructive analytical technique."
            },
            {
                "id": "d",
                "text": "Only useful for inorganic molecules."
            },
            {
                "id": "e",
                "text": "Dependent on high-energy gamma radiation."
            }
        ],
        "correctId": "c",
        "explanation": "Unlike Mass Spectrometry, which involves bombarding and breaking molecules into fragments, NMR is non-destructive, meaning the sample can be recovered after the experiment. It employs safe, low-energy radio frequency radiation."
    },
    {
        "id": "q11",
        "question": "Why are samples for NMR spectroscopy typically dissolved in deuterated solvents such as CDCl_3 or DMSO-d_6?",
        "options": [
            {
                "id": "a",
                "text": "To increase the sensitivity of the detector."
            },
            {
                "id": "b",
                "text": "To catalyze the spin-flip resonance."
            },
            {
                "id": "c",
                "text": "To prevent the sample from reacting with the reference standard (TMS)."
            },
            {
                "id": "d",
                "text": "To avoid large solvent signals that would obscure the signals from the sample protons."
            },
            {
                "id": "e",
                "text": "Because deuterium is the only NMR-active isotope of hydrogen."
            }
        ],
        "correctId": "d",
        "explanation": "Deuterated solvents are used because deuterium (^2H) has different resonance properties than ^1H. By replacing normal hydrogen with deuterium, the solvent does not produce a signal in the ^1H-NMR spectrum that would otherwise overwhelm the much smaller signals from the organic sample."
    },
    {
        "id": "q12",
        "question": "When a nucleus is described as \"shielded,\" how does the local magnetic field generated by surrounding electrons affect the external applied field (B_0)?",
        "options": [
            {
                "id": "a",
                "text": "It reinforces B_0, causing the nucleus to feel a stronger field."
            },
            {
                "id": "b",
                "text": "It opposes B_0, causing the nucleus to feel a weaker effective field."
            },
            {
                "id": "c",
                "text": "It has no effect on the field felt by the nucleus."
            },
            {
                "id": "d",
                "text": "It shifts the signal to a higher frequency (downfield)."
            },
            {
                "id": "e",
                "text": "It increases the energy gap between spin states."
            }
        ],
        "correctId": "b",
        "explanation": "Electrons moving around a nucleus create tiny local magnetic fields that act in opposition to the applied external field. This shielding effect means the \"effective\" field felt by the nucleus is weaker than the applied field (B_{effective} = B_{applied} - B_{local}), requiring a lower frequency for resonance."
    },
    {
        "id": "q13",
        "question": "Protons attached to sp^2-hybridized alkene carbons typically appear downfield (4.5\u20136 ppm). What causes this specific shift?",
        "options": [
            {
                "id": "a",
                "text": "The high electronegativity of the carbon atom."
            },
            {
                "id": "b",
                "text": "Intermolecular hydrogen bonding with the solvent."
            },
            {
                "id": "c",
                "text": "Diamagnetic anisotropy where the induced field reinforces the external field near the protons."
            },
            {
                "id": "d",
                "text": "van der Waals repulsion with adjacent alkyl groups."
            },
            {
                "id": "e",
                "text": "The n+1 splitting rule increasing the frequency."
            }
        ],
        "correctId": "c",
        "explanation": "The loosely held \\pi electrons of a double bond circulate in the magnetic field, creating an induced field. In the vicinity of the alkene protons, this induced field reinforces the external applied field, causing the protons to feel a stronger total field and shift downfield."
    },
    {
        "id": "q14",
        "question": "If a set of equivalent protons has four equivalent neighboring protons on adjacent carbons, into how many peaks will its signal be split?",
        "options": [
            {
                "id": "a",
                "text": "3 (Triplet)"
            },
            {
                "id": "b",
                "text": "4 (Quartet)"
            },
            {
                "id": "c",
                "text": "5 (Quintet)"
            },
            {
                "id": "d",
                "text": "6 (Sextet)"
            },
            {
                "id": "e",
                "text": "1 (Singlet)"
            }
        ],
        "correctId": "c",
        "explanation": "According to the n+1 rule, the number of peaks in a signal is determined by the number of neighboring non-equivalent protons (n) plus one. In this case, 4 + 1 = 5, which results in a quintet."
    },
    {
        "id": "q15",
        "question": "In rings or double-bond systems, two protons are considered chemically equivalent only if they:",
        "options": [
            {
                "id": "a",
                "text": "Are attached to the same carbon atom."
            },
            {
                "id": "b",
                "text": "Are separated by more than four \\sigma bonds."
            },
            {
                "id": "c",
                "text": "Share the same orientation (cis or trans) relative to the same groups."
            },
            {
                "id": "d",
                "text": "Are bonded to atoms of identical electronegativity."
            },
            {
                "id": "e",
                "text": "Are in an asymmetric electronic environment."
            }
        ],
        "correctId": "c",
        "explanation": "In rigid structures like rings or alkenes, protons are only equivalent if they have identical relationships to all other groups in the molecule. For example, in 1,1-dichloroethylene, the two protons are equivalent because both are cis to a chlorine atom."
    },
    {
        "id": "q16",
        "question": "A compound has the molecular formula C_3H_8O and shows two signals. Signal A has an integration of 60 units, and Signal B has 20 units. How many protons correspond to Signal A?",
        "options": [
            {
                "id": "a",
                "text": "2"
            },
            {
                "id": "b",
                "text": "3"
            },
            {
                "id": "c",
                "text": "6"
            },
            {
                "id": "d",
                "text": "8"
            },
            {
                "id": "e",
                "text": "1"
            }
        ],
        "correctId": "c",
        "explanation": "First, determine the units per proton by dividing the total integration (60+20=80) by the total protons (8): 80 / 8 = 10 units per proton. Then, divide Signal A's units by this value: 60 / 10 = 6 protons."
    },
    {
        "id": "q17",
        "question": "Why is Magnetic Resonance Imaging (MRI) considered a safer diagnostic tool than X-rays or CT scans?",
        "options": [
            {
                "id": "a",
                "text": "It does not require the patient to enter a magnetic field."
            },
            {
                "id": "b",
                "text": "It uses high-energy gamma radiation that does not linger in tissue."
            },
            {
                "id": "c",
                "text": "It utilizes low-energy radio frequency radiation instead of ionizing high-frequency radiation."
            },
            {
                "id": "d",
                "text": "It is a destructive technique that removes diseased cells."
            },
            {
                "id": "e",
                "text": "It only interacts with carbon atoms, which are less sensitive to radiation."
            }
        ],
        "correctId": "c",
        "explanation": "MRI is safe because it employs low-energy radio waves, whereas X-rays and CT scans use high-frequency, ionizing radiation that can potentially damage living cells and DNA."
    },
    {
        "id": "q18",
        "question": "Unlike aromatic protons, protons attached to a carbon-carbon triple bond (alkynes) appear relatively upfield at approximately 2.5 ppm. Why?",
        "options": [
            {
                "id": "a",
                "text": "They are extremely deshielded by the triple bond."
            },
            {
                "id": "b",
                "text": "The induced magnetic field of the triple bond opposes the applied external field."
            },
            {
                "id": "c",
                "text": "The carbon is sp^3 hybridized, leading to high shielding."
            },
            {
                "id": "d",
                "text": "They participate in strong ionic bonding."
            },
            {
                "id": "e",
                "text": "They are always exchangeable with the solvent."
            }
        ],
        "correctId": "b",
        "explanation": "In the case of a triple bond, the induced magnetic field created by circulating \\pi electrons opposes the applied field in the vicinity of the proton. This causes the proton to feel a weaker effective field, resulting in shielding and an upfield shift."
    },
    {
        "id": "q19",
        "question": "Spin-spin splitting is generally NOT observed between protons that are:",
        "options": [
            {
                "id": "a",
                "text": "On the same carbon (geminal)."
            },
            {
                "id": "b",
                "text": "On adjacent carbons (vicinal)."
            },
            {
                "id": "c",
                "text": "Separated by more than three \\sigma bonds."
            },
            {
                "id": "d",
                "text": "Non-equivalent and nearby."
            },
            {
                "id": "e",
                "text": "In different electronic environments."
            }
        ],
        "correctId": "c",
        "explanation": "Splitting is a short-range interaction. It is typically only observed for non-equivalent protons on the same carbon or adjacent carbons and is not generally seen if the protons are separated by more than three sigma (\\sigma) bonds."
    },
    {
        "id": "q20",
        "question": "Which of the following describes the typical appearance and position of a carboxylic acid proton (R-COOH) in a ^1H-NMR spectrum?",
        "options": [
            {
                "id": "a",
                "text": "A sharp quartet at 1.0 ppm."
            },
            {
                "id": "b",
                "text": "A triplet at 4.0 ppm."
            },
            {
                "id": "c",
                "text": "A deshielded singlet appearing far downfield at 10\u201312 ppm."
            },
            {
                "id": "d",
                "text": "An upfield signal at 0 ppm."
            },
            {
                "id": "e",
                "text": "It does not appear because it is NMR-inactive."
            }
        ],
        "correctId": "c",
        "explanation": "Carboxylic acid protons are highly deshielded due to both the strong inductive effect of the electronegative oxygen atoms and the magnetic anisotropy of the carbonyl group. This results in a very high chemical shift, typically between 10 and 12 ppm."
    },
    {
        "id": "q21",
        "question": "Why is ^{13}C used for carbon NMR spectroscopy instead of the much more abundant ^{12}C isotope?",
        "options": [
            {
                "id": "a",
                "text": "^{12}C is radioactive and dangerous to use in spectrometers."
            },
            {
                "id": "b",
                "text": "^{12}C has an even mass number and an even atomic number, making it NMR-inactive."
            },
            {
                "id": "c",
                "text": "^{13}C is more abundant in nature (99%) than ^{12}C."
            },
            {
                "id": "d",
                "text": "^{13}C nuclei do not possess a magnetic moment."
            },
            {
                "id": "e",
                "text": "^{12}C signals overlap too much with hydrogen signals."
            }
        ],
        "correctId": "b",
        "explanation": "For a nucleus to be active in NMR, it must have an odd mass number, an odd atomic number, or both. ^{12}C, which accounts for 99% of carbon in organic molecules, is NMR-inactive because both its mass and atomic numbers are even. ^{13}C, though only ~1% abundant, has an odd mass number and is therefore NMR-active."
    },
    {
        "id": "q22",
        "question": "Why is peak integration (the area under a signal) generally NOT useful in ^{13}C-NMR spectroscopy?",
        "options": [
            {
                "id": "a",
                "text": "^{13}C signals are too broad to be integrated accurately."
            },
            {
                "id": "b",
                "text": "All carbon atoms in a molecule always produce signals of identical intensity."
            },
            {
                "id": "c",
                "text": "Signals for some types of carbons, such as carbonyl carbons, are inherently weaker than others."
            },
            {
                "id": "d",
                "text": "The spectrometer cannot detect the intensity of ^{13}C nuclei."
            },
            {
                "id": "e",
                "text": "Integration is only possible for radioactive isotopes."
            }
        ],
        "correctId": "c",
        "explanation": "Unlike ^1H-NMR, where signal area is proportional to the number of protons, ^{13}C-NMR signal intensities are not directly proportional to the number of carbons. Some carbons, like quaternary or carbonyl carbons, produce much smaller signals than methyl (CH_3) or methylene (CH_2) carbons."
    },
    {
        "id": "q23",
        "question": "What is the typical range for chemical shifts in a ^{13}C-NMR spectrum?",
        "options": [
            {
                "id": "a",
                "text": "0\u201312 ppm"
            },
            {
                "id": "b",
                "text": "0\u201350 ppm"
            },
            {
                "id": "c",
                "text": "0\u2013100 ppm"
            },
            {
                "id": "d",
                "text": "0\u2013220 ppm"
            },
            {
                "id": "e",
                "text": "100\u2013500 ppm"
            }
        ],
        "correctId": "d",
        "explanation": "The chemical shifts for ^{13}C nuclei are spread over a much broader range (0\u2013220 ppm) compared to the small range for protons (0\u201312 ppm). This wide range is beneficial because it allows each carbon to appear as a distinct peak without the overlapping often seen in proton spectra."
    },
    {
        "id": "q24",
        "question": "Why is carbon-carbon (^{13}C-^{13}C) splitting typically NOT observed in a standard ^{13}C-NMR spectrum?",
        "options": [
            {
                "id": "a",
                "text": "Carbon atoms are too far apart to couple."
            },
            {
                "id": "b",
                "text": "The probability of two ^{13}C nuclei being adjacent is extremely low (about 0.01%)."
            },
            {
                "id": "c",
                "text": "The spectrometer automatically filters out C-C coupling to simplify the chart."
            },
            {
                "id": "d",
                "text": "^{13}C nuclei do not have magnetic spins."
            },
            {
                "id": "e",
                "text": "^{13}C only couples with isotopes of nitrogen."
            }
        ],
        "correctId": "b",
        "explanation": "Because the natural abundance of ^{13}C is only 1.1%, the chance of two ^{13}C atoms being bonded to each other in the same molecule is very small. Consequently, C-C splitting is not observed."
    },
    {
        "id": "q25",
        "question": "In a standard broadband-decoupled ^{13}C-NMR spectrum, how do the carbon signals usually appear?",
        "options": [
            {
                "id": "a",
                "text": "As complex multiplets due to splitting by nearby protons."
            },
            {
                "id": "b",
                "text": "As doublets only."
            },
            {
                "id": "c",
                "text": "As singlets."
            },
            {
                "id": "d",
                "text": "As triplets."
            },
            {
                "id": "e",
                "text": "They do not appear unless the sample is heated."
            }
        ],
        "correctId": "c",
        "explanation": "While ^{13}C signals can be split by nearby protons (^1H-^{13}C coupling), this splitting is usually eliminated using an instrumental technique called \"decoupling.\" This causes every peak in the spectrum to appear as a single line (singlet), simplifying interpretation."
    },
    {
        "id": "q26",
        "question": "Which type of carbon atom typically appears the furthest downfield (170\u2013220 ppm) in a ^{13}C-NMR spectrum?",
        "options": [
            {
                "id": "a",
                "text": "Alkane carbons (sp^3)"
            },
            {
                "id": "b",
                "text": "Aromatic carbons"
            },
            {
                "id": "c",
                "text": "Alkene carbons (sp^2)"
            },
            {
                "id": "d",
                "text": "Carbonyl carbons (C=O)"
            },
            {
                "id": "e",
                "text": "Alkyne carbons (sp)"
            }
        ],
        "correctId": "d",
        "explanation": "Carbonyl carbons are highly deshielded due to both their sp^2 hybridization and the strong inductive effect of the double-bonded oxygen atom. This places them at the furthest downfield position in the spectrum."
    },
    {
        "id": "q27",
        "question": "How many ^{13}C-NMR signals would you expect for methyl acetate (CH_3COOCH_3)?",
        "options": [
            {
                "id": "a",
                "text": "1"
            },
            {
                "id": "b",
                "text": "2"
            },
            {
                "id": "c",
                "text": "3"
            },
            {
                "id": "d",
                "text": "4"
            },
            {
                "id": "e",
                "text": "6"
            }
        ],
        "correctId": "c",
        "explanation": "Each distinct type of carbon atom gives one signal. In methyl acetate, there are three unique carbons: the acetate methyl carbon (C_a), the carbonyl carbon (C_b), and the ester methyl carbon (C_c)."
    },
    {
        "id": "q28",
        "question": "In a DEPT-90 ^{13}C-NMR experiment, which type of carbon is the ONLY one to produce a signal?",
        "options": [
            {
                "id": "a",
                "text": "CH_3 (Methyl)"
            },
            {
                "id": "b",
                "text": "CH_2 (Methylene)"
            },
            {
                "id": "c",
                "text": "CH (Methine)"
            },
            {
                "id": "d",
                "text": "Quaternary carbons (C with no H)"
            },
            {
                "id": "e",
                "text": "Carbonyl carbons"
            }
        ],
        "correctId": "c",
        "explanation": "The DEPT-90 stage is specifically designed to show only signals from CH carbons. Signals from CH_3, CH_2, and quaternary carbons (including carbonyls) are absent in this mode."
    },
    {
        "id": "q29",
        "question": "In a DEPT-135 spectrum, a negative peak (pointing downward below the baseline) identifies which group?",
        "options": [
            {
                "id": "a",
                "text": "CH_3"
            },
            {
                "id": "b",
                "text": "CH"
            },
            {
                "id": "c",
                "text": "CH_2"
            },
            {
                "id": "d",
                "text": "Quaternary Carbon"
            },
            {
                "id": "e",
                "text": "Carbonyl Carbon"
            }
        ],
        "correctId": "c",
        "explanation": "In a DEPT-135 experiment, CH_3 and CH resonances appear as positive signals, while CH_2 resonances appear as negative signals. Quaternary and carbonyl carbons do not appear."
    },
    {
        "id": "q30",
        "question": "Which of the following factors would cause a carbon signal to shift downfield (to a higher ppm)?",
        "options": [
            {
                "id": "a",
                "text": "Attaching the carbon to a more electropositive atom."
            },
            {
                "id": "b",
                "text": "Changing the hybridization from sp^2 to sp^3."
            },
            {
                "id": "c",
                "text": "Attaching the carbon to a more electronegative atom like Oxygen or Nitrogen."
            },
            {
                "id": "d",
                "text": "Increasing the number of hydrogen atoms attached to the carbon."
            },
            {
                "id": "e",
                "text": "Decreasing the spectrometer's operating frequency."
            }
        ],
        "correctId": "c",
        "explanation": "Electronegative atoms pull electron density away from the carbon nucleus (deshielding), which causes the signal to shift downfield to a higher resonance frequency/ppm."
    }
],
    'schizophrenia': [
    {
        "id": "q1",
        "question": "1. Schizophrenia is primarily associated with:",
        "options": [
            {
                "id": "a",
                "text": "Decreased acetylcholine activity in the thalamus"
            },
            {
                "id": "b",
                "text": "Increased norepinephrine activity in the hippocampus"
            },
            {
                "id": "c",
                "text": "Hyperactivity of dopaminergic processes in the mesocaudate"
            },
            {
                "id": "d",
                "text": "Increased serotonin activity in the cerebellum"
            },
            {
                "id": "e",
                "text": "Hypoactivity of dopaminergic processes in the mesocaudate"
            }
        ],
        "correctId": "c",
        "explanation": "The pathophysiology of schizophrenia indicates that positive symptoms are associated with dopamine receptor hyperactivity in the mesocaudate."
    },
    {
        "id": "q2",
        "question": "2. Positive symptoms of schizophrenia include all EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Delusions"
            },
            {
                "id": "b",
                "text": "Anhedonia"
            },
            {
                "id": "c",
                "text": "Ideas of influence"
            },
            {
                "id": "d",
                "text": "Disorganized speech"
            },
            {
                "id": "e",
                "text": "Hallucinations"
            }
        ],
        "correctId": "b",
        "explanation": "Anhedonia is specifically classified as a negative symptom, whereas delusions, ideas of influence, disorganized speech, and hallucinations are positive symptoms."
    },
    {
        "id": "q3",
        "question": "3. Anti-psychotic has superior efficacy for schizophrenic patient with suicidal behaviors:",
        "options": [
            {
                "id": "a",
                "text": "aripiprazole"
            },
            {
                "id": "b",
                "text": "clozapine"
            },
            {
                "id": "c",
                "text": "risperidone"
            },
            {
                "id": "d",
                "text": "ziprasidone"
            },
            {
                "id": "e",
                "text": "haloperidol"
            }
        ],
        "correctId": "b",
        "explanation": "The sources state that clozapine has demonstrated superior efficacy for treating suicidal behavior in schizophrenia patients."
    },
    {
        "id": "q4",
        "question": "4. H.U is a 30-year-old obese woman recently diagnosed with schizophrenia. She preferred therapies with once daily regimen that is associated with minimal weight gain. Which one of the following drugs is the preferred first line therapy for HK?",
        "options": [
            {
                "id": "a",
                "text": "Olanzapine"
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
                "text": "Cariprazine"
            },
            {
                "id": "e",
                "text": "Clozapine"
            }
        ],
        "correctId": "d",
        "explanation": "Selection of an antipsychotic is based on avoiding adverse effects; since the patient is obese and wants to minimize weight gain, Cariprazine (an SGA) is a preferred choice over options like olanzapine or quetiapine, which are more frequently associated with weight gain."
    },
    {
        "id": "q5",
        "question": "5. A 22-year-old male with a history of schizophrenia is brought to the emergency department with complaints of sudden painful neck twisting and upward eye deviation that started a day after receiving a high dose of haloperidol for acute psychosis. He was diagnosed with drug-induced dystonia. All the following are considered risk factors for dystonia in this patient except:",
        "options": [
            {
                "id": "a",
                "text": "Use of high-potency first-generation antipsychotics (FGAs)"
            },
            {
                "id": "b",
                "text": "High-dose antipsychotic therapy"
            },
            {
                "id": "c",
                "text": "Male gender"
            },
            {
                "id": "d",
                "text": "Young age"
            },
            {
                "id": "e",
                "text": "Use of second-generation antipsychotics (SGAs)"
            }
        ],
        "correctId": "e",
        "explanation": "Risk factors for dystonia include young age, male gender, and the use of high-dose, high-potency FGAs (like haloperidol); SGAs are associated with a lower risk of these extrapyramidal side effects."
    },
    {
        "id": "q6",
        "question": "6. Regarding schizophrenia treatment: Which statement is Not Correct about the treatment of schizophrenia?",
        "options": [
            {
                "id": "a",
                "text": "Long acting injectable risperidone is more effective than oral risperidone in preventing relapse over a 1 year period for first episode schizophrenia"
            },
            {
                "id": "b",
                "text": "Clozapine has superior efficacy for suicidal behavior"
            },
            {
                "id": "c",
                "text": "SGAs exhibit high D2 antagonism and low 5HT2A antagonism"
            },
            {
                "id": "d",
                "text": "Base antipsychotic selection on concurrent medical or psychiatric disorders"
            },
            {
                "id": "e",
                "text": "In first episode, initial dose of antipsychotics should be at the lower end of the range"
            }
        ],
        "correctId": "c",
        "explanation": "Statement C is incorrect because SGAs actually exhibit moderate to high D2 antagonism and high 5HT2A antagonism; it is the FGAs that have low 5HT2A antagonism."
    },
    {
        "id": "q7",
        "question": "7. A 28-year-old male with schizophrenia has failed two adequate trials of second-generation antipsychotics. He continues to experience persistent hallucinations and delusions. Which medication should be considered next according to treatment guidelines?",
        "options": [
            {
                "id": "a",
                "text": "Combination of risperidone and olanzapine"
            },
            {
                "id": "b",
                "text": "Haloperidol long-acting injection"
            },
            {
                "id": "c",
                "text": "Clozapine monotherapy"
            },
            {
                "id": "d",
                "text": "Ziprasidone with mood stabilizer"
            },
            {
                "id": "e",
                "text": "Quetiapine with antidepressant"
            }
        ],
        "correctId": "c",
        "explanation": "According to treatment algorithms, Clozapine monotherapy is recommended for Stage 3 patients, which is defined as those who have failed two or more adequate trials of other antipsychotics."
    },
    {
        "id": "q8",
        "question": "8. Show low D2 antagonism and high 5HT2A antagonism:",
        "options": [
            {
                "id": "a",
                "text": "Clozapine"
            },
            {
                "id": "b",
                "text": "Chlorpromazine"
            },
            {
                "id": "c",
                "text": "Fluphenazine"
            },
            {
                "id": "d",
                "text": "Haloperidol"
            },
            {
                "id": "e",
                "text": "Thioridazine"
            }
        ],
        "correctId": "a",
        "explanation": "The pharmacologic profile of clozapine is unique in that it shows low D2 receptor antagonism alongside high 5HT2A receptor antagonism."
    },
    {
        "id": "q9",
        "question": "9. Added to antipsychotic therapy to improve labile effect and agitation in refractory schizophrenia:",
        "options": [
            {
                "id": "a",
                "text": "Valproic acid"
            },
            {
                "id": "b",
                "text": "Clozapine"
            },
            {
                "id": "c",
                "text": "Procyclidine"
            },
            {
                "id": "d",
                "text": "Benztropine"
            },
            {
                "id": "e",
                "text": "Valbenazine"
            }
        ],
        "correctId": "a",
        "explanation": "Mood stabilizers like valproic acid, lithium, or carbamazepine can be used as adjuncts to improve labile affect and agitation in patients with refractory disease."
    },
    {
        "id": "q10",
        "question": "10. Myocarditis is infrequent and dose-independent adverse effect that is most likely to occur with:",
        "options": [
            {
                "id": "a",
                "text": "Clozapine"
            },
            {
                "id": "b",
                "text": "Haloperidol"
            },
            {
                "id": "c",
                "text": "Chlorpromazine"
            },
            {
                "id": "d",
                "text": "Aripiprazole"
            },
            {
                "id": "e",
                "text": "Risperidone"
            }
        ],
        "correctId": "a",
        "explanation": "Clozapine is associated with several rare but serious dose-independent side effects, specifically myocarditis and agranulocytosis."
    },
    {
        "id": "q11",
        "question": "11. Absolute neutrophil count (ANC) monitoring during clozapine therapy includes:",
        "options": [
            {
                "id": "a",
                "text": "Weekly for the first 6 months"
            },
            {
                "id": "b",
                "text": "Every 2 weeks for the first 6 months"
            },
            {
                "id": "c",
                "text": "Monthly for first year"
            },
            {
                "id": "d",
                "text": "Every 3 months"
            },
            {
                "id": "e",
                "text": "Every six months"
            }
        ],
        "correctId": "a",
        "explanation": "Due to the risk of severe neutropenia, Clozapine requires strict ANC monitoring, which standard protocols mandate must be performed weekly for the first six months of therapy."
    }
],
  'thyroid': [
    {
        "id": "q1",
        "question": "1. JM is a regular patient who came to your private pharmacy carrying a lab test positive for TRABs; your most likely first thought would be:",
        "options": [
            {
                "id": "a",
                "text": "The patient is suffering from hypoadrenalism"
            },
            {
                "id": "b",
                "text": "The patient is anemic"
            },
            {
                "id": "c",
                "text": "The patient should be sent for T3, T4, and TSH blood test"
            },
            {
                "id": "d",
                "text": "The patient is suffering from leukemia"
            }
        ],
        "correctId": "c",
        "explanation": "Graves' disease is caused by thyroid-stimulating antibodies (TSAb/TRABs). To confirm a diagnosis of thyrotoxicosis in symptomatic patients, measurement of serum free T4, total T4, total T3, and TSH is required."
    },
    {
        "id": "q2",
        "question": "2. OU is a hyperthyroid patient who came to your private pharmacy carrying a prescription containing Lugol's solution. He asks you why his surgeon wrote it before a radical thyroidectomy; your answer will include all of the below EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "To reduce the size of the gland"
            },
            {
                "id": "b",
                "text": "To reduce the vascularity of the gland"
            },
            {
                "id": "c",
                "text": "To reduce the intensity of bleeding during the operation"
            },
            {
                "id": "d",
                "text": "To reduce the possibility of developing hot nodule"
            }
        ],
        "correctId": "d",
        "explanation": "Iodides like Lugol\u2019s solution are used preoperatively to decrease the size and vascularity of the thyroid gland, which helps minimize bleeding during surgery."
    },
    {
        "id": "q3",
        "question": "3. KL is a colleague pharmacist with suspected hypothyroidism; his symptoms are all suggestive of his illness EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Constipation"
            },
            {
                "id": "b",
                "text": "Diarrhea"
            },
            {
                "id": "c",
                "text": "Bradycardia"
            },
            {
                "id": "d",
                "text": "Weakness and lethargy"
            }
        ],
        "correctId": "b",
        "explanation": "Hypothyroidism is characterized by constipation and bradycardia. Diarrhea (or increased frequency of bowel movements) is a symptom associated with hyperthyroidism (thyrotoxicosis)."
    },
    {
        "id": "q4",
        "question": "4. All of the following are facial expressions of hypothyroidism EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Lateral thin eyebrows"
            },
            {
                "id": "b",
                "text": "Periorbital edema"
            },
            {
                "id": "c",
                "text": "Puffy dull face"
            },
            {
                "id": "d",
                "text": "Exophthalmos"
            }
        ],
        "correctId": "d",
        "explanation": "Exophthalmos (bulging eyes) is a specific extrathyroidal finding associated with Graves' disease (hyperthyroidism). Hypothyroidism typically presents with periorbital puffiness."
    },
    {
        "id": "q5",
        "question": "5. DR is suffering from coarse hair, bradycardia, raised TSH, and a lower than normal T4 level. His physician argues about the possibility of pituitary failure (secondary hypothyroidism). Your opinion is that this rare condition should be suspected if:",
        "options": [
            {
                "id": "a",
                "text": "The level of T4 is decreased with an inappropriately normal or low TSH level."
            },
            {
                "id": "b",
                "text": "The level of T4 is increased with an inappropriately normal or low TSH level."
            },
            {
                "id": "c",
                "text": "The level of T4 is decreased with a high TSH level."
            },
            {
                "id": "d",
                "text": "Both of T4 and TSH levels are increased"
            }
        ],
        "correctId": "a",
        "explanation": "In secondary hypothyroidism due to pituitary failure, serum TSH concentrations are generally low or normal, which is considered inappropriate when the circulating T4 level is low."
    },
    {
        "id": "q6",
        "question": "6. CS is a patient suffering from a chronic disease for which his physician has ordered a T3 injection, which he considers the first choice drug in this condition only. According to your opinion, this condition would be:",
        "options": [
            {
                "id": "a",
                "text": "Chronic hypothyroidism"
            },
            {
                "id": "b",
                "text": "Hyperthyroidism"
            },
            {
                "id": "c",
                "text": "Myxedema coma"
            },
            {
                "id": "d",
                "text": "Hypoadrenalism"
            }
        ],
        "correctId": "c",
        "explanation": "Myxedema coma is a life-threatening medical emergency requiring immediate and aggressive therapy. While oral T4 is standard for chronic hypothyroidism, rapid action in coma often involves IV hormone replacement, and the source notes synthetic T3 has a higher incidence of cardiac effects and is harder to monitor, making its use specialized for such emergencies."
    },
    {
        "id": "q7",
        "question": "7. Myxedema coma is a serious condition. Treatment of myxedema coma includes all the following EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Thyroxine"
            },
            {
                "id": "b",
                "text": "IV fluids to maintain BP"
            },
            {
                "id": "c",
                "text": "Magnesium sulfate"
            },
            {
                "id": "d",
                "text": "Hydrocortisone"
            },
            {
                "id": "e",
                "text": "Assisted ventilation"
            }
        ],
        "correctId": "c",
        "explanation": "Management of myxedema coma includes IV thyroid hormone, IV fluids (dextrose/saline) for blood pressure support, and hydrocortisone to stabilize the patient. Magnesium sulfate is not listed as a standard part of the treatment protocol."
    },
    {
        "id": "q8",
        "question": "8. Many treatments can be used for treating hyperthyroidism. Pharmacological treatment of hyperthyroidism includes:",
        "options": [
            {
                "id": "a",
                "text": "Thioureas"
            },
            {
                "id": "b",
                "text": "Iodides"
            },
            {
                "id": "c",
                "text": "Adrenergic blockers"
            },
            {
                "id": "d",
                "text": "Radioactive iodine"
            },
            {
                "id": "e",
                "text": "All can be used"
            }
        ],
        "correctId": "e",
        "explanation": "The sources list thionamides (thioureas), iodides, adrenergic (beta) blockers, and radioactive iodine as established pharmacological treatments for hyperthyroidism."
    },
    {
        "id": "q9",
        "question": "9. Which one of the following medications can be used during the first trimester of pregnancy for the treatment of hyperthyroidism?",
        "options": [
            {
                "id": "a",
                "text": "Propylthiouracil"
            },
            {
                "id": "b",
                "text": "Radioactive iodine"
            },
            {
                "id": "c",
                "text": "Carbimazole"
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
        "explanation": "Propylthiouracil (PTU) is the preferred thionamide for use during the first trimester of pregnancy because the risk of methimazole-induced birth defects (embryopathy) may exceed the risks associated with PTU."
    },
    {
        "id": "q10",
        "question": "10. Hypothyroid patients are evaluated every 4-8 weeks. The most sensitive and specific parameter for adjustment of L-thyroxine dose is:",
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
        "explanation": "TSH monitoring is the primary and most sensitive method used to determine and individualize the appropriate maintenance dose of levothyroxine."
    },
    {
        "id": "q11",
        "question": "11. The following are correct regarding the pathophysiology of hyperthyroidism EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Thyrotoxicosis occurs when autonomous follicles generate more thyroid hormones than required."
            },
            {
                "id": "b",
                "text": "Toxic adenoma is a thyroid mass whose function is independent of pituitary control."
            },
            {
                "id": "c",
                "text": "Painless subacute granulomatous thyroiditis often develops after viral syndrome."
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
        "explanation": "Painful subacute (granulomatous) thyroiditis is the condition that typically follows a viral syndrome. Painless thyroiditis is a different clinical entity, likely autoimmune in nature."
    },
    {
        "id": "q12",
        "question": "12. A 45-year-old woman has received a diagnosis of Graves' disease. She is reluctant to try ablative therapy and wants to attempt oral pharmacotherapy first. Her thyroid laboratory values include TSH 0.25 mIU/L and a free T4 of 3.6 ng/dL. Which would be considered the best drug for initial treatment?",
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
        "explanation": "Methimazole is the first-line thionamide for most adults because PTU is associated with a higher risk of serious hepatotoxicity."
    },
    {
        "id": "q13",
        "question": "13. Regarding Graves' disease, all of the following are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "It is a curable condition"
            },
            {
                "id": "b",
                "text": "Nervousness, anxiety, and palpitations are common symptoms"
            },
            {
                "id": "c",
                "text": "Exophthalmos, pretibial myxedema, and thyroid acropachy are extrathyroidal findings"
            },
            {
                "id": "d",
                "text": "It is characterized by high levels of T3, T4 and TSH"
            },
            {
                "id": "e",
                "text": "It is the most common cause of hyperthyroidism"
            }
        ],
        "correctId": "d",
        "explanation": "In Graves' disease, while T3 and T4 levels are high, TSH is undetectable (suppressed) due to the negative feedback of thyroid hormones on the pituitary."
    },
    {
        "id": "q14",
        "question": "14. Regarding levothyroxine, all of the following are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "It is chemically stable, relatively inexpensive, active when given orally, and free of antigenicity"
            },
            {
                "id": "b",
                "text": "It is a main source of thyroxine that is readily converted to triiodothyronine"
            },
            {
                "id": "c",
                "text": "It is the drug of choice for hypothyroid pregnant women"
            },
            {
                "id": "d",
                "text": "Higher than normal dose is usually indicated for the treatment of thyroid storm"
            },
            {
                "id": "e",
                "text": "Excessive doses may lead to heart failure, angina pectoris, and myocardial infarction"
            }
        ],
        "correctId": "d",
        "explanation": "Levothyroxine is used to treat hypothyroidism. Thyroid storm is a state of excessive thyroid hormone, and its treatment involves agents that *block* hormone synthesis and release (like PTU and iodides), not additional thyroxine."
    },
    {
        "id": "q15",
        "question": "15. An elderly female patient with a history of Graves\u2019 disease presented with heat intolerance and weight loss. Her laboratory values show reduced TSH and abnormally high T",
        "options": [],
        "correctId": "",
        "explanation": ""
    },
    {
        "id": "q16",
        "question": "16. What is the best treatment recommendation right now?",
        "options": [
            {
                "id": "a",
                "text": "Start methimazole"
            },
            {
                "id": "b",
                "text": "Start Lugol's solution"
            },
            {
                "id": "c",
                "text": "Start propylthiouracil"
            },
            {
                "id": "d",
                "text": "Start metoprolol"
            },
            {
                "id": "e",
                "text": "Start thyroxine"
            }
        ],
        "correctId": "b",
        "explanation": "In severely thyrotoxic patients or elderly patients with cardiac issues, iodides like Lugol\u2019s solution can be used to acutely inhibit the release of preformed thyroid hormone and quickly attain a euthyroid state."
    },
    {
        "id": "q17",
        "question": "17. T.R. is a 32-year-old patient with Hashimoto's disease maintained on thyroxine 75 mcg daily. She presented with hypothermia, reduced consciousness, bradycardia, and periorbital puffiness. What is the best management plan?",
        "options": [
            {
                "id": "a",
                "text": "Propylthiouracil IV followed by iodide and Corticosteroid"
            },
            {
                "id": "b",
                "text": "Thyroxine IV followed by hydrocortisone and other conservative measures"
            },
            {
                "id": "c",
                "text": "High dose of oral Methimazole"
            },
            {
                "id": "d",
                "text": "Oral thyroxine"
            },
            {
                "id": "e",
                "text": "warm the patient and administer IV fluids and corticosteroid"
            }
        ],
        "correctId": "b",
        "explanation": "These symptoms indicate myxedema coma, which requires aggressive IV hormone replacement (thyroxine) and hydrocortisone to stabilize the patient."
    },
    {
        "id": "q18",
        "question": "18. All the following treatments for thyrotoxicosis are non-safe in pregnancy EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "methimazole"
            },
            {
                "id": "b",
                "text": "5-fluorouracil"
            },
            {
                "id": "c",
                "text": "carbamazepine"
            },
            {
                "id": "d",
                "text": "carbimazole"
            },
            {
                "id": "e",
                "text": "Propylthiouracil"
            }
        ],
        "correctId": "e",
        "explanation": "PTU is specifically recommended for hyperthyroidism in the first trimester of pregnancy to avoid the risk of birth defects associated with methimazole and carbimazole."
    },
    {
        "id": "q19",
        "question": "19. A 45-year-old female on amiodarone is experiencing cold intolerance, weight gain, fatigue, and hair loss. What is the most likely effect of amiodarone on her thyroid gland?",
        "options": [
            {
                "id": "a",
                "text": "Hypothyroidism"
            },
            {
                "id": "b",
                "text": "hyperthyroidism"
            },
            {
                "id": "c",
                "text": "TSH stimulation"
            },
            {
                "id": "d",
                "text": "TRH stimulation"
            },
            {
                "id": "e",
                "text": "TSH inhibition"
            }
        ],
        "correctId": "a",
        "explanation": "Amiodarone can induce overt hypothyroidism in 5% of patients and subclinical hypothyroidism in up to 25% of patients."
    },
    {
        "id": "q20",
        "question": "20. The only conditions for which beta-blockers are the primary therapy for thyrotoxicosis are those associated with:",
        "options": [
            {
                "id": "a",
                "text": "Thyroiditis"
            },
            {
                "id": "b",
                "text": "Graves' disease"
            },
            {
                "id": "c",
                "text": "Thyroid storm"
            },
            {
                "id": "d",
                "text": "Toxic nodules"
            },
            {
                "id": "e",
                "text": "Hashimoto's disease"
            }
        ],
        "correctId": "a",
        "explanation": "Beta-blockers are usually adjunctive, but they are considered primary therapy in thyroiditis because the thyrotoxicosis is caused by the leakage of preformed hormone rather than overproduction."
    },
    {
        "id": "q21",
        "question": "21. CC is a 65-year-old woman with weight gain, cardiac problems, and hypothyroidism (High TSH, low T4). The proper initial treatment for this case will be:",
        "options": [
            {
                "id": "a",
                "text": "Levothyroxine 25 mcg/day."
            },
            {
                "id": "b",
                "text": "Propranolol 40 mg QID daily."
            },
            {
                "id": "c",
                "text": "Surgical removal of the thyroid gland."
            },
            {
                "id": "d",
                "text": "Levothyroxine 50 mcg/day."
            },
            {
                "id": "e",
                "text": "Propylthiouracil (PTU) 300 mg TID daily."
            }
        ],
        "correctId": "a",
        "explanation": "For older patients with known cardiac disease, the recommended initial dose of levothyroxine is 25 mcg/day to avoid putting excessive stress on the cardiovascular system."
    },
    {
        "id": "q22",
        "question": "22. Regarding thyroid gland disorders, all of the following are potential causes of hypothyroidism EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Hashimoto's thyroiditis"
            },
            {
                "id": "b",
                "text": "Ketoconazole therapy"
            },
            {
                "id": "c",
                "text": "Radioactive iodine therapy"
            },
            {
                "id": "d",
                "text": "Pituitary failure"
            },
            {
                "id": "e",
                "text": "Over-treatment with thionamides"
            }
        ],
        "correctId": "b",
        "explanation": "The sources state that ketoconazole inhibits cortisol synthesis and is linked to adrenal gland hypofunction (Addison disease), not primary thyroid failure."
    },
    {
        "id": "q23",
        "question": "23. Regarding thyroid storm, all the following are characteristics EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Tachycardia"
            },
            {
                "id": "b",
                "text": "Tachypnea"
            },
            {
                "id": "c",
                "text": "Dehydration"
            },
            {
                "id": "d",
                "text": "Constipation"
            },
            {
                "id": "e",
                "text": "Nausea and vomiting"
            }
        ],
        "correctId": "d",
        "explanation": "Thyroid storm is characterized by gastrointestinal hyperactivity, including diarrhea; constipation is a classic sign of hypothyroidism."
    },
    {
        "id": "q24",
        "question": "24. A 60-year-old female with hypothyroidism presents in a stuporous state with a body temperature of 33.5\u00b0C and bradycardia. What is the appropriate initial treatment for this patient?",
        "options": [
            {
                "id": "a",
                "text": "IV bolus levothyroxine"
            },
            {
                "id": "b",
                "text": "IV liothyronine"
            },
            {
                "id": "c",
                "text": "IV hydrocortisone"
            },
            {
                "id": "d",
                "text": "IV bolus levothyroxine and IV hydrocortisone"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "d",
        "explanation": "Treatment for myxedema coma requires both IV thyroid hormone (levothyroxine) for replacement and hydrocortisone to manage potential concurrent adrenal insufficiency and support blood pressure."
    },
    {
        "id": "q25",
        "question": "25. B.S. has multinodular goiter and hyperthyroidism symptoms. Which treatment option may exacerbate the condition?",
        "options": [
            {
                "id": "a",
                "text": "Propranolol"
            },
            {
                "id": "b",
                "text": "Propylthiouracil"
            },
            {
                "id": "c",
                "text": "Methimazole"
            },
            {
                "id": "d",
                "text": "Radioactive Iodine"
            },
            {
                "id": "e",
                "text": "Iodide"
            }
        ],
        "correctId": "e",
        "explanation": "Iodide is contraindicated in toxic multinodular goiter because the autonomous thyroid tissue can use the extra iodine to synthesize even more thyroid hormone, worsening the thyrotoxicosis."
    },
    {
        "id": "q26",
        "question": "26. Regarding treatment of hyperthyroidism, which of the following are considered to be ablative therapy for thyrotoxicosis due to Graves\u2019 disease?",
        "options": [
            {
                "id": "a",
                "text": "Thyroidectomy only"
            },
            {
                "id": "b",
                "text": "Methimazole only"
            },
            {
                "id": "c",
                "text": "Radioactive 131I only"
            },
            {
                "id": "d",
                "text": "Propranolol only"
            },
            {
                "id": "e",
                "text": "Both thyroidectomy and Radioactive 131I"
            }
        ],
        "correctId": "e",
        "explanation": "Ablative therapies involve the physical destruction or removal of thyroid tissue, which is achieved through surgery (thyroidectomy) or radioactive iodine treatment."
    },
    {
        "id": "q27",
        "question": "27. What is the type of hyperthyroidism due to ingestion of exogenous thyroid hormone?",
        "options": [
            {
                "id": "a",
                "text": "Painful subacute thyroiditis"
            },
            {
                "id": "b",
                "text": "Painless thyroiditis"
            },
            {
                "id": "c",
                "text": "Thyrotoxicosis factitia"
            },
            {
                "id": "d",
                "text": "multinodular goiter"
            },
            {
                "id": "e",
                "text": "Graves' disease"
            }
        ],
        "correctId": "c",
        "explanation": "Thyrotoxicosis factitia is defined as hyperthyroidism resulting from the ingestion of exogenous thyroid hormone."
    },
    {
        "id": "q28",
        "question": "28. A 25-year-old non-pregnant female was treated successfully from hyperthyroidism using methimazole. Relapse occurs. The preferred second-line treatment would be:",
        "options": [
            {
                "id": "a",
                "text": "Second course of methimazole"
            },
            {
                "id": "b",
                "text": "Use of radioactive iodine"
            },
            {
                "id": "c",
                "text": "Switch to propylthiouracil"
            },
            {
                "id": "d",
                "text": "Thyroidectomy"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "b",
        "explanation": "If a relapse occurs after a course of antithyroid drugs, alternative therapy with radioactive iodine (RAI) is generally preferred."
    },
    {
        "id": "q29",
        "question": "29. Despite multiple indications for iodide in thyrotoxicosis, it is contraindicated in:",
        "options": [
            {
                "id": "a",
                "text": "Preparing patients for thyroidectomy"
            },
            {
                "id": "b",
                "text": "Graves' disease"
            },
            {
                "id": "c",
                "text": "Painful thyroiditis"
            },
            {
                "id": "d",
                "text": "Toxic multinodular goiter"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "d",
        "explanation": "As noted, iodides provide substrate for autonomous follicles in multinodular goiters to produce hormone, making it contraindicated in that specific condition."
    },
    {
        "id": "q30",
        "question": "30. All of the following hyperthyroid patients are candidates for methimazole therapy as first-line treatment over propylthiouracil EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "A 55-year-old male with thyroid storm"
            },
            {
                "id": "b",
                "text": "A 24-year-old pregnant female at her second trimester of pregnancy"
            },
            {
                "id": "c",
                "text": "A 26-year-old postpartum female"
            },
            {
                "id": "d",
                "text": "A 66-year-old male with a recent incidence of COVID-19"
            },
            {
                "id": "e",
                "text": "A 10-year-old boy with two days history of common cold"
            }
        ],
        "correctId": "a",
        "explanation": "PTU is preferred in thyroid storm because, unlike methimazole, it inhibits the peripheral conversion of T4 to the more active T3, providing a more rapid clinical effect."
    },
    {
        "id": "q31",
        "question": "31. Beta-blockers may be used as a first-line therapy rather than as adjunctive therapy in:",
        "options": [
            {
                "id": "a",
                "text": "treating Graves' disease"
            },
            {
                "id": "b",
                "text": "treating thyroiditis"
            },
            {
                "id": "c",
                "text": "preparation for thyroid surgery"
            },
            {
                "id": "d",
                "text": "treating thyroid storm"
            },
            {
                "id": "e",
                "text": "treating toxic nodules"
            }
        ],
        "correctId": "b",
        "explanation": "Beta-blockers are the primary symptomatic treatment for thyroiditis because the condition is self-limiting and hormone synthesis is not the issue."
    },
    {
        "id": "q32",
        "question": "32. Regarding replacement therapy for hypothyroidism, the following statements are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Older patients without known cardiac disease should be started on 50 mcg daily"
            },
            {
                "id": "b",
                "text": "The initial daily dose for older patients with cardiac disease is 25 mcg/day"
            },
            {
                "id": "c",
                "text": "The average maintenance dose for most adults is about 125 mcg/day"
            },
            {
                "id": "d",
                "text": "Levothyroxine is the drug of choice for pregnant women, it does not need to adjust the dose to maintain free T4 concentrations in the normal range"
            },
            {
                "id": "e",
                "text": "Cholestyramine may impair the absorption of levothyroxine"
            }
        ],
        "correctId": "d",
        "explanation": "Levothyroxine is the drug of choice in pregnancy, but the dose usually does need to be adjusted to maintain thyroid hormone levels in the appropriate reference range for the specific stage of pregnancy."
    },
    {
        "id": "q33",
        "question": "33. Samir is taking thyroxine for hypothyroidism and is prescribed aluminum hydroxide and sucralfate for a GIT problem. You should advise the physician to:",
        "options": [
            {
                "id": "a",
                "text": "cancel pantoprazole"
            },
            {
                "id": "b",
                "text": "cancel sucralfate"
            },
            {
                "id": "c",
                "text": "decrease dose of pantoprazole"
            },
            {
                "id": "d",
                "text": "increase dose of thyroxine"
            },
            {
                "id": "e",
                "text": "decrease the dose of thyroxine"
            }
        ],
        "correctId": "d",
        "explanation": "Agents like aluminum hydroxide and sucralfate can significantly impair the gastrointestinal absorption of levothyroxine, often necessitating a higher thyroid hormone dose or careful separation of administration times."
    },
    {
        "id": "q34",
        "question": "34. What test results would indicate thyrotoxicosis caused by Graves' disease?",
        "options": [
            {
                "id": "a",
                "text": "Elevated TSH, low RAIU"
            },
            {
                "id": "b",
                "text": "Elevated free T4, elevated free T3, suppressed TSH"
            },
            {
                "id": "c",
                "text": "Normal TSH, low RAIU"
            },
            {
                "id": "d",
                "text": "Elevated T3, normal T4, elevated TSH"
            },
            {
                "id": "e",
                "text": "Reduced iodine uptake in specific areas of the thyroid"
            }
        ],
        "correctId": "b",
        "explanation": "In Graves' disease, the thyroid gland overproduces T4 and T3, which leads to high circulating levels and the suppression of TSH production by the pituitary."
    },
    {
        "id": "q35",
        "question": "35. What is a contraindication for radioactive iodine therapy?",
        "options": [
            {
                "id": "a",
                "text": "Moderate to severe eye disease"
            },
            {
                "id": "b",
                "text": "Suspicious thyroid nodules"
            },
            {
                "id": "c",
                "text": "Desire to become pregnant in the next 12 months"
            },
            {
                "id": "d",
                "text": "Need for quick control of hyperthyroidism"
            },
            {
                "id": "e",
                "text": "Thyroid adenoma"
            }
        ],
        "correctId": "c",
        "explanation": "Pregnancy is an absolute contraindication for RAI, and women are generally advised to avoid becoming pregnant for 6 to 12 months following treatment to ensure the radiation has cleared."
    },
    {
        "id": "q36",
        "question": "36. Hyperthyroidism caused by ingestion of excessive amounts of thyroid hormone is defined as:",
        "options": [
            {
                "id": "a",
                "text": "Painful subacute thyroiditis."
            },
            {
                "id": "b",
                "text": "Thyrotoxicosis factitia."
            },
            {
                "id": "c",
                "text": "Painless thyroiditis."
            },
            {
                "id": "d",
                "text": "Multinodular goiter."
            },
            {
                "id": "e",
                "text": "An autonomous toxic adenoma."
            }
        ],
        "correctId": "b",
        "explanation": "This is the clinical definition of thyrotoxicosis factitia."
    },
    {
        "id": "q37",
        "question": "37. A.D. has a benign thyroid mass that produces thyroid hormone independent of pituitary and TSH control. He is considered to have:",
        "options": [
            {
                "id": "a",
                "text": "TSH secreting pituitary tumor"
            },
            {
                "id": "b",
                "text": "Graves\u02bc Disease"
            },
            {
                "id": "c",
                "text": "Multinodular goiter"
            },
            {
                "id": "d",
                "text": "Autonomous thyroid nodule"
            },
            {
                "id": "e",
                "text": "Thyrotoxicosis factitia"
            }
        ],
        "correctId": "d",
        "explanation": "An autonomous thyroid nodule (toxic adenoma) is a benign mass that functions independently of TSH control."
    },
    {
        "id": "q38",
        "question": "38. Agranulocytosis is a significant side effect of methimazole. If it occurs, it usually develops suddenly during the first:",
        "options": [
            {
                "id": "a",
                "text": "One month"
            },
            {
                "id": "b",
                "text": "Two months"
            },
            {
                "id": "c",
                "text": "Three months"
            },
            {
                "id": "d",
                "text": "Four months"
            },
            {
                "id": "e",
                "text": "Five months"
            }
        ],
        "correctId": "c",
        "explanation": "Major adverse effects of thionamides, such as agranulocytosis, typically manifest within the first 3 months of therapy."
    },
    {
        "id": "q39",
        "question": "39. A 32-year-old patient who is 9 weeks pregnant has hyperthyroidism and has been on methimazole. What is the suitable advice?",
        "options": [
            {
                "id": "a",
                "text": "remain on methimazole"
            },
            {
                "id": "b",
                "text": "Use of radioactive iodine"
            },
            {
                "id": "c",
                "text": "Switch to propylthiouracil only"
            },
            {
                "id": "d",
                "text": "low dose and methimazole and propylthiouracil"
            },
            {
                "id": "e",
                "text": "propylthiouracil and propranolol"
            }
        ],
        "correctId": "c",
        "explanation": "Because the patient is in her first trimester, she should be switched to PTU to minimize the risk of methimazole-induced birth defects."
    },
    {
        "id": "q40",
        "question": "40. In which situation is Lugol's solution NOT recommended?",
        "options": [
            {
                "id": "a",
                "text": "prepare a patient with Graves' disease for surgery."
            },
            {
                "id": "b",
                "text": "toxic multinodular goiter"
            },
            {
                "id": "c",
                "text": "After RAI"
            },
            {
                "id": "d",
                "text": "decreases size and vascularity of the gland before surgery"
            },
            {
                "id": "e",
                "text": "patient converted biochemically euthyroid in combination with methimazole"
            }
        ],
        "correctId": "b",
        "explanation": "Iodides are contraindicated in toxic multinodular goiter for the reasons previously described regarding hormone synthesis."
    },
    {
        "id": "q41",
        "question": "41. Ahmed, a 59-year-old with exhaustion, cold sensitivity, and cardiac problems, has hypothyroidism. The proper treatment will be:",
        "options": [
            {
                "id": "a",
                "text": "Levothyroxine 25 mcg/day."
            },
            {
                "id": "b",
                "text": "Propranolol 40 mg QID daily."
            },
            {
                "id": "c",
                "text": "Surgical removal of the thyroid gland."
            },
            {
                "id": "d",
                "text": "Levothyroxine 50 mcg daily."
            },
            {
                "id": "e",
                "text": "Propylthiouracil (PTU) 300 mg TID daily."
            }
        ],
        "correctId": "a",
        "explanation": "For patients with known cardiac disease, the initial dose of levothyroxine should be conservative at 25 mcg/day."
    },
    {
        "id": "q42",
        "question": "42. What is the most appropriate treatment plan for a patient in thyroid storm (fever, tachycardia, dehydration, coma)?",
        "options": [
            {
                "id": "a",
                "text": "Use large dose of PTU with esmolol, hydrocortisone and supportive measures."
            },
            {
                "id": "b",
                "text": "Use large dose of Methimazole with esmolol, hydrocortisone and supportive measures."
            },
            {
                "id": "c",
                "text": "Use large dose of PTU with verapamil, hydrocortisone and supportive measures."
            },
            {
                "id": "d",
                "text": "Use large dose of Methimazole with propranolol, hydrocortisone and supportive measures."
            },
            {
                "id": "e",
                "text": "Use large dose of Methimazole with diltiazem, hydrocortisone and supportive measures."
            }
        ],
        "correctId": "a",
        "explanation": "Management of thyroid storm involves suppressing hormone formation (PTU preferred), antiadrenergic therapy (esmolol), and corticosteroids to stabilize the patient."
    }
],
  'adrenal': [
    {
        "id": "q1",
        "question": "1. The most common initial findings in Cushing's syndrome are:",
        "options": [
            {
                "id": "a",
                "text": "Diabetes and hypertension."
            },
            {
                "id": "b",
                "text": "Central obesity and facial rounding."
            },
            {
                "id": "c",
                "text": "Myopathies and muscular weakness."
            },
            {
                "id": "d",
                "text": "Striae along the lower abdomen, that take on a red to purple color."
            },
            {
                "id": "e",
                "text": "Lemon on stick appearance."
            }
        ],
        "correctId": "b",
        "explanation": "According to the sources, central obesity and facial rounding are the most common findings, present in approximately 90% of patients."
    },
    {
        "id": "q2",
        "question": "2. Drugs that inhibits cortisol synthesis include the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Metyrapone"
            },
            {
                "id": "b",
                "text": "Aminoglutethimide"
            },
            {
                "id": "c",
                "text": "Ketoconazole"
            },
            {
                "id": "d",
                "text": "Cyproheptadine"
            },
            {
                "id": "e",
                "text": "Mitotane"
            }
        ],
        "correctId": "d",
        "explanation": "Metyrapone, ketoconazole, and mitotane are listed as steroidogenesis inhibitors that block cortisol synthesis. Cyproheptadine is a neuromodulator that targets ACTH release, not synthesis."
    },
    {
        "id": "q3",
        "question": "3. Clinical manifestations of Addison's disease include the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Weight loss"
            },
            {
                "id": "b",
                "text": "Dehydration"
            },
            {
                "id": "c",
                "text": "Hyponatremia"
            },
            {
                "id": "d",
                "text": "Hypokalemia"
            },
            {
                "id": "e",
                "text": "Hyperpigmentation"
            }
        ],
        "correctId": "d",
        "explanation": "Addison\u2019s disease involves a deficiency in aldosterone, which normally causes the body to retain sodium and excrete potassium. Therefore, its absence leads to hyperkalemia (high potassium) rather than hypokalemia."
    },
    {
        "id": "q4",
        "question": "4. The most common cause of adrenal crisis is:",
        "options": [
            {
                "id": "a",
                "text": "Adrenal surgery."
            },
            {
                "id": "b",
                "text": "Severe Adrenal trauma."
            },
            {
                "id": "c",
                "text": "Acute Pituitary insufficiency."
            },
            {
                "id": "d",
                "text": "Abrupt withdrawal of exogenous glucocorticoids in patients receiving chronic treatment."
            },
            {
                "id": "e",
                "text": "Acute stressful conditions."
            }
        ],
        "correctId": "d",
        "explanation": "The sources explicitly state that HPA axis suppression from the abrupt withdrawal of chronic glucocorticoids is the most frequent cause of an adrenal crisis."
    },
    {
        "id": "q5",
        "question": "5. A.S is 45 years old male presented with central obesity, abdominal striae, hirsutism, and weight gain. Fasting blood sugar was 166 g/dl and blood pressure was 160/110 mmHg. Which medication would you propose to reverse these manifestations?",
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
        "explanation": "Mifepristone is a glucocorticoid-receptor antagonist indicated for reversing the manifestations of endogenous Cushing syndrome in patients with type 2 diabetes or glucose intolerance."
    },
    {
        "id": "q6",
        "question": "6. Treatment of choice for both ACTH-dependent and ACTH-independent Cushing syndrome is:",
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
        "explanation": "Nonpharmacologic surgical resection of the offending tumor(s) is the established treatment of choice for all forms of Cushing syndrome."
    },
    {
        "id": "q7",
        "question": "7. Which Steroidogenesis Inhibitor has antiandrogenic activity beneficial in women but can cause gynecomastia and hypogonadism in men?",
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
        "explanation": "Ketoconazole inhibits cytochrome P-450 enzymes and has antiandrogenic activity, which helps with hirsutism in women but leads to gynecomastia in men."
    },
    {
        "id": "q8",
        "question": "8. The following are major clinical symptoms associated with 90% destruction of adrenal gland cortex, EXCEPT:",
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
        "explanation": "Destruction of the adrenal cortex leads to mineralocorticoid deficiency, resulting in sodium loss and hyponatremia (low sodium), not hypernatremia."
    },
    {
        "id": "q9",
        "question": "9. L.S is 35 years old male presented with muscle weakness, polydipsia, nocturnal polyuria, hypertension, and tetany. Serum potassium is 1.2 mEq/I and Aldosterone level is elevated. What is the first line treatment?",
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
        "explanation": "The symptoms and low potassium indicate primary hyperaldosteronism. Spironolactone, a nonselective aldosterone receptor antagonist, is the medical treatment of choice for bilateral adrenal hyperplasia."
    },
    {
        "id": "q10",
        "question": "10. A 21 years old female has both hyperaldosteronism and menstrual irregularities. The most appropriate treatment for this female is:",
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
        "explanation": "Spironolactone frequently causes menstrual irregularities. Eplerenone is a selective antagonist with low affinity for progesterone receptors, resulting in fewer sex-steroid-dependent side effects."
    },
    {
        "id": "q11",
        "question": "11. Acute adrenal Insufficiency (adrenal crisis) represents a true endocrine emergency. The glucocorticoid of choice for treatment is:",
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
        "explanation": "Parenteral hydrocortisone is the drug of choice because it provides the necessary combined glucocorticoid and mineralocorticoid activity needed in an emergency."
    },
    {
        "id": "q12",
        "question": "12. Regarding Addison disease: Which of the following is an incorrect statement?",
        "options": [
            {
                "id": "a",
                "text": "Addison disease is characterized by destruction of all regions of the adrenal cortex."
            },
            {
                "id": "b",
                "text": "Addison disease is characterized by very low or undetectable serum cortisol and aldosterone levels."
            },
            {
                "id": "c",
                "text": "Addison disease is characterized by increased skin pigmentation especially on the face, oral mucosa, palmar creases and knuckles."
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
        "explanation": "Addison\u2019s disease is actually characterized by postural hypotension (low blood pressure when standing) due to volume depletion."
    },
    {
        "id": "q13",
        "question": "13. Steroidogenic inhibitor that used in preparation for surgery for patients with Cushing's syndrome is:",
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
        "explanation": "Steroidogenesis inhibitors like metyrapone are used preoperatively to lower cortisol levels before surgery."
    },
    {
        "id": "q14",
        "question": "14. Clinical presentation of Cushing syndrome includes the following EXCEPT:",
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
        "explanation": "Cushing syndrome is typically associated with hypertension, not hypotension."
    },
    {
        "id": "q15",
        "question": "15. Regarding Cushing syndrome. Mifepristone is a pharmacological therapy for which all of the following are false EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "It is glucocorticoid-receptor agonist"
            },
            {
                "id": "b",
                "text": "It increases endogenous cortisol and ACTH levels in Cushing patients"
            },
            {
                "id": "c",
                "text": "It is effective in reversing the manifestations of hypocortisolism"
            },
            {
                "id": "d",
                "text": "It can be used for endogenous Cushing syndrome in patients who have type 2 diabetes"
            },
            {
                "id": "e",
                "text": "May result in endometrial hyperplasia and hyperkalemia"
            }
        ],
        "correctId": "d",
        "explanation": "Mifepristone is specifically indicated for patients with endogenous Cushing syndrome who also have type 2 diabetes. It is an antagonist (not agonist) and treats *hyper*cortisolism."
    },
    {
        "id": "q16",
        "question": "16. Regarding the treatment of adrenal insufficiency, the corticosteroid agent of choice is:",
        "options": [
            {
                "id": "a",
                "text": "deoxycorticosterone trimethylacetate"
            },
            {
                "id": "b",
                "text": "fludrocortisone acetate"
            },
            {
                "id": "c",
                "text": "prednisolone"
            },
            {
                "id": "d",
                "text": "prednisone"
            },
            {
                "id": "e",
                "text": "hydrocortisone"
            }
        ],
        "correctId": "e",
        "explanation": "Hydrocortisone (and cortisone acetate) are the preferred replacement agents as they most closely mimic the body's normal diurnal cortisol rhythm."
    },
    {
        "id": "q17",
        "question": "17. Regarding Addison disease. All of the following are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Skin hyperpigmentation is a characteristic feature"
            },
            {
                "id": "b",
                "text": "The short cosyntropin stimulation test is used to confirm the diagnosis"
            },
            {
                "id": "c",
                "text": "Hydrocortisone + fludrocortisone acetate is the treatment of choice"
            },
            {
                "id": "d",
                "text": "Hyperkalemia + hyponatremia are common"
            },
            {
                "id": "e",
                "text": "Laparoscopic adrenalectomy is the non-pharmacological treatment of choice"
            }
        ],
        "correctId": "e",
        "explanation": "Laparoscopic adrenalectomy is used for tumors; it is not a treatment for Addison's disease, where the gland is already destroyed and requires hormone replacement."
    },
    {
        "id": "q18",
        "question": "18. Spironolactone has several adverse reactions. All the followings are adverse reactions of spironolactone except:",
        "options": [
            {
                "id": "a",
                "text": "Stomach discomfort"
            },
            {
                "id": "b",
                "text": "Hypernatremia"
            },
            {
                "id": "c",
                "text": "Impotence"
            },
            {
                "id": "d",
                "text": "Menstrual irregularities"
            },
            {
                "id": "e",
                "text": "Hyperkalemia"
            }
        ],
        "correctId": "b",
        "explanation": "Spironolactone causes hyperkalemia, but because it blocks sodium retention, it usually leads to hyponatremia rather than hypernatremia."
    },
    {
        "id": "q19",
        "question": "19. Hyperpigmentation of the skin is a characteristic feature of:",
        "options": [
            {
                "id": "a",
                "text": "primary acute adrenal insufficiency"
            },
            {
                "id": "b",
                "text": "primary chronic adrenal insufficiency"
            },
            {
                "id": "c",
                "text": "Cushing syndrome"
            },
            {
                "id": "d",
                "text": "Conn's syndrome"
            },
            {
                "id": "e",
                "text": "Hyperthyroidism"
            }
        ],
        "correctId": "b",
        "explanation": "Increased skin pigmentation is a hallmark sign of primary chronic adrenal insufficiency (Addison\u2019s disease) due to high compensatory levels of ACTH."
    },
    {
        "id": "q20",
        "question": "20. In the Cushing disease, the lab data that may confirm its diagnosis are:",
        "options": [
            {
                "id": "a",
                "text": "Probably normal or High ACTH"
            },
            {
                "id": "b",
                "text": "Low or normal ACTH"
            },
            {
                "id": "c",
                "text": "Low serum cortisol"
            },
            {
                "id": "d",
                "text": "Serum cortisol normal"
            },
            {
                "id": "e",
                "text": "CRH test no response"
            }
        ],
        "correctId": "a",
        "explanation": "In Cushing disease (specifically pituitary-dependent), ACTH levels are typically normal or high because the pituitary overproduces it."
    },
    {
        "id": "q21",
        "question": "21. A 45 years old man suffering from Cushing syndrome due to unilateral adrenal adenoma. Treatment of choice for this patient is:",
        "options": [
            {
                "id": "a",
                "text": "Transsphenoidal resection of adrenal adenoma"
            },
            {
                "id": "b",
                "text": "Radiotherapy of adrenal adenoma"
            },
            {
                "id": "c",
                "text": "Laparoscopic adrenalectomy"
            },
            {
                "id": "d",
                "text": "Chronic drug therapy"
            },
            {
                "id": "e",
                "text": "Open surgery of adrenals"
            }
        ],
        "correctId": "c",
        "explanation": "Laparoscopic adrenalectomy is the preferred surgical strategy for unilateral adrenal adenomas."
    },
    {
        "id": "q22",
        "question": "22. Hyperaldosteronism causes a variety of clinical manifestations. Adult manifestations of hyperaldosteronism include the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Tetany"
            },
            {
                "id": "b",
                "text": "Polydipsia"
            },
            {
                "id": "c",
                "text": "Edema"
            },
            {
                "id": "d",
                "text": "Hypokalemia"
            },
            {
                "id": "e",
                "text": "Hypertension"
            }
        ],
        "correctId": "c",
        "explanation": "In primary hyperaldosteronism, edema is usually absent despite sodium retention."
    },
    {
        "id": "q23",
        "question": "23. Treatment of adrenal crisis should include a suitable IV fluid. The initial first line IV fluid for patients with adrenal crisis is:",
        "options": [
            {
                "id": "a",
                "text": "Normal saline"
            },
            {
                "id": "b",
                "text": "Dextrose 5% in normal saline"
            },
            {
                "id": "c",
                "text": "Lactated ringer"
            },
            {
                "id": "d",
                "text": "Mannitol 20%"
            },
            {
                "id": "e",
                "text": "Dextrose 25% in water"
            }
        ],
        "correctId": "b",
        "explanation": "Fluid replacement with D5NS is recommended to support blood pressure and address potential hypoglycemia."
    },
    {
        "id": "q24",
        "question": "24. ACTH-independent Cushing syndrome is usually caused by:",
        "options": [
            {
                "id": "a",
                "text": "Adrenal adenomas & carcinomas."
            },
            {
                "id": "b",
                "text": "Thyroid ectopic ACTH secretion"
            },
            {
                "id": "c",
                "text": "Pituitary adenoma"
            },
            {
                "id": "d",
                "text": "Endocrine ectopic ACTH syndrome"
            },
            {
                "id": "e",
                "text": "Non-Endocrine ectopic ACTH syndrome"
            }
        ],
        "correctId": "a",
        "explanation": "ACTH-independent disease results from excessive production within the adrenal gland itself through tumors like adenomas or carcinomas."
    },
    {
        "id": "q25",
        "question": "25. In hyperaldosteronism, if ARR is positive, confirmatory tests to exclude false positives are the following, Except:",
        "options": [
            {
                "id": "a",
                "text": "oral sodium-loading test"
            },
            {
                "id": "b",
                "text": "saline infusion test"
            },
            {
                "id": "c",
                "text": "Glucose tolerance test"
            },
            {
                "id": "d",
                "text": "fludrocortisone suppression test (FST)"
            },
            {
                "id": "e",
                "text": "captopril challenge test"
            }
        ],
        "correctId": "c",
        "explanation": "Confirmatory tests for PA include oral sodium loading, saline infusion, FST, and the captopril challenge; the glucose tolerance test is not used for this."
    },
    {
        "id": "q26",
        "question": "26. Regarding adrenal gland disorders, Conn syndrome is:",
        "options": [
            {
                "id": "a",
                "text": "an ACTH-producing adenoma"
            },
            {
                "id": "b",
                "text": "a cortisol-producing adenoma"
            },
            {
                "id": "c",
                "text": "an aldosterone-producing adenoma"
            },
            {
                "id": "d",
                "text": "a prolactin-producing adenoma"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "c",
        "explanation": "Conn syndrome is the medical term for a primary aldosterone-producing adrenal adenoma."
    },
    {
        "id": "q27",
        "question": "27. Steroidogenesis inhibitors indicated for treatment of Cushing Syndrome. Which of the followings is NOT correct regarding Etomidate?",
        "options": [
            {
                "id": "a",
                "text": "Administered parenterally."
            },
            {
                "id": "b",
                "text": "Used in emergency to treat acute hypercortisolism"
            },
            {
                "id": "c",
                "text": "Serum cortisol monitoring recommended to follow hypercortisolism"
            },
            {
                "id": "d",
                "text": "Administered to patient with acute hypercortisolism going to surgery"
            },
            {
                "id": "e",
                "text": "It causes hypertension"
            }
        ],
        "correctId": "e",
        "explanation": "Etomidate is an anesthetic used in sub-hypnotic doses to rapidly lower cortisol in emergencies; it is not associated with causing hypertension in this context."
    },
    {
        "id": "q28",
        "question": "28. Addison Disease is associated with several biomedical disturbances. All the followings are associated with Addison Disease EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Low level of ACTH"
            },
            {
                "id": "b",
                "text": "Low level of cortisol"
            },
            {
                "id": "c",
                "text": "Low level of aldosterone"
            },
            {
                "id": "d",
                "text": "High level of ACTH"
            },
            {
                "id": "e",
                "text": "High level of CRH"
            }
        ],
        "correctId": "a",
        "explanation": "In primary adrenal insufficiency, the loss of cortisol negative feedback results in compensatory high levels of ACTH."
    },
    {
        "id": "q29",
        "question": "29. Cushing Syndrome has several clinical presentations. One of the followings is not a clinical presentation of Cushing Syndrome:",
        "options": [
            {
                "id": "a",
                "text": "Glucose intolerance"
            },
            {
                "id": "b",
                "text": "Psychiatric changes"
            },
            {
                "id": "c",
                "text": "Amenorrhea"
            },
            {
                "id": "d",
                "text": "Bilirubin elevation"
            },
            {
                "id": "e",
                "text": "Muscular weakness"
            }
        ],
        "correctId": "d",
        "explanation": "While glucose intolerance and psychiatric changes are common, bilirubin elevation is not a feature of Cushing syndrome."
    },
    {
        "id": "q30",
        "question": "30. Lifelong glucocorticoid replacement therapy: Hydrocortisone is often prescribed because it has the following characteristic EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "It is closely resembles endogenous cortisol"
            },
            {
                "id": "b",
                "text": "It has relatively high mineralocorticoid activity"
            },
            {
                "id": "c",
                "text": "It has short half-life"
            },
            {
                "id": "d",
                "text": "It allows the design of regimens that simulates the normal circadian cycle"
            },
            {
                "id": "e",
                "text": "It has relatively low mineralocorticoid activity"
            }
        ],
        "correctId": "e",
        "explanation": "Hydrocortisone is preferred because it has combined glucocorticoid and significant mineralocorticoid activity."
    },
    {
        "id": "q31",
        "question": "31. What is the type of hyperaldosteronism mostly caused by an extra-adrenal factor overstimulating the zona glomerulosa?",
        "options": [
            {
                "id": "a",
                "text": "Primary hyperaldosteronism"
            },
            {
                "id": "b",
                "text": "Conn syndrome"
            },
            {
                "id": "c",
                "text": "Adrenal hyperplasia"
            },
            {
                "id": "d",
                "text": "Secondary hyperaldosteronism"
            },
            {
                "id": "e",
                "text": "Tertiary hyperaldosteronism"
            }
        ],
        "correctId": "d",
        "explanation": "Secondary hyperaldosteronism results from excessive stimulation by extra-adrenal factors such as the renin-angiotensin system."
    },
    {
        "id": "q32",
        "question": "32. Persistent hyperkalemia is one complication of adrenal crisis. The preferred treatment for persistent hyperkalemia in adrenal crisis is:",
        "options": [
            {
                "id": "a",
                "text": "Spironolactone"
            },
            {
                "id": "b",
                "text": "Furosemide"
            },
            {
                "id": "c",
                "text": "Fludrocortisone"
            },
            {
                "id": "d",
                "text": "Amlodipine"
            },
            {
                "id": "e",
                "text": "Chlortalidone"
            }
        ],
        "correctId": "c",
        "explanation": "If hyperkalemia persists after initial hydrocortisone therapy, fludrocortisone acetate (a mineralocorticoid) should be added to promote potassium excretion."
    },
    {
        "id": "q33",
        "question": "33. Mr. AN presented with lethargy, nausea, and muscle weakness. Blood tests showed: high ACTH, low cortisol, high renin, and low aldosterone. Which clinical condition is most likely?",
        "options": [
            {
                "id": "a",
                "text": "Cushing's Disease"
            },
            {
                "id": "b",
                "text": "Ectopic corticotropin-producing tumor"
            },
            {
                "id": "c",
                "text": "Secondary renal insufficiency"
            },
            {
                "id": "d",
                "text": "Congenital adrenal hyperplasia"
            },
            {
                "id": "e",
                "text": "Addison's Disease"
            }
        ],
        "correctId": "e",
        "explanation": "The combination of low cortisol/aldosterone with high ACTH/renin indicates primary adrenal failure, which is Addison's disease."
    },
    {
        "id": "q34",
        "question": "34. Mitotane is a cytotoxic drug. All the followings are true about Mitotane EXCEPT:",
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
                "text": "It is considered as first line therapy for Cushing Syndrome"
            }
        ],
        "correctId": "e",
        "explanation": "Surgery is the first-line therapy for Cushing syndrome; mitotane is typically adjunctive or used for adrenal carcinoma."
    },
    {
        "id": "q35",
        "question": "35. The most common cause of secondary adrenal insufficiency is:",
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
                "text": "long term administration of exogenous corticosteroids"
            }
        ],
        "correctId": "e",
        "explanation": "Secondary adrenal insufficiency most frequently results from the use of exogenous corticosteroids, which suppresses the body's own production via the HPA axis."
    },
    {
        "id": "q36",
        "question": "36. Lubna is a 20 years old female with hyperaldosteronism on treatment. She developed irregular menses. Which drug potentially caused this?",
        "options": [
            {
                "id": "a",
                "text": "Spironolactone"
            },
            {
                "id": "b",
                "text": "Eplerenone"
            },
            {
                "id": "c",
                "text": "Amiloride"
            },
            {
                "id": "d",
                "text": "Chlorthalidone"
            },
            {
                "id": "e",
                "text": "Triamterene"
            }
        ],
        "correctId": "a",
        "explanation": "Spironolactone is nonselective and binds to progesterone receptors, commonly leading to menstrual irregularities."
    },
    {
        "id": "q37",
        "question": "37. A.A is 23 years old male with primary adrenal insufficiency, is stable on 15 mg hydrocortisone 3 times daily. Now he has a fever of 39 C. What is your action regarding his hydrocortisone dose?",
        "options": [
            {
                "id": "a",
                "text": "Decrease to 10 mg *3"
            },
            {
                "id": "b",
                "text": "Remain as 15mg*3"
            },
            {
                "id": "c",
                "text": "Increase to 30mg*3"
            },
            {
                "id": "d",
                "text": "Increase to 40 mg 3"
            },
            {
                "id": "e",
                "text": "Decrease to 5 mg *3"
            }
        ],
        "correctId": "c",
        "explanation": "During times of severe physical stress like febrile illness, patients are instructed to double their daily dose until they recover."
    },
    {
        "id": "q38",
        "question": "38. A 27-year-old woman with Cushing syndrome symptoms (hirsutism, bruising, poor wound healing) is confirmed by lab tests. Which drug is most appropriate for her?",
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
        "explanation": "Ketoconazole is often beneficial in women with Cushing syndrome because its antiandrogenic activity helps manage symptoms like hirsutism."
    },
    {
        "id": "q39",
        "question": "39. Pasireotide is approved for use in Cushing disease primarily because:",
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
        "explanation": "Pasireotide is a somatostatin analog approved for adults with Cushing disease for whom pituitary surgery is not an option or has not been curative."
    },
    {
        "id": "q40",
        "question": "40. A 35-years old male patient with Addison symptoms (weight loss, salt craving, dizziness) on prednisolone and fludrocortisone was in a car accident with massive blood loss. What is the recommended management plan?",
        "options": [
            {
                "id": "a",
                "text": "Double his oral daily doses."
            },
            {
                "id": "b",
                "text": "Double his oral Prednisolone dose and switch to Deoxycorticosterone."
            },
            {
                "id": "c",
                "text": "Switch to oral Hydrocortisone 25 mg."
            },
            {
                "id": "d",
                "text": "Switch to Hydrocortisone 100 mg IV by rapid infusion, followed by 200 mg over 24 hours as a continuous infusion."
            },
            {
                "id": "e",
                "text": "Switch to oral Hydrocortisone 50 mg every 6-8 hours."
            }
        ],
        "correctId": "d",
        "explanation": "A car accident represents a severe acute adrenal crisis, requiring aggressive parenteral hydrocortisone and fluid therapy to maintain stability."
    },
    {
        "id": "q41",
        "question": "41. A 50-year-old man with advanced tuberculosis developed signs of severe acute adrenal insufficiency. He should be treated immediately with a combination of:",
        "options": [
            {
                "id": "a",
                "text": "Aldosterone and fludrocortisone"
            },
            {
                "id": "b",
                "text": "Triamcinolone and dexamethasone"
            },
            {
                "id": "c",
                "text": "Cortisol and fludrocortisone"
            },
            {
                "id": "d",
                "text": "Dexamethasone and metyrapone"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "c",
        "explanation": "Acute adrenal insufficiency in a TB patient requires both glucocorticoid (cortisol/hydrocortisone) and mineralocorticoid (fludrocortisone) replacement."
    },
    {
        "id": "q42",
        "question": "42. The main advantage of etomidate over other steroidogenic inhibitors is:",
        "options": [
            {
                "id": "a",
                "text": "Long-term control of cortisol levels"
            },
            {
                "id": "b",
                "text": "Reversible androgenic side effects"
            },
            {
                "id": "c",
                "text": "Ease of administration (oral)"
            },
            {
                "id": "d",
                "text": "Effectiveness in acute hypercortisolemia"
            },
            {
                "id": "e",
                "text": "Lower risk of neurological side effects"
            }
        ],
        "correctId": "d",
        "explanation": "Etomidate's primary advantage is its ability to rapidly lower cortisol levels in emergency situations of acute hypercortisolism."
    }
],

  'depression': [
    {
        "id": "q1",
        "question": "1. An antidepressant drug that can cause anticholinergic side effects (e.g., dry mouth, blurred vision, constipation) and sedation is:",
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
        "explanation": "Tricyclic antidepressants (TCAs) like amitriptyline are known for their action on multiple receptors, which leads to significant anticholinergic effects and sedation."
    },
    {
        "id": "q2",
        "question": "2. Electroconvulsive therapy (ECT) may be considered an option for depressed patients in all the following cases EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "A rapid response is needed"
            },
            {
                "id": "b",
                "text": "Risks of other treatments outweigh potential benefits"
            },
            {
                "id": "c",
                "text": "There is a history of a good response to drugs"
            },
            {
                "id": "d",
                "text": "The patient prefers ECT"
            },
            {
                "id": "e",
                "text": "There is a history of a poor response to drugs"
            }
        ],
        "correctId": "c",
        "explanation": "ECT is typically reserved for cases where medication response is poor, a rapid effect is life-saving, or other treatment risks are too high; a good response history to drugs generally favors continuing pharmacotherapy."
    },
    {
        "id": "q3",
        "question": "3. A breastfeeding woman was diagnosed with depression. Which one of the following antidepressant drugs is the preferred one in this case?",
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
        "explanation": "Sertraline is often preferred for breastfeeding mothers due to its documented safety profile and lower excretion into breast milk."
    },
    {
        "id": "q4",
        "question": "4. A young woman suffered from depression. She has a history of anorexia nervosa. What is the antidepressant that should not be used for this patient?",
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
        "explanation": "Bupropion is specifically contraindicated in patients with a history of bulimia or anorexia nervosa due to a significantly increased risk of seizures."
    },
    {
        "id": "q5",
        "question": "5. A patient with severe depression and a history of arrhythmia and uncontrolled hypertension was treated with fluoxetine. Despite good adherence, no response was detected. What is the best action here?",
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
        "explanation": "For severe depression or partial responders, adding psychotherapy is recommended as it can have an additive effect when combined with medication."
    },
    {
        "id": "q6",
        "question": "6. A pretreatment ECG is recommended before starting which one of the following antidepressant drugs?",
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
        "explanation": "TCAs like imipramine can cause cardiac conduction delays and arrhythmias, necessitating a baseline ECG, especially in children and adults over 40."
    },
    {
        "id": "q7",
        "question": "7. In regard to the clinical presentation of depression, which one of the following is a physical symptom?",
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
        "explanation": "Physical symptoms of depression include weight changes, fatigue, and pain, particularly headaches; symptoms like crying or hopelessness are categorized as emotional."
    },
    {
        "id": "q8",
        "question": "8. Which of the following is the Diagnostic Criteria for Major Depressive Episode?",
        "options": [
            {
                "id": "a",
                "text": "At least five symptoms must be consistently present (nearly every day) over a 2-week period"
            },
            {
                "id": "b",
                "text": "At least two symptoms must be consistently present over a 2-week period"
            },
            {
                "id": "c",
                "text": "At least five symptoms must be consistently present over a 6-week period"
            }
        ],
        "correctId": "a",
        "explanation": "According to the DSM-5, a diagnosis requires five or more symptoms (including depressed mood or anhedonia) to be present for at least two weeks."
    },
    {
        "id": "q9",
        "question": "9. The most common adverse effect profile of the SSRIs includes:",
        "options": [
            {
                "id": "a",
                "text": "Sedation"
            },
            {
                "id": "b",
                "text": "Sexual dysfunction"
            },
            {
                "id": "c",
                "text": "Weight loss"
            },
            {
                "id": "d",
                "text": "Delusion"
            },
            {
                "id": "e",
                "text": "Headache"
            }
        ],
        "correctId": "b",
        "explanation": "While SSRIs have improved tolerability, sexual dysfunction remains one of the most common and persistent side effects of this class."
    },
    {
        "id": "q10",
        "question": "10. According to the depression monoamine hypothesis, there is a decrease in the brain level of:",
        "options": [
            {
                "id": "a",
                "text": "Serotonin, acetylcholine, and dopamine"
            },
            {
                "id": "b",
                "text": "Serotonin, norepinephrine, and dopamine"
            },
            {
                "id": "c",
                "text": "Serotonin, norepinephrine, and epinephrine"
            }
        ],
        "correctId": "b",
        "explanation": "This hypothesis suggests that depression is caused by a deficiency of the three primary monoamine neurotransmitters: serotonin, norepinephrine, and dopamine."
    },
    {
        "id": "q11",
        "question": "11. Which one of the following drugs is not implicated in causing depressive symptoms?",
        "options": [
            {
                "id": "a",
                "text": "Bisoprolol"
            },
            {
                "id": "b",
                "text": "Isotretinoin"
            },
            {
                "id": "c",
                "text": "Oral contraceptive"
            },
            {
                "id": "d",
                "text": "Interferon-\u03b21a"
            },
            {
                "id": "e",
                "text": "Metformin"
            }
        ],
        "correctId": "e",
        "explanation": "Drugs like beta-blockers (bisoprolol), isotretinoin, and oral contraceptives are known to be associated with depressive symptoms, whereas metformin is not."
    },
    {
        "id": "q12",
        "question": "12. A 16-year-old man with depression. Which antidepressant drug is FDA approved for treatment of this patient?",
        "options": [
            {
                "id": "a",
                "text": "Escitalopram"
            },
            {
                "id": "b",
                "text": "Desipramine"
            },
            {
                "id": "c",
                "text": "Sertraline"
            },
            {
                "id": "d",
                "text": "Citalopram"
            },
            {
                "id": "e",
                "text": "Fluvoxamine"
            }
        ],
        "correctId": "a",
        "explanation": "Fluoxetine and escitalopram are the only antidepressants specifically FDA-approved for use in children and adolescents under 18."
    },
    {
        "id": "q13",
        "question": "13. A patient with depression was only partially responding to treatment by imipramine. All of the following can be used to augment antidepressant effect EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Lithium"
            },
            {
                "id": "b",
                "text": "Haloperidol"
            },
            {
                "id": "c",
                "text": "Aripiprazole"
            },
            {
                "id": "d",
                "text": "Quetiapine"
            },
            {
                "id": "e",
                "text": "Brexpiprazole"
            }
        ],
        "correctId": "b",
        "explanation": "Lithium and second-generation antipsychotics like aripiprazole and quetiapine are used for augmentation; haloperidol is not a standard augmentation agent for depression."
    },
    {
        "id": "q14",
        "question": "14. Which one of the following drugs, when given to a patient, requires regular monitoring of blood pressure?",
        "options": [
            {
                "id": "a",
                "text": "Fluoxetine"
            },
            {
                "id": "b",
                "text": "Maprotiline"
            },
            {
                "id": "c",
                "text": "Venlafaxine"
            },
            {
                "id": "d",
                "text": "Phenelzine"
            },
            {
                "id": "e",
                "text": "Vilazodone"
            }
        ],
        "correctId": "c",
        "explanation": "Venlafaxine (an SNRI) can cause dose-related increases in diastolic blood pressure, necessitating regular monitoring."
    },
    {
        "id": "q15",
        "question": "15. All the following drugs causing significant sexual dysfunction EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Citalopram"
            },
            {
                "id": "b",
                "text": "Mirtazapine"
            },
            {
                "id": "c",
                "text": "Duloxetine"
            },
            {
                "id": "d",
                "text": "Sertraline"
            },
            {
                "id": "e",
                "text": "Imipramine"
            }
        ],
        "correctId": "b",
        "explanation": "Mirtazapine is often chosen for patients who experience sexual dysfunction on other antidepressants because it has a lower risk for this side effect."
    },
    {
        "id": "q16",
        "question": "16. A 5-week break after fluoxetine discontinuation is critical before starting:",
        "options": [
            {
                "id": "a",
                "text": "MAOIs"
            },
            {
                "id": "b",
                "text": "BZDs"
            },
            {
                "id": "c",
                "text": "Ketamine"
            },
            {
                "id": "d",
                "text": "Citalopram"
            }
        ],
        "correctId": "a",
        "explanation": "Due to the long half-life of fluoxetine and its active metabolite, a 5-week washout is required to avoid the risk of fatal serotonin syndrome when starting an MAOI."
    },
    {
        "id": "q17",
        "question": "17. What is the major and specific problem that can occur in the first days of starting treatment with antidepressants in young adults?",
        "options": [
            {
                "id": "a",
                "text": "Withdrawal symptoms"
            },
            {
                "id": "b",
                "text": "Increase suicide thinking"
            },
            {
                "id": "c",
                "text": "Delayed response"
            }
        ],
        "correctId": "b",
        "explanation": "All antidepressants carry a black box warning for increased risk of suicidal thinking and behavior in children and young adults (under 25) during early treatment."
    },
    {
        "id": "q18",
        "question": "18. Which of the following drugs should be avoided in the case of a depressed patient with active liver disease?",
        "options": [
            {
                "id": "a",
                "text": "Trazodone"
            },
            {
                "id": "b",
                "text": "Nefazodone"
            },
            {
                "id": "c",
                "text": "Fluoxetine"
            },
            {
                "id": "d",
                "text": "Levomilnacipran"
            },
            {
                "id": "e",
                "text": "Citalopram"
            }
        ],
        "correctId": "b",
        "explanation": "Nefazodone carries a black box warning for life-threatening liver failure and should not be initiated in those with active liver disease."
    },
    {
        "id": "q19",
        "question": "19. A 35-year-old man after 8 weeks of sertraline therapy has symptoms of sexual dysfunction and insomnia. What would you recommend next?",
        "options": [
            {
                "id": "a",
                "text": "Citalopram"
            },
            {
                "id": "b",
                "text": "Fluoxetine"
            },
            {
                "id": "c",
                "text": "Mirtazapine"
            },
            {
                "id": "d",
                "text": "Pregabalin"
            },
            {
                "id": "e",
                "text": "Venlafaxine"
            }
        ],
        "correctId": "c",
        "explanation": "Mirtazapine is an effective alternative as it causes less sexual dysfunction and has sedative effects that can help with insomnia."
    },
    {
        "id": "q20",
        "question": "20. One of the following is not true in relation to the use of MAOIs:",
        "options": [
            {
                "id": "a",
                "text": "Selegiline inhibits brain MAO-A and MAO-B"
            },
            {
                "id": "b",
                "text": "Phenelzine adverse effect is postural hypotension"
            },
            {
                "id": "c",
                "text": "Tranylcypromine is often sedating"
            },
            {
                "id": "d",
                "text": "Phenelzine associated with hepatic damage"
            }
        ],
        "correctId": "c",
        "explanation": "Tranylcypromine is generally considered a more activating MAOI and is not typically sedating."
    },
    {
        "id": "q21",
        "question": "21. Which one of the following drugs can be used safely in pregnant women or breastfeeding mothers?",
        "options": [
            {
                "id": "a",
                "text": "Duloxetine"
            },
            {
                "id": "b",
                "text": "Sertraline"
            },
            {
                "id": "c",
                "text": "Fluoxetine"
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
        "correctId": "b",
        "explanation": "Sertraline is highly recommended in these populations due to its established safety data and minimal exposure to the infant."
    },
    {
        "id": "q22",
        "question": "22. Which one of the following medications does not cause a fatal hypertensive crisis if taken concurrently with MAOIs?",
        "options": [
            {
                "id": "a",
                "text": "Dextromethorphan"
            },
            {
                "id": "b",
                "text": "Aspirin"
            },
            {
                "id": "c",
                "text": "Carbamazepine"
            },
            {
                "id": "d",
                "text": "Amphetamine"
            },
            {
                "id": "e",
                "text": "Pseudoephedrine"
            }
        ],
        "correctId": "b",
        "explanation": "Aspirin does not interact with MAOIs to cause a hypertensive crisis, unlike sympathomimetics (amphetamines, decongestants) or certain other CNS drugs."
    },
    {
        "id": "q23",
        "question": "23. R.S. is 68 years old with a history of polypharmacy and depression. He recently developed cognitive decline. What treatment should you start?",
        "options": [
            {
                "id": "a",
                "text": "Add Omega 3 capsules"
            },
            {
                "id": "b",
                "text": "Add Donepezil"
            },
            {
                "id": "c",
                "text": "Switch antidepressant with Nefazodone"
            },
            {
                "id": "d",
                "text": "Reduce antidepressant dose"
            },
            {
                "id": "e",
                "text": "Switch antidepressant with Vortioxetine"
            }
        ],
        "correctId": "e",
        "explanation": "Vortioxetine is noted for being particularly helpful for depressed patients who also suffer from cognitive difficulties."
    },
    {
        "id": "q24",
        "question": "24. Which of the following clinical presentations of depression is more common in pediatric patients?",
        "options": [
            {
                "id": "a",
                "text": "Loss of pleasure"
            },
            {
                "id": "b",
                "text": "Loss of interest"
            },
            {
                "id": "c",
                "text": "Depressed mood"
            },
            {
                "id": "d",
                "text": "Irritability"
            },
            {
                "id": "e",
                "text": "A and B"
            }
        ],
        "correctId": "d",
        "explanation": "In children and adolescents, a Major Depressive Episode often presents as an irritable mood rather than just sadness or depressed mood."
    }
],
  'anexity': [
    {
        "id": "q1",
        "question": "1. The most frequently prescribed drugs for the treatment of acute anxiety are:",
        "options": [
            {
                "id": "a",
                "text": "Benzodiazepines"
            },
            {
                "id": "b",
                "text": "Tricyclic antidepressants"
            },
            {
                "id": "c",
                "text": "Antiepileptic"
            },
            {
                "id": "d",
                "text": "Selective serotonin reuptake inhibitors"
            },
            {
                "id": "e",
                "text": "None"
            }
        ],
        "correctId": "a",
        "explanation": "Benzodiazepines are recognized as the most effective and frequently prescribed treatment for acute anxiety symptoms."
    },
    {
        "id": "q2",
        "question": "2. A 23-year-old otherwise healthy woman with GAD has no past history of drug or alcohol abuse. She is started on Lorazepam 0.5 mg three times daily. Which of the following side effects will you warn her about?",
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
        "explanation": "Common adverse effects of benzodiazepines like lorazepam include CNS depression (sedation), psychomotor impairment (slowed reaction time), anterograde amnesia, and the emergence of withdrawal symptoms if stopped abruptly."
    },
    {
        "id": "q3",
        "question": "3. Regarding anxiety disorders, the drug of choice for the management of generalized anxiety disorder is:",
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
        "explanation": "While several SSRIs and SNRIs are first-line, the specific source material identifies Citalopram as a primary choice for GAD management."
    },
    {
        "id": "q4",
        "question": "4. Common medical illnesses associated with symptoms of anxiety are listed below, EXCEPT:",
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
        "explanation": "While depression is frequently comorbid with anxiety, it is classified as a mental illness rather than a \"medical illness\" like the other physiological conditions listed."
    },
    {
        "id": "q5",
        "question": "5. A patient presented with generalized anxiety disorder, all these medications can be used in the treatment of anxiety EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Pregabalin"
            },
            {
                "id": "b",
                "text": "Corticosteroids"
            },
            {
                "id": "c",
                "text": "Buspirone"
            },
            {
                "id": "d",
                "text": "Hydroxyzine"
            },
            {
                "id": "e",
                "text": "Antidepressants"
            }
        ],
        "correctId": "b",
        "explanation": "Corticosteroids are actually listed as a class of medications that can *cause* or develop anxiety symptoms, rather than treat them."
    },
    {
        "id": "q6",
        "question": "6. Regarding general anxiety disorders, which symptoms of GAD are benzodiazepines more effective for?",
        "options": [
            {
                "id": "a",
                "text": "Psychic symptoms"
            },
            {
                "id": "b",
                "text": "Emotional symptoms"
            },
            {
                "id": "c",
                "text": "Somatic and autonomic symptoms"
            },
            {
                "id": "d",
                "text": "Behavioral symptoms"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "c",
        "explanation": "Benzodiazepines are more effective at treating the physical (somatic and autonomic) symptoms of GAD, whereas antidepressants are better for psychic symptoms like worry."
    },
    {
        "id": "q7",
        "question": "7. Regarding general anxiety disorders, what is the recommended approach for benzodiazepine dosing in older patients?",
        "options": [
            {
                "id": "a",
                "text": "Use high doses of short-elimination half-life agents"
            },
            {
                "id": "b",
                "text": "Use high doses of long half-life agents"
            },
            {
                "id": "c",
                "text": "Use low doses of short-elimination half-life agents"
            },
            {
                "id": "d",
                "text": "Use low doses of long half-life agents"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "c",
        "explanation": "Older patients are more sensitive to these drugs; therefore, the use of low doses of short-elimination half-life agents is recommended to prevent accumulation and falls."
    },
    {
        "id": "q8",
        "question": "8. B.C is a 33-year-old female presented to the emergency department with acute symptoms of excessive anxiety and irritability. What is the best treatment option for this case?",
        "options": [
            {
                "id": "a",
                "text": "Amitriptyline"
            },
            {
                "id": "b",
                "text": "Diazepam"
            },
            {
                "id": "c",
                "text": "Sertraline"
            },
            {
                "id": "d",
                "text": "Duloxetine"
            },
            {
                "id": "e",
                "text": "Imipramine"
            }
        ],
        "correctId": "b",
        "explanation": "For the treatment of acute, excessive anxiety in an emergency setting, a benzodiazepine like Diazepam is the most frequently used option for rapid relief."
    },
    {
        "id": "q9",
        "question": "9. All the following drugs are associated with the development of GAD except:",
        "options": [
            {
                "id": "a",
                "text": "Venlafaxine"
            },
            {
                "id": "b",
                "text": "Carbamazepine"
            },
            {
                "id": "c",
                "text": "Propranolol"
            },
            {
                "id": "d",
                "text": "Indomethacin"
            },
            {
                "id": "e",
                "text": "INH"
            }
        ],
        "correctId": "c",
        "explanation": "Propranolol is a beta-blocker often used to treat physical symptoms of anxiety; it is not typically associated with the development of GAD symptoms like the other listed agents."
    },
    {
        "id": "q10",
        "question": "10. Regarding GAD, which of the following medications is/are appropriate for the control of a 46-year-old female with GAD?",
        "options": [
            {
                "id": "a",
                "text": "Duloxetine"
            },
            {
                "id": "b",
                "text": "Venlafaxine extended-release"
            },
            {
                "id": "c",
                "text": "Escitalopram"
            },
            {
                "id": "d",
                "text": "Paroxetine"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "e",
        "explanation": "All the listed medications (Duloxetine, Venlafaxine XR, Escitalopram, and Paroxetine) are considered first-line pharmacological treatments for GAD."
    },
    {
        "id": "q11",
        "question": "11. Regarding the use of Benzodiazepines in GAD, all the following statements are true, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Diazepam and clorazepate have rapid antianxiety effects but a shorter duration than predicted by half-life."
            },
            {
                "id": "b",
                "text": "Lorazepam and oxazepam are recommended for immediate relief of anxiety."
            },
            {
                "id": "c",
                "text": "IM diazepam and chlordiazepoxide should be avoided due to variable absorption."
            },
            {
                "id": "d",
                "text": "Ketoconazole can increase blood levels of alprazolam."
            },
            {
                "id": "e",
                "text": "Ritonavir can increase blood levels of diazepam."
            }
        ],
        "correctId": "b",
        "explanation": "Lorazepam and oxazepam are less lipophilic and have a slower onset; therefore, they are *not* recommended when immediate relief of acute anxiety is required."
    },
    {
        "id": "q12",
        "question": "12. Regarding diagnosis of GAD, the diagnosis requires excessive anxiety and worry most days for at least:",
        "options": [
            {
                "id": "a",
                "text": "3 months"
            },
            {
                "id": "b",
                "text": "6 months"
            },
            {
                "id": "c",
                "text": "1 month"
            },
            {
                "id": "d",
                "text": "2 months"
            },
            {
                "id": "e",
                "text": "8 weeks"
            }
        ],
        "correctId": "b",
        "explanation": "Clinical diagnostic criteria specify that excessive anxiety and worry must be present for at least 6 months to diagnose GAD."
    },
    {
        "id": "q13",
        "question": "13. Regarding first-line treatment of GAD, the following are first-line drugs EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Armodafinil"
            },
            {
                "id": "b",
                "text": "Duloxetine"
            },
            {
                "id": "c",
                "text": "Paroxetine"
            },
            {
                "id": "d",
                "text": "Venlafaxine"
            },
            {
                "id": "e",
                "text": "Escitalopram"
            }
        ],
        "correctId": "a",
        "explanation": "Armodafinil is a stimulant and is not used as a first-line treatment for GAD; the others are standard SSRIs/SNRIs for this condition."
    },
    {
        "id": "q14",
        "question": "14. Regarding the use of benzodiazepines in treating anxiety disorder, which of the following is incorrect?",
        "options": [
            {
                "id": "a",
                "text": "Benzodiazepines are the most effective and frequently prescribed drugs."
            },
            {
                "id": "b",
                "text": "Most of the improvement occurs in the first 2 weeks."
            },
            {
                "id": "c",
                "text": "65%-75% of patients with GAD have a moderate response."
            },
            {
                "id": "d",
                "text": "More effective for somatic and autonomic symptoms of GAD."
            },
            {
                "id": "e",
                "text": "More effective than antidepressants for the psychic symptoms (eg, apprehension and worry)."
            }
        ],
        "correctId": "e",
        "explanation": "This is incorrect because antidepressants are actually more effective than benzodiazepines for the psychic symptoms of GAD, such as apprehension and worry."
    },
    {
        "id": "q15",
        "question": "15. R.M. is a 27-year-old female with a history of anxiety who tried different courses of antidepressants and benzodiazepines without an adequate response. The next step would be:",
        "options": [
            {
                "id": "a",
                "text": "Quetiapine"
            },
            {
                "id": "b",
                "text": "Aripiprazole"
            },
            {
                "id": "c",
                "text": "Buspirone"
            },
            {
                "id": "d",
                "text": "Pregabalin"
            },
            {
                "id": "e",
                "text": "Risperidone"
            }
        ],
        "correctId": "c",
        "explanation": "Buspirone is an appropriate second-line option for patients who have failed other anxiolytic therapies or have a history of substance use."
    },
    {
        "id": "q16",
        "question": "16. Although the treatment of GAD can be achieved by a wide range of medications, acute and long-term therapy is best achieved by:",
        "options": [
            {
                "id": "a",
                "text": "Venlafaxine"
            },
            {
                "id": "b",
                "text": "Diazepam"
            },
            {
                "id": "c",
                "text": "Hydroxyzine"
            },
            {
                "id": "d",
                "text": "Buspirone"
            },
            {
                "id": "e",
                "text": "All of them"
            }
        ],
        "correctId": "a",
        "explanation": "SNRIs like Venlafaxine are effective for both the initial (acute) phase and long-term maintenance of GAD."
    },
    {
        "id": "q17",
        "question": "17. Anxiety symptoms can be developed with several medicines, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Prednisone"
            },
            {
                "id": "b",
                "text": "Theophylline"
            },
            {
                "id": "c",
                "text": "Ibuprofen"
            },
            {
                "id": "d",
                "text": "Levothyroxine"
            },
            {
                "id": "e",
                "text": "Cerivastatin"
            }
        ],
        "correctId": "e",
        "explanation": "While steroids, stimulants like theophylline, and thyroid hormones are associated with anxiety symptoms, cerivastatin is not listed as a common culprit."
    },
    {
        "id": "q18",
        "question": "18. Which of the following antidepressants can be used in pregnant women with anxiety?",
        "options": [
            {
                "id": "a",
                "text": "Venlafaxine"
            },
            {
                "id": "b",
                "text": "Escitalopram"
            },
            {
                "id": "c",
                "text": "Paroxetine"
            },
            {
                "id": "d",
                "text": "Sertraline"
            },
            {
                "id": "e",
                "text": "Quetiapine"
            }
        ],
        "correctId": "d",
        "explanation": "Clinical practice guidelines generally recommend sertraline for pregnant individuals with anxiety as it is better tolerated, whereas paroxetine should be avoided due to teratogenicity risks."
    },
    {
        "id": "q19",
        "question": "19. Regarding nonpharmacological therapy for GAD, patients should avoid all of the following EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Diet pills"
            },
            {
                "id": "b",
                "text": "Nicotine"
            },
            {
                "id": "c",
                "text": "Caffeine"
            },
            {
                "id": "d",
                "text": "Exercise"
            },
            {
                "id": "e",
                "text": "Excessive alcohol"
            }
        ],
        "correctId": "d",
        "explanation": "Exercise is a recommended nonpharmacological intervention for anxiety, while stimulants (caffeine, nicotine, diet pills) and alcohol should be avoided."
    },
    {
        "id": "q20",
        "question": "20. Which of the following medical illnesses is associated with anxiety symptoms?",
        "options": [
            {
                "id": "a",
                "text": "Angina"
            },
            {
                "id": "b",
                "text": "Cushing disease"
            },
            {
                "id": "c",
                "text": "Irritable bowel syndrome"
            },
            {
                "id": "d",
                "text": "Stroke"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "e",
        "explanation": "All these conditions (cardiovascular, endocrine, GI, and neurological) are common medical illnesses that can cause or mimic anxiety symptoms."
    },
    {
        "id": "q21",
        "question": "21. A patient has been taking a benzodiazepine for 6 months. Their doctor wants to slowly wean them off. Which tapering schedule is MOST appropriate?",
        "options": [
            {
                "id": "a",
                "text": "Reduce dosage by 50% immediately"
            },
            {
                "id": "b",
                "text": "Reduce dosage by 25% per week"
            },
            {
                "id": "c",
                "text": "Reduce dosage by one-eighth every day"
            },
            {
                "id": "d",
                "text": "No tapering is necessary"
            },
            {
                "id": "e",
                "text": "Weaning can't be done safely after 6 months"
            }
        ],
        "correctId": "b",
        "explanation": "For patients on benzodiazepines for 6 months, a reasonable taper is 25% per week until 50% of the dose is reached, often taking 4\u20138 weeks total."
    },
    {
        "id": "q22",
        "question": "22. The diagnosis of GAD requires excessive anxiety and worry most days for:",
        "options": [
            {
                "id": "a",
                "text": "At least three months with at least three physical symptoms present"
            },
            {
                "id": "b",
                "text": "At least six months with at least six physical symptoms present"
            },
            {
                "id": "c",
                "text": "At least six months with at least two physical symptoms present"
            },
            {
                "id": "d",
                "text": "At least six months with at least three physical symptoms present"
            },
            {
                "id": "e",
                "text": "At least three months with at least two physical symptoms present"
            }
        ],
        "correctId": "d",
        "explanation": "Diagnostic criteria require excessive anxiety and worry for at least 6 months, accompanied by at least three physical symptoms."
    }
],
  'alzheimer': [
    {
        "id": "q1",
        "question": "1. Cholinesterase inhibitors and NMDA-receptor antagonists are indicated for treatment of Alzheimer Disease. Which drug blocks glutamatergic neurotransmission by antagonizing NMDA receptors?",
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
        "explanation": "Memantine is an N-methyl-D-aspartate (NMDA) receptor antagonist that works by modulating glutamate activity to prevent neurotoxicity."
    },
    {
        "id": "q2",
        "question": "2. Alzheimer disease is associated with many clinical symptoms. What is the main change in personality and behavior associated with Alzheimer disease?",
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
        "explanation": "As AD progresses, patients commonly experience behavioral and psychological symptoms of dementia (BPSD), including depression, withdrawal, delusions, and disrupted sleep."
    },
    {
        "id": "q3",
        "question": "3. Alzheimer disease is a progressive illness. Which neurotransmitters are involved in the pathophysiology of Alzheimer disease?",
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
        "explanation": "AD involves a loss of cholinergic activity (the most prominent deficit), loss of serotonergic and noradrenergic neurons, and abnormal glutamate pathways."
    },
    {
        "id": "q4",
        "question": "4. Donepezil could be used in which of the following cases?",
        "options": [
            {
                "id": "a",
                "text": "Mild Alzheimer cases"
            },
            {
                "id": "b",
                "text": "Moderate Alzheimer cases"
            },
            {
                "id": "c",
                "text": "Severe Alzheimer cases"
            },
            {
                "id": "d",
                "text": "Dementia of Parkinson disease"
            },
            {
                "id": "e",
                "text": "All above"
            }
        ],
        "correctId": "e",
        "explanation": "Donepezil is unique among cholinesterase inhibitors as it is FDA-indicated for all stages of AD (mild, moderate, and severe) and is also used for Parkinson's-related dementia."
    },
    {
        "id": "q5",
        "question": "5. Concerning Alzheimer disease, the non-pharmacological approaches for managing behavioral symptoms in patients with dementia involve all the following EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Good communication"
            },
            {
                "id": "b",
                "text": "Behavioural intervention"
            },
            {
                "id": "c",
                "text": "Family care"
            },
            {
                "id": "d",
                "text": "Driving"
            },
            {
                "id": "e",
                "text": "Memory aid"
            }
        ],
        "correctId": "d",
        "explanation": "While non-pharmacological therapy involves environmental adaptations and memory aids, driving is not a treatment approach; in fact, patients at moderate stages often lose the ability to drive safely."
    },
    {
        "id": "q6",
        "question": "6. Pathologic characteristics of AD include:",
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
        "explanation": "The \"signature lesions\" of AD are intracellular neurofibrillary tangles (tau protein) and extracellular neuritic plaques (beta-amyloid), alongside significant cholinergic cell loss."
    },
    {
        "id": "q7",
        "question": "7. All of the following are considered cognitive symptoms of Alzheimer's disease, with the exception of:",
        "options": [
            {
                "id": "a",
                "text": "Agnosia"
            },
            {
                "id": "b",
                "text": "Wandering"
            },
            {
                "id": "c",
                "text": "Disorientation"
            },
            {
                "id": "d",
                "text": "Impaired executive function"
            },
            {
                "id": "e",
                "text": "Aphasia"
            }
        ],
        "correctId": "b",
        "explanation": "Wandering is categorized as a behavioral symptom (BPSD), whereas agnosia, aphasia, and impaired executive function are deficits in cognition."
    },
    {
        "id": "q8",
        "question": "8. The cholinesterase inhibitor drug that can be taken when an Alzheimer patient's condition is classified as severe is:",
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
                "text": "Galantamine"
            },
            {
                "id": "d",
                "text": "Memantine"
            },
            {
                "id": "e",
                "text": "Atropine"
            }
        ],
        "correctId": "a",
        "explanation": "While all three inhibitors are used for mild-to-moderate AD, Donepezil is the only one specifically indicated for severe AD."
    },
    {
        "id": "q9",
        "question": "9. Concerning pharmacological therapy of non-cognitive symptoms of Alzheimer disease, all of the treatments are correct EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "SSRIs (sertraline/citalopram) given to depressed patients with AD"
            },
            {
                "id": "b",
                "text": "Tricyclic antidepressant is highly recommended"
            },
            {
                "id": "c",
                "text": "Antipsychotics (Aripiprazole, Risperidone, Olanzapine) used to treat neuropsychotic symptoms"
            },
            {
                "id": "d",
                "text": "Antipsychotic restricted to patients with severe symptoms"
            },
            {
                "id": "e",
                "text": "Treatment with antipsychotic should be tapered early"
            }
        ],
        "correctId": "b",
        "explanation": "Tricyclic antidepressants (TCAs) are usually avoided in AD patients because their anticholinergic properties can worsen cognitive impairment."
    },
    {
        "id": "q10",
        "question": "10. Which of the following is NOT a risk factor for Alzheimer's disease?",
        "options": [
            {
                "id": "a",
                "text": "Age"
            },
            {
                "id": "b",
                "text": "Hepatic encephalopathy"
            },
            {
                "id": "c",
                "text": "Head injury"
            },
            {
                "id": "d",
                "text": "Down syndrome"
            },
            {
                "id": "e",
                "text": "Depression"
            }
        ],
        "correctId": "b",
        "explanation": "Established risk factors include age, head injury, Down syndrome, and depression; hepatic encephalopathy is a complication of liver disease, not a primary risk factor for AD."
    },
    {
        "id": "q11",
        "question": "11. Successful treatment of a patient with AD would show a decline in MMSE score of:",
        "options": [
            {
                "id": "a",
                "text": "Less than 2 points per year"
            },
            {
                "id": "b",
                "text": "More than 2 points per year"
            },
            {
                "id": "c",
                "text": "Less than 3 points per year"
            },
            {
                "id": "d",
                "text": "More than 3 points per year"
            },
            {
                "id": "e",
                "text": "More than 5 points per year"
            }
        ],
        "correctId": "a",
        "explanation": "In untreated patients, the MMSE typically declines by 2\u20134 points annually; successful pharmacotherapy slows this to less than 2 points per year."
    },
    {
        "id": "q12",
        "question": "12. Which of the following symptoms is NOT commonly associated with Alzheimer disease?",
        "options": [
            {
                "id": "a",
                "text": "Memory loss"
            },
            {
                "id": "b",
                "text": "Language difficulties"
            },
            {
                "id": "c",
                "text": "Visual hallucinations"
            },
            {
                "id": "d",
                "text": "Impaired judgment and decision-making"
            },
            {
                "id": "e",
                "text": "Gastrointestinal disturbances"
            }
        ],
        "correctId": "e",
        "explanation": "AD is characterized by cognitive and behavioral decline (memory loss, hallucinations, poor judgment); GI disturbances are not a core feature of the disease itself, though they may be side effects of medication."
    },
    {
        "id": "q13",
        "question": "13. Ahmed's grandfather was diagnosed with mild Alzheimer Disease. This medication cannot be indicated for mild AD:",
        "options": [
            {
                "id": "a",
                "text": "Donepezil"
            },
            {
                "id": "b",
                "text": "Memantine"
            },
            {
                "id": "c",
                "text": "Rivastigmine"
            },
            {
                "id": "d",
                "text": "Galantamine"
            },
            {
                "id": "e",
                "text": "Cholinesterase inhibitors"
            }
        ],
        "correctId": "b",
        "explanation": "Memantine is indicated for moderate-to-severe AD, not mild cases; it is often added to a cholinesterase inhibitor as the disease progresses."
    },
    {
        "id": "q14",
        "question": "14. Which one of the following drugs is considered the drug of choice for Parkinson disease with dementia?",
        "options": [
            {
                "id": "a",
                "text": "Donepezil"
            },
            {
                "id": "b",
                "text": "Galantamine"
            },
            {
                "id": "c",
                "text": "Rivastigmine"
            },
            {
                "id": "d",
                "text": "Memantine"
            },
            {
                "id": "e",
                "text": "Physostigmine"
            }
        ],
        "correctId": "c",
        "explanation": "Rivastigmine is generally considered the drug of choice for managing dementia associated with Parkinson's disease."
    },
    {
        "id": "q15",
        "question": "15. Regarding the treatment of Alzheimer disease with Cholinesterase inhibitors, which statement is correct?",
        "options": [
            {
                "id": "a",
                "text": "No comparative trials have assessed the effectiveness of one agent over another"
            },
            {
                "id": "b",
                "text": "Donepezil, rivastigmine, and galantamine are indicated in severe AD."
            },
            {
                "id": "c",
                "text": "Donepezil is also indicated for mild-to-moderate AD."
            },
            {
                "id": "d",
                "text": "Successful treatment would show a decline in MMSE score of less than 4 points per year."
            },
            {
                "id": "e",
                "text": "The three inhibitors have similar efficacy in mild-to-moderate AD, and benefit lasts 3-24 weeks."
            }
        ],
        "correctId": "a",
        "explanation": "Clinical sources state that no trials have assessed the superiority of one cholinesterase inhibitor over another; they have similar efficacy in mild-to-moderate disease."
    },
    {
        "id": "q16",
        "question": "16. For depressed patients with AD, the best choice is:",
        "options": [
            {
                "id": "a",
                "text": "Citalopram"
            },
            {
                "id": "b",
                "text": "Imipramine"
            },
            {
                "id": "c",
                "text": "Selegiline"
            },
            {
                "id": "d",
                "text": "Duloxetine"
            },
            {
                "id": "e",
                "text": "Bupropion"
            }
        ],
        "correctId": "a",
        "explanation": "SSRIs, specifically sertraline and citalopram, have the best evidence for treating depression in AD patients while minimizing side effects."
    },
    {
        "id": "q17",
        "question": "17. In the diagnosis of AD, the Folstein Mini-Mental State Examination (MMSE) helps evaluate change in severity. Which statement regarding the untreated average expected decline is correct?",
        "options": [
            {
                "id": "a",
                "text": "The average expected decline in an untreated patient is 2-4 points per year."
            },
            {
                "id": "b",
                "text": "The average expected decline in an untreated patient is 4-6 points per year."
            },
            {
                "id": "c",
                "text": "The average expected decline in an untreated patient is 2-6 points per year."
            },
            {
                "id": "d",
                "text": "The average expected decline in an untreated patient is 3-5 points per year."
            },
            {
                "id": "e",
                "text": "The average expected decline in an untreated patient is 3-6 points per year."
            }
        ],
        "correctId": "a",
        "explanation": "Clinical guidelines define the natural progression of untreated AD as a loss of 2 to 4 MMSE points annually."
    },
    {
        "id": "q18",
        "question": "18. Mr. Ali (MMSE 22) has mild Alzheimer's disease. The following treatments can be used as monotherapy, EXCEPT:",
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
                "text": "Galantamine"
            },
            {
                "id": "d",
                "text": "Memantine"
            },
            {
                "id": "e",
                "text": "Aducanumab"
            }
        ],
        "correctId": "d",
        "explanation": "Memantine is not used for mild AD as monotherapy or in combination; its use is reserved for the moderate-to-severe stages."
    },
    {
        "id": "q19",
        "question": "19. MRI baseline and after treatment should be recommended with which drug?",
        "options": [
            {
                "id": "a",
                "text": "Rivastigmine"
            },
            {
                "id": "b",
                "text": "Donepezil"
            },
            {
                "id": "c",
                "text": "Memantine"
            },
            {
                "id": "d",
                "text": "Aducanumab"
            },
            {
                "id": "e",
                "text": "Galantamine"
            }
        ],
        "correctId": "d",
        "explanation": "Aducanumab requires MRI monitoring at baseline and prior to the 7th and 12th doses to detect Amyloid-Related Imaging Abnormalities (ARIA), such as brain edema or hemorrhage."
    },
    {
        "id": "q20",
        "question": "20. One of the diagnostic features of Alzheimer's disease is the inability to perform learned (familiar) movements on command; this is called:",
        "options": [
            {
                "id": "a",
                "text": "Aphasia"
            },
            {
                "id": "b",
                "text": "Apraxia"
            },
            {
                "id": "c",
                "text": "Agnosia"
            },
            {
                "id": "d",
                "text": "Dyskinesia"
            },
            {
                "id": "e",
                "text": "EPS"
            }
        ],
        "correctId": "b",
        "explanation": "Apraxia is the specific neurological disorder where a patient cannot perform familiar movements despite understanding the command and having the physical ability."
    },
    {
        "id": "q21",
        "question": "21. At which stage of Alzheimer disease does a 63-year-old female with an MMSE of 17 have?",
        "options": [
            {
                "id": "a",
                "text": "mild"
            },
            {
                "id": "b",
                "text": "moderate"
            },
            {
                "id": "c",
                "text": "severe"
            },
            {
                "id": "d",
                "text": "acute"
            },
            {
                "id": "e",
                "text": "chronic"
            }
        ],
        "correctId": "b",
        "explanation": "The MMSE staging defines moderate AD as a score between 10 and 20."
    }
],

  'menstrual_disorders': [
    {
        "id": "q1",
        "question": "1. Is pelvic pain, generally described as cramping, that occurs during or just prior to menstruation?",
        "options": [
            {
                "id": "a",
                "text": "Primary amenorrhea"
            },
            {
                "id": "b",
                "text": "Menorrhagia"
            },
            {
                "id": "c",
                "text": "Dysmenorrhea"
            },
            {
                "id": "d",
                "text": "Secondary amenorrhea"
            }
        ],
        "correctId": "c",
        "explanation": "Dysmenorrhea is defined as pelvic pain, often described as painful cramping, occurring during or just before menstruation."
    },
    {
        "id": "q2",
        "question": "2. All of the following involve in the management of dysmenorrhea except:",
        "options": [
            {
                "id": "a",
                "text": "Combination Hormonal Contraceives"
            },
            {
                "id": "b",
                "text": "NSAID"
            },
            {
                "id": "c",
                "text": "Depo-medroxyprogesterone acetate"
            },
            {
                "id": "d",
                "text": "Bromocriptine"
            }
        ],
        "correctId": "d",
        "explanation": "Bromocriptine is a dopamine agonist used to treat hyperprolactinemia, not dysmenorrhea. NSAIDs, CHCs, and progestins like Depo-MPA are standard treatments."
    },
    {
        "id": "q3",
        "question": "3. The benefit of depo-medroxyprogesterone acetate in dysmenorrhea is related to:",
        "options": [
            {
                "id": "a",
                "text": "Its ability to render most patients amenorrheic"
            },
            {
                "id": "b",
                "text": "Inhibit endometrial hyperplasia"
            },
            {
                "id": "c",
                "text": "Treatment of polycystic ovary syndrome which is the main cause of dysmenorrhea"
            },
            {
                "id": "d",
                "text": "Its ability to improve fertility"
            }
        ],
        "correctId": "a",
        "explanation": "Long-acting progestins like Depo-MPA work by reducing or eliminating menses over time, thereby eliminating the release of prostaglandins that cause pain."
    },
    {
        "id": "q4",
        "question": "4. Regarding pharmacologic therapy of dysmenorrhea, the first-line pharmacologic therapy is:",
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
        "explanation": "NSAIDs (such as ibuprofen or naproxen) are considered first-line therapy and are effective in up to 80% of patients."
    },
    {
        "id": "q5",
        "question": "5. Which of the following hormone-like substances is responsible for painful menstrual cramps?",
        "options": [
            {
                "id": "a",
                "text": "Estrogen"
            },
            {
                "id": "b",
                "text": "Dopamine"
            },
            {
                "id": "c",
                "text": "Epinephrine"
            },
            {
                "id": "d",
                "text": "Prostaglandin"
            },
            {
                "id": "e",
                "text": "Serotonin"
            }
        ],
        "correctId": "d",
        "explanation": "In primary dysmenorrhea, elevated prostaglandins induce uterine contractions, reduce uterine blood flow, and stimulate pain fibers."
    },
    {
        "id": "q6",
        "question": "6. All of the following are appropriate recommendations for the initial management of primary dysmenorrhea EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "NSAIDs"
            },
            {
                "id": "b",
                "text": "Copper intrauterine device"
            },
            {
                "id": "c",
                "text": "Application of heat (topically)"
            },
            {
                "id": "d",
                "text": "Regular brisk exercise"
            },
            {
                "id": "e",
                "text": "A low-fat vegetarian diet"
            }
        ],
        "correctId": "b",
        "explanation": "While NSAIDs, heat, and exercise are recommended, the copper IUD can actually increase menstrual blood flow and dysmenorrhea."
    },
    {
        "id": "q7",
        "question": "7. Which of the following statements about dysmenorrhea is false?",
        "options": [
            {
                "id": "a",
                "text": "is a pelvic pain occurs during or just prior to menstruation"
            },
            {
                "id": "b",
                "text": "smoking is a risk factor"
            },
            {
                "id": "c",
                "text": "regular exercise is considered a nonpharmacological intervention"
            },
            {
                "id": "d",
                "text": "NSAIDS are first-line therapy"
            },
            {
                "id": "e",
                "text": "combined hormonal contraceptives are contraindicated"
            }
        ],
        "correctId": "e",
        "explanation": "CHCs are not contraindicated; they are a standard treatment that improves dysmenorrhea by thinning the endometrial lining and inhibiting ovulation."
    },
    {
        "id": "q8",
        "question": "8. Causes of secondary dysmenorrhea may include all of the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Endometriosis"
            },
            {
                "id": "b",
                "text": "Uterine or cervical polyps"
            },
            {
                "id": "c",
                "text": "Occurs with normal pelvic anatomy & physiology"
            },
            {
                "id": "d",
                "text": "Pelvic inflammatory disease"
            },
            {
                "id": "e",
                "text": "Uterine fibroids"
            }
        ],
        "correctId": "c",
        "explanation": "Primary dysmenorrhea occurs with normal anatomy; secondary dysmenorrhea is specifically associated with underlying pelvic pathology like endometriosis or fibroids."
    },
    {
        "id": "q9",
        "question": "9. First-line treatment for women with dysmenorrhea secondary to endometriosis is:",
        "options": [
            {
                "id": "a",
                "text": "Extended cycle regimens combined hormonal contraceptive"
            },
            {
                "id": "b",
                "text": "NSAIDs"
            },
            {
                "id": "c",
                "text": "Levonorgestrel-releasing intrauterine device (IUD)"
            },
            {
                "id": "d",
                "text": "Depot medroxyprogesterone acetate"
            },
            {
                "id": "e",
                "text": "Etonogestrel implant"
            }
        ],
        "correctId": "a",
        "explanation": "For dysmenorrhea specifically caused by endometriosis, extended-cycle CHC regimens are considered the first-line approach."
    },
    {
        "id": "q10",
        "question": "10. All of the following risk factors for dysmenorrhea are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "irregular or heavy menses"
            },
            {
                "id": "b",
                "text": "age more than 30"
            },
            {
                "id": "c",
                "text": "menarche prior to age 12"
            },
            {
                "id": "d",
                "text": "body mass index (BMI) less than 20 kg/m2"
            },
            {
                "id": "e",
                "text": "smoking"
            }
        ],
        "correctId": "b",
        "explanation": "Risk factors include age *less* than 30, early menarche (before 12), low BMI, and smoking."
    },
    {
        "id": "q11",
        "question": "11. When is a levonorgestrel-releasing IUD considered a first-line treatment for dysmenorrhea?",
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
        "explanation": "According to the treatment algorithm, if monthly NSAIDs and CHCs (2-3 cycles) are not effective, clinicians should consider Depo-MPA or the LNG-IUD."
    },
    {
        "id": "q12",
        "question": "12. Is the absence of menses for three cycles or 6 months in a previously menstruating woman?",
        "options": [
            {
                "id": "a",
                "text": "Secondary amenorrhea"
            },
            {
                "id": "b",
                "text": "Primary amenorrhea"
            },
            {
                "id": "c",
                "text": "Dysmenorrhea"
            },
            {
                "id": "d",
                "text": "Menorrhagia"
            }
        ],
        "correctId": "a",
        "explanation": "Secondary amenorrhea is the cessation of menses for 3 months in a previously regular woman or 6 months in a previously irregular woman."
    },
    {
        "id": "q13",
        "question": "13. Which one of the following treatment is used for a woman with amenorrhea secondary to hyperprolactinemia?",
        "options": [
            {
                "id": "a",
                "text": "Pioglitazone"
            },
            {
                "id": "b",
                "text": "Cabergoline"
            },
            {
                "id": "c",
                "text": "Progesterone"
            },
            {
                "id": "d",
                "text": "Metformin"
            }
        ],
        "correctId": "b",
        "explanation": "Dopamine agonists like cabergoline (or bromocriptine) are used to resolve amenorrhea caused by high prolactin levels."
    },
    {
        "id": "q14",
        "question": "14. 16 years old girl with normal secondary sexual characteristics but with no menarche. This girl could be described as having:",
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
        "explanation": "Primary amenorrhea is defined as the failure to reach menarche by age 15 in a person who has never menstruated."
    },
    {
        "id": "q15",
        "question": "15. Rahaf is a 16-years old adolescent with primary amenorrhea who recently reaches puberty. The recommended treatment for Rahaf after puberty is:",
        "options": [
            {
                "id": "a",
                "text": "CHC"
            },
            {
                "id": "b",
                "text": "Oral progesterone"
            },
            {
                "id": "c",
                "text": "oral estradiol"
            },
            {
                "id": "d",
                "text": "Oral bromocriptine"
            },
            {
                "id": "e",
                "text": "Oral ibuprofen"
            }
        ],
        "correctId": "c",
        "explanation": "Once puberty is complete, the goal is maintaining normal ovarian functioning levels of estradiol (e.g., 100 mcg daily)."
    },
    {
        "id": "q16",
        "question": "16. A 20-year-old woman presents for evaluation of 3 months of amenorrhea. She complains of fatigue, nausea, and breast tenderness. What is the most appropriate first step?",
        "options": [
            {
                "id": "a",
                "text": "Pregnancy test"
            },
            {
                "id": "b",
                "text": "Thyroid function test"
            },
            {
                "id": "c",
                "text": "Serum prolactin level"
            },
            {
                "id": "d",
                "text": "Serum estrogen level"
            },
            {
                "id": "e",
                "text": "Complete blood count"
            }
        ],
        "correctId": "a",
        "explanation": "Unrecognized pregnancy is a common cause of amenorrhea; therefore, a pregnancy test is a critical first step in evaluation."
    },
    {
        "id": "q17",
        "question": "17. What is the primary goal of adding progestin therapy to estrogen treatment for amenorrhea?",
        "options": [
            {
                "id": "a",
                "text": "Augment estrogen\u2019s effects on bone"
            },
            {
                "id": "b",
                "text": "Improve overall quality of life"
            },
            {
                "id": "c",
                "text": "Prevent endometrial hyperplasia"
            },
            {
                "id": "d",
                "text": "Restore fertility"
            },
            {
                "id": "e",
                "text": "Counter estrogen\u2019s negative effects on lipids"
            }
        ],
        "correctId": "c",
        "explanation": "Cyclic progesterone (10-12 days per month) must be added to estrogen therapy to protect the uterus against endometrial hyperplasia and cancer."
    },
    {
        "id": "q18",
        "question": "18. What is the recommended first-line therapy for patients with functional hypothalamic amenorrhea, according to the 2017 Endocrine Society Clinical Practice Guideline?",
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
        "correctId": "d",
        "explanation": "Guidelines recommend that these patients trial non-pharmacological interventions (psychological, nutritional, or exercise) before starting drugs."
    },
    {
        "id": "q19",
        "question": "19. Which of the following statements concerning amenorrhea treatments do you believe to be false?",
        "options": [
            {
                "id": "a",
                "text": "Metformin is an effective treatment for patients experiencing secondary amenorrhea."
            },
            {
                "id": "b",
                "text": "Withdrawal bleeding is a prominent adverse effect of progestins administered to women with secondary amenorrhea"
            },
            {
                "id": "c",
                "text": "For secondary amenorrhea, 10 mg of Medroxyprogesterone Acetate (MPA) orally twice daily for 7-10 days is the recommended dosage"
            },
            {
                "id": "d",
                "text": "Bromocriptine is the suitable treatment for amenorrhea caused by hyperprolactinemia in women."
            },
            {
                "id": "e",
                "text": "First-line treatment for people with functional hypothalamic amenorrhea no longer includes synthetic estrogen."
            }
        ],
        "correctId": "c",
        "explanation": "The standard dose of oral MPA is 10 mg once daily, not twice daily."
    },
    {
        "id": "q20",
        "question": "20. All of the following may be causes of anovulation except:",
        "options": [
            {
                "id": "a",
                "text": "PCOS"
            },
            {
                "id": "b",
                "text": "Hypothalamic dysfunction"
            },
            {
                "id": "c",
                "text": "Elevated levels of arachidonic acid"
            },
            {
                "id": "d",
                "text": "Hyperprolactinemia"
            }
        ],
        "correctId": "c",
        "explanation": "Elevated arachidonic acid is linked to the pathophysiology of dysmenorrhea, not anovulation. PCOS and hyperprolactinemia are common causes of anovulation."
    },
    {
        "id": "q21",
        "question": "21. Which of the following progesterones have antiandrogenic properties?",
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
        "explanation": "Drospirenone is a progestin with antiandrogenic effects, making it useful for patients with PCOS or signs of hyperandrogenism."
    },
    {
        "id": "q22",
        "question": "22. Regarding Epidemiology and Etiology of Anovulatory uterine bleeding, the followings are most common causes of non-physiologic ovulatory dysfunction EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "PCOS"
            },
            {
                "id": "b",
                "text": "Hypothalamic amenorrhea"
            },
            {
                "id": "c",
                "text": "Hypoprolactinemia"
            },
            {
                "id": "d",
                "text": "Premature ovarian failure"
            },
            {
                "id": "e",
                "text": "Hyperprolactinemia"
            }
        ],
        "correctId": "c",
        "explanation": "*Hyper*prolactinemia causes dysfunction; *hypo*prolactinemia is not listed as a common cause of non-physiologic ovulatory dysfunction."
    },
    {
        "id": "q23",
        "question": "23. Which one of the following therapies associated with greater reduction in blood loss in women with heavy menstrual bleeding?",
        "options": [
            {
                "id": "a",
                "text": "The levonorgestrel IUD"
            },
            {
                "id": "b",
                "text": "NSAIDs"
            },
            {
                "id": "c",
                "text": "Combination Hormonal Contraceptives"
            },
            {
                "id": "d",
                "text": "Cyclic progestin therapy as oral norethindrone acetate"
            },
            {
                "id": "e",
                "text": "Medroxyprogesterone acetate"
            }
        ],
        "correctId": "a",
        "explanation": "The levonorgestrel IUD reduces menstrual flow by 70% to 96% and is considered the most effective medical treatment for reducing menstrual flow."
    },
    {
        "id": "q24",
        "question": "24. Women with anovulatory bleeding from PCOS who are pursuing pregnancy may be treated with:",
        "options": [
            {
                "id": "a",
                "text": "letrozole"
            },
            {
                "id": "b",
                "text": "35 mcg ethinyl estradiol"
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
        "explanation": "Letrozole or clomiphene citrate are used for ovulation induction in women with PCOS who wish to become pregnant."
    },
    {
        "id": "q25",
        "question": "25. Amal is a 33-years old woman suffering from anovulatory bleeding and experienced severe side effects on treatment with estrogen. The second line treatment would be:",
        "options": [
            {
                "id": "a",
                "text": "CHC"
            },
            {
                "id": "b",
                "text": "Progestins"
            },
            {
                "id": "c",
                "text": "Metformin"
            },
            {
                "id": "d",
                "text": "Aspirin"
            },
            {
                "id": "e",
                "text": "Paracetamol"
            }
        ],
        "correctId": "b",
        "explanation": "For those with contraindications or side effects to estrogen, progestin-only products are the recommended alternative."
    },
    {
        "id": "q26",
        "question": "26. Regarding menstrual related disorder, which of the following is not a desired outcome of therapy for anovulatory uterine bleeding?",
        "options": [
            {
                "id": "a",
                "text": "decrease pain"
            },
            {
                "id": "b",
                "text": "prevent future episodes of noncyclic bleeding"
            },
            {
                "id": "c",
                "text": "decrease osteopenia"
            },
            {
                "id": "d",
                "text": "improve overall quality of life"
            },
            {
                "id": "e",
                "text": "stop acute bleeding"
            }
        ],
        "correctId": "a",
        "explanation": "While stopping acute bleeding and preventing complications like osteopenia are goals, \"decreasing pain\" is specifically the desired outcome for dysmenorrhea."
    },
    {
        "id": "q27",
        "question": "27. In women with anovulatory bleeding with high androgen levels, the recommended combined hormonal contraceptives (CHCs) are the following except:",
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
        "explanation": "For hyperandrogenism, progestins with minimal androgenic side effects (norgestimate, desogestrel) or antiandrogenic effects (drospirenone) are preferred; levonorgestrel is not recommended in this specific context."
    },
    {
        "id": "q28",
        "question": "28. 17-year-old girl with PCOS... which of the following is NOT a potential long-term complication of untreated PCOS?",
        "options": [
            {
                "id": "a",
                "text": "Type 2 diabetes"
            },
            {
                "id": "b",
                "text": "Endometrial cancer"
            },
            {
                "id": "c",
                "text": "cardiovascular disease"
            },
            {
                "id": "d",
                "text": "Infertility"
            },
            {
                "id": "e",
                "text": "Pancreatic cancer"
            }
        ],
        "correctId": "e",
        "explanation": "Long-term risks of PCOS include metabolic issues (diabetes, CVD), infertility, and endometrial cancer due to unopposed estrogen, but not pancreatic cancer."
    }
],
  'hrt': [
    {
        "id": "q1",
        "question": "1. Many types of medications can be used for the treatment of post-menopausal symptoms. The medication which has combined estrogenic, progestogenic, and androgenic activity and improves mood, menopausal symptoms, and vaginal atrophy is:",
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
        "explanation": "Tibolone is a unique compound that possesses a combination of estrogenic, progestogenic, and androgenic properties, making it effective for a wide range of menopausal symptoms."
    },
    {
        "id": "q2",
        "question": "2. Estrogens have important roles in the treatment of post-menopausal symptoms. When compared to oral estrogen, transdermal estrogen is:",
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
        "explanation": "Transdermal estrogen avoids first-pass hepatic metabolism, which results in a more physiologic ratio of estradiol to estrone and carries lower risks for cardiovascular and thromboembolic events."
    },
    {
        "id": "q3",
        "question": "3. Menopause is associated with several clinical symptoms. Vasomotor symptom(s) of menopause is/are:",
        "options": [
            {
                "id": "a",
                "text": "Hot flushes"
            },
            {
                "id": "b",
                "text": "Night sweats"
            },
            {
                "id": "c",
                "text": "Sleep disturbances"
            },
            {
                "id": "d",
                "text": "Depression"
            },
            {
                "id": "e",
                "text": "All mentioned points are correct"
            }
        ],
        "correctId": "e",
        "explanation": "While hot flushes and night sweats are the classic vasomotor symptoms, the entire cluster of symptoms including sleep and mood changes is frequently associated with the menopausal transition."
    },
    {
        "id": "q4",
        "question": "4. For the diagnosis of menopause, the most important parameter is:",
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
        "explanation": "Menopause is defined clinically as the permanent cessation of menses, confirmed only after a woman has gone 12 consecutive months without a period."
    },
    {
        "id": "q5",
        "question": "5. Regarding menopause: Which of the following postmenopausal females can safely receive hormone replacement therapy?",
        "options": [
            {
                "id": "a",
                "text": "A 53-year-old female who underwent mastectomy 10 years ago due to breast cancer."
            },
            {
                "id": "b",
                "text": "A 49-year-old female with a history of myocardial infarction one year ago."
            },
            {
                "id": "c",
                "text": "A 55-year-old female newly diagnosed with decompensated cirrhosis."
            },
            {
                "id": "d",
                "text": "A 54-year-old female with a stroke attack 6 months ago."
            },
            {
                "id": "e",
                "text": "A 51-year-old female with a history of peptic ulceration a year ago."
            }
        ],
        "correctId": "e",
        "explanation": "History of breast cancer, MI, liver disease, and stroke are absolute contraindications to MHT; however, a history of peptic ulcers is not a contraindication."
    },
    {
        "id": "q6",
        "question": "6. Contraindication to HRT include all the following EXCEPT:",
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
                "text": "Hypertriglyceridemia"
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
        "explanation": "Hot flushes are an indication for HRT, while the other conditions represent either absolute or relative contraindications."
    },
    {
        "id": "q7",
        "question": "7. Regarding hormonal replacement therapy, the benefits of hormonal replacement therapy include:",
        "options": [
            {
                "id": "a",
                "text": "Relief of moderate to severe vasomotor symptoms"
            },
            {
                "id": "b",
                "text": "Treatment of vulvo-vaginal atrophy"
            },
            {
                "id": "c",
                "text": "Short-term therapy for prevention of postmenopausal osteoporosis"
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
        "explanation": "MHT is highly effective for vasomotor symptoms, urogenital atrophy, and the prevention of bone loss in postmenopausal women."
    },
    {
        "id": "q8",
        "question": "8. Addition of a progestogen for estrogen replacement therapy in postmenopausal women is recommended because the progestogen:",
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
        "explanation": "Using estrogen alone in women with an intact uterus leads to unopposed endometrial proliferation; adding a progestogen protects the lining and prevents endometrial cancer."
    },
    {
        "id": "q9",
        "question": "9. Regarding the vasomotor symptoms of perimenopause and menopause, all of the following symptoms are false EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "depression"
            },
            {
                "id": "b",
                "text": "sleep disturbances"
            },
            {
                "id": "c",
                "text": "anxiety"
            },
            {
                "id": "d",
                "text": "night sweats"
            },
            {
                "id": "e",
                "text": "vaginal dryness"
            }
        ],
        "correctId": "d",
        "explanation": "Night sweats and hot flushes are the specific symptoms categorized as vasomotor symptoms."
    },
    {
        "id": "q10",
        "question": "10. Jane is a 48-year-old woman who is experiencing severe hot flashes and night sweats. She has a family history of breast cancer... Which medication may be a potential option?",
        "options": [
            {
                "id": "a",
                "text": "Calcium and Vitamin D3 supplementation"
            },
            {
                "id": "b",
                "text": "Hormone replacement therapy"
            },
            {
                "id": "c",
                "text": "gabapentin"
            },
            {
                "id": "d",
                "text": "corticosteroids"
            },
            {
                "id": "e",
                "text": "none of the above"
            }
        ],
        "correctId": "c",
        "explanation": "In patients who choose to avoid hormones due to family history concerns, gabapentin is an effective non-hormonal alternative for vasomotor symptoms."
    },
    {
        "id": "q11",
        "question": "11. A blood test can be used as a diagnostic tool to help determine if a woman is entering the menopausal stage. Which of the following test should be measured?",
        "options": [
            {
                "id": "a",
                "text": "follicle-stimulating hormone"
            },
            {
                "id": "b",
                "text": "testosterone"
            },
            {
                "id": "c",
                "text": "progesterone"
            },
            {
                "id": "d",
                "text": "thyroid function test"
            },
            {
                "id": "e",
                "text": "prolactin test"
            }
        ],
        "correctId": "a",
        "explanation": "As ovarian function declines, FSH levels rise significantly (typically >10-12 IU/L) as the body tries to stimulate the ovaries."
    },
    {
        "id": "q12",
        "question": "12. 56 years old menopause female suffering from urogenital symptoms... What is the recommended therapy for her symptoms?",
        "options": [
            {
                "id": "a",
                "text": "Oral menopausal hormonal therapy"
            },
            {
                "id": "b",
                "text": "CHCs"
            },
            {
                "id": "c",
                "text": "Intravaginal estrogen"
            },
            {
                "id": "d",
                "text": "Ospemifene"
            },
            {
                "id": "e",
                "text": "Bazedoxifene"
            }
        ],
        "correctId": "c",
        "explanation": "When urogenital symptoms are the only complaint, intravaginal estrogen is preferred because it maximizes local effect while minimizing systemic exposure."
    },
    {
        "id": "q13",
        "question": "13. Women receiving menopausal hormonal therapy should be evaluated every:",
        "options": [
            {
                "id": "a",
                "text": "Week"
            },
            {
                "id": "b",
                "text": "Six months"
            },
            {
                "id": "c",
                "text": "Year"
            },
            {
                "id": "d",
                "text": "Five years"
            },
            {
                "id": "e",
                "text": "Ten years"
            }
        ],
        "correctId": "c",
        "explanation": "Once a therapeutic regimen is established, women on MHT should be seen for evaluation annually."
    },
    {
        "id": "q14",
        "question": "14. Regarding hormonal replacement therapy, which of the following is considered a specific sign of menopause?",
        "options": [
            {
                "id": "a",
                "text": "Urogenital atrophy"
            },
            {
                "id": "b",
                "text": "Night sweats"
            },
            {
                "id": "c",
                "text": "Hot flushes"
            },
            {
                "id": "d",
                "text": "Sleep disturbances"
            },
            {
                "id": "e",
                "text": "Vaginal dryness"
            }
        ],
        "correctId": "a",
        "explanation": "While flushes and sweats are symptoms, urogenital atrophy is a physical sign of the physiological changes occurring during menopause."
    },
    {
        "id": "q15",
        "question": "15. Regarding hormone therapy in women, the intravaginal DHEA that has FDA approval for the treatment of moderate-to-severe dyspareunia is:",
        "options": [
            {
                "id": "a",
                "text": "Raloxifene"
            },
            {
                "id": "b",
                "text": "Bazedoxifene"
            },
            {
                "id": "c",
                "text": "Prasterone"
            },
            {
                "id": "d",
                "text": "Ospemifene"
            },
            {
                "id": "e",
                "text": "Tamoxifen"
            }
        ],
        "correctId": "c",
        "explanation": "Prasterone is the specific intravaginal DHEA formulation approved by the FDA for treating dyspareunia associated with menopause."
    },
    {
        "id": "q16",
        "question": "16. Q.E is 56 years old... had a history of breast cancer which was successfully cured 10 years ago. Which one of the following medications could be started?",
        "options": [
            {
                "id": "a",
                "text": "Estrogen replacement"
            },
            {
                "id": "b",
                "text": "Progestin containing HRT"
            },
            {
                "id": "c",
                "text": "Estrogen vaginal cream"
            },
            {
                "id": "d",
                "text": "Venlafaxine"
            },
            {
                "id": "e",
                "text": "Non-estrogen vaginal cream"
            }
        ],
        "correctId": "d",
        "explanation": "Venlafaxine (an SNRI) is a preferred non-hormonal treatment for patients with a personal history of breast cancer, which is an absolute contraindication to MHT."
    },
    {
        "id": "q17",
        "question": "17. Regarding to treatment, one or more of the following medical conditions... make the use of hormonal replacement therapy absolutely contraindicated, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Liver disease"
            },
            {
                "id": "b",
                "text": "history of breast cancer"
            },
            {
                "id": "c",
                "text": "Undiagnosed abnormal genital bleeding"
            },
            {
                "id": "d",
                "text": "Active DVT or PE"
            },
            {
                "id": "e",
                "text": "history of ovarian cancer"
            }
        ],
        "correctId": "e",
        "explanation": "Ovarian cancer is listed as a relative contraindication, whereas the others are absolute contraindications."
    },
    {
        "id": "q18",
        "question": "18. Regarding evaluation of therapeutic outcomes, non-oral estrogen products are usually preferred in some cases to get the benefit of all the following, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "less likely to increase C-reactive protein levels"
            },
            {
                "id": "b",
                "text": "less likely to decrease sex hormone-binding globulin"
            },
            {
                "id": "c",
                "text": "Avoid first-pass metabolism"
            },
            {
                "id": "d",
                "text": "Lower risk for DVT, stroke, and MI"
            },
            {
                "id": "e",
                "text": "less likely to increase blood pressure"
            }
        ],
        "correctId": "b",
        "explanation": "Non-oral estrogens are actually less likely to *increase* SHBG, making \"less likely to decrease\" the incorrect statement in this context."
    },
    {
        "id": "q19",
        "question": "19. Management of urogenital symptoms of menopause. Intravaginal estrogen is NOT used for:",
        "options": [
            {
                "id": "a",
                "text": "dyspareunia"
            },
            {
                "id": "b",
                "text": "urge incontinence"
            },
            {
                "id": "c",
                "text": "bladder atony"
            },
            {
                "id": "d",
                "text": "vaginal dryness"
            },
            {
                "id": "e",
                "text": "vaginal atrophy"
            }
        ],
        "correctId": "c",
        "explanation": "Intravaginal estrogen is effective for atrophy, dryness, and incontinence, but there is no evidence for its use in treating bladder atony."
    },
    {
        "id": "q20",
        "question": "20. Regarding alternative drug of hormonal replacement therapy, one of the followings is an alternative drug:",
        "options": [
            {
                "id": "a",
                "text": "Levonorgestrel"
            },
            {
                "id": "b",
                "text": "Clonidine"
            },
            {
                "id": "c",
                "text": "Raloxifene"
            },
            {
                "id": "d",
                "text": "Bazedoxifene"
            },
            {
                "id": "e",
                "text": "Tamoxifen"
            }
        ],
        "correctId": "b",
        "explanation": "Clonidine is an alpha-adrenergic agonist that can be used as a non-hormonal alternative for hot flashes."
    },
    {
        "id": "q21",
        "question": "21. Testosterone becomes more commonly prescribed for some menopausal women. The benefit of testosterone for menopause women is to:",
        "options": [
            {
                "id": "a",
                "text": "Prevent hot flashes"
            },
            {
                "id": "b",
                "text": "Treat vaginal dryness"
            },
            {
                "id": "c",
                "text": "Prevent osteoporosis"
            },
            {
                "id": "d",
                "text": "Improve sexual performance"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "d",
        "explanation": "Testosterone is primarily used in postmenopausal women specifically to improve sexual performance and libido."
    },
    {
        "id": "q22",
        "question": "22. About menopause clinical presentation. Which of the following statements about menopause symptom(s) do you consider correct?",
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
                "text": "All are correct"
            }
        ],
        "correctId": "e",
        "explanation": "Menopause presents with a wide spectrum of symptoms, including vasomotor, urogenital, sexual, and musculoskeletal (arthralgia) issues."
    },
    {
        "id": "q23",
        "question": "23. Regarding hormone therapy in menopausal females. Which of the following are serious health risks that have been associated with menopausal hormone therapy?",
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
        "explanation": "The most significant and well-documented serious risks of MHT include breast cancer and cardiovascular disease."
    },
    {
        "id": "q24",
        "question": "24. Which one of the following is FDA approved for the treatment of moderate-to-severe dyspareunia and vaginal dryness in post menopause women:",
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
                "text": "Intermittent combined estrogen-progestogen treatment"
            },
            {
                "id": "e",
                "text": "Continuous Combined Estrogen-Progestogen treatment"
            }
        ],
        "correctId": "a",
        "explanation": "Ospemifene is an oral SERM specifically approved for managing moderate-to-severe dyspareunia caused by vulvovaginal atrophy."
    },
    {
        "id": "q25",
        "question": "25. A 66 years old woman is suffering from low mineral bone density and strong family history of breast cancer. What would be the best protective agent?",
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
        "explanation": "Raloxifene is ideal in this case as it increases bone mineral density while simultaneously reducing the risk of invasive breast cancer."
    },
    {
        "id": "q26",
        "question": "26. Dehydroepiandrosterone (DHEA) is a precursor hormone that can be converted into:",
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
                "text": "Estrogen, estradiol, and testosterone"
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
        "explanation": "DHEA serves as a metabolic precursor for the synthesis of both estrogens and androgens."
    },
    {
        "id": "q27",
        "question": "27. Combined hormonal contraceptives (CHCs) can be used in perimenopausal women. What is not a risk factor that prevent CHC using?",
        "options": [
            {
                "id": "a",
                "text": "impaired sleep quality"
            },
            {
                "id": "b",
                "text": "estrogen-dependent cancer"
            },
            {
                "id": "c",
                "text": "cardiovascular or cerebrovascular disease"
            },
            {
                "id": "d",
                "text": "diabetes"
            },
            {
                "id": "e",
                "text": "liver disease"
            }
        ],
        "correctId": "a",
        "explanation": "Impaired sleep quality is a symptom that might be treated by hormonal therapy, not a risk factor that prevents its use."
    },
    {
        "id": "q28",
        "question": "28. The following condition are absolute contraindication for hormonal replacement therapy EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Breast cancer"
            },
            {
                "id": "b",
                "text": "Osteoporosis"
            },
            {
                "id": "c",
                "text": "Acute liver disease"
            },
            {
                "id": "d",
                "text": "Endometrial cancer"
            },
            {
                "id": "e",
                "text": "Venous thromboembolism"
            }
        ],
        "correctId": "b",
        "explanation": "Osteoporosis is an indication (and benefit) of MHT, not a contraindication."
    },
    {
        "id": "q29",
        "question": "29. Retrospective diagnosis of menopause requires occurrence of amenorrhea for:",
        "options": [
            {
                "id": "a",
                "text": "Four months"
            },
            {
                "id": "b",
                "text": "Six months"
            },
            {
                "id": "c",
                "text": "Eight months"
            },
            {
                "id": "d",
                "text": "Ten months"
            },
            {
                "id": "e",
                "text": "Twelve months"
            }
        ],
        "correctId": "e",
        "explanation": "A definitive diagnosis of menopause requires 12 consecutive months of amenorrhea."
    },
    {
        "id": "q30",
        "question": "30. Hot flash is common in menopause. If it accompanied with sleep disturbance, the drug of choice will be:",
        "options": [
            {
                "id": "a",
                "text": "estrogen tab"
            },
            {
                "id": "b",
                "text": "EE cream"
            },
            {
                "id": "c",
                "text": "fluoxetine"
            },
            {
                "id": "d",
                "text": "clonidine"
            },
            {
                "id": "e",
                "text": "gabapentin"
            }
        ],
        "correctId": "e",
        "explanation": "Gabapentin is particularly useful for patients who have vasomotor symptoms that disrupt sleep, especially when taken in the evening."
    },
    {
        "id": "q31",
        "question": "31. A 60-year-old woman is interested in testosterone therapy. What is the MOST important information to discuss?",
        "options": [
            {
                "id": "a",
                "text": "Testosterone therapy is a safe and effective first-line treatment for hot flashes."
            },
            {
                "id": "b",
                "text": "testosterone can improve sexual function but may cause virilization (masculinization)."
            },
            {
                "id": "c",
                "text": "There is strong scientific evidence supporting the long-term safely."
            },
            {
                "id": "d",
                "text": "Testosterone is only available in topical formulations."
            },
            {
                "id": "e",
                "text": "Testosterone therapy is FDA-approved for the treatment of hot flashes."
            }
        ],
        "correctId": "b",
        "explanation": "While testosterone may benefit sexual function, patients must be warned about potential virilizing side effects."
    }
],
  'contraception': [
    {
        "id": "q1",
        "question": "1. The followings are true for the intrauterine devices (IUD), except:",
        "options": [
            {
                "id": "a",
                "text": "The risk of pelvic inflammatory diseases among users is high."
            },
            {
                "id": "b",
                "text": "Efficacy rates are greater than 99%."
            },
            {
                "id": "c",
                "text": "Copper IUD can be left in place for 10 years."
            },
            {
                "id": "d",
                "text": "Hormonal IUD causes reduction in menstrual blood loss."
            }
        ],
        "correctId": "a",
        "explanation": "While older models had risks, the current risk of pelvic inflammatory disease among modern IUD users is actually low,."
    },
    {
        "id": "q2",
        "question": "2. A noncontraceptive benefit of oral contraceptives:",
        "options": [
            {
                "id": "a",
                "text": "Suppress menstrual regularity."
            },
            {
                "id": "b",
                "text": "Elevate menstrual blood loss."
            },
            {
                "id": "c",
                "text": "Reduce iron deficiency anemia."
            },
            {
                "id": "d",
                "text": "Maximize menstrual cramps and ovulatory pain."
            }
        ],
        "correctId": "c",
        "explanation": "Combined hormonal contraceptives (CHCs) provide benefits such as improved menstrual regularity, decreased blood loss, and a corresponding reduction in iron deficiency anemia,."
    },
    {
        "id": "q3",
        "question": "3. The followings are disadvantages of spermicides and spermicide implanted barrier techniques except:",
        "options": [
            {
                "id": "a",
                "text": "Expensive and available with a prescription."
            },
            {
                "id": "b",
                "text": "They offer no protection against STDs."
            },
            {
                "id": "c",
                "text": "High user failure rate."
            },
            {
                "id": "d",
                "text": "May increase the transmission of HIV."
            }
        ],
        "correctId": "a",
        "explanation": "Spermicides and sponges are actually available over the counter without a prescription,."
    },
    {
        "id": "q4",
        "question": "4. A serious symptom in which a woman should stop immediately taking combined hormonal contraceptives (CHC) is:",
        "options": [
            {
                "id": "a",
                "text": "Nonvascular headache."
            },
            {
                "id": "b",
                "text": "Severe pains in chest, left arm, and neck."
            },
            {
                "id": "c",
                "text": "Galactorrhea."
            },
            {
                "id": "d",
                "text": "Depression."
            }
        ],
        "correctId": "b",
        "explanation": "According to the ACHES mnemonic, severe chest pain is a warning sign of a potentially serious complication that requires immediate discontinuation,."
    },
    {
        "id": "q5",
        "question": "5. Related to long-acting injectable and implantable contraceptives:",
        "options": [
            {
                "id": "a",
                "text": "Contraceptive failure rates with long-acting progestin contraception are higher than with CHC."
            },
            {
                "id": "b",
                "text": "These drugs should be given to patients who desire to be pregnant again."
            },
            {
                "id": "c",
                "text": "Women who particularly benefit from progestin-only methods, are those who are lactating."
            },
            {
                "id": "e",
                "text": "None of the above."
            }
        ],
        "correctId": "c",
        "explanation": "Lactating women specifically benefit from progestin-only methods because they avoid the potential negative effects of estrogen on milk production,,."
    },
    {
        "id": "q6",
        "question": "6. A contraindication of combined hormonal contraceptives (CHC):",
        "options": [
            {
                "id": "a",
                "text": "Hypotension."
            },
            {
                "id": "b",
                "text": "Nonsmoking women and age \u226435."
            },
            {
                "id": "c",
                "text": "Iron deficiency anemia."
            },
            {
                "id": "d",
                "text": "Breast Cancer."
            }
        ],
        "correctId": "d",
        "explanation": "A current or past history of breast cancer is considered an absolute contraindication to the use of hormonal therapy, including CHCs,."
    },
    {
        "id": "q7",
        "question": "7. Many methods exist for initiating oral contraceptive pills. The method of initiating the first pill on the same day of the physician visit is:",
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
        "explanation": "The quick-start method involves initiating the contraceptive on the day of the clinical visit, regardless of the timing of the menstrual cycle,."
    },
    {
        "id": "q8",
        "question": "8. What are the hormones produced by stimulation of GnRH to the anterior pituitary gland?",
        "options": [
            {
                "id": "a",
                "text": "Follicle-stimulating hormone (FSH) and luteinizing hormone (LH)"
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
                "text": "Aldosterone and cortisol"
            }
        ],
        "correctId": "a",
        "explanation": "The hypothalamus secretes GnRH, which stimulates the anterior pituitary to produce and release FSH and LH,."
    },
    {
        "id": "q9",
        "question": "9. Emergency contraceptives should be taken after unprotected intercourse to prevent unintended pregnancy. Ulipristal should be taken within:",
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
                "text": "5 days (120 hours)"
            },
            {
                "id": "d",
                "text": "10 days"
            },
            {
                "id": "e",
                "text": "14 days"
            }
        ],
        "correctId": "c",
        "explanation": "Ulipristal is a prescription medication that is effective when taken as a single dose within 120 hours (5 days) of unprotected intercourse,,."
    },
    {
        "id": "q10",
        "question": "10. All of the following contraception methods can prevent pregnancy by inhibiting sperm from reaching a mature ovum EXCEPT:",
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
        "explanation": "Barrier methods (A, B, D, E) physically block sperm; the transdermal patch works primarily by inhibiting ovulation via hormonal suppression,."
    },
    {
        "id": "q11",
        "question": "11. The followings should be taken into consideration for a woman over 35 years of age while taking combined hormonal contraceptives (CHCs) EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Use CHCs containing less than 50 mcg estrogen."
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
        "explanation": "Synthetic progestins can decrease HDL and increase LDL; therefore, CHCs must be used with caution in women with significant dyslipidemia rather than being \"safe for all\",,."
    },
    {
        "id": "q12",
        "question": "12. Sabria is an overweight 30-year white woman who needs to use a contraceptive. All the following factors should be considered before selecting the contraceptive method/therapy except:",
        "options": [
            {
                "id": "a",
                "text": "Woman weight"
            },
            {
                "id": "b",
                "text": "Woman age"
            },
            {
                "id": "c",
                "text": "Woman ethnicity"
            },
            {
                "id": "d",
                "text": "Risk for sexual transmitted disease"
            },
            {
                "id": "e",
                "text": "Planning for future pregnancies"
            }
        ],
        "correctId": "c",
        "explanation": "While weight and age are critical for safety and efficacy (e.g., VTE risk), ethnicity is not a primary factor in selecting a standard contraceptive method,,."
    },
    {
        "id": "q13",
        "question": "13. Regarding emergency contraception, all the following treatments are true, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Ulipristal"
            },
            {
                "id": "b",
                "text": "Levonorgestrel"
            },
            {
                "id": "c",
                "text": "A copper IUD"
            },
            {
                "id": "d",
                "text": "Higher doses of combined oral contraceptives"
            },
            {
                "id": "e",
                "text": "Mifepristone"
            }
        ],
        "correctId": "e",
        "explanation": "Mifepristone is used for pregnancy termination, not as a standard first-line emergency contraceptive,."
    },
    {
        "id": "q14",
        "question": "14. Diaphragms and cervical caps are effective barriers. All of the following statements are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "They should be inserted up to 6 hours before intercourse."
            },
            {
                "id": "b",
                "text": "They must be left in place for at least 6 hours after."
            },
            {
                "id": "c",
                "text": "Diaphragms & Cervical caps can protect against STIs including HIV."
            },
            {
                "id": "d",
                "text": "Diaphragm should not be left for > 24 hours (risk of TSS)."
            },
            {
                "id": "e",
                "text": "Cervical cap should not remain in place for > 48 hours (risk of TSS)."
            }
        ],
        "correctId": "c",
        "explanation": "In general, these barrier methods do not provide protection against STIs or HIV,."
    },
    {
        "id": "q15",
        "question": "15. Mrs. Right is a lactating mother with a one-year-old baby. Which one of the following do you recommend her to avoid?",
        "options": [
            {
                "id": "a",
                "text": "Mini-pill"
            },
            {
                "id": "b",
                "text": "Norplant"
            },
            {
                "id": "c",
                "text": "DMPA"
            },
            {
                "id": "d",
                "text": "Combined oral contraceptive pill"
            },
            {
                "id": "e",
                "text": "Low estrogen combined oral contraceptive pill"
            }
        ],
        "correctId": "d",
        "explanation": "Estrogen-containing pills (CHCs) should be avoided or used with caution in breastfeeding women because they may interfere with milk production,."
    },
    {
        "id": "q16",
        "question": "16. How long should a woman use backup contraception if she missed a progestin-only pill for more than 3 hours?",
        "options": [
            {
                "id": "a",
                "text": "No need to use backup methods"
            },
            {
                "id": "b",
                "text": "Take her missed pill immediately and use condom for the next 24 hours"
            },
            {
                "id": "c",
                "text": "Take her missed pill immediately and use Condom for the next 48 hours"
            },
            {
                "id": "d",
                "text": "Take her missed pill immediately and use Condom for the 72 hours"
            },
            {
                "id": "e",
                "text": "Take her missed pill immediately and use Condom until the next period starts"
            }
        ],
        "correctId": "c",
        "explanation": "Because of their short half-life, minipills require a 48-hour backup period if a dose is delayed by more than 3 hours,,."
    },
    {
        "id": "q17",
        "question": "17. Which one of the following drugs may interact with CHCs pills and most clearly decreases its efficacy?",
        "options": [
            {
                "id": "a",
                "text": "Rifampicin"
            },
            {
                "id": "b",
                "text": "Amoxycillin"
            },
            {
                "id": "c",
                "text": "Ceftriaxone"
            },
            {
                "id": "d",
                "text": "Cefalexin"
            },
            {
                "id": "e",
                "text": "Carbamazole"
            }
        ],
        "correctId": "a",
        "explanation": "Rifampin (Rifampicin) is a strong enzyme inducer that significantly reduces the efficacy of CHCs,."
    },
    {
        "id": "q18",
        "question": "18. In menstrual cycle pathophysiology, the most useful predictor of approaching ovulation is:",
        "options": [
            {
                "id": "a",
                "text": "Androgen"
            },
            {
                "id": "b",
                "text": "LH surge"
            },
            {
                "id": "c",
                "text": "Aldosterone"
            },
            {
                "id": "d",
                "text": "Hydrocortisone"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "b",
        "explanation": "The midcycle LH surge is the most clinically reliable predictor that ovulation will occur within 24\u201336 hours,."
    },
    {
        "id": "q19",
        "question": "19. Regarding warning signs (ACHES) for women taking CHCs that require immediate discontinuation, all of the following are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Abdominal gases"
            },
            {
                "id": "b",
                "text": "Chest pain"
            },
            {
                "id": "c",
                "text": "Headaches"
            },
            {
                "id": "d",
                "text": "Eye problems"
            },
            {
                "id": "e",
                "text": "Severe leg pain"
            }
        ],
        "correctId": "a",
        "explanation": "The \"A\" in the ACHES mnemonic stands for Abdominal pain, not abdominal gases,."
    },
    {
        "id": "q20",
        "question": "20. Regarding pregnancy termination, all the following are true about mifepristone EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "It is a prostaglandin 1 analog"
            },
            {
                "id": "b",
                "text": "It is usually administered orally"
            },
            {
                "id": "c",
                "text": "It is contraindicated in patients on anticoagulants"
            },
            {
                "id": "d",
                "text": "It can be used alone"
            },
            {
                "id": "e",
                "text": "It can be used in combination with misoprostol and methotrexate"
            }
        ],
        "correctId": "a",
        "explanation": "Mifepristone is a progesterone receptor modulator; misoprostol is the prostaglandin analog,."
    },
    {
        "id": "q21",
        "question": "21. The most effective method of contraception is:",
        "options": [
            {
                "id": "a",
                "text": "Levonorgestrel Intra-Uterine device"
            },
            {
                "id": "b",
                "text": "Medroxyprogesterone"
            },
            {
                "id": "c",
                "text": "Condom"
            },
            {
                "id": "d",
                "text": "Combined hormonal contraceptives pills"
            },
            {
                "id": "e",
                "text": "Contraceptive patch"
            }
        ],
        "correctId": "a",
        "explanation": "IUDs and implants are categorized as the most effective reversible methods, with failure rates under 1%,,."
    },
    {
        "id": "q22",
        "question": "22. When should the NuvaRing be inserted for the first time?",
        "options": [
            {
                "id": "a",
                "text": "On or prior to the third day of the cycle"
            },
            {
                "id": "b",
                "text": "Anytime during the menstrual cycle"
            },
            {
                "id": "c",
                "text": "On or prior to the seventh day of the cycle"
            },
            {
                "id": "d",
                "text": "On or prior to the fifth day of the cycle"
            },
            {
                "id": "e",
                "text": "On or prior to the ninth day of the cycle"
            }
        ],
        "correctId": "d",
        "explanation": "For the first use, the NuvaRing should be inserted on or before the fifth day of the menstrual cycle,,."
    },
    {
        "id": "q23",
        "question": "23. Progestin-only contraception is recommended in all of the following conditions EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Women with migraine associated with aura"
            },
            {
                "id": "b",
                "text": "Obese women over 35 years"
            },
            {
                "id": "c",
                "text": "Women over 35 year who are smoking 15 or more cigarettes per day"
            },
            {
                "id": "d",
                "text": "Women with personal history of breast cancer"
            }
        ],
        "correctId": "d",
        "explanation": "A history of breast cancer is a contraindication for all hormonal contraceptives, including progestin-only methods like DMPA,."
    },
    {
        "id": "q24",
        "question": "24. Concerning combined hormonal contraceptive (CHC), all of the following are false EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "With typical use of CHC, its efficacy is more than 99%"
            },
            {
                "id": "b",
                "text": "Use of CHCs containing less than 50 mcg estrogen may be considered in healthy smoking women older than 35 years"
            },
            {
                "id": "c",
                "text": "CHC could be safely used for women with blood pressure \u2265 160/100 mm Hg"
            },
            {
                "id": "d",
                "text": "The progestin-only \u201cminipills\u201d tend to be more effective than CHCs"
            },
            {
                "id": "e",
                "text": "The mechanism for the increased cardiovascular disease in CHC users is believed to be thromboembolic and thrombotic changes, not atherosclerosis."
            }
        ],
        "correctId": "e",
        "explanation": "Estrogens increase the production of coagulation factors, making thrombosis the primary mechanism for increased cardiovascular risk,,."
    },
    {
        "id": "q25",
        "question": "25. Emergency contraception rules to prevent unintended pregnancy after unprotected sexual intercourse include all except:",
        "options": [
            {
                "id": "a",
                "text": "Levonorgestrel is a regimen of choice for non-obese women."
            },
            {
                "id": "b",
                "text": "Non-hormonal contraceptive methods should be used after EC for at least 7 days."
            },
            {
                "id": "c",
                "text": "Emergency contraception is not recommended in breastfeeding women."
            },
            {
                "id": "d",
                "text": "Copper IUD is another option, but with high failure rate when inserted after 3 days of intercourse."
            },
            {
                "id": "e",
                "text": "Single dose selective progesterone receptor modulator can cover unprotected intercourse for about 5 days."
            }
        ],
        "correctId": "d",
        "explanation": "The copper IUD remains highly effective as emergency contraception for up to 5 days after intercourse,."
    },
    {
        "id": "q26",
        "question": "26. Merina (Mirena) has an indication other than Contraception which is:",
        "options": [
            {
                "id": "a",
                "text": "Amenorrhea"
            },
            {
                "id": "b",
                "text": "Menorrhagia"
            },
            {
                "id": "c",
                "text": "Endometriosis"
            },
            {
                "id": "d",
                "text": "Uterine fibroid"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "b",
        "explanation": "The levonorgestrel IUD is frequently used to treat menorrhagia (heavy menstrual bleeding),."
    },
    {
        "id": "q27",
        "question": "27. There are many forms of oral CHC pills. The form that contains 84 active pills followed by 7-day placebo pills is:",
        "options": [
            {
                "id": "a",
                "text": "Minipills"
            },
            {
                "id": "b",
                "text": "Monophasic pills"
            },
            {
                "id": "c",
                "text": "Biphasic pills"
            },
            {
                "id": "d",
                "text": "Triphasic pills"
            },
            {
                "id": "e",
                "text": "Extended cycle pills"
            }
        ],
        "correctId": "e",
        "explanation": "Extended-cycle regimens increase the number of active pills to 84 days, reducing the frequency of withdrawal bleeding,."
    },
    {
        "id": "q28",
        "question": "28. Which of the following should be considered for a woman with a history of migraines with aura:",
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
                "text": "Combined estrogen plus progesterone pills"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "c",
        "explanation": "Women with migraine with aura are at an increased risk of stroke and should not use estrogen-containing CHCs,."
    },
    {
        "id": "q29",
        "question": "29. T.D is a 37-year-old smoker (15-20 cigarettes per day). What is the best contraception method?",
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
        "explanation": "Smoking \u226515 cigarettes per day in women over 35 is an absolute contraindication for CHCs,."
    },
    {
        "id": "q30",
        "question": "30. Which type of barrier should not be left in place for more than 24 hours because of the risk of toxic shock syndrome?",
        "options": [
            {
                "id": "a",
                "text": "Diaphragms"
            },
            {
                "id": "b",
                "text": "Cervical cap"
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
        "explanation": "Diaphragms must be removed within 24 hours to minimize the risk of TSS,."
    },
    {
        "id": "q31",
        "question": "31. The following are the disadvantages of combined oral contraceptive pills, EXCEPT:",
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
                "text": "Not be suitable for breastfeeding women."
            },
            {
                "id": "e",
                "text": "Does not protect against sexual transmitted infections."
            }
        ],
        "correctId": "c",
        "explanation": "Oral contraceptives actually provide a protective benefit and reduce the risk of endometrial and ovarian cancers,."
    },
    {
        "id": "q32",
        "question": "32. The primary contraceptive mechanism of the Levonorgestrel IUD is through:",
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
        "explanation": "While it also thickens cervical mucus, the progestin-releasing IUD causes significant endometrial suppression and atrophy,."
    },
    {
        "id": "q33",
        "question": "33. S A, is a 29 y o woman weighing 98 kg (ideal body weight 60Kg) with poor adherence. What is the best contraception?",
        "options": [
            {
                "id": "a",
                "text": "Etonogestrel implant"
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
                "text": "Mini pills"
            },
            {
                "id": "e",
                "text": "NuvaRing"
            }
        ],
        "correctId": "b",
        "explanation": "For obese patients with adherence issues, long-acting injections like DMPA are effective and less likely to fail than low-dose oral options,."
    },
    {
        "id": "q34",
        "question": "34. Which of these statements about the Twirla transdermal patch is correct?",
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
        "explanation": "The Twirla patch is specifically formulated to deliver 30 mcg of EE and 120 mcg of levonorgestrel every 24 hours,."
    },
    {
        "id": "q35",
        "question": "35. A 36-year-old female with a strong family history of breast cancer wishes to use CHCs. What is your suggestion?",
        "options": [
            {
                "id": "a",
                "text": "These pills are absolutely contraindicated"
            },
            {
                "id": "b",
                "text": "Caution but safe to use"
            },
            {
                "id": "c",
                "text": "Safe but additional contraceptive method is required"
            },
            {
                "id": "d",
                "text": "Safe in low dose estrogen"
            },
            {
                "id": "e",
                "text": "It can be used safely without restriction"
            }
        ],
        "correctId": "b",
        "explanation": "Family history alone is not a contraindication; however, clinicians should exercise caution and discuss alternative risks,,."
    },
    {
        "id": "q36",
        "question": "36. A woman weighing 120 kg (265 lbs) is interested in a transdermal contraceptive patch. Which is the most suitable choice?",
        "options": [
            {
                "id": "a",
                "text": "Xulane"
            },
            {
                "id": "b",
                "text": "Twirla"
            },
            {
                "id": "c",
                "text": "Medroxyprogesterone acetate patch"
            },
            {
                "id": "d",
                "text": "All transdermal patches are not recommended"
            },
            {
                "id": "e",
                "text": "Both Xulane and Twirla are suitable"
            }
        ],
        "correctId": "d",
        "explanation": "Transdermal patches have decreased efficacy in individuals weighing over 90 kg or with a BMI \u2265 30,,."
    },
    {
        "id": "q37",
        "question": "37. Phexxi prevents pregnancy by:",
        "options": [
            {
                "id": "a",
                "text": "Inhibiting sperm from reaching a mature ovum"
            },
            {
                "id": "b",
                "text": "Preventing a fertilized ovum from implanting in the endometrium"
            },
            {
                "id": "c",
                "text": "Blocking the LH surge"
            },
            {
                "id": "d",
                "text": "Inducing withdrawal menstruation"
            },
            {
                "id": "e",
                "text": "Providing constant amount of both estrogen and progesterone"
            }
        ],
        "correctId": "a",
        "explanation": "As a non-hormonal vaginal gel, it acts as a barrier/spermicide to prevent sperm from reaching the ovum,,."
    },
    {
        "id": "q38",
        "question": "38. What should be considered for individuals at increased risk of thromboembolism?",
        "options": [
            {
                "id": "a",
                "text": "High-dose oral estrogen contraceptives containing older progestins"
            },
            {
                "id": "b",
                "text": "Low-dose oral estrogen contraceptives containing older progestins"
            },
            {
                "id": "c",
                "text": "High-dose oral estrogen contraceptives containing newer progestins"
            },
            {
                "id": "d",
                "text": "Low-dose oral estrogen contraceptives containing newer progestins"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "b",
        "explanation": "To minimize VTE risk, low-dose estrogen and older-generation progestins are preferred, as newer progestins may have a slightly higher risk of thrombosis,."
    },
    {
        "id": "q39",
        "question": "39. E.R, a 27-year-old with a history of PID, wants a LARC method that she doesn't have to think about daily. What is the most appropriate option?",
        "options": [
            {
                "id": "a",
                "text": "Injectable progestin (DMPA)"
            },
            {
                "id": "b",
                "text": "Vaginal ring (NuvaRing)"
            },
            {
                "id": "c",
                "text": "Transdermal patch (Xulane)"
            },
            {
                "id": "d",
                "text": "Subdermal progestin implant (Nexplanon)"
            },
            {
                "id": "e",
                "text": "Intrauterine device (IUD)"
            }
        ],
        "correctId": "d",
        "explanation": "While IUDs are effective, a subdermal implant is a highly effective LARC that avoids any concerns related to her history of pelvic inflammatory disease,,."
    }
],

  'prostate': [
    {
        "id": "q1",
        "question": "1. For evaluation of therapeutic outcomes in a patient treated for prostate cancer, which one of the following markers can be used for monitoring response to therapy?",
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
                "text": "CA-125"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "a",
        "explanation": "While its use in early detection is limited by other conditions like BPH, PSA is a useful marker for monitoring response to therapy in patients already diagnosed with prostate cancer,."
    },
    {
        "id": "q2",
        "question": "2. A patient was diagnosed with prostate cancer and was prescribed degarelix. A major advantage of degarelix over LHRH agonists is:",
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
        "explanation": "Unlike LHRH agonists, which cause a transient increase in testosterone (flare), GnRH antagonists like degarelix bind reversibly to receptors to reduce testosterone quickly without a tumor flare,."
    },
    {
        "id": "q3",
        "question": "3. Many hormones are involved in regulating prostate gland function. Which of the following is/are involved?",
        "options": [
            {
                "id": "a",
                "text": "Adrenocorticotropic hormone (ACTH)"
            },
            {
                "id": "b",
                "text": "Follicle-stimulating hormone (FSH)"
            },
            {
                "id": "c",
                "text": "Luteinizing hormone-releasing hormone (LHRH)"
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
        "explanation": "The hormonal regulation of the prostate involves a complex axis including LHRH from the hypothalamus, LH and FSH from the pituitary, and ACTH influencing adrenal androgen production,."
    },
    {
        "id": "q4",
        "question": "4. Regarding the management of prostate cancer, which of the following regarding the combination of flutamide and leuprolide is true?",
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
        "explanation": "First-generation antiandrogens like flutamide are indicated for advanced prostate cancer only when combined with an LHRH agonist like leuprolide (Combined Androgen Blockade),,."
    },
    {
        "id": "q5",
        "question": "5. Which of the following maneuvers is considered a non-pharmacological therapy for prostate cancer?",
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
        "explanation": "Early-stage and advanced disease can be managed through observation (watchful waiting), surgery (orchiectomy/prostatectomy), or radiation,,."
    },
    {
        "id": "q6",
        "question": "6. The followings are correct regarding the pathophysiology of prostate cancer EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Well-differentiated tumors grow slowly."
            },
            {
                "id": "b",
                "text": "Adenocarcinoma cells include 95% of cases."
            },
            {
                "id": "c",
                "text": "The kidney is the most organ involved initially in metastasis."
            },
            {
                "id": "d",
                "text": "The rationale for hormone therapy is based on the effect of androgen on the growth."
            },
            {
                "id": "e",
                "text": "Localized prostate cancer is curable by surgery or radiotherapy."
            }
        ],
        "correctId": "c",
        "explanation": "Skeletal metastases (bone) are the most common sites of distant spread; visceral organs like the kidney are not usually involved initially,."
    },
    {
        "id": "q7",
        "question": "7. A patient was diagnosed to have locally invasive prostate cancer. Which one of the following symptoms is expected?",
        "options": [
            {
                "id": "a",
                "text": "Bone pain"
            },
            {
                "id": "b",
                "text": "Peripheral edema"
            },
            {
                "id": "c",
                "text": "Weight loss"
            },
            {
                "id": "d",
                "text": "Urinary frequency and hesitancy"
            },
            {
                "id": "e",
                "text": "The patient will be asymptomatic"
            }
        ],
        "correctId": "d",
        "explanation": "Locally invasive disease is associated with ureteral impingement causing alterations in micturition, such as frequency and hesitancy; bone pain and weight loss are signs of advanced/metastatic disease,,."
    },
    {
        "id": "q8",
        "question": "8. All the following medications can cause castration EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Degarelix"
            },
            {
                "id": "b",
                "text": "Leuprolide"
            },
            {
                "id": "c",
                "text": "Zoledronic acid"
            },
            {
                "id": "d",
                "text": "Triptorelin"
            },
            {
                "id": "e",
                "text": "Goserelin"
            }
        ],
        "correctId": "c",
        "explanation": "LHRH agonists (leuprolide, triptorelin, goserelin) and GnRH antagonists (degarelix) are used for androgen ablation (castration). Zoledronic acid is an anti-resorptive agent used to reduce the risk of skeletal fractures,,."
    },
    {
        "id": "q9",
        "question": "9. Which antiandrogen is FDA approved for CRPC and can be used as first-line to delay chemotherapy in both nonmetastatic and metastatic disease?",
        "options": [
            {
                "id": "a",
                "text": "Bicalutamide"
            },
            {
                "id": "b",
                "text": "Enzalutamide"
            },
            {
                "id": "c",
                "text": "Nilutamide"
            },
            {
                "id": "d",
                "text": "Flutamide"
            },
            {
                "id": "e",
                "text": "Abiraterone"
            }
        ],
        "correctId": "b",
        "explanation": "Enzalutamide is a second-generation antiandrogen used to delay chemotherapy in non-metastatic, metastatic castration-na\u00efve, and metastatic CRPC,."
    },
    {
        "id": "q10",
        "question": "10. Which is an effective method to decrease the tumor flare syndrome associated with the first few weeks of LHRH agonist therapy?",
        "options": [
            {
                "id": "a",
                "text": "Start the LHRH agonist with a loading dose"
            },
            {
                "id": "b",
                "text": "Start an antiandrogen before the LHRH agonist and continue for 3 to 4 weeks"
            },
            {
                "id": "c",
                "text": "Start the LHRH agonist with a 50% dose decrease"
            },
            {
                "id": "d",
                "text": "Alternate LHRH agonists"
            },
            {
                "id": "e",
                "text": "Maintain testosterone levels above castration levels"
            }
        ],
        "correctId": "b",
        "explanation": "To minimize initial tumor flare caused by the surge in testosterone from LHRH agonists, an antiandrogen is started prior to and continued during the first weeks of therapy,."
    },
    {
        "id": "q11",
        "question": "11. What is the most common pathologic cell type of prostate cancer?",
        "options": [
            {
                "id": "a",
                "text": "Sarcoma"
            },
            {
                "id": "b",
                "text": "Carcinoid tumor"
            },
            {
                "id": "c",
                "text": "Lymphoma"
            },
            {
                "id": "d",
                "text": "Melanoma"
            },
            {
                "id": "e",
                "text": "Adenocarcinoma"
            }
        ],
        "correctId": "e",
        "explanation": "More than 95% of prostate cancer cases are histologically classified as adenocarcinoma,."
    },
    {
        "id": "q12",
        "question": "12. All the following can be indicated for the treatment of castrate-resistant prostate cancer (CRPC) EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Docetaxel"
            },
            {
                "id": "b",
                "text": "Radium-223"
            },
            {
                "id": "c",
                "text": "Apalutamide"
            },
            {
                "id": "d",
                "text": "Trastuzumab"
            },
            {
                "id": "e",
                "text": "Enzalutamide"
            }
        ],
        "correctId": "d",
        "explanation": "Trastuzumab is used for HER2-positive breast cancer; it is not a standard treatment for prostate cancer. CRPC treatments include taxanes (docetaxel), alpha emitters (Radium-223), and antiandrogens (apalutamide, enzalutamide),,,."
    },
    {
        "id": "q13",
        "question": "13. Initial treatment for a patient diagnosed with stage 3 prostate cancer depends on all of the following factors EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Life expectancy"
            },
            {
                "id": "b",
                "text": "Symptoms"
            },
            {
                "id": "c",
                "text": "Gleason score"
            },
            {
                "id": "d",
                "text": "Comorbid conditions"
            },
            {
                "id": "e",
                "text": "Disease stage"
            }
        ],
        "correctId": "d",
        "explanation": "According to the source, initial treatment decisions are primarily based on disease stage, Gleason score, symptoms, and life expectancy,."
    },
    {
        "id": "q14",
        "question": "14. A 55-year-old was diagnosed with prostate cancer and underwent prostatectomy. He may experience all the following EXCEPT:",
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
        "explanation": "Cystitis is listed as an acute complication of radiation therapy, whereas strictures, incontinence, and lymphoceles are complications of radical prostatectomy,."
    },
    {
        "id": "q15",
        "question": "15. A 64-year-old with newly diagnosed metastatic prostate cancer presents to the clinic. Which of the following is considered standard first-line therapy?",
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
        "explanation": "The initial treatment modality for advanced (metastatic) prostate cancer is androgen ablation, with LHRH agonists like leuprolide being a first-choice drug treatment,,."
    },
    {
        "id": "q16",
        "question": "16. Advanced disease is characterized by all of the following EXCEPT:",
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
        "correctId": "b",
        "explanation": "Urinary frequency is typically a symptom of locally invasive cancer. Advanced disease is characterized by bone pain, edema from lymphatic obstruction, and systemic signs like anemia,."
    },
    {
        "id": "q17",
        "question": "17. Regarding screening and prevention, all the following statements are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Guidelines do not recommend dutasteride for chemoprevention."
            },
            {
                "id": "b",
                "text": "Screening for prostate cancer is important and recommended."
            },
            {
                "id": "c",
                "text": "Screening every 5 years may be adequate."
            },
            {
                "id": "d",
                "text": "Screening should be done no more than every 2 years."
            },
            {
                "id": "e",
                "text": "Guidelines do not recommend finasteride for chemoprevention."
            }
        ],
        "correctId": "b",
        "explanation": "PSA and DRE are no longer routinely recommended without a discussion of risks vs. benefits; the AUA does not recommend routine screening for those of average risk between ages 40-54,."
    },
    {
        "id": "q18",
        "question": "18. Which statement regarding the GnRH antagonist relugolix is true?",
        "options": [
            {
                "id": "a",
                "text": "It acts as a GnRH agonist."
            },
            {
                "id": "b",
                "text": "It can cause tumor flare up."
            },
            {
                "id": "c",
                "text": "It reduces testosterone in 28 days."
            },
            {
                "id": "d",
                "text": "It is administered subcutaneously."
            },
            {
                "id": "e",
                "text": "It can cause hyperglycemia."
            }
        ],
        "correctId": "e",
        "explanation": "Relugolix is an oral agent that does not cause flare. One of its common toxicities is hyperglycemia,."
    },
    {
        "id": "q19",
        "question": "19. All the following are suitable for treating metastatic castrate-resistant prostate cancer (mCRPC) EXCEPT:",
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
        "explanation": "Darolutamide is specifically approved for non-metastatic CRPC,. The other agents are used for metastatic disease."
    },
    {
        "id": "q20",
        "question": "20. Which of the following is not a chronic complication of radiation therapy?",
        "options": [
            {
                "id": "a",
                "text": "Proctitis"
            },
            {
                "id": "b",
                "text": "Incontinence"
            },
            {
                "id": "c",
                "text": "Enteritis"
            },
            {
                "id": "d",
                "text": "Hematuria"
            },
            {
                "id": "e",
                "text": "Urethral stricture"
            }
        ],
        "correctId": "d",
        "explanation": "Hematuria is categorized as an acute complication of radiation, while the others can be chronic,."
    },
    {
        "id": "q21",
        "question": "21. Which therapy can be considered in men with mCRPC who have BRCA1 or BRCA2 gene alterations?",
        "options": [
            {
                "id": "a",
                "text": "Immunotherapy"
            },
            {
                "id": "b",
                "text": "Radiotherapy"
            },
            {
                "id": "c",
                "text": "Chemotherapy"
            },
            {
                "id": "d",
                "text": "Targeted therapy with PARP inhibitors"
            },
            {
                "id": "e",
                "text": "Chemotherapy and Radiotherapy"
            }
        ],
        "correctId": "d",
        "explanation": "Men with BRCA1/2 alterations in metastatic CRPC are candidates for PARP inhibitors like olaparib and rucaparib,."
    },
    {
        "id": "q22",
        "question": "22. What is the recommended initial treatment for patients with impending spinal cord compression due to advanced prostate cancer?",
        "options": [
            {
                "id": "a",
                "text": "Orchiectomy"
            },
            {
                "id": "b",
                "text": "Radical prostatectomy"
            },
            {
                "id": "c",
                "text": "Observation"
            },
            {
                "id": "d",
                "text": "Radical prostatectomy with radiation"
            },
            {
                "id": "e",
                "text": "Radiation therapy"
            }
        ],
        "correctId": "a",
        "explanation": "Orchiectomy (bilateral) is the preferred initial treatment for patients with impending spinal cord compression because it rapidly reduces androgens,."
    }
],
  'leukemia': [
    {
        "id": "q1",
        "question": "1. Chronic myeloid leukemia (CML) is a myeloproliferative disorder characterized by:",
        "options": [
            {
                "id": "a",
                "text": "unregulated stem cell proliferation in the bone marrow"
            },
            {
                "id": "b",
                "text": "an increase in mature granulocytes in the peripheral blood"
            },
            {
                "id": "c",
                "text": "very high leukocyte counts (>100,000/mm\u00b3)"
            },
            {
                "id": "d",
                "text": "all of the above"
            }
        ],
        "correctId": "d",
        "explanation": "CML is characterized by the unregulated proliferation of cells in the bone marrow, resulting in high white blood cell counts and an abundance of mature granulocytes in the blood."
    },
    {
        "id": "q2",
        "question": "2. Primary chemotherapy in the case of leukemia is referred to as:",
        "options": [
            {
                "id": "a",
                "text": "Adjuvant chemotherapy"
            },
            {
                "id": "b",
                "text": "Neoadjuvant chemotherapy"
            },
            {
                "id": "c",
                "text": "Induction chemotherapy"
            },
            {
                "id": "d",
                "text": "Maintenance chemotherapy"
            }
        ],
        "correctId": "c",
        "explanation": "The initial phase of treatment intended to induce a complete remission is known as induction therapy."
    },
    {
        "id": "q3",
        "question": "3. Indications for treatment initiation in Chronic lymphocytic leukemia (CLL) include the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "significant lymphocytosis"
            },
            {
                "id": "b",
                "text": "progressive disease demonstrated by lymphadenopathy, hepatomegaly, splenomegaly"
            },
            {
                "id": "c",
                "text": "persistent B symptoms (fever, night sweats, and weight loss)"
            },
            {
                "id": "d",
                "text": "recurrent infection"
            }
        ],
        "correctId": "a",
        "explanation": "While lymphocytosis is a feature of CLL, treatment is generally reserved for patients with progressive marrow failure, symptomatic organomegaly, or significant constitutional symptoms rather than just a high lymphocyte count alone."
    },
    {
        "id": "q4",
        "question": "4. Acute leukemia is characterized by the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "The expansion and differentiation arrest of immature hematopoietic cells."
            },
            {
                "id": "b",
                "text": "Large numbers of early progenitor cells (blasts) appear in the bone marrow."
            },
            {
                "id": "c",
                "text": "The bone marrow produces large numbers of more mature blood cells."
            },
            {
                "id": "d",
                "text": "Leukemic blasts develop a growth advantage that leads to failure of the bone marrow."
            }
        ],
        "correctId": "c",
        "explanation": "Acute leukemia is defined by the overproduction of immature cells (blasts) and a failure to differentiate into mature blood cells."
    },
    {
        "id": "q5",
        "question": "5. Chronic lymphocytic leukemia (CLL) is characterized by which of the followings:",
        "options": [
            {
                "id": "a",
                "text": "Overproduction of mature lymphocytes."
            },
            {
                "id": "b",
                "text": "Overproduction of mature granulocytes."
            },
            {
                "id": "c",
                "text": "Expansion and differentiation arrest of immature hematopoietic cells."
            },
            {
                "id": "d",
                "text": "All of the above"
            }
        ],
        "correctId": "a",
        "explanation": "Unlike acute leukemias, CLL involves the overproduction of mature-appearing, though dysfunctional, lymphocytes."
    },
    {
        "id": "q6",
        "question": "6. A patient diagnosed with CLL with del (17p). What is the best initial treatment for this patient?",
        "options": [
            {
                "id": "a",
                "text": "Fludarabine-based chemoimmunotherapy"
            },
            {
                "id": "b",
                "text": "Ibrutinib"
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
        "explanation": "Ibrutinib is a preferred oral frontline therapy for CLL patients, particularly those with high-risk features like the del(17p) mutation."
    },
    {
        "id": "q7",
        "question": "7. A patient diagnosed with resistant CML due to T315I mutation. Which one of the following TKIs is suitable for this patient?",
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
        "explanation": "Ponatinib is the only tyrosine kinase inhibitor (TKI) listed that is effective against the T315I mutation."
    },
    {
        "id": "q8",
        "question": "8. A patient diagnosed with CLL and treated by watchful waiting. All of the followings are indications for treatment initiation to CLL patients, EXCEPT:",
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
                "text": "Persistent B-symptoms"
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
        "explanation": "Active disease is indicated by a lymphocyte doubling time of less than 6 months; a time greater than 6 months suggests stable disease."
    },
    {
        "id": "q9",
        "question": "9. Regarding management of acute leukemia: What is the main indication of intrathecal methotrexate in a patient with acute lymphocytic/lymphoblastic leukemia (ALL)?",
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
                "text": "Prevention of respiratory failure."
            },
            {
                "id": "d",
                "text": "CNS prophylaxis against leukemia."
            },
            {
                "id": "e",
                "text": "Induction of complete remission."
            }
        ],
        "correctId": "d",
        "explanation": "Because CNS invasion is almost universal in ALL, all patients receive intrathecal chemotherapy for prophylaxis."
    },
    {
        "id": "q10",
        "question": "10. All the following are types of Leukemia EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Acute lymphoblastic leukemia"
            },
            {
                "id": "b",
                "text": "Acute myelocytic leukemia"
            },
            {
                "id": "c",
                "text": "Hodgkin lymphoma"
            },
            {
                "id": "d",
                "text": "Chronic myeloctic leukemia"
            },
            {
                "id": "e",
                "text": "None of above"
            }
        ],
        "correctId": "c",
        "explanation": "Hodgkin lymphoma is a malignancy of the lymphoid tissue and is distinct from leukemias."
    },
    {
        "id": "q11",
        "question": "11. Concerning leukemia, Anti-CD33 monoclonal antibody utilized for relapsed acute myeloid leukemia (AML) in adults and children?",
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
                "text": "Gilteritinib."
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
        "explanation": "Gemtuzumab ozogamicin is a targeted therapy specifically directed at the CD33 antigen found on AML cells."
    },
    {
        "id": "q12",
        "question": "12. The purpose of maintenance therapy for leukemia is to:",
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
        "correctId": "b",
        "explanation": "Maintenance therapy is a prolonged phase used after consolidation to eliminate any remaining leukemic cells and ensure a continuous complete remission (CCR)."
    },
    {
        "id": "q13",
        "question": "13. Which one of the following TKIs is associated with an increase in serious arterial thrombotic events?",
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
        "explanation": "Ponatinib has a known association with an increased risk of serious arterial thrombotic events."
    },
    {
        "id": "q14",
        "question": "14. A patient was diagnosed to have T-cell ALL. His case was shown to be refractory to first line treatment. Which one of the following therapies is suitable?",
        "options": [
            {
                "id": "a",
                "text": "Inotuzumab ozogamicin"
            },
            {
                "id": "b",
                "text": "Nelarabine"
            },
            {
                "id": "c",
                "text": "Tisagenlecleucel"
            },
            {
                "id": "d",
                "text": "Asparaginase"
            },
            {
                "id": "e",
                "text": "High dose cytarabine"
            }
        ],
        "correctId": "b",
        "explanation": "Nelarabine is specifically indicated for patients with relapsed or refractory T-lineage ALL."
    },
    {
        "id": "q15",
        "question": "15. An elderly patient with FLT3 positive AML. What is the best treatment in case of relapse for this patient?",
        "options": [
            {
                "id": "a",
                "text": "Ivosidenib"
            },
            {
                "id": "b",
                "text": "Enasidenib"
            },
            {
                "id": "c",
                "text": "Gilteritinib"
            },
            {
                "id": "d",
                "text": "Cytarabine and etoposide"
            },
            {
                "id": "e",
                "text": "Cytarabine and mitoxantrone"
            }
        ],
        "correctId": "c",
        "explanation": "Gilteritinib is a therapy used for patients with relapsed AML that possesses the FLT3 mutation."
    },
    {
        "id": "q16",
        "question": "16. A 60 years old patient was diagnosed to have IgVH mutated CLL. What is the preferred treatment for this patient?",
        "options": [
            {
                "id": "a",
                "text": "Ibrutinib"
            },
            {
                "id": "b",
                "text": "Acalabrutinib + obinutuzumab"
            },
            {
                "id": "c",
                "text": "Fludarabine, cyclophosphamide, and rituximab"
            },
            {
                "id": "d",
                "text": "Venetoclax plus obinutuzumab"
            },
            {
                "id": "e",
                "text": "Duvelisib"
            }
        ],
        "correctId": "c",
        "explanation": "The FCR regimen (Fludarabine, Cyclophosphamide, Rituximab) is the preferred treatment for younger, healthy patients with IgVH-mutated CLL."
    },
    {
        "id": "q17",
        "question": "17. For newly diagnosed patients with chronic myeloid leukemia (CML). The standard of care is:",
        "options": [
            {
                "id": "a",
                "text": "chlorambucil"
            },
            {
                "id": "b",
                "text": "cyclophosphamide"
            },
            {
                "id": "c",
                "text": "l-asparaginase"
            },
            {
                "id": "d",
                "text": "imatinib"
            },
            {
                "id": "e",
                "text": "daunorubicin"
            }
        ],
        "correctId": "d",
        "explanation": "Tyrosine kinase inhibitors (TKIs), with imatinib being the prototype, are the standard first-line therapy for CML."
    },
    {
        "id": "q18",
        "question": "18. A 41-year-old male with ALL. All of the following chemotherapeutic agents should be given in the induction phase EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "L-asparaginase"
            },
            {
                "id": "b",
                "text": "doxorubicin"
            },
            {
                "id": "c",
                "text": "vincristine"
            },
            {
                "id": "d",
                "text": "methotrexate"
            },
            {
                "id": "e",
                "text": "dexamethasone"
            }
        ],
        "correctId": "d",
        "explanation": "Methotrexate is a mainstay of the maintenance phase; induction usually involves vincristine, a steroid, and asparaginase."
    },
    {
        "id": "q19",
        "question": "19. The most common leukemia among elderly (above 65 years old) is:",
        "options": [
            {
                "id": "a",
                "text": "Chronic lymphocytic leukemia (CLL)."
            },
            {
                "id": "b",
                "text": "Acute myelogenous leukemia (AML)"
            },
            {
                "id": "c",
                "text": "Acute lymphocytic leukemia (ALL)"
            },
            {
                "id": "d",
                "text": "Chronic myelogenous leukemia (CML)"
            },
            {
                "id": "e",
                "text": "Acute non-lymphocytic leukemia (ANLL)"
            }
        ],
        "correctId": "a",
        "explanation": "CLL is the most common leukemia in adults, with a median age of 70 years at diagnosis."
    },
    {
        "id": "q20",
        "question": "20. Regarding the treatment of acute myeloblastic leukemia (AML), which of the following induction regimens is most appropriate for a 73-year-old man?",
        "options": [
            {
                "id": "a",
                "text": "Cytarabine 6 doses with idarubicin for 3 days"
            },
            {
                "id": "b",
                "text": "Cytarabine continuous infusion for 7 days with mitoxantrone for 3 days and 6-thioguanine for 7 days"
            },
            {
                "id": "c",
                "text": "Cytarabine for 7 days with daunorubicin for 3 days"
            },
            {
                "id": "d",
                "text": "Cytarabine for 7 days with idarubicin for 3 days and etoposide for 7 days"
            },
            {
                "id": "e",
                "text": "High-dose idarubicin for 3 days"
            }
        ],
        "correctId": "c",
        "explanation": "The standard induction phase for AML is the \"7 + 3\" regimen, consisting of 7 days of cytarabine and 3 days of an anthracycline like daunorubicin."
    },
    {
        "id": "q21",
        "question": "21. A patient with refractory ALL. Which of the following statements about treatment of refractory ALL do you consider INCORRECT?",
        "options": [
            {
                "id": "a",
                "text": "Clofarabine has shown considerable activity in refractory acute leukemias."
            },
            {
                "id": "b",
                "text": "Blinatumomab was approved for Philadelphia chromosome (Ph) positive relapsed or refractory ALL."
            },
            {
                "id": "c",
                "text": "Tisagenlecleucel has been shown to induce remissions in relapsed and refractory cases"
            },
            {
                "id": "d",
                "text": "Nelarabine is used in patients with relapsed or refractory T-lineage ALL."
            },
            {
                "id": "e",
                "text": "Inotuzumab ozogamicin (anti CD-22) is used in relapsed and refractory B-ALL."
            }
        ],
        "correctId": "b",
        "explanation": "Blinatumomab was initially approved specifically for Philadelphia chromosome negative relapsed or refractory ALL."
    },
    {
        "id": "q22",
        "question": "22. A patient was diagnosed to have leukemia and chloromas. Chloromas is a characteristic feature of which class?",
        "options": [
            {
                "id": "a",
                "text": "ALL"
            },
            {
                "id": "b",
                "text": "AML"
            },
            {
                "id": "c",
                "text": "CLL"
            },
            {
                "id": "d",
                "text": "CML"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "b",
        "explanation": "Chloromas are localized leukemic deposits typically seen in AML, often appearing in the periorbital regions."
    },
    {
        "id": "q23",
        "question": "23. Regarding desired outcome of treatment of CLL, complete response (CR) to therapy can be defined by the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Resolution of lymphadenopathy"
            },
            {
                "id": "b",
                "text": "Resolution of organomegaly"
            },
            {
                "id": "c",
                "text": "Normalization of body temperature"
            },
            {
                "id": "d",
                "text": "Normalization of peripheral blood count"
            },
            {
                "id": "e",
                "text": "Elimination of lymphoblasts in bone marrow"
            }
        ],
        "correctId": "c",
        "explanation": "CR is defined by the resolution of clinical signs (organomegaly/lymphadenopathy) and normalization of hematologic parameters; temperature is a symptom but not a formal CR criterion."
    },
    {
        "id": "q24",
        "question": "24. The most common pathologic cell type of prostate cancer? (Note: This appears in the leukemia source file but relates to prostate cancer).",
        "options": [
            {
                "id": "a",
                "text": "Adenocarcinoma."
            }
        ],
        "correctId": "a",
        "explanation": "Correct Answer format."
    },
    {
        "id": "q25",
        "question": "25. Regarding the treatment of CML, all of the following drugs are TKI therapies EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Acalabrutinib"
            },
            {
                "id": "b",
                "text": "Imatinib"
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
        "correctId": "a",
        "explanation": "Acalabrutinib is a BTK inhibitor used for CLL, while the others are BCR-ABL TKIs used for CML."
    },
    {
        "id": "q26",
        "question": "26. Which of the following is a characteristic of CML?",
        "options": [
            {
                "id": "a",
                "text": "Elevated levels of lymphocytes in the blood"
            },
            {
                "id": "b",
                "text": "Presence of Philadelphia chromosome"
            },
            {
                "id": "c",
                "text": "Decreased production of white blood cells"
            },
            {
                "id": "d",
                "text": "Development of lymphoid tumors in lymph nodes"
            },
            {
                "id": "e",
                "text": "Abnormal proliferation of red blood cells"
            }
        ],
        "correctId": "b",
        "explanation": "The Philadelphia chromosome (a translocation between chromosomes 9 and 22) is the genetic hallmark of CML."
    },
    {
        "id": "q27",
        "question": "27. A patient with CML was treated by a tyrosine kinase inhibitor. How can deep, long-lasting molecular response be defined?",
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
                "text": "Absence of BCR-ABL"
            },
            {
                "id": "e",
                "text": "BCR-ABL < 10%"
            }
        ],
        "correctId": "a",
        "explanation": "A deep molecular response is defined as BCR-ABL levels falling below 0.1% on the International Scale."
    },
    {
        "id": "q28",
        "question": "28. A patient with CML was treated by nilotinib. Which one of the followings is a unique side effect for nilotinib?",
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
        "correctId": "b",
        "explanation": "Nilotinib is specifically associated with a risk of QT prolongation, requiring monitoring."
    },
    {
        "id": "q29",
        "question": "29. Which drug is an anti-CD22 and also used in relapsed and refractory B-ALL?",
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
        "explanation": "Inotuzumab ozogamicin is a monoclonal antibody targeted against the CD22 antigen."
    },
    {
        "id": "q30",
        "question": "30. Which drug that targets B-cell lymphoma 2 (BCL-2) protein and may be used for patients with relapsed/refractory CLL?",
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
        "explanation": "Venetoclax is a targeted inhibitor of the BCL-2 protein, which helps leukemic cells avoid apoptosis."
    },
    {
        "id": "q31",
        "question": "31. A 67 years old man with atrial fibrillation is diagnosed with CLL (del 17p). What is the best initial therapy?",
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
                "text": "FCR"
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
        "explanation": "Ibrutinib is associated with an increased risk of atrial fibrillation; therefore, a Venetoclax-based regimen is a safer initial choice for this patient."
    },
    {
        "id": "q32",
        "question": "32. The important indicator of disease recurrence and a predictor of outcome for patients with acute leukemia is:",
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
        "explanation": "MRD assessment is one of the strongest predictors of outcome and identifies subclinical leukemic burden that may lead to relapse."
    },
    {
        "id": "q33",
        "question": "33. What is the primary cause of death in acute leukemia patients?",
        "options": [
            {
                "id": "a",
                "text": "Tumor Lysis Syndrome"
            },
            {
                "id": "b",
                "text": "Infection"
            },
            {
                "id": "c",
                "text": "Secondary malignancy"
            },
            {
                "id": "d",
                "text": "Thrombocytopenia"
            },
            {
                "id": "e",
                "text": "none of the above"
            }
        ],
        "correctId": "b",
        "explanation": "Severe myelosuppression from the disease and chemotherapy makes patients highly susceptible to life-threatening infections."
    },
    {
        "id": "q34",
        "question": "34. Which of the following is a potential complication of cancer treatment?",
        "options": [
            {
                "id": "a",
                "text": "Tumor lysis syndrome"
            },
            {
                "id": "b",
                "text": "Metastasis"
            },
            {
                "id": "c",
                "text": "Carcinogenesis"
            },
            {
                "id": "d",
                "text": "Chemoprevention"
            },
            {
                "id": "e",
                "text": "Angiogenesis"
            }
        ],
        "correctId": "a",
        "explanation": "TLS is a dangerous metabolic complication that occurs when a large number of cancer cells die rapidly, releasing their contents into the blood."
    }
],

  'cancer_chemo': [
    {
        "id": "q1",
        "question": "1. A patient with cancer was treated by a doxorubicin-containing regimen. All of the followings regarding doxorubicin are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "It is a vesicant drug."
            },
            {
                "id": "b",
                "text": "It can result in blue-green urine after administration."
            },
            {
                "id": "c",
                "text": "Liposomal doxorubicin may be less cardiotoxic than doxorubicin."
            },
            {
                "id": "d",
                "text": "Dexrazoxane can be used as a cardioprotectant agent with doxorubicin."
            },
            {
                "id": "e",
                "text": "Oxygen-free-radical formation is a cause of cardiac damage by doxorubicin."
            }
        ],
        "correctId": "b",
        "explanation": "Anthracyclines like doxorubicin are known to cause reddish discoloration of the urine, not blue-green,."
    },
    {
        "id": "q2",
        "question": "2. Chemotherapy that is given before surgical resection of the tumor to decrease the tumor burden to be removed is called:",
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
                "text": "Off-label therapy"
            }
        ],
        "correctId": "b",
        "explanation": "Neoadjuvant therapy is specifically administered prior to surgery to shrink the tumor and make the surgical procedure easier to perform,."
    },
    {
        "id": "q3",
        "question": "3. A patient was diagnosed to have metastatic cancer. All of the followings regarding metastasis are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "A metastasis is a growth of the same cancer cell found at some distance from the primary tumor site."
            },
            {
                "id": "b",
                "text": "Once metastases have occurred, the cancer is considered incurable."
            },
            {
                "id": "c",
                "text": "The presence of metastasis at diagnosis usually is associated with a best prognosis."
            },
            {
                "id": "d",
                "text": "Cancers spread usually by 2 pathways: hematogenous and lymphatics."
            },
            {
                "id": "e",
                "text": "The usual metastatic sites for solid tumors are the brain, bone, lung, and liver."
            }
        ],
        "correctId": "c",
        "explanation": "The presence of metastasis at the time of diagnosis is generally associated with a poorer prognosis, and distant metastases often render the cancer incurable,."
    },
    {
        "id": "q4",
        "question": "4. Regarding the adverse effects of chemotherapeutic agents, which one can cause pulmonary toxicity as its most serious side effect?",
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
        "explanation": "Bleomycin is highly associated with pulmonary toxicity, which serves as its primary dose-limiting and most serious side effect,."
    },
    {
        "id": "q5",
        "question": "5. A cancer that arises in the connective tissue. Such type of cancer is called:",
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
        "explanation": "While carcinomas arise from epithelial tissue, sarcomas specifically originate from connective tissues like muscle, bone, and cartilage,."
    },
    {
        "id": "q6",
        "question": "6. Regarding cancer prevention: All of the following strategies are useful in cancer prevention EXCEPT:",
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
        "explanation": "While lifestyle changes and vaccinations are standard prevention tools, the use of broad-spectrum antibiotics is not a recognized strategy for preventing cancer."
    },
    {
        "id": "q7",
        "question": "7. Regarding carcinogens: All of the following are carcinogenic EXCEPT:",
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
                "text": "Epstein-Barr virus infection."
            },
            {
                "id": "e",
                "text": "Excessive sun exposure."
            }
        ],
        "correctId": "b",
        "explanation": "Benzene, smoking, radiation (sun), and certain viruses are confirmed carcinogens, but stress is not categorized as a primary carcinogenic substance in the provided material."
    },
    {
        "id": "q8",
        "question": "8. Which of the followings are not properties of cisplatin used in cancer treatment?",
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
        "explanation": "Cisplatin is primarily used for various solid tumors and is notably not the standard treatment for many lymphomas or carcinomas of unknown primary,."
    },
    {
        "id": "q9",
        "question": "9. The toxic effect of chemotherapy may be affected by:",
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
        "explanation": "Toxicity is multifactorial, depending on the drug's properties, the dosing regimen, treatment length, and individual patient factors like age and renal function,."
    },
    {
        "id": "q10",
        "question": "10. Concerning cancer chemotherapy, all the statements below about methotrexate are correct, EXCEPT:",
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
        "explanation": "Methotrexate is known for its anti-inflammatory properties, which is why it is used in various conditions beyond just cancer."
    },
    {
        "id": "q11",
        "question": "11. Anthracycline-induced cardiomyopathy is closely linked to a patient's:",
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
        "explanation": "The risk of cardiac damage from anthracyclines is primarily determined by the lifetime cumulative dose received by the patient,."
    },
    {
        "id": "q12",
        "question": "12. Which of the following agents is most likely to have contributed to a secondary AML (Acute Myelogenous Leukemia)?",
        "options": [
            {
                "id": "a",
                "text": "Dexamethasone"
            },
            {
                "id": "b",
                "text": "Daunorubicin"
            },
            {
                "id": "c",
                "text": "Asparaginase"
            },
            {
                "id": "d",
                "text": "Etoposide"
            },
            {
                "id": "e",
                "text": "Vincristine and daunorubicin"
            }
        ],
        "correctId": "d",
        "explanation": "Topoisomerase inhibitors like etoposide, along with alkylating agents, are explicitly linked to an increased risk of developing secondary AML,."
    },
    {
        "id": "q13",
        "question": "13. Smoking can cause many types of cancer. Smoking cessation is associated with a gradual decrease in the risk of all of the following cancer types except:",
        "options": [
            {
                "id": "a",
                "text": "Lung"
            },
            {
                "id": "b",
                "text": "Brain"
            },
            {
                "id": "c",
                "text": "Pharynx"
            },
            {
                "id": "d",
                "text": "Mouth"
            },
            {
                "id": "e",
                "text": "Esophagus"
            }
        ],
        "correctId": "b",
        "explanation": "Smoking is a major cause of lung, mouth, pharynx, and esophagus cancers, but the sources do not link it directly to brain cancer in the same manner,."
    },
    {
        "id": "q14",
        "question": "14. A patient was diagnosed to have colorectal cancer. All of the followings are common sites for metastases by colorectal cancer except:",
        "options": [
            {
                "id": "a",
                "text": "Brain"
            },
            {
                "id": "b",
                "text": "Lung"
            },
            {
                "id": "c",
                "text": "Bone"
            },
            {
                "id": "d",
                "text": "Liver"
            },
            {
                "id": "e",
                "text": "Breast"
            }
        ],
        "correctId": "e",
        "explanation": "Common metastatic sites for solid tumors include the brain, lung, bone, and liver; breast is not a standard metastatic site for colorectal cancer,."
    },
    {
        "id": "q15",
        "question": "15. Surgery is useful for curative treatment of which one of the following cases:",
        "options": [
            {
                "id": "a",
                "text": "A patient with stage 1 esophageal cancer"
            },
            {
                "id": "b",
                "text": "A patient with stage 4 pancreatic cancer"
            },
            {
                "id": "c",
                "text": "A patient with acute lymphoblastic leukemia"
            },
            {
                "id": "d",
                "text": "A patient with metastatic bladder cancer"
            },
            {
                "id": "e",
                "text": "A patient with chronic myelogenous leukemia"
            }
        ],
        "correctId": "a",
        "explanation": "Surgery is most effective as a curative measure for localized disease (Stage 1); it plays a minimal role in widespread or systemic cancers like leukemias,."
    },
    {
        "id": "q16",
        "question": "16. What is the primary goal of adjuvant chemotherapy?",
        "options": [
            {
                "id": "a",
                "text": "To remove all macroscopic malignant cells"
            },
            {
                "id": "b",
                "text": "To decrease recurrence and prolong survival by eliminating microscopic malignant cells"
            },
            {
                "id": "c",
                "text": "To decrease the tumor burden to make the surgery easier to perform"
            },
            {
                "id": "d",
                "text": "To control symptoms of cancer"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "b",
        "explanation": "Adjuvant therapy is given after surgery specifically to destroy any remaining microscopic disease to prevent recurrence,."
    },
    {
        "id": "q17",
        "question": "17. Malignant growths of muscle or connective tissue are called:",
        "options": [
            {
                "id": "a",
                "text": "Carcinomas"
            },
            {
                "id": "b",
                "text": "Adenocarcinomas"
            },
            {
                "id": "c",
                "text": "Sarcomas"
            },
            {
                "id": "d",
                "text": "Osteoma"
            },
            {
                "id": "e",
                "text": "Papilloma"
            }
        ],
        "correctId": "c",
        "explanation": "As established previously, sarcomas are the classification for malignant tumors of the connective tissues, including muscle,."
    },
    {
        "id": "q18",
        "question": "18. The principles of using combination anticancer chemotherapy include all the following except:",
        "options": [
            {
                "id": "a",
                "text": "Agents with different organ toxicities"
            },
            {
                "id": "b",
                "text": "Agents with different pharmacologic actions"
            },
            {
                "id": "c",
                "text": "Agents with different costs"
            },
            {
                "id": "d",
                "text": "Agents those do not result in significant drug interactions"
            },
            {
                "id": "e",
                "text": "Agents those are ideally synergistic when used together"
            }
        ],
        "correctId": "c",
        "explanation": "Combination regimens are designed based on mechanism, toxicity profiles, and synergy; cost is not a primary clinical principle for selecting drug combinations,."
    },
    {
        "id": "q19",
        "question": "19. Benefit versus risk need to be weighted when making recommendation for prevention of breast cancer with which of the following drugs?",
        "options": [
            {
                "id": "a",
                "text": "tamoxifen"
            },
            {
                "id": "b",
                "text": "rolaxifen"
            },
            {
                "id": "c",
                "text": "exemestane"
            },
            {
                "id": "d",
                "text": "letrozole"
            },
            {
                "id": "e",
                "text": "anastrozole"
            }
        ],
        "correctId": "a",
        "explanation": "While effective for risk reduction, tamoxifen carries significant risks, such as increased incidences of endometrial cancer and thromboembolic events,."
    },
    {
        "id": "q20",
        "question": "20. Tumors are either benign or malignant. Which one of the followings is a benign tumor?",
        "options": [
            {
                "id": "a",
                "text": "Osteosarcoma"
            },
            {
                "id": "b",
                "text": "Lipoma"
            },
            {
                "id": "c",
                "text": "Lung adenocarcinoma"
            },
            {
                "id": "d",
                "text": "Squamous cell carcinoma"
            },
            {
                "id": "e",
                "text": "Hodgkin's lymphoma"
            }
        ],
        "correctId": "b",
        "explanation": "The suffix \"-oma\" added to the cell type (e.g., lipoma) signifies a benign tumor, whereas terms like \"sarcoma,\" \"carcinoma,\" and \"lymphoma\" denote malignancy,."
    },
    {
        "id": "q21",
        "question": "21. Regarding chemotherapy, symptomatic control of incurable cancer with chemotherapy is termed as:",
        "options": [
            {
                "id": "a",
                "text": "Adjuvant therapy"
            },
            {
                "id": "b",
                "text": "Neoadjuvant chemotherapy"
            },
            {
                "id": "c",
                "text": "Radiation therapy"
            },
            {
                "id": "d",
                "text": "Palliation therapy"
            },
            {
                "id": "e",
                "text": "Surgical therapy"
            }
        ],
        "correctId": "d",
        "explanation": "Palliation refers to treatment given to control symptoms and improve the quality of life when a cure is not possible,."
    },
    {
        "id": "q22",
        "question": "22. Regarding pharmacological therapy in oncology, role of systemic chemotherapy administered after primary therapy is:",
        "options": [
            {
                "id": "a",
                "text": "Reduce the tumor mass"
            },
            {
                "id": "b",
                "text": "Eradicate any undetectable tumor"
            },
            {
                "id": "c",
                "text": "Minimize cost"
            },
            {
                "id": "d",
                "text": "Minimize toxicity"
            },
            {
                "id": "e",
                "text": "Alleviate symptoms"
            }
        ],
        "correctId": "b",
        "explanation": "Systemic therapy (adjuvant) after primary surgery is intended to eliminate microscopic or undetectable malignant cells,."
    },
    {
        "id": "q23",
        "question": "23. Regarding neoplasm, the most important characteristic(s) of malignant cells is/are:",
        "options": [
            {
                "id": "a",
                "text": "They are highly differentiated"
            },
            {
                "id": "b",
                "text": "They have uncontrolled growth"
            },
            {
                "id": "c",
                "text": "They have limited replicative potential"
            },
            {
                "id": "d",
                "text": "They have high sensitivity to antigrowth signals"
            },
            {
                "id": "e",
                "text": "They form a tissue which never metastasizes."
            }
        ],
        "correctId": "b",
        "explanation": "Cancer is fundamentally characterized by uncontrolled cellular growth, tissue infiltration, and the ability to spread,."
    },
    {
        "id": "q24",
        "question": "24. Regarding carcinogenesis, all of the following statements are correct about carcinogenic substances EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Aniline and benzene are associated with development of leukemia and bladder cancer, respectively."
            },
            {
                "id": "b",
                "text": "Excessive sun exposure is an environmental factor can result in skin cancer."
            },
            {
                "id": "c",
                "text": "Smoking is widely known as a cause of lung cancer."
            },
            {
                "id": "d",
                "text": "Epstein-Barr, and hepatitis B viruses have been linked to lymphomas, and liver cancers, respectively."
            },
            {
                "id": "e",
                "text": "Doxorubicin, and Etoposide can cause secondary malignancies (eg, leukemias) years after therapy."
            }
        ],
        "correctId": "a",
        "explanation": "This option swaps the associations: aniline is linked to bladder cancer, and benzene is linked to leukemia,."
    },
    {
        "id": "q25",
        "question": "25. A female patient with a history of breast cancer presents with cardiomyopathy after treatment. What is the most likely cause?",
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
        "explanation": "Doxorubicin is well-documented for its cardiotoxic effects, which can lead to cardiomyopathy,."
    },
    {
        "id": "q26",
        "question": "26. A patient with lung cancer presents with pain and paresthesia in her hands and feet (neuropathy). What is the most likely cause?",
        "options": [
            {
                "id": "a",
                "text": "Carboplatin"
            },
            {
                "id": "b",
                "text": "Gemcitabine"
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
        "correctId": "e",
        "explanation": "The dose-limiting toxicity for microtubule-targeting agents like vincristine is neurotoxicity (neuropathy),."
    },
    {
        "id": "q27",
        "question": "27. A woman with a positive family history of breast cancer seeks to reduce her risk. What is the treatment of choice?",
        "options": [
            {
                "id": "a",
                "text": "Raloxifen"
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
        "explanation": "Tamoxifen is a standard pharmacological choice for reducing the risk of invasive breast cancer in high-risk individuals,."
    },
    {
        "id": "q28",
        "question": "28. Many cytotoxic drugs are carcinogenic. All of the following drugs have a high risk to cause leukemia as a secondary malignancy EXCEPT:",
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
        "explanation": "Alkylating agents (melphalan, cyclophosphamide), anthracyclines (doxorubicin), and etoposide are linked to secondary leukemias; fluorouracil (an antimetabolite) is not primarily associated with this risk,,."
    },
    {
        "id": "q29",
        "question": "29. A woman is diagnosed with ovarian cancer. All of the followings are common sites for metastases by ovarian cancer EXCEPT:",
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
        "explanation": "While ovarian cancer can spread to the liver, lung, and bone, the bladder is not listed as one of the \"usual\" metastatic sites for solid tumors in this material,."
    },
    {
        "id": "q30",
        "question": "30. A patient with stage 1 colon cancer had the tumor removed by surgery. What is the aim of surgery for this patient?",
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
        "explanation": "Surgery for localized, Stage 1 disease is generally performed with curative intent,."
    },
    {
        "id": "q31",
        "question": "31. A patient with stage 3 rectal cancer was given 5FU and leucovorin before surgical removal of the tumor. What type of regimen is this?",
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
        "explanation": "Treatment given before the primary surgical intervention to reduce tumor size is neoadjuvant,."
    },
    {
        "id": "q32",
        "question": "32. Which of the following is the best description of palliative therapy in cancer treatment?",
        "options": [
            {
                "id": "a",
                "text": "combination chemotherapy"
            },
            {
                "id": "b",
                "text": "immunotherapy that targets specific proteins"
            },
            {
                "id": "c",
                "text": "surgery plus radiation"
            },
            {
                "id": "d",
                "text": "treatment that improves the quality of life"
            },
            {
                "id": "e",
                "text": "all of the above"
            }
        ],
        "correctId": "d",
        "explanation": "The primary goal of palliative care is to improve the quality of life by managing symptoms when a cure is not possible,."
    },
    {
        "id": "q33",
        "question": "33. The usual metastatic site for solid tumor is the following EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "brain"
            },
            {
                "id": "b",
                "text": "lung"
            },
            {
                "id": "c",
                "text": "liver"
            },
            {
                "id": "d",
                "text": "spleen"
            },
            {
                "id": "e",
                "text": "bone"
            }
        ],
        "correctId": "d",
        "explanation": "The standard sites of solid tumor metastasis are the brain, lung, liver, and bone; the spleen is more commonly involved in hematological malignancies,."
    },
    {
        "id": "q34",
        "question": "34. Which one of the following carcinogens is most likely linked with the development of lymphoma?",
        "options": [
            {
                "id": "a",
                "text": "Smoking"
            },
            {
                "id": "b",
                "text": "Human papillomavirus (HPV)"
            },
            {
                "id": "c",
                "text": "Benzene"
            },
            {
                "id": "d",
                "text": "Aniline"
            },
            {
                "id": "e",
                "text": "Epstein-Barr virus (EBV)"
            }
        ],
        "correctId": "e",
        "explanation": "EBV is specifically linked to the development of various lymphomas,."
    },
    {
        "id": "q35",
        "question": "35. Which one of the following shows the toxicity of cisplatin, vincristine and vinblastine, respectively?",
        "options": [
            {
                "id": "a",
                "text": "Nephrotoxicity, neurotoxicity and myelosuppression"
            },
            {
                "id": "b",
                "text": "Sever emesis, cardiotoxicity and myelosuppression"
            },
            {
                "id": "c",
                "text": "Nephrotoxicity, neurotoxicity and cardiotoxicity"
            },
            {
                "id": "d",
                "text": "Nephrotoxicity, myelosuppression and cardiotoxicity"
            },
            {
                "id": "e",
                "text": "Sever emesis, myelosuppression, and cardiotoxicity"
            }
        ],
        "correctId": "a",
        "explanation": "Cisplatin is known for nephrotoxicity, Vincristine for neurotoxicity, and Vinblastine primarily for myelosuppression,."
    }
],
  'breast_cancer': [
    {
        "id": "q1",
        "question": "1. Atypical hyperplasia regarding breast carcinoma is considered:",
        "options": [
            {
                "id": "a",
                "text": "Possible Risk Factors"
            },
            {
                "id": "b",
                "text": "Strong Risk Factors"
            },
            {
                "id": "c",
                "text": "Poor prognostic factor"
            },
            {
                "id": "d",
                "text": "None of above"
            }
        ],
        "correctId": "b",
        "explanation": "Atypical hyperplasia is classified as a strong risk factor for the development of breast cancer."
    },
    {
        "id": "q2",
        "question": "2. MRI, depending on the presence of risk factors, is recommended as an adjunct to:",
        "options": [
            {
                "id": "a",
                "text": "Annual mammography"
            },
            {
                "id": "b",
                "text": "Monthly breast self-examination"
            },
            {
                "id": "c",
                "text": "Monthly breast self-examination and annual mammography"
            },
            {
                "id": "d",
                "text": "None of above"
            }
        ],
        "correctId": "a",
        "explanation": "In women with specific risk factors, MRI is used as an adjunct to the standard annual mammography."
    },
    {
        "id": "q3",
        "question": "3. The best primary management for a patient with extensive nodal involvement- breast carcinoma is:",
        "options": [
            {
                "id": "a",
                "text": "Fluorouracil, doxorubicin, cyclophosphamide without surgical removal"
            },
            {
                "id": "b",
                "text": "Fluorouracil, doxorubicin, cyclophosphamide before surgical removal"
            },
            {
                "id": "c",
                "text": "Fluorouracil, doxorubicin, cyclophosphamide after surgical removal"
            },
            {
                "id": "d",
                "text": "Surgical removal only"
            }
        ],
        "correctId": "b",
        "explanation": "Extensive nodal involvement (often Stage III) is managed with neoadjuvant systemic therapy (chemotherapy before surgery) to decrease tumor size and allow for better surgical outcomes."
    },
    {
        "id": "q4",
        "question": "4. A woman was diagnosed to have breast cancer. The cancer of the breast is mostly:",
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
        "explanation": "Most breast cancers are adenocarcinomas, specifically categorized as ductal or lobular."
    },
    {
        "id": "q5",
        "question": "5. Adjuvant hormonal therapy is an important part in the treatment of breast cancer. The gold standard adjuvant hormonal therapy for premenopausal women and has both estrogenic and antiestrogenic properties:",
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
        "explanation": "Tamoxifen is a selective estrogen receptor modulator (SERM) that is considered the gold standard for premenopausal women because of its mixed estrogenic/antiestrogenic effects."
    },
    {
        "id": "q6",
        "question": "6. In metastatic breast cancer (stage IV), we consider adding agents to standard therapy for treating breast cancer patients with metastases to the bone to decrease rates of skeletal-related events, such as fractures, spinal cord compression, and pain, and the need for radiation to the bones or surgery. Which medication is frequently added?",
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
        "explanation": "Bone-modifying agents like pamidronate or zoledronic acid are added to treat bone metastases and prevent skeletal complications."
    },
    {
        "id": "q7",
        "question": "7. There are medications if taken for 5 years can prevent development of breast cancers in postmenopausal women. The preventive medications include exemestane and:",
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
        "explanation": "Aromatase inhibitors (AIs) like anastrozole and exemestane are recommended for breast cancer risk reduction in high-risk postmenopausal women."
    },
    {
        "id": "q8",
        "question": "8. Regarding breast cancer: Most women with breast cancer present with:",
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
                "text": "Nipple dislocation"
            }
        ],
        "correctId": "d",
        "explanation": "The most common initial sign of breast cancer is a painless, palpable, and solitary lump."
    },
    {
        "id": "q9",
        "question": "9. Regarding breast cancer, which of the following chemotherapies used for breast cancer associated with hemorrhagic cystitis:",
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
        "explanation": "Cyclophosphamide is an alkylating agent specifically associated with the adverse effect of hemorrhagic cystitis."
    },
    {
        "id": "q10",
        "question": "10. A 35-year-old female with stage II breast cancer. Which one of the following effective initial adjuvant chemotherapy regimens should be offered to her following mastectomy?",
        "options": [
            {
                "id": "a",
                "text": "Doxorubicin alone"
            },
            {
                "id": "b",
                "text": "Doxorubicin and epirubicin"
            },
            {
                "id": "c",
                "text": "Doxorubicin and epirubicin with the addition of paclitaxel"
            },
            {
                "id": "d",
                "text": "Doxorubicin and epirubicin with the addition of trastuzumab"
            },
            {
                "id": "e",
                "text": "No chemotherapy is recommended at this stage."
            }
        ],
        "correctId": "a",
        "explanation": "Options B, C, and D are avoided because combining certain agents (like anthracyclines) can significantly increase cardiotoxicity."
    },
    {
        "id": "q11",
        "question": "11. A 65yr old female patient with stage 1, hormone receptor negative - breast carcinoma. The best management is:",
        "options": [
            {
                "id": "a",
                "text": "fluorouracil, doxorubicin, cyclophosphamide without surgical removal"
            },
            {
                "id": "b",
                "text": "fluorouracil, doxorubicin, cyclophosphamide before surgical removal"
            },
            {
                "id": "c",
                "text": "fluorouracil, doxorubicin, cyclophosphamide after surgical removal and radiation"
            },
            {
                "id": "d",
                "text": "only surgical removal and radiation"
            },
            {
                "id": "e",
                "text": "fluorouracil, doxorubicin, cyclophosphamide after radiation"
            }
        ],
        "correctId": "c",
        "explanation": "For Stage I, the standard of care is surgical removal followed by adjuvant chemotherapy (like FAC) and radiation."
    },
    {
        "id": "q12",
        "question": "12. 47-year-old woman with a new diagnosis of infiltrating intraductal adenocarcinoma involving the left breast with no regional lymph node involvement, HER2 is negative. Stage: IIB (T3, N0, M0). Which of the following item is the most appropriate with this case?",
        "options": [
            {
                "id": "a",
                "text": "Good prognosis"
            },
            {
                "id": "b",
                "text": "Poor prognosis"
            },
            {
                "id": "c",
                "text": "Late stage"
            },
            {
                "id": "d",
                "text": "sensitive to Trastuzumab"
            },
            {
                "id": "e",
                "text": "Sensitive to Lapatinib"
            }
        ],
        "correctId": "b",
        "explanation": "Patients with Stage IIB tumors (specifically T3) have a significantly poorer prognosis compared to earlier stages."
    },
    {
        "id": "q13",
        "question": "13. 36 years old woman with a left breast mass, an excisional biopsy revealed malignant changes, and as a part of her treatment for the cancer, adjuvant endocrine therapy has been prescribed. Which of the following drug can be used as an adjuvant endocrine therapy:",
        "options": [
            {
                "id": "a",
                "text": "Trastuzumab"
            },
            {
                "id": "b",
                "text": "Lapatinib"
            },
            {
                "id": "c",
                "text": "Paclitaxel"
            },
            {
                "id": "d",
                "text": "Bevacizumab"
            },
            {
                "id": "e",
                "text": "Tamoxifen"
            }
        ],
        "correctId": "e",
        "explanation": "Tamoxifen is the standard adjuvant endocrine therapy for premenopausal women with hormone-sensitive breast cancer."
    },
    {
        "id": "q14",
        "question": "14. For the evaluation of the therapeutic outcomes in a patient treated for breast cancer, which of the following is the therapeutic endpoint in the treatment of metastatic breast cancer?",
        "options": [
            {
                "id": "a",
                "text": "Cure"
            },
            {
                "id": "b",
                "text": "Prevention"
            },
            {
                "id": "c",
                "text": "Early detection"
            },
            {
                "id": "d",
                "text": "Palliation"
            },
            {
                "id": "e",
                "text": "Targeted therapy"
            }
        ],
        "correctId": "d",
        "explanation": "While the goal for early stage is cure, the endpoint for metastatic disease is palliation (symptom control and quality of life)."
    },
    {
        "id": "q15",
        "question": "15. Chemotherapy for breast cancer is chosen based on the following EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "performance status"
            },
            {
                "id": "b",
                "text": "the risk of toxicity"
            },
            {
                "id": "c",
                "text": "aggressiveness of disease"
            },
            {
                "id": "d",
                "text": "patient preferences related to chemotherapy cost"
            },
            {
                "id": "e",
                "text": "presence of comorbidities in the patient"
            }
        ],
        "correctId": "d",
        "explanation": "Clinical factors like status, toxicity, and disease aggressiveness guide choice; cost is not listed as a primary clinical selection factor."
    },
    {
        "id": "q16",
        "question": "16. Regarding breast cancer. Which of the following cases is at high risk of developing breast cancer?",
        "options": [
            {
                "id": "a",
                "text": "A 25 years-old married female with a history of normal birth of two children."
            },
            {
                "id": "b",
                "text": "A 59 year-old female who received hormonal therapy because of vasomotor symptoms."
            },
            {
                "id": "c",
                "text": "A 68 years-old male with BMI 31kg/m2"
            },
            {
                "id": "d",
                "text": "A 39 year-old female with thyroidectomy two years ago."
            },
            {
                "id": "e",
                "text": "A 41 year-old female with longterm history of dysmenorrhea successfully treated with NSAIDs."
            }
        ],
        "correctId": "b",
        "explanation": "Hormone replacement therapy and older age are significant risk factors for developing breast cancer."
    },
    {
        "id": "q17",
        "question": "17. Prognostic factors in breast cancer. The HER2 overexpression in breast cancer is very important because:",
        "options": [
            {
                "id": "a",
                "text": "occurs in about 40%-50% of breast cancers"
            },
            {
                "id": "b",
                "text": "Decreased tumor aggressiveness"
            },
            {
                "id": "c",
                "text": "Increased rates of recurrence"
            },
            {
                "id": "d",
                "text": "Increased DFS"
            },
            {
                "id": "e",
                "text": "Increased OS"
            }
        ],
        "correctId": "c",
        "explanation": "HER2 overexpression is associated with more aggressive tumors and a higher risk of recurrence and mortality."
    },
    {
        "id": "q18",
        "question": "18. A 68-year-old woman with history of stage III estrogen receptor (ER)- positive, HER2-negative breast cancer develops metastatic disease involving the bones while on adjuvant exemestane therapy. Which of the following would be optimal as first-line systemic therapy for metastatic disease?",
        "options": [
            {
                "id": "a",
                "text": "Tamoxifen"
            },
            {
                "id": "b",
                "text": "Ovarian suppression"
            },
            {
                "id": "c",
                "text": "Palbociclib with fulvestrant"
            },
            {
                "id": "d",
                "text": "Palbociclib with letrozole"
            },
            {
                "id": "e",
                "text": "Combination cytotoxic chemotherapy"
            }
        ],
        "correctId": "c",
        "explanation": "For postmenopausal women who progress on an AI, combining a CDK 4/6 inhibitor (like palbociclib) with fulvestrant is an optimal first-line strategy."
    },
    {
        "id": "q19",
        "question": "19. Manar is a 34 years old non pregnant woman with early breast cancer (stage 0). The appropriate primary treatment for Manar is:",
        "options": [
            {
                "id": "a",
                "text": "Surgical removal of breast"
            },
            {
                "id": "b",
                "text": "Targeted therapy"
            },
            {
                "id": "c",
                "text": "Endocrine therapy"
            },
            {
                "id": "d",
                "text": "Breast conserving therapy"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "a",
        "explanation": "For Stage 0 (carcinoma in situ), the primary treatment is surgical removal of the lesion."
    },
    {
        "id": "q20",
        "question": "20. Safa is a 33 years old non pregnant woman with metastatic breast cancer that overexpress HER2. The preferred targeted therapy is:",
        "options": [
            {
                "id": "a",
                "text": "Pamidronate"
            },
            {
                "id": "b",
                "text": "Pertuzumab"
            },
            {
                "id": "c",
                "text": "Fulvestrant"
            },
            {
                "id": "d",
                "text": "Capcitabine"
            },
            {
                "id": "e",
                "text": "Eribulin"
            }
        ],
        "correctId": "b",
        "explanation": "For HER2-overexpressing metastatic breast cancer, first-line targeted therapy typically includes pertuzumab in combination with trastuzumab and a taxane."
    },
    {
        "id": "q21",
        "question": "21. Regarding treatment of breast cancer. Concomitant or sequential administration of a taxane with an anthracycline-based regimen is mostly standard of care in breast cancer in:",
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
        "correctId": "c",
        "explanation": "Combining or sequencing anthracyclines and taxanes is the cornerstone of modern adjuvant chemotherapy for early-stage breast cancer."
    },
    {
        "id": "q22",
        "question": "22. A 37-year-old woman has a large mass on her left breast confirmed a diagnosis of inflammatory breast cancer... no metastasis. The best neoadjuvant therapy for breast conserving surgery is:",
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
        "explanation": "Inflammatory breast cancer requires intensive neoadjuvant chemotherapy (anthracycline + cyclophosphamide followed by a taxane) to shrink the tumor before surgery."
    },
    {
        "id": "q23",
        "question": "23. Regarding the chemotherapy of breast cancer. The adjuvant chemotherapy regimens include all EXCEPT:",
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
        "explanation": "Adriamycin, cyclophosphamide, and taxanes (docetaxel/paclitaxel) are cytotoxic chemotherapy agents; bisphosphonates are bone-modifying agents, not cytotoxic chemotherapy."
    },
    {
        "id": "q24",
        "question": "24. A 66 years old woman is suffering from low mineral bone density and strong family history of breast cancer. What would be the best protective agent?",
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
        "explanation": "Raloxifene is used for risk reduction and is beneficial because it also helps maintain bone mineral density."
    },
    {
        "id": "q25",
        "question": "25. Which genetic mutations significantly increase the lifetime risk of breast cancer?",
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
        "explanation": "Mutations in BRCA1 and BRCA2 are well-known genetic factors that significantly elevate the risk of breast cancer."
    },
    {
        "id": "q26",
        "question": "26. Which one of the following regimens is considered first line treatment for HER2 positive breast cancer?",
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
        "correctId": "b",
        "explanation": "According to the specific diagram in the source, trastuzumab-taxane is indicated as a standard first-line targeted approach. (Note: Other sections mention the triple combination as preferred for metastatic disease)."
    },
    {
        "id": "q27",
        "question": "27. J.A. is 48 years old woman with breast cancer. Which one of the followings is a risk factor for breast cancer?",
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
        "explanation": "Early menarche (young age at start of menstruation) increases the lifetime exposure to estrogen, raising breast cancer risk."
    },
    {
        "id": "q28",
        "question": "28. Which of the following modalities has negligible role in the management of metastatic breast cancer:",
        "options": [
            {
                "id": "a",
                "text": "radio-therapy"
            },
            {
                "id": "b",
                "text": "immuno-therapy"
            },
            {
                "id": "c",
                "text": "surgery"
            },
            {
                "id": "d",
                "text": "chemotherapy"
            },
            {
                "id": "e",
                "text": "endocrine therapy"
            }
        ],
        "correctId": "c",
        "explanation": "When cancer is widespread (metastatic), surgery plays a minimal role, and systemic therapies like chemotherapy and endocrine therapy are the mainstays."
    },
    {
        "id": "q29",
        "question": "29. Regarding stage IV breast cancer. All of the following are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "The tumor is larger than that of the other stages"
            },
            {
                "id": "b",
                "text": "It can NOT be cured"
            },
            {
                "id": "c",
                "text": "It can be metastasized to the lungs"
            },
            {
                "id": "d",
                "text": "It has a positive lymph node involvement"
            },
            {
                "id": "e",
                "text": "Anastrozole is highly recommended to improve the quality of life."
            }
        ],
        "correctId": "e",
        "explanation": "While AIs are used in MBC, saying it is \"highly recommended to improve the quality of life\" as a definitive rule over others is incorrect; treatment is individualized."
    },
    {
        "id": "q30",
        "question": "30. The following drug is used as a second-line treatment in hormone receptor-positive metastatic breast cancer, postmenopausal women with disease progression following antiestrogen therapy:",
        "options": [
            {
                "id": "a",
                "text": "Anastrozole"
            },
            {
                "id": "b",
                "text": "Fulvestrant"
            },
            {
                "id": "c",
                "text": "Trustozumab"
            },
            {
                "id": "d",
                "text": "Imatinib"
            },
            {
                "id": "e",
                "text": "Tamoxifen"
            }
        ],
        "correctId": "b",
        "explanation": "Fulvestrant is an intramuscular agent approved specifically for second-line therapy in postmenopausal women with hormone-receptor-positive MBC."
    },
    {
        "id": "q31",
        "question": "31. Which of the following independent factors influence the risk for breast cancer recurrence and subsequent metastatic disease?",
        "options": [
            {
                "id": "a",
                "text": "Lymph node number"
            },
            {
                "id": "b",
                "text": "Biological sex"
            },
            {
                "id": "c",
                "text": "Ethnicity"
            },
            {
                "id": "d",
                "text": "Age at diagnosis"
            },
            {
                "id": "e",
                "text": "Age at first menses"
            }
        ],
        "correctId": "a",
        "explanation": "The presence and number of involved axillary lymph nodes are powerful independent predictors of recurrence."
    },
    {
        "id": "q32",
        "question": "32. The common side effect of trastuzumab containing regimens is:",
        "options": [
            {
                "id": "a",
                "text": "Heart failure"
            },
            {
                "id": "b",
                "text": "Elevated blood glucose"
            },
            {
                "id": "c",
                "text": "Spinal cord compression"
            },
            {
                "id": "d",
                "text": "Bone fractures"
            },
            {
                "id": "e",
                "text": "Ototoxicity"
            }
        ],
        "correctId": "a",
        "explanation": "Trastuzumab is associated with a risk of symptomatic heart failure, especially when used with anthracyclines."
    }
],

  'insomnia': [
    {
        "id": "q1",
        "question": "1. Obstructive sleep apnea (OSA) is potentially life-threatening and characterized by repeated episodes of nocturnal breathing cessation followed by blood oxygen desaturation. Which one of the following drugs are approved by the FDA to improve wakefulness in those with residual daytime sleepiness? (They should be used only in patients without cardiovascular disease who are using optimal PAP therapy).",
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
        "explanation": "Modafinil is specifically FDA-approved to improve wakefulness in patients suffering from residual daytime sleepiness associated with OSA."
    },
    {
        "id": "q2",
        "question": "2. AK. is 66 years old male patient with history of depression, arrhythmia, and substance abuse. What is the best treatment for treating insomnia for this patient?",
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
        "explanation": "Antidepressants like trazodone are preferred for patients with a history of substance abuse because they lack the dependency risks associated with benzodiazepines."
    },
    {
        "id": "q3",
        "question": "3. M.M is 38 years old patient presented to the sleep hygienist with excessive daytime sleepiness (EDS), sleep attacks that last up to 30 minutes, fatigue, impaired performance, and disturbed nighttime sleep. He was diagnosed with Narcolepsy. Which one of the following is the standard of treatment of EDS?",
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
        "explanation": "Modafinil is considered the standard pharmacological treatment for managing excessive daytime sleepiness in patients with narcolepsy."
    },
    {
        "id": "q4",
        "question": "4. An elderly patient who has difficulty in sleep with frequent nighttime awakenings. What is the best treatment for this patient?",
        "options": [
            {
                "id": "a",
                "text": "Zaleplon"
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
        "correctId": "b",
        "explanation": "Zolpidem is effective for both sleep initiation and sleep maintenance (reducing nighttime awakenings) and is safer than long-acting benzodiazepines in the elderly."
    },
    {
        "id": "q5",
        "question": "5. DP is a 46-year-old woman who presents with a complaint of difficulty initiating sleep. After a careful sleep history, you rule out other potential sleep disorders and want to start her on drug therapy for her insomnia. Which of the following would be the best recommendation?",
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
        "explanation": "Zaleplon is highly effective for decreasing time to sleep onset due to its rapid onset and very short half-life (~1 hour)."
    },
    {
        "id": "q6",
        "question": "6. A 63 years old man with narcolepsy type 1, he has a history of disc prolapse on tramadol and benign prostatic hyperplasia (BPH) on tamsulosin. What is the safest treatment for cataplexy for this patient?",
        "options": [
            {
                "id": "a",
                "text": "Diphenhydramine"
            },
            {
                "id": "b",
                "text": "Amitriptyline"
            },
            {
                "id": "c",
                "text": "Fluoxetine"
            },
            {
                "id": "d",
                "text": "Selegiline"
            },
            {
                "id": "e",
                "text": "Imipramine"
            }
        ],
        "correctId": "c",
        "explanation": "SSRIs, such as fluoxetine, are commonly used and effective treatments for managing cataplexy in patients with narcolepsy."
    },
    {
        "id": "q7",
        "question": "7. A 53-year-old man notes fatigue and poor sleep for the past 6 weeks, starting around the time of his father's death. What is the type of insomnia this patient have?",
        "options": [
            {
                "id": "a",
                "text": "Transient insomnia"
            },
            {
                "id": "b",
                "text": "Short-term insomnia"
            },
            {
                "id": "c",
                "text": "Chronic insomnia"
            },
            {
                "id": "d",
                "text": "Acute insomnia"
            },
            {
                "id": "e",
                "text": "Severe insomnia"
            }
        ],
        "correctId": "b",
        "explanation": "Insomnia is classified as short-term when the symptoms have lasted for less than 3 months."
    },
    {
        "id": "q8",
        "question": "8. Many factors may trigger or induce obstructive sleep apnea (OSA) all listed below, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Obesity"
            },
            {
                "id": "b",
                "text": "Heart failure"
            },
            {
                "id": "c",
                "text": "Hyperthyroidism"
            },
            {
                "id": "d",
                "text": "Increasing upper airways edema by smoking"
            },
            {
                "id": "e",
                "text": "Enlarged tonsils"
            }
        ],
        "correctId": "c",
        "explanation": "While obesity, heart failure, and enlarged tonsils are known triggers for OSA, hyperthyroidism is not listed as a primary inducer in the pathophysiology sources."
    },
    {
        "id": "q9",
        "question": "9. Certain conventional treatments for insomnia should be avoided in patients with a history of substance misuse. Which of the following drugs can be best choice for treatment of insomnia in patient with substance abuse?",
        "options": [
            {
                "id": "a",
                "text": "Quazepam"
            },
            {
                "id": "b",
                "text": "Triazolam"
            },
            {
                "id": "c",
                "text": "Flurazepam"
            },
            {
                "id": "d",
                "text": "Bupropion"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "e",
        "explanation": "Benzodiazepines (A, B, C) are avoided in substance abuse cases. Bupropion (D) is an activating antidepressant that can worsen insomnia. Therefore, none of the provided options are suitable."
    },
    {
        "id": "q10",
        "question": "10. Saleema, a 53-years-old schoolteacher complains of inability to sleep well for more than two years. Her health is good except for well-controlled open-angle glaucoma. What is the management of choice?",
        "options": [
            {
                "id": "a",
                "text": "Trazodone"
            },
            {
                "id": "b",
                "text": "Zolpidem"
            },
            {
                "id": "c",
                "text": "Diphenhydramine"
            },
            {
                "id": "d",
                "text": "Amitriptyline"
            },
            {
                "id": "e",
                "text": "Loratidine"
            }
        ],
        "correctId": "b",
        "explanation": "Zolpidem addresses both sleep initiation and maintenance and is safer in well-controlled glaucoma than highly anticholinergic agents like amitriptyline."
    },
    {
        "id": "q11",
        "question": "11. Concerning the pathophysiology of obstructive sleep apnea, obstructive sleep apnea may be associated with the following conditions EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Depression"
            },
            {
                "id": "b",
                "text": "Stroke"
            },
            {
                "id": "c",
                "text": "Hypotension"
            },
            {
                "id": "d",
                "text": "Corpulmonale"
            },
            {
                "id": "e",
                "text": "Arrhythmias"
            }
        ],
        "correctId": "c",
        "explanation": "OSA is associated with hypertension and cardiovascular complications, rather than hypotension."
    },
    {
        "id": "q12",
        "question": "12. The nonbenzodiazepine hypnotic drug has a rapid onset, a half-life of ~1 hour, and no active metabolites. It decreases time to sleep onset, but does not increase the total sleep time.",
        "options": [
            {
                "id": "a",
                "text": "Zolpidem"
            },
            {
                "id": "b",
                "text": "Zaleplon"
            },
            {
                "id": "c",
                "text": "Eszopiclone"
            },
            {
                "id": "d",
                "text": "Quazepam"
            },
            {
                "id": "e",
                "text": "Pyrilamine"
            }
        ],
        "correctId": "b",
        "explanation": "Zaleplon's signature profile includes a ~1-hour half-life, making it ideal for sleep onset without increasing total sleep time."
    },
    {
        "id": "q13",
        "question": "13. The most common treatments for cataplexy involve the followings, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Imipramine"
            },
            {
                "id": "b",
                "text": "Protriptyline"
            },
            {
                "id": "c",
                "text": "Clomipramine"
            },
            {
                "id": "d",
                "text": "Modafinil"
            },
            {
                "id": "e",
                "text": "Fluoxetine"
            }
        ],
        "correctId": "d",
        "explanation": "Modafinil treats daytime sleepiness but does not have efficacy for cataplexy, unlike the listed antidepressants."
    },
    {
        "id": "q14",
        "question": "14. M.K. is 47 years-old man who requested a treatment that can help him fall asleep rapidly and does not affect his ability to drive his taxi in the early morning.",
        "options": [
            {
                "id": "a",
                "text": "Quazepam"
            },
            {
                "id": "b",
                "text": "Triazolam"
            },
            {
                "id": "c",
                "text": "Zaleplon"
            },
            {
                "id": "d",
                "text": "Zolpidem"
            },
            {
                "id": "e",
                "text": "Mirtazapine"
            }
        ],
        "correctId": "c",
        "explanation": "Due to its ultra-short half-life, Zaleplon is the best choice for patients who need to be fully alert (like a taxi driver) shortly after waking."
    },
    {
        "id": "q15",
        "question": "15. Z.L is 38 years old female suffers from insomnia. She has a medical history of glaucoma and depression. What is the best sedative for her?",
        "options": [
            {
                "id": "a",
                "text": "Lemborexant"
            },
            {
                "id": "b",
                "text": "Mirtazapine"
            },
            {
                "id": "c",
                "text": "Suvorexant"
            },
            {
                "id": "d",
                "text": "Amitriptyline"
            },
            {
                "id": "e",
                "text": "Diphenhydramine"
            }
        ],
        "correctId": "b",
        "explanation": "Mirtazapine is an antidepressant with sedative properties that can treat both her depression and insomnia while avoiding the risks of some other sedatives in glaucoma."
    },
    {
        "id": "q16",
        "question": "16. A.J. is 53 years old man who suffers from insomnia in the last 2.5 months. What can you consider the type of insomnia for this patient?",
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
        "explanation": "Insomnia lasting between two nights and three months is categorized as short-term."
    },
    {
        "id": "q17",
        "question": "17. A patient with chronic insomnia was treated by zolpidem and educated about sleep hygiene. Which one of the following statements regarding the evaluation of therapeutic outcome for this patient is true?",
        "options": [
            {
                "id": "a",
                "text": "After 1 week of therapy, the patient should be assessed for drug adherence, effectiveness, and adverse events."
            },
            {
                "id": "b",
                "text": "After 7 days of therapy, the patient should be assessed for drug effectiveness, adverse events, and adherence to non-pharmacologic recommendations."
            },
            {
                "id": "c",
                "text": "After 1 week of therapy, the patient should be assessed for drug effectiveness, and adverse events."
            },
            {
                "id": "d",
                "text": "After 1 month of therapy, the patient should be assessed for drug effectiveness, adverse events, and adherence to non-pharmacologic recommendations."
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "b",
        "explanation": "Standard assessment after initiating therapy for chronic insomnia should occur at the 7-day mark to check for efficacy, side effects, and adherence to non-drug measures."
    },
    {
        "id": "q18",
        "question": "18. A 58 years old man suffers from insomnia. Which one of the followings is a sleep hygiene recommendation?",
        "options": [
            {
                "id": "a",
                "text": "Go to bed only when sleepy."
            },
            {
                "id": "b",
                "text": "Avoid trying to force sleep."
            },
            {
                "id": "c",
                "text": "Avoid daytime naps."
            },
            {
                "id": "d",
                "text": "Create a comfortable sleep environment."
            },
            {
                "id": "e",
                "text": "Schedule worry time during the day."
            }
        ],
        "correctId": "d",
        "explanation": "While all listed options are part of behavioral interventions, creating a comfortable sleep environment is a specific, core sleep hygiene recommendation."
    },
    {
        "id": "q19",
        "question": "19. J.F is 36 years man with insomnia and history of crystal (methamphetamine) abuse. What is the preferred drug for treatment of JF insomnia?",
        "options": [
            {
                "id": "a",
                "text": "Lorazepam"
            },
            {
                "id": "b",
                "text": "Triazolam"
            },
            {
                "id": "c",
                "text": "Trazodone"
            },
            {
                "id": "d",
                "text": "Temazepam"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "c",
        "explanation": "Trazodone is a non-controlled antidepressant often used for sleep in patients with a history of substance abuse to avoid the risk of addiction."
    },
    {
        "id": "q20",
        "question": "20. All the antidepressants below are good sedatives for insomnia EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Amitriptyline"
            },
            {
                "id": "b",
                "text": "Doxepin"
            },
            {
                "id": "c",
                "text": "Fluoxetine"
            },
            {
                "id": "d",
                "text": "Nortriptyline"
            },
            {
                "id": "e",
                "text": "Mirtazapine"
            }
        ],
        "correctId": "c",
        "explanation": "Fluoxetine is typically activating and can actually cause insomnia, whereas the others are known for their sedative effects."
    },
    {
        "id": "q21",
        "question": "21. Clearance of triazolam is reduced and plasma concentration is elevated with all these agents, except:",
        "options": [
            {
                "id": "a",
                "text": "Erythromycin"
            },
            {
                "id": "b",
                "text": "Nefazodone"
            },
            {
                "id": "c",
                "text": "Fluvoxamine"
            },
            {
                "id": "d",
                "text": "Rifampin"
            },
            {
                "id": "e",
                "text": "Ketoconazole"
            }
        ],
        "correctId": "d",
        "explanation": "Rifampin is an enzyme inducer that increases clearance and *lowers* plasma levels, whereas the other options are inhibitors that *increase* triazolam levels."
    }
],

  'anxiety': [
    {
        "id": "q89",
        "question": "89. The most frequently prescribed drugs for the treatment of acute anxiety are :",
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
        "explanation": "Benzodiazepines are the most frequently prescribed drugs for acute anxiety due to their rapid onset of action and effectiveness in quickly reducing anxiety symptoms."
    },
    {
        "id": "q94",
        "question": "94. A 23 year-old otherwise healthy woman with GAD has no past history of drug or alcohol abuse and no family history of substance abuse. She is started on Lorazepam 0.5 mg three times daily. Which of the following side effects will you warn her about?",
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
        "explanation": "Benzodiazepines like lorazepam commonly cause sedation, slowed reaction time, anterograde amnesia, and physical dependence leading to withdrawal symptoms upon abrupt discontinuation."
    },
    {
        "id": "q95",
        "question": "95. Regarding anxiety disorders, The drug of choice for the management of choice generalized anxiety disorder is:",
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
        "explanation": "Selective serotonin reuptake inhibitors (SSRIs) like citalopram, escitalopram, paroxetine, and sertraline are considered first-line pharmacotherapy for the long-term management of GAD."
    },
    {
        "id": "q102",
        "question": "102. Common medical illnesses associated with symptoms of anxiety are listed below, EXCEPT:",
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
        "correctId": "e",
        "explanation": "While B12 deficiency can cause neuropsychiatric symptoms, it is not typically listed as a common medical illness associated with anxiety symptoms. Depression, ulcerative colitis, SLE, and migraine all have high comorbidity with anxiety disorders."
    },
    {
        "id": "q4",
        "question": "4. A Patient presented with generalized anxiety disorder, all these medications can be used in the treatment of anxiety EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Pregabalin"
            },
            {
                "id": "b",
                "text": "Corticosteroids"
            },
            {
                "id": "c",
                "text": "Buspirone"
            },
            {
                "id": "d",
                "text": "Hydroxyzine"
            },
            {
                "id": "e",
                "text": "Antidepressants"
            }
        ],
        "correctId": "b",
        "explanation": "Corticosteroids can actually cause or exacerbate anxiety; they are not used to treat GAD. The other options (pregabalin, buspirone, hydroxyzine, antidepressants) are all used in the treatment of anxiety disorders."
    },
    {
        "id": "q30",
        "question": "30. Regarding general anxiety disorders, which symptoms of GAD are benzodiazepines more effective for?",
        "options": [
            {
                "id": "a",
                "text": "Psychic symptoms"
            },
            {
                "id": "b",
                "text": "Emotional symptoms"
            },
            {
                "id": "c",
                "text": "Somatic and autonomic symptoms"
            },
            {
                "id": "d",
                "text": "Behavioral symptoms"
            },
            {
                "id": "e",
                "text": "none of the above"
            }
        ],
        "correctId": "c",
        "explanation": "Benzodiazepines are particularly effective for the somatic and autonomic symptoms of anxiety (e.g., palpitations, sweating, tremor) due to their muscle relaxant and central nervous system depressant effects."
    },
    {
        "id": "q31",
        "question": "31. Regarding general anxiety disorders, what is the recommended approach for benzodiazepine dosing in older patients?",
        "options": [
            {
                "id": "a",
                "text": "Use high doses of short-elimination half-life agents"
            },
            {
                "id": "b",
                "text": "Use high doses of long half-life agents"
            },
            {
                "id": "c",
                "text": "Use low doses of short-elimination half-life agents"
            },
            {
                "id": "d",
                "text": "Use low doses of long half-life agents"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "d",
        "explanation": "In older patients, benzodiazepines with long half-lives (e.g., diazepam) are often avoided due to accumulation and risk of falls. However, if used, they should be started at low doses. Short-acting agents may cause withdrawal between doses. The file's answer indicates low doses of long half-life agents, but clinical practice often prefers low doses of short-to-intermediate agents. The answer is based on the provided key."
    },
    {
        "id": "q55",
        "question": "55. B.C is 33 years old female who is presented to the emergency department with acute symptoms of excessive anxiety, and irritability her sister reported that she recently has worries that are difficult to control, and she had trouble concentrating, her physical symptoms include restlessness, fatigue, muscle tension, sleep disturbance, and irritability. What is the best treatment option for this case?",
        "options": [
            {
                "id": "a",
                "text": "Amitriptyline"
            },
            {
                "id": "b",
                "text": "Diazepam"
            },
            {
                "id": "c",
                "text": "Sertraline"
            },
            {
                "id": "d",
                "text": "Doluxetine"
            },
            {
                "id": "e",
                "text": "Imipramine"
            }
        ],
        "correctId": "b",
        "explanation": "The patient presents with acute anxiety symptoms. Benzodiazepines like diazepam are the best choice for rapid relief of acute anxiety."
    },
    {
        "id": "q70",
        "question": "70. All the following drugs are associated with development GAD except",
        "options": [
            {
                "id": "a",
                "text": "Venlafaxine"
            },
            {
                "id": "b",
                "text": "Carbamazepine"
            },
            {
                "id": "c",
                "text": "propranolol"
            },
            {
                "id": "d",
                "text": "Indomethacin"
            },
            {
                "id": "e",
                "text": "INH"
            }
        ],
        "correctId": "a",
        "explanation": "Venlafaxine is actually used to treat GAD, not cause it. The other drugs (carbamazepine, propranolol, indomethacin, isoniazid) can cause or exacerbate anxiety symptoms."
    },
    {
        "id": "q25",
        "question": "25. Regarding generalized anxiety disorder, which of the following medications is/are appropriate for the control of a 46-year-old female with a generalized anxiety disorder?",
        "options": [
            {
                "id": "a",
                "text": "Duloxetine"
            },
            {
                "id": "b",
                "text": "Venlafaxine extended-release"
            },
            {
                "id": "c",
                "text": "Escitalopram"
            },
            {
                "id": "d",
                "text": "Paroxetine"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "e",
        "explanation": "Duloxetine, venlafaxine XR, escitalopram, and paroxetine are all FDA-approved first-line treatments for generalized anxiety disorder."
    },
    {
        "id": "q85",
        "question": "85. Regarding the use of Benzodiazepines in treatment of generalized anxiety disorder, all the following statements are true, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Diazepam and clorazepate have rapid antianxiety effects, but a shorter duration of effect after a single dose than would be predicted based on half-life"
            },
            {
                "id": "b",
                "text": "Lorazepam and oxazepam are recommended for immediate relief of anxiety"
            },
            {
                "id": "c",
                "text": "Intramuscular diazepam and chlordiazepoxide should be avoided because of variability in rate and extent of absorption"
            },
            {
                "id": "d",
                "text": "Addition of ketoconazole can increase the blood levels of alprazolam"
            },
            {
                "id": "e",
                "text": "Addition of ritonavir can increase the blood levels of diazepam"
            }
        ],
        "correctId": "a",
        "explanation": "Diazepam and clorazepate have long half-lives and produce prolonged effects. The statement about shorter duration is incorrect. The other options are accurate."
    },
    {
        "id": "q89",
        "question": "89. Regarding diagnosis of GAD, the diagnosis of generalized anxiety disorder requires excessive anxiety and worry most days for at least:",
        "options": [
            {
                "id": "a",
                "text": "3 months"
            },
            {
                "id": "b",
                "text": "6 months"
            },
            {
                "id": "c",
                "text": "1 month"
            },
            {
                "id": "d",
                "text": "2 months"
            },
            {
                "id": "e",
                "text": "8 weeks"
            }
        ],
        "correctId": "b",
        "explanation": "According to DSM-5, the diagnosis of GAD requires excessive anxiety and worry occurring more days than not for at least 6 months."
    },
    {
        "id": "q90",
        "question": "90. First-line treatment of GAD, the following are first-line drugs approved to be used in the treatment of generalized anxiety disorder, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Armodafinil"
            },
            {
                "id": "b",
                "text": "Duloxetine"
            },
            {
                "id": "c",
                "text": "Paroxetine"
            },
            {
                "id": "d",
                "text": "Venlafaxine"
            },
            {
                "id": "e",
                "text": "Escitalopram"
            }
        ],
        "correctId": "a",
        "explanation": "Armodafinil is a wakefulness-promoting agent used for narcolepsy and shift work disorder; it is not approved or considered first-line for GAD. The others (duloxetine, paroxetine, venlafaxine, escitalopram) are FDA-approved for GAD."
    },
    {
        "id": "q9",
        "question": "9. Regarding the use of benzodiazepines in treating anxiety disorder, which of the following is incorrect?",
        "options": [
            {
                "id": "a",
                "text": "Benzodiazepines are the most effective and frequently prescribed drugs."
            },
            {
                "id": "b",
                "text": "Most of the improvement occurs in the first 2 weeks of therapy."
            },
            {
                "id": "c",
                "text": "65% - 75% of patients with GAD have a moderate response."
            },
            {
                "id": "d",
                "text": "More effective for somatic and autonomic symptoms of GAD."
            },
            {
                "id": "e",
                "text": "More effective than antidepressants for the psychic symptoms (eg, apprehension and worry)."
            }
        ],
        "correctId": "e",
        "explanation": "Antidepressants (SSRIs/SNRIs) are actually more effective than benzodiazepines for the psychic symptoms of GAD (e.g., worry, apprehension). Benzodiazepines are more effective for somatic symptoms."
    },
    {
        "id": "q10",
        "question": "10. Concerning treatment of generalized anxiety disorder. One of the drugs most frequently used to treat acute anxiety",
        "options": [
            {
                "id": "a",
                "text": "Tricyclic antidepressants"
            },
            {
                "id": "b",
                "text": "Benzodiazepines"
            },
            {
                "id": "c",
                "text": "Serotonin selective receptor inhibitors."
            },
            {
                "id": "d",
                "text": "Buspirone 5-HT1A partial agonist"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "b",
        "explanation": "Benzodiazepines are the most frequently used drugs for the rapid relief of acute anxiety due to their fast onset."
    },
    {
        "id": "q31",
        "question": "31. R.M is 27 years old female with history of anxiety who had tried different courses of antidepressants and benzodiazepines without an adequate response. The next step of her treatment would be:",
        "options": [
            {
                "id": "a",
                "text": "Quetiapine"
            },
            {
                "id": "b",
                "text": "Arpiprazole"
            },
            {
                "id": "c",
                "text": "Buspirone"
            },
            {
                "id": "d",
                "text": "Pregabalin"
            },
            {
                "id": "e",
                "text": "Risperidone"
            }
        ],
        "correctId": "d",
        "explanation": "Pregabalin is a second-line or adjunctive treatment for GAD in patients who have not responded adequately to first-line antidepressants and benzodiazepines."
    },
    {
        "id": "q37",
        "question": "37. Although the treatment of GAD can be achieved by a wide range of medications. Acute and long-term therapy is best achieved by",
        "options": [
            {
                "id": "a",
                "text": "Venlafaxine"
            },
            {
                "id": "b",
                "text": "Diazepam"
            },
            {
                "id": "c",
                "text": "Hydroxyzine"
            },
            {
                "id": "d",
                "text": "Buspirone"
            },
            {
                "id": "e",
                "text": "All of them"
            }
        ],
        "correctId": "a",
        "explanation": "Venlafaxine (an SNRI) is effective for both acute and long-term treatment of GAD. Benzodiazepines are for acute use but not ideal long-term due to dependence risk; buspirone and hydroxyzine are alternatives but not as robust for both phases."
    },
    {
        "id": "q48",
        "question": "48. Anxiety Symptoms can be developed with several medicines, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "prednisone"
            },
            {
                "id": "b",
                "text": "theophylline"
            },
            {
                "id": "c",
                "text": "ibuprofen"
            },
            {
                "id": "d",
                "text": "levothyroxine"
            },
            {
                "id": "e",
                "text": "cerivastatin"
            }
        ],
        "correctId": "c",
        "explanation": "Ibuprofen is not typically associated with causing anxiety symptoms. Prednisone (corticosteroids), theophylline, levothyroxine (if over-replaced), and cerivastatin (a statin, though rarely) can all cause anxiety as a side effect."
    },
    {
        "id": "q98",
        "question": "98. concerning Generalized anxiety disorder. The diagnosis requires excessive anxiety and worry most days for at least",
        "options": [
            {
                "id": "a",
                "text": "3 months"
            },
            {
                "id": "b",
                "text": "6 months"
            },
            {
                "id": "c",
                "text": "1 month"
            },
            {
                "id": "d",
                "text": "2 months"
            },
            {
                "id": "e",
                "text": "8 weeks"
            }
        ],
        "correctId": "b",
        "explanation": "DSM-5 criteria for GAD require the presence of excessive anxiety and worry for at least 6 months."
    },
    {
        "id": "q105",
        "question": "105. Which of the following antidepressants can be used in pregnant women with anxiety?",
        "options": [
            {
                "id": "a",
                "text": "Venlafaxine"
            },
            {
                "id": "b",
                "text": "escitalopram"
            },
            {
                "id": "c",
                "text": "paroxetine"
            },
            {
                "id": "d",
                "text": "sertraline"
            },
            {
                "id": "e",
                "text": "Quetiapine"
            }
        ],
        "correctId": "d",
        "explanation": "Sertraline is generally considered the preferred SSRI during pregnancy due to its relatively favorable safety profile and extensive experience. Paroxetine is associated with teratogenic risk; quetiapine is an antipsychotic."
    },
    {
        "id": "q33",
        "question": "33. Regarding nonpharmacological therapy for generalized anxiety disorder. Patients should avoid all of the following EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Diet pills."
            },
            {
                "id": "b",
                "text": "Nicotine."
            },
            {
                "id": "c",
                "text": "Caffeine."
            },
            {
                "id": "d",
                "text": "Exercise."
            },
            {
                "id": "e",
                "text": "Excessive alcohol"
            }
        ],
        "correctId": "d",
        "explanation": "Regular exercise is a beneficial nonpharmacological intervention for anxiety. Diet pills, nicotine, caffeine, and excessive alcohol can worsen anxiety symptoms."
    },
    {
        "id": "q36",
        "question": "36. It can be used in both, GAD and panic attack as first line treatment",
        "options": [
            {
                "id": "a",
                "text": "duloxetine"
            },
            {
                "id": "b",
                "text": "paroxetine"
            },
            {
                "id": "c",
                "text": "sertraline"
            },
            {
                "id": "d",
                "text": "venlafaxine"
            },
            {
                "id": "e",
                "text": "hydroxyzine"
            }
        ],
        "correctId": "b",
        "explanation": "Paroxetine is an SSRI approved for both GAD and panic disorder. Other SSRIs like sertraline are approved for panic but not all are approved for GAD. Venlafaxine is approved for GAD but not panic. The file's answer is paroxetine."
    },
    {
        "id": "q43",
        "question": "43. Which of the following medical illnesses Associated with Anxiety Symptoms?",
        "options": [
            {
                "id": "a",
                "text": "Angina"
            },
            {
                "id": "b",
                "text": "Cushing disease"
            },
            {
                "id": "c",
                "text": "irritable bowel syndrome"
            },
            {
                "id": "d",
                "text": "stroke"
            },
            {
                "id": "e",
                "text": "all of the above"
            }
        ],
        "correctId": "e",
        "explanation": "All listed conditions (angina, Cushing disease, irritable bowel syndrome, stroke) can present with or be associated with anxiety symptoms."
    },
    {
        "id": "q54",
        "question": "54. A patient has been taking a benzodiazepine medication for anxiety for 6 months. Their doctor wants to slowly wean them off the medication. Which of the following tapering schedules is MOST appropriate?",
        "options": [
            {
                "id": "a",
                "text": "Reduce dosage by 50% immediately"
            },
            {
                "id": "b",
                "text": "Reduce dosage by 25% per week"
            },
            {
                "id": "c",
                "text": "Reduce dosage by one-eighth every day"
            },
            {
                "id": "d",
                "text": "No tapering is necessary"
            },
            {
                "id": "e",
                "text": "Weaning can't be done safely after 6 months"
            }
        ],
        "correctId": "b",
        "explanation": "A gradual taper is essential to avoid withdrawal symptoms. Reducing by 25% per week is a reasonable and commonly recommended schedule."
    },
    {
        "id": "q103",
        "question": "103. The diagnosis of generalized anxiety disorder (GAD) requires excessive anxiety and worry most days for?",
        "options": [
            {
                "id": "a",
                "text": "at least three months with at least three physical symptoms present"
            },
            {
                "id": "b",
                "text": "at least six months with at least six physical symptoms present"
            },
            {
                "id": "c",
                "text": "at least six months with at least two physical symptoms present"
            },
            {
                "id": "d",
                "text": "at least six months with at least three physical symptoms present"
            },
            {
                "id": "e",
                "text": "at least three months with at least two physical symptoms present"
            }
        ],
        "correctId": "d",
        "explanation": "DSM-5 criteria for GAD require excessive anxiety and worry for at least 6 months, associated with three or more of six possible physical symptoms (restlessness, fatigue, concentration difficulty, irritability, muscle tension, sleep disturbance)."
    }
],
  'depressive': [
    {
        "id": "q1",
        "question": "1. An antidepressant drug that can cause anticholinergic side effects (eg. dry mouth, blurred vision, constipation,) and sedation is",
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
        "explanation": "Amitriptyline is a tricyclic antidepressant (TCA). TCAs are known for their significant anticholinergic side effects (dry mouth, constipation, blurred vision) and sedation, which are much less common with SSRIs (fluoxetine, escitalopram, sertraline)."
    },
    {
        "id": "q3",
        "question": "3. The electroconvulsive therapy (ECT) may be considered as option for depressed patients in all the following cases EXCEPT",
        "options": [
            {
                "id": "a",
                "text": "A rapid response is needed"
            },
            {
                "id": "b",
                "text": "Risks of other treatments outweigh potential benefits"
            },
            {
                "id": "c",
                "text": "There is history of a good response to drugs"
            },
            {
                "id": "d",
                "text": "The patient prefers ECT"
            },
            {
                "id": "e",
                "text": "There is history of a poor response to drugs"
            }
        ],
        "correctId": "c",
        "explanation": "ECT is typically reserved for cases where pharmacotherapy has failed, a rapid response is needed, or risks of drugs are too high. If a patient has a history of a good response to drugs, they would likely be treated with medication first."
    },
    {
        "id": "q6",
        "question": "6. A breast feeding woman was diagnosed to have depression. Which one of the following antidepressant drugs is the preferred one in this case?",
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
        "explanation": "Sertraline is generally considered the preferred antidepressant for breastfeeding mothers because it has low excretion into breast milk and a good safety profile in infants."
    },
    {
        "id": "q16",
        "question": "16. A young woman suffered from depression. She has a history of anorexia nervosa. What is the antidepressant that should not be used for this patient?",
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
        "explanation": "Bupropion can cause weight loss and may lower the seizure threshold. It is contraindicated in patients with eating disorders (anorexia or bulimia nervosa) due to an increased risk of seizures."
    },
    {
        "id": "q20",
        "question": "20. A patient with severe depression and history of arrhythmia and uncontrolled hypertension. He was treated by fluoxetine. Despite good adherence to therapy by this patient to fluoxetine but no response was detected. What is the best action here?",
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
        "explanation": "In cases of inadequate response to an SSRI, the next step could be to increase the dose, switch to another antidepressant, or add augmentation. Given the patient's history of arrhythmia and uncontrolled hypertension, adding psychotherapy is a safe and effective approach. Switching to a TCA like amitriptyline or imipramine could be dangerous due to cardiotoxicity."
    },
    {
        "id": "q21",
        "question": "21. The patient who was prescribed antidepressant agent must be monitored regularly for adverse effects. A pretreatment ECG is recommended before starting which one of the following antidepressant drugs?",
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
        "explanation": "Imipramine is a tricyclic antidepressant (TCA). TCAs can cause cardiac conduction abnormalities (e.g., QT prolongation), so a pretreatment ECG is recommended, especially in patients with cardiac risk factors."
    },
    {
        "id": "q28",
        "question": "28. In regard to the clinical presentation of depression. Which one of the followings is a physical symptom for depression?",
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
        "explanation": "Headache is a physical (somatic) symptom of depression. The other options (confusion, suicidal thinking, crying, hopelessness) are cognitive or emotional symptoms."
    },
    {
        "id": "q46",
        "question": "46. In regard to diagnosis of depression. Which one of the followings is the Diagnostic Criteria for Major Depressive Episode?",
        "options": [
            {
                "id": "a",
                "text": "At least five symptoms must be consistently present (nearly every day) over a 2-week period"
            },
            {
                "id": "b",
                "text": "At least two symptoms must be consistently present (nearly every day) over a 2-week period"
            },
            {
                "id": "c",
                "text": "At least five symptoms must be consistently present (nearly every day) over a 6-week period"
            },
            {
                "id": "d",
                "text": "At least two symptoms must be consistently present (nearly every day) over a 5-week period"
            },
            {
                "id": "e",
                "text": "At least five symptoms must be intermittently present over a 2-week period"
            }
        ],
        "correctId": "a",
        "explanation": "According to DSM-5 criteria, a major depressive episode requires at least five symptoms present nearly every day during the same 2-week period, with at least one symptom being depressed mood or loss of interest/pleasure."
    },
    {
        "id": "q50",
        "question": "50. The most common adverse effect profile of the SSRIs is includes:",
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
        "explanation": "Sexual dysfunction (e.g., decreased libido, delayed ejaculation, anorgasmia) is the most common and bothersome side effect of SSRIs, occurring in a significant percentage of patients."
    },
    {
        "id": "q15",
        "question": "15. According to the depression monoamine hypothesis, there is a decrease in the brain level of",
        "options": [
            {
                "id": "a",
                "text": "Serotonin, acetylcholine, and dopamine"
            },
            {
                "id": "b",
                "text": "Serotonin, norepinephrine, and dopamine"
            },
            {
                "id": "c",
                "text": "Serotonin, norepinephrine, and epinephrine"
            },
            {
                "id": "d",
                "text": "Serotonin, GABA, and dopamine"
            },
            {
                "id": "e",
                "text": "Serotonin, GABA, and acetylcholine"
            }
        ],
        "correctId": "b",
        "explanation": "The monoamine hypothesis of depression proposes that depression is caused by a deficiency in monoamine neurotransmitters, specifically serotonin, norepinephrine, and dopamine."
    },
    {
        "id": "q16",
        "question": "16. Some medications are associated with depressive symptoms. Which one of the following drugs is not implicated in depressive symptoms?",
        "options": [
            {
                "id": "a",
                "text": "Bisoprolol"
            },
            {
                "id": "b",
                "text": "Isotretinoin"
            },
            {
                "id": "c",
                "text": "Oral contraceptive"
            },
            {
                "id": "d",
                "text": "Interferon-\u03b21a"
            },
            {
                "id": "e",
                "text": "Metformin"
            }
        ],
        "correctId": "e",
        "explanation": "Metformin is an antidiabetic medication not typically associated with causing depressive symptoms. Beta-blockers (bisoprolol), isotretinoin, oral contraceptives, and interferons are all known to potentially cause or exacerbate depression."
    },
    {
        "id": "q17",
        "question": "17. A 16 years old man with depression. Which antidepressant drug is FDA approved for treatment of this patient?",
        "options": [
            {
                "id": "a",
                "text": "Escitalopram"
            },
            {
                "id": "b",
                "text": "Desipramine"
            },
            {
                "id": "c",
                "text": "Sertraline"
            },
            {
                "id": "d",
                "text": "Citalopram"
            },
            {
                "id": "e",
                "text": "Fluvoxamine"
            }
        ],
        "correctId": "a",
        "explanation": "Escitalopram is FDA-approved for the treatment of major depressive disorder in adolescents aged 12-17 years. Fluoxetine is also approved, but among the options, escitalopram is correct according to the file."
    },
    {
        "id": "q18",
        "question": "18. A patient with depression was only partially responding to treatment by imipramine. All of the followings can be used to augment antidepressant effect EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Lithium"
            },
            {
                "id": "b",
                "text": "Haloperidol"
            },
            {
                "id": "c",
                "text": "Aripiprazole"
            },
            {
                "id": "d",
                "text": "Quetiapine"
            },
            {
                "id": "e",
                "text": "Brexpiprazole"
            }
        ],
        "correctId": "b",
        "explanation": "Lithium and atypical antipsychotics (aripiprazole, quetiapine, brexpiprazole) are used as augmentation strategies for treatment-resistant depression. Haloperidol is a first-generation antipsychotic not typically used for this purpose."
    },
    {
        "id": "q19",
        "question": "19. M.K is 56 years old man diagnosed to have major depression. Which one of the following drugs when given to this patient require regular monitoring of blood pressure?",
        "options": [
            {
                "id": "a",
                "text": "Fluoxetine"
            },
            {
                "id": "b",
                "text": "Maprotiline"
            },
            {
                "id": "c",
                "text": "Venlafaxine"
            },
            {
                "id": "d",
                "text": "Phenelzine"
            },
            {
                "id": "e",
                "text": "Vilazodone"
            }
        ],
        "correctId": "d",
        "explanation": "Phenelzine is a monoamine oxidase inhibitor (MAOI). MAOIs can cause hypertensive crises with tyramine-containing foods and also cause orthostatic hypotension, requiring blood pressure monitoring."
    },
    {
        "id": "q43",
        "question": "43. Major depressive disorders have several symptoms. All the followings are physical symptoms of major depressive disorders EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Crying"
            },
            {
                "id": "b",
                "text": "Loss of sexual interest"
            },
            {
                "id": "c",
                "text": "Fatigue"
            },
            {
                "id": "d",
                "text": "pain"
            },
            {
                "id": "e",
                "text": "Sleep disturbance"
            }
        ],
        "correctId": "a",
        "explanation": "Crying is an emotional/behavioral symptom, not a physical (somatic) symptom. Loss of sexual interest, fatigue, pain, and sleep disturbances are physical symptoms."
    },
    {
        "id": "q50",
        "question": "50. ALL of the following drugs consider first-line antidepressants EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Duloxetine"
            },
            {
                "id": "b",
                "text": "Fluoxetine"
            },
            {
                "id": "c",
                "text": "Paroxetine"
            },
            {
                "id": "d",
                "text": "Sertraline"
            },
            {
                "id": "e",
                "text": "Citalopram"
            }
        ],
        "correctId": "a",
        "explanation": "All options are first-line antidepressants. The file marks \"a\" as the exception, but duloxetine (an SNRI) is also a first-line agent. This may reflect a specific exam context, but clinically all are first-line."
    },
    {
        "id": "q51",
        "question": "51. ALL of the following drugs causing significant sexual dysfunction EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Citalopram"
            },
            {
                "id": "b",
                "text": "Mirtazapine"
            },
            {
                "id": "c",
                "text": "Duloxetine"
            },
            {
                "id": "d",
                "text": "Sertraline"
            },
            {
                "id": "e",
                "text": "Imipramine"
            }
        ],
        "correctId": "b",
        "explanation": "Mirtazapine is associated with a lower rate of sexual dysfunction compared to SSRIs (citalopram, sertraline), SNRIs (duloxetine), and TCAs (imipramine)."
    },
    {
        "id": "q91",
        "question": "91. Regarding the treatment of depression. A 5-week break after fluoxetine discontinuation is critical before starting",
        "options": [
            {
                "id": "a",
                "text": "MAOIs"
            },
            {
                "id": "b",
                "text": "BZDs"
            },
            {
                "id": "c",
                "text": "Ketamine"
            },
            {
                "id": "d",
                "text": "Citalopram"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "a",
        "explanation": "Fluoxetine has a long half-life (about 2 weeks for its active metabolite). A washout period of 5 weeks is recommended when switching from fluoxetine to an MAOI to avoid serotonin syndrome."
    },
    {
        "id": "q6",
        "question": "6. A young man was diagnosed to have depression. What is the major and specific problem that can occur in the first days of starting treatment with antidepressants in young adults?",
        "options": [
            {
                "id": "a",
                "text": "Withdrawal symptoms"
            },
            {
                "id": "b",
                "text": "Increase suicide thinking"
            },
            {
                "id": "c",
                "text": "Delayed response"
            },
            {
                "id": "d",
                "text": "Increased risk of drug side effects"
            },
            {
                "id": "e",
                "text": "Higher risk of drug-drug interactions"
            }
        ],
        "correctId": "b",
        "explanation": "Antidepressants carry a black box warning for an increased risk of suicidal thinking and behavior in children, adolescents, and young adults, particularly during the first few weeks of treatment."
    },
    {
        "id": "q10",
        "question": "10. About the pharmacological treatment for population suffering from depression. Which of the following statements about the selective serotonin reuptake inhibitors (SSRI) do you consider correct?",
        "options": [
            {
                "id": "a",
                "text": "Because of their relative safety at regular doses and improved tolerability compared with earlier agents, they are considered the first line of treatment for depression disorder."
            },
            {
                "id": "b",
                "text": "Citalopram and escitalopram may cause an increase in the QT interval at doses above 50 mg/day."
            },
            {
                "id": "c",
                "text": "The pharmacokinetics of SSRI are greatly affected by how well the kidneys are working and how old the person is."
            },
            {
                "id": "d",
                "text": "A 5-week washout after fluoxetine discontinuation critical before starting an TCA."
            },
            {
                "id": "e",
                "text": "Weight loss is one of the primary side effects for SSRI."
            }
        ],
        "correctId": "a",
        "explanation": "SSRIs are first-line for depression due to their improved safety and tolerability profile compared to TCAs and MAOIs. The other statements are partially incorrect or not primary."
    },
    {
        "id": "q16",
        "question": "16. Regarding the treatment of depressive Disorders, which of the following drugs should be avoided in the case of a depressed patient with active liver diseases:",
        "options": [
            {
                "id": "a",
                "text": "Trazodone"
            },
            {
                "id": "b",
                "text": "Nefazodone"
            },
            {
                "id": "c",
                "text": "Fluoxetine"
            },
            {
                "id": "d",
                "text": "Levomilnacipran"
            },
            {
                "id": "e",
                "text": "Citalopram"
            }
        ],
        "correctId": "b",
        "explanation": "Nefazodone has been associated with rare but severe hepatotoxicity (liver failure) and should be avoided in patients with active liver disease."
    },
    {
        "id": "q30",
        "question": "30. A 35-years old man suffering from Depression. After 8 weeks of sertraline therapy, the drug doesn't seem to be having a sufficient effect, but some symptoms of sexual dysfunction and insomnia. He would prefer to be prescribed a different class of antidepressant. What would you recommend next?",
        "options": [
            {
                "id": "a",
                "text": "Citalopram."
            },
            {
                "id": "b",
                "text": "Fluoxetine."
            },
            {
                "id": "c",
                "text": "Mirtazapine."
            },
            {
                "id": "d",
                "text": "Pregabalin."
            },
            {
                "id": "e",
                "text": "Venlafaxine"
            }
        ],
        "correctId": "c",
        "explanation": "Mirtazapine is a different class (NaSSA) with a lower incidence of sexual dysfunction and can be beneficial for insomnia. Switching to another SSRI (citalopram, fluoxetine) would not address sexual dysfunction."
    },
    {
        "id": "q32",
        "question": "32. Regarding the use of MAOI in the treatment of Depression, one of the following is not true in relation to the use of MAOI to treat the disease.",
        "options": [
            {
                "id": "a",
                "text": "Selegiline inhibits brain MAOI-A and MAOI-B"
            },
            {
                "id": "b",
                "text": "Phenelzine adverse effect is postural hypotension"
            },
            {
                "id": "c",
                "text": "Tranylcypromine is often sedating"
            },
            {
                "id": "d",
                "text": "Phenelzine associated with hepatic damage"
            },
            {
                "id": "e",
                "text": "Isocarboxazide increases concentration of Norepinephrine, 5HT, and Dopamine within synapse"
            }
        ],
        "correctId": "c",
        "explanation": "Tranylcypromine is more stimulating than sedating. The other statements are correct regarding MAOIs."
    },
    {
        "id": "q43",
        "question": "43. Regarding treatment of depression, which one of the following drugs can be used safely in pregnant women or breast-feeding mothers?",
        "options": [
            {
                "id": "a",
                "text": "Duloxetine"
            },
            {
                "id": "b",
                "text": "Sertraline"
            },
            {
                "id": "c",
                "text": "Fluoxetine"
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
        "correctId": "b",
        "explanation": "Sertraline is generally considered the preferred SSRI during pregnancy and breastfeeding due to its favorable safety profile and extensive experience."
    },
    {
        "id": "q93",
        "question": "93. The followings are emotional symptoms of depression, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "sadness"
            },
            {
                "id": "b",
                "text": "headache"
            },
            {
                "id": "c",
                "text": "hopelessness"
            },
            {
                "id": "d",
                "text": "feelings of worthlessness"
            },
            {
                "id": "e",
                "text": "loss of Interest in usual activities"
            }
        ],
        "correctId": "b",
        "explanation": "Headache is a physical (somatic) symptom, not an emotional symptom. Sadness, hopelessness, worthlessness, and loss of interest are emotional/cognitive symptoms."
    },
    {
        "id": "q94",
        "question": "94. Regarding treatment of depression with Bupropion. Regarding Bupropion, the followings are true, EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Inhibits both the norepinephrine and dopamine reuptake"
            },
            {
                "id": "b",
                "text": "The occurrence of seizures is dose related"
            },
            {
                "id": "c",
                "text": "Causes nausea, vomiting, tremor, insomnia, dry mouth, and skin reactions"
            },
            {
                "id": "d",
                "text": "Indicated in patients with bulimia or anorexia nervosa"
            },
            {
                "id": "e",
                "text": "It causes less sexual dysfunction than selective serotonin reuptake inhibitors"
            }
        ],
        "correctId": "d",
        "explanation": "Bupropion is contraindicated in patients with eating disorders (bulimia or anorexia nervosa) due to an increased risk of seizures."
    },
    {
        "id": "q12",
        "question": "12. Some medications interact with MAOIs and can cause fatal hypertensive crisis. One of the following medications does not cause fatal hypertensive crisis if it is taken concurrently with MAOIs:",
        "options": [
            {
                "id": "a",
                "text": "Dextromethorphan"
            },
            {
                "id": "b",
                "text": "Aspirin"
            },
            {
                "id": "c",
                "text": "Carbamazepine"
            },
            {
                "id": "d",
                "text": "Amphetamine"
            },
            {
                "id": "e",
                "text": "Pseudoephedrine"
            }
        ],
        "correctId": "b",
        "explanation": "Aspirin does not cause hypertensive crisis with MAOIs. Dextromethorphan can cause serotonin syndrome, amphetamine and pseudoephedrine can cause hypertensive crisis, and carbamazepine interactions are complex but not typically hypertensive crisis."
    },
    {
        "id": "q29",
        "question": "29. R.D is 44 years old man with negative past medical history, came to the psychiatry clinic complaining of diminished ability to experience pleasure, loss of interest in usual activities, sadness, pessimism, crying, hopelessness, anxiety, feelings of worthlessness. He also reported Weight gain, fatigue, headache, sleep disturbance, increased appetite, and loss of sexual interest. Given the likely diagnosis, what is the first line treatment option?",
        "options": [
            {
                "id": "a",
                "text": "Escitalopram"
            },
            {
                "id": "b",
                "text": "Bupropion"
            },
            {
                "id": "c",
                "text": "Imipramine"
            },
            {
                "id": "d",
                "text": "Trazodone"
            },
            {
                "id": "e",
                "text": "Mirtazapine"
            }
        ],
        "correctId": "a",
        "explanation": "The symptoms describe major depressive disorder. SSRIs like escitalopram are first-line treatment."
    },
    {
        "id": "q39",
        "question": "39. Regarding antidepressants administration for the treatment of major depressive disorder, the following statements are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Antidepressants are equal in efficacy when administered in comparable doses, and they are often classified by chemical structure and/or presumed mechanism"
            },
            {
                "id": "b",
                "text": "The initial choice of antidepressant is often made empirically"
            },
            {
                "id": "c",
                "text": "Older patients can be given the same initial dose given to younger adults"
            },
            {
                "id": "d",
                "text": "At least a 6-week trial of an antidepressant at maximum dosage is considered an adequate trial of that medication"
            },
            {
                "id": "e",
                "text": "An individual's pharmacogenomics may be useful when choosing therapy as a way to better predict antidepressant side effects or response"
            }
        ],
        "correctId": "c",
        "explanation": "Older patients often require lower starting doses due to altered pharmacokinetics, increased sensitivity, and higher risk of side effects."
    },
    {
        "id": "q88",
        "question": "88. R.S is a young adult man who suffers from depression symptoms. According to monoamine hypothesis, the brain level of serotonin and norepinephrine is",
        "options": [
            {
                "id": "a",
                "text": "Both are increased"
            },
            {
                "id": "b",
                "text": "Not affected"
            },
            {
                "id": "c",
                "text": "Both are decreased"
            },
            {
                "id": "d",
                "text": "Both are slightly increased"
            },
            {
                "id": "e",
                "text": "Serotonin is decreased and norepinephrine is increased"
            }
        ],
        "correctId": "c",
        "explanation": "The monoamine hypothesis of depression proposes a deficiency in monoamines, including serotonin and norepinephrine."
    },
    {
        "id": "q89",
        "question": "89. A 25 years old pregnant woman with depression. Why the physician did not prescribe her paroxetine?",
        "options": [
            {
                "id": "a",
                "text": "Because of its effect to increase birth weight"
            },
            {
                "id": "b",
                "text": "Because of its effect to cause respiratory distress"
            },
            {
                "id": "c",
                "text": "Because it has limited benefit for pregnant women"
            },
            {
                "id": "d",
                "text": "Because of its short duration of action"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "b",
        "explanation": "Paroxetine is associated with an increased risk of congenital heart defects and, with late-third-trimester use, persistent pulmonary hypertension of the newborn (PPHN), which causes respiratory distress."
    },
    {
        "id": "q90",
        "question": "90. G.A. is 45 years old man with depression who is not responding to treatment by paroxetine. All of the following options are suitable to manage GA case EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Changing paroxetine to amitriptyline"
            },
            {
                "id": "b",
                "text": "Changing paroxetine to duloxetine"
            },
            {
                "id": "c",
                "text": "Addition of psychotherapy"
            },
            {
                "id": "d",
                "text": "Addition of ECT"
            },
            {
                "id": "e",
                "text": "Increasing paroxetine dose"
            }
        ],
        "correctId": "a",
        "explanation": "Amitriptyline is a TCA with significant side effects and cardiotoxicity. While it is an option, it is not a preferred switch for non-response. The other options are more standard strategies."
    },
    {
        "id": "q91",
        "question": "91. D.K is 54 years old man diagnosed to have major depression. The physician ordered ECG before prescribing a drug to this patient. What do you expect the drug that the physician prescribed for D.K?",
        "options": [
            {
                "id": "a",
                "text": "Fluoxetine"
            },
            {
                "id": "b",
                "text": "Imipramine"
            },
            {
                "id": "c",
                "text": "Venlafaxine"
            },
            {
                "id": "d",
                "text": "Phenelzine"
            },
            {
                "id": "e",
                "text": "Bupropion"
            }
        ],
        "correctId": "b",
        "explanation": "Imipramine is a tricyclic antidepressant (TCA). TCAs can cause cardiac conduction abnormalities, so an ECG is often ordered before initiation."
    },
    {
        "id": "q92",
        "question": "92. A depressed man with a history of epilepsy was prescribed paroxetine. After few months of treatment, he noticed improvement in his depression but with increase in sexual dysfunction. What is the best alternative drug for this patient?",
        "options": [
            {
                "id": "a",
                "text": "Desimipramine"
            },
            {
                "id": "b",
                "text": "Bupropion"
            },
            {
                "id": "c",
                "text": "Mirtazapine"
            },
            {
                "id": "d",
                "text": "Escitalopram"
            },
            {
                "id": "e",
                "text": "Phenelzine"
            }
        ],
        "correctId": "b",
        "explanation": "Bupropion has a low incidence of sexual dysfunction and does not lower the seizure threshold significantly when used at recommended doses, though caution is needed in epilepsy. It is a good alternative for patients experiencing SSRI-induced sexual dysfunction."
    },
    {
        "id": "q96",
        "question": "96. Which of the following clinical presentations of depression is more common in pediatric",
        "options": [
            {
                "id": "a",
                "text": "Loss of pleasure"
            },
            {
                "id": "b",
                "text": "Loss of interest"
            },
            {
                "id": "c",
                "text": "Depressed mood"
            },
            {
                "id": "d",
                "text": "Irritability"
            },
            {
                "id": "e",
                "text": "A and B"
            }
        ],
        "correctId": "d",
        "explanation": "In children and adolescents, depression often presents with irritability rather than the classic depressed mood seen in adults."
    },
    {
        "id": "q109",
        "question": "109. R.S is 68 years old patient with history of Hypertension, MI, DM and depression who was stabilized on Mirtazapine due to its safety profile regarding patients with polypharmacy. recently he developed symptoms indicative of cognitive decline and memory issues. What treatment should you start for this patient?",
        "options": [
            {
                "id": "a",
                "text": "Add Omega 3 capsules"
            },
            {
                "id": "b",
                "text": "Add Donepezil"
            },
            {
                "id": "c",
                "text": "Switch antidepressant with Nefazodone"
            },
            {
                "id": "d",
                "text": "Reduce antidepressant dose"
            },
            {
                "id": "e",
                "text": "Switch antidepressant with Vortioxetine"
            }
        ],
        "correctId": "e",
        "explanation": "Vortioxetine is an antidepressant that has been shown to have beneficial effects on cognitive function in depression. In an elderly patient with cognitive decline, switching to vortioxetine may address both mood and cognitive symptoms."
    },
    {
        "id": "q1",
        "question": "1. A patient was diagnosed to have severe depression. All of the followings are emotional symptom for depression EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Crying"
            },
            {
                "id": "b",
                "text": "Loss of sexual interest"
            },
            {
                "id": "c",
                "text": "Sadness"
            },
            {
                "id": "d",
                "text": "Anxiety"
            },
            {
                "id": "e",
                "text": "Suicide attempt"
            }
        ],
        "correctId": "b",
        "explanation": "Loss of sexual interest is a physical (somatic) symptom of depression, while crying, sadness, anxiety, and suicide attempt are emotional/behavioral symptoms."
    },
    {
        "id": "q2",
        "question": "2. A 24 years old obese man was treated by citalopram. Although his depression was responding to citalopram but he was suffering from sexual dysfunction. Which drug is the best alternative to treat depression with less risk of sexual dysfunction for this patient?",
        "options": [
            {
                "id": "a",
                "text": "Desimpranine"
            },
            {
                "id": "b",
                "text": "Fluoxetine"
            },
            {
                "id": "c",
                "text": "Mirtazapine"
            },
            {
                "id": "d",
                "text": "Bupropion"
            },
            {
                "id": "e",
                "text": "Phenelzine"
            }
        ],
        "correctId": "d",
        "explanation": "Bupropion is well-known for having a low risk of sexual dysfunction. It is a common alternative for patients who experience SSRI-induced sexual side effects."
    },
    {
        "id": "q37",
        "question": "37. Samar, a 18y o student that failed to enter bachelor exam and underwent bad mood with severe depression for several months. Physician prescribed her paroxetine but there is no actual improvement. As a pharmacist, what will you advise physician to prescribe for Samar.",
        "options": [
            {
                "id": "a",
                "text": "imipramine"
            },
            {
                "id": "b",
                "text": "desipramine"
            },
            {
                "id": "c",
                "text": "bupropion"
            },
            {
                "id": "d",
                "text": "escitalopram"
            },
            {
                "id": "e",
                "text": "buspiron"
            }
        ],
        "correctId": "d",
        "explanation": "If a patient fails to respond to one SSRI (paroxetine), switching to another SSRI (escitalopram) is a reasonable next step before trying other classes."
    },
    {
        "id": "q38",
        "question": "38. Ahmed, 19 years old with 110kg weight patient and had heart disease for 16 years. He is suffering from mood depression with less energy, guilt and increased blood pressure for more than 2 weeks. Physician advised to give him",
        "options": [
            {
                "id": "a",
                "text": "fluoxetine"
            },
            {
                "id": "b",
                "text": "amitriptyline"
            },
            {
                "id": "c",
                "text": "desipramine"
            },
            {
                "id": "d",
                "text": "venlafaxine"
            },
            {
                "id": "e",
                "text": "mirtazapine"
            }
        ],
        "correctId": "a",
        "explanation": "Fluoxetine is an SSRI with a favorable cardiovascular profile. TCAs (amitriptyline, desipramine) are cardiotoxic and should be avoided in patients with heart disease. Venlafaxine can increase blood pressure."
    },
    {
        "id": "q46",
        "question": "46. 11 years old Child suffered from boredom, anxiety, failing adjustment, and sleep disturbance, was diagnosed as depressed child, what is the best treatment:",
        "options": [
            {
                "id": "a",
                "text": "Sertraline"
            },
            {
                "id": "b",
                "text": "Escitalopram"
            },
            {
                "id": "c",
                "text": "Desipramine"
            },
            {
                "id": "d",
                "text": "Imipramine"
            },
            {
                "id": "e",
                "text": "Venlafaxine"
            }
        ],
        "correctId": "a",
        "explanation": "Sertraline is FDA-approved for pediatric depression (children aged 6 and older). Fluoxetine is also approved, but sertraline is a common choice."
    },
    {
        "id": "q59",
        "question": "59. Regarding selective serotonin uptake inhibitors, which of the following is correct?",
        "options": [
            {
                "id": "a",
                "text": "Due to their enhanced tolerance and relative safety at standard doses, they are regarded as the primary therapeutic option for depression illness."
            },
            {
                "id": "b",
                "text": "At doses exceeding 50mg/day, both citalopram and escitalopram can lead to an increase in the QT interval."
            },
            {
                "id": "c",
                "text": "It is crucial to wait for 5 weeks after stopping fluoxetine before beginning a TCA."
            },
            {
                "id": "d",
                "text": "The pharmacokinetics of SSRIs are significantly influenced by renal function and the individual's age."
            },
            {
                "id": "e",
                "text": "SSRI use often leads to significant weight loss as a prominent side effect."
            }
        ],
        "correctId": "a",
        "explanation": "SSRIs are first-line for depression due to their improved safety and tolerability. The other options contain inaccuracies: citalopram QT prolongation is dose-dependent but escitalopram has less effect; washout is for MAOIs, not TCAs; weight gain (not loss) is common with SSRIs."
    },
    {
        "id": "q66",
        "question": "66. Which of the following is NOT a characteristic of Major Depressive Disorder (MDD) as defined by the Diagnostic and Statistical Manual of Mental Disorders, 5th ed.?",
        "options": [
            {
                "id": "a",
                "text": "One or more major depressive episodes."
            },
            {
                "id": "b",
                "text": "Five or more symptoms present nearly every day during the same 2 week period causing significant distress or impairment."
            },
            {
                "id": "c",
                "text": "Depressed mood or loss of interest or pleasure must be present in adults."
            },
            {
                "id": "d",
                "text": "The depressive episode can be attributable to physiological effects of a substance or medical condition."
            },
            {
                "id": "e",
                "text": "There must not be a history of manic-like or hypomanic-like episodes unless they were induced by a substance or medical condition."
            }
        ],
        "correctId": "d",
        "explanation": "DSM-5 criteria require that the episode is not attributable to the physiological effects of a substance or another medical condition. If it is, the diagnosis is substance/medication-induced depressive disorder or depressive disorder due to another medical condition."
    },
    {
        "id": "q77",
        "question": "77. J.L is 58 years old man. He has a history of diabetes and hypertension on metformin, atenolol, glyburide, sitagliptin, and aspirin. He is currently diagnosed to have depression. Which one of the drugs that used by JL is associated with a risk of depression?",
        "options": [
            {
                "id": "a",
                "text": "Metformin"
            },
            {
                "id": "b",
                "text": "Atenolol"
            },
            {
                "id": "c",
                "text": "Sitagliptin"
            },
            {
                "id": "d",
                "text": "Glyburide"
            },
            {
                "id": "e",
                "text": "Aspirin"
            }
        ],
        "correctId": "b",
        "explanation": "Beta-blockers like atenolol have been associated with causing or exacerbating depression, though the risk is debated. Metformin, sitagliptin, glyburide, and aspirin are not typically linked to depression."
    },
    {
        "id": "q78",
        "question": "78. What is the most likely reason that encourages the physician to start treatment for this patient with venlafaxine and not with fluoxetine?",
        "options": [
            {
                "id": "a",
                "text": "Because of the safety of venlafaxine in overdose"
            },
            {
                "id": "b",
                "text": "Because the patient has no history of hypertension"
            },
            {
                "id": "c",
                "text": "Because of venlafaxine slight efficacy advantage over other antidepressants"
            },
            {
                "id": "d",
                "text": "Because of negligible effect of venlafaxine on sexual activity"
            },
            {
                "id": "e",
                "text": "All of the above"
            }
        ],
        "correctId": "c",
        "explanation": "Venlafaxine (an SNRI) is sometimes chosen for its potential efficacy advantage in more severe depression. Fluoxetine may have more drug interactions. Venlafaxine can increase blood pressure and cause sexual dysfunction."
    },
    {
        "id": "q104",
        "question": "104. SA, a 28-year-old woman, has been suffering for the past six months from persistent sadness, loss of interest in favorable activities, worthless and difficulty in concentrating at work. She was isolated as well as it was challenging for her to maintain her social relationships. Her doctor started giving her fluoxetine. what would be more important to be closely monitored during the beginning of treatment?",
        "options": [
            {
                "id": "a",
                "text": "Suicide though or behavior"
            },
            {
                "id": "b",
                "text": "Loss of appetite"
            },
            {
                "id": "c",
                "text": "Blood pressure"
            },
            {
                "id": "d",
                "text": "Blood glucose"
            },
            {
                "id": "e",
                "text": "Urine retention"
            }
        ],
        "correctId": "a",
        "explanation": "During the initial weeks of antidepressant treatment, there is an increased risk of suicidal thoughts and behavior, especially in young adults. Close monitoring is essential."
    }
],
  'adrenal_disorders': [
    {
        "id": "q1",
        "question": "1. The most common initial findings in Cushing's syndrome are:",
        "options": [
            {
                "id": "a",
                "text": "Diabetes and hypertension."
            },
            {
                "id": "b",
                "text": "Central obesity and facial rounding."
            },
            {
                "id": "c",
                "text": "Myopathies and muscular weakness."
            },
            {
                "id": "d",
                "text": "Striae along the lower abdomen, that take on a red to purple color."
            },
            {
                "id": "e",
                "text": "Lemon on stick appearance."
            }
        ],
        "correctId": "b",
        "explanation": "Central obesity (truncal obesity) and facial rounding (moon face) are among the most common and early presenting features of Cushing's syndrome."
    },
    {
        "id": "q2",
        "question": "2. Drugs that inhibits cortisol synthesis include the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Metyrapone"
            },
            {
                "id": "b",
                "text": "Aminoglutethimide"
            },
            {
                "id": "c",
                "text": "Ketoconazole"
            },
            {
                "id": "d",
                "text": "Cyproheptadine"
            },
            {
                "id": "e",
                "text": "Mitotane"
            }
        ],
        "correctId": "d",
        "explanation": "Cyproheptadine is a serotonin antagonist that works centrally to suppress ACTH secretion. It does not directly inhibit cortisol synthesis in the adrenal glands."
    },
    {
        "id": "q3",
        "question": "3. Clinical manifestations of Addison's disease include the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Weight loss"
            },
            {
                "id": "b",
                "text": "Dehydration"
            },
            {
                "id": "c",
                "text": "Hyponatremia"
            },
            {
                "id": "d",
                "text": "Hypokalemia"
            },
            {
                "id": "e",
                "text": "Hyperpigmentation"
            }
        ],
        "correctId": "d",
        "explanation": "Addison's disease (primary adrenal insufficiency) is characterized by aldosterone deficiency, leading to sodium wasting and potassium retention. This results in hyponatremia and hyperkalemia, not hypokalemia."
    },
    {
        "id": "q4",
        "question": "4. The most common cause of adrenal crisis is:",
        "options": [
            {
                "id": "a",
                "text": "Adrenal surgery."
            },
            {
                "id": "b",
                "text": "Severe Adrenal trauma."
            },
            {
                "id": "c",
                "text": "Acute Pituitary insufficiency."
            },
            {
                "id": "d",
                "text": "Abrupt withdrawal of exogenous glucocorticoids in patients receiving chronic treatment."
            },
            {
                "id": "e",
                "text": "Acute stressful conditions."
            }
        ],
        "correctId": "d",
        "explanation": "The most common cause of adrenal crisis is the sudden withdrawal of chronic exogenous glucocorticoid therapy, which has suppressed the HPA axis."
    },
    {
        "id": "q53",
        "question": "53. A.S is 45 years old male was presented to the Endocrinology clinic with the following signs and symptoms: Central obesity, abdominal striae, hirsutism, weight gain. Upon examination his blood pressure and blood glucose were markedly elevated where fasting blood sugar was 166 g/dl and blood pressure was 160/110 mmHg. As a clinical pharmacist, which medication would you propose to reverse the manifestations of the patient's illness?",
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
        "explanation": "Mifepristone is a glucocorticoid receptor antagonist. It is used to treat the clinical manifestations of hypercortisolism (Cushing's syndrome) in patients with type 2 diabetes or glucose intolerance."
    },
    {
        "id": "q59",
        "question": "59. Treatment plans in Cushing syndrome are based on etiology. Treatment of choice for both ACTH-dependent and ACTH-independent cushing syndrome is :",
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
        "explanation": "The definitive treatment for Cushing's syndrome is surgical removal of the underlying tumor, whether it is a pituitary adenoma (for ACTH-dependent) or an adrenal tumor (for ACTH-independent)."
    },
    {
        "id": "q62",
        "question": "62. Steroidogenesis Inhibitors drugs are used for treating Cushing disease as second-line treatments in patients who are not surgical candidates. Drug with antiandrogenic activity and beneficial in women but can cause gynecomastia and hypogonadism in men",
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
        "explanation": "Ketoconazole is a steroidogenesis inhibitor that also has antiandrogenic properties, making it beneficial for women with hirsutism but potentially causing gynecomastia and hypogonadism in men."
    },
    {
        "id": "q70",
        "question": "70. Regarding adrenal insufficiency there are many clinical symptoms will associate with it. The following are the major clinical symptoms associated with 90% destruction of adrenal gland cortex, EXCEPT :",
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
        "explanation": "Adrenal insufficiency leads to aldosterone deficiency, causing sodium wasting and hyponatremia (low sodium), not hypernatremia."
    },
    {
        "id": "q73",
        "question": "73. L.S is 35 years old male was presented with the following signs and symptoms: muscle weakness, paresthesias, headache, polydipsia, and nocturnal polyuria. He also had elevated blood pressure and tetany. Serum potassium: 1.2 mEq/l (normal value 3.5-5), Aldosterone hormone level: elevated. What is the first line treatment for this case?",
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
        "explanation": "The symptoms describe primary hyperaldosteronism (Conn's syndrome) with hypokalemia and hypertension. The first-line treatment is a mineralocorticoid receptor antagonist like spironolactone or eplerenone."
    },
    {
        "id": "q76",
        "question": "76. A 21 years old female has both hyperaldosteronism and menstrual irregularities. The most appropriate treatment for this female is",
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
        "explanation": "Eplerenone is a selective aldosterone antagonist. Spironolactone can cause antiandrogenic side effects like menstrual irregularities. For a woman with menstrual issues, eplerenone is preferred as it has fewer antiandrogenic effects."
    },
    {
        "id": "q79",
        "question": "79. Acute adrenal Insufficiency (adrenal crisis) represents a true endocrine emergency. The glucocorticoid of choice for treatment",
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
        "explanation": "Hydrocortisone is the preferred glucocorticoid for adrenal crisis because it has both glucocorticoid and mineralocorticoid activity, which is essential as mineralocorticoid deficiency is also present."
    },
    {
        "id": "q81",
        "question": "81. Regarding Addison disease: Which of the following is incorrect statement?",
        "options": [
            {
                "id": "a",
                "text": "Addison disease is characterized by destruction of all regions of the adrenal cortex."
            },
            {
                "id": "b",
                "text": "Addison disease is characterized by very low or undetectable serum cortisol and aldosterone levels."
            },
            {
                "id": "c",
                "text": "Addison disease is characterized by increased skin pigmentation especially on the face, oral mucosa, palmar creases and knuckles."
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
        "explanation": "Addison's disease is characterized by hypotension, not hypertension, due to mineralocorticoid deficiency and volume depletion."
    },
    {
        "id": "q91",
        "question": "91. Steroidogenic inhibitors that used in preparation for surgery for patients with Cushing's syndrome is:",
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
        "explanation": "Metyrapone is a steroidogenesis inhibitor that can be used preoperatively to control hypercortisolism in patients with Cushing's syndrome before surgery."
    },
    {
        "id": "q92",
        "question": "92. Clinical presentation of Cushing syndrome includes the following EXCEPT",
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
        "explanation": "Cushing's syndrome is associated with hypertension, not hypotension, due to the mineralocorticoid activity of excess cortisol."
    },
    {
        "id": "q22",
        "question": "22. Regarding Cushing syndrome. Mifepristone is one of the pharmacological therapies for Cushing syndrome, for which all of the following are false EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "It is glucocorticoid-receptor agonist"
            },
            {
                "id": "b",
                "text": "It increases endogenous cortisol and ACTH levels in Cushing patients"
            },
            {
                "id": "c",
                "text": "It is effective in reversing the manifestations of hypocortisolism"
            },
            {
                "id": "d",
                "text": "It can be used for endogenous Cushing syndrome in patients who have type 2 diabetes"
            },
            {
                "id": "e",
                "text": "May result in endometrial hyperplasia and hyperkalemia"
            }
        ],
        "correctId": "d",
        "explanation": "Mifepristone is a glucocorticoid receptor antagonist. It is FDA-approved for the treatment of Cushing's syndrome in patients with type 2 diabetes or glucose intolerance."
    },
    {
        "id": "q24",
        "question": "24. Regarding the treatment of adrenal insufficiency, the corticosteroid agent of choice is",
        "options": [
            {
                "id": "a",
                "text": "deoxycorticosterone trimethylacetate"
            },
            {
                "id": "b",
                "text": "fludrocortisone acetate"
            },
            {
                "id": "c",
                "text": "prednisolone"
            },
            {
                "id": "d",
                "text": "prednisone"
            },
            {
                "id": "e",
                "text": "hydrocortisone"
            }
        ],
        "correctId": "e",
        "explanation": "Hydrocortisone is the preferred glucocorticoid for replacement therapy in adrenal insufficiency because it closely mimics the body's natural cortisol circadian rhythm."
    },
    {
        "id": "q36",
        "question": "36. Regarding Addison disease. All of the following are true EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Skin hyperpigmentation is a characteristic feature"
            },
            {
                "id": "b",
                "text": "The short cosyntropin stimulation test is used to confirm the diagnosis"
            },
            {
                "id": "c",
                "text": "Hydrocortisone + fludrocortisone acetate is the treatment of choice"
            },
            {
                "id": "d",
                "text": "Hyperkalemia + hyponatremia are common"
            },
            {
                "id": "e",
                "text": "Laparoscopic adrenalectomy is the non-pharmacological treatment of choice"
            }
        ],
        "correctId": "e",
        "explanation": "Addison's disease is treated with lifelong hormone replacement. Laparoscopic adrenalectomy is used to treat Cushing's syndrome or adrenal tumors, not Addison's disease."
    },
    {
        "id": "q44",
        "question": "44. Spironolactone has several adverse reactions. All the followings are adverse reactions of spironolactone except",
        "options": [
            {
                "id": "a",
                "text": "Stomach discomfort"
            },
            {
                "id": "b",
                "text": "Hypernatremia"
            },
            {
                "id": "c",
                "text": "Impotence"
            },
            {
                "id": "d",
                "text": "Menstrual irregularities"
            },
            {
                "id": "e",
                "text": "Hyperkalemia"
            }
        ],
        "correctId": "b",
        "explanation": "Spironolactone is a potassium-sparing diuretic. Its major effects are hyperkalemia, not hypernatremia. Hyponatremia can occur due to its diuretic effect."
    },
    {
        "id": "q67",
        "question": "67. Hyperpigmentation of the skin is a catastrophic feature of",
        "options": [
            {
                "id": "a",
                "text": "primary acute adrenal insufficiency"
            },
            {
                "id": "b",
                "text": "primary chronic adrenal insufficiency"
            },
            {
                "id": "c",
                "text": "Cushing syndrome"
            },
            {
                "id": "d",
                "text": "Conn's syndrome"
            },
            {
                "id": "e",
                "text": "Hyperthyroidism"
            }
        ],
        "correctId": "b",
        "explanation": "Hyperpigmentation is a classic sign of primary adrenal insufficiency (Addison's disease). It is caused by elevated ACTH, which has melanocyte-stimulating activity."
    },
    {
        "id": "q68",
        "question": "68. In the Cushing disease, the lab data that may confirm its diagnosis are",
        "options": [
            {
                "id": "a",
                "text": "Probably normal or High ACTH"
            },
            {
                "id": "b",
                "text": "Low or normal ACTH"
            },
            {
                "id": "c",
                "text": "Low serum cortisol"
            },
            {
                "id": "d",
                "text": "Serum cortisol normal"
            },
            {
                "id": "e",
                "text": "CRH test no response"
            }
        ],
        "correctId": "a",
        "explanation": "Cushing's disease is ACTH-dependent Cushing's syndrome caused by a pituitary adenoma. Patients have high or inappropriately normal ACTH levels."
    },
    {
        "id": "q82",
        "question": "82. A 45 years old man suffering from Cushing syndrome due to unilateral adrenal adenoma Treatment of choice for this patient is",
        "options": [
            {
                "id": "a",
                "text": "Transsphenoidal resection of adrenal adenoma"
            },
            {
                "id": "b",
                "text": "Radiotherapy of adrenal adenoma"
            },
            {
                "id": "c",
                "text": "Laparoscopic adrenalectomy"
            },
            {
                "id": "d",
                "text": "Chronic drug therapy"
            },
            {
                "id": "e",
                "text": "Open surgery of adrenals"
            }
        ],
        "correctId": "c",
        "explanation": "For Cushing's syndrome caused by a unilateral adrenal adenoma (ACTH-independent), the treatment of choice is surgical removal of the affected adrenal gland, typically via laparoscopic adrenalectomy."
    },
    {
        "id": "q85",
        "question": "85. Hyperaldosteronism causes a variety of clinical manifestations. Adult manifestations of hyperaldosteronism include the followings EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Tetany"
            },
            {
                "id": "b",
                "text": "Polydipsia"
            },
            {
                "id": "c",
                "text": "Edema"
            },
            {
                "id": "d",
                "text": "Hypokalemia"
            },
            {
                "id": "e",
                "text": "Hypertension"
            }
        ],
        "correctId": "a",
        "explanation": "While hypokalemia can cause muscle weakness, tetany is not a typical feature of hyperaldosteronism. Tetany is associated with hypocalcemia."
    },
    {
        "id": "q90",
        "question": "90. Treatment of adrenal crisis should include a suitable IV fluid. The initial first line IV fluid for patients with adrenal crisis is",
        "options": [
            {
                "id": "a",
                "text": "Normal saline"
            },
            {
                "id": "b",
                "text": "Dextrose 5% in normal saline"
            },
            {
                "id": "c",
                "text": "Lactated ringer"
            },
            {
                "id": "d",
                "text": "Mannitol 20%"
            },
            {
                "id": "e",
                "text": "Dextrose 25% in water"
            }
        ],
        "correctId": "a",
        "explanation": "The initial fluid of choice for adrenal crisis is large volumes of 0.9% normal saline to correct volume depletion and hyponatremia."
    },
    {
        "id": "q103",
        "question": "103. ACTH-independent Cushing syndrome is usually caused by:",
        "options": [
            {
                "id": "a",
                "text": "Adrenal adenomas & carcinomas."
            },
            {
                "id": "b",
                "text": "Thyroid ectopic ACTH secretion"
            },
            {
                "id": "c",
                "text": "Pituitary adenoma"
            },
            {
                "id": "d",
                "text": "Endocrine ectopic ACTH syndrome"
            },
            {
                "id": "e",
                "text": "Non-Endocrine ectopic ACTH syndrome"
            }
        ],
        "correctId": "a",
        "explanation": "ACTH-independent Cushing's syndrome is caused by tumors of the adrenal cortex (adenomas or carcinomas) that autonomously secrete cortisol."
    },
    {
        "id": "q104",
        "question": "104. In hyperaldosteronism, if ARR is positive, confirmatory tests to exclude false positives are the following, Except:",
        "options": [
            {
                "id": "a",
                "text": "oral sodium-loading test"
            },
            {
                "id": "b",
                "text": "saline infusion test"
            },
            {
                "id": "c",
                "text": "Glucose tolerance test"
            },
            {
                "id": "d",
                "text": "fludrocortisone suppression test (FST)"
            },
            {
                "id": "e",
                "text": "captopril challenge test"
            }
        ],
        "correctId": "c",
        "explanation": "Confirmatory tests for hyperaldosteronism include the oral sodium-loading test, saline infusion test, fludrocortisone suppression test, and captopril challenge test. The glucose tolerance test is used for diabetes, not for diagnosing hyperaldosteronism."
    },
    {
        "id": "q8",
        "question": "8. Mr. Hassan illustrates the presentation of Cushing's syndrome as he has unilateral adrenal adenomas. In your opinion, what is the preferred strategy for therapy that should be started with for this patient?",
        "options": [
            {
                "id": "a",
                "text": "Adrenolytic Agents."
            },
            {
                "id": "b",
                "text": "Radiotherapy."
            },
            {
                "id": "c",
                "text": "Steroidogenesis Inhibitors."
            },
            {
                "id": "d",
                "text": "Laparoscopic adrenalectomy."
            },
            {
                "id": "e",
                "text": "Transsphenoidal resection."
            }
        ],
        "correctId": "d",
        "explanation": "For a unilateral adrenal adenoma causing Cushing's syndrome, the preferred and definitive treatment is surgical removal (laparoscopic adrenalectomy)."
    },
    {
        "id": "q13",
        "question": "13. Regarding Cushing Syndrome, treatment of choice for both acth-dependent and acth-independent Cushing Syndrome is",
        "options": [
            {
                "id": "a",
                "text": "surgical resection of offending tumors."
            },
            {
                "id": "b",
                "text": "mifepristone"
            },
            {
                "id": "c",
                "text": "ketoconazole"
            },
            {
                "id": "d",
                "text": "cyproheptadine"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "a",
        "explanation": "Surgical removal of the underlying tumor (pituitary, adrenal, or ectopic) is the treatment of choice for all forms of Cushing's syndrome."
    },
    {
        "id": "q28",
        "question": "28. Regarding adrenal gland disorders, Conn syndrome is",
        "options": [
            {
                "id": "a",
                "text": "an ACTH-producing adenoma"
            },
            {
                "id": "b",
                "text": "a cortisol-producing adenoma"
            },
            {
                "id": "c",
                "text": "an aldosterone-producing adenoma"
            },
            {
                "id": "d",
                "text": "a prolactin-producing adenoma"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "c",
        "explanation": "Conn's syndrome is primary hyperaldosteronism, most commonly caused by an aldosterone-producing adenoma (APA)."
    },
    {
        "id": "q31",
        "question": "31. Steroidogenesis inhibitors indicated for treatment of Cushing Syndrome. Which of the followings not correct regarding Etomidate",
        "options": [
            {
                "id": "a",
                "text": "Administered parenterally."
            },
            {
                "id": "b",
                "text": "Used in emergency to treat acute hypercortisolism"
            },
            {
                "id": "c",
                "text": "Serum cortisol monitoring recommended to follow hypercortisolism"
            },
            {
                "id": "d",
                "text": "Administered to patient with acute hypercortisolism going to surgery"
            },
            {
                "id": "e",
                "text": "It causes hypertension"
            }
        ],
        "correctId": "e",
        "explanation": "Etomidate is an anesthetic agent that is a potent steroidogenesis inhibitor. It can cause hypotension, not hypertension. It is used parenterally in emergencies to rapidly lower cortisol levels."
    },
    {
        "id": "q39",
        "question": "39. Addison Disease is associated with several biomedical disturbances. All the followings are associated with Addison Disease EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Low level of ACTH"
            },
            {
                "id": "b",
                "text": "Low level of cortisol"
            },
            {
                "id": "c",
                "text": "Low level of aldosterone"
            },
            {
                "id": "d",
                "text": "High level of ACTH"
            },
            {
                "id": "e",
                "text": "High level of CRH"
            }
        ],
        "correctId": "a",
        "explanation": "In Addison's disease (primary adrenal insufficiency), the adrenal glands fail to produce cortisol. The lack of negative feedback leads to high levels of CRH and ACTH."
    },
    {
        "id": "q40",
        "question": "40. Cushing Syndrome has several clinical presentations. One of the followings is not a clinical presentation of Cushing Syndrome",
        "options": [
            {
                "id": "a",
                "text": "Glucose intolerance"
            },
            {
                "id": "b",
                "text": "Psychiatric changes"
            },
            {
                "id": "c",
                "text": "Amenorrhea"
            },
            {
                "id": "d",
                "text": "Bilirubin elevation"
            },
            {
                "id": "e",
                "text": "Muscular weakness"
            }
        ],
        "correctId": "d",
        "explanation": "Bilirubin elevation (jaundice) is not a typical presentation of Cushing's syndrome. The syndrome is characterized by metabolic, psychiatric, and musculoskeletal changes."
    },
    {
        "id": "q68",
        "question": "68. L.S is 35 years old male, he was presented with the following sign and symptoms: muscle weakness, fatigue, paresthesias, headache, polydipsia, and nocturnal polyuria. He also had elevated blood pressure and tetany. Blood pressure: 160/100 mmHg Serum potassium: 1.2 mEq/l normal value (3.5-5 mEq/l) Aldosterone hormone level: elevated. What is the first line treatment for this case?",
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
        "explanation": "This case describes primary hyperaldosteronism (Conn's syndrome) with hypokalemia and hypertension. Spironolactone is the first-line treatment."
    },
    {
        "id": "q81",
        "question": "81. Lifelong glucocorticoid replacement therapy may be necessary for patients with adrenal insufficiency. Hydrocortisone is often prescribed because it has the following characteristic EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "It is closely resembles endogenous cortisol"
            },
            {
                "id": "b",
                "text": "It has relatively high mineralocorticoid activity"
            },
            {
                "id": "c",
                "text": "It has short half-life"
            },
            {
                "id": "d",
                "text": "It allows the design of regimens that simulates the normal circadian cycle"
            },
            {
                "id": "e",
                "text": "It has relatively low mineralocorticoid activity"
            }
        ],
        "correctId": "e",
        "explanation": "Hydrocortisone has relatively high mineralocorticoid activity (unlike prednisone or dexamethasone), which is beneficial for patients with adrenal insufficiency who also lack aldosterone. The statement \"low\" is incorrect."
    },
    {
        "id": "q82",
        "question": "82. Regarding endogenous Cushing's syndrome accompanied by type 2 DM, the best treatment is",
        "options": [
            {
                "id": "a",
                "text": "Metyrapone"
            },
            {
                "id": "b",
                "text": "Ketoconazole"
            },
            {
                "id": "c",
                "text": "Etomidate"
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
        "explanation": "Mifepristone is a glucocorticoid receptor antagonist approved for the treatment of hyperglycemia secondary to hypercortisolism in patients with endogenous Cushing's syndrome who have type 2 diabetes."
    },
    {
        "id": "q87",
        "question": "87. The pharmacological therapy of Cushing's Syndrome involves different agents. A glucocorticoid-receptor blocking agent used as part of the pharmacologic therapy of Cushing's syndrome Is:",
        "options": [
            {
                "id": "a",
                "text": "Mitotane"
            },
            {
                "id": "b",
                "text": "Mifepristone"
            },
            {
                "id": "c",
                "text": "Methimazole"
            },
            {
                "id": "d",
                "text": "Metformin"
            },
            {
                "id": "e",
                "text": "Miglitol"
            }
        ],
        "correctId": "b",
        "explanation": "Mifepristone is a glucocorticoid receptor antagonist. It blocks the effects of cortisol at the receptor level."
    },
    {
        "id": "q98",
        "question": "98. A 50-year-old man with advanced tuberculosis has developed signs of severe acute adrenal insufficiency. The patient should be treated immediately with a combination of",
        "options": [
            {
                "id": "a",
                "text": "Aldosterone and fludrocortisone"
            },
            {
                "id": "b",
                "text": "Triamcinolone and dexamethasone"
            },
            {
                "id": "c",
                "text": "Cortisol and fludrocortisone"
            },
            {
                "id": "d",
                "text": "Dexamethasone and metyrapone"
            },
            {
                "id": "e",
                "text": "None of the above"
            }
        ],
        "correctId": "e",
        "explanation": "The immediate treatment for adrenal crisis is IV hydrocortisone (which provides both glucocorticoid and mineralocorticoid activity) and IV normal saline. While the file marks \"e. None of the above\", an ideal combination would be hydrocortisone and fludrocortisone, but it's not listed."
    },
    {
        "id": "q11",
        "question": "11. Hyperaldosteronism can cause several disturbances. One of the following is not a Clinical Presentation of hyperaldosteronism:",
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
        "explanation": "Hyperaldosteronism causes hypokalemia, not hypermagnesemia. Hypermagnesemia is not a typical feature."
    },
    {
        "id": "q13",
        "question": "13. Mitotane is a cytotoxic drug. All the followings are true about Mitotane EXCEPT",
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
                "text": "It is considered as first line therapy for Cushing Syndrome"
            }
        ],
        "correctId": "e",
        "explanation": "Mitotane is used for inoperable adrenal cortical carcinoma, not as first-line therapy for Cushing's syndrome. First-line is surgery."
    },
    {
        "id": "q34",
        "question": "34. A 27-year-old woman comes to endocrinologist because she has had suffer from hair on her face, chest, and back as well as irregular menses for the past 10 months. She says she also has had easy bruising with poor wound healing during this time. Diagnosis of Cushing syndrome is confirmed by laboratory tests. Which one of the following drugs is most appropriate for this patient?",
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
        "explanation": "For a patient with Cushing's syndrome, ketoconazole is a steroidogenesis inhibitor that can be used to manage hypercortisolism."
    },
    {
        "id": "q40",
        "question": "40. Adrenal insufficiency is caused by multiple etiologies. The most common cause of secondary adrenal insufficiency in countries like Iraq and Egypt is",
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
                "text": "long term administration of exogenous corticosteroids"
            }
        ],
        "correctId": "e",
        "explanation": "While the file marks \"e\", it's important to note that the most common cause of secondary adrenal insufficiency globally is the long-term administration of exogenous corticosteroids, which suppresses the HPA axis. Tuberculosis is a common cause of primary adrenal insufficiency in developing countries."
    },
    {
        "id": "q49",
        "question": "49. Adrenal insufficiency produced by Autoimmune dysfunction or drugs, which drug was reported to induce secondary adrenal insufficiency?",
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
        "correctId": "d",
        "explanation": "Rifampin is a potent inducer of hepatic CYP450 enzymes, which accelerates the metabolism of glucocorticoids, potentially leading to adrenal insufficiency in patients on chronic steroid therapy."
    },
    {
        "id": "q57",
        "question": "57. Pasiroetide is approved for use in Cushing disease primarily because:",
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
        "explanation": "Pasireotide is a somatostatin analog approved for the treatment of Cushing's disease in patients who are not candidates for or have failed pituitary surgery."
    },
    {
        "id": "q58",
        "question": "58. How should patients with Addison's disease using corticosteroid replacement manage their doses during stressful situations?",
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
        "explanation": "Stress dose (or \"sick day\") management is a critical component of patient education. Patients need to increase their glucocorticoid dose during times of stress, illness, or surgery."
    },
    {
        "id": "q93",
        "question": "93. An adult woman patient with classic Cushing's disease (caused by a pituitary adenoma) referred to surgery; Laparoscopic adrenalectomy is her current treatment according to her physician mostly because?",
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
        "explanation": "The first-line treatment for Cushing's disease is transsphenoidal resection of the pituitary adenoma. If this fails or is not possible, bilateral adrenalectomy is a treatment option to manage hypercortisolism."
    },
    {
        "id": "q101",
        "question": "101. M.S, a 55-year-old female on Etomidate prepared to Transsphenoidal resection of the pituitary tumor for her Cushing disease. Recently she developed an emergent medical condition necessities addition of an oral hypoglycemic drug to her regimen and this operation not possible to be performed. Which medication is most optimal to be used at this time to control patient symptoms regarding the elevated cortisol level?",
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
                "text": "Pasiroetide"
            },
            {
                "id": "e",
                "text": "Osilodrostat"
            }
        ],
        "correctId": "a",
        "explanation": "When surgery is not an option for Cushing's disease, a combination of steroidogenesis inhibitors (like metyrapone and ketoconazole) can be used to control hypercortisolism."
    },
    {
        "id": "q102",
        "question": "102. A 35-years old male patient with tuberculosis, few months after his recovery this patient developed weakness, additional weight loss, salt craving, headaches, memory impairment, depression, and postural dizziness. Prednisolone tab 5 mg and fludrocortisone acetate 0.1 mg tab daily were prescribed to control his symptoms. Recently this patient exposed to car accident resulted in massive blood loss and head injury. What is the recommended management plan regarding his condition?",
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
                "text": "Switch to oral Hydrocortisone 50 mg every 6-8 hours with proper fluid therapy until stabilized and omit fludrocortisone."
            }
        ],
        "correctId": "d",
        "explanation": "The patient is on chronic glucocorticoid and mineralocorticoid replacement. Following a major trauma, this is an adrenal crisis. The standard of care is high-dose IV hydrocortisone (which provides both glucocorticoid and mineralocorticoid effects) and aggressive IV fluid resuscitation."
    },
    {
        "id": "q25",
        "question": "25. Persistent hyperkalemia is one complication of adrenal crisis. The preferred treatment for persistent hyperkalemia in adrenal crisis is",
        "options": [
            {
                "id": "a",
                "text": "Spironolactone"
            },
            {
                "id": "b",
                "text": "Furosemide"
            },
            {
                "id": "c",
                "text": "Fludrocortisone"
            },
            {
                "id": "d",
                "text": "Amlodipine"
            },
            {
                "id": "e",
                "text": "Chlortalidone"
            }
        ],
        "correctId": "c",
        "explanation": "In adrenal crisis, hyperkalemia is due to mineralocorticoid deficiency. Fludrocortisone is a mineralocorticoid that will correct the electrolyte imbalance. Hydrocortisone also has mineralocorticoid activity, but fludrocortisone is specifically used if hyperkalemia persists."
    },
    {
        "id": "q49",
        "question": "49. Mr. AN presented with lethargy nausea and muscle weakness. His blood tests showed the following finding; high corticotropin, low cortisol, high renin, low aldosterone and low androgens. Which of the following clinical conditions would be most likely to produce this set of signs and symptoms?",
        "options": [
            {
                "id": "a",
                "text": "Cushing's Disease"
            },
            {
                "id": "b",
                "text": "Ectopic corticotropin-producing tumor"
            },
            {
                "id": "c",
                "text": "Secondary renal insufficiency"
            },
            {
                "id": "d",
                "text": "Congenital adrenal hyperplasia"
            },
            {
                "id": "e",
                "text": "Addison's Disease"
            }
        ],
        "correctId": "e",
        "explanation": "High ACTH, low cortisol, low aldosterone, and high renin are classic findings in primary adrenal insufficiency (Addison's disease)."
    },
    {
        "id": "q50",
        "question": "50. The main advantage of etomidate over other steroidogenic inhibitors is:",
        "options": [
            {
                "id": "a",
                "text": "Long-term control of cortisol levels"
            },
            {
                "id": "b",
                "text": "Reversible androgenic side effects"
            },
            {
                "id": "c",
                "text": "Ease of administration (oral)"
            },
            {
                "id": "d",
                "text": "Effectiveness in acute hypercortisolemia"
            },
            {
                "id": "e",
                "text": "Lower risk of neurological side effects"
            }
        ],
        "correctId": "d",
        "explanation": "Etomidate is an intravenous agent used for the rapid control of acute severe hypercortisolism (e.g., in an emergency setting)."
    },
    {
        "id": "q51",
        "question": "51. Eplerenone exhibits advantages over spironolactone for managing bilateral adrenal hyperplasia due to its:",
        "options": [
            {
                "id": "a",
                "text": "Lower cost"
            },
            {
                "id": "b",
                "text": "longer half-life"
            },
            {
                "id": "c",
                "text": "Fewer side effects"
            },
            {
                "id": "d",
                "text": "Greater potassium lowering effect"
            },
            {
                "id": "e",
                "text": "Improved blood pressure control"
            }
        ],
        "correctId": "c",
        "explanation": "Eplerenone is a selective mineralocorticoid receptor antagonist. Unlike spironolactone, it does not cause antiandrogenic side effects like gynecomastia and menstrual irregularities."
    },
    {
        "id": "q52",
        "question": "52. In adrenal insufficiency, which additional medication might be needed if hyperkalemia persists after hydrocortisone therapy?",
        "options": [
            {
                "id": "a",
                "text": "Dextrose 25% solution"
            },
            {
                "id": "b",
                "text": "Dextrose 5% in normal saline"
            },
            {
                "id": "c",
                "text": "Insulin"
            },
            {
                "id": "d",
                "text": "Fludrocortisone acetate"
            },
            {
                "id": "e",
                "text": "Spironolactone"
            }
        ],
        "correctId": "d",
        "explanation": "If hyperkalemia persists after giving hydrocortisone (which has mineralocorticoid activity), additional mineralocorticoid replacement with fludrocortisone may be required."
    },
    {
        "id": "q61",
        "question": "61. Which of the following statements is true about hyperaldosteronism?",
        "options": [
            {
                "id": "a",
                "text": "Rarely, primary hyperaldosteronism can be caused by bilateral adrenal hyperplasia."
            },
            {
                "id": "b",
                "text": "Primarily hyperaldosteronism is indicated when the ratio of aldosterone to renin is less than 30 ng/dl per ng/(ml.hr)."
            },
            {
                "id": "c",
                "text": "a strong indication of primary hyperaldosteronism is when the aldosterone-to-renin ratio is greater than 20 ng/dl per ng/(ml.hr)."
            },
            {
                "id": "d",
                "text": "Secondary hyperaldosteronism is mostly caused by an extra-adrenal factor overstimulating the zona glomerulosa."
            },
            {
                "id": "e",
                "text": "The preferred method of treating unilateral adrenal hyperplasia is with aldosterone-receptor antagonists."
            }
        ],
        "correctId": "d",
        "explanation": "Secondary hyperaldosteronism is indeed caused by extra-adrenal factors (e.g., high renin due to renal artery stenosis, heart failure) that overstimulate the adrenal glands."
    },
    {
        "id": "q65",
        "question": "65. What is the most common finding in Cushing syndrome?",
        "options": [
            {
                "id": "a",
                "text": "Peripheral obesity"
            },
            {
                "id": "b",
                "text": "Central obesity and facial rounding"
            },
            {
                "id": "c",
                "text": "Hypertension"
            },
            {
                "id": "d",
                "text": "Myopathy or muscular weakness"
            },
            {
                "id": "e",
                "text": "Gonadal dysfunction"
            }
        ],
        "correctId": "b",
        "explanation": "Central obesity and facial rounding (moon face) are the most common and characteristic physical findings in Cushing's syndrome."
    },
    {
        "id": "q79",
        "question": "79. A 40-year-old woman is diagnosed with Primary adrenal insufficiency (Addison disease). Which of the following patient education recommendations should be addressed to avoid an acute adrenal crisis EXCEPT:",
        "options": [
            {
                "id": "a",
                "text": "Always carry identification (e.g. medical alert bracelet) listing the diagnosis."
            },
            {
                "id": "b",
                "text": "Take corticosteroid supplementation as directed and do not abruptly stop treatment."
            },
            {
                "id": "c",
                "text": "Advice all treating health care professionals that he has a diagnosis of chronic adrenal insufficiency."
            },
            {
                "id": "d",
                "text": "Supplemental dosing of glucocorticoid as may be required during an acute illness, including infections, surgery, or even fever."
            },
            {
                "id": "e",
                "text": "The reduction in excess pigmentation is the only clinical marker"
            }
        ],
        "correctId": "e",
        "explanation": "This is incorrect. Reduction in pigmentation is a marker of adequate treatment, but it is not the only clinical marker, nor is it the focus of patient education to avoid crisis."
    },
    {
        "id": "q80",
        "question": "80. Secondary adrenal insufficiency is a condition where the pituitary gland doesn't make enough of the hormone ACTH, which stimulates the adrenal glands to produce cortisol. Secondary adrenal insufficiency results from:",
        "options": [
            {
                "id": "a",
                "text": "ketoconazole."
            },
            {
                "id": "b",
                "text": "medroxyprogesterone acetate."
            },
            {
                "id": "c",
                "text": "autoimmune destruction."
            },
            {
                "id": "d",
                "text": "tuberculosis."
            },
            {
                "id": "e",
                "text": "phenytoin."
            }
        ],
        "correctId": "a",
        "explanation": "Ketoconazole is a steroidogenesis inhibitor that acts directly on the adrenal glands, which can cause primary adrenal insufficiency. The file's answer is \"a\", but it's important to note that secondary adrenal insufficiency is most commonly due to exogenous steroid use. Ketoconazole causes primary insufficiency. (This appears to be a discrepancy in the file's key.)"
    },
    {
        "id": "q86",
        "question": "86. Lubna is a 20 years old female, a known case of hyperaldosteronism on treatment. However, she stated that after starting the treatment she developed irregular menses. Which drug that could be prescribed for hyperaldosteronism that potentially cause this effect",
        "options": [
            {
                "id": "a",
                "text": "Spironolactone"
            },
            {
                "id": "b",
                "text": "Eplerenone"
            },
            {
                "id": "c",
                "text": "Amiloride"
            },
            {
                "id": "d",
                "text": "Chlorthalidone"
            },
            {
                "id": "e",
                "text": "Triamterene"
            }
        ],
        "correctId": "a",
        "explanation": "Spironolactone has antiandrogenic properties, which can lead to menstrual irregularities, breast tenderness, and gynecomastia. Eplerenone is more selective and does not cause these side effects."
    },
    {
        "id": "q96",
        "question": "96. M.S, a 50-year-old female on metformin and Metyrapone, now she prepared to Transsphenoidal resection of the pituitary tumor. Which medication is/are most optimal to be used at this time to control patient symptoms regarding the elevated cortisol level?",
        "options": [
            {
                "id": "a",
                "text": "Add Ketoconazole to Metyrapone"
            },
            {
                "id": "b",
                "text": "Switch to Etomidate"
            },
            {
                "id": "c",
                "text": "Switch to Ketoconazole"
            },
            {
                "id": "d",
                "text": "Switch to Mifepristone"
            },
            {
                "id": "e",
                "text": "Switch to Pasiroetide"
            }
        ],
        "correctId": "b",
        "explanation": "For a patient preparing for surgery, rapid and reliable control of hypercortisolism is needed. Etomidate is an IV agent that can be used to quickly control cortisol levels in the perioperative period."
    },
    {
        "id": "q108",
        "question": "108. A.A is 23 years old male with primary adrenal insufficiency, is stable on 15 mg hydrocortisone 3 times daily, now he has upper respiratory tract infection and fever of 39 C, what is your action about hydrocortisone dose",
        "options": [
            {
                "id": "a",
                "text": "Decrease to 10mg*3"
            },
            {
                "id": "b",
                "text": "Remain as 15mg*3"
            },
            {
                "id": "c",
                "text": "Increase to 30mg*3"
            },
            {
                "id": "d",
                "text": "Increase to 40mg3"
            },
            {
                "id": "e",
                "text": "Decrease to 5mg*3"
            }
        ],
        "correctId": "c",
        "explanation": "During an illness with fever, patients with adrenal insufficiency require stress dosing. The dose should be doubled (e.g., from 15 mg three times daily to 30 mg three times daily) until the illness resolves."
    }
],

  'ir_spectroscopy': [
    {
      "id": "q1",
      "question": "1. Concerning the absorption bands in an IR spectrum charts, all the following statements are true EXCEPT:",
      "options": [
        { "id": "a", "text": "Stretching vibrations usually occur at higher wavenumber." },
        { "id": "b", "text": "Bending vibration usually occur at lower wavenumber." },
        { "id": "c", "text": "As the atomic weight decrease it leads to a lower wavenumber band because of the reduction in electronegativity." },
        { "id": "d", "text": "As the bond order increase, this will lead to a band at higher wavenumber." },
        { "id": "e", "text": "As the bond order increase, this will lead to a band at higher energy." }
      ],
      "correctId": "c",
      "explanation": "According to Hooke’s Law, the wavenumber of oscillation is inversely proportional to the atomic masses. Therefore, a decrease in atomic weight (mass) results in a higher wavenumber, not a lower one."
    },
    {
      "id": "q2",
      "question": "2. To confirm the complete oxidation of isopropanol to acetone, you can check if the IR spectrum has:",
      "options": [
        { "id": "a", "text": "absorptions at 3500 cm⁻¹ and 1650 cm⁻¹." },
        { "id": "b", "text": "no absorptions at 3500 cm⁻¹ and 1650 cm⁻¹." },
        { "id": "c", "text": "no absorption around 3500 cm⁻¹." },
        { "id": "d", "text": "no absorption around 1650 cm⁻¹." },
        { "id": "e", "text": "absorption at 2200 cm⁻¹ and 3100 cm⁻¹." }
      ],
      "correctId": "c",
      "explanation": "Isopropanol is an alcohol and contains an O-H group that absorbs strongly in the 3550–3200 cm⁻¹ region. Acetone is a ketone and lacks this hydroxyl group. The complete absence of the 3500 cm⁻¹ peak confirms that all the alcohol has been converted."
    },
    {
      "id": "q3",
      "question": "3. Concerning the following IR chart, the peaks at 3291 cm⁻¹ and 3368 cm⁻¹ represent the presence of the:",
      "image": mcq1,
      "options": [
        { "id": "a", "text": "Carbonyl group." },
        { "id": "b", "text": "Primary amine group." },
        { "id": "c", "text": "Hydroxyl group." },
        { "id": "d", "text": "Secondary amine group." },
        { "id": "e", "text": "ether group." }
      ],
      "correctId": "b",
      "explanation": "Primary amines (−NH₂) are characterized by two weak-to-medium absorption bands in the 3400–3300 cm⁻¹ region. One peak represents asymmetrical stretching and the other symmetrical stretching."
    },
    {
      "id": "q4",
      "question": "4. Regarding IR spectroscopy, SO₂ is a nonlinear molecule. How many vibrational degrees of freedom does it have?",
      "options": [
        { "id": "a", "text": "5." },
        { "id": "b", "text": "4." },
        { "id": "c", "text": "6." },
        { "id": "d", "text": "3." },
        { "id": "e", "text": "7." }
      ],
      "correctId": "d",
      "explanation": "For nonlinear molecules, the number of fundamental vibrations (degrees of freedom) is calculated as 3n − 6. Since SO₂ consists of 3 atoms, the calculation is (3 × 3) − 6 = 3."
    },
    {
      "id": "q5",
      "question": "5. Regarding IR spectroscopy, in cyclic carbonyl compounds, as the bond angle decreases:",
      "options": [
        { "id": "a", "text": "The energy of absorption increases." },
        { "id": "b", "text": "The wavelength of absorption increases." },
        { "id": "c", "text": "The wavenumber decreases." },
        { "id": "d", "text": "No change occurs." },
        { "id": "e", "text": "The transmittance increases." }
      ],
      "correctId": "a",
      "explanation": "In strained rings where the bond angle is less than 120°, the interaction with C-C bond stretching increases the energy required for C=O stretching. This leads to a shift to higher wavenumbers and higher energy."
    },
    {
      "id": "q6",
      "question": "6. Which factor is a function of the bond vibration frequency?",
      "options": [
        { "id": "a", "text": "bond arrange." },
        { "id": "b", "text": "force constant of the bonds." },
        { "id": "c", "text": "Masses of the atoms involved in bonding." },
        { "id": "d", "text": "Masses of the atoms and force constant of the bond." },
        { "id": "e", "text": "bond arrange and Force constant of the bond." }
      ],
      "correctId": "d",
      "explanation": "Hooke’s Law calculates the relationship between the wavenumber of oscillation, the atomic masses, and the bond force constant. Both factors are essential components of the frequency equation."
    },
    {
      "id": "q7",
      "question": "7. Regarding to IR spectroscopy, which one is the correct answer:",
      "options": [
        { "id": "a", "text": "A stretching vibration occurs along the line of the chemical bond. It changes the bond length." },
        { "id": "b", "text": "A stretching vibration is any vibration that does not occur along the line of the chemical bond." },
        { "id": "c", "text": "A stretching vibration changes the bond angle." },
        { "id": "d", "text": "A stretching vibrations absorb at lower frequencies (lower wavenumber) than Bending vibrations." },
        { "id": "e", "text": "None of the above." }
      ],
      "correctId": "a",
      "explanation": "Stretching vibrations involve a continuous change in the interatomic distance along the axis of the chemical bond. Changes in bond angles are classified as bending vibrations."
    },
    {
      "id": "q8",
      "question": "8. Concerning IR spectroscopy, the carbon-carbon double and triple bond shows stretching vibration at higher frequency than a C-C single bond due to:",
      "options": [
        { "id": "a", "text": "Higher force constant." },
        { "id": "b", "text": "mass of atoms." },
        { "id": "c", "text": "electronegativity." },
        { "id": "d", "text": "bond angle." },
        { "id": "e", "text": "bond type." }
      ],
      "correctId": "a",
      "explanation": "The force constant (f) represents the strength of the bond. Single bonds have a constant of 5 × 10^5, double bonds 10 × 10^5, and triple bonds 15 × 10^5 dyne/cm. Frequency is directly proportional to the square root of this force constant."
    },
    {
      "id": "q9",
      "question": "9. The fingerprint region is typically between:",
      "options": [
        { "id": "a", "text": "Typically below 500 cm⁻¹." },
        { "id": "b", "text": "Typically between 1500–4000 cm⁻¹." },
        { "id": "c", "text": "Typically between 400–1300 cm⁻¹." },
        { "id": "d", "text": "Useless for identifying functional groups." },
        { "id": "e", "text": "None of the above." }
      ],
      "correctId": "c",
      "explanation": "The IR spectrum is split into the functional group region (4000–1300 cm⁻¹) and the fingerprint region (1300–400 cm⁻¹). The fingerprint region is highly specific for identity because no two compounds (except enantiomers) give the same spectrum there."
    },
    {
      "id": "q10",
      "question": "10. What is the value of force constant for HCl (1.63 × 10⁻²⁷ Kg), and the observed frequency is 8.67 × 10¹³ Hz?",
      "options": [
        { "id": "a", "text": "4.38 dyn Å⁻¹." },
        { "id": "b", "text": "4.83 m dyn Å⁻¹." },
        { "id": "c", "text": "8.43 dynes cm⁻¹." },
        { "id": "d", "text": "483 µm⁻¹." },
        { "id": "e", "text": "4.83 dynes cm⁻¹." }
      ],
      "correctId": "e",
      "explanation": "This is a direct application of Hooke’s Law, which relates frequency, mass, and the force constant. Plugging the provided values into the formula yields a force constant of approximately 4.83."
    },
    {
      "id": "q11",
      "question": "11. In IR spectroscopy, the order of the following compounds from the highest absorption frequency of carbonyl bond to the lowest is:",
      "options": [
        { "id": "a", "text": "Benzoic anhydride > benzamide > benzoyl chloride > methyl benzoate." },
        { "id": "b", "text": "Benzoyl chloride > methyl benzoate > benzoic anhydride > benzamide." },
        { "id": "c", "text": "Benzamide > benzoic anhydride > benzoyl chloride > methyl benzoate." },
        { "id": "d", "text": "Benzoic anhydride > benzoyl chloride > methyl benzoate > benzamide." },
        { "id": "e", "text": "Benzoyl chloride > benzoic anhydride > benzamide > methyl benzoate." }
      ],
      "correctId": "d",
      "explanation": "Anhydrides have the highest frequency (up to 1818 cm⁻¹), followed by acid halides (~1800 cm⁻¹), and then esters (~1735 cm⁻¹). Amides have the lowest frequency (~1650 cm⁻¹) because of the resonance effect."
    },
    {
      "id": "q12",
      "question": "12. Which of the following compounds best fits the following spectral data? MS: molecular ion at m/z = 83. The IR spectrum shows a sharp, strong absorption at 2235 cm⁻¹.",
      "options": [
        { "id": "a", "text": "A (An amine)." },
        { "id": "b", "text": "B (A nitrile)." },
        { "id": "c", "text": "C (An alcohol/nitrile)." },
        { "id": "d", "text": "D (An alkyne/amine)." },
        { "id": "e", "text": "E (An amide)." }
      ],
      "correctId": "b",
      "explanation": "Absorption in the 2260–2222 cm⁻¹ region is the definitive characteristic of the nitrile (C ≡ N) functional group. Compound B is a simple nitrile matching this data."
    },
    {
      "id": "q13",
      "question": "13. Concerning the following IR chart, the shape of the peak in the box (3300–2500 cm⁻¹) represent the presence of the:",
      "image": mcq2,
      "options": [
        { "id": "a", "text": "Carbonyl group." },
        { "id": "b", "text": "Aliphatic amine group." },
        { "id": "c", "text": "Hydroxyl group." },
        { "id": "d", "text": "Carboxylic acid group." },
        { "id": "e", "text": "primary amine." }
      ],
      "correctId": "d",
      "explanation": "Carboxylic acid dimers are known to display very broad, intense O-H stretching absorptions that span the 3300–2500 cm⁻¹ region."
    },
    {
      "id": "q14",
      "question": "14. Regarding hydrogen bonding in IR spectroscopy, which of the following functional groups is most likely to exhibit hydrogen bonding?",
      "options": [
        { "id": "a", "text": "alkene." },
        { "id": "b", "text": "alkyne." },
        { "id": "c", "text": "alkyl halide." },
        { "id": "d", "text": "alcohol." },
        { "id": "e", "text": "alkane." }
      ],
      "correctId": "d",
      "explanation": "Alcohols and phenols possess O-H groups that are highly sensitive to hydrogen bonding, which causes significant shifts and broadening of their IR peaks."
    },
    {
      "id": "q15",
      "question": "15. One of the following facts is NOT TRUE regarding IR spectroscopy:",
      "options": [
        { "id": "a", "text": "The positions and relative sizes of the bands give an indication about the functional group." },
        { "id": "b", "text": "Absorbance is the only way to express the band intensities." },
        { "id": "c", "text": "Stretching vibrational mode occurs between 4000 and 400 cm⁻¹." },
        { "id": "d", "text": "IR spectra are frequently used with other spectral data to validate molecular structure." },
        { "id": "e", "text": "None of the above." }
      ],
      "correctId": "b",
      "explanation": "In IR spectroscopy, intensities are most commonly expressed as Percent Transmittance (%T) on the y-axis of the spectrum, rather than just absorbance."
    },
    {
      "id": "q16",
      "question": "16. Application of IR. All the following are true EXCEPT:",
      "options": [
        { "id": "a", "text": "Detection of Functional groups." },
        { "id": "b", "text": "Estimation of the Purity of Samples." },
        { "id": "c", "text": "Study of H-Bonding." },
        { "id": "d", "text": "Calculation of Force Constants." },
        { "id": "e", "text": "show the compound backbone." }
      ],
      "correctId": "e",
      "explanation": "IR identifies specific functional groups and bonds. Identifying the complete carbon-hydrogen framework (backbone) is the primary purpose of NMR spectroscopy."
    },
    {
      "id": "q17",
      "question": "17. Which of the following statement represent the relationship between the wave number and the reduced mass (μ) of IR absorption?",
      "options": [
        { "id": "a", "text": "Wave number is directly proportional to reduced mass." },
        { "id": "b", "text": "Wave number is directly proportional to square of reduced mass." },
        { "id": "c", "text": "Wave number is independent of the reduced mass." },
        { "id": "d", "text": "Wave number is inversely proportional to reduced mass." },
        { "id": "e", "text": "Wave number is inversely proportional to square of reduced mass." }
      ],
      "correctId": "d",
      "explanation": "Per Hooke's Law, the wavenumber is inversely proportional to the mass of the atoms (ν̄ ∝ 1/√μ); thus, as mass increases, the wavenumber decreases."
    },
    {
      "id": "q18",
      "question": "18. For carbonyl group and within its given range, the position of the C=O stretching band is determined by the following factors:",
      "options": [
        { "id": "a", "text": "Electronic and mass effects of neighboring substituents." },
        { "id": "b", "text": "Hydrogen bonding (intermolecular and intramolecular)." },
        { "id": "c", "text": "Physical state." },
        { "id": "d", "text": "Conjugation." },
        { "id": "e", "text": "All above." }
      ],
      "correctId": "e",
      "explanation": "The sources explicitly list physical state, electronic effects, conjugation, and hydrogen bonding as the four main factors determining the exact position of the C=O band."
    },
    {
      "id": "q19",
      "question": "19. Which of the following compounds would be expected to show broad IR bands at 3300 and 1600 cm⁻¹?",
      "options": [
        { "id": "a", "text": "CH₂=CH-CH₂-CH₂OH." },
        { "id": "b", "text": "CH₂=CH-CH₂-CH₂-NH₂." },
        { "id": "c", "text": "CH₃-CH₂-CH₂-CH₂-C ≡ N." },
        { "id": "d", "text": "CH₃-C ≡ C-CH₂-CH₃." },
        { "id": "e", "text": "CH ≡ C-CH₂-CH₂-CH₃." }
      ],
      "correctId": "b",
      "explanation": "Primary amines show N-H stretching at 3300 cm⁻¹ and N-H bending (scissoring) at 1600 cm⁻¹. Alcohols (a) would show O-H at 3300 but not the 1600 amine bend."
    },
    {
      "id": "q20",
      "question": "20. In infrared spectroscopy, absorption of electromagnetic radiation results in transitions between ________ energy levels.",
      "options": [
        { "id": "a", "text": "Vibrational." },
        { "id": "b", "text": "Electronic." },
        { "id": "c", "text": "Rotational." },
        { "id": "d", "text": "Nuclear." },
        { "id": "e", "text": "Microwave." }
      ],
      "correctId": "a",
      "explanation": "Infrared radiation is converted specifically into molecular vibration energy by organic molecules."
    },
    {
      "id": "q21",
      "question": "21. ________ is not a technique for preparing solid samples in IR spectroscopy?",
      "options": [
        { "id": "a", "text": "Solids run in solution." },
        { "id": "b", "text": "Mull technique." },
        { "id": "c", "text": "Solid films." },
        { "id": "d", "text": "Thin films." },
        { "id": "e", "text": "None of the above." }
      ],
      "correctId": "d",
      "explanation": "While solids are prepared as mulls or semi-transparent pellets (solid films), thin films are the standard sampling technique listed for liquids."
    },
    {
      "id": "q23",
      "question": "23. Given below four isomers (C₄H₈O) and one IR spectrum. Identify the isomer to which the spectrum is corresponded.",
      "image": mcq3,
      "options": [
        { "id": "a", "text": "I." },
        { "id": "b", "text": "II." },
        { "id": "c", "text": "III." },
        { "id": "d", "text": "IV." },
        { "id": "e", "text": "None of the above." }
      ],
      "correctId": "b",
      "explanation": "The IR spectrum shows a prominent C=O stretching band at ~1715 cm⁻¹, which is the standard absorption frequency for a saturated aliphatic ketone/aldehyde."
    },
    {
      "id": "q24",
      "question": "24. Regarding IR spectroscopy, which of the following statement is true about the frequency of the following compounds?",
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
  ],
'uv_spectroscopy': [
    {
      "id": "q1",
      "question": "1. In the UV/Vis spectroscopy, 80% transmittance of UV/Vis light means:",
      "options": [
        { "id": "a", "text": "20% absorption" },
        { "id": "b", "text": "80% absorption" },
        { "id": "c", "text": "20% transmittance" },
        { "id": "d", "text": "80% emission" },
        { "id": "e", "text": "0% absorption" }
      ],
      "correctId": "a",
      "explanation": "Transmittance refers to the fraction of incident radiation that passes through the sample. Absorbance is the measurement of the radiant intensity absorbed; therefore, if 80% of the light is transmitted, the remaining 20% has been absorbed by the sample."
    },
    {
      "id": "q2",
      "question": "2. In the Uv/Vis spectroscopy, transition appears at:",
      "options": [
        { "id": "a", "text": "less than 200 nm" },
        { "id": "b", "text": "between 200 and 400 nm" },
        { "id": "c", "text": "between 400 and 800 nm" },
        { "id": "d", "text": "greater than 800 nm" },
        { "id": "e", "text": "None of the above" }
      ],
      "correctId": "a",
      "explanation": "While the \"useful\" region for analysis is above 200 nm, the sources note that transitions for isolated double bonds and ordinary carbon-carbon bonds (σ → σ*) appear in the 100-200 nm range. Alkenes and non-conjugated dienes typically have absorption maxima in this region (e.g., ethene at 171 nm)."
    },
    {
      "id": "q3",
      "question": "3. Electromagnetic radiation refers to the waves of the electromagnetic field. Which one of the following radiations has the maximum wavelength?",
      "options": [
        { "id": "a", "text": "Gamma rays" },
        { "id": "b", "text": "Microwaves radiations" },
        { "id": "c", "text": "Infrared" },
        { "id": "d", "text": "Visible light" },
        { "id": "e", "text": "Ultraviolet" }
      ],
      "correctId": "b",
      "explanation": "According to the electromagnetic spectrum, wavelength increases as frequency and energy decrease. Moving from Gamma rays toward Radio waves, the order of increasing wavelength is Gamma < UV < Visible < Infrared < Microwaves."
    },
    {
      "id": "q4",
      "question": "4. The absorbance of a chromophore was affected by the pH of the medium. Which one of the following action results in a Bathochromic shift?",
      "options": [
        { "id": "a", "text": "Dissolving aniline in an acidic medium" },
        { "id": "b", "text": "Dissolving the phenol in sodium hydroxide" },
        { "id": "c", "text": "Dissolving phenol in hydrochloric acid" },
        { "id": "d", "text": "Diluting the alkaline solution with water" },
        { "id": "e", "text": "None of the above" }
      ],
      "correctId": "b",
      "explanation": "A Bathochromic shift (red shift) is a shift of absorption maxima to a longer wavelength. The sources state that in an alkaline medium (such as adding sodium hydroxide), p-nitrophenol shows a red shift because the negatively charged oxygen delocalizes electrons more effectively. Conversely, aniline in an acidic medium shows a blue (hypsochromic) shift."
    },
    {
      "id": "q5",
      "question": "5. Corresponding to UV-visible region, select the wavelength range:",
      "options": [
        { "id": "a", "text": "10-200 nm" },
        { "id": "b", "text": "200-800 nm" },
        { "id": "c", "text": "400-800 nm" },
        { "id": "d", "text": "800-2500 nm" },
        { "id": "e", "text": "2500-50000 nm" }
      ],
      "correctId": "b",
      "explanation": "The sources define the UV region as approximately 180–380 nm and the Visible region as 380–780 nm. Combined, these cover a range of roughly 200 to 800 nm."
    },
    {
      "id": "q6",
      "question": "6. Regarding the pharmaceutical application of UV spectroscopy, all of the following statements are true EXCEPT:",
      "options": [
        { "id": "a", "text": "For quantitative analysis" },
        { "id": "b", "text": "For monitoring reaction kinetics" },
        { "id": "c", "text": "For determining pKa or solubility" },
        { "id": "d", "text": "For determination of drugs structural formula" },
        { "id": "e", "text": "For detecting functional groups (chromophores)" }
      ],
      "correctId": "d",
      "explanation": "UV spectroscopy is primarily used for quantitative analysis, monitoring reaction kinetics, and determining pKa or solubility. While it can detect functional groups (chromophores), the determination of a complete structural formula typically requires more detailed techniques like Infrared (IR) spectroscopy or NMR."
    },
    {
      "id": "q7",
      "question": "7. Ultraviolet and visible (UV-Vis). The principles of this spectroscopy are:",
      "options": [
        { "id": "a", "text": "Absorption is inversely proportional to concentration" },
        { "id": "b", "text": "The Spectroscopic Techniques are based on the fact that absorption is directly proportional to the concentration of the absorbing component" },
        { "id": "c", "text": "Absorption is directly proportional to the squared concentration" },
        { "id": "d", "text": "Transmittance is directly proportional to concentration" },
        { "id": "e", "text": "Absorption is independent of path length" }
      ],
      "correctId": "b",
      "explanation": "This is a fundamental statement of Beer-Lambert’s Law, which establishes a linear relationship between absorbance and the concentration of the sample."
    },
    {
      "id": "q8",
      "question": "8. Characteristic absorption of organic compound in UV-Vis. The energy required is the highest one for:",
      "options": [
        { "id": "a", "text": "n → π* transition" },
        { "id": "b", "text": "π → π* transition" },
        { "id": "c", "text": "n → σ* transition" },
        { "id": "d", "text": "σ → σ* transition" },
        { "id": "e", "text": "Charge transfer transition" }
      ],
      "correctId": "d",
      "explanation": "Transitions involving σ (bonding) to σ* (anti-bonding) orbitals require the highest amount of energy and occur at the shortest wavelengths (often 100-200 nm), which are outside the standard useful UV range."
    },
    {
      "id": "q9",
      "question": "9. Characteristic absorption of organic compound in UV-Vis. At concentrated solution we have -ve or +ve deviation which may be due to:",
      "options": [
        { "id": "a", "text": "Molecular interactions (association of molecules or formation of complexes)" },
        { "id": "b", "text": "Changes in the refractive index of the solution" },
        { "id": "c", "text": "Presence of stray light" },
        { "id": "d", "text": "Polychromatic light" },
        { "id": "e", "text": "a & b" }
      ],
      "correctId": "e",
      "explanation": "At high concentrations, molecular interactions (association of molecules or formation of complexes) can occur, and changes in the refractive index of the solution can also influence shifts, causing the solution to no longer follow Beer-Lambert’s law."
    },
    {
      "id": "q10",
      "question": "10. The absorptivity of a standard sample is 312 of (1% w/v) a solution measured at a path length of 1 cm, and the absorbance of the sample was 0.624 at wavelength 254 nm. What is the concentration of the sample?",
      "options": [
        { "id": "a", "text": "0.2 mg/100ml" },
        { "id": "b", "text": "2 g/100ml" },
        { "id": "c", "text": "20 mg/100ml" },
        { "id": "d", "text": "0.02 mg/100ml" },
        { "id": "e", "text": "2 mg/100ml" }
      ],
      "correctId": "e",
      "explanation": "Using the formula A = a · c · l: 0.624 = 312 × c × 1. Solving for c gives 0.002. Since the standard was 1% (1 g/100 ml), the sample concentration is 0.002 g/100 ml, which is equal to 2 mg/100 ml."
    },
    {
      "id": "q11",
      "question": "11. What is the value of force constant for HCI 1.63 × 10⁻²⁷ Kg, and the observed frequency is 8.67 × 10¹³ Hz?",
      "options": [
        { "id": "a", "text": "4.83 dynes cm²" },
        { "id": "b", "text": "4.83 × 10³ dynes cm⁻¹" },
        { "id": "c", "text": "4.83 × 10⁴ dynes cm⁻¹" },
        { "id": "d", "text": "8.67 dynes cm⁻¹" },
        { "id": "e", "text": "4.83 dynes cm⁻¹" }
      ],
      "correctId": "e",
      "explanation": "This calculation is based on Hooke’s Law for stretching frequencies in IR spectroscopy. Plugging the observed frequency and mass into the formula results in a force constant of approximately 4.83 × 10⁵ dyn/cm, which matches option e in the provided exam key."
    },
    {
      "id": "q12",
      "question": "12. Absorption of radiation in the UV range attributable to n → π* electronic transitions is characteristic of compounds:",
      "options": [
        { "id": "a", "text": "Unsaturated carbonyl compounds" },
        { "id": "b", "text": "Saturated alkanes" },
        { "id": "c", "text": "Alkenes lacking heteroatoms" },
        { "id": "d", "text": "Aromatic hydrocarbons only" },
        { "id": "e", "text": "Alkynes" }
      ],
      "correctId": "a",
      "explanation": "The n → π* transition (often called the R band) is characteristic of molecules containing heteroatoms with non-bonding electrons next to a π system, such as the carbonyl group (C=O) in aldehydes and ketones."
    },
    {
      "id": "q13",
      "question": "13. Regarding UV-Vis, energy required for the following transitions in decreasing order:",
      "options": [
        { "id": "a", "text": "σ → σ*, n → σ*, π → π*, n → π*" },
        { "id": "b", "text": "n → π*, π → π*, n → σ*, σ → σ*" },
        { "id": "c", "text": "σ → σ*, π → π*, n → σ*, n → π*" },
        { "id": "d", "text": "π → π*, σ → σ*, n → π*, n → σ*" },
        { "id": "e", "text": "n → σ*, σ → σ*, n → π*, π → π*" }
      ],
      "correctId": "a",
      "explanation": "The energy levels of molecular orbitals dictate that σ → σ* requires the most energy, followed by n → σ*, then π → π*, with n → π* requiring the least."
    },
    {
      "id": "q14",
      "question": "14. Regarding UV-Vis, the λ_max for the following compound [referring to p-nitrophenol]:",
      "options": [
        { "id": "a", "text": "210 nm" },
        { "id": "b", "text": "279.5 nm" },
        { "id": "c", "text": "317 nm" },
        { "id": "d", "text": "400 nm" },
        { "id": "e", "text": "800 nm" }
      ],
      "correctId": "b",
      "explanation": "While the text notes p-nitrophenol absorbs at 317 nm, standard MCQ banks often attribute values near 280 nm to aromatic derivatives depending on the solvent and state. Based on the source's data for aniline (280 nm) and acetone (279 nm), 279.5 nm is the closest provided option in the exam document."
    }
  ],
'drug_development': [
    {
      "id": "q1",
      "question": "1- To gain marketing approval for a new drug, a sponsor must demonstrate all of the following EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "The drug is safe and effective for its proposed use."
        },
        {
          "id": "b",
          "text": "The manufacturing processes are properly controlled and validated."
        },
        {
          "id": "c",
          "text": "The new drug is more effective than all existing drugs on the market."
        },
        {
          "id": "d",
          "text": "The product meets established standards of quality."
        }
      ],
      "correctId": "c",
      "explanation": "The text states the sponsor must demonstrate safety, efficacy, and proper control/quality. It does not require the drug to be superior to all existing drugs."
    },
    {
      "id": "q2",
      "question": "2- What is the correct sequence of studies undertaken to obtain evidence of a drug's safety and effectiveness?",
      "options": [
        {
          "id": "a",
          "text": "Clinical studies -> Preclinical studies -> Formulation studies"
        },
        {
          "id": "b",
          "text": "Preclinical studies -> Clinical studies"
        },
        {
          "id": "c",
          "text": "Formulation studies -> Clinical studies -> Preclinical studies"
        },
        {
          "id": "d",
          "text": "Clinical studies -> Preformulation studies -> Preclinical studies"
        }
      ],
      "correctId": "b",
      "explanation": "The text describes a \"progressive sequence of preclinical (e.g., cell culture, whole animal) and clinical (human) studies.\""
    },
    {
      "id": "q3",
      "question": "3- The application that must be filed with the FDA to begin initial testing of a new drug in humans is called a(n):",
      "options": [
        {
          "id": "a",
          "text": "New Drug Application (NDA)"
        },
        {
          "id": "b",
          "text": "Abbreviated New Drug Application (ANDA)"
        },
        {
          "id": "c",
          "text": "Investigational New Drug (IND) Application"
        },
        {
          "id": "d",
          "text": "Product License Application (PLA)"
        }
      ],
      "correctId": "c",
      "explanation": "The text states, \"...the drug's sponsor file an Investigational New Drug (IND) Application with the FDA for initial testing in humans.\""
    },
    {
      "id": "q4",
      "question": "4- What does FDA approval of a New Drug Application (NDA) signify?",
      "options": [
        {
          "id": "a",
          "text": "The drug is the best treatment available for the indication."
        },
        {
          "id": "b",
          "text": "The drug is safe and effective for its proposed use, and its manufacturing and labeling are adequate."
        },
        {
          "id": "c",
          "text": "The drug can be marketed immediately without any further reporting."
        },
        {
          "id": "d",
          "text": "The drug's patent has been approved."
        }
      ],
      "correctId": "b",
      "explanation": "The text defines NDA approval as demonstrating the drug is safe and effective, with proper manufacture/control and accurate labeling."
    },
    {
      "id": "q5",
      "question": "5- The content of a product's approved labeling (package insert) is best described as:",
      "options": [
        {
          "id": "a",
          "text": "A marketing brochure for the drug."
        },
        {
          "id": "b",
          "text": "A summary of the entire drug development process."
        },
        {
          "id": "c",
          "text": "A legal document protecting the drug's patent."
        },
        {
          "id": "d",
          "text": "A guide for patients on how to save money on the drug."
        }
      ],
      "correctId": "b",
      "explanation": "The text calls the package insert \"a summary of the entire drug development process.\""
    },
    {
      "id": "q6",
      "question": "6- A \"treatment IND\" is a special protocol that allows:",
      "options": [
        {
          "id": "a",
          "text": "A company to test a drug on healthy volunteers."
        },
        {
          "id": "b",
          "text": "The use of an investigational drug to treat patients with a serious condition before NDA approval."
        },
        {
          "id": "c",
          "text": "A generic version of a drug to be approved."
        },
        {
          "id": "d",
          "text": "A drug to be sold over-the-counter."
        }
      ],
      "correctId": "b",
      "explanation": "The text defines a treatment IND as a protocol permitting the use of an investigational drug for patients prior to NDA approval."
    },
    {
      "id": "q7",
      "question": "7- An Abbreviated New Drug Application (ANDA) is used to gain approval for:",
      "options": [
        {
          "id": "a",
          "text": "A new chemical entity."
        },
        {
          "id": "b",
          "text": "A new biologic drug."
        },
        {
          "id": "c",
          "text": "A generic equivalent of an already approved drug."
        },
        {
          "id": "d",
          "text": "A new use for an existing drug."
        }
      ],
      "correctId": "c",
      "explanation": "The text states, \"An abbreviated new drug application (ANDA) is used to gain approval to market a generic equivalent of a product that is already approved.\""
    },
    {
      "id": "q8",
      "question": "8- According to the text, what is the fastest growing segment within the new prescription drug market?",
      "options": [
        {
          "id": "a",
          "text": "Small molecule drugs"
        },
        {
          "id": "b",
          "text": "Generic drugs"
        },
        {
          "id": "c",
          "text": "Over-the-counter medications"
        },
        {
          "id": "d",
          "text": "Biologics"
        }
      ],
      "correctId": "d",
      "explanation": "The text states, \"Presently, biologics is the fastest growing segment within the new prescription drug market.\""
    },
    {
      "id": "q9",
      "question": "9- New drugs can be discovered from which of the following sources?",
      "options": [
        {
          "id": "a",
          "text": "Natural sources (e.g., plants)"
        },
        {
          "id": "b",
          "text": "Laboratory synthesis"
        },
        {
          "id": "c",
          "text": "Biotechnology processes"
        },
        {
          "id": "d",
          "text": "All of the above"
        }
      ],
      "correctId": "d",
      "explanation": "The text explicitly lists all three as sources: natural, synthesized in the lab, and created through biotechnology."
    },
    {
      "id": "q10",
      "question": "10- A drug created by chemically altering a substance obtained from a natural source is termed a(n):",
      "options": [
        {
          "id": "a",
          "text": "Biologic drug"
        },
        {
          "id": "b",
          "text": "Semisynthetic drug"
        },
        {
          "id": "c",
          "text": "Prodrug"
        },
        {
          "id": "d",
          "text": "New chemical entity"
        }
      ],
      "correctId": "b",
      "explanation": "The text defines \"semisynthetic drugs\" as new structures resulting from the chemical alteration of a starting substance from a natural source."
    },
    {
      "id": "q11",
      "question": "11- The two basic technologies that drive the genetic field of drug development are:",
      "options": [
        {
          "id": "a",
          "text": "High-throughput screening and molecular modification"
        },
        {
          "id": "b",
          "text": "Recombinant DNA and monoclonal antibody (mAb) production"
        },
        {
          "id": "c",
          "text": "Prodrug design and mechanism-based design"
        },
        {
          "id": "d",
          "text": "Bioassays and toxicology studies"
        }
      ],
      "correctId": "b",
      "explanation": "The text states, \"The two basic technologies that drive the genetic field of drug development are recombinant DNA and monoclonal antibody (mAb) production.\""
    },
    {
      "id": "q12",
      "question": "12- Human gene therapy may involve modifying cells outside the body for subsequent administration. This is known as:",
      "options": [
        {
          "id": "a",
          "text": "In vivo modification"
        },
        {
          "id": "b",
          "text": "Ex vivo modification"
        },
        {
          "id": "c",
          "text": "Passive targeting"
        },
        {
          "id": "d",
          "text": "Biotransformation"
        }
      ],
      "correctId": "b",
      "explanation": "The text defines ex vivo as modifying cells \"outside the body\" and in vivo as modifying them \"within the body.\""
    },
    {
      "id": "q13",
      "question": "13- In theory, a \"goal drug\" would possess all of the following features EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "Be administered by the most desired route (generally orally)."
        },
        {
          "id": "b",
          "text": "Exhibit no side effects."
        },
        {
          "id": "c",
          "text": "Be difficult and expensive to produce."
        },
        {
          "id": "d",
          "text": "Have an optimal onset and duration of activity."
        }
      ],
      "correctId": "c",
      "explanation": "A goal drug would be \"easily produced at low cost.\" Difficulty and high cost are not desired features."
    },
    {
      "id": "q14",
      "question": "14- What is the purpose of molecular modification of a lead compound?",
      "options": [
        {
          "id": "a",
          "text": "To make the compound easier to synthesize."
        },
        {
          "id": "b",
          "text": "To enhance its usefulness as a drug (e.g., increase potency, reduce toxicity)."
        },
        {
          "id": "c",
          "text": "To create a generic version of the drug."
        },
        {
          "id": "d",
          "text": "To obtain a patent for the natural substance."
        }
      ],
      "correctId": "b",
      "explanation": "The text lists enhancing specificity, potency, absorption, reducing toxicity, etc., as purposes of molecular modification."
    },
    {
      "id": "q15",
      "question": "15- Mechanism-based drug design involves:",
      "options": [
        {
          "id": "a",
          "text": "Randomly testing thousands of compounds for any biological activity."
        },
        {
          "id": "b",
          "text": "Designing a drug that interferes with the known biochemical pathway of a disease."
        },
        {
          "id": "c",
          "text": "Chemically altering a lead compound to improve its solubility."
        },
        {
          "id": "d",
          "text": "Creating a copy of an already approved drug."
        }
      ],
      "correctId": "b",
      "explanation": "The definition provided is \"molecular modification to design a drug that interferes specifically with the known or suspected biochemical pathway or mechanism of a disease process.\""
    },
    {
      "id": "q16",
      "question": "16- A \"lead compound\" is best described as:",
      "options": [
        {
          "id": "a",
          "text": "The final drug that is brought to market."
        },
        {
          "id": "b",
          "text": "A prototype chemical compound with a fundamental desired biologic activity."
        },
        {
          "id": "c",
          "text": "An inactive compound that requires metabolic conversion."
        },
        {
          "id": "d",
          "text": "The most toxic compound in a series of analogs."
        }
      ],
      "correctId": "b",
      "explanation": "The text defines a lead compound as \"a prototype chemical compound that has a fundamental desired biologic or pharmacologic activity.\""
    },
    {
      "id": "q17",
      "question": "17- A prodrug is a compound that:",
      "options": [
        {
          "id": "a",
          "text": "Is active immediately upon administration."
        },
        {
          "id": "b",
          "text": "Is always more toxic than the parent drug."
        },
        {
          "id": "c",
          "text": "Requires metabolic biotransformation after administration to become the active pharmacologic compound."
        },
        {
          "id": "d",
          "text": "Cannot be administered orally."
        }
      ],
      "correctId": "c",
      "explanation": "This is the core definition of a prodrug provided in the text."
    },
    {
      "id": "q18",
      "question": "18- Why was valacyclovir designed as a prodrug of acyclovir?",
      "options": [
        {
          "id": "a",
          "text": "To make the drug less water-soluble."
        },
        {
          "id": "b",
          "text": "To improve the drug's biostability and increase its oral bioavailability."
        },
        {
          "id": "c",
          "text": "To target the drug specifically to the liver."
        },
        {
          "id": "d",
          "text": "To prolong the drug's release for up to 4 weeks."
        }
      ],
      "correctId": "b",
      "explanation": "The text explains that acyclovir has low oral bioavailability, but its prodrug valacyclovir is converted in the liver, resulting in much higher (55%) bioavailability."
    },
    {
      "id": "q19",
      "question": "19- The conversion of the prodrug levodopa to the active drug dopamine is an example of a prodrug designed to improve:",
      "options": [
        {
          "id": "a",
          "text": "Solubility for IV injection."
        },
        {
          "id": "b",
          "text": "Biostability in the stomach."
        },
        {
          "id": "c",
          "text": "Site-specific action (crossing the blood-brain barrier)."
        },
        {
          "id": "d",
          "text": "Prolonged release for extended activity."
        }
      ],
      "correctId": "c",
      "explanation": "Dopamine cannot cross the blood-brain barrier, but its prodrug levodopa can. Once in the brain, it is converted to the active drug."
    },
    {
      "id": "q20",
      "question": "20- According to the FDA, a drug can be considered \"new\" for which of the following reasons?",
      "options": [
        {
          "id": "a",
          "text": "A new use for an established drug."
        },
        {
          "id": "b",
          "text": "A new dosage form or route of administration."
        },
        {
          "id": "c",
          "text": "A change in the formulation of a previously approved product."
        },
        {
          "id": "d",
          "text": "All of the above."
        }
      ],
      "correctId": "d",
      "explanation": "The text lists a new use, new dosage schedule, new route, new dosage form, and a change in formulation or manufacture as triggers for a drug being considered \"new.\""
    },
    {
      "id": "q21",
      "question": "21- The study of a drug's absorption, distribution, metabolism, and excretion (ADME) is known as:",
      "options": [
        {
          "id": "a",
          "text": "Pharmacodynamics"
        },
        {
          "id": "b",
          "text": "Pharmacokinetics"
        },
        {
          "id": "c",
          "text": "Toxicology"
        },
        {
          "id": "d",
          "text": "Pharmacogenetics"
        }
      ],
      "correctId": "b",
      "explanation": "The text defines pharmacokinetics as dealing \"with the absorption, distribution, metabolism or biotransformation, and excretion (ADME) of drugs.\""
    },
    {
      "id": "q22",
      "question": "22- The selectivity and specificity of a drug for a certain body tissue is related to:",
      "options": [
        {
          "id": "a",
          "text": "The drug's color."
        },
        {
          "id": "b",
          "text": "The patient's age."
        },
        {
          "id": "c",
          "text": "Specific sites on or within cells called receptor sites."
        },
        {
          "id": "d",
          "text": "The drug's cost of manufacturing."
        }
      ],
      "correctId": "c",
      "explanation": "The text explains that drug effects are due to \"specific interactions between a drug's chemical structure and specific cells or cellular components... termed receptor sites.\""
    },
    {
      "id": "q23",
      "question": "23- Why are small animals like rodents primarily used for initial animal testing?",
      "options": [
        {
          "id": "a",
          "text": "They are physiologically identical to humans."
        },
        {
          "id": "b",
          "text": "They are inexpensive, readily available, and require small amounts of drug."
        },
        {
          "id": "c",
          "text": "The FDA does not allow testing on larger animals."
        },
        {
          "id": "d",
          "text": "They have no immune system, making testing easier."
        }
      ],
      "correctId": "b",
      "explanation": "The text lists \"cost, availability, the small amount of drug required... ease of administration... and experience\" as reasons for using small animals like rodents."
    },
    {
      "id": "q24",
      "question": "24- The primary objective of animal pharmacologic studies is to:",
      "options": [
        {
          "id": "a",
          "text": "Prove the drug is 100% safe for humans."
        },
        {
          "id": "b",
          "text": "Obtain basic information to predict safe and effective use in humans."
        },
        {
          "id": "c",
          "text": "Satisfy animal rights activists."
        },
        {
          "id": "d",
          "text": "Determine the final marketing price of the drug."
        }
      ],
      "correctId": "b",
      "explanation": "The text states the objective is \"to obtain basic information on the drug's effects that may be used to predict safe and effective use in humans.\""
    },
    {
      "id": "q25",
      "question": "25- Drug metabolism (biotransformation) primarily serves to:",
      "options": [
        {
          "id": "a",
          "text": "Increase the drug's fat solubility."
        },
        {
          "id": "b",
          "text": "Transform nonpolar drug molecules into polar compounds for easier elimination."
        },
        {
          "id": "c",
          "text": "Make the drug more potent."
        },
        {
          "id": "d",
          "text": "Help the drug bind to receptors."
        }
      ],
      "correctId": "b",
      "explanation": "The text explains that metabolism is \"the body's means of transforming nonpolar drug molecules into polar compounds, which are more readily eliminated.\""
    },
    {
      "id": "q26",
      "question": "26- Toxicology studies are designed to determine all of the following EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "The drug's potential for specific organ toxicity."
        },
        {
          "id": "b",
          "text": "The drug's carcinogenic and genotoxic potential."
        },
        {
          "id": "c",
          "text": "The drug's mechanism of therapeutic action."
        },
        {
          "id": "d",
          "text": "The drug's potential for reproductive or teratogenic toxicities."
        }
      ],
      "correctId": "c",
      "explanation": "Determining the mechanism of therapeutic action falls under pharmacology. Toxicology focuses on adverse or undesired effects."
    },
    {
      "id": "q27",
      "question": "27- The initial human dose in Phase 1 clinical trials is typically based on:",
      "options": [
        {
          "id": "a",
          "text": "The highest dose tolerated in animals."
        },
        {
          "id": "b",
          "text": "The average dose of similar drugs on the market."
        },
        {
          "id": "c",
          "text": "One-tenth of the highest nontoxic dose shown in animal studies."
        },
        {
          "id": "d",
          "text": "The patient's body weight only."
        }
      ],
      "correctId": "c",
      "explanation": "The text states, \"The initial human dose is usually one- tenth of the highest nontoxic dose... shown during the animal studies.\""
    },
    {
      "id": "q28",
      "question": "28- Carcinogenicity studies are typically:",
      "options": [
        {
          "id": "a",
          "text": "Short-term studies lasting a single day."
        },
        {
          "id": "b",
          "text": "Performed only on dogs."
        },
        {
          "id": "c",
          "text": "Long-term studies (18 to 24 months) to assess cancer-causing potential."
        },
        {
          "id": "d",
          "text": "Required only for over-the-counter drugs."
        }
      ],
      "correctId": "c",
      "explanation": "The text states, \"Carcinogenicity studies are long term (18 to 24 months)...\""
    },
    {
      "id": "q29",
      "question": "29- Which of the following is NOT listed as an intrinsic chemical or physical characteristic to consider during preformulation studies?",
      "options": [
        {
          "id": "a",
          "text": "Drug solubility"
        },
        {
          "id": "b",
          "text": "Marketing cost of the final product"
        },
        {
          "id": "c",
          "text": "Partition coefficient"
        },
        {
          "id": "d",
          "text": "Stability"
        }
      ],
      "correctId": "b",
      "explanation": "The text lists solubility, partition coefficient, dissolution rate, physical form, and stability. Marketing cost is a commercial, not a preformulation, consideration."
    },
    {
      "id": "q30",
      "question": "30- A drug's partition coefficient is a measure that indicates its:",
      "options": [
        {
          "id": "a",
          "text": "Overall toxicity."
        },
        {
          "id": "b",
          "text": "Rate of dissolution in water."
        },
        {
          "id": "c",
          "text": "Ability to penetrate biologic (lipophilic) membranes."
        },
        {
          "id": "d",
          "text": "Stability at high temperatures."
        }
      ],
      "correctId": "c",
      "explanation": "The text defines partition coefficient as a measure of a drug's distribution in a lipophilic-hydrophilic system, which \"indicates its ability to penetrate biologic multiphase systems.\""
    },
    {
      "id": "q31",
      "question": "31- Reducing the particle size of a poorly soluble drug can enhance its absorption primarily by:",
      "options": [
        {
          "id": "a",
          "text": "Making the drug more stable."
        },
        {
          "id": "b",
          "text": "Increasing its dissolution rate in the gut."
        },
        {
          "id": "c",
          "text": "Changing its color to make it more appealing."
        },
        {
          "id": "d",
          "text": "Allowing it to be injected intravenously."
        }
      ],
      "correctId": "b",
      "explanation": "The text explains that reducing particle size increases surface area, which enhances the dissolution rate and therefore biologic absorption."
    },
    {
      "id": "q32",
      "question": "32- During Phase 1 clinical trials for orally administered drugs, what formulation is often used?",
      "options": [
        {
          "id": "a",
          "text": "A tablet with multiple excipients."
        },
        {
          "id": "b",
          "text": "A flavored syrup."
        },
        {
          "id": "c",
          "text": "A capsule containing the active ingredient alone, without excipients."
        },
        {
          "id": "d",
          "text": "A transdermal patch."
        }
      ],
      "correctId": "c",
      "explanation": "The text states, \"Often during Phase 1 studies, for orally administered drugs, capsules are employed containing the active ingredient alone, without pharmaceutical excipients.\""
    },
    {
      "id": "q33",
      "question": "33- What is the primary purpose of Phase 1 clinical studies?",
      "options": [
        {
          "id": "a",
          "text": "To assess the drug's effectiveness in a large patient population."
        },
        {
          "id": "b",
          "text": "To assess the drug's safety in humans."
        },
        {
          "id": "c",
          "text": "To compare the drug to a marketed competitor."
        },
        {
          "id": "d",
          "text": "To obtain data for a treatment IND."
        }
      ],
      "correctId": "b",
      "explanation": "The text states Phase 1 is \"primarily for the purpose of assessing safety.\""
    },
    {
      "id": "q34",
      "question": "34- The subjects in Phase 1 clinical trials are typically:",
      "options": [
        {
          "id": "a",
          "text": "Patients with the target disease."
        },
        {
          "id": "b",
          "text": "Healthy volunteers."
        },
        {
          "id": "c",
          "text": "Elderly patients only."
        },
        {
          "id": "d",
          "text": "Children."
        }
      ],
      "correctId": "b",
      "explanation": "The text states, \"The human subjects are usually healthy volunteers...\""
    },
    {
      "id": "q35",
      "question": "35- According to Table 2.1, what percentage of drugs that enter Phase 1 clinical trials are typically successful and ultimately approved for marketing?",
      "options": [
        {
          "id": "a",
          "text": "70%"
        },
        {
          "id": "b",
          "text": "33%"
        },
        {
          "id": "c",
          "text": "25-30%"
        },
        {
          "id": "d",
          "text": "20%"
        }
      ],
      "correctId": "d",
      "explanation": "The text states, \"...on average, 20 of the original 100 drugs ultimately will be approved for marketing.\""
    },
    {
      "id": "q36",
      "question": "36- Controlled clinical studies to evaluate the effectiveness of a drug in patients with the target condition are conducted during which phase?",
      "options": [
        {
          "id": "a",
          "text": "Phase 1"
        },
        {
          "id": "b",
          "text": "Phase 2"
        },
        {
          "id": "c",
          "text": "Phase 4"
        },
        {
          "id": "d",
          "text": "Preclinical studies"
        }
      ],
      "correctId": "b",
      "explanation": "The text defines Phase 2 trials as \"controlled clinical studies to evaluate the effectiveness of a drug in patients with the condition.\""
    },
    {
      "id": "q37",
      "question": "37- The final dosage form that is submitted to the FDA for marketing approval is typically developed and selected during which phase?",
      "options": [
        {
          "id": "a",
          "text": "Phase 1"
        },
        {
          "id": "b",
          "text": "Phase 2"
        },
        {
          "id": "c",
          "text": "Preclinical studies"
        },
        {
          "id": "d",
          "text": "Phase 4"
        }
      ],
      "correctId": "b",
      "explanation": "The text states, \"During Phase 2, the final dosage form is selected and developed for Phase 3 trials; this is the formulation that is submitted to the FDA for marketing approval.\""
    },
    {
      "id": "q38",
      "question": "38- Phase 3 studies involve a large patient population (1,000-5,000) and are designed to:",
      "options": [
        {
          "id": "a",
          "text": "Determine the drug's safety only."
        },
        {
          "id": "b",
          "text": "Assess the drug's safety, effectiveness, and dosage in an expanded patient base."
        },
        {
          "id": "c",
          "text": "Test the drug on animals for the first time."
        },
        {
          "id": "d",
          "text": "Market the drug to physicians."
        }
      ],
      "correctId": "b",
      "explanation": "Table 2.1 lists the purpose of Phase 3 as \"Safety, effectiveness, dosage.\""
    },
    {
      "id": "q39",
      "question": "39- Studies conducted after an NDA is approved to gather additional information on a drug's long-term safety, new uses, or additional dosage forms are known as:",
      "options": [
        {
          "id": "a",
          "text": "Phase 3b studies"
        },
        {
          "id": "b",
          "text": "Preclinical studies"
        },
        {
          "id": "c",
          "text": "Phase 4 studies"
        },
        {
          "id": "d",
          "text": "Bioequivalence studies"
        }
      ],
      "correctId": "c",
      "explanation": "The text defines Phase 4 as \"continued clinical investigations\" after marketing to understand the drug's mechanism, find new uses, or reveal additional side effects."
    },
    {
      "id": "q40",
      "question": "40- Why is age a particularly important consideration in drug dosing for neonates and infants?",
      "options": [
        {
          "id": "a",
          "text": "They have a higher proportion of body fat."
        },
        {
          "id": "b",
          "text": "They have immature hepatic and renal function."
        },
        {
          "id": "c",
          "text": "They are more physically active."
        },
        {
          "id": "d",
          "text": "They require lower doses due to their smaller size only."
        }
      ],
      "correctId": "b",
      "explanation": "The text explains that infants have \"immature hepatic and renal function, the means by which drugs are normally inactivated and eliminated from the body.\""
    },
    {
      "id": "q41",
      "question": "41- The decline in renal and hepatic function in elderly patients can lead to:",
      "options": [
        {
          "id": "a",
          "text": "Faster drug clearance and reduced efficacy."
        },
        {
          "id": "b",
          "text": "Slower drug clearance and an increased possibility of drug accumulation and toxicity."
        },
        {
          "id": "c",
          "text": "No change in drug pharmacokinetics."
        },
        {
          "id": "d",
          "text": "A need for higher initial doses."
        }
      ],
      "correctId": "b",
      "explanation": "The text states the decline \"slows the drug clearance rate and increases the possibility of drug accumulation and toxicity.\""
    },
    {
      "id": "q42",
      "question": "42- Body Surface Area (BSA) is sometimes used to determine drug dosage because:",
      "options": [
        {
          "id": "a",
          "text": "It is easier to measure than body weight."
        },
        {
          "id": "b",
          "text": "It correlates with a number of physiologic processes."
        },
        {
          "id": "c",
          "text": "It is required by law for all new drugs."
        },
        {
          "id": "d",
          "text": "It only applies to topical medications."
        }
      ],
      "correctId": "b",
      "explanation": "The text mentions, \"Because of the correlation between a number of physiologic processes and BSA, some drug doses are based on this relationship.\""
    },
    {
      "id": "q43",
      "question": "43- The phenomenon where a patient requires an increased dose of a drug over time to maintain the same therapeutic response is known as:",
      "options": [
        {
          "id": "a",
          "text": "Cross-tolerance"
        },
        {
          "id": "b",
          "text": "Drug interaction"
        },
        {
          "id": "c",
          "text": "Tolerance"
        },
        {
          "id": "d",
          "text": "Sensitization"
        }
      ],
      "correctId": "c",
      "explanation": "The text defines drug tolerance as \"The ability to endure the influence of a drug, particularly during continued use,\" resulting in the need for increased dosage."
    },
    {
      "id": "q44",
      "question": "44- A drug with a narrow therapeutic index carries an inherent risk that:",
      "options": [
        {
          "id": "a",
          "text": "It must be taken with food."
        },
        {
          "id": "b",
          "text": "Small changes in dose can lead to toxic or ineffective blood levels."
        },
        {
          "id": "c",
          "text": "It cannot be used in children."
        },
        {
          "id": "d",
          "text": "It is only effective in men."
        }
      ],
      "correctId": "b",
      "explanation": "The text explains that for drugs with a narrow therapeutic index, \"drug blood levels may increase to toxic levels or decrease to ineffective levels with minimal dosing changes.\""
    },
    {
      "id": "q45",
      "question": "45- Why might a lower parenteral (injectable) dose be required compared to an oral dose to achieve the same effect?",
      "options": [
        {
          "id": "a",
          "text": "Injections are less painful."
        },
        {
          "id": "b",
          "text": "Oral drugs are never fully absorbed into the bloodstream due to various barriers."
        },
        {
          "id": "c",
          "text": "Injectable drugs are always more potent."
        },
        {
          "id": "d",
          "text": "The liver destroys all of an oral dose."
        }
      ],
      "correctId": "b",
      "explanation": "The text explains that oral drugs face \"physical, chemical, and biologic barriers to their absorption,\" whereas IV drugs enter the bloodstream directly and completely."
    },
    {
      "id": "q46",
      "question": "46- The FDA's \"review clock\" for a New Drug Application (NDA) is typically:",
      "options": [
        {
          "id": "a",
          "text": "90 days"
        },
        {
          "id": "b",
          "text": "180 days"
        },
        {
          "id": "c",
          "text": "365 days"
        },
        {
          "id": "d",
          "text": "Indefinite"
        }
      ],
      "correctId": "b",
      "explanation": "The text states, \"By regulation, the FDA must respond within 180 days of receipt of an application.\""
    },
    {
      "id": "q47",
      "question": "47- If an NDA review is complete but the application is not yet ready for approval, the FDA will issue a:",
      "options": [
        {
          "id": "a",
          "text": "Approval letter"
        },
        {
          "id": "b",
          "text": "Complete response letter"
        },
        {
          "id": "c",
          "text": "Warning letter"
        },
        {
          "id": "d",
          "text": "Treatment IND"
        }
      ],
      "correctId": "b",
      "explanation": "The text describes this letter as letting the company know the review is complete but the application is not ready for approval, and it outlines deficiencies."
    },
    {
      "id": "q48",
      "question": "48- According to federal regulations, drug \"labeling\" includes all of the following EXCEPT:",
      "options": [
        {
          "id": "a",
          "text": "The label on the immediate container."
        },
        {
          "id": "b",
          "text": "The information in the package insert."
        },
        {
          "id": "c",
          "text": "The company's annual financial report."
        },
        {
          "id": "d",
          "text": "Information in promotional materials."
        }
      ],
      "correctId": "c",
      "explanation": "The text defines labeling as including labels, package inserts, and company literature/advertising. Financial reports are not part of drug labeling."
    },
    {
      "id": "q49",
      "question": "49- A Supplemental New Drug Application (SNDA) would be required for which of the following changes to an approved drug?",
      "options": [
        {
          "id": "a",
          "text": "A minor editorial change in the labeling that strengthens a statement."
        },
        {
          "id": "b",
          "text": "A change in the size of the container for a solid dosage form."
        },
        {
          "id": "c",
          "text": "A change in the method of synthesis of the drug substance."
        },
        {
          "id": "d",
          "text": "An extension of the expiration date based on a full shelf-life protocol."
        }
      ],
      "correctId": "c",
      "explanation": "A change in the synthesis method is listed as one of the changes that requires prior FDA approval via an SNDA."
    },
    {
      "id": "q50",
      "question": "50- The abbreviated pathway for a generic copy of a biologic product to be approved is based on demonstrating that the product is:",
      "options": [
        {
          "id": "a",
          "text": "Identical and \"bioequivalent\" to the innovator product."
        },
        {
          "id": "b",
          "text": "\"Biosimilar\" to or \"interchangeable\" with an FDA-licensed biological product."
        },
        {
          "id": "c",
          "text": "Cheaper than the innovator product."
        },
        {
          "id": "d",
          "text": "Manufactured in the same facility as the innovator product."
        }
      ],
      "correctId": "b",
      "explanation": "The text explains that the Patient Protection and Affordable Care Act created a pathway for biologics demonstrated to be \"biosimilar\" or \"interchangeable.\""
    }
  ],
  'nanotechnology': [
    {
      "id": "q1",
      "question": "1- According to the text, what is the general size range applied to the term \"pharmaceutical nanotechnology\"?",
      "options": [
        {
          "id": "a",
          "text": "1 nm to 1000 nm"
        },
        {
          "id": "b",
          "text": "100 nm to 500 nm"
        },
        {
          "id": "c",
          "text": "1 nm to 100 nm"
        },
        {
          "id": "d",
          "text": "0.1 nm to 10 nm"
        }
      ],
      "correctId": "c",
      "explanation": "The very first sentence of the text defines pharmaceutical nanotechnology as having \"one or more dimensions between approximately 1 nm and 100 nm.\""
    },
    {
      "id": "q2",
      "question": "2- The US Food and Drug Administration (FDA) considers a material to fall under nanotechnology if it has at least one external dimension in the nanoscale range OR if it:",
      "options": [
        {
          "id": "a",
          "text": "is intended for cancer treatment."
        },
        {
          "id": "b",
          "text": "is administered via injection."
        },
        {
          "id": "c",
          "text": "exhibits properties that result from its dimensions."
        },
        {
          "id": "d",
          "text": "is composed of synthetic polymers."
        }
      ],
      "correctId": "c",
      "explanation": "The text states the FDA considers \"a material that exhibits properties (physical, chemical or biological) that result from its dimensions\" as nanotechnology, even if its size is above the typical nanoscale."
    },
    {
      "id": "q3",
      "question": "3- According to the text, what is often considered an appropriate upper limit for screening materials for consideration as nanotechnology?",
      "options": [
        {
          "id": "a",
          "text": "100 nm"
        },
        {
          "id": "b",
          "text": "150 nm"
        },
        {
          "id": "c",
          "text": "500 nm"
        },
        {
          "id": "d",
          "text": "1000 nm"
        }
      ],
      "correctId": "d",
      "explanation": "The text explicitly mentions, \"often sizes up to 1000 nm are considered as an appropriate upper limit regarding the screening of materials for consideration as nanotechnology.\""
    },
    {
      "id": "q4",
      "question": "4- Which of the following is NOT mentioned in the text as a key critical attribute that must be accounted for in a nanomedicine product?",
      "options": [
        {
          "id": "a",
          "text": "Surface charge and surface properties"
        },
        {
          "id": "b",
          "text": "Drug loading and drug release"
        },
        {
          "id": "c",
          "text": "The color and odor of the formulation"
        },
        {
          "id": "d",
          "text": "Biological interactions"
        }
      ],
      "correctId": "c",
      "explanation": "The text lists surface charge, surface properties, drug loading, drug release, and biological interactions as key attributes. Color and odor are not mentioned in this context."
    },
    {
      "id": "q5",
      "question": "5- Which of the following is given in the text as an example of a nanomedicine that is a polymer-protein conjugate?",
      "options": [
        {
          "id": "a",
          "text": "Ambisome"
        },
        {
          "id": "b",
          "text": "Abraxane"
        },
        {
          "id": "c",
          "text": "Herceptin"
        },
        {
          "id": "d",
          "text": "Pegintron"
        }
      ],
      "correctId": "d",
      "explanation": "The text states, \"Pharmaceutical nanotechnology can encompass many systems, from macromolecules, such as antibodies (e.g. Herceptin) and polymere- protein conjugates (e.g. Pegintron).\" Ambisome and Abraxane are other types of nanomedicines (liposomal and nanoparticle systems, respectively)."
    },
    {
      "id": "q6",
      "question": "6- The text mentions that the composition and quality of a nanomedicine product can be dependent on:",
      "options": [
        {
          "id": "a",
          "text": "The country of origin."
        },
        {
          "id": "b",
          "text": "The manufacturing process adopted."
        },
        {
          "id": "c",
          "text": "The color of the final product."
        },
        {
          "id": "d",
          "text": "The brand name of the product."
        }
      ],
      "correctId": "b",
      "explanation": "The text states, \"the composition and quality of a nanomedicine product can be dependent on the manufacturing process adopted,\" which is why regulatory authorities have issued guidance."
    },
    {
      "id": "q7",
      "question": "7- Which of the following is a liposomal formulation mentioned in the text as an example of pharmaceutical nanotechnology?",
      "options": [
        {
          "id": "a",
          "text": "Emend"
        },
        {
          "id": "b",
          "text": "Onpattro"
        },
        {
          "id": "c",
          "text": "Herceptin"
        },
        {
          "id": "d",
          "text": "Ambisome"
        }
      ],
      "correctId": "d",
      "explanation": "The text lists \"liposomal formulations (e.g. Ambisome)\" as an example. Emend is a nanoscale drug particle, Onpattro is a lipid nanoparticle, and Herceptin is an antibody (macromolecule)."
    },
    {
      "id": "q8",
      "question": "8- According to the text, what are two primary advantages of using nanotechnology for drug delivery?",
      "options": [
        {
          "id": "a",
          "text": "Increased cost and easier manufacturing"
        },
        {
          "id": "b",
          "text": "Enhanced solubility/dissolution and enhanced drug delivery"
        },
        {
          "id": "c",
          "text": "Decreased potency and increased toxicity"
        },
        {
          "id": "d",
          "text": "Simpler chemical structure and lower molecular weight"
        }
      ],
      "correctId": "b",
      "explanation": "Page 2 explicitly lists these as two key advantages: \"1. Enhanced solubility and dissolution... 2. Enhanced drug delivery.\""
    },
    {
      "id": "q9",
      "question": "9- The conjugation of drugs to polymeric carriers like PEG offers several advantages. Which of the following is NOT mentioned as one of these advantages?",
      "options": [
        {
          "id": "a",
          "text": "Improved drug solubility"
        },
        {
          "id": "b",
          "text": "Reduced immunogenicity"
        },
        {
          "id": "c",
          "text": "Increased drug metabolism in the liver"
        },
        {
          "id": "d",
          "text": "Controlled delivery"
        }
      ],
      "correctId": "c",
      "explanation": "The text lists improved solubility, pharmacokinetics, reduced immunogenicity, and controlled delivery. It does not mention increasing liver metabolism; in fact, it often reduces clearance."
    },
    {
      "id": "q10",
      "question": "10- How are polymer-drug conjugates classified from a regulatory perspective?",
      "options": [
        {
          "id": "a",
          "text": "As generic drugs"
        },
        {
          "id": "b",
          "text": "As new chemical entities in their own right"
        },
        {
          "id": "c",
          "text": "As simple drug mixtures"
        },
        {
          "id": "d",
          "text": "As medical devices"
        }
      ],
      "correctId": "b",
      "explanation": "The text on page 2 states, \"Polymer- drug conjugates are considered as new chemical entities in their own right...\""
    },
    {
      "id": "q11",
      "question": "11- What are the three basic components of a polymer-drug conjugate described in the text?",
      "options": [
        {
          "id": "a",
          "text": "A lipid bilayer, an aqueous core, and a drug"
        },
        {
          "id": "b",
          "text": "A water-soluble polymer backbone, a linker group, and a drug"
        },
        {
          "id": "c",
          "text": "A metal core, a polymeric shell, and a targeting group"
        },
        {
          "id": "d",
          "text": "A surfactant, an oil phase, and a drug"
        }
      ],
      "correctId": "b",
      "explanation": "Page 2 describes the conjugate as being built of these three basic components."
    },
    {
      "id": "q12",
      "question": "12- Which polymer is cited as the most widely used water-soluble polymer backbone for drug conjugation?",
      "options": [
        {
          "id": "a",
          "text": "Dextran"
        },
        {
          "id": "b",
          "text": "Chitosan"
        },
        {
          "id": "c",
          "text": "Poly(glutamic acid)"
        },
        {
          "id": "d",
          "text": "Polyethylene glycol (PEG)"
        }
      ],
      "correctId": "d",
      "explanation": "The text on page 2 states, \"Of the polymers, PEG is the most widely used.\""
    },
    {
      "id": "q13",
      "question": "13- According to the text, what molecular weight range of PEG is used in clinically approved products?",
      "options": [
        {
          "id": "a",
          "text": "200-1000 Da"
        },
        {
          "id": "b",
          "text": "1000-4000 Da"
        },
        {
          "id": "c",
          "text": "5000-40,000 Da"
        },
        {
          "id": "d",
          "text": "50,000-100,000 Da"
        }
      ],
      "correctId": "c",
      "explanation": "Page 3 begins with, \"In clinically approved products, PEG molecular weights of 5000- 40 000 Da are used.\""
    },
    {
      "id": "q14",
      "question": "14- How does PEGylation (conjugation with PEG) protect a protein from degradation?",
      "options": [
        {
          "id": "a",
          "text": "By increasing its electrical charge."
        },
        {
          "id": "b",
          "text": "By making the protein more hydrophobic."
        },
        {
          "id": "c",
          "text": "By shielding the protein via steric repulsion."
        },
        {
          "id": "d",
          "text": "By directly inhibiting proteolytic enzymes."
        }
      ],
      "correctId": "c",
      "explanation": "Page 3 explains, \"When bound to a protein, PEG shields the protein via steric repulsion. This can protect the protein from degradation by enzymes...\""
    },
    {
      "id": "q15",
      "question": "15- What is the primary reason for using a linker group to attach a drug to a polymer, rather than direct covalent bonding?",
      "options": [
        {
          "id": "a",
          "text": "To make the synthesis process cheaper."
        },
        {
          "id": "b",
          "text": "To help avoid the therapeutic action of the drug being blocked by the polymer."
        },
        {
          "id": "c",
          "text": "To increase the molecular weight of the conjugate."
        },
        {
          "id": "d",
          "text": "To make the drug more water-soluble."
        }
      ],
      "correctId": "b",
      "explanation": "Page 3 states the linker is used \"to help avoid the therapeutic action of the drug being blocked by the polymer.\""
    },
    {
      "id": "q16",
      "question": "16- Which of the following is given as the most common type of linker group used in polymer-drug conjugates?",
      "options": [
        {
          "id": "a",
          "text": "Amine linker"
        },
        {
          "id": "b",
          "text": "Carbamate linker"
        },
        {
          "id": "c",
          "text": "Ester linker"
        },
        {
          "id": "d",
          "text": "Amide linker"
        }
      ],
      "correctId": "d",
      "explanation": "The text on page 3 explicitly states, \"with an amide linker being the most common option.\""
    },
    {
      "id": "q17",
      "question": "17- The text mentions that naloxegol (Movantik/Moventig) is a polymer conjugate used for the treatment of opioid-induced constipation. What is the key advantage of its conjugation?",
      "options": [
        {
          "id": "a",
          "text": "It increases its systemic absorption after oral administration."
        },
        {
          "id": "b",
          "text": "It reduces its systemic absorbance after oral administration."
        },
        {
          "id": "c",
          "text": "It allows it to be administered intravenously."
        },
        {
          "id": "d",
          "text": "It targets it specifically to the brain."
        }
      ],
      "correctId": "b",
      "explanation": "Page 3 states, \"Conjugation of a small molecules to a polymeric backbone can reduce systemic absorbance after oral administration, and this is exploited in the case of naloxegol.\""
    },
    {
      "id": "q18",
      "question": "18- Conjugating a low-solubility drug like paclitaxel to a water-soluble polymer enhances solubility, which allows for:",
      "options": [
        {
          "id": "a",
          "text": "Administration without further solubilizing agents."
        },
        {
          "id": "b",
          "text": "The drug to be given in a smaller volume."
        },
        {
          "id": "c",
          "text": "The drug to become more lipophilic."
        },
        {
          "id": "d",
          "text": "The drug to be effective at lower temperatures."
        }
      ],
      "correctId": "a",
      "explanation": "Page 3 concludes by stating that after conjugation, \"the conjugate can be administered without further solubilizing agents.\""
    },
    {
      "id": "q19",
      "question": "19- The increased hydrodynamic volume of a polymer-drug conjugate reduces its excretion rate via the kidneys. Up to what molecular weight threshold does clearance rate decrease with increasing molecular weight?",
      "options": [
        {
          "id": "a",
          "text": "Approximately 5,000"
        },
        {
          "id": "b",
          "text": "Approximately 20,000"
        },
        {
          "id": "c",
          "text": "Approximately 45,000"
        },
        {
          "id": "d",
          "text": "Approximately 1,00,000"
        }
      ],
      "correctId": "c",
      "explanation": "Page 4 states, \"...clearance rates decreasing with increasing molecular weight up to a threshold of approximately 45000.\""
    },
    {
      "id": "q20",
      "question": "20- What happens to polymers with a molecular weight above the renal excretion threshold?",
      "options": [
        {
          "id": "a",
          "text": "They are rapidly excreted in the bile."
        },
        {
          "id": "b",
          "text": "They are more susceptible to clearance by the mononuclear phagocytic system (MPS)."
        },
        {
          "id": "c",
          "text": "They become permanently trapped in the bloodstream."
        },
        {
          "id": "d",
          "text": "They are broken down into smaller units by the kidneys."
        }
      ],
      "correctId": "b",
      "explanation": "Following the previous statement, page 4 says, \"Above a molecular weight 45000, renal excretion cannot occur, and larger polymers are more susceptible to clearance by the mononuclear phagocytic system (MPS).\""
    },
    {
      "id": "q21",
      "question": "21- How do water-soluble polymer strands protect a conjugated drug from degradation by enzymes?",
      "options": [
        {
          "id": "a",
          "text": "By chemically neutralizing the enzymes."
        },
        {
          "id": "b",
          "text": "By promoting steric hindrance, blocking enzymes from reaching the drug."
        },
        {
          "id": "c",
          "text": "By actively pumping the enzymes out of the bloodstream."
        },
        {
          "id": "d",
          "text": "By binding to the enzymes and destroying them."
        }
      ],
      "correctId": "b",
      "explanation": "Page 4 explains that hydrated polymer strands \"can promote steric hindrance, and block enzymes and antibodies from reaching the drug.\""
    },
    {
      "id": "q22",
      "question": "22- The hydrophilic coating of a polymer conjugate helps reduce aggregation and immunogenicity. This is achieved by:",
      "options": [
        {
          "id": "a",
          "text": "Increasing the protein's hydrophobic regions."
        },
        {
          "id": "b",
          "text": "Masking hydrophobic regions in the protein and providing a steric shield."
        },
        {
          "id": "c",
          "text": "Promoting protein-protein association."
        },
        {
          "id": "d",
          "text": "Making the protein structure more rigid."
        }
      ],
      "correctId": "b",
      "explanation": "Page 4 states the hydrated chains \"can mask the hydrophobic regions in the protein... and provide a steric shield that can help prevent protein- protein association, and reduce aggregation.\""
    },
    {
      "id": "q23",
      "question": "23- What is the Enhanced Permeability and Retention (EPR) effect?",
      "options": [
        {
          "id": "a",
          "text": "Active targeting using antibodies to find tumor cells."
        },
        {
          "id": "b",
          "text": "Passive targeting where nanomedicines accumulate in tumors due to leaky vasculature and poor lymphatic drainage."
        },
        {
          "id": "c",
          "text": "The process of a drug being pumped out of a tumor cell."
        },
        {
          "id": "d",
          "text": "The retention of a drug in the kidneys due to its large size."
        }
      ],
      "correctId": "b",
      "explanation": "Page 5 describes the EPR effect as \"passive targeting\" resulting from \"defective hypervasculature\" (leaky vessels) and \"deficient lymphatic drainage\" in tumors."
    },
    {
      "id": "q24",
      "question": "24- According to the text, what causes the endothelial fenestrations that allow nanomedicines to escape into tumor tissue?",
      "options": [
        {
          "id": "a",
          "text": "Healthy, tight junctions in the endothelium."
        },
        {
          "id": "b",
          "text": "Defective hypervasculature due to inflammatory processes or tumor growth."
        },
        {
          "id": "c",
          "text": "The action of targeting groups on the nanomedicine."
        },
        {
          "id": "d",
          "text": "High blood pressure in the tumor vicinity."
        }
      ],
      "correctId": "b",
      "explanation": "Page 5 mentions, \"The integrity of the endothelial barrier can be disturbed by inflammatory processes or by tumour growth. This can result in defective hypervasculature, leading to endothelial fenestrations...\""
    },
    {
      "id": "q25",
      "question": "25- The use of targeting groups, such as antibodies or folate, to determine the distribution of drugs is referred to as:",
      "options": [
        {
          "id": "a",
          "text": "Passive targeting"
        },
        {
          "id": "b",
          "text": "The EPR effect"
        },
        {
          "id": "c",
          "text": "Active targeting"
        },
        {
          "id": "d",
          "text": "Renal filtration"
        }
      ],
      "correctId": "c",
      "explanation": "Page 5 clearly states, \"The use of targeting groups to determine the distribution of drugs and drug carriers can also be considered to promote targeting to a specific site. This is commonly referred to as active targeting.\""
    },
    {
      "id": "q26",
      "question": "26- Why is folate used as a targeting group?",
      "options": [
        {
          "id": "a",
          "text": "To target folate receptors, which are overexpressed in tumor cells."
        },
        {
          "id": "b",
          "text": "To increase the solubility of the drug."
        },
        {
          "id": "c",
          "text": "To protect the drug from degradation."
        },
        {
          "id": "d",
          "text": "To reduce the immunogenicity of the conjugate."
        }
      ],
      "correctId": "a",
      "explanation": "The text on page 5 gives the example of \"folate to target folate receptors, which are overexpressed in tumour cells.\""
    },
    {
      "id": "q27",
      "question": "27- What are the three main elements of a dendrimer?",
      "options": [
        {
          "id": "a",
          "text": "A lipid core, a protein shell, and a drug payload."
        },
        {
          "id": "b",
          "text": "A central core, an internal dendritic structure, and an exterior surface."
        },
        {
          "id": "c",
          "text": "A micellar core, a polymeric shell, and a targeting group."
        },
        {
          "id": "d",
          "text": "A phospholipid bilayer, an aqueous core, and a carbohydrate coating."
        }
      ],
      "correctId": "b",
      "explanation": "Page 5 lists these three elements in a numbered format."
    },
    {
      "id": "q28",
      "question": "28- What key advantage do dendrimers have over traditional linear or branched polymers used in drug conjugates?",
      "options": [
        {
          "id": "a",
          "text": "They are always biodegradable."
        },
        {
          "id": "b",
          "text": "They are cheaper and easier to produce."
        },
        {
          "id": "c",
          "text": "They can be prepared with a very narrow size distribution (near monodisperse)."
        },
        {
          "id": "d",
          "text": "They have a lower drug-loading capacity."
        }
      ],
      "correctId": "c",
      "explanation": "Page 5 states, \"they offer the advantage that they can be prepared with a very narrow size distribution.\""
    },
    {
      "id": "q29",
      "question": "29- The large number of peripheral groups on a dendrimer's exterior allows for:",
      "options": [
        {
          "id": "a",
          "text": "A slower rate of drug release."
        },
        {
          "id": "b",
          "text": "A higher drug-loading capacity compared to linear polymers."
        },
        {
          "id": "c",
          "text": "The dendrimer to be invisible to the immune system."
        },
        {
          "id": "d",
          "text": "A smaller overall size."
        }
      ],
      "correctId": "b",
      "explanation": "The text explains that the peripheral groups \"allow higher drug- loading capacities compared with the linear or branched polymers used in polymeredrug conjugates.\""
    },
    {
      "id": "q30",
      "question": "30- How can a dendrimer act as a solubilizing agent for a low-solubility drug?",
      "options": [
        {
          "id": "a",
          "text": "By covalently bonding the drug to its hydrophobic core."
        },
        {
          "id": "b",
          "text": "By encapsulating the drug within its structure, which offers a hydrophobic core and a hydrophilic exterior."
        },
        {
          "id": "c",
          "text": "By dissolving the drug in its aqueous core."
        },
        {
          "id": "d",
          "text": "By attaching the drug to its surface with a hydrophilic linker."
        }
      ],
      "correctId": "b",
      "explanation": "Page 6 states dendrimers can act as solubilizing agents \"by encapsulating the drug within the dendrimer construct, which offers a hydrophobic core and a hydrophilic exterior.\""
    },
    {
      "id": "q31",
      "question": "31- Drug molecules can be loaded into or onto a dendrimer in two main ways: by physical entrapment/encapsulation or by:",
      "options": [
        {
          "id": "a",
          "text": "Adsorption onto a lipid bilayer."
        },
        {
          "id": "b",
          "text": "Conjugation to the surface groups."
        },
        {
          "id": "c",
          "text": "Dissolution in the central core."
        },
        {
          "id": "d",
          "text": "Precipitation during manufacturing."
        }
      ],
      "correctId": "b",
      "explanation": "Page 6 describes loading \"via conjugation of the drug to the surface groups on the dendrimer\" as an alternative to encapsulation."
    },
    {
      "id": "q32",
      "question": "32- Micelles form because of the ability of surfactant molecules to:",
      "options": [
        {
          "id": "a",
          "text": "Covalently bond to each other in water."
        },
        {
          "id": "b",
          "text": "Form lipid bilayers."
        },
        {
          "id": "c",
          "text": "Self-assemble in an aqueous environment."
        },
        {
          "id": "d",
          "text": "Precipitate out of solution."
        }
      ],
      "correctId": "c",
      "explanation": "Page 6 states, \"Micelles form because of the ability of surfactant molecules to self- assemble into micelles in an aqueous environment.\""
    },
    {
      "id": "q33",
      "question": "33- Due to their structure, micelles are commonly used as:",
      "options": [
        {
          "id": "a",
          "text": "Solubilizing agents for low-solubility drugs."
        },
        {
          "id": "b",
          "text": "Carriers for water-soluble drugs only."
        },
        {
          "id": "c",
          "text": "Agents to increase the rate of renal clearance."
        },
        {
          "id": "d",
          "text": "Targeting moieties for brain delivery."
        }
      ],
      "correctId": "a",
      "explanation": "Page 6 explains, \"As a consequence of the micellar structure, which offers a hydrophobic core and a hydrophilic surface, micelles are commonly used as solubilizing agents.\""
    },
    {
      "id": "q34",
      "question": "34- What is the hydrophobic component of polymeric micelles typically made of?",
      "options": [
        {
          "id": "a",
          "text": "Polyethylene glycol (PEG)"
        },
        {
          "id": "b",
          "text": "Poly(propylene oxide), poly(D,L-lactic acid), or poloxamers"
        },
        {
          "id": "c",
          "text": "Chitosan and dextran"
        },
        {
          "id": "d",
          "text": "Phosphatidylcholine"
        }
      ],
      "correctId": "b",
      "explanation": "Page 7 lists these as examples of the hydrophobic components used to build polymeric micelles."
    },
    {
      "id": "q35",
      "question": "35- What is the role of PEG in a polymeric micelle?",
      "options": [
        {
          "id": "a",
          "text": "It forms the hydrophobic core to solubilize the drug."
        },
        {
          "id": "b",
          "text": "It acts as the targeting group."
        },
        {
          "id": "c",
          "text": "It forms the outer hydrophilic shell to enhance plasma half-life."
        },
        {
          "id": "d",
          "text": "It cross-links the micelle to make it solid."
        }
      ],
      "correctId": "c",
      "explanation": "Page 7 states, \"For the hydrophilic component, which forms the outer hydrophilic shell of the micelle, PEG is commonly used.\" It then explains how this shell enhances half-life."
    },
    {
      "id": "q36",
      "question": "36- Micelles with attached monoclonal antibodies on their surface are referred to as:",
      "options": [
        {
          "id": "a",
          "text": "Polymersomes"
        },
        {
          "id": "b",
          "text": "Immunomicelles"
        },
        {
          "id": "c",
          "text": "Bilosomes"
        },
        {
          "id": "d",
          "text": "Stealth micelles"
        }
      ],
      "correctId": "b",
      "explanation": "Page 7 concludes, \"These micelles are often referred to as immunomicelles.\""
    },
    {
      "id": "q37",
      "question": "37- What are the two main manufacturing methods for solid nanoparticles mentioned in the text?",
      "options": [
        {
          "id": "a",
          "text": "Freeze-drying and spray-drying"
        },
        {
          "id": "b",
          "text": "Size reduction (e.g., milling) and molecular agglomeration (e.g., precipitation)"
        },
        {
          "id": "c",
          "text": "Emulsification and solvent evaporation"
        },
        {
          "id": "d",
          "text": "High-pressure homogenization and sonication"
        }
      ],
      "correctId": "b",
      "explanation": "Page 7 states these methods \"generally involve either size reduction... or molecular agglomeration... to form nanoparticles.\""
    },
    {
      "id": "q38",
      "question": "38- Why are surface-active agents (stabilizers) needed when formulating nanosized drug particles?",
      "options": [
        {
          "id": "a",
          "text": "To increase the drug's solubility even further."
        },
        {
          "id": "b",
          "text": "To make the particles larger and easier to handle."
        },
        {
          "id": "c",
          "text": "To prevent the particles from aggregating due to their high interfacial energy."
        },
        {
          "id": "d",
          "text": "To help the drug particles dissolve in the stomach."
        }
      ],
      "correctId": "c",
      "explanation": "Page 7 explains that due to their high surface area and interfacial energy, they are \"prone to particle aggregation,\" so stabilizers are used to reduce this problem."
    },
    {
      "id": "q39",
      "question": "39- What is a key characteristic of NanoCrystals?",
      "options": [
        {
          "id": "a",
          "text": "They are made from 100% drug with no carrier."
        },
        {
          "id": "b",
          "text": "They always require a polymeric carrier."
        },
        {
          "id": "c",
          "text": "They are always amorphous."
        },
        {
          "id": "d",
          "text": "They are larger than 1000 nm."
        }
      ],
      "correctId": "a",
      "explanation": "Page 7 explicitly states, \"NanoCrystals are prepared from 100% drug with no carrier...\""
    },
    {
      "id": "q40",
      "question": "40- According to the text, which polymer is highlighted as being well-characterized and used in a range of clinical products, making it advantageous for solid polymeric nanoparticles?",
      "options": [
        {
          "id": "a",
          "text": "Chitosan"
        },
        {
          "id": "b",
          "text": "Poly(e-caprolactone)"
        },
        {
          "id": "c",
          "text": "Poly(lactic acid)"
        },
        {
          "id": "d",
          "text": "Poly(lactide-co-glycolide) (PLGA)"
        }
      ],
      "correctId": "d",
      "explanation": "Page 8 states, \"The advantage of these polymers is that they are well characterized and used in a range of clinical products, particularly PLGA.\""
    },
    {
      "id": "q41",
      "question": "41- What are 'stealth' nanoparticles?",
      "options": [
        {
          "id": "a",
          "text": "Nanoparticles that are invisible to the naked eye."
        },
        {
          "id": "b",
          "text": "Solid polymeric nanoparticles with a PEG surface coating that prevents protein binding."
        },
        {
          "id": "c",
          "text": "Nanoparticles made entirely from solid lipids."
        },
        {
          "id": "d",
          "text": "Nanoparticles that actively target cancer cells."
        }
      ],
      "correctId": "b",
      "explanation": "Page 8 describes PEG-coated nanoparticles as \"stealth\" nanoparticles, with the hydrated PEG \"prohibiting protein and antibody binding, thereby reducing recognition and clearance.\""
    },
    {
      "id": "q42",
      "question": "42- Solid lipid nanoparticles are made from:",
      "options": [
        {
          "id": "a",
          "text": "Liquid oils emulsified in water."
        },
        {
          "id": "b",
          "text": "Solid (high melting point) lipids dispersed in an aqueous phase."
        },
        {
          "id": "c",
          "text": "Biodegradable polymers like PLGA."
        },
        {
          "id": "d",
          "text": "100% drug with no carrier."
        }
      ],
      "correctId": "b",
      "explanation": "Page 8 defines them as \"nanoparticles made from solid (high melting point) lipids dispersed in an aqueous phase.\""
    },
    {
      "id": "q43",
      "question": "43- What is the fundamental structure of a liposome?",
      "options": [
        {
          "id": "a",
          "text": "A solid polymeric matrix with drug embedded within."
        },
        {
          "id": "b",
          "text": "A hydrophobic core surrounded by a surfactant monolayer."
        },
        {
          "id": "c",
          "text": "A closed spherical vesicle consisting of an aqueous core surrounded by one or more bilayer membranes."
        },
        {
          "id": "d",
          "text": "A highly branched polymer structure with a central core."
        }
      ],
      "correctId": "c",
      "explanation": "This is the direct definition provided at the beginning of the liposome section on page 9."
    },
    {
      "id": "q44",
      "question": "44- Unlike micelle formation, what must be added to a system to drive the formation of liposomes?",
      "options": [
        {
          "id": "a",
          "text": "A surfactant"
        },
        {
          "id": "b",
          "text": "Energy"
        },
        {
          "id": "c",
          "text": "A hydrophobic drug"
        },
        {
          "id": "d",
          "text": "A targeting group"
        }
      ],
      "correctId": "b",
      "explanation": "Page 9 states, \"Unlike micelle formation which occurs spontaneously, energy must be added to the system to drive the formation of liposomes.\""
    },
    {
      "id": "q45",
      "question": "45- How do liposomes carry water-soluble and lipophilic drugs?",
      "options": [
        {
          "id": "a",
          "text": "Both types are incorporated within the aqueous core."
        },
        {
          "id": "b",
          "text": "Both types are incorporated within the bilayer."
        },
        {
          "id": "c",
          "text": "Water-soluble drugs are in the aqueous compartments; lipophilic drugs are incorporated within the bilayer."
        },
        {
          "id": "d",
          "text": "They are adsorbed onto the surface via electrostatic interactions."
        }
      ],
      "correctId": "c",
      "explanation": "Page 9 clearly explains this differential loading based on drug solubility."
    },
    {
      "id": "q46",
      "question": "46- Which type of liposome is most commonly used in clinically approved products?",
      "options": [
        {
          "id": "a",
          "text": "Large unilamellar vesicles"
        },
        {
          "id": "b",
          "text": "Multilamellar vesicles"
        },
        {
          "id": "c",
          "text": "Multivesicular vesicles"
        },
        {
          "id": "d",
          "text": "Small unilamellar vesicles"
        }
      ],
      "correctId": "d",
      "explanation": "Page 10 states that these \"are the most commonly used in clinically approved products.\""
    },
    {
      "id": "q47",
      "question": "47- The rapid uptake of Myocet liposomes by the MPS creates an 'MPS depot'. What is the effect of this?",
      "options": [
        {
          "id": "a",
          "text": "The drug is immediately released in the bloodstream."
        },
        {
          "id": "b",
          "text": "The liposomes are targeted directly to the tumor."
        },
        {
          "id": "c",
          "text": "Slow release of the drug into the blood circulation, mimicking a slow transfusion."
        },
        {
          "id": "d",
          "text": "The liposomes are broken down and the drug is excreted."
        }
      ],
      "correctId": "c",
      "explanation": "Page 10 explains this mechanism for Myocet."
    },
    {
      "id": "q48",
      "question": "48- How does the PEG coating on Doxil/Caelyx liposomes help them accumulate at tumor sites?",
      "options": [
        {
          "id": "a",
          "text": "By actively binding to receptors on tumor cells."
        },
        {
          "id": "b",
          "text": "By inhibiting opsonization, avoiding MPS clearance, and increasing circulation time to allow for the EPR effect."
        },
        {
          "id": "c",
          "text": "By making the liposomes small enough to pass through any blood vessel."
        },
        {
          "id": "d",
          "text": "By dissolving the tumor tissue."
        }
      ],
      "correctId": "b",
      "explanation": "Page 10 details this mechanism: the PEG coating inhibits opsonization and MPS clearance, increasing half-life so they can accumulate via the EPR effect."
    },
    {
      "id": "q49",
      "question": "49- What is the purpose of incorporating cholesterol into a liposome bilayer?",
      "options": [
        {
          "id": "a",
          "text": "To give the liposome a positive charge."
        },
        {
          "id": "b",
          "text": "To act as a targeting group."
        },
        {
          "id": "c",
          "text": "To reduce bilayer permeability and increase drug retention."
        },
        {
          "id": "d",
          "text": "To make the liposomes form more easily and spontaneously."
        }
      ],
      "correctId": "c",
      "explanation": "Page 11 explains that cholesterol \"can reduce the bilayer permeability of the liposomes and thus increase drug retention.\""
    },
    {
      "id": "q50",
      "question": "50- What is the advantage of using ionizable lipids for the delivery of nucleic acids?",
      "options": [
        {
          "id": "a",
          "text": "They are permanently positively charged, ensuring strong binding."
        },
        {
          "id": "b",
          "text": "They are positively charged at an acidic pH (for formation) but near-neutral at physiological pH (to reduce toxicity)."
        },
        {
          "id": "c",
          "text": "They are cheaper than other types of lipids."
        },
        {
          "id": "d",
          "text": "They allow the liposome to dissolve in water."
        }
      ],
      "correctId": "b",
      "explanation": "Page 12 explains that ionizable lipids were developed to circumvent the toxicity of positively charged particles by being charged only at low pH during formation, and neutral at physiological pH."
    },
    {
      "id": "q51",
      "question": "51- According to the text, a drug with a log P > 5 would be best incorporated into which part of a liposome?",
      "options": [
        {
          "id": "a",
          "text": "The aqueous core"
        },
        {
          "id": "b",
          "text": "Adsorbed onto the surface"
        },
        {
          "id": "c",
          "text": "The lipid bilayer"
        },
        {
          "id": "d",
          "text": "It cannot be incorporated into a liposome."
        }
      ],
      "correctId": "c",
      "explanation": "Page 12 states that lipophilic drugs (log P > 5) \"are incorporated and retained within the liposome bilayers.\""
    }
  ],
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
  const [selectedSummary, setSelectedSummary] = useState<any>(null);
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQs, setAnsweredQs] = useState<any>({});

  const handleSubjectSelect = (sub: any) => {
    setSelectedSubject(sub);
    if (sub.id !== 'therapeutics' && sub.id !== 'delivery' && sub.id !== 'advanced') {
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

      {step === 'subject' && (
        <div
          className="promo-banner summaries-promo-banner"
          onClick={() => setStep('summaries_subject')}
          style={{
            cursor: 'pointer',
            marginBottom: '2rem',
            transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = '#d4af37';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = '#333';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
          }}
        >
          <div className="promo-video-wrapper" style={{ width: '300px' }}>
            <video
              className="promo-video"
              autoPlay
              muted
              loop
              playsInline
              style={{ filter: 'brightness(0.8)', transform: 'scale(1.15)' }}
            >
              <source src="/Books_floating_animation_030a28c348.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="promo-content" style={{ padding: '2.5rem 3rem 2.5rem 1rem' }}>
            <h2 style={{ margin: 0, fontFamily: "'Cairo', sans-serif", fontSize: '2.4rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#d4af37' }}>
              <Database size={32} /> ملخصات
            </h2>
            <p className="promo-text" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#f0f0f0', marginTop: '0.5rem' }}>اضغط هنا للوصول إلى ملخصات المواد الدراسية بصيغة PDF</p>
          </div>
        </div>
      )}

      <main className="main-content" style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
        <div className="nav-bar" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <button
            className="back-btn"
            onClick={() => {
              if (step === 'topic' || step === 'coming_soon_subject' || step === 'summaries_subject') {
                setStep('subject');
                setSelectedSubject(null);
              } else if (step === 'mcq') {
                setStep('topic');
                setSelectedTopic(null);
              } else if (step === 'summaries_list') {
                setStep('summaries_subject');
                setSelectedSubject(null);
              } else if (step === 'summary_preview') {
                setStep('summaries_list');
                setSelectedSummary(null);
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
              {step.startsWith('summaries') && ' / ملخصات'}
              {selectedSubject && !step.startsWith('summaries') && ` / ${(selectedSubject as any).title}`}
              {selectedSubject && step.startsWith('summaries') && step !== 'summaries_subject' && ` / ${(selectedSubject as any).title}`}
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

        {step === 'summaries_subject' && (
          <div className="subjects-section" style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>اختر المادة لملخصات PDF</h2>
            <p style={{ color: '#aaa', marginBottom: '2rem' }}>حدد التخصص الذي ترغب في تصفح ملخصاته.</p>
            <div className="grid-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              {SUBJECTS.map((sub: any) => (
                <FeatureCard key={sub.id} title={sub.title} desc={sub.desc} Icon={sub.icon} onClick={() => {
                  setSelectedSubject(sub);
                  setStep('summaries_list');
                }} />
              ))}
            </div>
          </div>
        )}

        {step === 'summaries_list' && (
          <div className="summaries-list-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'center' }}>ملخصات {(selectedSubject as any)?.title}</h2>
            {((SUMMARIES as any)[selectedSubject?.id || 'therapeutics'] || []).length === 0 ? (
              <div className="coming-soon-container" style={{ textAlign: 'center', padding: '3rem' }}>
                <h2>قريباً!</h2>
                <p>لا توجد ملخصات متاحة حالياً لهذه المادة.</p>
              </div>
            ) : (
              ((SUMMARIES as any)[selectedSubject?.id || 'therapeutics'] || []).map((summary: any) => (
                <button
                  key={summary.id}
                  onClick={() => {
                    setSelectedSummary(summary);
                    setStep('summary_preview');
                  }}
                  className="summary-item"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: '#222', padding: '1.5rem', borderRadius: '12px',
                    color: 'white', textDecoration: 'none', border: '1px solid #444',
                    transition: 'background 0.3s', cursor: 'pointer', textAlign: 'left',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Database size={24} color="#4facfe" />
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{summary.title}</span>
                  </div>
                  <span style={{ color: '#4facfe', background: 'rgba(79, 172, 254, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem' }}>عرض الملخص</span>
                </button>
              ))
            )}
          </div>
        )}

        {step === 'summary_preview' && selectedSummary && (
          <div className="summary-preview-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', height: '80vh', background: '#111', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>{selectedSummary.title}</h2>
              <a 
                href={selectedSummary.url} 
                download 
                className="inline-download-btn"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'rgba(79, 172, 254, 0.2)', color: '#4facfe', 
                  padding: '0.5rem 1rem', borderRadius: '20px', 
                  textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem',
                  border: '1px solid #4facfe', transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#4facfe';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(79, 172, 254, 0.2)';
                  e.currentTarget.style.color = '#4facfe';
                }}
              >
                تحميل (Download)
              </a>
            </div>
            
            <div style={{ flex: 1, border: '1px solid #444', borderRadius: '8px', overflow: 'hidden', background: '#222' }}>
              <iframe 
                src={window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? selectedSummary.url : `https://docs.google.com/viewer?url=${encodeURIComponent('https://pandarx0.github.io' + selectedSummary.url)}&embedded=true`} 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }} 
                title={`Preview of ${selectedSummary.title}`} 
              />
            </div>
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
                  {q.image && (
                    <div className="mcq-image-container" style={{ marginBottom: '1.5rem', textAlign: 'center', background: '#222', padding: '1rem', borderRadius: '8px' }}>
                      <img src={q.image} alt="Question figure" style={{ maxWidth: '100%', borderRadius: '8px' }} />
                    </div>
                  )}
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
