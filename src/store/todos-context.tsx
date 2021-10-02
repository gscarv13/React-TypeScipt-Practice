import React, {useState} from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider : React.FC = ({children}) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodoList((prevState => [...prevState, newTodo]))
  };

  const removeTodoHandler = (id: string) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== id)
    })
  };

  const contextValue: TodosContextObj = {
    items: todoList,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>
};

export default TodosContextProvider;
