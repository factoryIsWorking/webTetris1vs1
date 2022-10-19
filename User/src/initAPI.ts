import { Application, Request, Response } from "express";
import authRouter from "./routers/authRouter";
import userRouter from "./routers/userRouter";

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
	app.use("/user", userRouter);

	console.log("APIs ready");
};
