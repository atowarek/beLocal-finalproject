'use strict'
const dayjs = require('dayjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('activities', [
      {
        name: 'Narrow-Gauge Railway Route',
        startDate: '2020-07-29',
        endDate: '2020-07-29',
        startHour: '16:00:00',
        endHour: '21:00:00',
        hostingId: '3',
        longitude: '41.979061',
        latitude: '2.815438',
        address: 'Girona bus station',
        description:
          'Catch a bus to Olot with me to do this 57-km route from Olot (440 m) to Girona (70 m). Its highest point is at Coll d´en Bas, which is a pass situated 558 metres above sea level. The trail, which is suitable for hikers and cyclists alike, is in very good condition, fitted with bridges, railings and signposting.',
        category: 'cycling',
        picture: '/img/Ruta.jpg',
        city: 'Girona',
      },
      {
        name: 'Learn how to cook Paella',
        startDate: '2020-07-21',
        endDate: '2020-07-21',
        startHour: '11:30:00',
        endHour: '15:00:00',
        hostingId: '2',
        longitude: '41.393205',
        latitude: '2.154344',
        address: 'C/ corsega 255',
        description:
          "In this amazing day we´ll go for a quick but rewarding tour around Boquerías´s Market, followed by a warm an relaxed Paella lunch in a lovely apartment just 5 minutes walking away! I will show you where I buy all the fresh ingredients for the Paella, and we will walk through the fabulous market, my favorite place in Barcelona, so that you can see in detail how one of the most iconic markets in Europe lives. From there we will go to my house, where we will have appetizers, I´ll teach you how to prepare the Spanish 'bread with tomato', we will make sangria together, and the delicious Catalan cream for dessert, while we wait for the Paella :). All this in a beautiful living room with balconies to the Ramblas, with soft drinks, beer and good wines, it´ll be a day that you will enjoy a lot!",
        category: 'food and drinks',
        picture: '/img/paella.jpg',
        city: 'Barcelona',
      },
      {
        name: 'Create your own ring',
        startDate: '2020-07-23',
        endDate: '2020-07-23',
        startHour: '16:00:00',
        endHour: '19:30:00',
        hostingId: '1',
        longitude: '41.850533',
        latitude: '3.128077',
        address: 'C/ alba 36',
        description:
          "During this experience, you'll discover the essential technics of jewelry and the process of making a silver ring. I will let you choose your ring from samples of what can be done during the workshop, then we will melt the metal to make an ingot and then a silver wire. Then, will come the moment of making your jewel. Sawing, hammering or texturing the metal, welding, filing and finally polishing will be the actions you will put into practice. I will be present and advise throughout the entire manufacturing steps, so that you can leave with your jewel. All Material (sterling silver) and tools will be provided. Water, tea, coffee and maté available during the class.",
        category: 'crafts',
        picture: '/img/ring.jpeg',
        city: 'Palamós',
      },
      {
        name: 'Ride Medieval Landscapes',
        startDate: '2020-07-25',
        endDate: '2020-07-25',
        startHour: '10:00:00',
        endHour: '18:00:00',
        hostingId: '3',
        longitude: '41.575336',
        latitude: '1.240410',
        address: 'C/ major 13',
        description:
          "After a welcome coffee to our XV century old house, we'll go downstairs to the stables to brush and saddle up the horses, and then we'll ride for about two hours across the silent, ancient landscape of Segarra, the Catalan Tuscany, on our way to some small medieval Catalan village. Wheat and barley fields, organic wineyards, old almond and olive trees, hills and slopes furrowed by ancient dry stone walls and incredible views will melt before your sight. Don’t worry if you’ve never ridden before, you'll be a small group so we will be on hand to help, instruct and support you. After riding you can explore our small village and go up to the XI century watchtower to see the amazing views. Then we will cook and share a traditional paella in our garden made with homegrown and very local products, while we talk about life and passions. And, from May to October, you can also swim in our natural pool. So don't miss your swimsuit!",
        category: 'animals',
        picture: '/img/horse-riding.jpg',
        city: "L'ametlla de Segarra",
      },
      {
        name: 'Tango lessons & drinks',
        startDate: '2020-07-26',
        endDate: '2020-07-26',
        startHour: '19:00:00',
        endHour: '20:00:00',
        hostingId: '1',
        longitude: '41.645765',
        latitude: '1.144016',
        address: 'C/ joan brossa 34',
        description:
          "Join our authentic “Tango experience” and discover the magic of embraces while you enjoy drinks in a great rooftop. An unique way of meeting locals, having fun, experience a local life-style, learn something new and embrace! - First, relax and enjoy drinks in our wonderful rooftop. - A very dynamic lesson of Tango Argentino with professional dancers, no need any experience! will introduce you to the essence of tango. We’ll guide you through the basic elements while discovering, little by little, the magic of communicating within an embrace, using gentle movements. Even if you think you have 2 left feet, you will dance!!! - Photos and video time! During the experience we'll take photos and videos so you can practice at home!",
        category: 'dancing',
        picture: '/img/tango.jpg',
        city: 'Tàrrega',
      },
      {
        name: 'Wine and alpacas at Can Marlès',
        startDate: '2020-08-02',
        endDate: '2020-08-02',
        startHour: '12:00:00',
        endHour: '14:30:00',
        hostingId: '2',
        longitude: '41.328277',
        latitude: '1.441245',
        address: 'Finca Can Marlès',
        description:
          'We will know the history of this area of the Baix Penedès, (El Montmell) we will walk through the vineyards and the wine tourism project, old farmhouses and the winery and organic wine making, we will visit a spectacular and exclusive herd of 11 alpacas (four born here), their adaptation, customs and that way of being that characterizes them and makes them so unique, we will be able to know the quality of their wool, feed them ... and we will end up at the winery with a wine tasting of three indigenous and ecological varieties, paired with products of the area. We can discover and collect some medicinal or aromatic plants for cooking.',
        category: 'food and drinks',
        picture: '/img/alpaca.jpg',
        city: 'Can Ferrer de la Cogullada',
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('activitie', null, {})
  },
}
