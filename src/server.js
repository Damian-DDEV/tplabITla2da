require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require("path");
const {json} = require('body-parser');
const app = express();

//Requerir router
const routerUsuarios = require('./routes/usuarios.routes');
const routerFrutas = require('./routes/frutas.routes')
const routerHome = require('./routes/home.routes')
// Set EJS (view engine)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

//Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extend:false}));
app.use(json());

//Rutas
app.use('/usuarios', routerUsuarios);
app.use('/frutas', routerFrutas);
app.use('/', routerHome);

app.use((req, res, next) => {
  res.status(404).json({
    status: '404',
    descripcion: 'Pagina no encontrada'
  })
})
  
module.exports = app;