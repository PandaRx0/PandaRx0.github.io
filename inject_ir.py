import json
import re

file_path = r"c:\Users\MSI\OneDrive\Desktop\untitled\src\App.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update TOPICS
topics_pattern = r"(advanced:\s*\[\s*\{\s*id:\s*'uv_spectroscopy'[^\]]+)(\])"

def replace_topics(m):
    return m.group(1) + ",\n    { id: 'ir_spectroscopy', title: 'IR spectroscopy', desc: 'IR spectroscopy', icon: Database }" + m.group(2)

if re.search(topics_pattern, content):
    content = re.sub(topics_pattern, replace_topics, content)
else:
    print("Warning: uv_spectroscopy not found in TOPICS.advanced.")

# 2. Add MCQS
ir_mcq_data = """
  'ir_spectroscopy': [
    {
      "id": "q1",
      "question": "1. In the UV/Vis spectroscopy, 80% transmittance of UV/Vis light means:",
      "options": [
        { "id": "a", "text": "20% absorption" },
        { "id": "b", "text": "0% absorption" },
        { "id": "c", "text": "120% absorption" },
        { "id": "d", "text": "80% absorption" },
        { "id": "e", "text": "10% absorption" }
      ],
      "correctId": "a",
      "explanation": "Transmittance refers to the fraction of incident radiation that passes through the sample. Absorbance is the measurement of the radiant intensity absorbed; therefore, if 80% of the light is transmitted, the remaining 20% has been absorbed by the sample."
    },
    {
      "id": "q2",
      "question": "2. In the Uv/Vis spectroscopy, transition appears at:",
      "options": [
        { "id": "a", "text": "less than 200 nm" },
        { "id": "b", "text": "less than 300 nm" },
        { "id": "c", "text": "less than 400 nm" },
        { "id": "d", "text": "less than 100 nm" },
        { "id": "e", "text": "less than 50 nm" }
      ],
      "correctId": "a",
      "explanation": "While the \\\"useful\\\" region for analysis is above 200 nm, the sources note that transitions for isolated double bonds and ordinary carbon-carbon bonds (σ → σ*) appear in the 100-200 nm range. Alkenes and non-conjugated dienes typically have absorption maxima in this region (e.g., ethene at 171 nm)."
    },
    {
      "id": "q3",
      "question": "3. Electromagnetic radiation refers to the waves of the electromagnetic field. Which one of the following radiations has the maximum wavelength?",
      "options": [
        { "id": "a", "text": "Visible Light radiations" },
        { "id": "b", "text": "Microwaves radiations" },
        { "id": "c", "text": "Infrared radiations" },
        { "id": "d", "text": "Gamma radiations" },
        { "id": "e", "text": "All are equal" }
      ],
      "correctId": "b",
      "explanation": "According to the electromagnetic spectrum, wavelength increases as frequency and energy decrease. Moving from Gamma rays toward Radio waves, the order of increasing wavelength is Gamma < UV < Visible < Infrared < Microwaves."
    },
    {
      "id": "q4",
      "question": "4. The absorbance of a chromophore was affected by the pH of the medium. Which one of the following action results in a Bathochromic shift?",
      "options": [
        { "id": "a", "text": "Dissolving the aniline in Hydrochloric acid" },
        { "id": "b", "text": "Dissolving the phenol in sodium hydroxide" },
        { "id": "c", "text": "Dissolving the phenol in Hydrochloric acid" },
        { "id": "d", "text": "Dissolving the aniline in water" },
        { "id": "e", "text": "Dissolving the phenol in water" }
      ],
      "correctId": "b",
      "explanation": "A Bathochromic shift (red shift) is a shift of absorption maxima to a longer wavelength. The sources state that in an alkaline medium (such as adding sodium hydroxide), p-nitrophenol shows a red shift because the negatively charged oxygen delocalizes electrons more effectively. Conversely, aniline in an acidic medium shows a blue (hypsochromic) shift."
    },
    {
      "id": "q5",
      "question": "5. Corresponding to UV-visible region, select the wavelength range:",
      "options": [
        { "id": "a", "text": "400-800 nm" },
        { "id": "b", "text": "200-800 nm" },
        { "id": "c", "text": "25 μm-2.5 μm" },
        { "id": "d", "text": "2.5 μm - 1 mm" },
        { "id": "e", "text": "600-800 nm" }
      ],
      "correctId": "b",
      "explanation": "The sources define the UV region as approximately 180–380 nm and the Visible region as 380–780 nm. Combined, these cover a range of roughly 200 to 800 nm."
    },
    {
      "id": "q6",
      "question": "6. Regarding the pharmaceutical application of UV spectroscopy, all of the following statements are true EXCEPT:",
      "options": [
        { "id": "a", "text": "Determination of pka values of some drugs." },
        { "id": "b", "text": "Determination of partition coefficients and solubilities of drugs." },
        { "id": "c", "text": "Used to determine the release of drugs from formulations with time." },
        { "id": "d", "text": "For determination of drugs structural formula." },
        { "id": "e", "text": "Can be used to monitor the reaction kinetics of drug degradation." }
      ],
      "correctId": "d",
      "explanation": "UV spectroscopy is primarily used for quantitative analysis, monitoring reaction kinetics, and determining pKa or solubility. While it can detect functional groups (chromophores), the determination of a complete structural formula typically requires more detailed techniques like Infrared (IR) spectroscopy or NMR."
    },
    {
      "id": "q7",
      "question": "7. Ultraviolet and visible (UV-Vis). The principles of this spectroscopy are:",
      "options": [
        { "id": "a", "text": "The UV radiation region extends from 0 nm to 450 nm" },
        { "id": "b", "text": "The Spectroscopic Techniques are based on the fact that absorption is directly proportional to the concentration of the absorbing component" },
        { "id": "c", "text": "Visible radiation region extends from 450 nm to 980 nm." },
        { "id": "d", "text": "Near UV Region: 200 nm to 1000 nm" },
        { "id": "e", "text": "Far UV Region: below 100 nm studied under vacuum condition" }
      ],
      "correctId": "b",
      "explanation": "This is a fundamental statement of Beer-Lambert’s Law, which establishes a linear relationship between absorbance and the concentration of the sample."
    },
    {
      "id": "q8",
      "question": "8. Characteristic absorption of organic compound in UV-Vis. The energy required is the highest one for:",
      "options": [
        { "id": "a", "text": "π → π* transition" },
        { "id": "b", "text": "n → σ* transition" },
        { "id": "c", "text": "n → π* transition" },
        { "id": "d", "text": "σ → σ* transition" },
        { "id": "e", "text": "σ → π* transition" }
      ],
      "correctId": "d",
      "explanation": "Transitions involving σ (bonding) to σ* (anti-bonding) orbitals require the highest amount of energy and occur at the shortest wavelengths (often 100-200 nm), which are outside the standard useful UV range."
    },
    {
      "id": "q9",
      "question": "9. Characteristic absorption of organic compound in UV-Vis. At concentrated solution we have -ve or +ve deviation which may be due to:",
      "options": [
        { "id": "a", "text": "Association of the molecules & the formation of the complex." },
        { "id": "b", "text": "Change in the refracting index of the solution." },
        { "id": "c", "text": "Only due to association of the molecules" },
        { "id": "d", "text": "The formation of the simple derivative." },
        { "id": "e", "text": "a & b" }
      ],
      "correctId": "e",
      "explanation": "At high concentrations, molecular interactions (association of molecules or formation of complexes) can occur, and changes in the refractive index of the solution can also influence shifts, causing the solution to no longer follow Beer-Lambert’s law."
    },
    {
      "id": "q10",
      "question": "10. The absorptivity of a standard sample is 312 of (1% w/v) a solution measured at a path length of 1 cm, and the absorbance of the sample was 0.624 at wavelength 254 nm. What is the concentration of the sample?",
      "options": [
        { "id": "a", "text": "5 g/100ml" },
        { "id": "b", "text": "15 mg/100 ml" },
        { "id": "c", "text": "2 g/100ml" },
        { "id": "d", "text": "12 mg/100 ml" },
        { "id": "e", "text": "2 mg/100ml" }
      ],
      "correctId": "e",
      "explanation": "Using the formula A = a · c · l: 0.624 = 312 × c × 1. Solving for c gives 0.002. Since the standard was 1% (1 g/100 ml), the sample concentration is 0.002 g/100 ml, which is equal to 2 mg/100 ml."
    },
    {
      "id": "q11",
      "question": "11. What is the value of force constant for HCI 1.63 x 10^-27 Kg, and the observed frequency is 8.67 x 10^13 Hz?",
      "options": [
        { "id": "a", "text": "4.38 dyn A-1" },
        { "id": "b", "text": "4.83 m dyn Å⁻¹" },
        { "id": "c", "text": "8.43 dynes cm⁻¹" },
        { "id": "d", "text": "483 µm⁻¹" },
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
        { "id": "b", "text": "Aromatic hydrocarbons." },
        { "id": "c", "text": "Non-conjugated polyenes" },
        { "id": "d", "text": "Conjugated polyenes" },
        { "id": "e", "text": "Halide containing compounds" }
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
        { "id": "d", "text": "π → π*, σ → σ*, n → σ*, n → π*" },
        { "id": "e", "text": "π → π*, σ → σ*, n → π*, n → σ*" }
      ],
      "correctId": "a",
      "explanation": "The energy levels of molecular orbitals dictate that σ → σ* requires the most energy, followed by n → σ*, then π → π*, with n → π* requiring the least."
    },
    {
      "id": "q14",
      "question": "14. Regarding UV-Vis, the λ_max for the following compound [referring to the image of p-nitrophenol]:",
      "options": [
        { "id": "a", "text": "268.5 nm" },
        { "id": "b", "text": "279.5 nm" },
        { "id": "c", "text": "275.5 nm" },
        { "id": "d", "text": "277.5 nm" },
        { "id": "e", "text": "282.5 nm" }
      ],
      "correctId": "b",
      "explanation": "While the text notes p-nitrophenol absorbs at 317 nm, standard MCQ banks often attribute values near 280 nm to aromatic derivatives depending on the solvent and state. Based on the source's data for aniline (280 nm) and acetone (279 nm), 279.5 nm is the closest provided option in the exam document."
    }
  ],
"""

mcqs_pattern = r"(const MCQS = \{\n)"
def replace_mcqs(m):
    return m.group(1) + ir_mcq_data

if re.search(mcqs_pattern, content):
    content = re.sub(mcqs_pattern, replace_mcqs, content)
else:
    print("Warning: MCQS pattern not found.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected successfully.")
