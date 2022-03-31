const path = require('path');
const VIEW = path.join(global.CONFIG.viewPath,'1P.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/1P',function(req,res){
        res.render(VIEW);
    });
    router.get('/1P_script', function(req,res){
    });
};