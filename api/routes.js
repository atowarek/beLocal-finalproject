require('dotenv').config()
const express = require('express')
const models = require('../models')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const userShouldBeLoggedIn = require('../guards/userShouldBeLoggedIn')
const supersecret = process.env.SUPER_SECRET
const bcrypt = require('bcryptjs')
const dayjs = require('dayjs')

// GET all users
routes.get('/users', (req, res, next) => {
  models.user
    .findAll()
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// GET user by id
routes.get('/users/:id', (req, res, next) => {
  //const id = req.query.id
  const { id } = req.params
  models.user
    .findOne({
      where: {
        id,
      },
    })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
})

// CREATE a user
routes.post('/users', (req, res) => {
  const { name, mail, phone, password } = req.body
  bcrypt.hash(password, 10).then(hash => {
    models.user
      .create({
        name,
        mail,
        phone,
        password: hash,
      })
      .then(user => res.send(user))
      .catch(err => res.status(500).send(err))
  })
})

// DELETE user by id
routes.delete('/users/:id', (req, res, next) => {
  const { id } = req.params
  models.user
    .destroy({
      where: { id },
    })
    .then(res => {
      if (!error) {
        return res.status(200).send({ message: `User ${id} was deleted` })
      }
      return res.status(404).send({ message: 'No user found' }) //check this
    })
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

// ROUTE TO SEARCH BY CITY AND/OR FILTER BY ACTIVITY
routes.get('/search', (req, res, next) => {
  const city = req.query.city
  const category = req.query.category

  if (!category) {
    models.activitie
      .findAll({
        where: {
          city: city,
        },
      })
      .then(activity => res.send(activity))
      .catch(err => res.status(500).send(err))
  } else if (!city) {
    models.activitie
      .findAll({
        where: {
          category: category,
        },
      })
      .then(activity => res.send(activity))
      .catch(err => res.status(500).send(err))
  } else {
    models.activitie
      .findAll({
        where: {
          city: city,
          category: category,
        },
      })
      .then(activity => res.send(activity))
      .catch(err => res.status(500).send(err))
  }
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

//ROUTE TO ADD USER AND CORRESPONDING ACTIVITIES
routes.post('/userActivities', (req, res, next) => {
  const { userId, activityId } = req.body
  models.user_activitie
    .create({
      userId,
      activityId,
    })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

//ROUTE TO SHOW USER AND HIS ACTIVITIES
routes.get('/userActivities/:id', (req, res, next) => {
  const { id } = req.params
  models.user_activitie
    .findAll({
      where: { userId: id },
      attributes: ['userId'],
      include: [
        {
          model: models.activitie,
        },
      ],
    })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// DELETE user activity by id >> NOT WORKING?
routes.delete('/userActivities/:id', (req, res, next) => {
  const { id } = req.params
  models.user_activitie
    .destroy({
      where: { activityId: id },
    })
    .then(activity => res.send(activity))
    .catch(err => res.status(500).send(err))
})

// ROUTE FOR AUTHENTICATION
// Login user
routes.post('/login', (req, res, next) => {
  const user = models.user
    .findOne({
      where: { name: req.body.name },
    })
    .then(user => {
      if (!user) return res.status(400).send('Cannot find user')
      console.log(user.password)
      bcrypt.compare(req.body.password, user.password).then(response => {
        console.log(req.body.password)
        console.log(response)
        if (response === true) {
          let token = jwt.sign({ id: user.id }, supersecret)
          res.send({ message: 'user ok, here is your token', token })
        } else {
          res.status(404).send({ message: 'User not found' })
        }
      })
    })
})

// ROUTE FOR PROTECTED PAGES (AUTHENTICATION)
routes.get('/profile', userShouldBeLoggedIn, (req, res, next) => {
  let userId = req.id
  res.status(200).send({ userId })
})

module.exports = routes
