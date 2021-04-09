const express = require("express");
const router = express.Router();
const Mascota = require("../models/mascota");

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

module.exports = router;
