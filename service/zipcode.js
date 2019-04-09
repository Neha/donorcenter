const axios = require('axios');
const config = require('../config/config');

const Service = zipcode => {
  return axios.get(`${config.DONAR_API}&zip=${zipcode}`).then(response => {
    return response.data;
  });
};

module.exports = Service;
