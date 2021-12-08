const { Router } = require('express');
const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth');

const router = Router();


//Crear usuario
router.post('/new', crearUsuario);


//Login Usuario
router.post('/', loginUsuario);


//Validar y revalida
router.get('/renew', revalidarToken);



module.exports = router;
