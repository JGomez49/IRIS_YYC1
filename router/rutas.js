const express = require('express');
const router = express.Router();

router.get('/' , (req,res) => {
    // res.render("index.ejs" , {});
    res.redirect('/mascotas');
});

// router.get('/servicios' , (req, res) => {
//     res.render("servicios.ejs" , {
//         titulo: "Este es el Titulo de Servicios"
//     });
// });

module.exports = router;