import React from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
	const { __updateLoginState, example } = useLogin();

	return <div>{example}</div>;
};

export default Login;
