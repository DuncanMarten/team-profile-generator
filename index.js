const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require('./src/generate-HTML');

const promptManager = employeeData => {
    // If there's no 'employees' array property, create one
    if (!employeeData) {
        employeeData = [];
    }
    console.log(`
    ==================
    Add a New employee
    ==================
    `);
    return inquirer.prompt([
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
            type: 'list',
            name: 'menu',
            message: 'Do you want to: ',
            choices: [{ name: 'Add an engineer', value: 0 }, { name: 'Add an intern', value: 1 }, { name: 'Finish building your team', value: 2 }]
        }
    ])
    .then(workerData => {
        employeeData.push(workerData);
        if(workerData.menu === 0) {
            return promptEngineer(employeeData);
        } else if (workerData.menu === 1) {
            return promptIntern(employeeData);
        } else {
            return employeeData;
        }
    });
};

const promptEngineer = employeeData => {
    // If there's no 'employees' array property, create one
    if (!employeeData) {
        employeeData = [];
    }
    console.log(`
    ==================
    Add a New employee
    ==================
    `);
    return inquirer.prompt([
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
            name: 'github',
            message: "Enter engineer's GitHub username: "
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Do you want to: ',
            choices: [{ name: 'Add an engineer', value: 0 }, { name: 'Add an intern', value: 1 }, { name: 'Finish building your team', value: 2 }]
        }
    ])
    .then(workerData => {
        employeeData.push(workerData);
        if(workerData.menu === 0) {
            return promptEngineer(employeeData);
        } else if (workerData.menu === 1) {
            return promptIntern(employeeData);
        } else {
            return employeeData;
        }
    });
};

const promptIntern = employeeData => {
    // If there's no 'employees' array property, create one
    if (!employeeData) {
        employeeData = [];
    }
    console.log(`
    ==================
    Add a New employee
    ==================
    `);
    return inquirer.prompt([
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
            name: 'school',
            message: "Enter intern's school name: "
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Do you want to: ',
            choices: [{ name: 'Add an engineer', value: 0 }, { name: 'Add an intern', value: 1 }, { name: 'Finish building your team', value: 2 }]
        }
    ])
    .then(workerData => {
        employeeData.push(workerData);
        if(workerData.menu === 0) {
            return promptEngineer(employeeData);
        } else if (workerData.menu === 1) {
            return promptIntern(employeeData);
        } else {
            return employeeData;
        }
    });
};

const writeToFile = data => {
    fs.writeFile('./dist/employee.html', data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('employee.html was created!');
        }
    })
}

promptManager()
    .then(employeeData => {
        return generateHtml(employeeData);
    })
    .then(employee => {
        return writeToFile(employee);
    });