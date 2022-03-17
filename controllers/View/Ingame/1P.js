const path = require('path');
const CONFIG = require('../../config');
const VIEW = path.join(CONFIG.viewPath,'1P.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/1P',function(req,res){
        res.render(VIEW);
    });
    router.get('/1P_script', function(req,res){
    });
};