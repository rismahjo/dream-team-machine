//Create cards based on inputs recieved 
const renderTeam = (team) => {
    const renderManager = (manager) => `
                <div class="card col-3 me-3 mb-5 employee-card">
                    <img src="${manager.imgSrc}">
                    <div class="card-header employee-header">
                        <h2 class="card-title">${manager.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-people-roof"></i> ${manager.title}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${manager.email}">${manager.email}</a>
                            </li>
                            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
        `;
    const renderEngineer = (engineer) => `
        <div class="card col-3 me-3 mb-5 employee-card">
            <img src="${engineer.imgSrc}">
            <div class="card-header employee-header">
                <h2 class="card-title">${engineer.name}</h2>
                <h3 class="card-title"><i class="fa-solid fa-wrench"></i> ${engineer.title}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                    </li>
                    <li class="list-group-item">
                        GitHub:
                        <a href="https://github.com/${engineer.gitHub}" target="_blank"
                            rel="noopener noreferrer">${engineer.gitHub}</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    const renderIntern = (intern) => `
        <div class="card col-3 me-3 mb-5 employee-card">
            <img src="${intern.imgSrc}">
            <div class="card-header employee-header">
                <h2 class="card-title">${intern.name}</h2>
                <h3 class="card-title"><i class="fa-solid fa-wrench"></i> ${intern.title}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${intern.email}">${intern.email}</a>
                    </li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;


    //Empty array for cards
    const html = [];

    //Add manager
    html.push(
        team
            .filter((employee) => employee.getRole() === 'Manager')
            .map((manager) => renderManager(manager)));

    //Add engineers
    html.push(
        team
            //Filter to only include engineers
            .filter((employee) => employee.getRole() === 'Engineer')
            .map((engineer) => renderEngineer(engineer))
            .join('')
    );

    //Add interns
    html.push(
        team
            //Filter to only include interns
            .filter((employee) => employee.getRole() === 'Intern')
            .map((intern) => renderIntern(intern))
            .join('')
    );

    //Return complete HTML
    return html.join('');
};


//Render main html
const renderMain = (team) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/dist/style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="team-profile-header col-12 mb-3 team-profile jumbotron">
                <h1 class="team-profile-title text-center">Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-mem-container col-12 d-flex flex-wrap justify-content-around">
                ${renderTeam(team)}
            </div>
        </div>
    </div>
</body>

</html>
`;

module.exports = renderMain;