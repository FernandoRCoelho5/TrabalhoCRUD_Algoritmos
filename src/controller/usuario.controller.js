import usuarioService from "../services/usuario.service.js";

async function createUsuarioController(req, res) {
    const novoUsuario = req.body;
    try{
        const usuario = await usuarioService.createUsuarioService(novoUsuario);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).send(error.message );
    }
}

async function findAllUsuariosController(req, res) {
    try {
    const usuarios = await usuarioService.findAllUsuariosService();
    res.status(200).send({usuarios});
    } catch (error) {
        res.status(404).send(error.message);
    }
}

export default {
    createUsuarioController,
    findAllUsuariosController   
}