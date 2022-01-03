const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, login, validar } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//crear usuario
router.post('/new', [
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'la contraseña debe ser minimo de 6 caracteres').isLength({ min: 6 }),
    validarCampos
], crearUsuario);


//login
router.post('/', [
    check('email', 'el email es obligartorio').isEmail(),
    check('password', 'el password es obligatorio').isLength({ min: 6 }),
    validarCampos
], login);


//renew
router.get('/renew', validarJWT, validar);


module.exports = router;
