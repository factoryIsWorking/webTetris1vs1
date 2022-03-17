const router = require('express').Router();
router.use(function(req,res,next){next();});
[
].forEach((apply)=>{apply(router);});

{
    const path = require('path');
    const CONFIG = require('../../config');
    const VIEW = path.join(CONFIG.viewPath,'lobbyView.ejs');
    router.get('/',function(req,res){
        res.render(VIEW);
    });
    router.get('/script', function(req,res){
    });
}

module.exports = (app,name)=>{
    app.use(name,router);
}