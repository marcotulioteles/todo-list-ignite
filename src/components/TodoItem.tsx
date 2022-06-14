import { Trash } from "phosphor-react";

import styles from "./TodoItem.module.css";

export function TodoItem() {
  return (
    <li className={styles.container}>
      <div className={styles.content}>
        <label className={styles.checkboxContainer}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis iusto,
          sunt recusandae eligendi odit reprehenderit cumque optio enim quo.
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
        <Trash size={24} />
      </div>
    </li>
  );
}
