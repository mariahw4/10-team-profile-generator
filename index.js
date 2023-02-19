const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const generateHTML = require("./src/generateHTML");
const generateCSS = require("./src/generateCSS");

// const employee = require("./lib/Employee");
// const manager = require("./lib/Manager");
// const engineer = require("./lib/Engineer");
// const intern = require("./lib/Intern");

const questions = [
    {
      type: 'input',
      message: 'What is your name?',
      name: 'managerName',
    },
    {
      type: 'input',
      message: 'What is your id?',
      name: 'managerId',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'managerEmail',
    },
    {
      type: "input",
      message: "What is your office number?",
      name: "managerOfficeNumber",
    },
    {
      type: "list",
      message: "What is your role?",
      name: "employeeRole",
      choices: ["Engineer", "Manager", "Intern"], 
    },   
    {
      type: "input",
      message: "What is your github username?",
      name: "employeeGithub",
    },

    {
      type: "input",
      message: "What school do you attend?",
      name: "employeeSchool",
    },
    ]
function getName(value) {
    return `${value}`
}

function getId(value) {
    return `${value}`
}

function getEmail(value) {
    return `${value}`
}

function getRole(value) {
    return `${value}`
};

function getGithub(value) {
    return `${value}`
}

function getOfficeNumber(value) {
    return `${value}`
}

function getSchool(value) {
    return `${value}`
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
  }
  function writeToStyle(fileName, data) {
    fs.writeFile(fileName, generateCSS(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
  }

  function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getName = getName(data.managerName);
        data.getId = getId(data.managerId);
        data.getEmail = getEmail(data.managerEmail);
        data.getRole = getRole(data.employeeRole);
        data.getGithub = getGithub(data.employeeGithub);
        data.getOfficeNumber = getOfficeNumber(data.managerOfficeNumber);
        data.getSchool = getSchool(data.employeeSchool);
        writeToFile("./dist/index.html", data);
        writeToStyle("./dist/style.css", data);
  }
    )};
  
  
  // // Function call to initialize app
  init();