'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      userName: "atowarek",
      mail: "atowarek@gmail.com",
      phone: "654321111",
      password: "atowarek"
    },{
      userName: "eurzanqui",
      mail: "estherurzanqui81@gmail.com",
      phone: "654321987",
      password: "eurzanqui"
    },{
      userName: "mclara",
      mail: "mariona.clto@gmail.com",
      phone: "654321986",
      password: "mclara"
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('wine', null, {});
  }
};
