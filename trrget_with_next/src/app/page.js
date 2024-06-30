// page.js
import Image from "next/image";
import styles from "./page.module.css";
import App from "./App"; // Correct path to App.js

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* Add your content here */}
      </div>
      <App />
    </main>
  );
}
