import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Todo {
  id: number | string;
  text: string;
  completed: boolean;
}

export interface TodoStore {
  todo: Todo[];
  add: (text: string) => void;
  remove: (id: number | string) => void;
  update: (todo: Todo) => void;
  clear: () => void;
}

export default create<TodoStore>()(
  devtools(
    persist(
      (set) => ({
        todo: [],
        add: (text: string) =>
          set((state) => ({
            todo: [...state.todo, { id: Date.now(), text, completed: false }]
          })),
        remove: (id: number | string) =>
          set((state) => ({
            todo: state.todo.filter((todo) => todo.id !== id)
          })),
        update: (updatedTodo: Todo) =>
          set((state) => ({
            todo: state.todo.map((todo) => (todo.id === updatedTodo.id ? { ...updatedTodo } : todo))
          })),
        clear: () => {
          return set(() => ({
            todo: []
          }));
        }
      }),
      {
        name: 'todoStore'
      }
    )
  )
);
