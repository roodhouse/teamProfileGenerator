const inquirer           = require('inquirer');
const {writeFile}        = require('fs').promises;
const generateHtml       = require('./src/generateHtml') 
console.log(generateHtml)

// const firstQuestions = inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Welcome manager. Please provide your name.',
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'Please verify your employee ID.',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email address?',
//     },
//     {
//         type: 'input',
//         name: 'office',
//         message: 'Please provide your office number.',
//     },
//     {
//         type: 'list',
//         name: 'team',
//         message: 'Which type of team member would you like to add?',
//         choices: ['Engineer', 'Intern', 'I am finished adding team members'],
//     },
// ]).then((answers) => writeFile('index2.html', generateHtml(answers))
//   .then(() => console.log('File was created'))
//   .then(() => console.log(answers))
//   .catch((err) => console.log(err))
// );
  
// attempt to create an conditional inquirer

const rolePrompt = {
  type: 'list',
  name: 'role',
  message: 'Which type of employee are you adding?',
  choices: ['Manager', 'Engineer', 'Intern', 'Quit'],
};

function main() {
  console.log('Welcome');
  roleSelection();
}

function roleSelection() {
  inquirer.prompt(rolePrompt).then((answers) => {
    if (answers.role === 'Manager') {
      managerQuestions();
    } else if (answers.role === 'Engineer') {
      engrQuestions();
    } else if (answers.role === 'Intern') {
      internQuestions();
    } else {
      console.log('fail')
    }
  });
}

  function managerQuestions() {
    console.log('You are the manager!');

    const managerQ = [
      {
      type: 'input',
      name: 'mname',
      message: 'Please provide your full name.',
      },
      {
      type: 'input',
      name: 'mid',
      message: 'Please verify your employee ID.',
      },
      {
      type: 'input',
      name: 'memail',
      message: 'What is your email address?',
      },
      {
      type: 'input',
      name: 'moffice',
      message: 'Please provide your office number.'
      }
    ];

    inquirer.prompt(managerQ).then((answers) => {
    console.log(answers);
    writeFile('index2.html', generateHtml(answers))
    })
  };

function engrQuestions() {
  console.log('You are an engineer!');
}

function internQuestions() {
  console.log('You are an intern!');
}

main();

// .then((answers) => writeFile('index2.html', generateHtml(answers))
//   .then(() => console.log('File was created'))
//   .then(() => console.log(answers))
//   .catch((err) => console.log(err))