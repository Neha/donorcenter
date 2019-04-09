const fs = require('fs');
const chalk = require('chalk');
const config = require('../config/config');
const zipCodeService = require('../service/zipcode');
const getSelectDonor = require('../commands/getSelectDonor');
const Table = require('cli-table');

const printProjectTable = data => {
  const table = new Table({
    head: ['Titlee', 'Location'],
    colWidths: [30, 120]
  });
  for (let index = 0; index < data.length; index++) {
    const { latitude: lat, longitude: long, title } = data[index];
    table.push([title, `${getGooglePlaceLink({ lat, long })}`]);
  }
  return table.toString();
};

const getGooglePlaceLink = params => {
  const { lat, long } = params;

  return `${config.GOOGLEPLACE_API}${lat},${long}?key=${config.GOOGLE_KEY}`;
};

const getProposalList = async zipcode => {
  try {
    const zipcodeResponse = await zipCodeService(zipcode);
    console.log(chalk.blue(`These are the projects for the Zipcode - ${zipcode}.`));
    console.log(printProjectTable(zipcodeResponse.proposals));
  } catch (error) {
    console.log(chalk.red('Unable fetch project right now please try again after sometime.'));
  }
};

const printUsersList = () => {
  let content = fs.readFileSync('registeredusers.json');
  content = JSON.parse(content);

  const names = content.map(item => {
    return item.first_name;
  });

  getSelectDonor(names).then(zipcode => {
    getProposalList(zipcode);
  });
};

module.exports = {
  getProposalList,
  printUsersList,
  getGooglePlaceLink
};
