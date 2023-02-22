const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateHTML");
const generateCSS = require("./src/generateCSS");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

const managerProfile = function() {
    return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of the Team Manager?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the Team Manager ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the email of the Team Manager?',
      name: 'email',
    },
    {
      type: "input",
      message: "What is the Team Manager office number?",
      name: "officeNumber",
    },
])
.then(managerData => {
    const { name, id, email, officeNumber } = managerData;
    const manager = new Manager(name, id, email, officeNumber);
    employees.push(manager);
})
};

const addTeamMembers = function() {
    return inquirer.prompt([
    {
      type: "list",
      message: "What employee would you like to add?",
      name: "role",
      choices: ["Engineer", "Intern"], 
    },   
    {
      type: 'input',
      message: 'What is the name of the employee?',
      name: 'name',
    },
    {
      type: 'input',
     message: 'What is the ID of the employee?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the email of the employee?',
      name: 'email',
    },
    {
      type: "input",
      message: "What is the github username of the employee?",
      name: "github",
      when: (input) => input.role === 'Engineer',
    },
    {
      type: "input",
      message: "What school does the Intern attend?",
      name: "school",
      when: (input) => input.role === 'Intern',
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another employee?',
      default: false
    }
    ])
    .then(employeesData => {
        let { name , id, email, role, github, school, confirmAddEmployee} = employeesData;
        let employee;

        if(role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }
        employees.push(employee);

        if(confirmAddEmployee) {
            return addTeamMembers(employees)
        } else {
            return employees;    
        }
    })
}

managerProfile()
.then(addTeamMembers)
.then(data => {
    const writeHTML = generateHTML(data)
    const writeCSS = generateCSS(data)

    fs.writeFile('./dist/index.html', writeHTML, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Check out index.html")
        }
    })
    fs.writeFile('./dist/style.css', writeCSS, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Check out style.css")
        }
    })
});
