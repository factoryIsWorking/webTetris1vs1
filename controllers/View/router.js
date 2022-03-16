const router = require('express').Router();
router.use(function(req,res,next){next();});
[
    // 여긴 객체형식으로 만들어서 트리를 표현해야겠다.
    // app.get('/',MW.logout,controllers.login);
    // app.get('/lobby',MW.session,controllers.lobby);
    // app.get('/matchRecord',MW.session,controllers.matchRecord);
    // app.get('/ranking',MW.session,controllers.ranking);
    // app.get('/signUp',controllers.signUp);
    // app.get('/status',MW.session,controllers.status);
    // app.get('/game/1p',MW.session,controllers.game1p);
    // app.get('/game/2p',MW.session,controllers.game2p);
    // app.get('/history',MW.session,controllers.history);
].forEach((apply)=>{apply(router);});

export default (app,name)=>{
    app.use(name === undefined ? '/' : name,router);
}