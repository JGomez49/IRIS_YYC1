

const express = require('express');
//const router = require('./router/rutas');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 3000;

//Conexion a base de datos
const mongoose = require('mongoose');

/* const USUARIO = 'MetaUSER';
const PASSWORD = 'MetaLLAVE';
const DBNAME = 'MetaDB'; */

//const uri = process.env.MONGODB_URI;

//const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.g7lcu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const uri = 'mongodb+srv:MetaUSER:MetaLLAVE@cluster0.g7lcu.mongodb.net/MetaDB?retryWrites=true&w=majority';

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

app.use((req,res,next) => {
    res.status(404).render("404.ejs" , {
        titulo: "Este es el Titulo 404!"
    });
});

app.listen(port, () => {
    console.log('Eschando en el puerto', port);
});


