const express = require('express');
const order = require.main.require('./model/customers/order');
const router = express.Router();

router.get('/:id',(req,res)=>{
    //if(req.session.uname != null){
    //if(req.cookies['email'] != null){
            
        var data = {
            id: req.params.id,
            email: req.session.email
        };
        order.ProfileInfo(data, function(result) {
            req.session.email =  data.email;
            var profileinfo = result;
        order.orderinfo(data, function(results) {
            
            res.render('pages/customers/order',{value: results, data: profileinfo});
            
        });
    });
       // res.render('pages/student/studentDashboard',data);
   // }
   // else{
       // res.redirect('/studentlogin');
    //}
    });


    router.post('/:id', (req, res)=>{
    
        var user = {
            
            title: 	req.body.title,
            id: req.body.id,
            price: req.body.price,
            email: req.body.email,
        };
    
        order.bookorder(user, function(status){
            if(status){
                
                //req.session.email = user.email;
                res.redirect('/home');
            }else{
                res.redirect('/home');
            }
        });
    });


   


module.exports = router;