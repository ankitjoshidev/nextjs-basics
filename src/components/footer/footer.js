import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>lamadev</div>
        <div className={styles.text}>Lama creative thoughts agency</div>
        <div className={styles.copyright}>
          © 2024 Lama Creative Thoughts Agency. All rights reserved.
        </div>
      </div>
    </div>
  );
}
