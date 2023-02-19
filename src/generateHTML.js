
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

    <section>
        <div>
            <h2>Employee Name ${data.employeeName}</h2>
            <h3>Employee Role ${data.employeeRole} </h3>
        </div>

        <div>
            <ul>
                <li>ID</li>
                <li>Email</li>
                <li> github or office number </li>
            </ul>
        </div>

    </section>

    
  </body>

</html>







`

}




module.exports = generateHTML;