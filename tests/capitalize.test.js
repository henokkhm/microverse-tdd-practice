const { capitalize } = require('../index.js');

describe('capitalize', () => {
  it('returns empty string when input is an empty string', () => {
    const str = '';

    const capitalized = capitalize(str);

    expect(capitalized).toEqual('');
  });

  it('returns capitalized letter for a string of length 1', () => {
    const str = 'a';

    const capitalized = capitalize(str);

    expect(capitalized).toEqual('A');
  });

  it('returns capitalized word for a string of length 2', () => {
    const str = 'ab';

    const capitalized = capitalize(str);

    expect(capitalized).toEqual('Ab');
  });
});
