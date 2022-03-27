export interface Language { 
    id:number,  
    title:string, 
    isDone:boolean,
}
export const GET_Language_LIST_SUCCESS="GET_Language_LIST_SUCCESS";
export const GET_Language_LIST_ERROR="GET_Language_LIST_ERROR";

export const SET_Language_STATUS_SUCCESS="SET_Language_STATUS_SUCCESS";
export const SET_Language_STATUS_ERROR="SET_Language_STATUS_ERROR";

export const ADD_Language_TO_LIST_SUCCESS="ADD_Language_TO_LIST_SUCCESS";
export const ADD_Language_TO_LIST_ERROR="ADD_Language_TO_LIST_ERROR";

export const DELETE_Language_FROM_LIST_SUCCESS="DELETE_Language_FROM_LIST_SUCCESS";
export const DELETE_Language_FROM_LIST_ERROR="DELETE_Language_FROM_LIST_ERROR";

interface GetLanguageListSuccess{ 
    type:typeof GET_Language_LIST_SUCCESS,
    payload:Language[]
}
interface GetLanguageListError{  
    type:typeof GET_Language_LIST_ERROR,
    payload:string
}
interface SetLanguageStatusSuccess{
    type:typeof SET_Language_STATUS_SUCCESS,
    payload:Language[],
}
interface SetLanguageStatusError{
    type:typeof SET_Language_STATUS_ERROR,
    payload:string,
}
interface AddLanguageToListSuccess{
    type:typeof ADD_Language_TO_LIST_SUCCESS,
    payload:Language[]
}
interface AddLanguageToListError{
    type:typeof ADD_Language_TO_LIST_ERROR,
    payload:string
}

interface DeleteLanguageFromListSuccess{
    type:typeof DELETE_Language_FROM_LIST_SUCCESS,
    payload:Language[]
}
interface DeleteLanguageFromListError{
    type:typeof DELETE_Language_FROM_LIST_ERROR,
    payload:string
}

export type LanguageActions=
   GetLanguageListSuccess   | GetLanguageListError 
 | SetLanguageStatusSuccess | SetLanguageStatusError
 | AddLanguageToListSuccess | AddLanguageToListError
 | DeleteLanguageFromListSuccess | DeleteLanguageFromListError