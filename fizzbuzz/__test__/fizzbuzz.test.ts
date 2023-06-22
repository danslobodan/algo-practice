import { fizzBuzz } from '../fizzbuzz';

it('Called with 5 prints out 5 statements, fizz after the number 2 and buzz after the number 4', () => {
    expect(fizzBuzz(5));
});

it('Called with 15 prints out 15 statements, fizzbuzz after number 14', () => {
    expect(fizzBuzz(15));
});
