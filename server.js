const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

//HBS                           
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');


app.get('/', (req,res)=>{

    /* let salida =  {
        nombre:'Guido',
        edad:32,
        url: req.url
    } */

    res.render('home',{
        nombre:'Guido',        
    })
})

app.get('/about', (req,res)=>{

    res.render('about',{        
        
    })
})

app.listen(port,()=>console.log(`Server escuchando en el puerto ${port}`));