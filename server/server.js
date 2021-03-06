require ('./config/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/usuario', function (req, res) {
  res.json('Hola mundo')
});

app.post('/usuario', function (req, res) {
    let body = req.body;

    if ( body.nombre === undefined ) {
        res.status(400).json({
          code: "error",
          message: "El nombre es requerido"
        });
    }else {
        res.json({
        payload: body
      });
    }
    
  });
app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
      id: id
    })
  });

app.delete('/usuario', function (req, res) {
    res.json('Hola mundo')
  })
 
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT)
});