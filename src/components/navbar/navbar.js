import styles from "./navbar.module.css";
import Links from "./links/links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
