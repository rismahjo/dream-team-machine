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
    html.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => renderManager(manager)));

}