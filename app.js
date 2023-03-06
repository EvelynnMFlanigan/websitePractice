const express = require('express');
const {render} = require('ejs')

const app = express();

let port = '3000';
let host = 'localhost';

app.set('view engine', 'ejs')

app.listen(port, host , () => {
  console.log('App is listening on port' + port);
})

app.get('/', (req, res) => {
res.render('index');
});