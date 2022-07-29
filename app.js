const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();//como ultima estableceer una variable de entorno
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');//bigote views
hbs.registerPartials(__dirname + '/views/parcials');//partials parciales para usar codigos como headers

//Servir contenido estatico public
app.use(express.static('public'));

//renderizar unas vistas =======

app.get('/',  (req, res) => {
    res.render('home',{
        nombre: 'Jesus',
        titulo : 'curso de node'
    });//aca tenemos la paginas principal index pegada en views home "renderizada"
});

app.get('/generic', (req, res)=> {
    res.render('generic');
});

app.get('/elements', (req,res) => {
    res.render('elements');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//red ==========

//normal========
// app.get('/generic',  (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// });

// app.get('/elements', (req,res)=>{
//     res.sendFile(__dirname + '/public/elements.html')
// })

// app.get('*',  (req, res) => {// * hace de 404
//     res.sendFile(__dirname + '/public/404.html')
// });
//========================

// app.listen(8090);
