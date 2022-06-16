import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { EmptyList } from "./EmptyList";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

export function TodoList() {
  const { todoList, todosDoneNumber } = useContext(TodoContext);

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
            {todosDoneNumber === 0 || todosDoneNumber === todoList.length
              ? `${todosDoneNumber}`
              : `${todosDoneNumber + " de " + todoList.length}`}
          </span>
        </div>
      </header>
      {todoList.length > 0 ? (
        <ul>
          {todoList.map((todo, index) => (
            <TodoItem key={todo.description} index={index} />
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}
