const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      username: 'John Doe',
      email: 'john.doe@gmail.com',
      password_hash: await bcryptjs.hash('user1234', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      username: 'John Moer',
      email: 'john.moer@gmail.com',
      password_hash: await bcryptjs.hash('user1234', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      username: 'Johnoe',
      email: 'johnoe@gmail.com',
      password_hash: await bcryptjs.hash('user1234', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

  async down() {
    // no used
  },
};
