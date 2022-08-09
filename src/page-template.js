// loops created for each employee type
const generateHtml = (teamData) => {
    const generateManager = (manager) => { 
        console.log(manager)
        const managerArr =[]
        for (let i =0; i < manager.length; i++){
        managerArr.push(
        `<div class="flex-column justify-space-between align-center" id="employeeBlocks">
            <div class="card">
                <h1 class="card-title">${manager[i].name}</h1>
                <h3 class ="card-subtitle">${manager[i].role} </h3>
                <ul class="list-group">
                    <li class = "list-group-item"> Email: <a href=mailto:${manager[i].email}>${manager[i].email}</a></li>
                    <li class = "list-group-item"> Employee ID: ${manager[i].id}</li>
                    <li class = "list-group-item"> Office #: ${manager[i].office}</li>
                </ul>
            </div>
        </div>
        `)
        }
        return managerArr.join('')
    }

    const generateEngineer = (engineer) => { 
        const engineerArr =[]
        for (let i =0; i < engineer.length; i++){
        engineerArr.push(`<div> ${engineer[i].name}</div>`)
        }
        return engineerArr.join('')
    }

    const generateIntern = (intern) => { 
        const internArr =[]
        for (let i =0; i < intern.length; i++){
        internArr.push(`<div> ${intern[i].name}</div>`)
        }
        return internArr.join('')
    }




    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Member Profile</title>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
        <link href= "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">      
        <link rel="stylesheet" href= "style.css">
        <link rel="stylesheet" href= "generalstyle.css">
    </head>
    <body>
        <header class="hero alight-center flex-row">
            <h1 class= "title align-center flex-row">
            MY TEAM
            </h1>
        </header>
        <main class="flex-row col-12">
            ${generateManager(teamData.filter(data => data.role === 'Manager'))}
            ${generateEngineer(teamData.filter(data => data.role === 'Engineer'))}
            ${generateIntern(teamData.filter(data => data.role === 'Intern'))}
        </main>

    </body>

    </html>`

}

module.exports = generateHtml;