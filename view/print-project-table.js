const Table = require('cli-table');
const getGooglePlaceLink = require('./get-google-place-link');

const printProjectTable = data => {
  const table = new Table({
    head: ['Title', 'Location'],
    colWidths: [30, 120]
  });

  for (let index = 0; index < data.length; index++) {
    const { latitude: lat, longitude: long, title } = data[index];
    table.push([title, `${getGooglePlaceLink({ lat, long })}`]);
  }
  console.log(table);
  return table.toString();
};

module.exports = printProjectTable;
