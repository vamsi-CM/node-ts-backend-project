import express from 'express';
import controller from '@src/controllers/auth';

const router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);

export = router;
