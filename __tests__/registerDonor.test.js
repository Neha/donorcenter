const registerDonors = require('../queries/register-donors');
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('Module test', () => {
  test('user input', async () => {
    expect.assertions(1);
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ name: 'neha sharma', city: 'delhi', zipcode: 123321 });

    await expect(registerDonors()).resolves.toEqual({
      name: 'neha sharma',
      city: 'delhi',
      zipcode: 123321
    });
  });
});
