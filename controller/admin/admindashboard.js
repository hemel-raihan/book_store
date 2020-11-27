const express = require('express');
const admindashboard  = require.main.require('./model/admin/admindashboard');
const router = express.Router();


router.get('/',(req,res)=>{
    //if(req.session.uname != null){
    if(req.cookies['email'] != null){
            
        var data = {
            email: req.session.email
          
        };
        admindashboard.ProfileInfo(data, function(results) {
            req.session.email =  data.email;
            res.render('pages/admin/admindashboard', { data: results });
        });
       // res.render('pages/student/studentDashboard',data);
    }
    else{
        res.redirect('/studentlogin');
    }
    });


module.exports = router;