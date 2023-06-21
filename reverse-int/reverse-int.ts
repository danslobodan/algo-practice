// Given an integer, return an integer that is the reverse
// ordering of numbers

export const reverseInt = (num: number) => {
    if (num < 10 && num >= 0) return num;

    const sign = Math.sign(num);

    const reversedStr = num.toString().split('').reverse().join('');
    return parseInt(reversedStr) * sign;
};
