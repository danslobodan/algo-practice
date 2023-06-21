// Given a string, return a new string with the reversed
// order of characters

// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgnteerG

export const reverse = (str: string) => {
    return str.split('').reduce((reversed, char) => char + reversed, '');
};

// solution #1
// export const reverse = (str: string) => {
//     return str.split('').reverse().join('');
// };

// solution #2
// export const reverse = (str: string) => {
//     let reversed = '';
//     for (let character of str) reversed = character + reversed;
//     return reversed;
// };

// solution #3
// export const reverse = (str: string) => {
//     return str.split('').reduce((reversed, char) => char + reversed, '');
// };

// solution #4
// export const reverse = (str: string) => {
//     const result = [];
//     for (let i = str.length; i >= 0; i--) result.push(str.charAt(i));
//     return result.join('');
// };
