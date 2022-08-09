// write html
// const { rejects } = require('assert')
const fs = require('fs');
// const { resolve } = require('path');

function writeHtml (html) {
    fs.writeFileSync ('./dist/index.html', html) }
    


module.exports=writeHtml;