if (typeof Library === 'undefined') {
    var Library = {};
}

// Your "Output" tab should look like this
const modifier = (text) => {
    if (!text || typeof text !== 'string') return { text: '' };
    text = AutoCards("output", text);
    text = delete_cliches(text);

    if (Library.enforceParagraphBreak) text = Library.enforceParagraphBreak(text);
    if (Library.separateDialogue) text = Library.separateDialogue(text);
    if (Library.removeRepeatedPhrases) text = Library.removeRepeatedPhrases(text, context, 10, 1);

    return { text: text.trim() + "\n\n" };
};
modifier(text);