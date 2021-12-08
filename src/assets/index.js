const express = require('express');


//Creacion de Servidor
const app = express();

//GET
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'todo',
        uid: 1234
    });
});

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});

console.log("hola");
