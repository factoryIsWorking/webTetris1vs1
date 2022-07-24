import { Application, Request, Response } from "express";

export default (app: Application): void => {
	app.get("/", (req: Request, res: Response): void => {
		res.json({
			state: true,
			msg: "available",
		});
	});
	console.log("APIs ready");
};
