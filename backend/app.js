const express = require('express')
const cors = require('cors')
require('dotenv').config()
const paymentsRouter = require('./src/routes/payments')
const paymentsController = require('./src/controllers/payments')
const errorHandler = require('./src/middleware/errorHandler')

const app = express()
//Permite peticiones desde el frontend
app.use(cors())

app.post('/api/payments/webhook', express.raw({ type: 'application/json' }), paymentsController.stripeWebhook)

app.use(express.json())
app.use('/api/payments', paymentsRouter)

app.use(errorHandler);

module.exports = app