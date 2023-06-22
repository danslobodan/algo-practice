import { chunk } from '../array-chunk';

it('Correctly splits an even sized array into even sized chunks', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4],
    ]);
});
it('Correctly splits an odd sized array into even sized chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
});
it('Correctly splits an even sized array into even odd chunks', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8],
    ]);
});

it('Correctly splits an odd sized array into odd sized chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([
        [1, 2, 3],
        [4, 5],
    ]);
});

it('Retuns one chunk if the array is smaller than given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
});
