const express = require('express');
const morgan = require('morgan');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const exSession = require('express-session');
const cookieParser = require('cookie-parser');
const {check, validationResult} = require('express-validator');
const login = require('./controller/customers/login');
const registration = require('./controller/customers/registration');
const customerdashboard = require('./controller/customers/customerdashboard');
const admindashboard = require('./controller/admin/admindashboard');
const adminreg = require('./controller/admin/adminreg');
const customerlist = require('./controller/admin/customerlist');
const home = require('./controller/customers/home');
const post = require('./controller/admin/post');
const showpost = require('./controller/admin/showpost');
const order = require('./controller/customers/order');
const showorder = require('./controller/admin/showorder');
const checkorder = require('./controller/customers/checkorder');



const app = express();

//SetUp View Engine
app.set('view engine','ejs');
app.set('views','views');

//middleware Array
const middleware = [
    morgan('dev'),
    //express.static('public'),
    express.urlencoded({extended: true}),
    express.json()
]


app.use(middleware);
app.use('/assets', express.static('assets'));
app.use(fileupload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());

app.use('/',login);
app.use('/registration',registration);
app.use('/customerdashboard',customerdashboard);
app.use('/admindashboard',admindashboard);
app.use('/adminreg',adminreg);
app.use('/customerlist',customerlist);
app.use('/home',home);
app.use('/post',post);
app.use('/showpost',showpost);
app.use('/order',order);
app.use('/showorder',showorder);
app.use('/checkorder',checkorder);


const PORT = process.env.PORT || 5050;
app.listen(PORT, function ()
{
    console.log(`server running ${PORT}`);
});