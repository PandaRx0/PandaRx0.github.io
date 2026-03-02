const fs = require('fs');
const code = fs.readFileSync('src/App.tsx', 'utf8');
const startIndex = code.indexOf('const MCQS = {');
const endIndex = code.indexOf('};\n\n// --- COMPONENTS ---') !== -1
    ? code.indexOf('};\n\n// --- COMPONENTS ---')
    : (code.indexOf('};\n\n\n// --- COMPONENTS ---') !== -1 ? code.indexOf('};\n\n\n// --- COMPONENTS ---') : code.indexOf('\n// --- COMPONENTS ---') - 2);

console.log("Start:", startIndex, "End:", endIndex);
const objStr = code.substring(startIndex + 'const MCQS = '.length, endIndex + 1);

let MCQS;
try {
    // Use new Function to safely evaluate the object literal
    MCQS = new Function('return ' + objStr)();
} catch (e) {
    console.error("Failed to parse MCQS:", e);
    process.exit(1);
}

const truncated = [];
for (let subject in MCQS) {
    MCQS[subject].forEach((q, index) => {
        if (q.explanation && q.explanation.includes('...')) {
            truncated.push({
                subject,
                index,
                id: q.id,
                question: q.question,
                // options: q.options, // Might be too large, let's keep it to understand context
                options: q.options.map(o => o.id + ') ' + o.text).join(' | '),
                correctId: q.correctId,
                explanation: q.explanation
            });
        }
    });
}
fs.writeFileSync('truncated_mcqs.json', JSON.stringify(truncated, null, 2));
console.log("Extracted", truncated.length, "items.");
