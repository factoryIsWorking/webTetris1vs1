const router = require('express').Router();
router.use(function(req,res,next){next();});
[

].forEach((apply)=>{apply(router);});

export default (app,name)=>{
    app.use(name === undefined ? '/game' : name,router);
}