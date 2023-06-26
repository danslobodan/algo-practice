import { capitalize } from '../capitalize';

it('Capitalizes all words in a sentence', () => {
    expect(capitalize('a short sentence')).toBe('A Short Sentence');
    expect(capitalize('A lazy fox')).toBe('A Lazy Fox');
});

it('Correctly accounts for punctuation', () => {
    expect(capitalize('look, it is working!')).toBe('Look, It Is Working!');
    expect(capitalize('even,without,spaces')).toBe('Even,Without,Spaces');
});
