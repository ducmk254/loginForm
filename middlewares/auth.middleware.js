var db = require('../db');

module.exports.requireLogin =(req,res,next)=>{
    /* Nếu chưa tồn tại trong cookie: userId thì về trang login*/
    if(!req.cookies.userId){
        res.redirect('/login');
        return;
    }
    //  nếu tồn tại rồi thì làm gì check xem userId = user.id ?
    let user = db.get('users').find({id:req.cookie.userId}).value();
    if(!user){
        res.redirect('/login');
        return;
    }
    next();
};