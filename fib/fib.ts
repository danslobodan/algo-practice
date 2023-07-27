// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// Example: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// fib(4) === 3

export const fib = (n: number): number => {
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
};

// Solution #1
// export const fib = (n: number): number => {
//     if (n === 0) return 0;

//     if (n === 1) return 1;

//     let twoPrev = 0;
//     let prev = 1;
//     let current = 1;

//     for (let i = 1; i < n; i++) {
//         current = twoPrev + prev;

//         twoPrev = prev;
//         prev = current;
//     }

//     return current;
// };

// Solution #2
// export const fib = (n: number): number => {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }

//     return result[n];
// };

// Solution #3 - recursive
// export const fib = (n: number): number => {
//     if (n < 2) return n;

//     return fib(n - 1) + fib(n - 2);
// };
