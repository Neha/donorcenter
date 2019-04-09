const inquirer = require('inquirer');
const content = require('../config/content');

const printMenuList = callback => {
  const printDonorsListQuestion = [
    {
      type: 'list',
      name: 'toBePrint',
      message: content.printDonorQuestions[0].printDonor,
      choices: ['Add a new Donor.', 'View list of all Donors in system']
    }
  ];

  return inquirer.prompt(printDonorsListQuestion).then(response => {
    switch (response.toBePrint) {
      case 'Add a new Donor.':
        return 1;
      default:
        return 2;
    }
  });
};

module.exports = printMenuList;
