import { ChangeEvent, useContext, useState } from "react";
import { Trash } from "phosphor-react";
import { TodoContext } from "../contexts/TodoContext";

import styles from "./TodoItem.module.css";

interface TodoItemProps {
  index: number;
}

export function TodoItem({ index }: TodoItemProps) {
  const { todoList, setTodoList, setTodosDoneNumber } = useContext(TodoContext);
  const [checked, setChecked] = useState(false);

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement>,
    description: string
  ) => {
    const newTodoList = todoList;
    const todoIndex = todoList.findIndex(
      (todo) => todo.description === description
    );
    newTodoList[todoIndex].done = event.target.checked;
    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (description: string) => {
    const newTodoList = todoList.filter(
      (todo) => todo.description !== description
    );
    setTodosDoneNumber(newTodoList.filter((todo) => todo.done).length);
    setTodoList(newTodoList);
  };

  return (
    <li className={`${styles.container} ${styles[checked ? "checked" : ""]}`}>
      <div className={styles.content}>
        <label className={`${styles.checkboxContainer}`}>
          {todoList[index].description}
          <input
            type="checkbox"
            onChange={(event) => {
              handleChangeInput(event, todoList[index].description);
              setChecked(event.target.checked);
              event.target.checked
                ? setTodosDoneNumber((state) => state + 1)
                : setTodosDoneNumber((state) => state - 1);
            }}
          />
          <span className={styles.checkmark}></span>
        </label>
        <div
          className={styles.deleteIcon}
          onClick={() => {
            handleDeleteTodo(todoList[index].description);
          }}
        >
          <Trash size={16} />
        </div>
      </div>
    </li>
  );
}
