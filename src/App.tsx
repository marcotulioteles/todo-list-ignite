import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { PlusCircle } from "phosphor-react";

import "./global.css";

import styles from "./App.module.css";

export interface TodoItemProps {
  description: string;
  done?: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<TodoItemProps[]>([]);
  const [newTodo, setNewTodo] = useState<TodoItemProps>({} as TodoItemProps);

  const handleUpdateTodoList = (event: FormEvent) => {
    event.preventDefault();
    setTodoList((state) => [...state, newTodo]);
    setNewTodo({ ...newTodo, description: "" });
  };

  const handleNewTodo = (event: ChangeEvent<HTMLInputElement>) => {
    const inputDescription = event.target.value;

    const newTodoInputContent = {
      description: inputDescription,
      done: false,
    };

    setNewTodo(newTodoInputContent);
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
              onChange={handleNewTodo}
              value={newTodo.description || ""}
            />
          </label>
          <button type="submit">
            Criar
            <PlusCircle weight="bold" size={18} />
          </button>
        </form>
        <TodoList todoList={todoList} />
      </div>
    </>
  );
}

export default App;
