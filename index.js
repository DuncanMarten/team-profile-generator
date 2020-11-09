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
            message: "Enter manager's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's id number: ",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter manager's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email address: ",
            validate: emailInput => {
                const n = emailInput.includes('@');
                const x = emailInput.includes('.com');
                if (emailInput && n && x) {
                    return true;
                } else {
                    console.log(" Please enter manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number: ",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office number!");
                    return false;
                }
            }
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
            message: "Enter engineer's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter engineer's id number: ",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter engineer's email address: ",
            validate: emailInput => {
                const n = emailInput.includes('@');
                const x = emailInput.includes('.com');
                if (emailInput && n && x) {
                    return true;
                } else {
                    console.log(" Please enter engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter engineer's GitHub username: ",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's github username!");
                    return false;
                }
            }
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
            message: "Enter intern's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter intern's id number: ",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter intern's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter intern's email address: ",
            validate: emailInput => {
                const n = emailInput.includes('@');
                const x = emailInput.includes('.com');
                if (emailInput && n && x) {
                    return true;
                } else {
                    console.log(" Please enter intern's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school name: ",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter intern's school name!");
                    return false;
                }
            }
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