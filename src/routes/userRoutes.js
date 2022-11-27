import Router from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
- index -> Lista todos os usuários : GET
- store/create -> Cria um usuário : POST
- delete -> Exclui um usuário : DELETE
- show -> Mostra um usuaŕio : GET
- update -> Atualizar um usuário : PUT
*/
