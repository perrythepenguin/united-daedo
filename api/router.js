module.exports = function(app, pool) {
  app.use('/users', require('./controllers/users'))
}
