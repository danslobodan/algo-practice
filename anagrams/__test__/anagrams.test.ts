import { anagrams } from '../anagrams';

it('Returns true for two words that are anagrams of each other', () => {
    expect(anagrams('rail safety', 'fairy tales')).toBe(true);
    expect(anagrams('hello', 'llohe')).toBe(true);
});

it('Ignores capitalisation, spaces and puctuation', () => {
    expect(anagrams('RAIL! SAFETY!', 'fairy tales')).toBe(true);
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBe(true);
});

it('Returns false for two words that are not anagrams of each other', () => {
    expect(anagrams('Hi there', 'Bye there')).toBe(false);
    expect(anagrams('One One', 'Two two two')).toBe(false);
    expect(anagrams('One one', 'One one c')).toBe(false);
    expect(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')).toBe(
        false
    );
});
