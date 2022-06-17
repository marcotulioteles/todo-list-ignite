import { FormEvent, useContext, useState } from "react";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { PlusCircle } from "phosphor-react";

import "./global.css";

import styles from "./App.module.css";
import { TodoContext, TodoProps } from "./contexts/TodoContext";

function App() {
  const { setTodoList } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState<TodoProps>({} as TodoProps);

  const handleUpdateTodoList = (event: FormEvent) => {
    event.preventDefault();
    if (newTodo.description) {
      setTodoList((state) => [...state, newTodo]);
      setNewTodo({ ...newTodo, description: "" });
    }
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.container} onSubmit={handleUpdateTodoList}>
          <label htmlFor="">
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              onChange={(event) => {
                setNewTodo({
                  description: event.target.value,
                  done: false,
                });
              }}
              value={newTodo.description || ""}
            />
          </label>
          <button type="submit">
            Criar
            <PlusCircle weight="bold" size={18} />
          </button>
        </form>
        <TodoList />
      </div>
    </>
  );
}

export default App;
