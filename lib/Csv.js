function csv(data) {
  let items = Object.keys(data[0]);
  let csv = '';
  let ctr;

  csv += items.join(',');
  csv += '\n';

  data.forEach(obj => {
    ctr = 0;
    items.forEach(item => {
      if (ctr > 0) csv += ',';

      // If the field type is a String, should be to include ""
      csv += typeof obj[item] === 'string' && obj[item].includes(',')
        ? `"${obj[item]}"`
        : obj[item];
      ctr++;
    });
    csv += '\n';
  });

  return csv;
}

module.exports = csv;