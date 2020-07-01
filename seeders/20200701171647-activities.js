'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('activities', [{
      name: "Narrow-Gauge Railway Route I",
      startDate: "2020-07-29",
      endDate: "2020-07-29",
      startHour: "16:00:00",
      endHour: "21:00:00",
      hostingId: "3",
      longitude: "41.979061",
      latitude: "2.815438",
      address: "Girona bus station",
      description: "Catch a bus to Olot with me to do this 57-km route from Olot (440 m) to Girona (70 m). Its highest point is at Coll d´en Bas, which is a pass situated 558 metres above sea level. The trail, which is suitable for hikers and cyclists alike, is in very good condition, fitted with bridges, railings and signposting.",
      category: "biking",
      picture: "/img/biking-route.jpg",
      city: "Girona"
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('activitie', null, {});
  }
};
