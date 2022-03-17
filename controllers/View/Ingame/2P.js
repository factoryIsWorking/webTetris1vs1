const path = require('path');
const CONFIG = require('../../config');
const VIEW = path.join(CONFIG.viewPath,'2P.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/2P',function(req,res){
        res.render(VIEW);
    });
    router.get('/2P_script', function(req,res){
    });
};