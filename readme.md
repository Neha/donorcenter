# Welcome to Donors Center CLI :computer:

**Welcome to the Donors Center' CLI**
Are you looking for places to do donation? You want to help the people in need and make them reach to needful? Then this Donor city is the CLI for you.
Donor city lets you **register** the new donor , **list** all registered donors , **select the doner** and get the **Google Place link** of the selected donor.

# Tech Stack

- nodejs
- inquire - For interactive terminal
- chalk - For colorful content
- table - For formatting the data
- jest - For test cases
- eslint - For code linting
- prettier - For code formating
- commander - For accessing commands arguments

| Packages  | Link                                      |
| --------- | ----------------------------------------- |
| table     | [https://www.npmjs.com/package/table      |
| chalk     | [https://www.npmjs.com/package/chalk]     |
| inquire   | [https://www.npmjs.com/package/inquirer   |
| commander | [https://www.npmjs.com/package/commander] |

# Prerequists

Nodejs > V5 pre-installed and your choice of terminal.
(Tested on Mac and Windows machine.)

# How to Start

(Anytime user can exit by using `ctrl + c` / `cmd + c`)

### Method 1 :

Copy the below command and hit enter.

    node cli.js

## options

    node cli.js
    node cli.js --add
    node cli.js --list

### Add a donor

Donor center lets you register new Donor. To register new donor CLI requires - Name, City and Zipcode.

#### Guidelines for the Donor's information

| Information | Data-type                                     |
| ----------- | --------------------------------------------- |
| Name        | String only                                   |
| City        | String only                                   |
| Zipcode     | Number and maximum 6 characters with no space |

#### Add the Donor

    node cli.js --add

### List all registered donors

To check all the registered donors we can use `--list` option. There must be atleast 1 registered donor.

    node cli.js --list

### Get the Google Place link of the Donor

CLI will give you the Donor's Google Place on the basis of its zipcode. Select the donor to get the information

    node cli.js --list

and follow the steps. With every Google place link we have the title of the propsols too.

## How to change the config(s)

Donor CLI has

To **change/update the API Key(s)** of Google Place or Donor's city

    config/congif.js

## How to change the content

To **add/edit** the content of the CLI

config/content.js

### Contribution

Want to contribute? Great!
Check the Known Issues and To-Dos or if you have idea to improve it by adding
new features or some code refactoring - email to nsharma215@gmail.com or
you can reach at @hellonehha

### Known Issues

- Google Place Link is not workiing from Terminal.
- The propsols list is having special characters.

### Todos

- Filter of projects
- More options to sort
