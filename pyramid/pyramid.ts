// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides

// Examples:
// pyramid(1)
// '#' 0 spaces, 1 pound

// pyramid(2)
// ' # ' - 1 space, 1 pound
// '###' - 0 spaces, 3 pounds

// pyramid(3)
// '  #  ' - 2 spaces, 1 pound
// ' ### ' - 1 space, 3 pounds
// '#####' - 0 spaces, 5 pounds

// spaces = n - 1 - i
// pounds = 2 * i + 1

export const pyramid = (n: number): string[] => {
    const lines: string[] = [];

    for (let i = 0; i < n; i++) {
        const spaces = n - 1 - i;
        const pounds = 2 * i + 1;

        const step = ''
            .padEnd(spaces, ' ')
            .padEnd(pounds + spaces, '#')
            .padEnd(pounds + spaces * 2, ' ');

        console.log(step);
        lines.push(step);
    }

    return lines;
};

// Solution #1
// export const pyramid = (n: number): string[] => {
//     const lines: string[] = [];

//     for (let i = 0; i < n; i++) {
//         const spaces = n - 1 - i;
//         const pounds = 2 * i + 1;

//         const step = ''
//             .padEnd(spaces, ' ')
//             .padEnd(pounds + spaces, '#')
//             .padEnd(pounds + spaces * 2, ' ');

//         console.log(step);
//         lines.push(step);
//     }

//     return lines;
// };

// Solution #2 - recursive
// export const pyramid = (n: number, row = 0, level = '') => {
//     if (n === row) return;

//     if (level.length === 2 * n - 1) {
//         console.log(level);
//         pyramid(n, row + 1);
//         return;
//     }

//     const midpoint = Math.floor((2 * n - 1) / 2);
//     let add;

//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = '#';
//     } else {
//         add = ' ';
//     }

//     pyramid(n, row, level + add);
// };
