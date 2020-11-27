const express = require('express');
const adminreg = require.main.require('./model/admin/adminreg');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('pages/admin/registration');
});

router.post('/', (req, res)=>{
    
	var user = {
       
        email: req.body.email,
        pass: 	req.body.password,
        id: req.body.id
	};

	adminreg.insert(user, function(status){
		if(status){
            
			res.redirect('/adminreg');
		}else{
			res.redirect('/adminreg');
		}
	});
});

module.exports = router;