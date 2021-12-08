const express = require('express');


//Creacion de Servidor
const app = express();

//GET
app.get('/', () => {

    res.json({
        ok: true,
        msg: 'todo'
    });

});

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});

console.log("hola");
