import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        first_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
          validate: {
            len: {
              args: [3, 100],
              msg: 'First Name must have at least 3 characters and max 100',
            },
          },
        },
        last_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
          validate: {
            len: {
              args: [3, 100],
              msg: 'Last Name must have at least 3 characters and max 100',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
          unique: {
            msg: 'Email already exists',
          },
          validate: {
            isEmail: {
              msg: 'Please enter a valid email address',
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Age must be a number',
            },
          },
        },
      },
      { sequelize },
    );

    return this;
  }
}
