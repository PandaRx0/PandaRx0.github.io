import json

def main():
    with open('src/App.tsx', 'r', encoding='utf-8') as f:
        app_code = f.read()

    # Add Mass spectrometry to TOPICS.advanced
    app_code = app_code.replace(
        "{ id: 'nmr', title: 'NMR spectroscopy', desc: 'NMR spectroscopy', icon: Database }]",
        "{ id: 'nmr', title: 'NMR spectroscopy', desc: 'NMR spectroscopy', icon: Database },\n    { id: 'mass_spectrometry', title: 'Mass spectrometry', desc: 'Mass spectrometry', icon: Database }]"
    )

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
            "explanation": "Mass spectrometry is a micro-analytical technique requiring only nanomoles of a sample, but it is destructive because the analyte is ionized and broken into fragments during the process."
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
            "explanation": "The source defines mass spectrometry as a micro-analytical technique requiring only a few nanomoles of the sample."
        },
        {
            "id": "q3",
            "question": "In mass spectrometry, from which site is an electron typically removed first to form the molecular ion?",
            "options": [
                {"id": "a", "text": "Sigma (\\sigma) bond electrons."},
                {"id": "b", "text": "Pi (\\pi) bond electrons."},
                {"id": "c", "text": "Inner-shell core electrons."},
                {"id": "d", "text": "Non-bonding (NB) lone pair electrons."},
                {"id": "e", "text": "All electrons are removed simultaneously."}
            ],
            "correctId": "d",
            "explanation": "Electrons are first removed from the site with the lowest ionization potential in the order: Non-bonding electrons > pi bond electrons > sigma bond electrons."
        },
        {
            "id": "q4",
            "question": "When a molecular ion fragments in the mass spectrometer, which of the resulting species is actually detected by the instrument?",
            "options": [
                {"id": "a", "text": "The neutral radical."},
                {"id": "b", "text": "The positively charged cation."},
                {"id": "c", "text": "The neutral molecule."},
                {"id": "d", "text": "Lighter anions."},
                {"id": "e", "text": "Both the radical and the cation."}
            ],
            "correctId": "b",
            "explanation": "Fragmentation of a molecular ion produces a radical and a cation; however, the source specifies that only the cation is detected by MS."
        },
        {
            "id": "q5",
            "question": "In the analyzer of a mass spectrometer, how does the mass-to-charge ratio (m/z) affect the deflection of ions by the magnetic field?",
            "options": [
                {"id": "a", "text": "Higher m/z ions are deflected the most."},
                {"id": "b", "text": "The magnetic field deflects all ions equally."},
                {"id": "c", "text": "Lowest m/z ions are deflected the most."},
                {"id": "d", "text": "Only neutral radicals are deflected."},
                {"id": "e", "text": "Deflection is independent of mass."}
            ],
            "correctId": "c",
            "explanation": "The amount of deflection in a magnetic field depends on the m/z ratio: highest m/z ions are deflected least, while lowest m/z ions are deflected most."
        },
        {
            "id": "q6",
            "question": "In a mass spectrum plot, what does the \"base peak\" represent?",
            "options": [
                {"id": "a", "text": "The peak with the highest m/z value."},
                {"id": "b", "text": "The peak representing the parent molecule."},
                {"id": "c", "text": "The most intense peak, assigned an abundance of 100%."},
                {"id": "d", "text": "The peak caused by the carbon-13 isotope."},
                {"id": "e", "text": "The peak with the lowest mass."}
            ],
            "correctId": "c",
            "explanation": "The base peak is defined as the most intense peak in the spectrum, which is assigned a relative abundance of 100%."
        },
        {
            "id": "q7",
            "question": "A compound containing one chlorine atom will show a characteristic \"M\" and \"M+2\" isotope pattern. What is the approximate intensity ratio?",
            "options": [
                {"id": "a", "text": "1:1"},
                {"id": "b", "text": "1:3"},
                {"id": "c", "text": "3:1"},
                {"id": "d", "text": "1:2:1"},
                {"id": "e", "text": "9:6:1"}
            ],
            "correctId": "c",
            "explanation": "Chlorine exists as isotopes ^{35}Cl and ^{37}Cl with a natural abundance ratio of approximately 3:1, leading to an M+2 peak that is one-third the size of the M+ peak."
        },
        {
            "id": "q8",
            "question": "What isotope pattern is characteristic of a molecule containing a single bromine atom?",
            "options": [
                {"id": "a", "text": "M+2 is one-third as large as M+."},
                {"id": "b", "text": "M+ and M+2 are approximately equal in intensity (1:1)."},
                {"id": "c", "text": "M+2 is 4% the height of M+."},
                {"id": "d", "text": "A peak appears at m/z 127 with a large gap."},
                {"id": "e", "text": "The molecular ion peak is always odd."}
            ],
            "correctId": "b",
            "explanation": "Bromine has isotopes ^{79}Br and ^{81}Br with nearly equal natural abundance, resulting in M+ and M+2 peaks of similar height."
        },
        {
            "id": "q9",
            "question": "The presence of which element is signaled by a peak at m/z 127 and a characteristically large gap in the spectrum?",
            "options": [
                {"id": "a", "text": "Bromine"},
                {"id": "b", "text": "Chlorine"},
                {"id": "c", "text": "Iodine"},
                {"id": "d", "text": "Sulfur"},
                {"id": "e", "text": "Nitrogen"}
            ],
            "correctId": "c",
            "explanation": "Iodine is monoisotopic and can be recognized in a mass spectrum by a cation peak at m/z 127 accompanied by a large gap between it and other fragments."
        },
        {
            "id": "q10",
            "question": "According to the Nitrogen Rule, if a molecule has an odd-numbered molecular ion mass (e.g., m/z = 101), what can be concluded?",
            "options": [
                {"id": "a", "text": "It contains zero nitrogen atoms."},
                {"id": "b", "text": "It contains an even number of nitrogen atoms."},
                {"id": "c", "text": "It contains an odd number of nitrogen atoms."},
                {"id": "d", "text": "It is a purely aromatic hydrocarbon."},
                {"id": "e", "text": "It must contain oxygen."}
            ],
            "correctId": "c",
            "explanation": "The Nitrogen Rule states that an odd molecular mass indicates an odd number of nitrogen atoms, while an even mass indicates zero or an even number of nitrogens."
        },
        {
            "id": "q11",
            "question": "Which of the following classes of compounds is most likely to produce the most intense and stable molecular ion peak?",
            "options": [
                {"id": "a", "text": "Aliphatic alcohols."},
                {"id": "b", "text": "Highly branched alkanes."},
                {"id": "c", "text": "Purely aromatic systems."},
                {"id": "d", "text": "Organic nitrates."},
                {"id": "e", "text": "Aliphatic nitriles."}
            ],
            "correctId": "c",
            "explanation": "The stability of the molecular ion determines peak intensity; purely aromatic systems have the most stable molecular ions and thus give prominent peaks."
        },
        {
            "id": "q12",
            "question": "Which of the following mass losses from a suspected molecular ion peak would indicate that the peak is likely an impurity or fragment rather than the true molecular ion?",
            "options": [
                {"id": "a", "text": "Loss of 15 (CH_3)."},
                {"id": "b", "text": "Loss of 18 (H_2O)."},
                {"id": "c", "text": "Loss of 7."},
                {"id": "d", "text": "Loss of 31 (OCH_3)."},
                {"id": "e", "text": "Loss of 1."}
            ],
            "correctId": "c",
            "explanation": "Confirming a molecular ion involves identifying logical losses like M-15 or M-18. Peaks in the range of M-3 to M-14 are considered unlikely and suggest the peak is a contaminant or fragment."
        },
        {
            "id": "q13",
            "question": "A compound with the formula C_2H_3Cl_3O_2 results in an IHD of 0. What does this indicate about the structure?",
            "options": [
                {"id": "a", "text": "The compound has one double bond."},
                {"id": "b", "text": "The compound has one ring."},
                {"id": "c", "text": "The compound has no \\pi bonds and no rings."},
                {"id": "d", "text": "The compound contains a triple bond."},
                {"id": "e", "text": "The compound is aromatic."}
            ],
            "correctId": "c",
            "explanation": "An IHD of 0, as calculated in the example for C_2H_3Cl_3O_2, means the substance has no rings or \\pi bonds."
        },
        {
            "id": "q14",
            "question": "Using the \"Rule of Thirteen\" for a hydrocarbon with a molecular ion at m/z = 106, what is the resulting molecular formula?",
            "options": [
                {"id": "a", "text": "C_7H_{14}"},
                {"id": "b", "text": "C_8H_{10}"},
                {"id": "c", "text": "C_6H_{22}"},
                {"id": "d", "text": "C_9H_{12}"},
                {"id": "e", "text": "C_8H_{18}"}
            ],
            "correctId": "b",
            "explanation": "Step 1: 106/13 = 8 (integer n) with a remainder of 2. Step 2: m = n + remainder = 8 + 2 = 10. Formula: C_8H_{10}."
        },
        {
            "id": "q15",
            "question": "What is the correct functional order of the three major components an ion passes through in a mass spectrometer?",
            "options": [
                {"id": "a", "text": "Analyzer -> Ion Source -> Detector"},
                {"id": "b", "text": "Detector -> Analyzer -> Ion Source"},
                {"id": "c", "text": "Ion Source -> Analyzer -> Detector"},
                {"id": "d", "text": "Ion Source -> Detector -> Analyzer"},
                {"id": "e", "text": "Analyzer -> Detector -> Ion Source"}
            ],
            "correctId": "c",
            "explanation": "The instrument consists of the Ion Source (producing gaseous ions), the Analyzer (resolving ions by mass), and the Detector (recording relative abundance)."
        },
        {
            "id": "q16",
            "question": "Ions that have low mass (low momentum) in the analyzer undergo which of the following?",
            "options": [
                {"id": "a", "text": "They are not deflected enough."},
                {"id": "b", "text": "They are deflected the most and collide with the analyzer walls."},
                {"id": "c", "text": "They exit through the slit toward the detector perfectly."},
                {"id": "d", "text": "They are ignored by the magnetic field."},
                {"id": "e", "text": "They turn into neutral radicals."}
            ],
            "correctId": "b",
            "explanation": "Ions with low mass (low momentum) are deflected the most by the magnetic field and often collide with the walls of the analyzer rather than exiting through the slit."
        },
        {
            "id": "q17",
            "question": "In fragmentation processes, bombardment of molecules by an electron beam with which energy range typically results in simple ionization (molecular ion formation)?",
            "options": [
                {"id": "a", "text": "1–5 eV"},
                {"id": "b", "text": "10–15 eV"},
                {"id": "c", "text": "50–70 eV"},
                {"id": "d", "text": "100–200 eV"},
                {"id": "e", "text": "1000 eV"}
            ],
            "correctId": "b",
            "explanation": "Electron beam energy between 10-15 eV usually results in the ionization of molecules to form molecular ions by removing one electron."
        },
        {
            "id": "q18",
            "question": "At what electron beam energy level does the molecular ion typically acquire high excitation resulting in its breakdown into fragments?",
            "options": [
                {"id": "a", "text": "1 eV"},
                {"id": "b", "text": "10 eV"},
                {"id": "c", "text": "50–70 eV"},
                {"id": "d", "text": "Exactly 15 eV"},
                {"id": "e", "text": "Energy level has no effect on fragmentation."}
            ],
            "correctId": "c",
            "explanation": "When the energy of the electron beam is increased to 50–70 eV, molecular ions acquire high excitation, resulting in their breakdown into various fragments."
        },
        {
            "id": "q19",
            "question": "Fragmentation is often governed by the stability of the resulting cation. What is the correct order of cation stability?",
            "options": [
                {"id": "a", "text": "Methyl > Primary > Secondary > Tertiary"},
                {"id": "b", "text": "Tertiary > Secondary > Primary > Methyl"},
                {"id": "c", "text": "Primary > Tertiary > Secondary > Methyl"},
                {"id": "d", "text": "Secondary > Primary > Tertiary > Methyl"},
                {"id": "e", "text": "All cations have equal stability in a vacuum."}
            ],
            "correctId": "b",
            "explanation": "The source explicitly provides the cation stability order: R_3C^+ > R_2CH^+ > RCH_2^+ > CH_3^+."
        },
        {
            "id": "q20",
            "question": "Which of the following is NOT classified as a \"Simple Cleavage\" mode of fragmentation?",
            "options": [
                {"id": "a", "text": "Homolytic cleavage"},
                {"id": "b", "text": "Heterolytic cleavage"},
                {"id": "c", "text": "Retro Diels-Alder reaction"},
                {"id": "d", "text": "McLafferty rearrangement"},
                {"id": "e", "text": "All are simple cleavages."}
            ],
            "correctId": "d",
            "explanation": "McLafferty rearrangement is categorized under \"Rearrangement reactions accompanied by transfer of atoms,\" whereas homolytic, heterolytic, and Retro Diels-Alder are listed under \"Simple cleavage\"."
        },
        {
            "id": "q21",
            "question": "Using the provided data, if a wave has a wavenumber of 2000 cm⁻¹, what is its approximate energy (E) in Joules?",
            "options": [
                {"id": "a", "text": "1.99 \\times 10^{-20} J"},
                {"id": "b", "text": "3.98 \\times 10^{-20} J"},
                {"id": "c", "text": "6.63 \\times 10^{-34} J"},
                {"id": "d", "text": "3.00 \\times 10^{-10} J"},
                {"id": "e", "text": "5.30 \\times 10^{-19} J"}
            ],
            "correctId": "b",
            "explanation": "Energy is calculated using the formula E = hc\\bar{\\nu}. According to the source, for a wavenumber of 2000 cm⁻¹, the calculation is (6.63 \\times 10^{-34} j.s) \\times (3 \\times 10^{10} cm.s^{-1}) \\times (2000 cm^{-1}) = 3.98 \\times 10^{-20} J."
        },
        {
            "id": "q22",
            "question": "According to the source, how is \"Spectroscopy\" defined?",
            "options": [
                {"id": "a", "text": "The measurement of bond lengths in a vacuum."},
                {"id": "b", "text": "The study of sound waves passing through a medium."},
                {"id": "c", "text": "The measurement and interpretation of EMR absorbed or emitted when particles move from one energy state to another."},
                {"id": "d", "text": "The calculation of the refractive index of unknown liquids."},
                {"id": "e", "text": "The destruction of molecules using high-energy gamma rays."}
            ],
            "correctId": "c",
            "explanation": "The source explicitly defines spectroscopy as the measurement and interpretation of EMR absorbed or emitted during the transition of molecules, atoms, or ions between energy states."
        },
        {
            "id": "q23",
            "question": "Which of the following formulas correctly expresses the relationship between Absorbance (A) and percent Transmittance (%T)?",
            "options": [
                {"id": "a", "text": "A = \\log \\%T"},
                {"id": "b", "text": "A = 2 - \\log \\%T"},
                {"id": "c", "text": "A = 100 / \\%T"},
                {"id": "d", "text": "A = \\log (I / I_0)"},
                {"id": "e", "text": "A = \\%T - 2"}
            ],
            "correctId": "b",
            "explanation": "The source provides several formulas for absorbance, including A = -\\log T and the specific calculation A = 2 - \\log \\%T."
        },
        {
            "id": "q24",
            "question": "According to the provided table of chromophores, which group has the longest absorption maximum (\\lambda_{max})?",
            "options": [
                {"id": "a", "text": "Carbonyl (C=O)"},
                {"id": "b", "text": "Azo (-N=N-)"},
                {"id": "c", "text": "Nitro (-N=O)"},
                {"id": "d", "text": "Thioketone (C=S)"},
                {"id": "e", "text": "Nitrite (-NO_2)"}
            ],
            "correctId": "d",
            "explanation": "The source lists the following \\lambda_{max} values: Carbonyl (280 nm), Azo (262 nm), Nitro (270 nm), and Thioketone (330 nm)."
        },
        {
            "id": "q25",
            "question": "Why is the \\pi \\to \\pi^* transition most frequently used in UV-Vis absorption spectroscopy?",
            "options": [
                {"id": "a", "text": "Because it requires the highest possible energy."},
                {"id": "b", "text": "Because it only occurs in saturated compounds."},
                {"id": "c", "text": "Because it has a high molar absorptivity (\\epsilon) and requires moderate energy."},
                {"id": "d", "text": "Because it is independent of the solvent used."},
                {"id": "e", "text": "Because it only occurs in the vacuum UV region (100–200 nm)."}
            ],
            "correctId": "c",
            "explanation": "The source states that \\pi \\to \\pi^* is the most frequently used transition because the \\epsilon is high (allowing for sensitive determinations) and the energy required is moderate."
        },
        {
            "id": "q26",
            "question": "In IR spectroscopy, frequencies are most commonly expressed in \"wavenumbers.\" What is the unit for a wavenumber?",
            "options": [
                {"id": "a", "text": "Hertz (Hz)"},
                {"id": "b", "text": "Micrometers (\\mu m)"},
                {"id": "c", "text": "Reciprocal centimeters (cm⁻¹)"},
                {"id": "d", "text": "Joules per mole (J/mol)"},
                {"id": "e", "text": "Nanometers (nm)"}
            ],
            "correctId": "c",
            "explanation": "The source states that IR frequencies are usually expressed in units of wavenumbers, which are defined as reciprocal centimeters."
        },
        {
            "id": "q27",
            "question": "Considering water (H_2O) is a non-linear molecule, how many fundamental vibrations does it possess?",
            "options": [
                {"id": "a", "text": "2"},
                {"id": "b", "text": "3"},
                {"id": "c", "text": "4"},
                {"id": "d", "text": "6"},
                {"id": "e", "text": "9"}
            ],
            "correctId": "b",
            "explanation": "For non-linear molecules, the formula is 3n - 6. Since water has 3 atoms: (3 \\times 3) - 6 = 3 fundamental vibrations."
        },
        {
            "id": "q28",
            "question": "According to Hooke’s Law, what is the relationship between the mass of atoms in a bond and the vibrational frequency (wavenumber)?",
            "options": [
                {"id": "a", "text": "Frequency is directly proportional to the mass."},
                {"id": "b", "text": "Frequency is independent of the mass."},
                {"id": "c", "text": "Frequency increases as the mass of the atoms decreases."},
                {"id": "d", "text": "Frequency decreases as the bond force constant increases."},
                {"id": "e", "text": "Frequency is only affected by the refractive index."}
            ],
            "correctId": "c",
            "explanation": "Hooke's Law formula shows that frequency (\\bar{\\nu}) is inversely proportional to the square root of the masses (Mx, My). Therefore, lower atomic masses result in a higher frequency/wavenumber."
        },
        {
            "id": "q29",
            "question": "Why is water generally NOT used as a solvent for liquid samples in IR spectroscopy?",
            "options": [
                {"id": "a", "text": "It absorbs too strongly at all wavenumbers."},
                {"id": "b", "text": "It is too expensive for routine analysis."},
                {"id": "c", "text": "it attacks the transparent windows (like NaCl or KBr) of the sample cell."},
                {"id": "d", "text": "It prevents the molecule from vibrating."},
                {"id": "e", "text": "It causes a hyperchromic shift."}
            ],
            "correctId": "c",
            "explanation": "The source notes that solutes should be in a transparent solvent, but not water, because water \"attacks windows\" made of materials like NaCl or KBr."
        },
        {
            "id": "q30",
            "question": "In which region do unconjugated acid chlorides typically show strong C=O stretching absorption?",
            "options": [
                {"id": "a", "text": "1650–1550 cm⁻¹"},
                {"id": "b", "text": "1715–1630 cm⁻¹"},
                {"id": "c", "text": "1815–1785 cm⁻¹"},
                {"id": "d", "text": "3400–3300 cm⁻¹"},
                {"id": "e", "text": "1000–900 cm⁻¹"}
            ],
            "correctId": "c",
            "explanation": "The source specifies that unconjugated acid chlorides absorb in the 1815–1785 cm⁻¹ region."
        },
        {
            "id": "q31",
            "question": "In the presence of an applied magnetic field, why do more nuclei orient \"with\" the field rather than \"against\" it?",
            "options": [
                {"id": "a", "text": "Because they are physically pushed by the magnet."},
                {"id": "b", "text": "Because the \"with\" orientation is a lower energy state."},
                {"id": "c", "text": "Because the \"against\" orientation is NMR-inactive."},
                {"id": "d", "text": "Because protons are naturally negatively charged."},
                {"id": "e", "text": "Because the \"with\" orientation matches the speed of light."}
            ],
            "correctId": "b",
            "explanation": "The source states that nuclear magnets orient with or against an applied field, and more nuclei orient with it because this arrangement is lower in energy."
        },
        {
            "id": "q32",
            "question": "What causes a nucleus to undergo a \"spin flip\" in an NMR experiment?",
            "options": [
                {"id": "a", "text": "A change in the temperature of the sample."},
                {"id": "b", "text": "Increasing the concentration of the analyte."},
                {"id": "c", "text": "Absorption of external energy (Radio Frequency) that matches the energy gap between states."},
                {"id": "d", "text": "Colliding with a high-energy electron beam."},
                {"id": "e", "text": "Passing through a vacuum."}
            ],
            "correctId": "c",
            "explanation": "A \"spin flip\" occurs when external energy as radio frequency matches the energy difference (\\Delta E) between the two states, causing the nucleus to flip from one orientation to another."
        },
        {
            "id": "q33",
            "question": "Why are axial and equatorial protons in cyclohexane considered equivalent in an NMR experiment?",
            "options": [
                {"id": "a", "text": "Because they are attached to the same carbon."},
                {"id": "b", "text": "Because the molecule is perfectly flat."},
                {"id": "c", "text": "Because the ring-flip process is fast compared to the NMR time-scale."},
                {"id": "d", "text": "Because they are both cis to the same group."},
                {"id": "e", "text": "Because they are separated by more than four sigma bonds."}
            ],
            "correctId": "c",
            "explanation": "The source explains that in cyclohexane, the ring-flip process is fast, making axial and equatorial protons equivalent to each other."
        },
        {
            "id": "q34",
            "question": "Spin-spin splitting is generally NOT observed between protons that are separated by more than:",
            "options": [
                {"id": "a", "text": "One \\sigma bond."},
                {"id": "b", "text": "Two \\sigma bonds."},
                {"id": "c", "text": "Three \\sigma bonds."},
                {"id": "d", "text": "Ten \\sigma bonds."},
                {"id": "e", "text": "All protons split each other regardless of distance."}
            ],
            "correctId": "c",
            "explanation": "Rule 3 for splitting states that it is generally not observed between protons separated by more than three sigma (\\sigma) bonds."
        },
        {
            "id": "q35",
            "question": "In a DEPT experiment, how are CH_3 (methyl) carbons specifically identified?",
            "options": [
                {"id": "a", "text": "They appear as the only negative peaks in DEPT-135."},
                {"id": "b", "text": "They are the only signals present in the DEPT-90 spectrum."},
                {"id": "c", "text": "By subtracting the CH signals (from DEPT-90) from the positive signals in the DEPT-135 spectrum."},
                {"id": "d", "text": "By looking at the broadband-decoupled spectrum only."},
                {"id": "e", "text": "They are the only peaks that disappear when a magnetic field is applied."}
            ],
            "correctId": "c",
            "explanation": "The source details that CH_3 carbons are identified by subtracting the CH peaks (found in DEPT-90) from the positive peaks in the DEPT-135 spectrum."
        },
        {
            "id": "q36",
            "question": "Why can an MRI instrument \"see through\" bones, such as the skull, to visualize soft tissue?",
            "options": [
                {"id": "a", "text": "Because bones are transparent to radio waves."},
                {"id": "b", "text": "Because the calcium present in bones is not NMR active."},
                {"id": "c", "text": "Because bone has a higher proton density than water."},
                {"id": "d", "text": "Because X-rays are used in conjunction with MRI."},
                {"id": "e", "text": "Because bone tissue is destroyed by the magnetic field."}
            ],
            "correctId": "b",
            "explanation": "The source states that because calcium in bones is not NMR active, the MRI instrument can see through them to visualize the soft tissue underneath."
        },
        {
            "id": "q37",
            "question": "Bombardment of molecules by an electron beam with which energy range typically results in the formation of the molecular ion (M^{+\\cdot})?",
            "options": [
                {"id": "a", "text": "1–5 eV"},
                {"id": "b", "text": "10–15 eV"},
                {"id": "c", "text": "50–70 eV"},
                {"id": "d", "text": "100–200 eV"},
                {"id": "e", "text": "1000 eV"}
            ],
            "correctId": "b",
            "explanation": "The source states that bombardment with energy between 10–15 eV usually results in ionization by removal of one electron (Molecular ion formation)."
        },
        {
            "id": "q38",
            "question": "The presence of Sulfur in a molecule is suggested if the M+2 peak is:",
            "options": [
                {"id": "a", "text": "Equal in height to M^+."},
                {"id": "b", "text": "One-third the height of M^+."},
                {"id": "c", "text": "Larger than usual, specifically about 4% of the M^+ peak."},
                {"id": "d", "text": "Completely absent."},
                {"id": "e", "text": "Found at exactly m/z = 127."}
            ],
            "correctId": "c",
            "explanation": "According to the \"Easily Recognized Elements\" chart, Sulfur is indicated by an M+2 peak that is larger than usual, approximately 4% of the M^+ peak."
        },
        {
            "id": "q39",
            "question": "What is the primary information determined by High-Resolution Mass Spectrometry?",
            "options": [
                {"id": "a", "text": "The boiling point of the analyte."},
                {"id": "b", "text": "The exact molecular formula."},
                {"id": "c", "text": "The number of equivalent protons."},
                {"id": "d", "text": "The color of the ionized fragments."},
                {"id": "e", "text": "The concentration of the sample in mg/mL."}
            ],
            "correctId": "b",
            "explanation": "The source lists \"Molecular formula (HRMS)\" as one of the key pieces of information that can be determined by mass spectrometry."
        },
        {
            "id": "q40",
            "question": "If a compound has a molecular ion with an even mass (e.g., m/z = 60) and contains nitrogen, what does the Nitrogen Rule conclude?",
            "options": [
                {"id": "a", "text": "It must contain exactly one nitrogen."},
                {"id": "b", "text": "It contains an odd number of nitrogens."},
                {"id": "c", "text": "It contains an even number of nitrogen atoms (including zero)."},
                {"id": "d", "text": "It must be an aromatic amine."},
                {"id": "e", "text": "It cannot contain any carbon atoms."}
            ],
            "correctId": "c",
            "explanation": "The Nitrogen Rule states that if the m/z number is even, the number of nitrogens in the compound is even or zero. The example provided is ethylenediamine (m/z = 60), which has two nitrogen atoms."
        }
    ]

    mass_spec_str = "'mass_spectrometry': " + json.dumps(mcqs_data, indent=4) + ",\n  "

    # Insert it into MCQS
    app_code = app_code.replace("const MCQS = {\n", "const MCQS = {\n  " + mass_spec_str)

    with open('src/App.tsx', 'w', encoding='utf-8') as f:
        f.write(app_code)

if __name__ == '__main__':
    main()
