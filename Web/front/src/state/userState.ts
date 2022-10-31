import type { Action } from "./actions";
import { LOGIN, PAYLOAD } from "./actions"; // 지원되는 액션 종류

//User State Type Definition
export type UserStateType = {
	isLogin: boolean;
};
const initalUserState: UserStateType = {
	isLogin: false,
};
const DealAction = Object(); //액션 처리 로직 저장

//Login
DealAction.LOGIN = (
	state: UserStateType,
	{ type }: ReturnType<typeof LOGIN>
): UserStateType => {
	return { ...state, isLogin: true };
};
//Payload - 테스트
DealAction.PAYLOAD = (
	state: UserStateType,
	{ type, payload }: ReturnType<typeof PAYLOAD>
): UserStateType => {
	console.log(payload);
	return { ...state };
};

export const userReducer = (
	state = initalUserState,
	action: Action
): UserStateType => {
	return DealAction[action.type](state, action);
};
