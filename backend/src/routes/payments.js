const express = require('express')
const router = express.Router()
const paymentsController = require('../controllers/payments')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// Ruta para crear una sesión de pago con Stripe
router.post('/create-checkout-session', paymentsController.createCheckoutSession)
// Ruta para recibir eventos de Stripe (webhook)
router.post('/webhook', express.raw({ type: 'application/json' }), paymentsController.stripeWebhook)

module.exports = router
