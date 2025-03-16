function applyEffect(effect) {
    const textArea = document.getElementById('textArea');
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = textArea.value.substring(start, end);
    let effectStartTag = '';
    let effectEndTag = '';

    if (effect === 'bold') {
        effectStartTag = '<b>';
        effectEndTag = '</b>';
    } else if (effect === 'italic') {
        effectStartTag = '<i>';
        effectEndTag = '</i>';
    } else if (effect === 'underline') {
        effectStartTag = '<u>';
        effectEndTag = '</u>';
    }

    textArea.value = textArea.value.substring(0, start) +
        effectStartTag + selectedText + effectEndTag +
        textArea.value.substring(end);
}