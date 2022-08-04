import config from "../config.json";
Object.assign(config, JSON.parse(process.env.npm_config_envs));

//###express app
import express from "express";
const app: express.Application = express();

//###json, urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//###session
import session from "express-session";
import MongoDBStore from "connect-mongodb-session";
const userSessionStore_mongoDB = new MongoDBStore(session)({
	uri: config["DB_URL"].replace("<password>", config["DB_PASSWORD"]),
	collection: "userSessionStore",
});

app.use(
	session({
		cookie: {
			path: "/",
			httpOnly: true,
			secure: false,
			maxAge: config.SESSEION_EXPIRE_MIN * 60000,
		},
		//genid: ,
		//name: ,
		proxy: undefined,
		resave: true,
		rolling: true, //
		saveUninitialized: true, // 값의 변화가 있을떄만 값 저장
		secret: config.SECRET,
		store: userSessionStore_mongoDB,
		unset: "keep",
	})
);
//###cors
import cors from "cors";
app.use(cors());

//###swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerOptions from "../swagger";
const specs = swaggerJsDoc(swaggerOptions);

app.use(
	"/swagger",
	swaggerUi.serve,
	swaggerUi.setup(specs, { explorer: true })
);

//###start app
(async () => {
	const initAPI = await import(`./${config.APP_VERSION}/initAPI`);
	await initAPI.default(app); //### apply APIs
	console.log(`init`);
})()
	.then(() => app.listen(config.USERS, null))
	.then(() => {
		console.log(
			`listening on port ${config.USERS} : http://localhost:${config.USERS}`
		);
	});

export default app;
