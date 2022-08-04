import { Router, Request, Response } from "express";

const authRouter: Router = Router();

//###로그인
type UserSignInBody = {
	userId: string;
	userPw: string;
};
authRouter.post("userSignIn", (req: Request, res: Response): void => {
	//req
	let signInBody: UserSignInBody = req.body;
	//isSuccess
	let signInSuccess: boolean = false;
	if (signInBody.userId == "test" && signInBody.userPw == "test")
		signInSuccess = true;
	//response
	if (signInSuccess) {
		req.session["signInBody"] = signInBody;
		res.json({
			success: true,
			msg: "testSuccess",
		});
	} else {
		res.json({
			success: false,
			msg: "testFail",
		});
	}
});
//###로그아웃
authRouter.post("userSignOut", (req: Request, res: Response): void => {
	res.json();
});

export default authRouter;
