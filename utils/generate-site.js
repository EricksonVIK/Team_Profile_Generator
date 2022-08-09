// write html
// const { rejects } = require('assert')
const fs = require('fs');
// const { resolve } = require('path');

function writeHtml (html) {
    fs.writeFileSync ('./dist/index.html', html) }
    
const copyGenCSS = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if(err) {
            throw err
        } 
        console.log('style.css file copied.')
    })
}

module.exports=writeHtml, copyGenCSS;