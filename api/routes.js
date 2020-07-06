require('dotenv').config()
const express = require('express')
const models = require('../models')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const userShouldBeLoggedIn = require('../guards/userShouldBeLoggedIn')

const supersecret = process.env.SUPER_SECRET

// GET all users
routes.get('/users', (req, res, next) => {
  models.user
    .findAll()
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// GET user by id
routes.get('/users/:id', (req, res, next) => {
  const { id } = req.params
  models.user
    .findOne({
      where: { id },
    })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// GET user by id + his/her activities
routes.get('/users/:id', (req, res, next) => {
  const { id } = req.params
  models.user
    .findOne({
      where: {
        id,
      },
      include: models.activitie,
    })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// CREATE a user
routes.post('/users', (req, res) => {
  const { name, mail, phone, password } = req.body
  models.user
    .create({ name, mail, phone, password })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// DELETE user by id
routes.delete('/users/:id', (req, res, next) => {
  const { id } = req.params
  models.user
    .destroy({
      where: { id },
    })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// GET all activities
routes.get('/activities', (req, res, next) => {
  models.activitie
    .findAll()
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by id
routes.get('/activities/:id', (req, res, next) => {
  const { id } = req.params
  models.activitie
    .findOne({
      where: { id },
    })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by id + all the users for this activity
routes.get('/activities/:id', (req, res, next) => {
  const { id } = req.params
  models.activitie
    .findOne({
      where: {
        id,
      },
      include: models.user,
    })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by city
routes.get('/activities/:city', (req, res, next) => {
  const { city } = req.params

  models.activitie
    .findOne({
      where: { city },
    })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by category
routes.get('/activities/:category', (req, res, next) => {
  const { category } = req.params
  models.ctivitie
    .findOne({
      where: { category },
    })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by start date
routes.get('/activities/:startDate', (req, res, next) => {
  const { startDate } = req.params

  models.activitie
    .findOne({
      where: { startDate },
    })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// GET activity by name
routes.get('/activities/:name', (req, res, next) => {
  const { name } = req.params
  models.activitie
    .findOne({
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
    address,
    description,
    category,
    picture,
    city,
  } = req.body
  models.activitie
    .create({
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
  models.activitie
    .destroy({
      where: { id },
    })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// ROUTE TO SEARCH ACTIVITY BY CITY
routes.get('/searchByCity/:query', (req, res, next) => {
  const query = req.params.query 
  models.activitie
    .findAll({
      where: {
        city: query
      }
    })
    .then(activity => {
      //if (activity.length < 1) {
        //res.send([{ message : 'There is no activity in this city yet'}])
      //} else {
        res.send(activity)
      //}
    })  
    .catch(err => res.status(500).send(err))
})

// ROUTE FOR AUTHENTICATION
routes.post('/login', (req, res, next) => {
  const { name, password } = req.body
  models.user
    .findAll({
      where: {
        name,
        password,
      },
    })
    .then(results => {
      if (results.length) {
        let token = jwt.sign({ id: results[0].id }, supersecret)
        res.send({ message: 'user ok, here is your token', token })
      } else {
        res.status(404).send({ message: 'User not found' })
      }
    })
})

// ROUTE FOR PROTECTED PAGES (AUTHENTICATION)
routes.get('/profile', userShouldBeLoggedIn, (req, res, next) => {
  res.send({ message: `here is your ${req.id}` })
})

module.exports = routes
