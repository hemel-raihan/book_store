const express = require('express');
const checkorder  = require.main.require('./model/customers/checkorder');
const router = express.Router();


router.get('/',(req,res)=>{
   
        checkorder.orderlist(function(results) {
            
            res.render('pages/customers/checkorder', { data: results });
        });

    });


    



       


module.exports = router;