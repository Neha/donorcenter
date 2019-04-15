const fs = require('fs');
const path = require('path');
const filepath = path.resolve(__dirname, 'registeredusers.json');

module.exports = (() => {
  const registeredDonors = [];

  const addDonor = user => {
    registeredDonors.push(user);
    fs.writeFileSync('registeredusers.json', JSON.stringify(registeredDonors));
  };

  const setDonors = (donors = []) => {
    donors.forEach(item => {
      registeredDonors.push(item);
    });
    fs.writeFileSync('registeredusers.json', JSON.stringify(registeredDonors));
    return registeredDonors;
  };

  const getDonors = () => {
    return registeredDonors;
  };

  const init = () => {
    const promise = new Promise(function(resolve, reject) {
      if (fs.existsSync('registeredusers.json')) {
        const registeredDonorsList = fs.readFileSync('registeredusers.json').toString();
        setDonors(JSON.parse(registeredDonorsList));
        resolve(registeredDonors);
      }
      resolve(registeredDonors);
    });

    return promise;
  };

  const getDonorZipcode = donorNameIndex => registeredDonors[donorNameIndex].zip_code;

  return {
    addDonor,
    getDonorZipcode,
    registeredDonors,
    setDonors,
    getDonors,
    init
  };
})();
