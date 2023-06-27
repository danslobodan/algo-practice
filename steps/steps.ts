// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character. Make sure the
// step has spaces on the right hand side!

// Examples:

// steps(2)
// '# '
// '##'

// steps(3)
// '#  '
// '## '
// '###'

// steps(4)
// '#   '
// '##  '
// '### '
// '####'

export const steps = (n: number): string[] => {
    const lines: string[] = [];

    for (let i = 0; i < n; i++) {
        const pounds = ''.padEnd(i + 1, '#');
        const step = pounds.padEnd(n, ' ');
        lines.push(step);
        console.log(step);
    }

    return lines;
};

// Solution #1
// for (let i = 0; i < n; i++) {
//     const pounds = ''.padEnd(i + 1, '#');
//     const step = pounds.padEnd(n, ' ');
//     console.log(step);
// }

// Solution #2
// export const steps = (n: number, row: number = 0, stair: string = '') => {
//     if (n === row) {
//         return;
//     }

//     if (n === stair.length) {
//         console.log(stair);
//         steps(n, row + 1);
//         return;
//     }

//     const add = stair.length <= row ? '#' : ' ';
//     steps(n, row, stair + add);
// };
