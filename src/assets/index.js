const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

const app = express();

// Base de datos
dbConnection()

//Directorio publico
app.use(express.static('public'));

//Cors
app.use(cors());

//lectura y parseo del body

app.use(express.json());


app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
