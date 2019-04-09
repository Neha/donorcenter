const content = {
  welcome: 'Welcome to Donor center',
  registerUserQuestions: [
    {
      name: "Enter the donor's Name: ",
      city: "Enter the donor's city: ",
      zipcode: "Enter the donor's zip code:",
      nameErr: 'You need to enter the valid name',
      cityErr: 'You need to enter the valid city name',
      zipcodeErr: 'You need to enter the valid zipcode'
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
