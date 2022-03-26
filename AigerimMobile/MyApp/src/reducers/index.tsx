import { combineReducers } from 'redux';
import { LanguageReducer } from './languageReducer';


export const rootReducer = combineReducers({
  language: LanguageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;