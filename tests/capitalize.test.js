const { capitalize } = require('../index.js');

describe('capitalize', () => {
  it('returns empty string when input is an empty string', () => {
    const str = '';

    const capitalized = capitalize(str);

    expect(capitalized).toEqual('');
  });
});
