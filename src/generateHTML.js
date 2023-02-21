const managerCard = (data) => {
    return `
    <section class="employee-card">
        <div class="card-header">
            <h2>${data.name}</h2>
            <h3> ☕ Manager </h3>
        </div>

        <div class="card-body">
            <ul class="list-style">
                <li>ID: ${data.id} </li>
                <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li> Office number: ${data.officeNumber}</li>
            </ul>
        </div>
    </section>`
};

const engineerCard = (data) => {
    return `
    <section class="employee-card">
        <div class="card-header">
            <h2>${data.name}</h2>
            <h3> 🛠️ Engineer </h3>
        </div>

        <div class="card-body">
            <ul class="list-style">
                <li>ID: ${data.id} </li>
                <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li>Github: <a href="https://github.com/${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a></li>
            </ul>
        </div>
    </section>`
};

const internCard = (data) => {
    return `
    <section class="employee-card">
        <div class="card-header">
            <h2>${data.name}</h2>
            <h3> 📚 Intern </h3>
         </div>

        <div class="card-body">
             <ul class="list-style">
                <li>ID: ${data.id} </li>
                <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li>School: ${data.school}</li>
             </ul>
        </div>
    </section>`

};

const cards = data => {
    var cardInput = '';
    for (i=0; i < data.length; i ++) {
        console.log(data[i])
        if (data[i].getRole() === 'Manager') {
            cardInput += managerCard(data[i]);
        }
        else if (data[i].getRole() == 'Engineer') {
            cardInput += engineerCard(data[i]);
        }
        else if (data[i].getRole() === 'Intern'){
            cardInput += internCard(data[i]);
        }
    }
    console.log(cardInput);
    return cardInput;
   
}

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

    <main>
    ${cards(data)}

    </main>

    
  </body>

</html>


`
}




module.exports = generateHTML;