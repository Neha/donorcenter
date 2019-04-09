const { init: InitData } = require('./data');
const { printUsersList } = require('./view');
const printMenuList = require('./commands/printMenuList');
const registerDonors = require('./commands/registerDonors');
const chalk = require('chalk');
const content = require('./config/content');

const handler = response => {
  console.log(response);
  if (response === 1) {
    registerDonor();
  } else {
    printUsersList();
  }
};

const registerDonor = () => {
  return registerDonors().then(response => {
    showMenuOptions();
  });
};

const showMenuOptions = () => {
  return printMenuList().then(handler);
};

const main = (function() {
  InitData().then(function(donors) {
    console.log(chalk.blue(content.welcome));
    console.log(chalk.blue(`You have #${donors.length} donors in the system.`));
    // Start the flow based on Donors count.
    donors.length > 0 ? showMenuOptions() : registerDonor();
  });
})();

module.exports = main;
