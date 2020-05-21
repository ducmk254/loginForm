var db = require('../db');

module.exports.login = (req,res)=>{
    res.render('login');
};

module.exports.postAuth = (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    let errors = [];
    let user = db.get('users').find({username: username}).value();
    if(!user){
        errors.push('Username not exist');
        res.render('login',{errors:errors});
        return;
    }
    if(password !== user.password){
        errors.push('Password does not match');
        res.render('login',{errors:errors});
        return;
    }
    res.cookie('userId',user.id); // khi đúng username và pasword thì set cookie : userId = user.id luôn
    res.redirect('/home');
};