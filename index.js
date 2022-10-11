const inquirer           = require('inquirer');
const {writeFile}        = require('fs').promises;
const generateHtml       = require('./src/generateHtml') 

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
      managerQuestions();
    } else if (answers.role === 'Intern') {
      managerQuestions();
    } else {
      console.log('fail')
    }
  });

  function managerQuestions() {
    console.log('Manager!');

    const managerQ = [
      {
      type: 'input',
      name: 'mname',
      message: 'Please provide the full name.',
      },
      {
      type: 'input',
      name: 'mid',
      message: 'Please enter the employee ID.',
      },
      {
      type: 'input',
      name: 'memail',
      message: 'What is the email address?',
      },
      {
      type: 'input',
      name: 'moffice',
      message: 'Please provide the office number.'
      },
      {
        type: 'list',
        name: 'eagain',
        message: 'Would you like to an engineer to this team?',
        choices: ['Yes', 'No']
      },
      {
        type: 'input',
        name: 'ename',
        message: 'Please provide the full name.',
        },
        {
        type: 'input',
        name: 'eid',
        message: 'Please enter the employee ID.',
        },
        {
        type: 'input',
        name: 'eemail',
        message: 'What is the email address?',
        },
        {
        type: 'input',
        name: 'github',
        message: 'Please provide the github username.'
        },
        {
          type: 'list',
          name: 'iagain',
          message: 'Would you like to an intern to this team?',
          choices: ['Yes', 'No']
        },
        {
          type: 'input',
          name: 'iname',
          message: 'Please provide the full name.',
          },
          {
          type: 'input',
          name: 'iid',
          message: 'Please enter the employee ID.',
          },
          {
          type: 'input',
          name: 'iemail',
          message: 'What is the email address?',
          },
          {
          type: 'input',
          name: 'school',
          message: 'Please provide the school intern is enrolled.'
          }
    ];

      inquirer.prompt(managerQ).then((answers) => {
       
      console.log(answers);
      writeFile('index2.html', generateHtml(answers))
      })
  };
}
main();
