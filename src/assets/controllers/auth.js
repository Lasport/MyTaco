const { response } = require('express');



const crearUsuario = (req, res = response) => {

    return res.json({
        ok: true,
        msg: 'Crear Usuario /new'
    });

}

const loginUsuario = (req, res) => {

    return res.json({

        ok: true,
        msg: 'Login del Usuario'

    });

}

const revalidarToken = (req, res) => {

    return res.json({

        ok: true,
        msg: 'Renew'

    });

}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}
