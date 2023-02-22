const managerCard = (data) => {
    return `
    <section class="card m-2">
        <div class="card-body">
            <h2 class="card-title">${data.name}</h2>
            <h4 class="card-subtitle mb-2"> ☕ Manager </h4>
        </div>

        <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id} </li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item"> Office number: ${data.officeNumber}</li>
            </ul>
        </div>
    </section>`
};

const engineerCard = (data) => {
    return `
    <section class="card m-2">
        <div class="card-body">
            <h2 class="card-title">${data.name}</h2>
            <h4 class="card-subtitle mb-2"> 🛠️ Engineer </h4>
        </div>

        <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id} </li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a></li>
            </ul>
        </div>
    </section>`
};

const internCard = (data) => {
    return `
    <section class="card m-2">
        <div class="card-body">
            <h2 class="card-title">${data.name}</h2>
            <h4 class="card-subtitle mb-2"> 📚 Intern </h4>
         </div>

        <div>
             <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id} </li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">School: ${data.school}</li>
             </ul>
        </div>
    </section>`

};

const cards = data => {
    var cardItem = '';
    for (i=0; i < data.length; i++) {
        console.log(data[i])
        if (data[i].getRole() === 'Manager') {
            cardItem += managerCard(data[i]);
        }
        else if (data[i].getRole() == 'Engineer') {
            cardItem += engineerCard(data[i]);
        }
        else if (data[i].getRole() === 'Intern'){
            cardItem += internCard(data[i]);
        }
    }
    console.log(cardItem);
    return cardItem;
   
}

function generateHTML(data) {
    return `
<!DOCTYPE html>
<html lang="en-US">

  <head>
    <meta charset="UTF-8">
    <title>Team Info</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
  </head>

  <body>
    <header class="navbar">
      <h1 class="navbar-text">My Team</h1>
    </header>

    <main>
    ${cards(data)}

    </main>

    
  </body>

</html>


`
}




module.exports = generateHTML;