import re
import sys

file_path = r"c:\Users\MSI\OneDrive\Desktop\untitled\src\App.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Verify that we can find both ir_spectroscopy and uv_spectroscopy
idx_ir = content.find("'ir_spectroscopy': [")
idx_uv = content.find("'uv_spectroscopy': [")

if idx_ir == -1 or idx_uv == -1:
    print(f"Error: Could not find one of the blocks. idx_ir={idx_ir}, idx_uv={idx_uv}")
    sys.exit(1)

if idx_ir > idx_uv:
    print("Error: ir_spectroscopy is after uv_spectroscopy. Unhandled case.")
    sys.exit(1)

# Delete from idx_ir to idx_uv
content = content[:idx_ir] + content[idx_uv:]

# The new IR MCQS
new_ir_mcqs = """'ir_spectroscopy': [
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
        { "id": "a", "text": "absorptions at 3500 cm\u207b\u00b9 and 1650 cm\u207b\u00b9." },
        { "id": "b", "text": "no absorptions at 3500 cm\u207b\u00b9 and 1650 cm\u207b\u00b9." },
        { "id": "c", "text": "no absorption around 3500 cm\u207b\u00b9." },
        { "id": "d", "text": "no absorption around 1650 cm\u207b\u00b9." },
        { "id": "e", "text": "absorption at 2200 cm\u207b\u00b9 and 3100 cm\u207b\u00b9." }
      ],
      "correctId": "c",
      "explanation": "Isopropanol is an alcohol and contains an O-H group that absorbs strongly in the 3550\u20133200 cm\u207b\u00b9 region. Acetone is a ketone and lacks this hydroxyl group. The complete absence of the 3500 cm\u207b\u00b9 peak confirms that all the alcohol has been converted."
    },
    {
      "id": "q3",
      "question": "3. Concerning the following IR chart, the peaks at 3291 cm\u207b\u00b9 and 3368 cm\u207b\u00b9 represent the presence of the:",
      "image": mcq1,
      "options": [
        { "id": "a", "text": "Carbonyl group." },
        { "id": "b", "text": "Primary amine group." },
        { "id": "c", "text": "Hydroxyl group." },
        { "id": "d", "text": "Secondary amine group." },
        { "id": "e", "text": "ether group." }
      ],
      "correctId": "b",
      "explanation": "Primary amines (\u2212NH\u2082) are characterized by two weak-to-medium absorption bands in the 3400\u20133300 cm\u207b\u00b9 region. One peak represents asymmetrical stretching and the other symmetrical stretching."
    },
    {
      "id": "q4",
      "question": "4. Regarding IR spectroscopy, SO\u2082 is a nonlinear molecule. How many vibrational degrees of freedom does it have?",
      "options": [
        { "id": "a", "text": "5." },
        { "id": "b", "text": "4." },
        { "id": "c", "text": "6." },
        { "id": "d", "text": "3." },
        { "id": "e", "text": "7." }
      ],
      "correctId": "d",
      "explanation": "For nonlinear molecules, the number of fundamental vibrations (degrees of freedom) is calculated as 3n \u2212 6. Since SO\u2082 consists of 3 atoms, the calculation is (3 \u00d7 3) \u2212 6 = 3."
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
      "explanation": "In strained rings where the bond angle is less than 120\u00b0, the interaction with C-C bond stretching increases the energy required for C=O stretching. This leads to a shift to higher wavenumbers and higher energy."
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
      "explanation": "Hooke\u2019s Law calculates the relationship between the wavenumber of oscillation, the atomic masses, and the bond force constant. Both factors are essential components of the frequency equation."
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
      "explanation": "The force constant (f) represents the strength of the bond. Single bonds have a constant of 5 \u00d7 10^5, double bonds 10 \u00d7 10^5, and triple bonds 15 \u00d7 10^5 dyne/cm. Frequency is directly proportional to the square root of this force constant."
    },
    {
      "id": "q9",
      "question": "9. The fingerprint region is typically between:",
      "options": [
        { "id": "a", "text": "Typically below 500 cm\u207b\u00b9." },
        { "id": "b", "text": "Typically between 1500\u20134000 cm\u207b\u00b9." },
        { "id": "c", "text": "Typically between 400\u20131300 cm\u207b\u00b9." },
        { "id": "d", "text": "Useless for identifying functional groups." },
        { "id": "e", "text": "None of the above." }
      ],
      "correctId": "c",
      "explanation": "The IR spectrum is split into the functional group region (4000\u20131300 cm\u207b\u00b9) and the fingerprint region (1300\u2013400 cm\u207b\u00b9). The fingerprint region is highly specific for identity because no two compounds (except enantiomers) give the same spectrum there."
    },
    {
      "id": "q10",
      "question": "10. What is the value of force constant for HCl (1.63 \u00d7 10\u207b\u00b2\u2077 Kg), and the observed frequency is 8.67 \u00d7 10\u00b9\u00b3 Hz?",
      "options": [
        { "id": "a", "text": "4.38 dyn \u00c5\u207b\u00b9." },
        { "id": "b", "text": "4.83 m dyn \u00c5\u207b\u00b9." },
        { "id": "c", "text": "8.43 dynes cm\u207b\u00b9." },
        { "id": "d", "text": "483 \u00b5m\u207b\u00b9." },
        { "id": "e", "text": "4.83 dynes cm\u207b\u00b9." }
      ],
      "correctId": "e",
      "explanation": "This is a direct application of Hooke\u2019s Law, which relates frequency, mass, and the force constant. Plugging the provided values into the formula yields a force constant of approximately 4.83."
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
      "explanation": "Anhydrides have the highest frequency (up to 1818 cm\u207b\u00b9), followed by acid halides (~1800 cm\u207b\u00b9), and then esters (~1735 cm\u207b\u00b9). Amides have the lowest frequency (~1650 cm\u207b\u00b9) because of the resonance effect."
    },
    {
      "id": "q12",
      "question": "12. Which of the following compounds best fits the following spectral data? MS: molecular ion at m/z = 83. The IR spectrum shows a sharp, strong absorption at 2235 cm\u207b\u00b9.",
      "options": [
        { "id": "a", "text": "A (An amine)." },
        { "id": "b", "text": "B (A nitrile)." },
        { "id": "c", "text": "C (An alcohol/nitrile)." },
        { "id": "d", "text": "D (An alkyne/amine)." },
        { "id": "e", "text": "E (An amide)." }
      ],
      "correctId": "b",
      "explanation": "Absorption in the 2260\u20132222 cm\u207b\u00b9 region is the definitive characteristic of the nitrile (C \u2261 N) functional group. Compound B is a simple nitrile matching this data."
    },
    {
      "id": "q13",
      "question": "13. Concerning the following IR chart, the shape of the peak in the box (3300\u20132500 cm\u207b\u00b9) represent the presence of the:",
      "image": mcq2,
      "options": [
        { "id": "a", "text": "Carbonyl group." },
        { "id": "b", "text": "Aliphatic amine group." },
        { "id": "c", "text": "Hydroxyl group." },
        { "id": "d", "text": "Carboxylic acid group." },
        { "id": "e", "text": "primary amine." }
      ],
      "correctId": "d",
      "explanation": "Carboxylic acid dimers are known to display very broad, intense O-H stretching absorptions that span the 3300\u20132500 cm\u207b\u00b9 region."
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
        { "id": "c", "text": "Stretching vibrational mode occurs between 4000 and 400 cm\u207b\u00b9." },
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
      "question": "17. Which of the following statement represent the relationship between the wave number and the reduced mass (\u03bc) of IR absorption?",
      "options": [
        { "id": "a", "text": "Wave number is directly proportional to reduced mass." },
        { "id": "b", "text": "Wave number is directly proportional to square of reduced mass." },
        { "id": "c", "text": "Wave number is independent of the reduced mass." },
        { "id": "d", "text": "Wave number is inversely proportional to reduced mass." },
        { "id": "e", "text": "Wave number is inversely proportional to square of reduced mass." }
      ],
      "correctId": "d",
      "explanation": "Per Hooke's Law, the wavenumber is inversely proportional to the mass of the atoms (\u03bd\u0304 \u221d 1/\u221a\u03bc); thus, as mass increases, the wavenumber decreases."
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
      "question": "19. Which of the following compounds would be expected to show broad IR bands at 3300 and 1600 cm\u207b\u00b9?",
      "options": [
        { "id": "a", "text": "CH\u2082=CH-CH\u2082-CH\u2082OH." },
        { "id": "b", "text": "CH\u2082=CH-CH\u2082-CH\u2082-NH\u2082." },
        { "id": "c", "text": "CH\u2083-CH\u2082-CH\u2082-CH\u2082-C \u2261 N." },
        { "id": "d", "text": "CH\u2083-C \u2261 C-CH\u2082-CH\u2083." },
        { "id": "e", "text": "CH \u2261 C-CH\u2082-CH\u2082-CH\u2083." }
      ],
      "correctId": "b",
      "explanation": "Primary amines show N-H stretching at 3300 cm\u207b\u00b9 and N-H bending (scissoring) at 1600 cm\u207b\u00b9. Alcohols (a) would show O-H at 3300 but not the 1600 amine bend."
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
      "id": "q22",
      "question": "22. Regarding IR spectroscopy, which statement is true about the frequency of the following lactones (1=unsaturated 6-ring, 2=saturated 5-ring, 3=saturated 6-ring)?",
      "options": [
        { "id": "a", "text": "The compound 1 has lower frequency than compound 2 which in turn lower than compound 3" },
        { "id": "b", "text": "The compound 1 has lower frequency than compound 3 which in turn lower than compound 2" },
        { "id": "c", "text": "The compound 2 has lower frequency than compound 1 which in turn lower than compound 3" },
        { "id": "d", "text": "The compound 3 has lower frequency than compound 2 which in turn lower than compound 1" },
        { "id": "e", "text": "The compound 3 has lower frequency than compound 1 which in turn lower than compound 2." }
      ],
      "correctId": "e",
      "explanation": "Saturated 6-membered rings (3) are \\"normal\\" (~1735). Conjugated double bonds (1) lower the frequency. However, ring strain in the 5-membered ring (2) significantly increases the energy and frequency (~1770), making it the highest."
    },
    {
      "id": "q23",
      "question": "23. Given below four isomers (C\u2084H\u2088O) and one IR spectrum. Identify the isomer to which the spectrum is corresponded.",
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
"""

# Insert the new content right at idx_ir
content = content[:idx_ir] + new_ir_mcqs + content[idx_ir:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed App.tsx successfully.")
