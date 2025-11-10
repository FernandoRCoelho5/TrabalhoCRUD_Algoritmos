import usuarioRepository from "../repositories/usuario.repository.js";


async function createUsuarioService(novoUsuario) {
    const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);

    if (!usuario) {
        throw new Error('Erro ao criar novo usuário!');
    }

    return usuario;
}

async function findAllUsuariosService() {
    const usuarios = await usuarioRepository.findAllUsuariosRepository();
    return usuarios;
}

export default {
    createUsuarioService,
    findAllUsuariosService
}

