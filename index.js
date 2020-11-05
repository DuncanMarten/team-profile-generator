const inquirer = require('inquirer');

const generateHtml = require('./src/generate-HTML');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter employee's name: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter employee's id number: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter employee's email address: "
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter manager's office number: "
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter engineer's GitHub username: "
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter intern's school name: "
    },
    {
        type: 'list',
        name: 'menu',
        message: 'Do you want to: ',
        choices: ['Add an engineer', 'Add an intern', 'Finish building your team']
    }
]

const init = () => {
    return inquirer.prompt(questions);
}

init();