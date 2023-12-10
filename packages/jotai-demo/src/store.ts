import { atom } from 'jotai';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export const todosAtom = atom<Todo[]>([]);
