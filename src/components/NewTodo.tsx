import React, { useRef } from "react";
import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();

    // the ? means that we can have a value or null when accessing the current
    // alternatively, if you know the value will be present for a possible null value
    // use the ! sign.
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) { return; }
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={handleCreate} className={styles.form}>
      <input ref={inputRef}  type="text" placeholder='Add a description of your todo' />
      <button type="submit">Add Todo</button>
    </form>
  )
};

export default NewTodo;
