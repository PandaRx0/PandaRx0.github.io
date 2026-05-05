import json

def main():
    mcqs_data = [
  {
    "id": "q1",
    "question": "Which of the following nuclei is considered NMR-inactive?",
    "options": [
      {"id": "a", "text": "$^1$H"},
      {"id": "b", "text": "$^{13}$C"},
      {"id": "c", "text": "$^{16}$O"},
      {"id": "d", "text": "$^{15}$N"},
      {"id": "e", "text": "$^{31}$P"}
    ],
    "correctId": "c",
    "explanation": "Nuclei with an even mass number and an even atomic number (like $^{12}$C and $^{16}$O) are NMR-inactive. For a nucleus to be active in NMR, it must have an odd mass number, an odd atomic number, or both."
  },
  {
    "id": "q2",
    "question": "In the presence of an applied magnetic field ($B_0$), magnetic nuclear spins are oriented either with or against the field. Which statement regarding these orientations is INCORRECT?",
    "options": [
      {"id": "a", "text": "The spins are oriented randomly in the presence of $B_0$."},
      {"id": "b", "text": "More nuclei are oriented with the applied field because it is lower in energy."},
      {"id": "c", "text": "The parallel spin state is slightly lower in energy than the antiparallel state."},
      {"id": "d", "text": "When external energy (radio frequency) matching the energy gap is applied, the nucleus flips its orientation."},
      {"id": "e", "text": "The parallel spin state is more populated than the antiparallel state."}
    ],
    "correctId": "a",
    "explanation": "While nuclear magnets are randomly oriented in space normally, they orient with (parallel) or against (antiparallel) an external magnetic field once it is applied. The parallel arrangement is favored because it is the lower energy state."
  },
  {
    "id": "q3",
    "question": "A proton signal is recorded at 1590 Hz on a spectrometer operating at 300 MHz. What is the chemical shift ($\\delta$) in ppm?",
    "options": [
      {"id": "a", "text": "0.18 ppm"},
      {"id": "b", "text": "5.3 ppm"},
      {"id": "c", "text": "15.9 ppm"},
      {"id": "d", "text": "3.0 ppm"},
      {"id": "e", "text": "0.53 ppm"}
    ],
    "correctId": "b",
    "explanation": "The chemical shift is calculated by dividing the observed frequency shift (in Hz) by the spectrometer frequency (in MHz). Using the formula: $\\delta = \\frac{1590 \\text{ Hz}}{300 \\text{ MHz}} = 5.3 \\text{ ppm}$."
  },
  {
    "id": "q4",
    "question": "How many $^1$H-NMR signals would you expect for methyl acetate ($CH_3COOCH_3$)?",
    "options": [
      {"id": "a", "text": "1"},
      {"id": "b", "text": "2"},
      {"id": "c", "text": "3"},
      {"id": "d", "text": "4"},
      {"id": "e", "text": "6"}
    ],
    "correctId": "b",
    "explanation": "The number of signals equals the number of sets of chemically equivalent protons. In methyl acetate, there are two sets: the three protons of the acetate group ($H_a$) and the three protons of the methyl ester group ($H_b$). Protons within each set are equivalent, but the two sets are in different electronic environments."
  },
  {
    "id": "q5",
    "question": "Why is Tetramethylsilane (TMS) chosen as the standard reference compound for NMR?",
    "options": [
      {"id": "a", "text": "It is chemically reactive and easy to detect."},
      {"id": "b", "text": "Its protons are more deshielded than most organic molecules."},
      {"id": "c", "text": "It gives twelve distinct signals for complex analysis."},
      {"id": "d", "text": "Its protons are highly shielded, providing a zero-point at the far right of the spectrum."},
      {"id": "e", "text": "It is insoluble in organic solvents."}
    ],
    "correctId": "d",
    "explanation": "TMS protons are highly shielded because silicon is less electronegative than carbon, meaning they absorb at a very low frequency. This provides a clear zero point at the far-right (upfield) edge of the spectrum. TMS is also chemically inert and symmetrical, giving a single intense sharp peak."
  },
  {
    "id": "q6",
    "question": "Regarding the $^1$H-NMR spectrum of chloroethane ($CH_3CH_2Cl$), what splitting patterns will be observed for the methyl and methylene groups?",
    "options": [
      {"id": "a", "text": "A doublet and a triplet"},
      {"id": "b", "text": "A doublet and a quartet"},
      {"id": "c", "text": "A triplet and a quartet"},
      {"id": "d", "text": "Two doublets"},
      {"id": "e", "text": "A singlet and a quartet"}
    ],
    "correctId": "c",
    "explanation": "According to the $n+1$ rule, a signal is split by $n$ neighboring non-equivalent protons. The $CH_3$ group has 2 neighboring protons from the $CH_2$ group, resulting in a triplet ($2+1=3$). The $CH_2$ group has 3 neighboring protons from the $CH_3$ group, resulting in a quartet ($3+1=4$)."
  },
  {
    "id": "q7",
    "question": "Which of the following atoms or groups would cause the greatest downfield (higher chemical shift) shift for nearby protons due to the inductive effect?",
    "options": [
      {"id": "a", "text": "Carbon"},
      {"id": "b", "text": "Silicon"},
      {"id": "c", "text": "Sulfur"},
      {"id": "d", "text": "Nitrogen"},
      {"id": "e", "text": "Oxygen"}
    ],
    "correctId": "e",
    "explanation": "The inductive effect (electronegativity) causes deshielding. Highly electronegative atoms like Oxygen pull electron density away from nearby protons, causing them to feel more of the external magnetic field and absorb at a higher frequency (downfield)."
  },
  {
    "id": "q8",
    "question": "Why do aromatic protons in benzene appear far downfield (6.5–8 ppm)?",
    "options": [
      {"id": "a", "text": "Because they are highly shielded by a ring current."},
      {"id": "b", "text": "Because they are bonded to a highly electronegative atom."},
      {"id": "c", "text": "Because the induced magnetic field from circulating $\\pi$ electrons reinforces the applied field."},
      {"id": "d", "text": "Because they are exchangeable with the solvent."},
      {"id": "e", "text": "Due to hydrogen bonding with the solvent."}
    ],
    "correctId": "c",
    "explanation": "This is known as diamagnetic anisotropy. Circulating $\\pi$ electrons in the benzene ring create a ring current that induces a magnetic field. This induced field reinforces the external field ($B_0$) in the vicinity of the protons, causing them to be deshielded and shift downfield."
  },
  {
    "id": "q9",
    "question": "How do protons directly bonded to heteroatoms, such as the hydroxyl group (O-H) in alcohols, typically behave in $^1$H-NMR?",
    "options": [
      {"id": "a", "text": "They always appear as sharp quartets."},
      {"id": "b", "text": "They do not appear on the spectrum at all."},
      {"id": "c", "text": "They generally do not split their neighbors and often appear as broad singlets."},
      {"id": "d", "text": "They always appear upfield at 0 ppm."},
      {"id": "e", "text": "They are unaffected by the concentration of the solution."}
    ],
    "correctId": "c",
    "explanation": "Protons on heteroatoms (O-H or N-H) exchange rapidly with solvent or other molecules, which prevents them from splitting neighboring protons. Their chemical shift is highly dependent on concentration and hydrogen bonding, often appearing as broad singlets between 0.5 and 5 ppm."
  },
  {
    "id": "q10",
    "question": "Compared to Mass Spectrometry, NMR spectroscopy is uniquely advantageous because it is:",
    "options": [
      {"id": "a", "text": "Destructive to the sample."},
      {"id": "b", "text": "Inaccurate but fast."},
      {"id": "c", "text": "A non-destructive analytical technique."},
      {"id": "d", "text": "Only useful for inorganic molecules."},
      {"id": "e", "text": "Dependent on high-energy gamma radiation."}
    ],
    "correctId": "c",
    "explanation": "Unlike Mass Spectrometry, which involves bombarding and breaking molecules into fragments, NMR is non-destructive, meaning the sample can be recovered after the experiment. It employs safe, low-energy radio frequency radiation."
  },
  {
    "id": "q11",
    "question": "Why are samples for NMR spectroscopy typically dissolved in deuterated solvents such as $CDCl_3$ or DMSO-$d_6$?",
    "options": [
      {"id": "a", "text": "To increase the sensitivity of the detector."},
      {"id": "b", "text": "To catalyze the spin-flip resonance."},
      {"id": "c", "text": "To prevent the sample from reacting with the reference standard (TMS)."},
      {"id": "d", "text": "To avoid large solvent signals that would obscure the signals from the sample protons."},
      {"id": "e", "text": "Because deuterium is the only NMR-active isotope of hydrogen."}
    ],
    "correctId": "d",
    "explanation": "Deuterated solvents are used because deuterium ($^2$H) has different resonance properties than $^1$H. By replacing normal hydrogen with deuterium, the solvent does not produce a signal in the $^1$H-NMR spectrum that would otherwise overwhelm the much smaller signals from the organic sample."
  },
  {
    "id": "q12",
    "question": "When a nucleus is described as \"shielded,\" how does the local magnetic field generated by surrounding electrons affect the external applied field ($B_0$)?",
    "options": [
      {"id": "a", "text": "It reinforces $B_0$, causing the nucleus to feel a stronger field."},
      {"id": "b", "text": "It opposes $B_0$, causing the nucleus to feel a weaker effective field."},
      {"id": "c", "text": "It has no effect on the field felt by the nucleus."},
      {"id": "d", "text": "It shifts the signal to a higher frequency (downfield)."},
      {"id": "e", "text": "It increases the energy gap between spin states."}
    ],
    "correctId": "b",
    "explanation": "Electrons moving around a nucleus create tiny local magnetic fields that act in opposition to the applied external field. This shielding effect means the \"effective\" field felt by the nucleus is weaker than the applied field ($B_{effective} = B_{applied} - B_{local}$), requiring a lower frequency for resonance."
  },
  {
    "id": "q13",
    "question": "Protons attached to $sp^2$-hybridized alkene carbons typically appear downfield (4.5–6 ppm). What causes this specific shift?",
    "options": [
      {"id": "a", "text": "The high electronegativity of the carbon atom."},
      {"id": "b", "text": "Intermolecular hydrogen bonding with the solvent."},
      {"id": "c", "text": "Diamagnetic anisotropy where the induced field reinforces the external field near the protons."},
      {"id": "d", "text": "van der Waals repulsion with adjacent alkyl groups."},
      {"id": "e", "text": "The $n+1$ splitting rule increasing the frequency."}
    ],
    "correctId": "c",
    "explanation": "The loosely held $\\pi$ electrons of a double bond circulate in the magnetic field, creating an induced field. In the vicinity of the alkene protons, this induced field reinforces the external applied field, causing the protons to feel a stronger total field and shift downfield."
  },
  {
    "id": "q14",
    "question": "If a set of equivalent protons has four equivalent neighboring protons on adjacent carbons, into how many peaks will its signal be split?",
    "options": [
      {"id": "a", "text": "3 (Triplet)"},
      {"id": "b", "text": "4 (Quartet)"},
      {"id": "c", "text": "5 (Quintet)"},
      {"id": "d", "text": "6 (Sextet)"},
      {"id": "e", "text": "1 (Singlet)"}
    ],
    "correctId": "c",
    "explanation": "According to the $n+1$ rule, the number of peaks in a signal is determined by the number of neighboring non-equivalent protons ($n$) plus one. In this case, $4 + 1 = 5$, which results in a quintet."
  },
  {
    "id": "q15",
    "question": "In rings or double-bond systems, two protons are considered chemically equivalent only if they:",
    "options": [
      {"id": "a", "text": "Are attached to the same carbon atom."},
      {"id": "b", "text": "Are separated by more than four $\\sigma$ bonds."},
      {"id": "c", "text": "Share the same orientation (cis or trans) relative to the same groups."},
      {"id": "d", "text": "Are bonded to atoms of identical electronegativity."},
      {"id": "e", "text": "Are in an asymmetric electronic environment."}
    ],
    "correctId": "c",
    "explanation": "In rigid structures like rings or alkenes, protons are only equivalent if they have identical relationships to all other groups in the molecule. For example, in 1,1-dichloroethylene, the two protons are equivalent because both are cis to a chlorine atom."
  },
  {
    "id": "q16",
    "question": "A compound has the molecular formula $C_3H_8O$ and shows two signals. Signal A has an integration of 60 units, and Signal B has 20 units. How many protons correspond to Signal A?",
    "options": [
      {"id": "a", "text": "2"},
      {"id": "b", "text": "3"},
      {"id": "c", "text": "6"},
      {"id": "d", "text": "8"},
      {"id": "e", "text": "1"}
    ],
    "correctId": "c",
    "explanation": "First, determine the units per proton by dividing the total integration ($60+20=80$) by the total protons (8): $80 / 8 = 10$ units per proton. Then, divide Signal A's units by this value: $60 / 10 = 6$ protons."
  },
  {
    "id": "q17",
    "question": "Why is Magnetic Resonance Imaging (MRI) considered a safer diagnostic tool than X-rays or CT scans?",
    "options": [
      {"id": "a", "text": "It does not require the patient to enter a magnetic field."},
      {"id": "b", "text": "It uses high-energy gamma radiation that does not linger in tissue."},
      {"id": "c", "text": "It utilizes low-energy radio frequency radiation instead of ionizing high-frequency radiation."},
      {"id": "d", "text": "It is a destructive technique that removes diseased cells."},
      {"id": "e", "text": "It only interacts with carbon atoms, which are less sensitive to radiation."}
    ],
    "correctId": "c",
    "explanation": "MRI is safe because it employs low-energy radio waves, whereas X-rays and CT scans use high-frequency, ionizing radiation that can potentially damage living cells and DNA."
  },
  {
    "id": "q18",
    "question": "Unlike aromatic protons, protons attached to a carbon-carbon triple bond (alkynes) appear relatively upfield at approximately 2.5 ppm. Why?",
    "options": [
      {"id": "a", "text": "They are extremely deshielded by the triple bond."},
      {"id": "b", "text": "The induced magnetic field of the triple bond opposes the applied external field."},
      {"id": "c", "text": "The carbon is $sp^3$ hybridized, leading to high shielding."},
      {"id": "d", "text": "They participate in strong ionic bonding."},
      {"id": "e", "text": "They are always exchangeable with the solvent."}
    ],
    "correctId": "b",
    "explanation": "In the case of a triple bond, the induced magnetic field created by circulating $\\pi$ electrons opposes the applied field in the vicinity of the proton. This causes the proton to feel a weaker effective field, resulting in shielding and an upfield shift."
  },
  {
    "id": "q19",
    "question": "Spin-spin splitting is generally NOT observed between protons that are:",
    "options": [
      {"id": "a", "text": "On the same carbon (geminal)."},
      {"id": "b", "text": "On adjacent carbons (vicinal)."},
      {"id": "c", "text": "Separated by more than three $\\sigma$ bonds."},
      {"id": "d", "text": "Non-equivalent and nearby."},
      {"id": "e", "text": "In different electronic environments."}
    ],
    "correctId": "c",
    "explanation": "Splitting is a short-range interaction. It is typically only observed for non-equivalent protons on the same carbon or adjacent carbons and is not generally seen if the protons are separated by more than three sigma ($\\sigma$) bonds."
  },
  {
    "id": "q20",
    "question": "Which of the following describes the typical appearance and position of a carboxylic acid proton ($R-COOH$) in a $^1$H-NMR spectrum?",
    "options": [
      {"id": "a", "text": "A sharp quartet at 1.0 ppm."},
      {"id": "b", "text": "A triplet at 4.0 ppm."},
      {"id": "c", "text": "A deshielded singlet appearing far downfield at 10–12 ppm."},
      {"id": "d", "text": "An upfield signal at 0 ppm."},
      {"id": "e", "text": "It does not appear because it is NMR-inactive."}
    ],
    "correctId": "c",
    "explanation": "Carboxylic acid protons are highly deshielded due to both the strong inductive effect of the electronegative oxygen atoms and the magnetic anisotropy of the carbonyl group. This results in a very high chemical shift, typically between 10 and 12 ppm."
  },
  {
    "id": "q21",
    "question": "Why is $^{13}$C used for carbon NMR spectroscopy instead of the much more abundant $^{12}$C isotope?",
    "options": [
      {"id": "a", "text": "$^{12}$C is radioactive and dangerous to use in spectrometers."},
      {"id": "b", "text": "$^{12}$C has an even mass number and an even atomic number, making it NMR-inactive."},
      {"id": "c", "text": "$^{13}$C is more abundant in nature (99%) than $^{12}$C."},
      {"id": "d", "text": "$^{13}$C nuclei do not possess a magnetic moment."},
      {"id": "e", "text": "$^{12}$C signals overlap too much with hydrogen signals."}
    ],
    "correctId": "b",
    "explanation": "For a nucleus to be active in NMR, it must have an odd mass number, an odd atomic number, or both. $^{12}$C, which accounts for 99% of carbon in organic molecules, is NMR-inactive because both its mass and atomic numbers are even. $^{13}$C, though only ~1% abundant, has an odd mass number and is therefore NMR-active."
  },
  {
    "id": "q22",
    "question": "Why is peak integration (the area under a signal) generally NOT useful in $^{13}$C-NMR spectroscopy?",
    "options": [
      {"id": "a", "text": "$^{13}$C signals are too broad to be integrated accurately."},
      {"id": "b", "text": "All carbon atoms in a molecule always produce signals of identical intensity."},
      {"id": "c", "text": "Signals for some types of carbons, such as carbonyl carbons, are inherently weaker than others."},
      {"id": "d", "text": "The spectrometer cannot detect the intensity of $^{13}$C nuclei."},
      {"id": "e", "text": "Integration is only possible for radioactive isotopes."}
    ],
    "correctId": "c",
    "explanation": "Unlike $^1$H-NMR, where signal area is proportional to the number of protons, $^{13}$C-NMR signal intensities are not directly proportional to the number of carbons. Some carbons, like quaternary or carbonyl carbons, produce much smaller signals than methyl ($CH_3$) or methylene ($CH_2$) carbons."
  },
  {
    "id": "q23",
    "question": "What is the typical range for chemical shifts in a $^{13}$C-NMR spectrum?",
    "options": [
      {"id": "a", "text": "0–12 ppm"},
      {"id": "b", "text": "0–50 ppm"},
      {"id": "c", "text": "0–100 ppm"},
      {"id": "d", "text": "0–220 ppm"},
      {"id": "e", "text": "100–500 ppm"}
    ],
    "correctId": "d",
    "explanation": "The chemical shifts for $^{13}$C nuclei are spread over a much broader range (0–220 ppm) compared to the small range for protons (0–12 ppm). This wide range is beneficial because it allows each carbon to appear as a distinct peak without the overlapping often seen in proton spectra."
  },
  {
    "id": "q24",
    "question": "Why is carbon-carbon ($^{13}$C-$^{13}$C) splitting typically NOT observed in a standard $^{13}$C-NMR spectrum?",
    "options": [
      {"id": "a", "text": "Carbon atoms are too far apart to couple."},
      {"id": "b", "text": "The probability of two $^{13}$C nuclei being adjacent is extremely low (about 0.01%)."},
      {"id": "c", "text": "The spectrometer automatically filters out C-C coupling to simplify the chart."},
      {"id": "d", "text": "$^{13}$C nuclei do not have magnetic spins."},
      {"id": "e", "text": "$^{13}$C only couples with isotopes of nitrogen."}
    ],
    "correctId": "b",
    "explanation": "Because the natural abundance of $^{13}$C is only 1.1%, the chance of two $^{13}$C atoms being bonded to each other in the same molecule is very small. Consequently, C-C splitting is not observed."
  },
  {
    "id": "q25",
    "question": "In a standard broadband-decoupled $^{13}$C-NMR spectrum, how do the carbon signals usually appear?",
    "options": [
      {"id": "a", "text": "As complex multiplets due to splitting by nearby protons."},
      {"id": "b", "text": "As doublets only."},
      {"id": "c", "text": "As singlets."},
      {"id": "d", "text": "As triplets."},
      {"id": "e", "text": "They do not appear unless the sample is heated."}
    ],
    "correctId": "c",
    "explanation": "While $^{13}$C signals can be split by nearby protons ($^1$H-$^{13}$C coupling), this splitting is usually eliminated using an instrumental technique called \"decoupling.\" This causes every peak in the spectrum to appear as a single line (singlet), simplifying interpretation."
  },
  {
    "id": "q26",
    "question": "Which type of carbon atom typically appears the furthest downfield (170–220 ppm) in a $^{13}$C-NMR spectrum?",
    "options": [
      {"id": "a", "text": "Alkane carbons ($sp^3$)"},
      {"id": "b", "text": "Aromatic carbons"},
      {"id": "c", "text": "Alkene carbons ($sp^2$)"},
      {"id": "d", "text": "Carbonyl carbons ($C=O$)"},
      {"id": "e", "text": "Alkyne carbons ($sp$)"}
    ],
    "correctId": "d",
    "explanation": "Carbonyl carbons are highly deshielded due to both their $sp^2$ hybridization and the strong inductive effect of the double-bonded oxygen atom. This places them at the furthest downfield position in the spectrum."
  },
  {
    "id": "q27",
    "question": "How many $^{13}$C-NMR signals would you expect for methyl acetate ($CH_3COOCH_3$)?",
    "options": [
      {"id": "a", "text": "1"},
      {"id": "b", "text": "2"},
      {"id": "c", "text": "3"},
      {"id": "d", "text": "4"},
      {"id": "e", "text": "6"}
    ],
    "correctId": "c",
    "explanation": "Each distinct type of carbon atom gives one signal. In methyl acetate, there are three unique carbons: the acetate methyl carbon ($C_a$), the carbonyl carbon ($C_b$), and the ester methyl carbon ($C_c$)."
  },
  {
    "id": "q28",
    "question": "In a DEPT-90 $^{13}$C-NMR experiment, which type of carbon is the ONLY one to produce a signal?",
    "options": [
      {"id": "a", "text": "$CH_3$ (Methyl)"},
      {"id": "b", "text": "$CH_2$ (Methylene)"},
      {"id": "c", "text": "$CH$ (Methine)"},
      {"id": "d", "text": "Quaternary carbons (C with no H)"},
      {"id": "e", "text": "Carbonyl carbons"}
    ],
    "correctId": "c",
    "explanation": "The DEPT-90 stage is specifically designed to show only signals from CH carbons. Signals from $CH_3$, $CH_2$, and quaternary carbons (including carbonyls) are absent in this mode."
  },
  {
    "id": "q29",
    "question": "In a DEPT-135 spectrum, a negative peak (pointing downward below the baseline) identifies which group?",
    "options": [
      {"id": "a", "text": "$CH_3$"},
      {"id": "b", "text": "$CH$"},
      {"id": "c", "text": "$CH_2$"},
      {"id": "d", "text": "Quaternary Carbon"},
      {"id": "e", "text": "Carbonyl Carbon"}
    ],
    "correctId": "c",
    "explanation": "In a DEPT-135 experiment, $CH_3$ and CH resonances appear as positive signals, while $CH_2$ resonances appear as negative signals. Quaternary and carbonyl carbons do not appear."
  },
  {
    "id": "q30",
    "question": "Which of the following factors would cause a carbon signal to shift downfield (to a higher ppm)?",
    "options": [
      {"id": "a", "text": "Attaching the carbon to a more electropositive atom."},
      {"id": "b", "text": "Changing the hybridization from $sp^2$ to $sp^3$."},
      {"id": "c", "text": "Attaching the carbon to a more electronegative atom like Oxygen or Nitrogen."},
      {"id": "d", "text": "Increasing the number of hydrogen atoms attached to the carbon."},
      {"id": "e", "text": "Decreasing the spectrometer's operating frequency."}
    ],
    "correctId": "c",
    "explanation": "Electronegative atoms pull electron density away from the carbon nucleus (deshielding), which causes the signal to shift downfield to a higher resonance frequency/ppm."
  }
]

    old_nmr_str = "'nmr': " + json.dumps(mcqs_data, indent=4) + ",\n  "
    
    # Remove $ signs by manipulating the strings
    mcqs_json_str = json.dumps(mcqs_data, indent=4)
    mcqs_json_str_no_dollars = mcqs_json_str.replace('$', '')
    
    new_nmr_str = "'nmr': " + mcqs_json_str_no_dollars + ",\n  "

    with open('src/App.tsx', 'r', encoding='utf-8') as f:
        app_code = f.read()

    if old_nmr_str in app_code:
        app_code = app_code.replace(old_nmr_str, new_nmr_str)
        with open('src/App.tsx', 'w', encoding='utf-8') as f:
            f.write(app_code)
        print("Successfully removed $ signs.")
    else:
        print("Could not find the exact old nmr_str in App.tsx.")

if __name__ == '__main__':
    main()
