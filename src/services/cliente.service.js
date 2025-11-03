import clienteRepository from "../repositories/cliente.repository.js";


async function createClienteService(novoCliente) {
    const cliente = await clienteRepository.createClienteRepository(novoCliente);
    return cliente;
}

export default {
    createClienteService
}