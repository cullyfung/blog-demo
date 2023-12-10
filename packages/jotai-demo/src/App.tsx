import { useState } from 'react';
import './App.css';
import { useAtom } from 'jotai';
import { todosAtom } from './store';
import TodoItem from './TodoItem';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useAtom(todosAtom);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    setTodos((prev) => [...prev, { id: Date.now().toString(), text, done: false }]);
    setText('');
  };

  return (
    <section className="container">
      <header>
        <h1>Todo</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            className="input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </header>

      <ul className="todos">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </section>
  );
}

export default App;
