import { EmptyList } from "./EmptyList";
import styles from "./TodoList.module.css";

export function TodoList() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <h2>Tarefas criadas</h2>
          <span className={styles.counter}>0</span>
        </div>
        <div className={styles.finishedTasks}>
          <h2>Concluídas</h2>
          <span className={styles.counter}>0</span>
        </div>
      </header>
      <EmptyList />
    </div>
  );
}
