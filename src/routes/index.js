const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get('/models', (req, res) => {
  res.send('History the supra')
})

module.exports = router