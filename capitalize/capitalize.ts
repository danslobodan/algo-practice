// Write a function that accepts a string, and capitalizes the first letter
// of each word in the string then return the capitalized string

export const capitalize = (str: string): string => {
    const chars = str.split('');
    return chars
        .map((ch, i) => {
            if (i === 0) return ch.toUpperCase();

            if (ch.match(isLetterRegex) && !chars[i - 1].match(isLetterRegex))
                return ch.toUpperCase();

            return ch;
        })
        .join('');
};

const isLetterRegex = /[A-Za-z]/g;

// Solution #1
// NOTE - this solution does take into account sentences where
// space is ommited for whatever reason!
// e.g. when a comma, semicolon or fullstop is used instead of a space
// return str
//     .split(' ')
//     .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
//     .join(' ');
