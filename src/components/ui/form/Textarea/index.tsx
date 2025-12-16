import styles from "./styles.module.css";

export default function Textarea(
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) {
  return <textarea {...props} className={styles.textarea} />;
}
