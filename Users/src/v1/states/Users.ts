import { v4 as uuidv4, stringfy as uuidStringify } from "uuid";
import config from "../../../config.json";

//유저 모델
const enum UserState {
	"GAMING",
	"LOBBY",
}
type User = {
	username: string;
	expireTime: Date;
	state: UserState;
};

//onMemory userSessionStore
const userSessionStore = new Map<string, User>();

//유저 생성 (있을시 갱신)
export function createOrTouchUser(targetSessionID: string): User {
	if (userSessionStore.has(targetSessionID)) {
		return userSessionStore.get(targetSessionID);
	} else {
		const newUser: User = {
			username: "",
			expireTime: new Date(
				new Date().getTime() + config.SESSEION_EXPIRE_MIN * 60000
			),
			state: UserState.GAMING,
		};
		userSessionStore.set(targetSessionID, newUser);
		return newUser;
	}
}

//로그인

//로그아웃

//유저 목록

//유저 검색 By session ID

//미활동 유저 삭제 데몬
// 1. 주기적 삭제 - 이걸로 설정
// 2. 삭제 타이머 설정
type SleepUserClearDaemon = {
	intv: ReturnType<typeof setInterval>;
	ms: number;
	setIntv: Function;
	clearIntv: Function;
	clearFunction: Function;
};
export const sleepUserClearDaemon: SleepUserClearDaemon = {
	intv: null,
	ms: 60000 * config.USER_CLEAR_INTV,
	setIntv(): void {
		this.clearIntv();
		this.intv = setInterval(() => {
			console.log(this.clearFunction());
		}, this.ms);
	},
	clearIntv(): void {
		clearTimeout(this.intv);
		this.intv = null;
	},
	clearFunction(): string[] {
		const clearList: string[] = [];
		userSessionStore.forEach((val: User, key: string): void => {
			if (val.expireTime < new Date()) clearList.push(key);
		});
		clearList.forEach((key: string): void => {
			userSessionStore.delete(key);
		});
		return clearList;
	},
};
