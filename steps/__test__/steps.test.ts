import { steps } from '../steps';

it('Prints out the correct shape when presented with a positive number N', () => {
    expect(steps(2)).toEqual(['# ', '##']);
    expect(steps(3)).toEqual(['#  ', '## ', '###']);
    expect(steps(4)).toEqual(['#   ', '##  ', '### ', '####']);
});
