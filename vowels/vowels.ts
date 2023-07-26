// Write a function that returns the number of vowels
// used in a string. Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'

// Examples
// vowels('Hi There') ---> 3
// vowels('Why do you ask?') ---> 4
// vowels('Why') ---> 0

export const vowels = (str: string): number => {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
};

// Solution #1
// export const vowels = (str: string): number => {
//     const vowelArray = ['a', 'e', 'i', 'o', 'u'];
//     return str.split('').filter((ch) => vowelArray.includes(ch.toLowerCase()))
//         .length;
// };

// Solution #2
// export const vowels = (str: string): number => {
//     let count = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     for (let ch of str.toLowerCase()) {
//         if (checker.includes(ch)) count++;
//     }

//     return count;
// };

// Solution #3
// export const vowels = (str: string): number => {
//     const matches = str.match(/[aeiou]/gi);

//     return matches ? matches.length : 0;
// };
