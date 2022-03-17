const path = require('path');
const VIEW = path.join(global.CONFIG.viewPath,'2P.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/2P',function(req,res){
        res.render(VIEW);
    });
    router.get('/2P_script', function(req,res){
    });
};