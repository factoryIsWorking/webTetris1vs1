import { v4 as uuidv4, stringfy as uuidStringify } from "uuid";
import config from "../../config.json";

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

//유저생성
export function getOrCreateUser(targetSessionID: string): User {
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
// 1. 주기적 삭제
// 2. 삭제 타이머 설정  - 이걸로 설정
