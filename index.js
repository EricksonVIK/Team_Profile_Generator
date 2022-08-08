// fs to write file

// inquire for prompts/responses
const inquirer = require('inquirer');

// import constructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// import NTML generate function from generate-site
const generatePage =require('./src/page-template');

// import layout from page-template

// Team member array
const team = []

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name? (Required)',
            validate : nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email address? (Required)',
            validate : emailInput => {
                // can i specify an @symbol?
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!')
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'idNumber',
            message: 'What is the employee id? (Required)',
            validate : idNumberInput => {
                // can i specify number here?
                if (idNumberInput) {
                    return true;
                } else {
                    console.log('Please enter numerical id!')
                    return false;
                }
            },
        },
        {
            type:'list',
            name: 'role',
            message: 'Please select the employee role. (Required)',
            choices:['Manager', 'Engineer', 'Intern'],
            validate : roleInput => {
                // can i specify 1 role here?
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter one role!')
                    return false;
                }
            }
        },
    ])
    .then(data => {
        console.log(data)
        if(data.role === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message: 'Please enter an office number.',
                    validate : officeInput => {
                        // can i specify number?
                        if (officeInput) {
                            return true;
                        } else {
                            console.log('Please enter a numrical office number!')
                            return false;
                        }
                    }
                }
            ])
            .then(response => {
                console.table(data)
                console.log(response.office);
                const ManagerTeam = new Manager (data.name, data.idNumber, data.email, data.role, response.office)
                team.push(ManagerTeam)
                addEmployee()
            })
        } else if (data.role === 'Engineer'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'Please enter GitHub name.',
                    validate : githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter valid GitHub name!')
                            return false;
                        }
                    }
                }
            ])
            .then (response => {
                console.table(data)
                console.log(response.github)
                const EngineerTeam = new Engineer (data.name, data.idNumber, data.email, data.role, response.github)
                team.push(EngineerTeam)
                addEmployee()
            })
        } else if (data.role === 'Intern'){
            inquirer.prompt ([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Please enter school name.',
                    validate : schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter valid school!')
                            return false;
                        }
                    }
                }
            ])
            .then (response => {
                console.table(data)
                console.log(response.school);
                const InternTeam = new Intern (data.name, data.idNumber, data.email, data.role, response.school)
                team.push(InternTeam)
                addEmployee()
            })
        } else {
            console.table (data)
            const EmployeeTeam = new Employee (data.name, data.idNumber, data.email, data.role)
            team.push(EmployeeTeam)
            addEmployee()
        }
    })
       
}

// add additional employees
function addEmployee () {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like t add another employee?',
        }   
    ])
    .then (add => {
        console.log(add)
        if (add.addEmployee === true){
            return promptUser(team);
        }else{
            console.log (team)
            // add in html writefunctions
        }
    })
}

promptUser();

