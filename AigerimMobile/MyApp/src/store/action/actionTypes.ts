import {Language} from '../../models/Language';

export const SEND_Language_ru = 'send_Language_ru';
export const SEND_Language_kz = 'send_Language_kz';
export const SEND_Language_tr = 'send_Language_kz';
export const SEND_Language_en = 'send_Language_en';



interface RU_ChangeLAnguageAction {
  type: typeof SEND_Language_ru;
  payload: "ru";
}
interface KZ_ChangeLAnguageAction {
    type: typeof SEND_Language_kz;
    payload: "ru";
  }
  interface TR_ChangeLAnguageAction {
    type: typeof SEND_Language_tr;
    payload: "tr";
  }
  interface EN_ChangeLAnguageAction {
    type: typeof SEND_Language_en;
    payload: "en";
  }

 

export type ChatActionTypes = RU_ChangeLAnguageAction | KZ_ChangeLAnguageAction| TR_ChangeLAnguageAction| EN_ChangeLAnguageAction;