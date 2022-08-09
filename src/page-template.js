// 

// loop to create employee cards?

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
        // link style sheet
        // any script to link?
    </head>
    < body>
        <nav>
            <div>
                <span>My Team</>
            <div>
        </nav>

        <div>
            <div>To hold Employee cards</div>
            ${generateManager(teamData.filter(data => data.role === 'Manager'))}
            ${generateEngineer(teamData.filter(data => data.role === 'Engineer'))}
            ${generateIntern(teamData.filter(data => data.role === 'Intern'))}

        </div>

    </body>

    </html>`

}

module.exports = generateHtml;