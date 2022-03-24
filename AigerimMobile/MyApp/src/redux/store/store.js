import {createStore,combineReducers} from "redux";
import changelangReducer from "../reducer/ChangeLAngReducer";
const reducers = combineReducers({changeLang:changelangReducer});
const store = createStore(reducers);

export default store;