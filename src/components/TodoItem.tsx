import { useState } from "react";
import { Trash } from "phosphor-react";
import { TodoItemProps } from "../App";

import styles from "./TodoItem.module.css";

export function TodoItem({ description }: TodoItemProps) {
  return (
    <li className={styles.container}>
      <div className={styles.content}>
        <label className={styles.checkboxContainer}>
          {description}
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
        <Trash size={24} />
      </div>
    </li>
  );
}
