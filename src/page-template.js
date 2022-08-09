// loops created for each employee type
const generateHtml = (teamData) => {
    const generateManager = (manager) => { 
        const managerArr =[]
        for (let i =0; i < manager.length; i++){
        managerArr.push(`<div> Manager: ${manager[i].name}</div>`)
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">      
        <link rel='stylesheet' href= 'style.css'>
        <link rel='stylesheet' href= 'generalstyle.css'>
    </head>
    <body>
        <header class='hero alight-center flex-row'>
            <h1 class= 'title align-center flex-row'>
            MY TEAM
            </h1>
        </header>
        <main class='flex-row justify-space-between'>
          <div class="flex-rown justify-space-between align-center' id='employeeBlocks'>
            ${generateManager(teamData.filter(data => data.role === 'Manager'))}
            ${generateEngineer(teamData.filter(data => data.role === 'Engineer'))}
            ${generateIntern(teamData.filter(data => data.role === 'Intern'))}

        </div>
        </main>

    </body>

    </html>`

}

module.exports = generateHtml;