import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// If props object was being used instead, you could skip the destructuring

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => <TodoItem key={item.id} text={item.text} />)}
    </ul>
  )
}

export default Todos;
