import { FormEvent, useState } from 'react';
import useTodoStore from './store/useTodoStore';
import TodoItem from './components/TodoItem';

function App() {
  const [text, setText] = useState('');
  const { add, todo } = useTodoStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim().length) {
      return;
    }

    add(text);
    setText('');
  };

  return (
    <div className="bg-[#fefefe] min-h-screen flex flex-col">
      <div className="w-[600px] mx-auto my-20 shadow-sm">
        <h1 className="text-4xl text-[#5e5e5e] text-center">TODO</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What needs to be done ?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="outline-none bg-transparent border text-[#5e5e5e] px-2 py-1 h-16 w-full my-5 text-2xl"
          />
        </form>
        <div className="mt-2 shadow-sm">
          {todo.length === 0 ? (
            <div className="text-[#5e5e5e] text-center text-2xl h-16">No todo items yet.</div>
          ) : null}
          {todo.map((item) => (
            <TodoItem
              todo={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
