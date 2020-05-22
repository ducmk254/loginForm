module.exports.index= (req,res)=>{
    res.render('home');
};
module.exports.reDirect=(req,res)=>{
    res.redirect('/home');
}