import { reverse } from './reverse-string';

it('Returns a correctly reversed string', () => {
    const apple = reverse('apple');
    expect(apple).toEqual('leppa');

    const hello = reverse('hello');
    expect(hello).toEqual('olleh');

    const greetings = reverse('Greetings!');
    expect(greetings).toEqual('!sgnteerG');
});
