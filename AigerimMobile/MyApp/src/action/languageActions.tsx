import {ActionCreator} from 'redux';
import {languageService} from '../services';
import {
  ADD_Language_TO_LIST_ERROR,
  ADD_Language_TO_LIST_SUCCESS,
  DELETE_Language_FROM_LIST_ERROR,
  DELETE_Language_FROM_LIST_SUCCESS,
  GET_Language_LIST_ERROR,
  GET_Language_LIST_SUCCESS,
  SET_Language_STATUS_ERROR,
  SET_Language_STATUS_SUCCESS,
  Language,
  LanguageActions,
} from '../types';

const getLanguageListSuccess: ActionCreator<LanguageActions> = (list: Language[]) => {
  return {type: GET_Language_LIST_SUCCESS, payload: list};
};
const getLanguageListError: ActionCreator<LanguageActions> = (message: string) => {
  return {type: GET_Language_LIST_ERROR, payload: message};
};
const setLanguageStatusSuccess: ActionCreator<LanguageActions> = (list: Language[]) => {
  return {type: SET_Language_STATUS_SUCCESS, payload: list};
};
const setLanguageStatusError: ActionCreator<LanguageActions> = (message: string) => {
  return {type: SET_Language_STATUS_ERROR, payload: message};
};

const addLanguageToListSuccess:ActionCreator<LanguageActions>=(list:Language[])=>{
  return {type:ADD_Language_TO_LIST_SUCCESS, payload:list}
};
const addLanguageToListError: ActionCreator<LanguageActions> = (message: string) => {
  return {type: ADD_Language_TO_LIST_ERROR, payload: message};
};
const deleteLanguageFromListSuccess:ActionCreator<LanguageActions>=(list:Language[])=>{
  return {type:DELETE_Language_FROM_LIST_SUCCESS, payload:list}
};
const deleteLanguageFromListError: ActionCreator<LanguageActions> = (message: string) => {
  return {type: DELETE_Language_FROM_LIST_ERROR, payload: message};
};

export function getLanguageList() {
  return (dispatch: (arg0: LanguageActions) => void) => {
    return languageService.getLangugeList().then(
      response => {
        dispatch(getLanguageListSuccess(response));
      },
      error => {
        dispatch(getLanguageListError('Server error.'));
      },
    );
  };
}

export function setLanguageStatus({id}: {id: number}) {
  return (dispatch: (arg0: LanguageActions) => void) => {
    return languageService.setLangugeList({id}).then(
      response => {
        dispatch(setLanguageStatusSuccess(response));
      },
      error => {
        dispatch(setLanguageStatusError('Server Error'));
      },
    );
  };
}

 
export function addLanguageToList({text}:{text:string}){
  return (dispatch: (arg0: any) => void)=>{
    return languageService.addLanguageToList({text}).then(
      response=>{
        dispatch(addLanguageToListSuccess(response));
      },
      error=>{
          dispatch(addLanguageToListError('Server Error'))
      }
    )
  }
}
export function deleteLanguageFromList({id}: {id: number}) {
  return (dispatch: (arg0: any) => void) => {
    return languageService.deleteLanguageFromList({id}).then(
      response => {
        dispatch(deleteLanguageFromListSuccess(response));
      },
      error => {
        dispatch(deleteLanguageFromListError('Server Error'));
      },
    );
  };
}