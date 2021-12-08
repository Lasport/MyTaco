const express = require('express');
const cors = require('cors');


//Creacion de Servidor
const app = express();

//CORS
app.use(cors());

//Lectura y Parseo del body
app.use(express.json);

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});
