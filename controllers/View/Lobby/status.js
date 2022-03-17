const path = require('path');
const CONFIG = require('../../config');
const VIEW = path.join(CONFIG.viewPath,'status.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/status',function(req,res){
        res.render(VIEW);
    });
    router.get('/status_script', function(req,res){
    });
};