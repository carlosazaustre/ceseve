const defaults = require('defaults');

function csv(data, options) {
  // eslint-disable-next-line no-param-reassign
  options = defaults(options, {
    separator: ',',
  });

  const items = Object.keys(data[0]);
  let result = '';

  result += items.join(options.separator);
  result += '\n';

  data.forEach((obj) => {
    let ctr = 0;
    items.forEach((item) => {
      if (ctr > 0) result += options.separator;

      // If the field type is a String, should be to include ""
      result += typeof obj[item] === 'string' && obj[item].includes(',')
        ? `"${obj[item]}"`
        : obj[item];
      ctr += 1;
    });
    result += '\n';
  });

  return result;
}

module.exports = csv;
