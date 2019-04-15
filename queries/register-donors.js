const inquirer = require('inquirer');
const content = require('../config/content');
const chalk = require('chalk');
const { addDonor } = require('../data');

const registerDonors = () => {
  console.log(chalk.blue(content.infoMessage));
  const donorsQuestionsList = [
    {
      type: 'input',
      name: 'first_name',
      message: content.registerUserQuestions[0].name,
      validate: function(value) {
        const isString = RegExp(/^[a-zA-Z ]+$/).test(value);

        if (value === '' || isString === false) {
          return chalk.red(content.nameErr);
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'city_name',
      message: content.registerUserQuestions[0].city,
      validate: function(value) {
        const isString = RegExp(/^[a-zA-Z ]+$/).test(value);

        if (value === '' || isString === false) {
          return chalk.red(content.cityErr);
        } else {
          return true;
        }
      }
    },
    {
      type: 'number',
      name: 'zip_code',
      message: content.registerUserQuestions[0].zipcode,
      validate: function(value) {
        const isZipCode = RegExp(/^[0-9]{6}$/).test(value);

        if (value === '' || isZipCode === false) {
          return chalk.red(content.zipcodeErr);
        } else {
          return true;
        }
      }
    }
  ];

  return inquirer.prompt(donorsQuestionsList).then(response => {
    console.log(
      chalk.blue(`New donor(${response.first_name}) successfully added to the database.`)
    );
    addDonor(response);
    return response;
  });
};

module.exports = registerDonors;
