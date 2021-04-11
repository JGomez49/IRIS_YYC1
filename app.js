const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// -----Esto es direactamente de la documentacion
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//------------------------------------------------

require('dotenv').config()

const port = process.env.PORT || 3000;

//Conexion a base de datos
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('----------------------------------------conectado a mongodb-------------------------------------')) 
  .catch(e => console.log('error de conexión', e))

//Motor de plantillas
app.set('view engine','ejs');
app.set('views' , __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//Rutas Web
app.use('/' , require('./router/rutas'));
app.use('/mascotas' , require('./router/Mascotas'));
app.use('/servicios' , require('./router/servicios'));

app.use((req,res,next) => {
    res.status(404).render("404.ejs" , {
        titulo: "Este es el Titulo 404!"
    });
});

app.listen(port, () => {
    console.log('Eschando en el puerto', port);
});

/*  Como subir el app a heroku:
    heroku login
    git add .
    git commit -am "comment..."
    git push heroku master 
    para Local:
    nodemon run dev
*/

// echo "# ejstestoneamz" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/JGomez49/ejstestoneamz.git
// git push -u origin main