import { fib } from '../fib';

it('Returns an n-th entry in the fibonacci series', () => {
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(7)).toBe(13);
});
