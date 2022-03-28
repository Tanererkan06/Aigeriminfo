import {Language} from '../types';

const list: Language[] = [
  {
    id: 1,
    title: 'ru',
    isDone: false,
  },
  {
    id: 2,
    title: 'kz',
    isDone: false,
  },
  {
    id: 3,
    title: 'tr',
    isDone: false,
  },
  {
    id: 4,
    title: 'en',
    isDone: false,
  },
];

const data = {
  list,
};

export const languageService = {
  getLangugeList,
  setLangugeList,
  addLanguageToList,
  deleteLanguageFromList,
};
async function getLangugeList(): Promise<Language[]> {
  return data.list;
}
async function setLangugeList({id}: {id: number}): Promise<Language[]> {
  const list = data.list;
  list.map(task => {
    if (task.id == id) {
      task.isDone = !task.isDone;
    }
  });
  return list;
}
 
async function addLanguageToList({text}:{text:string}):Promise<Language[]>{
  const list=data.list;
  const taskItem:Language={
   id:list.length+1,
   isDone:false,
   title:text
  }
  list.push(taskItem)
  return list;
}
async function deleteLanguageFromList({id}:{id:number}):Promise<Language[]>{
  data.list = data.list.filter(item => item.id !== id);
  return data.list;
}