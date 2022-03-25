import {combineReducers, createStore, applyMiddleware} from 'redux';
import {languageReducer} from './reducer/languageReducer';
import {createLogger} from 'redux-logger';

const rootReducer = combineReducers({
  language: languuageReducer,
  // OtherReducer
});

const logger = createLogger({});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middleWareEnhancer);
  return store;
}