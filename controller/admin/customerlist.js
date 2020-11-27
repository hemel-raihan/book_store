const express = require('express');
const customerlist  = require.main.require('./model/admin/customerlist');
const router = express.Router();


router.get('/',(req,res)=>{
    var data = {
        email: req.session.email
      
    };
        customerlist.customerlist(data,function(results) {
            
            res.render('pages/admin/customerlist', { data: results });
        });

    });


    router.get('/block/:id',(req,res)=>{
        //if(req.session.uname != null){
        
            var data = {
               
            };
           
            customerlist.customerdelete(req.params.id, function(results) {
                
                res.render('pages/admin/blockcustomer', { value: results});
            });
           
        
       
        });



        router.post('/block/:id', (req, res)=>{
            
            customerlist.deletecustomer(req.params.id, function(status) {
                if (status) {
                    res.redirect('/customerlist');
                } else {
                    res.redirect('/customerlist');
                }
            });
        })



module.exports = router;