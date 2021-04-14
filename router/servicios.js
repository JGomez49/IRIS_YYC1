
const express = require("express");
const router = express.Router();
const Mascota = require("../models/mascota");

//-----------------------------------------------------
router.get("/", async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find(); 
    res.render("servicios", {
        arrayMascotas: arrayMascotasDB
      });
  } catch (error) {   
    console.log(error);
  }
});
//-----------------------------------------------------


//-----------------------------------------------------
router.get('/:MTR/:LANE/:TECH/:WO', async(req,res) => {
  const MTR = req.params.MTR
  const LANE = req.params.LANE
  const TECH = req.params.TECH
  const WO = req.params.WO
  // console.log(MTR);
  // console.log(LANE);
  try {
    const arrayMascotasDB = await Mascota.find();
    // console.log(arrayMascotasDB);
    res.render("servicios", {
        arrayMascotas: arrayMascotasDB,
        error: false,
        MTR: MTR,
        LANE: LANE,
        TECH: TECH,
        WO: WO
      });
  } catch (error) {
    console.log(error);
    res.render('servicios', {
      error: true,
      mensaje: "MTR o LANE no encontrados."
    });
  }
});
//---------------------------------------------------

//-----------------------------------------------------
router.get('/:MTR/:LANE/:TECH/:WO/nuevo', async(req,res) => {
  const MTR = req.params.MTR
  const LANE = req.params.LANE
  const TECH = req.params.TECH
  const WO = req.params.WO
  // console.log(MTR);
  // console.log(LANE);
  try {
    const arrayMascotasDB = await Mascota.find();
    // console.log(arrayMascotasDB);
    res.render("nuevo", {
        arrayMascotas: arrayMascotasDB,
        error: false,
        MTR: MTR,
        LANE: LANE,
        TECH: TECH,
        WO: WO
      });
  } catch (error) {
    console.log(error);
    res.render('servicios', {
      error: true,
      mensaje: "MTR o LANE no encontrados."
    });
  }
});
//---------------------------------------------------


module.exports = router;