/* eslint-disable class-methods-use-this */
import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).json('error');
    }
  }
}

export default new UserController();
