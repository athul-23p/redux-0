import { reducer } from "./reducer.js";

export const store = Redux.legacy_createStore(reducer,{todos:[]});