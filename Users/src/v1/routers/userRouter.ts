import { v4 as uuidv4, stringfy as uuidStringify } from "uuid";
import { Router, Request, Response } from "express";
import { User, UserState } from "../models/Users";
import config from "../../../config.json";
import { getSystemTime, MIN_MS } from "../SC";

const userRouter: Router = Router();

//###공통

//###로그인
userRouter.post("userSignIn", (req: Request, res: Response): void => {
	res.json();
});
//###로그아웃
userRouter.post("userSignOut", (req: Request, res: Response): void => {
	res.json();
});

//###유저 목록

//###유저 검색 By session ID

export default userRouter;
