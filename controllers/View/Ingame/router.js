const router = require('express').Router();
router.use(function(req,res,next){next();});
[
].forEach((apply)=>{apply(router);});

module.exports = (app,name)=>{
    app.use(name,router);
}