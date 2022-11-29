import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { id, username, email } = await User.create(req.body);

      return res.json({ id, username, email });
    } catch (e) {
      return res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        },
      );
    }
  }

  async upgrade(req, res) {
    try {
      const { userName } = req;

      const user = await User.findOne({
        attributes: [
          'id', 'username', 'email',
        ],
        where: {
          userName,
        },
      });

      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      await user.update(req.body);

      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json('Internal Server Error');
    }
  }

  async delete(req, res) {
    try {
      const { userName } = req;

      const user = await User.findOne({
        where: {
          userName,
        },
      });

      if (!user) {
        return res.status(404).json('User not found');
      }

      await user.destroy();

      return res.status(204).json({
        message: 'User deleted successfully',
      });
    } catch (e) {
      return res.status(500).json('Internal Server Error');
    }
  }

  // async index(req, res) {
  //   try {
  //     const users = await User.findAll();

  //     return res.status(200).json(users);
  //   } catch (e) {
  //     return res.status(500).json('Internal Server Error');
  //   }
  // }

  // async show(req, res) {
  //   try {
  //     const { username } = req.params;
  //     const user = await User.findOne({
  //       where: {
  //         username,
  //       },
  //     });

  //     if (!user) {
  //       return res.status(404).json(
  //         {
  //           errors: ['User not found'],
  //         },
  //       );
  //     }

  //     return res.json(user);
  //   } catch (e) {
  //     return res.status(500).json('Internal Server Error');
  //   }
  // }
}

export default new UserController();
