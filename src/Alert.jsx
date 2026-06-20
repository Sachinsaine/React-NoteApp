import styles from "./alert.module.css";
export const Alert = ({ children, type }) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{children}</div>;
};
