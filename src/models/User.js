import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 100],
            msg: 'Username must have at least 5 chars and max 100.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already exists.',
        },
        validate: {
          isEmail: {
            msg: 'Email is not valid.',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 100],
            msg: 'Password must have at least 8 chars and max 100.',
          },
        },
      },
    }, { sequelize });

    this.addHook('beforeSave', async (user) => {
      if (!user.password) return;
      // eslint-disable-next-line no-param-reassign
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
