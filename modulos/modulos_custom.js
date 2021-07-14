const persona = require('./persona');

let pablo = new persona('Pablo');

pablo.on('habla', (mensaje) => {
    console.log(`${pablo.nombre}: ${mensaje}`);
});

pablo.emit('habla', 'Hoy va a ser un gran dia');