const csv = require('../lib/Csv');

test('Should return a csv format from an array of object', () => {
  const data = [
    { foo: 'bar', choo: 'moo' },
    { foo: 'ber', choo: 'muu' },
  ];

  const result = 'foo,choo\nbar,moo\nber,muu\n';

  expect(csv(data)).toBe(result);
});
