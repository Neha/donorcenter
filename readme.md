# Welcome to Donors Center CLI :computer:

**Welcome to the Donors Center' CLI**
Are you looking for places to do donation? You want to help the people in need and make them reach to needful? Then this Donor city is the CLI for you.
Donor city lets you **register** the new donor , **list** all registered donors , **select the doner** and get the **Google Place link** of the selected donor.

# Tech Stack

- nodejs
- inquire - For Interactive terminal
- chalk - For colorful content
- table - For formatting the data
- jest - For test cases
- eslint
- prettier
- commander

| Packages  | Link                                      |
| --------- | ----------------------------------------- |
| table     | [https://www.npmjs.com/package/table      |
| chalk     | [https://www.npmjs.com/package/chalk]     |
| inquire   | [https://www.npmjs.com/package/inquirer   |
| commander | [https://www.npmjs.com/package/commander] |

# How to Start

### Method 1 :

    node cli.js
    node cli.js --add
    node cli.js --list

## options

### Add a donor

    node cli.js --add

### List all registered donors

    node cli.js --list

### Select a registered donor

    node cli.js --list

## How to change the config(s)

To **change/update the API Key(s)** of Google Place or Donor's city

    config/congif.js

## How to change the content

To **add/edit** the content of the CLI

config/content.js

### Development

Want to contribute? Great! email to nsharma215@gmail.com

### Todos

- Filter of projects
- More options to sort
