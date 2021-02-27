
const argv = require('./config/yargs');
const { createFile } = require('./helpers/multiplicate');
const colors = require('colors');

console.clear();

const { base, list, limit } = argv; 

createFile( base, list, limit )
    .then( fileName => console.log( `${ fileName } created`.yellow) )
    .catch( err => console.log( err ));
