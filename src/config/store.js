import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import columns from "../reducers/columns";

export const store = createStore(columns, applyMiddleware(thunk));
