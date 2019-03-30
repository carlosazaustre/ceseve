function csv(data) {
  const items = Object.keys(data[0]);
  let result = '';

  result += items.join(',');
  result += '\n';

  data.forEach((obj) => {
    let ctr = 0;
    items.forEach((item) => {
      if (ctr > 0) result += ',';

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
