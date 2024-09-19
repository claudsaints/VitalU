import { Router } from 'express';
import User from '../controllers/User';

const routes = Router();

routes.post('/', User.Cadastrar_Novo_Usuario);

export default routes;
