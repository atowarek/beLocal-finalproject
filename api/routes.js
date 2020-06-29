const express = require('express')

const db = require('./lib/database')

const routes = express.Router()

routes.get('/users', (req, res) => {
    db('select * from users;').then(results => {
        if(results.error) {
            res.status(400).send({message: 'There was an error'})
        }
        res.send(results.data)
    })   
})

module.exports = routes