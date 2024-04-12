const express = require('express')
const serverless = require('serverless-http')
const router = express.Router()
const app = express()
const port = 3000

router.get('/', (req, res) => {
  res.json({ status: 'true', message: 'is running' })
})

router.get('/pos-lite', (req, res) => {
  res.json({ status: 'true', message: 'hello' })
})

app.use('/api', router)

// // define the about route
// router.get('/about', (req, res) => {
//   res.send('About birds')
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

exports.handler = serverless(app);