import {Language} from '../redux/types';

const list: Language[] = [
  {
    id: 1,
    language: 'ru',
    isDone: true,
  },
  {
    id: 2,
    title: 'kz',
    isDone: false,
  },
  {
    id: 3,
    title: 'tr',
    isDone: true,
  },
  {
    id: 4,
    title: 'en',
    isDone: true,
  },
];

const data = {
  list,
};

export const languageService = {
  getLangugeList,
  setLangugeList
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
 
 