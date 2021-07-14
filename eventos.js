const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function(nombre) {
    this.nombre = nombre
}

util.inherits(Persona, eventEmitter);

let persona = new Persona('Bob');

persona.on('hablar', (mensaje) => {
    console.log(`${persona.nombre}: ${mensaje}`);
});

persona.emit('hablar', 'Hoy es un gran dia.');

//console.log(`me llamo ${persona.nombre}`);

// emitter.on('eventoCustom', (mensaje, estatus) => {
//     console.log(`${estatus}: ${mensaje}`);
// });

// emitter.emit('eventoCustom', 'Mensaje cargado con exito', 200);