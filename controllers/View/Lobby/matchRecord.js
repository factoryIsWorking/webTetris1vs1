const path = require('path');
const CONFIG = require('../../config');
const VIEW = path.join(CONFIG.viewPath,'matchRecord.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/matchRecord',function(req,res){
        res.render(VIEW);
    });
    router.get('/matchRecord_script', function(req,res){
    });
};