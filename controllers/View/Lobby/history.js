const path = require('path');
const VIEW = path.join(global.CONFIG.viewPath,'history.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/history',function(req,res){
        res.render(VIEW);
    });
    router.get('/history_script', function(req,res){
    });
};