
const useSlice = (str, numberOfWords) => {
    if (!str || typeof str !== 'string' || numberOfWords <= 0) {
        return '';
    }

    const words = str.split(' ');
    if (words.length <= numberOfWords) {
        return str;
    }
    return words.slice(0, numberOfWords).join(' ');
};
export default useSlice