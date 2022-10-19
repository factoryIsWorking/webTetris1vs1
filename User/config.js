import mainConfig from "../config.json";

export default {
	SECRET: "LeEhAnSeOnG7",
	USERS: 7777,
	SESSEION_EXPIRE_MIN: 120,
	SLEEP_USER_CLEAR_INTV_MIN: 5,
	comments: [
		"SECRET - 세션에서 암호화에 사용하는 암호화 키값",
		"USERS - 기본 포트, 인자로 포트가 안넘어오면 사용",
		"SESSEION_EXPIRE_MIN : 세션 만료 시간 설정",
		"SLEEP_USER_CLEAR_INTV_MIN : 미활동 유저 삭제 데몬의 삭제 주기",
	],
};
