export const maxChar = (str: string): string => {
    const result = str.split('').reduce(
        (acc, char) => {
            if (!acc.map[char]) acc.map[char] = 0;

            acc.map[char]++;

            const { maxValue } = acc;

            if (!acc.maxValue.char || acc.map[char] > maxValue.value)
                return {
                    map: acc.map,
                    maxValue: {
                        char,
                        value: acc.map[char],
                    },
                };

            return acc;
        },
        {
            map: {},
            maxValue: {
                char: '',
                value: 0,
            },
        } as {
            map: { [key: string]: number };
            maxValue: {
                char: string;
                value: number;
            };
        }
    );

    return result.maxValue.char;
};
