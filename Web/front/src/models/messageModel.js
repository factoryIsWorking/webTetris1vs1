const CONFIG = { url: "http://localhost:4001/" }; //{url : window.location.href};
{
	let [proto, name, port] = CONFIG.url.split(":");
	CONFIG.assetURL = [proto, name, port].join(":") + "assets/";
	CONFIG.wsURL = ["ws", name, port].join(":");
}
const fetchSet = {
	get: async function (action) {
		return fetch(CONFIG.url + action, {
			method: "GET",
		});
	},
	post: async function (action, body) {
		return fetch(CONFIG.url + action, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body == undefined ? {} : body),
		});
	},
	test: async function (action, body) {
		return fetch("http://localhost:7200/" + action, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body == undefined ? {} : body),
		});
	},
};
export default {
	//webSocket:null,
	webSocket: new WebSocket(CONFIG.wsURL),
	signIn: async function (ID, PW) {
		let res = await fetchSet.test("user/signIn", {
			userId: ID,
			userPw: PW,
		});
		res = await res.json();
		return res.success == true ? true : false;
	},
	signUp: async function (ID, PW) {
		let res = await fetchSet.test("user/signUp", { ID, PW });
		res = await res.json();
		return res.success == true ? true : false;
	},
	getSessionInfo: async function () {
		fetchSet.post("user/getSessionInfo");
	},
	CONFIG,
};
