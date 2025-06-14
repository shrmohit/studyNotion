import {
  register,
  login,
  logout,
} from '../controllers/auth/login.controller.js';
import { sendOtp, verify } from '../controllers/auth/otp.controller.js';
import express from 'express';

const router = express.Router();

// user
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// otp
router.post('/sendotp', sendOtp);
router.post('/verify', verify);

export default router;
