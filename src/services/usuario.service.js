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

async function findUsuarioByIdService(id) {
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id);
    if (!usuario) {
        throw new Error('Usuário não encontrado!');
    }
    return usuario;
}

export default {
    createUsuarioService,
    findAllUsuariosService,
    findUsuarioByIdService
}

