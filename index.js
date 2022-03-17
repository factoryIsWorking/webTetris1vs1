global.CONFIG = require('./config');
const cors = require('cors');
const Express = {
    express : require('express'),
    Session : require('express-session'),
    applyTo : function(app){
        const exp = this.express;
        app.use(this.Session({
            secret: 'special tetris block',
            name: 'cookie',
            store : null,
            proxy: true,
            resave: true,
            saveUninitialized: true
        }));
        app.use(exp.static('public'));
        app.use(exp.urlencoded({extended:true}))
        app.use(exp.json())
    }
};
const app = new Express.express();
Express.applyTo(app);
app.use(cors());
app.set('view engine', 'html');
let port = process.env.PORT;
if (port == null || port == "")
    port = global.CONFIG.port;

(async ()=>{
    require('./controllers/init')(app);
    require('./services/DB/init')().then(_=>console.log('DB service ready'));
    const Server = await app.listen(port, null);
    require('./services/webSocket/init')(Server);
    return Server;
})().then(()=>console.log(`App listening on port ${port} : http://localhost:${port}`));