import {
  register,
  login,
  logout,
} from '../controllers/auth/login.controller.js';
import express from 'express';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;
