import styles from '../styles/Footer.module.css';

export default function Footer({ isActive }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        {/* 왼쪽 콘텐츠 */}
        <div className={`${styles.leftContent} ${isActive ? styles.active : ''}`}>
          <div className={styles.title}>
            HUFS Institute of Finance,
          </div>
          <div className={styles.hif}>
            HIF
          </div>
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className={`${styles.rightContent} ${isActive ? styles.active : ''}`}>
          <div className={styles.infoRow}>
            <span className={styles.label}>이메일</span>
            <span>abc@abc.com</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>회장</span>
            <span>윤미르 | 010-3108-7767</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>부회장</span>
            <span>강지원 | 010-8537-7843</span>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2010-2024 HIF. All Rights Reserved.
      </div>
    </footer>
  );
}