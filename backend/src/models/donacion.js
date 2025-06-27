const mongoose = require('mongoose');

//Define la estructura
const DonacionSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  telefono: String,
  monto: Number,
  comentario: String,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donacion', DonacionSchema);