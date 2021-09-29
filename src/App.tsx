import { useState } from 'react'
import Todos from './components/Todos';
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [count, setCount] = useState(0);

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodoList((prevState => [...prevState, newTodo]))
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todoList} />
    </div>
  )
}

export default App
