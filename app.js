const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('hello world!')
})

app.listen(3002, function () {
  console.log('Example app listening on port 3002!')
})
