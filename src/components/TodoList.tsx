import { useContext } from "react";
import { TodoItemProps } from "../App";
import { TodoContext } from "../contexts/TodoContext";
import { EmptyList } from "./EmptyList";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todoList: TodoItemProps[];
}

export function TodoList() {
  const { todoList } = useContext(TodoContext);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <h2>Tarefas criadas</h2>
          <span className={styles.counter}>{todoList.length}</span>
        </div>
        <div className={styles.finishedTasks}>
          <h2>Concluídas</h2>
          <span className={styles.counter}>
            {todoList.length > 0
              ? `${todoList.length} de ${todoList.length}`
              : todoList.length}
          </span>
        </div>
      </header>
      {todoList.length > 0 ? (
        <ul>
          {todoList.map((todo) => (
            <TodoItem key={todo.description} description={todo.description} />
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}
