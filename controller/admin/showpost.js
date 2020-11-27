const express = require('express');
const showpost  = require.main.require('./model/admin/showpost');
const router = express.Router();


router.get('/',(req,res)=>{
    //if(req.session.uname != null){
    if(req.cookies['email'] != null){
            
        var data = {
            email: req.session.email
          
        };
        showpost.postinfo(data, function(results) {
            req.session.email =  data.email;
            res.render('pages/admin/showpost', { data: results });
        });
       // res.render('pages/student/studentDashboard',data);
    }
    else{
        res.redirect('/studentlogin');
    }
    });


    router.get('/edit/:id',(req,res)=>{
        //if(req.session.uname != null){
        if(req.cookies['email'] != null){
            var data = {
                email: req.session.email,
                //email: req.body.email,
            };
           
            showpost.postedit(req.params.id, function(results) {
                
                res.render('pages/admin/postedit', { value: results, data});
            });
           // res.render('pages/student/studentDashboard',data);
        }
        else{
            res.redirect('/');
        }
        });


        router.post('/edit/:id', (req, res)=>{
            let fileName = req.files.file;
            let uploadPath = 'assets/images/upload/' + fileName.name;
            var user = {
                id: req.params.id,
                title: req.body.title,
                file: uploadPath,
                description: req.body.description
            };
            showpost.update(user, function(status) {
                if(status)
                {
                console.log(fileName);
                fileName.mv(uploadPath, (err) => {
            if (err) {
                return res.status(500).send(err);
            }
        });
       
        res.redirect('/showpost');
        //res.redirect('/uploadfile');
    }else{
        res.redirect('/showpost');
    
    }
            });
        })



        router.get('/delete/:id',(req,res)=>{
            //if(req.session.uname != null){
            if(req.cookies['email'] != null){
                var data = {
                    email: req.session.email,
                    //email: req.body.email,
                };
               
                showpost.postdelete(req.params.id, function(results) {
                    
                    res.render('pages/admin/postdelete', { value: results, data});
                });
               
            }
            else{
                res.redirect('/');
            }
            });



            router.post('/delete/:id', (req, res)=>{
                
                showpost.delete(req.params.id, function(status) {
                    if (status) {
                        res.redirect('/showpost');
                    } else {
                        res.redirect('/showpost');
                    }
                });
            })



module.exports = router;