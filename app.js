const express = require('express');
const path = require('path');
const {render} = require('ejs')

const app = express();

let port = '3000';
let host = 'localhost';

app.set('view engine', 'ejs')

// uses static middleware to enable Bootstrap
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)

app.listen(port, host , () => {
  console.log('App is listening on port' + port);
})

app.get('/', (req, res) => {
res.render('index');
});