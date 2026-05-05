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
            mcqs_data = [
                {
                    "id": "q1",
                    "question": "Compared to other spectroscopic methods, mass spectrometry is unique because it is considered:",
                    "options": [
                        {"id": "a", "text": "A non-destructive technique where the sample is recovered."},
                        {"id": "b", "text": "A destructive micro-analytical technique where the sample is consumed."},
                        {"id": "c", "text": "Only useful for analyzing pure metallic elements."},
                        {"id": "d", "text": "Dependent on the absorption of radio-frequency radiation."},
                        {"id": "e", "text": "Used to measure the vibration of covalent bonds."}
                    ],
                    "correctId": "b",
                    "explanation": "The source defines mass spectrometry as a destructive technique because the sample is consumed during analysis as it is ionized and fragmented."
                },
                {
                    "id": "q2",
                    "question": "How much sample is typically required to obtain characteristic information using mass spectrometry?",
                    "options": [
                        {"id": "a", "text": "Several grams."},
                        {"id": "b", "text": "1–2 milligrams."},
                        {"id": "c", "text": "Only a few nanomoles."},
                        {"id": "d", "text": "At least 10 milliliters of liquid."},
                        {"id": "e", "text": "One full mole of the substance."}
                    ],
                    "correctId": "c",
                    "explanation": "The source explicitly states that mass spectrometry is a micro-analytical technique requiring only a few nanomoles of the sample."
                },
                {
                    "id": "q3",
                    "question": "In mass spectrometry, from which site is an electron typically removed first to form the molecular ion?",
                    "options": [
                        {"id": "a", "text": "Sigma (\\sigma) bond electrons."},
                        {"id": "b", "text": "Pi (\\pi) bond electrons."},
                        {"id": "c", "text": "Non-bonding (NB) lone pair electrons."},
                        {"id": "d", "text": "Inner-shell core electrons."},
                        {"id": "e", "text": "All electrons are removed simultaneously."}
                    ],
                    "correctId": "c",
                    "explanation": "Electrons are first removed from the site with the lowest ionization potential. The source provides the order: Non-bonding electrons > pi bond electrons > sigma bond electrons."
                },
                {
                    "id": "q4",
                    "question": "When a molecular ion fragments in the mass spectrometer, which of the resulting species is actually detected by the instrument?",
                    "options": [
                        {"id": "a", "text": "The neutral radical."},
                        {"id": "b", "text": "The neutral molecule."},
                        {"id": "c", "text": "The positively charged cation."},
                        {"id": "d", "text": "Lighter anions."},
                        {"id": "e", "text": "Both the radical and the cation."}
                    ],
                    "correctId": "c",
                    "explanation": "Fragmentation of a molecular ion produces a radical and a cation; the source specifies that \"Only the cation is detected by MS\"."
                },
                {
                    "id": "q5",
                    "question": "In a mass spectrum plot, what does the \"base peak\" represent?",
                    "options": [
                        {"id": "a", "text": "The peak with the highest m/z value."},
                        {"id": "b", "text": "The peak representing the intact parent molecule."},
                        {"id": "c", "text": "The most intense peak, assigned a relative abundance of 100%."},
                        {"id": "d", "text": "The peak caused by the carbon-13 isotope."},
                        {"id": "e", "text": "The peak with the lowest mass-to-charge ratio."}
                    ],
                    "correctId": "c",
                    "explanation": "The source defines the base peak as the most abundant/intense ion in the spectrum, which is assigned an abundance of 100%."
                },
                {
                    "id": "q6",
                    "question": "What is the correct functional order of the three major components an ion passes through in a mass spectrometer?",
                    "options": [
                        {"id": "a", "text": "Analyzer -> Ion Source -> Detector"},
                        {"id": "b", "text": "Detector -> Analyzer -> Ion Source"},
                        {"id": "c", "text": "Ion Source -> Analyzer -> Detector"},
                        {"id": "d", "text": "Ion Source -> Detector -> Analyzer"},
                        {"id": "e", "text": "Analyzer -> Detector -> Ion Source"}
                    ],
                    "correctId": "c",
                    "explanation": "The source lists the three major components as: 1- Ion Source (produces ions), 2- Analyzer (resolves ions), and 3- Detector (records abundance)."
                },
                {
                    "id": "q7",
                    "question": "In the analyzer of a mass spectrometer, how does the mass-to-charge ratio (m/z) affect the deflection of ions by the magnetic field?",
                    "options": [
                        {"id": "a", "text": "Higher m/z ions are deflected the most."},
                        {"id": "b", "text": "The magnetic field deflects all ions equally."},
                        {"id": "c", "text": "Lowest m/z ions are deflected the most."},
                        {"id": "d", "text": "Only neutral radicals are deflected."},
                        {"id": "e", "text": "Deflection is independent of momentum."}
                    ],
                    "correctId": "c",
                    "explanation": "The source states that the amount of deflection depends on m/z: highest m/z are deflected least, and lowest m/z are deflected most."
                },
                {
                    "id": "q8",
                    "question": "Ions that have very low mass (low momentum) in the analyzer undergo which of the following?",
                    "options": [
                        {"id": "a", "text": "They are not deflected enough."},
                        {"id": "b", "text": "They are deflected the most and collide with the analyzer walls."},
                        {"id": "c", "text": "They exit through the slit toward the detector perfectly."},
                        {"id": "d", "text": "They are ignored by the magnetic field."},
                        {"id": "e", "text": "They revert back to their vapor state."}
                    ],
                    "correctId": "b",
                    "explanation": "According to the \"Working\" section, low mass/momentum ions are deflected the most and collide with the walls rather than reaching the detector."
                },
                {
                    "id": "q9",
                    "question": "A compound containing one chlorine atom will show a characteristic \"M\" and \"M+2\" isotope pattern. What is the approximate intensity ratio?",
                    "options": [
                        {"id": "a", "text": "1:1"},
                        {"id": "b", "text": "1:3"},
                        {"id": "c", "text": "3:1"},
                        {"id": "d", "text": "1:2:1"},
                        {"id": "e", "text": "9:6:1"}
                    ],
                    "correctId": "c",
                    "explanation": "The source explains that Chlorine exists as ^{35}Cl and ^{37}Cl with an intensity ratio of 3:1."
                },
                {
                    "id": "q10",
                    "question": "What isotope pattern is characteristic of a molecule containing a single bromine atom?",
                    "options": [
                        {"id": "a", "text": "M+2 is one-third as large as M+."},
                        {"id": "b", "text": "M+ and M+2 are approximately equal in intensity (1:1)."},
                        {"id": "c", "text": "M+2 is 4% the height of M+."},
                        {"id": "d", "text": "A peak appears at m/z 127 with a large gap."},
                        {"id": "e", "text": "The molecular ion peak is always an odd number."}
                    ],
                    "correctId": "b",
                    "explanation": "Bromine isotopes (^{79}Br and ^{81}Br) have a natural abundance ratio of approximately 1:1, leading to peaks of similar height."
                },
                {
                    "id": "q11",
                    "question": "The presence of which element is signaled by a cation peak at m/z 127 accompanied by a characteristically large gap in the spectrum?",
                    "options": [
                        {"id": "a", "text": "Bromine"},
                        {"id": "b", "text": "Chlorine"},
                        {"id": "c", "text": "Iodine"},
                        {"id": "d", "text": "Sulfur"},
                        {"id": "e", "text": "Nitrogen"}
                    ],
                    "correctId": "c",
                    "explanation": "The source table for \"Easily Recognized Elements\" explicitly lists Iodine as having an I^+ peak at 127 and a large gap."
                },
                {
                    "id": "q12",
                    "question": "According to the Nitrogen Rule, if a molecule has an odd-numbered molecular ion mass (e.g., m/z = 101), what can be concluded?",
                    "options": [
                        {"id": "a", "text": "It contains zero nitrogen atoms."},
                        {"id": "b", "text": "It contains an even number of nitrogen atoms."},
                        {"id": "c", "text": "It contains an odd number of nitrogen atoms."},
                        {"id": "d", "text": "It is a purely aromatic hydrocarbon."},
                        {"id": "e", "text": "It must contain at least one oxygen atom."}
                    ],
                    "correctId": "c",
                    "explanation": "The Nitrogen Rule states: \"When the number of nitrogen atoms present in the molecule is odd, the molecular mass will be an odd number\"."
                },
                {
                    "id": "q13",
                    "question": "If a molecule has an even-numbered molecular ion mass (e.g., m/z = 60), what does the Nitrogen Rule indicate about its nitrogen content?",
                    "options": [
                        {"id": "a", "text": "It must contain exactly one nitrogen atom."},
                        {"id": "b", "text": "It contains an odd number of nitrogen atoms."},
                        {"id": "c", "text": "It contains either zero or an even number of nitrogen atoms."},
                        {"id": "d", "text": "It is highly branched and saturated."},
                        {"id": "e", "text": "Nitrogen is not present in the molecule."}
                    ],
                    "correctId": "c",
                    "explanation": "The rule states that if the mass is even, the number of nitrogens is even or zero."
                },
                {
                    "id": "q14",
                    "question": "Which of the following classes of compounds is most likely to produce the most intense and stable molecular ion peak?",
                    "options": [
                        {"id": "a", "text": "Aliphatic alcohols."},
                        {"id": "b", "text": "Highly branched alkanes."},
                        {"id": "c", "text": "Purely aromatic systems."},
                        {"id": "d", "text": "Organic nitrates."},
                        {"id": "e", "text": "Aliphatic nitriles."}
                    ],
                    "correctId": "c",
                    "explanation": "The source states: \"The most stable molecular ions are those of purely aromatic systems\" and provides the order: aromatic compounds > conjugated alkenes > cyclic compounds."
                },
                {
                    "id": "q15",
                    "question": "In confirming a suspected molecular ion peak, which range of mass losses is considered \"unlikely\" and suggests the peak might be an impurity or fragment?",
                    "options": [
                        {"id": "a", "text": "M–15 (CH_3)"},
                        {"id": "b", "text": "M–18 (H_2O)"},
                        {"id": "c", "text": "M–3 to M–14"},
                        {"id": "d", "text": "M–31 (OCH_3)"},
                        {"id": "e", "text": "M–1 (H)"}
                    ],
                    "correctId": "c",
                    "explanation": "The source notes: \"Peaks in the range of M- 3 to M-14, however, indicate that... the presumed molecular ion peak is actually a fragment ion peak\"."
                },
                {
                    "id": "q16",
                    "question": "If an unknown substance has a molecular formula resulting in an IHD of 0, what does this indicate about the structure?",
                    "options": [
                        {"id": "a", "text": "The compound has one double bond."},
                        {"id": "b", "text": "The compound has one ring."},
                        {"id": "c", "text": "The compound has no \\pi bonds and no rings."},
                        {"id": "d", "text": "The compound contains a triple bond."},
                        {"id": "e", "text": "The compound is aromatic."}
                    ],
                    "correctId": "c",
                    "explanation": "An IHD of 0 specifically means \"the unknown substance has no \\pi bonds and/or rings\"."
                },
                {
                    "id": "q17",
                    "question": "Bombardment of molecules by an electron beam with energy between 10–15 eV typically results in which of the following?",
                    "options": [
                        {"id": "a", "text": "Complete destruction of the molecule."},
                        {"id": "b", "text": "McLafferty rearrangement."},
                        {"id": "c", "text": "Simple ionization to form the molecular ion (M^+)."},
                        {"id": "d", "text": "High excitation and extensive fragmentation."},
                        {"id": "e", "text": "Absorption of infrared radiation."}
                    ],
                    "correctId": "c",
                    "explanation": "The source explains that energy between 10-15 eV \"usually results in the ionization of molecules by removal of one electron (Molecular ion formation)\"."
                },
                {
                    "id": "q18",
                    "question": "At what electron beam energy level does the molecular ion typically acquire enough excitation to break down into various fragments?",
                    "options": [
                        {"id": "a", "text": "1–5 eV"},
                        {"id": "b", "text": "Exactly 10 eV"},
                        {"id": "c", "text": "50–70 eV"},
                        {"id": "d", "text": "1000 eV"},
                        {"id": "e", "text": "Energy level does not affect fragmentation."}
                    ],
                    "correctId": "c",
                    "explanation": "The source states: \"When the energy of electron beam is increased between 50-70ev, these molecular ions acquire a high excitation resulting in their break down into various fragments\"."
                },
                {
                    "id": "q19",
                    "question": "Fragmentation is often governed by the stability of the resulting cation. What is the correct order of cation stability according to the source?",
                    "options": [
                        {"id": "a", "text": "Methyl > Primary > Secondary > Tertiary"},
                        {"id": "b", "text": "Tertiary > Secondary > Primary > Methyl"},
                        {"id": "c", "text": "Primary > Tertiary > Secondary > Methyl"},
                        {"id": "d", "text": "Secondary > Primary > Tertiary > Methyl"},
                        {"id": "e", "text": "All cations are equally stable in a vacuum."}
                    ],
                    "correctId": "b",
                    "explanation": "The source explicitly lists the cation stability order: CH_3^+ < R'CH_2^+ < R_2'CH^+ < R_3'C^+."
                },
                {
                    "id": "q20",
                    "question": "According to the source's categorization, which of the following is NOT a mode of \"Simple Cleavage\"?",
                    "options": [
                        {"id": "a", "text": "Homolytic cleavage"},
                        {"id": "b", "text": "Heterolytic cleavage"},
                        {"id": "c", "text": "Retro Diels-Alder reaction"},
                        {"id": "d", "text": "McLafferty rearrangement"},
                        {"id": "e", "text": "All are simple cleavages."}
                    ],
                    "correctId": "d",
                    "explanation": "The source classifies McLafferty rearrangement under \"Rearrangement reactions accompanied by transfer of atoms,\" separate from the \"Simple cleavage\" category."
                }
            ]

            # Remove $ from all strings
            mcqs_json_str = json.dumps(mcqs_data, indent=4).replace('$', '')
            
            new_app_code = app_code[:start_idx + 21] + mcqs_json_str + app_code[end_idx:]
            with open('src/App.tsx', 'w', encoding='utf-8') as f:
                f.write(new_app_code)
            print('Successfully replaced the 20 questions.')
        else:
            print('Could not find end of array')
    else:
        print('Could not find mass_spectrometry key')

if __name__ == '__main__':
    main()
