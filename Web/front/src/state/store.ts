import type { Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userState";

const rootReducers = combineReducers({
	USER: userReducer,
});

const store = configureStore({ reducer: rootReducers });

export type RootState = ReturnType<typeof rootReducers>;
//const { example } = useSelector((state: RootState) => state.loginReducer);
