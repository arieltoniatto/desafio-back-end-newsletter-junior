module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('forms_answers',
      [{
        id: 1,
        display_name: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        cpf: '12345678910',
        phone: '999999999',
        created_at: '2025-01-10',
      },
      {
        id: 2,
        display_name: 'Michael Schumacher',
        email: 'MichaelSchumacher@gmail.com',
        cpf: '12345678910',
        phone: '999999999',
        created_at: '2029-01-10',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('forms_answers', null, {});
  },
};