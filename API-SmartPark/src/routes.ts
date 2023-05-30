import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
const router = Router();
//Rotas USER ------------
router.post('/smartpark/userinsert', new CreateUserController().handle)

router.post('/smartpark/login', new AuthUserController().handle)
export { router };