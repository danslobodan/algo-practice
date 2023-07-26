import { pyramid } from '../pyramid';

it('Prints out the correct shape of the pyramid for a positive number n', () => {
    expect(pyramid(1)).toEqual(['#']);
    expect(pyramid(2)).toEqual([' # ', '###']);
    expect(pyramid(3)).toEqual(['  #  ', ' ### ', '#####']);
});
