const csv = require('../lib/Csv');

const mockData = [
  { foo: 'bar', choo: 'moo' },
  { foo: 'ber', choo: 'muu' },
];

test('Should return a csv format from an array of object', () => {
  const result = 'foo,choo\nbar,moo\nber,muu\n';
  expect(csv(mockData)).toBe(result);
});

test('Should return a csv splitted by semicolons', () => {
  const result = 'foo;choo\nbar;moo\nber;muu\n';
  expect(csv(mockData, {
    separator: ';',
  })).toBe(result);
});
