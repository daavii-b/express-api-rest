import Router from 'express';
import multer from 'multer';

import fileController from '../controllers/FileController';
import multerConfig from '../config/multer';

const router = new Router();

const upload = multer(multerConfig);

router.post('/', upload.single('file'), fileController.store);

export default router;
