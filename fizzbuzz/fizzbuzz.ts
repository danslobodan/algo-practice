// Given a number, go through numbers of
// one to that number and
// print 'fizz' if the number is a multiple of 3
// print 'buzz' if the number is a multiple of 5
// print 'fizzbuzz' if it's a multiple of both 3 and 5

export const fizzBuzz = (n: number) => {
    for (let i = 1; i <= n; i++) {
        const fizz = i % 3 === 0;
        const buzz = i % 5 === 0;

        if (fizz && buzz) {
            console.log('fizzbuzz');
        } else if (fizz) {
            console.log('fizz');
        } else if (buzz) {
            console.log('buzz');
        } else console.log(i);
    }
};
