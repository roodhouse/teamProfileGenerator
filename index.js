const inquirer           = require('inquirer');
const {writeFile}        = require('fs').promises;
const generateHtml       = require('./src/generateHtml') 
console.log(generateHtml)

const firstQuestions = inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Welcome manager. Please provide your name.',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please verify your employee ID.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please provide your office number.',
    },
    {
        type: 'list',
        name: 'team',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I am finished adding team members'],
    },
]).then((answers) => writeFile('index2.html', generateHtml(answers))
  .then(() => console.log('File was created'))
  .then(() => console.log(answers))
  .catch((err) => console.log(err))
);
  

