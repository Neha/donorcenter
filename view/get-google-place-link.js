const config = require('../config/config');

const getGooglePlaceLink = params => {
  const { lat, long } = params;

  return `${config.GOOGLEPLACE_API}${lat},${long}?key=${config.GOOGLE_KEY}`;
};

module.exports = getGooglePlaceLink;
