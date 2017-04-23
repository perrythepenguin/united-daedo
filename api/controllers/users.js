const express = require('express')
const router = express.Router()
const {poolQuery} = require('../helpers')

router.get('/', function(req, res) {
  poolQuery(`SELECT * FROM users WHERE username = 'perry'`).then(
    ([row]) => res.send({user: row})
  )
})

router.post('/', function(req, res) {
  const {username, password} = req.body;
  poolQuery('INSERT INTO users SET ?', {username, password}).then(
    () => res.send({user: username})
  )
})

module.exports = router
