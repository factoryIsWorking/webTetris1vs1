global.CONFIG = require("./config");
const cors = require("cors");
const Express = {
	express: require("express"),
	applyTo: function (app) {
		const exp = this.express;
		app.use("/", exp.static(global.CONFIG.publicPath));
		app.use(exp.urlencoded({ extended: true }));
		app.use(exp.json());
	},
};
const app = new Express.express();
Express.applyTo(app);
app.use(cors());
let port = process.env.PORT;
if (port == null || port == "") port = global.CONFIG.port;

(async () => {
	require("./API/init")(app);
	const Server = await app.listen(port, null);
	return Server;
})().then(() =>
	console.log(`App listening on port ${port} : http://localhost:${port}`)
);
