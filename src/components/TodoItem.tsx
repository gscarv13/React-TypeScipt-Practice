import React from "react";
import styles from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string }> = ({ text}) => {
  return <li className={styles.item}>{text}</li>;
}

export default TodoItem;
