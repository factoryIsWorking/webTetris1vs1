//config
import config from "../config.json";
Object.assign(config, JSON.parse(process.env.npm_config_envs));

//express app
import express from "express";
const app: express.Application = express();

//json, urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//session
import session from "express-session";
app.use(
	session({
		cookie: { path: "/", httpOnly: true, secure: false, maxAge: null },
		//genid: ,
		//name: ,
		proxy: undefined,
		resave: true,
		rolling: true, //
		saveUninitialized: true, // 값의 변화가 있을떄만 값 저장
		secret: config.SECRET,
		//store: ,
		unset: "keep",
	})
);

//cors
import cors from "cors";
app.use(cors());

//graphQL

//start app;
import initAPI from "./API/initAPI";
(async () => {
	console.log(`init`);
	await initAPI(app); // apply APIs
})()
	.then(() => app.listen(config.USERS, null))
	.then(() => {
		console.log(
			`listening on port ${config.USERS} : http://localhost:${config.USERS}`
		);
	});

export default app;
