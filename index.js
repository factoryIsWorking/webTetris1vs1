const app = require('./controllers/init');

let port = process.env.PORT;
if (port == null || port == "")
    port = 4000;
require('./controllers/init')(app);
const Server = app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});
require('./webSocket/init')(Server);
export default app;