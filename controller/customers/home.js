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
            var profileinfo = results;
            home.PostInfo(function(result) {
            var postinfo = result;
            res.render('pages/customers/home', { data: profileinfo, value: postinfo });
          
        });
    });
       // res.render('pages/student/studentDashboard',data);
    }
    else{
        res.redirect('/studentlogin');
    }
    });


    router.get('/postdetails/:id',(req,res)=>{
        var value = {
            email: req.session.email
          
        };
        home.ProfileInfo(value, function(results) {
            req.session.email =  value.email;
            var profileinfo = results;
        home.postdetails(req.params.id, function(result) {
            
        res.render('pages/customers/postdetails', { data: result, values: profileinfo });

    });
});
});
    


module.exports = router;