const csv = require('../lib/Csv');

const mockData = [
  [
    { foo: 'bar', choo: 'moo' },
    { foo: 'ber', choo: 'muu' },
  ],
  [
    { foo: 'bar-bar', choo: 'moo-moo' },
    { foo: 'ber-ber', choo: 'muu-muu' },
  ],
];

test('Should return a csv format from an array of object', () => {
  const result = 'foo,choo\nbar,moo\nber,muu\n';
  expect(csv(mockData[0])).toBe(result);
});

test('Should return a csv splitted by semicolons', () => {
  const result = 'foo;choo\nbar;moo\nber;muu\n';
  expect(csv(mockData[0], {
    separator: ';',
  })).toBe(result);
});

test('Should return a csv splitted by hyphens', () => {
  const result = 'foo-choo\n"bar-bar"-"moo-moo"\n"ber-ber"-"muu-muu"\n';
  expect(csv(mockData[1], {
    separator: '-',
  })).toBe(result);
});
