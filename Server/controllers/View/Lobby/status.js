const path = require('path');
const VIEW = path.join(global.CONFIG.viewPath,'status.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/status',function(req,res){
        res.render(VIEW);
    });
    router.get('/status_script', function(req,res){
    });
};