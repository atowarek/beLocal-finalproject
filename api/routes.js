const express = require('express')
const models = require('../models')
const routes = express.Router()

// GET all users
routes.get('/users', (req, res, next) => {
  models.Users.findAll()
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// GET user by id
routes.get('/users/:id', (req, res, next) => {
  const { id } = req.params
  models.Users.findOne({
    where: { id },
  })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// GET user by id + his/her activities
routes.get('/users/:id', (req, res, next) => {
  const { id } = req.params
  models.Users.findOne({
    where: {
      id,
    },
    include: models.Activities,
  })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// CREATE a user
routes.post('/users', (req, res) => {
  const { name, mail, phone, password } = req.body
  models.Users.create({ name, mail, phone, password })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// DELETE user by id
routes.delete('/users/:id', (req, res, next) => {
  const { id } = req.params
  models.Users.destroy({
    where: { id },
  })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// GET all activities
routes.get('/activities', (req, res, next) => {
  models.Activities.findAll()
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by id
routes.get('/activities/:id', (req, res, next) => {
  const { id } = req.params
  models.Activities.findOne({
    where: { id },
  })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by id + all the users for this activity
routes.get('/activities/:id', (req, res, next) => {
  const { id } = req.params
  models.Activities.findOne({
    where: {
      id,
    },
    include: models.Users,
  })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by city
routes.get('/activities/:city', (req, res, next) => {
  const { city } = req.params

  models.Activities.findOne({
    where: { city },
  })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by category
routes.get('/activities/:name', (req, res, next) => {
  const { category } = req.params
  models.Activities.findOne({
    where: { category },
  })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by start date
routes.get('/activities/:startDate', (req, res, next) => {
  const { startDate } = req.params

  models.Activities.findOne({
    where: { startDate },
  })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by name
routes.get('/activities/:name', (req, res, next) => {
  const { name } = req.params
  models.Activities.findOne({
    where: { name },
  })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// create an activity
routes.post('/activities', (req, res) => {
  const {
    name,
    startDate,
    endDate,
    startHour,
    endHour,
    hostingId,
    longitude,
    latitude,
    address, //DO WE NEED ADDRESS? IF WE HAVE CITY, LONGITUDE AND LATITUDE
    description,
    category,
    picture,
    city,
  } = req.body
  models.Activities.create({
    name,
    startDate,
    endDate,
    startHour,
    endHour,
    hostingId,
    longitude,
    latitude,
    address,
    description,
    category,
    picture,
    city,
  })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// DELETE activity by id
routes.delete('/activities/:id', (req, res, next) => {
  const { id } = req.params
  models.Activities.destroy({
    where: { id },
  })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

module.exports = routes
