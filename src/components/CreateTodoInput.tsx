import { PlusCircle } from "phosphor-react";
import styles from "./CreateTodoInput.module.css";

export function CreateTodoInput() {
  return (
    <form className={styles.container}>
      <label htmlFor="">
        <input type="text" placeholder="Adicione uma nova tarefa" />
      </label>
      <button type="submit">
        Criar
        <PlusCircle weight="bold" size={18} />
      </button>
    </form>
  );
}
