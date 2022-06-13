import rocketLogo from "../assets/rocket.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocketLogo} alt="Logo" />
        <h1>
          <span>to</span>do
        </h1>
      </div>
    </header>
  );
}
