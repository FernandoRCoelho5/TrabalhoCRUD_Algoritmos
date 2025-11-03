import clientecontroller from "../controller/cliente.controller.js";
import { Router } from "express";

const ClienteRouter = Router();

ClienteRouter.post("/clientes", clientecontroller.createClienteController);

export default ClienteRouter;