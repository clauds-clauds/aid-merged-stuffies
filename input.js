// Your "Input" tab should look like this
const modifier = (text) => {
    // Your other input modifier scripts go here (preferred)
    text = AutoCards("input", text);
    const newText = text.replace(/\bQw\b(?:\s+([^\n]+))?/g, (match, p1) => {
        if (p1) {
            return `[Describe: ${p1.trim()}]\n`;
        }
        return `[Describe:]`;
    });
    // Your other input modifier scripts go here (alternative)
    return { text: newText };
};

modifier(text);