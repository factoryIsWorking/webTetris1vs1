const path = require('path');
const CONFIG = require('../../config');
const VIEW = path.join(CONFIG.viewPath,'ranking.ejs');
// const SCRIPT;

module.exports = function(router){
    router.get('/ranking',function(req,res){
        res.render(VIEW);
    });
    router.get('/ranking_script', function(req,res){
    });
};