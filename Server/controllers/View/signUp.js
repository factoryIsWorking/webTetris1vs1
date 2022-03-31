const path = require('path');
const VIEW = path.join(global.CONFIG.viewPath,'signUp.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/signUp',function(req,res){
        res.render(VIEW);
    });
    router.get('/sighUp_script', function(req,res){
    });
};