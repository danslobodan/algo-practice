import { vowels } from '../vowels';

it('Returns the correct number of vowels', () => {
    expect(vowels('Hi There')).toBe(3);
    expect(vowels('Why do you ask?')).toBe(4);
    expect(vowels('Why')).toBe(0);
});

it('Counts capital vowels', () => {
    expect(vowels('A book')).toBe(3);
});
