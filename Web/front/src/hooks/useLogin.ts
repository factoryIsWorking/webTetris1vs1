import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { LOGIN } from "../state/actions";
import { RootState } from "../state/store";

export default function useLogin() {
	const { isLogin } = useSelector((state: RootState) => state.USER);
	const dispatch = useDispatch();
	const __doLogin = useCallback(() => {
		dispatch(LOGIN());
	}, [dispatch, LOGIN]);
	return {
		isLogin,
		__doLogin,
	};
}
