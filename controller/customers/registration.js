const express = require('express');
const registration = require.main.require('./model/customers/registration');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('pages/customers/registration');
});

router.post('/', (req, res)=>{
    
	var user = {
        
        
        email: req.body.email,
        pass: 	req.body.password,
        id: req.body.id
	};

	registration.insert(user, function(status){
		if(status){
            
			res.redirect('/registration');
		}else{
			res.redirect('/registration');
		}
	});
});

module.exports = router;