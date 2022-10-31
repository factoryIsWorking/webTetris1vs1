import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateState } from "../state/action";
import { RootState } from "../state/store";

export default function useLogin() {
	const { example } = useSelector((state: RootState) => state.loginReducer);
	const dispatch = useDispatch();

	const __updateLoginState = useCallback(
		(payload: string) => {
			dispatch(updateState(payload));
		},
		[dispatch, updateState]
	);

	return {
		example,
		__updateLoginState,
	};
}
