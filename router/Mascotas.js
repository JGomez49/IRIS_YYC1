
const express = require("express");
const router = express.Router();
const Mascota = require("../models/mascota");

router.get("/", async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    res.render("mascotas", {
        arrayMascotas: arrayMascotasDB
      });
  } catch (error) {   
    console.log(error);
  }
});

router.get('/nuevo', (req,res) => {
  res.render('nuevo');
});

router.post('/', async(req,res) => {
  const infoNuevo = req.body;
  try {
    //---- Opcion 1 para crear en la base de datos-----
    // const mascotaDB = new Mascota(infoNuevo);
    // await mascotaDB.save();
    //-------------------------------------------------

    //----- Opcion 2 ----------------------------------
    await Mascota.create(infoNuevo);
    //-------------------------------------------------

    res.redirect('/mascotas');

  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async(req,res) => {
  const id = req.params.id
  try {   
    const mascotaDB = await Mascota.findOne({_id: id});
    console.log(mascotaDB);
    res.render('detalle', {
      mascota: mascotaDB,
      error: false
    });
  } catch (error) {
    console.log(error);
    res.render('detalle', {
      error: true,
      mensaje: "id no encontrado."
    });
  }
});

router.delete('/:id', async(req,res) => {
  const id = req.params.id
  try {
    const mascotaDB = await Mascota.findByIdAndDelete({_id:id});
    if (mascotaDB) {
      res.json({
        estado: true,
        mensaje: "eliminado"
      })
    } else {
      res.json({
        estado: false,
        mensaje: "no se pudo eliminar"
      })
    } 
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async(req,res) => {
  const id = req.params.id
  const infoActualizar = req.body
  try {
    mascotaDB = await Mascota.findByIdAndUpdate(id, infoActualizar, {useFindAndModify: false})
    console.log(mascotaDB)
    res.json ({
      estado: true,
      mensaje: "Mascota editada"
    });

  } catch (error) {
    console.log(error);
    res.json ({
      estado: false,
      mensaje: "Mascota no se pudo editar"
    });
  }
});

module.exports = router;
