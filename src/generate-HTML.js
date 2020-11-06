const generateEmployees = employeesArr => {
    return `
    <!DOCTYPE html> 
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employees</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    </head>
    
    <body class="flex-column min-100-vh">
        <header class="bg-danger text-white text-center p-2">
            <h1>My Team</h1>
        </header>
        <main class="col-12 d-flex justify-content-center align-items-center">
        ${employeesArr
            .filter(({ officeNumber }) => officeNumber)
            .map(({ name, id, email, officeNumber }) => {
                return `
                <div class="card col-4 m-3" style="width: 20rem;">
                    <div class="card-header bg-primary text-light">
                        <h4 class="card-title">${name}</h4>
                        <h5 class="card-subtitle mb-2">Manager</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href="" class="card-link">${email}</a></p>
                        <p class="card-text">Office Number: ${officeNumber}</p>
                    </div>
                </div>
            `;
            })
            .join('')}
        ${employeesArr
            .filter(({ github }) => github)
            .map(({ name, id, email, github }) => {
                return `
                <div class="card col-4 m-3" style="width: 20rem;">
                    <div class="card-header bg-primary text-light">
                        <h4 class="card-title">${name}</h4>
                        <h5 class="card-subtitle mb-2">Engineer</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href="" class="card-link">${email}</a></p>
                        <p class="card-text">GitHub: <a href="" class="card-link">${github}</a></p>
                    </div>
                </div>
            `;
            })
            .join('')}
        ${employeesArr
            .filter(({ school }) => school)
            .map(({ name, id, email, school }) => {
                return `
                <div class="card col-4 m-3" style="width: 20rem;">
                    <div class="card-header bg-primary text-light">
                        <h4 class="card-title">${name}</h4>
                        <h5 class="card-subtitle mb-2">Intern</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href="" class="card-link">${email}</a></p>
                        <p class="card-text">School: ${school}</p>
                    </div>
                </div>
            `;
            })
            .join('')}
            </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = generateEmployees;