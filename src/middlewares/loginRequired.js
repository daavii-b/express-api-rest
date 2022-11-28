import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Missing authorization header'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const decodedData = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = decodedData;

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['Invalid authorization header', 'Token is invalid or Token is expired'],
    });
  }
};
