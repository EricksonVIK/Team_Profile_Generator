// write html
const { rejects } = require('assert')
const fs = require('fs');
const { resolve } = require('path');

function generatePage (html) {
    fs.writeFile('./dist/index.html', html, err => {
        if (err) {
            reject(err)
            return;
        } 
        resolve({
            ok:true,
            message: 'HTML created.'
        });
    });
};