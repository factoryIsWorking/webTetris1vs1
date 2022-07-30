import config from "../../../config.json";
import { getSystemTime, MIN_MS } from "../SC";

//###공통

//###유저 모델
export const enum UserState {
	"GAMING",
	"LOBBY",
}
export type User = {
	username: string;
	expireTime: Date;
	state: UserState;
};

//###미활동 유저 삭제 데몬 - 1. 주기적 삭제(이걸로 설정) 2. 삭제 타이머 설정
type SleepUserClearDaemon = {
	intv: ReturnType<typeof setInterval>;
	ms: number;
	setIntv: Function;
	clearIntv: Function;
	clearFunction: Function;
};
export const sleepUserClearDaemon: SleepUserClearDaemon = {
	intv: null,
	ms: MIN_MS * config.SLEEP_USER_CLEAR_INTV_MIN,
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
		return clearList;
	},
};
