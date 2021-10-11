const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');


const app = express();

//conexion base de datos
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/primerbd'
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(url, options).then(
    () => { console.log('Conectado a Mongo') },
    err => { err }
);


//middelware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.get('/', function(req, res) {
    res.send('hola Mundo')
});

//middelware para vue.js
app.use('/api', require('./routes/primerBd'));
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


app.set('puerto', process.env.PORT || 5000);
app.listen(app.get('puerto'), function() {
    console.log('escuchando el puerto' + app.get('puerto'));
});