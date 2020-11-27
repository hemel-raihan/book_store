const express = require('express');
const login = require.main.require('./model/customers/login');
const router = express.Router();
const {check, validationResult} = require('express-validator');

router.get('/',function(req,res){
    res.render('pages/login');
  
});


router.post('/',[
	check('email','Invalid Mail').isEmail().normalizeEmail(),
	check('password','Invalid Password').exists().isLength({min:3})
],(req,res)=>{
	var errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid Data");
		console.log(errors);
		const alert = errors.array();

        res.render('pages/login',{alert});
    } else {
    var user = {
		email: req.body.email,
		password: req.body.password,
		
	};

	login.validate(user, function(status,type){
          if(type == 1)
          {
            if(status){
                req.session.email =  user.email;
                //req.session.id = user.id
                res.cookie('email', req.body.email);
                //res.redirect('/student_skill');
                res.redirect('/home');	
            }else{
                res.redirect('/');
            }
          }
          else if(type == 2)
          {
            if(status){
                req.session.email =  user.email;
                //req.session.id = user.id
                res.cookie('email', req.body.email);
                //res.redirect('/student_skill');
                res.redirect('/admindashboard');	
            }else{
                res.redirect('/');
            }
          }
           
          
		
	});
	}
	//res.render('login/index');
	//res.redirect('/login');

});


module.exports = router;