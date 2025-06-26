const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Donacion = require('../models/donacion')

// Controlador para crear la sesión de pago en Stripe
exports.createCheckoutSession = async (req, res, next) => {
      // Obtiene el monto enviado desde el frontend
  const { amount, nombre, correo, telefono, comentario } = req.body

  // Validación básica
  if (!amount || typeof amount !== 'number' || amount <= 0) {
    const error = new Error('Monto inválido.')
    error.status = 400
    return next(error)
  }
  if (!nombre || typeof nombre !== 'string' || nombre.trim().length < 4) {
    const error = new Error('Nombre inválido.')
    error.status = 400
    return next(error)
  }
  if (!correo || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(correo)) {
    const error = new Error('Correo inválido.')
    error.status = 400
    return next(error)
  }
  if (!telefono || !/^\d{10,}$/.test(telefono)) {
    const error = new Error('Teléfono inválido.')
    error.status = 400
    return next(error)
  }


  try {
    // Guarda la donación en MongoDB
    // await Donacion.create({
    //   nombre,
    //   correo,
    //   telefono,
    //   monto: amount,
    //   comentario
    // });
    

    
    // Crea una nueva sesión de pago en Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'mxn',
          product_data: { name: 'Donación' },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:8081/donacion?success=true',
      cancel_url: 'http://localhost:8081/cancel',
      customer_email: correo, //Pasa directamente el correo del usuario
      //Guarda los datos del usuario en stripe
      metadata: {
        nombre,
        correo,
        telefono,
        comentario
      }      
    });
    // Devuelve el ID de la sesión al frontend
    res.json({ id: session.id })
  } catch (error) {
    next(error)
  }
  
}

// Webhook de Stripe: recibe eventos de Stripe
exports.stripeWebhook = async (req, res) => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

  //Verfica la firma del webhook
  const sig = req.headers['stripe-signature']
  let event

  try {
    // Verifica y construye el evento usando el body RAW y el secreto
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Solo cuando el pago es exitoso
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    try {
      // Guarda la donación en MongoDB usando los datos de metadata de Stripe
      await Donacion.create({
        nombre: session.metadata.nombre,
        correo: session.metadata.correo,
        telefono: session.metadata.telefono,
        monto: session.amount_total,
        comentario: session.metadata.comentario || ''
      });
    } catch (err) {
      return res.status(500).send('Error al guardar la donación')
    }
  }

  res.json({ received: true })
}