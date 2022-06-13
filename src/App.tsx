import { Header } from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import { CreateTodoInput } from "./components/CreateTodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CreateTodoInput />
        <TodoList />
      </div>
    </>
  );
}

export default App;
