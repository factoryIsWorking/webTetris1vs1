const cors = require('cors');
const Express = {
    express : require('express'),
    expressSession : require('express-session'),
    applyTo : function(app){
        const exp = this.express;
        app.use(this.expressSession({
            secret: 'keyboard cat'
        }));
        app.use(exp.static('public'));
        app.use(exp.urlencoded({extended:true}))
        app.use(exp.json())
    }
}
export default ()=>{
    const app = new Express.express();
    Express.applyTo(app);
    app.use(cors());
    app.set('view engine', 'ejs');
    return app;
};