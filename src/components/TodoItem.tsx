import React from "react";
import styles from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = ({ text, onRemoveTodo}) => {
  return <li className={styles.item} onClick={onRemoveTodo}>{text}</li>;
}

export default TodoItem;
