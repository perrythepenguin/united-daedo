const app = require('./app')
const http = require('http').Server(app)

http.listen(3500, function() {
  console.log('Server listening on api port:', 3500)
})
