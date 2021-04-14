const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  MTR:  String,
  TECH: String,
  DATE: String,
  WO: String,
  LANE: String,
  NDE: String,
  DE: String,
  GOB: String
});

// Crear el modelo
const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;