const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
getRole() {
    return "Manager";
}

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
