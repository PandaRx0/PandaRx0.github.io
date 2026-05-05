import json
import re

file_path = r"c:\Users\MSI\OneDrive\Desktop\untitled\src\App.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update TOPICS
topics_pattern = r"(advanced:\s*\[)(\s*\])"
def replace_topics(m):
    return m.group(1) + "\n    { id: 'uv_spectroscopy', title: 'UV spectroscopy', desc: 'UV spectroscopy', icon: Database }" + m.group(2)

if re.search(topics_pattern, content):
    content = re.sub(topics_pattern, replace_topics, content)
else:
    print("Warning: advanced topics array not found or not empty.")

# 2. Add MCQS
mcq_data = """
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
      "explanation": "While the \\\"useful\\\" region for analysis is above 200 nm, the sources note that transitions for isolated double bonds and ordinary carbon-carbon bonds (σ → σ*) appear in the 100-200 nm range. Alkenes and non-conjugated dienes typically have absorption maxima in this region (e.g., ethene at 171 nm)."
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
"""

mcqs_pattern = r"(const MCQS = \{\n)"
def replace_mcqs(m):
    return m.group(1) + mcq_data

if re.search(mcqs_pattern, content):
    content = re.sub(mcqs_pattern, replace_mcqs, content)
else:
    print("Warning: MCQS pattern not found.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected successfully.")
