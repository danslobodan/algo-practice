import { maxChar } from '../max-char';

it('Returns the most common character in a string', () => {
    expect(maxChar('Hello There!')).toBe('e');
});

it('Handles numbers', () => {
    expect(maxChar('1234555')).toEqual('5');
});

it('Handles empty string', () => {
    expect(maxChar('')).toBe('');
});
