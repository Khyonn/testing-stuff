import styles from "./styles.module.css";

export default function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <input {...props} className={styles.input} />;
}
