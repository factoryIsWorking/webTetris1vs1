import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Cover from "./components/Cover";
import Inner from "./components/Inner";
//import useLogin from "./hooks/useLogin";

function App() {
	//const { __doLogin, isLogin } = useLogin();
	let isLogin = false;
	const TestContext = React.createContext("value");
	const PAGE = (() => {
		if (isLogin) return <Cover></Cover>;
		else return <Inner></Inner>;
	})();
	return <div className="App">{PAGE}</div>;
}

export default App;
