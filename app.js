
const cowsay = require('cowsay');
const express = require('express');
const app = express();

const port = 3000;

app.set('view engine','ejs');
app.set('views' , __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/' , (req,res) => {
    res.render("index.ejs" , {
        titulo: "Este es el Titulo EJS"
    });
});

app.get('/servicios' , (req, res) => {
    res.render("servicios.ejs" , {
        titulo: "Este es el Titulo de Servicios"
    });
});

app.use((req,res,next) => {
    res.status(404).render("404.ejs" , {
        titulo: "Este es el Titulo 404!"
    });
});

app.listen(port, () => {
    console.log('Eschando en el puerto', port);
});


