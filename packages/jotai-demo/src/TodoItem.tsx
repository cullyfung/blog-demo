import { useSetAtom } from 'jotai';
import { Todo, todosAtom } from './store';

const TodoItem = ({ item }: { item: Todo }) => {
  const setTodos = useSetAtom(todosAtom);

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => {
          setTodos((prev) =>
            prev.map((todo) => (todo.id === item.id ? { ...todo, done: !todo.done } : todo))
          );
        }}
      />
      <span>{item.text}</span>

      <button
        className="delete-button"
        onClick={() => {
          setTodos((prev) => prev.filter((todo) => todo.id !== item.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
