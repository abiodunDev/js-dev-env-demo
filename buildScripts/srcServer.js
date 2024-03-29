import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath:config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a database.
  res.json([
    {"id":1,"firstName":"Alao","lastName":"Abiodun","email":"alao@gmail.com"},
    {"id":2,"firstName":"Ajibola","lastName":"Habeeb","email":"hab@gmail.com"},
    {"id":3,"firstName":"Jamiu","lastName":"Nofiu","email":"Nofiu@gmail.com"}
  ]);
});


app.listen(port, (err) => {
  if(err){
    console.log(err);
  }
  else{
    open('http://localhost:' + port);
  }
});
