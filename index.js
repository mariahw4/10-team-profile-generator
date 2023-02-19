const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const generateHTML = require("./src/generateHTML");
const generateCSS = require("./src/generateCSS");

// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeQuestions = [
    {
      type: 'input',
      message: 'What is your name?',
      name: 'employeeName',
    },
    {
      type: 'input',
      message: 'What is your id?',
      name: 'employeeId',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'employeeEmail',
    },
    {
    type: "list",
    message: "What is your role?",
    name: "employeeRole",
    choices: ["Engineer", "Manager", "Intern"], 
    },   
// ]
// if (data.employeeRole === "Manager") {
//     const managerQuestions = [
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber",
        },
//     ]
// }
// if (data.employeeRole === "Engineer") {
//     const engineerQuestions = [
        {
            type: "input",
            message: "What is your github username?",
            name: "employeeGithub",
        },
//     ]
// }
// if (data.employeeRole === "Intern") {
//     const internQuestions = [
        {
            type: "input",
            message: "What school do you attend?",
            name: "employeeSchool",
        },
    ]
// }  
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
    // Employee();
    // Manager();
    // Engineer();
    // Intern();
    inquirer.prompt(employeeQuestions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getName = getName(data.employeeName);
        data.getId = getId(data.employeeId);
        data.getEmail = getEmail(data.employeeEmail);
        data.getRole = getRole(data.employeeRole);
        data.getGithub = getGithub(data.employeeGithub);
        data.getOfficeNumber = getOfficeNumber(data.officeNumber);
        data.getSchool = getSchool(data.employeeSchool);
        writeToFile("./dist/index.html", data);
        writeToStyle("./dist/style.css", data);
  }
    )};
  
  
  // // Function call to initialize app
  init();