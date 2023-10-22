export default function firstWordCapital(word: string) {
    return word.replace(/\b\w/g, (char) => char.toUpperCase());
}
