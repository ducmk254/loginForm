//  Require thư viên ngoài:
const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const pug = require('pug');
var cookieParser = require('cookie-parser');


//  require thư viện module.exports:
const authRouter = require('./routers/auth.router');
const homeRouter = require('./routers/home.router');
const requireLogin = require('./middlewares/auth.middleware');

//  khai báo biến:
let port = 3000;
let app = express();
const db = require('./db');


db.defaults({ users: [] })
  .write();

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());


app.use('/home',requireLogin.requireLogin,homeRouter);
app.use('/login',authRouter);
 



app.listen(port,()=>{console.log('Server started with: '+ port + ' port.');});