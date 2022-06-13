import Clipboard from "../assets/clipboard.svg";

import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
