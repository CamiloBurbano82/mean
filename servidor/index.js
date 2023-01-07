const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//creamos el servidor
const app = express();

//conectamos a la DB
conectarDB();

//middleware
app.use(express.json());
app.use(cors());

app.use('/api/productos', require('./routes/producto'));

// //definimos ruta principal
// app.get('/',(req, res )=>{
// res.send('hola mundo')
// })

app.listen(4000, () =>{
    console.log('el servidor esta corriendo perfectamente')
})