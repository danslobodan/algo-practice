import { reverseInt } from '../reverse-int';

it('Handles 0 as an input', () => {
    expect(reverseInt(0)).toEqual(0);
});

it('Returns a single digit positive number', () => {
    expect(reverseInt(5)).toEqual(5);
});

it('Reverses a positive number', () => {
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(981)).toEqual(189);
});

it('Reverses a negative number', () => {
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
});
