import { useRef, useState } from 'react';
import useTodoStore, { Todo } from '../store/useTodoStore';
import CheckedIcon from './CheckedIcon';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { update, remove } = useTodoStore();

  return (
    <div className="flex items-center justify-between border h-16 px-3">
      <button onClick={() => update({ ...todo, completed: !todo.completed })}>
        <CheckedIcon
          checked={todo.completed}
          className="text-[#555] mx-2 w-6 h-6"
        />
      </button>
      <div className="flex items-center flex-1 mx-2 text-2xl text-light-100">
        {isEdit ? (
          <input
            ref={inputRef}
            type="text"
            className="w-full h-full py-2 px-3 outline-gray-300 text-[#777]"
            value={todo.text}
            onChange={(e) => update({ ...todo, text: e.target.value })}
            onBlur={() => setIsEdit(false)}
          />
        ) : (
          <div
            className="w-full"
            onDoubleClick={() => {
              setIsEdit(true);
              inputRef.current?.focus();
            }}
          >
            <span
              className={`relative before:absolute before:content-[''] before:h-[2px] before:top-1/2 before:bg-[#999] transition-all  ${
                todo.completed ? 'before:w-full text-[#999]' : 'before:w-0'
              }`}
            >
              {todo.text}
            </span>
          </div>
        )}
      </div>

      <button
        className="text-red-700"
        onClick={() => remove(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
