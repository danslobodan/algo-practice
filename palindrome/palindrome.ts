// Given a string, return true if the string is a palindrome
// or false if it's not.
// Palindromes are strings tht form the same word if it is reversed

export const palindrome = (str: string) => {
    let i = 0;
    while (i < str.length / 2) {
        const char = str[i];
        const opposite = str[str.length - 1 - i];

        if (char !== opposite) return false;

        i++;
    }

    return true;
};

// Solution #1
// export const palindrome = (str: string) => {
//     const reversed = str.split('').reverse().join('');
//     return reversed === str;
// };

// Solution #2
// export const palindrome = (str: string) => {
//     return str.split('').every((char, i) => {
//         const opposite = str[str.length - 1 - i];
//         return opposite === char;
//     });
// };

// Solution #3
// export const palindrome = (str: string) => {
//     let i = 0;
//     while (i < str.length / 2) {
//         const char = str[i];
//         const opposite = str[str.length - 1 - i];

//         if (char !== opposite) return false;

//         i++;
//     }

//     return true;
// };
