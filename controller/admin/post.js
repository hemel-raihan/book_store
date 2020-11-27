const express = require('express');
const post = require.main.require('./model/admin/post');
const router = express.Router();


router.get('/',(req,res)=>{
    var data = {
       email: req.session.email
        
    };
    post.fileupload(data, function(results) {
        res.render('pages/admin/post', { data: results });
    });
});

router.post('/',(req,res)=>{
   
    let fileName = req.files.file;
    let uploadPath = 'assets/images/upload/' + fileName.name;

    var user =
    {
        title: req.body.title,
        file: uploadPath,
        price: req.body.price,
        category: req.body.category,
        aurthor: req.body.aurthor,
        description: req.body.description,
        id: req.body.id,
        
    };
    post.insert(user, function(status){
        if(status)
        {
           
            console.log(fileName);
            fileName.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
           
            res.redirect('/home');
			//res.redirect('/uploadfile');
		}else{
			res.redirect('/post');
		
        }
    });

});




module.exports = router;