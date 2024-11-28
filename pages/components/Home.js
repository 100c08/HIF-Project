import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* 풀스크린 섹션 */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>HIF</h1>
          <p className={styles.heroSubtitle}>
            Business Data Professionals of SNU
          </p>
        </div>
      </section>

      {/* 내부 콘텐츠 */}
      <section className={styles.contentSection}>
        <h2>ABOUT US</h2>
        <p>
          Welcome to the HUFS Institute of Finance. Our mission is to lead in
          financial innovation and AI research.
        </p>
      </section>
    </div>
  );
}
