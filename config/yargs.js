const argv = require('yargs')
        .options({
            'b': {
                alias: 'base',
                type: 'number',
                demandOption:true,
                desc: 'Multiplication table base' 
            },
            'l': {
                alias: 'list',
                type: 'boolean',
                default: false,
                desc: 'Show multiplication table in console'
            },
            't': {
                alias: 'limit',
                type: 'number',
                default: 10,
                desc: 'Limit for multiplication table'
            }
        })
        .check( ( argv, options ) => {
            if ( isNaN( argv.b ) ) {
                throw 'The base should be a number'; 
            } else {
                return true;
            }
        } )
        .argv;

module.exports = argv;