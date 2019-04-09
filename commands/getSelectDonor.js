const inquirer = require('inquirer');
const { getDonorZipcode } = require('../data');
const content = require('../config/content');

const getSelectDonor = (userData, callback) => {
  const selectDonorQuestion = [
    {
      type: 'list',
      name: 'selectedDonor',
      message: content.selectDonorQuestions[0].selectDonor,
      choices: userData
    }
  ];

  return inquirer.prompt(selectDonorQuestion).then(response => {
    const donorName = response.selectedDonor;
    return getDonorZipcode(userData.indexOf(donorName));
  });
};

module.exports = getSelectDonor;
