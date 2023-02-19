const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber){
        super(data.employeeName, data.employeeId, data.employeeEmail);
        this.officeNumber = officeNumber;
    }
getOfficeNumber() 

}


module.exports = Manager;
// if (data.employeeRole === "Manager") {
//     const managerQuestions = [
//         {
//             type: "input",
//             message: "What is your office number?",
//             name: "officeNumber",
//         },
//     ]
// }

// function getOfficeNumber(value) {
//     return `${value}`
// }

// inquirer.prompt(managerQuestions).then((data) => {
//     console.log(JSON.stringify(data, null, " "));
//     data.getOfficeNumber = getOfficeNumber(data.officeNumber);
//     data.getRole = getRole(data.employeeRole);
// })
// } else {
//     return
// }
// // getOfficeNumber();
// getRole();
