import { spiralMatrix } from '../spiral-matrix';

it('Returns a spiral matrix for even numbers', () => {
    expect(spiralMatrix(2)).toStrictEqual([
        [1, 2],
        [4, 3],
    ]);
    expect(spiralMatrix(4)).toStrictEqual([
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
    ]);
});

it('Returns a spiral matrix for odd numbers', () => {
    expect(spiralMatrix(1)).toStrictEqual([[1]]);
    expect(spiralMatrix(3)).toStrictEqual([
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
    ]);
});

// matrix(2)
// [[1, 2],
// [4, 3]]

// matrix(3)
// [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]

// matrix(4)
// [[1, 2, 3, 4],
// [12, 13, 14, 5],
// [11, 16, 15, 6],
// [10, 9, 8, 7]]
