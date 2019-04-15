const CFonts = require('cfonts');

function createBanner() {
  CFonts.say('DONOR|CENTER!', {
    font: 'block',
    align: 'center',
    colors: ['yellowBright'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0'
  });
}

module.exports = createBanner;
