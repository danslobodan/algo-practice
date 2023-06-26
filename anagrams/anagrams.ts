// Check to see if two provided string are anagrams of each other
// One string is an anagram of another if it uses the same characters
// in the same quantity.

// Only consider characters, not spaces or punctuation. Consider
// capital letters to be the same as lower case

export const anagrams = (stringA: string, stringB: string): boolean => {
    const mapA = createMap(prepare(stringA));
    const mapB = createMap(prepare(stringB));

    const charsA = Object.keys(mapA);
    const charsB = Object.keys(mapB);

    if (charsA.length !== charsB.length) return false;

    return charsA.every((ch) => mapA[ch] === mapB[ch]);
};

const prepare = (str: string) => {
    return str.replace(/[^\w]/g, '').toLowerCase();
};

interface CharMap {
    [char: string]: number;
}

const createMap = (str: string): CharMap => {
    return str.split('').reduce((acc, ch) => {
        if (!acc[ch]) acc[ch] = 0;

        acc[ch]++;
        return acc;
    }, {} as CharMap);
};
