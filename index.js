const { init: InitData } = require('./data');
const { printUsersList } = require('./view');
const createBanner = require('./view/banner');
const printMenuList = require('./queries/print-menu-list');
const registerDonors = require('./queries/register-donors');
const chalk = require('chalk');
const content = require('./config/content');

const handler = response => {
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

const main = function(args) {
  InitData().then(function(donors) {
    createBanner();
    console.log(chalk.blue(content.welcome));
    console.log(chalk.blue(`You have #${donors.length} donors in the system.`));
    // Start the flow based on Donors count.
    switch (args) {
      case 'list':
        printUsersList();
        break;
      case 'add':
        registerDonor();
        break;
      default:
        donors.length > 0 ? showMenuOptions() : registerDonor();
        break;
    }
  });
};

module.exports = main;
