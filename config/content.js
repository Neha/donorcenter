const content = {
  welcome: 'Welcome to Donor center',
  registerUserQuestions: [
    {
      name: "Enter the donor's Name: ",
      city: "Enter the donor's city: ",
      zipcode: "Enter the donor's zip code:",
      nameErr: 'You need to enter the valid name.Enter the name in valid string.',
      cityErr: 'You need to enter the valid city name.Enter the city name in valid string.',
      zipcodeErr:
        'You need to enter the valid zipcode.Enter the zipcode in numbers and max 6 character only.'
    }
  ],
  selectDonorQuestions: [
    {
      selectDonor: 'Select a donor from the list to see the propsols'
    }
  ],
  printDonorQuestions: [
    {
      printDonor: 'What would you like to do?'
    }
  ],
  donorChoices: [],
  infoMessage: 'Please provide information about the new Donor.'
};

module.exports = content;
