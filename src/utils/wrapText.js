export const wrapText = (text) => { 
    let newText = text.replace(/\r/g, " ");
    newText = text.replace(/([^\n]{1,250})\s/g, '$1\n')
    return newText;
}