import Router from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

/*
- index -> Lista todos os usuários : GET
- show -> Mostra um usuaŕio : GET
- store/create -> Cria um usuário : POST
- delete -> Exclui um usuário : DELETE
- update -> Atualizar um usuário : PUT
*/

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.store);
router.get('/:username', userController.show);
router.put('/:username', loginRequired, userController.upgrade);
router.delete('/:username', loginRequired, userController.delete);

export default router;
