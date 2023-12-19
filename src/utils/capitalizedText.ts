
const capitalizedText = (text: string) => {
    const words = text.split(' '); // Split the string into words using space as a delimiter

    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(' ');
}

export default capitalizedText