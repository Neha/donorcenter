const getSelectDonor = require('../queries/get-selected-donor');
const getProposalList = require('./get-proposal-list');
const data = require('../data');

const printUsersList = () => {
  let content = data.getDonors();
  const names = content.map(item => {
    return item.first_name;
  });
  getSelectDonor(names).then(zipcode => {
    getProposalList(zipcode);
  });
};

module.exports = printUsersList;
