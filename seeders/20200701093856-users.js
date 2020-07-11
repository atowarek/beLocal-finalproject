'use strict'
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Anna',
        mail: 'atowarek@gmail.com',
        phone: '654321111',
        password: bcrypt.hashSync('atowarek', 10),
      },
      {
        name: 'eurzanqui',
        mail: 'estherurzanqui81@gmail.com',
        phone: '654321987',
        password: bcrypt.hashSync('eurzanqui', 10),
      },
      {
        name: 'mclara',
        mail: 'mariona.clto@gmail.com',
        phone: '654321986',
        password: bcrypt.hashSync('mclara', 10),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  },
}
