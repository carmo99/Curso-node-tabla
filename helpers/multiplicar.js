
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => 
{
    try
    {
        let salida = '';
        let consola = '';
        for( let i = 1; i<=hasta; i++)
        {
            consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar)
        {
            console.log("===================".rainbow);
            console.log(`   Tabla del:${base}`.rainbow);
            console.log("===================".rainbow);
            console.log(consola);
        }
        fs.writeFileSync( `./salida/Tabla-${base}.txt`, salida)
        return `Tabla-${base}.txt creada`;
    }
    catch (err)
    {
        throw `No se pudo crear: Tabla-${base}.txt`;
    }
}

module.exports = 
{
    crearArchivo
}