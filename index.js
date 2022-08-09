// fs to write file

// inquire for prompts/responses
const inquirer = require('inquirer');

// import constructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// import NTML generate function from generate-site
const generateHtml =require('./src/page-template');
const writeHtml = require('./utils/generate-site')

const validator = require('email-validator');

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
                    const pass = emailInput.match(/\S+@\S+\.\S+/);
                    if (pass) {
                    return true;
                    }
                    return 'Please enter a valid email address.';
                }
        },
        {
            type:'input',
            name: 'idNumber',
            message: 'What is the employee id? (Number required)',
            validate : (idNumberInput) => {
                    const pass = idNumberInput.match(/^[1-9]\d*$/);
                    if (pass){
                        return true;
                    } else {
                        return 'Please enter a numberic id.'
                    }
                }
        },
        {
            type:'list',
            name: 'role',
            message: 'Please select the employee role. (Required)',
            choices:['Manager', 'Engineer', 'Intern'],
        },
    ])
    .then(data => {
        console.log(data)
        if(data.role === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message: 'Please enter an office number. (Number Required)',
                    validate : (officeInput) => {
                        const pass = officeInput.match(/^[1-9]\d*$/);
                        if (pass){
                            return true;
                        } else {
                            return 'Please enter a numberic id.'
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
        // console.log(add)
        if (add.addEmployee === true){
            return promptUser(team);
        }else{
            // console.log (team)
            // add in html writefunctions
            const html = generateHtml(team)
            console.log(html)
            writeHtml(html);
        }
    })
}

promptUser();

