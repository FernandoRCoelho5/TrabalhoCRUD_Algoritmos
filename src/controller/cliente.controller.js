import clientService from "../services/cliente.service.js";

async function createClienteController(req, res) {
    const novoCliente = req.body;
    try{
        const cliente = await clientService.createClienteService(novoCliente);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).send(error.message );
    }
}

export default {
    createClienteController
}