
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() 
    
    getId() 
    
    getEmail() 
    
    getRole() 
}

module.exports = Employee;



// const inquirer = require("inquirer");

// const employeeQuestions = [
//     {
//       type: 'input',
//       message: 'What is your name?',
//       name: 'employeeName',
//     },
//     {
//       type: 'input',
//       message: 'What is your id?',
//       name: 'employeeId',
//     },
//     {
//       type: 'input',
//       message: 'What is your email?',
//       name: 'employeeEmail',
//     },
//     {
//         type: "list",
//         message: "What is your role?",
//         name: "employeeRole",
//         choices: ["Engineer", "Manager", "Intern"],
//     },
// ]

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

// inquirer.prompt(employeeQuestions).then((data) => {
//     console.log(JSON.stringify(data, null, " "));
//     data.getName = getName(data.employeeName);
//     data.getId = getId(data.employeeId);
//     data.getEmail = getEmail(data.employeeEmail);
//     data.getRole = getRole(data.employeeRole);
// })

// getName();
// getId();
// getEmail();
// getRole();
