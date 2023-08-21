import { applyMiddleware, createStore } from "redux";
import { Reducers } from "./reducer/reducers";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(thunk);
export const store = createStore( Reducers, middlewares );