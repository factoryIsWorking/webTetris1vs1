const path = require('path');
const CONFIG = require('../../config');
const VIEW = path.join(CONFIG.viewPath,'history.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/history',function(req,res){
        res.render(VIEW);
    });
    router.get('/history_script', function(req,res){
    });
};