const express = require('express')
const morgan = require('morgan')

const app = express()

// settings
app.set('serverName', 'Static')
app.set('port', 7000)

// middleware
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(7000, () => {
  console.log(`Server ${app.get('serverName')} started on port ${app.get('port')}`)
})