const express = require('express');
const home = require.main.require('./model/customers/home');
const router = express.Router();


router.get('/',(req,res)=>{
    //if(req.session.uname != null){
    if(req.cookies['email'] != null){
            
        var data = {
            email: req.session.email
          
        };
        home.ProfileInfo(data, function(results) {
            req.session.email =  data.email;
            res.render('pages/customers/home', { data: results });
        });
       // res.render('pages/student/studentDashboard',data);
    }
    else{
        res.redirect('/studentlogin');
    }
    });


module.exports = router;