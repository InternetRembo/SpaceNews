import { combineReducers, createStore, applyMiddleware } from "redux";
import mainPageReducer from "./mainPage-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  mainPageReducer: mainPageReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;

window.store = store;
