const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors');

const argv = require('./config/yargs')

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg.rainbow))
    .catch(err => console.log(err));
