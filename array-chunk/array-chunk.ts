// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

export const chunk = (array: number[], size: number): number[][] => {
    const chunks: number[][] = [];

    for (let i = 0; i < array.length; i += size) {
        const oneChunk = array.slice(i, i + size);
        chunks.push(oneChunk);
    }

    return chunks;
};

// Solution #1
// const chunks: number[][] = [];

// for (let i = 0; i < array.length; i += size) {
//     const oneChunk = array.slice(i, i + size);
//     chunks.push(oneChunk);
// }

// return chunks;

// Solution #2
// const chunks: number[][] = [];

// array.forEach((number, i) => {
//     const subarray = Math.floor(i / size);

//     if (!chunks[subarray]) chunks[subarray] = [];

//     chunks[subarray].push(number);
// });

// return chunks;
