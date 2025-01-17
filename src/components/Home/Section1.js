import styles from '../../styles/Home/Section1.module.css';
import Link from 'next/link';

const Section1 = () => {
  return (
    <div className={styles.wrapper}>  {/* 새로운 wrapper div 추가 */}
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.title} ${styles.fadeUpAnimation1}`}>
            HUFS to Heights, Finance to Futures
          </h1>
          <p className={`${styles.subtitle} ${styles.fadeUpAnimation2}`}>
            Where Vision Meets Finance
          </p>
          
          <div className={`${styles.buttonContainer} ${styles.fadeUpAnimation3}`}>
            <Link href="/recruiting" className={styles.button}>
              Recruiting
            </Link>
            
            <a 
              href="/application_form.txt" 
              download="YFL_2024_Fall_Application.txt"
              className={styles.button}
            >
              2024 - Fall Recruiting 지원서 다운로드
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;