const { getGooglePlaceLink } = require('../view/index.js');
const config = require('../config/config.js');

test('To check the Google Link URL is creating', () => {
  expect(getGooglePlaceLink({ lat: 32424, long: 234243 })).toBe(
    `http://www.google.com/maps/place/32424,234243?key=${config.GOOGLE_KEY}`
  );
});
