const router = require('express').Router();
router.use(function(req,res,next){next();});
[
    require('./signUp')
].forEach((apply)=>{apply(router);});
require('./Ingame/router')(router,'/ingame');
require('./Lobby/router')(router,'/lobby');
{
    const path = require('path');
    const VIEW = path.join(global.CONFIG.viewPath,'login.html');
    router.get('/',function(req,res){
        res.send(VIEW);
    });
    // router.get('/script', function(req,res){
    // });
}
module.exports = (app,name)=>{
    app.use(name,router);
}