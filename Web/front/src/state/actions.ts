//action types
export interface Action {
	type: string;
}

export interface ActionPayload extends Action {
	payload: string | null;
}

//action list
export const LOGIN = (): Action => {
	// 로그인 상태로 전환
	return {
		type: "LOGIN",
	};
};
export const PAYLOAD = (payload: string): ActionPayload => {
	// 테스트용 값전달
	return {
		type: "PAYLOAD",
		payload,
	};
};

// 관리용 함수
export const ActionList = {
	list: Object(),
	apply(stateName: string, actionType: Function): void {
		if (this.list[stateName] === undefined) {
			this.list[stateName] = [];
		}
		this.list[stateName].push(actionType);
	},
};
