import { Application, Request, Response } from "express";
import authRouter from "./authRouter";

export default (app: Application): void => {
	//testAPI
	app.get("/", (req: Request, res: Response): void => {
		res.json({
			state: true,
			msg: "available",
		});
	});
	//apply
	app.use("/auth", authRouter);

	console.log("APIs ready");
};
