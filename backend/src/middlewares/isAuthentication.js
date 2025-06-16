import jwt from 'jsonwebtoken';

export const isAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        message: 'Access denied',
        success: false,
      });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    console.log('Error in authentication', error);
  }
};
