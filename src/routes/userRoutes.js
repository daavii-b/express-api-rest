import Router from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

/*
- index -> List all Users: GET
- show -> Show an User : GET
- store/create -> Make an User : POST
- delete -> Delete an User : DELETE
- update -> Update an User : PUT
*/

const router = new Router();

// These routes don`t must exists, only admins must be allowed to acess these routes.
// router.get('/', userController.index);
// router.get('/:username', userController.show);

router.post('/', userController.store);

// User will be identifier by your token
router.put('/', loginRequired, userController.upgrade);
router.delete('/', loginRequired, userController.delete);

export default router;
