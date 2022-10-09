const inquirer           = require('inquirer');
const {writeFile}        = require('fs').promises;
const generateHtml   = require('./src/generateHtml') 
console.log(generateHtml)

const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of the project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How can this application be installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please detail any usage information.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can one contribute to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please detail any test instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ['MIT License', 'Mozilla Public License 2.0', 'Creative Commons Zero v1.0 Universal', 'The Unlicense'],
    },
]).then((answers) => writeFile('README.md', generateMarkdown(answers))
  .then(() => console.log('File was created'))
  .then(() => console.log(answers))
  .catch((err) => console.log(err))
);