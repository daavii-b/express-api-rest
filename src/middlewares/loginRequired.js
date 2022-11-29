import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Missing authorization header'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const decodedData = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, username, email } = decodedData;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['User not found, take a new token.'],
      });
    }

    req.userId = id;
    req.userName = username;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['Invalid authorization header', 'Token is invalid or Token is expired'],
    });
  }
};
