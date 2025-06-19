import {
  changePassword,
  forgetPassword,
  resetPassword,
} from '../controllers/auth/password.controller.js';
import {
  register,
  login,
  logout,
} from '../controllers/auth/login.controller.js';
import { sendOtp, verify } from '../controllers/auth/otp.controller.js';
import express from 'express';
import { isAuthentication } from '../middlewares/isAuthentication.js';

const router = express.Router();

// user
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// otp
router.post('/sendotp', sendOtp);
router.post('/verify', verify);

// password api
router.post('/changepassword', changePassword);
router.post('/resetpassword/:token', resetPassword);
router.post('/forgetpassword', forgetPassword);
export default router;
