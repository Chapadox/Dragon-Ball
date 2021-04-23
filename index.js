const express = require('express')
const app = express()
const port = 3000
const api = require('./router/routes')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
api(app)

app.listen(port, () => console.log(`Servidor Online na porta ${port}`))