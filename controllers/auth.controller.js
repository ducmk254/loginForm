var db = require('../db');

module.exports.login = (req,res)=>{
    res.render('login');
};

module.exports.postAuth = (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    let user = db.get('users').find({username: username}).value();
    if(!user){
        res.render('login',{errors:['Username not exist']});
        return;
    }
    if(password !== user.password){
        res.render('login',{errors:['Password does not match']});
        return;
    }

    res.cookie('userId',user.id); // khi đúng username và pasword thì set cookie : userId = user.id luôn
    res.redirect('/home'); 
};