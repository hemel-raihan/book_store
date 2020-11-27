const express = require('express');
const showorder  = require.main.require('./model/admin/showorder');
const router = express.Router();


router.get('/',(req,res)=>{
   
        showorder.orderlist(function(results) {
            
            res.render('pages/admin/showorder', { data: results });
        });

    });


    



       


module.exports = router;