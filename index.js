const inquirer           = require('inquirer');
const {writeFile}        = require('fs').promises;
const generateHtml       = require('./src/generateHtml') 
console.log(generateHtml)

// const firstQuestionsPrompt = {
//     type: 'input',
//     name: 'name',
//     message: 'Please provide your name.'
//   };

//   function main() {
//     console.log('Welcome manager!');
//     sayMyName();
//   }

//   main();

const firstQuestions = inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Welcome manager. Please provide your name.',
    },
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
//     }
]).then((answers) => writeFile('index2.html', generateHtml(answers))
  .then(() => console.log('File was created'))
  .then(() => console.log(answers))
  .catch((err) => console.log(err))
);

//   function sayMyName() {
//     inquirer.prompt(firstQuestionsPrompt).then((answers) => {
//         if(answers.firstQuestionsPrompt === 'John') {
//             console.log('hi');
//         } else {
//             console.log('bye')
//         }
//     }
//   )}

//   function exitHouse() {
//     inquirer.prompt(directionsPrompt).then((answers) => {
//       if (answers.direction === 'Forward') {
//         console.log('You find yourself in a forest');
//         console.log(
//           'There is a wolf in front of you; a friendly looking dwarf to the right and an impasse to the left.'
//         );
//         encounter1();
//       } else {
//         console.log('You cannot go that way. Try again');
//         exitHouse();
//       }
//     });
//   }
  

