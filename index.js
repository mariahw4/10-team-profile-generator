const inquirer = require("inquirer");
const jest = require("jest");
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
            // console.log(employees);
            return employees;
            
        }
    })
}

managerProfile()
.then(addTeamMembers)
.then(data => {
    const pageHTML = generateHTML(data)
    const pageCSS = generateCSS(data)

    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Page created! Check out index.html")
        }
    })
    fs.writeFile('./dist/style.css', pageCSS, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Page created! Check out style.css")
        }
    })
});
// function getName(value) {
//     return `${value}`
// }

// function getId(value) {
//     return `${value}`
// }

// function getEmail(value) {
//     return `${value}`
// }

// function getRole(value) {
//     return `${value}`
// };

// function getGithub(value) {
//     return `${value}`
// }

// function getOfficeNumber(value) {
//     return `${value}`
// }

// function getSchool(value) {
//     return `${value}`
// }

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, generateHTML(data), function (err) {
//         if (err) {
//             return console.log(err);
//         }
//     });
//   }
//   function writeToStyle(fileName, data) {
//     fs.writeFile(fileName, generateCSS(data), function (err) {
//         if (err) {
//             return console.log(err);
//         }
//     });
//   }

//   function init() {
//     inquirer.prompt(questions).then((data) => {
//         console.log(JSON.stringify(data, null, " "));
//         data.getName = getName(data.managerName);
//         data.getId = getId(data.managerId);
//         data.getEmail = getEmail(data.managerEmail);
//         data.getRole = getRole(data.employeeRole);
//         data.getGithub = getGithub(data.employeeGithub);
//         data.getOfficeNumber = getOfficeNumber(data.managerOfficeNumber);
//         data.getSchool = getSchool(data.employeeSchool);
//         writeToFile("./dist/index.html", data);
//         writeToStyle("./dist/style.css", data);
//   }
//     )};
  
  
//   // // Function call to initialize app
//   init();