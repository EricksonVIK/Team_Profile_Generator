// write html
const fs = require('fs');

function writeHtml (html) {
    fs.writeFileSync ('./dist/index.html', html) 
    console.log('HTML has been created!')
    fs.copyFileSync ('./src/css/style.css', './dist/style.css')
    fs.copyFileSync ('./src/css/generalstyle.css', './dist/generalstyle.css')
    console.log('CSS sheets have been copied.')
}

    
// function copyFile () {
//     fs.copyFileSync ('./src/style.css', './dist/style.css')}

module.exports = writeHtml;