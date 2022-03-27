import { ADD_Language_TO_LIST_ERROR, ADD_Language_TO_LIST_SUCCESS, DELETE_Language_FROM_LIST_ERROR, DELETE_Language_FROM_LIST_SUCCESS, GET_Language_LIST_ERROR, 
    GET_Language_LIST_SUCCESS, SET_Language_STATUS_ERROR, SET_Language_STATUS_SUCCESS, Language, LanguageActions } from "../types";
  
  interface LanguageState {  
       LanguageList: Language[];
       language:string;
    }
    
     const initialState: LanguageState = {  
      LanguageList: [],
      language:"",
    };
  
    export function LanguageReducer(
      state: LanguageState = initialState,
      action: LanguageActions,
    ): LanguageState {
      switch (action.type) {
        case GET_Language_LIST_SUCCESS: {
          return {
            ...state,
            LanguageList: action.payload,
          };
        }
        case GET_Language_LIST_ERROR: {
            return {
                ...state,
                language: action.payload,
              };
        }
        case SET_Language_STATUS_SUCCESS: {
          return {
            ...state,
            LanguageList: action.payload,
          };
        }
        case SET_Language_STATUS_ERROR: {
            return {
                ...state,
                language: action.payload,
              };
        }
        case ADD_Language_TO_LIST_SUCCESS:{
          return {
            ...state,
            LanguageList:action.payload,
          };
        }
        case ADD_Language_TO_LIST_ERROR:{
          return {
            ...state,
             language:action.payload
          }
        }
        case DELETE_Language_FROM_LIST_SUCCESS:{
          return {
            ...state,
            LanguageList:action.payload,
          };
        }
        case DELETE_Language_FROM_LIST_ERROR:{
          return {
            ...state,
             language:action.payload
          }
        }
        default:
          return state;
      }
    }