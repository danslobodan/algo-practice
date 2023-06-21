import { palindrome } from '../palindrome';

it('Returns true if the string is a palindrome', () => {
    expect(palindrome('abba')).toEqual(true);
});

it('Returns false if the string is not a palindrome', () => {
    expect(palindrome('abcdefg')).toEqual(false);
});
