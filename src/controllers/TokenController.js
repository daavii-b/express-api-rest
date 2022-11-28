/* eslint-disable class-methods-use-this */
// import jwt from 'jsonwebtoken';

import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokeController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({ errors: ['Credentials is not valid.'] });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) return res.status(404).json({ errors: ['User not found.'] });

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({ errors: ['Credentials is not valid.'] });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ access_token: token });
    } catch (e) {
      return res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        },
      );
    }
  }
}

export default new TokeController();
