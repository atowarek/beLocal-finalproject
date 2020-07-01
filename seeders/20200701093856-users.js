'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: "atowarek",
      mail: "atowarek@gmail.com",
      phone: "654321111",
      password: "atowarek"
    },{
      name: "eurzanqui",
      mail: "estherurzanqui81@gmail.com",
      phone: "654321987",
      password: "eurzanqui"
    },{
      name: "mclara",
      mail: "mariona.clto@gmail.com",
      phone: "654321986",
      password: "mclara"
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
