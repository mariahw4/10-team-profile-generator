
function generateHTML(data) {
    return `
<!DOCTYPE html>
<html lang="en-US">

  <head>
    <meta charset="UTF-8">
    <title>Team Info</title>
    <link rel="stylesheet" href="./style.css">
  </head>

  <body>
    <header>
      <!-- Headers -->
      <h1>My Team</h1>
    </header>

    <section class="employee-card">
        <div class="card-header">
            <h2>${data.managerName}</h2>
            <h2>${data.employeeRole} </h2>
        </div>

        <div class="card-body">
            <ul class="list-style">
                <li>ID: ${data.managerId} </li>
                <li>Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
                <li> Office number: ${data.managerOfficeNumber}</li>
            </ul>
        </div>
    </section>

    <section class="employee-card">
        <div class="card-header">
            <h2>${data.managerName}</h2>
            <h2>${data.employeeRole} </h2>
        </div>

        <div class="card-body">
            <ul class="list-style">
                 <li>ID ${data.managerId} </li>
                <li>Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
                <li>Office number: ${data.managerOfficeNumber}</li>
            </ul>
        </div>

    </section>

    <section class="employee-card">
        <div class="card-header">
            <h2>${data.managerName}</h2>
            <h2>${data.employeeRole} </h2>
        </div>

        <div class="card-body">
            <ul class="list-style">
                <li>ID ${data.managerId} </li>
                <li>Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
                <li>Github: <a href="https://github.com/${data.employeeGithub}" target="blank">${data.employeeGithub}</a></li>
            </ul>
        </div>

    </section>
    <section class="employee-card">
        <div class="card-header">
            <h2>${data.managerName}</h2>
            <h2>${data.employeeRole} </h2>
        </div>

        <div class="card-body">
            <ul class="list-style">
                <li>ID ${data.managerId} </li>
                <li>Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
                <li> github ${data.employeeGithub} or office number ${data.managerOfficeNumber}</li>
            </ul>
        </div>

    </section>
    <section class="employee-card">
        <div class="card-header">
            <h2>${data.managerName}</h2>
            <h2>${data.employeeRole} </h2>
        </div>

        <div class="card-body">
            <ul class="list-style">
                <li>ID ${data.managerId} </li>
                <li>Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
                <li> github ${data.employeeGithub} or office number ${data.managerOfficeNumber}</li>
            </ul>
        </div>

    </section>
    <section class="employee-card">
        <div class="card-header">
            <h2>${data.managerName}</h2>
            <h2>${data.employeeRole} </h2>
        </div>

        <div class="card-body">
            <ul class="list-style">
                <li>ID ${data.managerId} </li>
                <li>Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
                <li> github ${data.employeeGithub} or office number ${data.managerOfficeNumber}</li>
            </ul>
        </div>

    </section>
    

    
  </body>

</html>







`

}




module.exports = generateHTML;