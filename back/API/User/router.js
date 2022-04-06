const router = require('express').Router();
router.use(function(req,res,next){next();});
[
    require('./signIn')
].forEach((apply)=>{apply(router);});

module.exports = (app,name)=>{
    app.use(name,router);
}