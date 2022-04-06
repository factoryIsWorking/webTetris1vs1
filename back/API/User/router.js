const router = require('express').Router();
router.use(function(req,res,next){next();});
[
    require('./signIn'),
    require('./signUp')
].forEach((apply)=>{apply(router);});

module.exports = (app,name)=>{
    app.use(name,router);
}