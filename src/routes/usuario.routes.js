import usuarioController from "../controller/usuario.controller.js";
import { Router } from "express";

const UsuarioRouter = Router();

UsuarioRouter.post("/usuarios", usuarioController.createUsuarioController);
UsuarioRouter.get("/usuarios", usuarioController.findAllUsuariosController);

export default UsuarioRouter;

