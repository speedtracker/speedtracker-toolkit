'use strict'

const PORT = 8050

const app = require('express')()
const cors = require('cors')
const crypto = require('crypto')

app.use(cors())

app.get('/encrypt/:key/:text?', (req, res) => {
  const key =req.params.key
  const text = req.params.text || req.params.key

  const cipher = crypto.createCipher('aes-256-ctr', key)
  let encrypted = cipher.update(decodeURIComponent(text), 'utf8', 'hex')
  
  encrypted += cipher.final('hex')
  
  res.send(encrypted)
})

app.get('/decrypt/:key/:text?', (req, res) => {
  const decipher = crypto.createDecipher('aes-256-ctr', req.params.key)
  let decrypted = decipher.update(req.params.text, 'hex', 'utf8')
  
  decrypted += decipher.final('utf8')
  
  res.send(decrypted)
})

app.listen(PORT, () => {
  console.log(`* Server listening on port ${PORT}...`)
})
