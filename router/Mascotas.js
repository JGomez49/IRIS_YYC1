const express = require("express");
const router = express.Router();

const Mascota = require("../models/mascota");

router.get("/", async (req, res) => {
  try {

    const arrayMascotasDB = await Mascota.find();
    //console.log(arrayMascotasDB);

    res.render("mascotas", {
        arrayMascotas: arrayMascotasDB
/*         [

                     {
                     id: '001',
                     nombre: 'rex',
                     descripcion: 'Gato'
                 },
                 {
                     id: '002',
                     nombre: 'rufo',
                     descripcion: 'Perro'
                 }  
        ], */
        
      });


  } catch (error) {
    
    console.log(error);
  }

 
});

module.exports = router;
