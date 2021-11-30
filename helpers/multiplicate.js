const fs = require('fs');

const createFile = async( base = 1, list = false, limit = 10 ) => {

    try {

        if ( isNaN( base ) ) throw 'Not a number recibe'; 

        let output = '';
        let outputFile = '';

        for (let i = 1; i <= limit; i++ ) {
            
            outputFile += `${ base } x ${ i } = ${ base * i }\n`;
            output += `${ base } ${ 'x' }  ${ i } ${ '=' } ${ base * i }\n`;
        }

        if ( list ) {
            console.log('===================================='.gray);
            console.log('Tabla del: '.cyan + `${ base }`.brightMagenta);
            console.log('===================================='.gray);

            console.log( output );
        }
        

        fs.writeFileSync(`./output/table-${ base }.txt`, outputFile );
        
        return `table-${ base }.txt`;

    } catch (error) {
        
        throw error;
    }
}

module.exports = {
    createFile
}