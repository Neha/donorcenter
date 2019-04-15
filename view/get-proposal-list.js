const chalk = require('chalk');
const printProjectTable = require('./print-project-table');
const zipCodeService = require('../service/zipcode');

const getProposalList = async zipcode => {
  try {
    const zipcodeResponse = await zipCodeService(zipcode);
    console.log(chalk.blue(`These are the projects for the Zipcode - ${zipcode}.`));
    console.log(printProjectTable(zipcodeResponse.proposals));
  } catch (error) {
    console.log(chalk.red('Unable fetch project right now please try again after sometime.'));
  }
};

module.exports = getProposalList;
