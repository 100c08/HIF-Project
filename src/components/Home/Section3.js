import { useState, useEffect, useRef } from 'react';
import localFont from "next/font/local";
import styles from '../../styles/Home/Section3.module.css';
import Link from 'next/link';
import Image from 'next/image';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function Section3() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationStarted]);

  return (
    <div className={`${styles.wrapper} ${playfairDisplay.variable}`} ref={sectionRef}>
      <div className={`${styles.container} ${animationStarted ? styles.animate : ''}`}>
        <div className={`${styles.title} ${styles.fadeUpAnimation1}`}>
          Activities
        </div>

        <div className={styles.activitiesGrid}>
          {/* 왼쪽 그룹 */}
          <div className={styles.activitySection}>
            <h2 className={`${styles.sectionTitle} ${styles.fadeUpAnimation2}`}>Main Activities</h2>
            <div className={styles.activityGroup}>
              <div className={`${styles.activityItem} ${styles.fadeUpAnimation3}`}>
                <Link href="/activities/regular-session" className={styles.circleLink}>
                  <div className={styles.circle}>
                    <Image 
                      src="/Section3_1.jpg" 
                      alt="Regular Session" 
                      width={400}
                      height={560}
                      className={styles.circleImage}
                      quality={100}
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </Link>
                <h3>Regular Session</h3>
                <p>세미나 & 금융시장 인사이트</p>
              </div>

              <div className={`${styles.activityItem} ${styles.fadeUpAnimation4}`}>
                <Link href="/activities/competition" className={styles.circleLink}>
                  <div className={styles.circle}>
                    <Image 
                      src="/Section3_2.jpg" 
                      alt="Competition" 
                      width={400}
                      height={560}
                      className={styles.circleImage}
                      quality={100}
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </Link>
                <h3>Competition</h3>
                <p>금융/투자 공모전</p>
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* 오른쪽 그룹 */}
          <div className={styles.activitySection}>
            <h2 className={`${styles.sectionTitle} ${styles.fadeUpAnimation5}`}>Extracurricular Activities</h2>
            <div className={styles.activityGroup}>
              <div className={`${styles.activityItem} ${styles.fadeUpAnimation6}`}>
                <Link href="/activities/research" className={styles.circleLink}>
                  <div className={styles.circle}>
                    <Image 
                      src="/Section3_3.jpg" 
                      alt="Research" 
                      width={400}
                      height={560}
                      className={styles.circleImage}
                      quality={100}
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </Link>
                <h3>Research</h3>
                <p>경제분석팀 & 투자전략팀</p>
              </div>

              <div className={`${styles.activityItem} ${styles.fadeUpAnimation7}`}>
                <a 
                  href="https://hif-dsai.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.circleLink}
                >
                  <div className={styles.circle}>
                    <Image 
                      src="/Section3_4.jpg" 
                      alt="DS/AI" 
                      width={400}
                      height={560}
                      className={styles.circleImage}
                      quality={100}
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </a>
                <h3>DS/AI</h3>
                <p>Data Science & Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.description} ${styles.fadeUpAnimation8}`}>
          <p>금융시장 인사이트부터 데이터 분석까지,</p>
          <p>우리는 끊임없이 새로운 도전을 이어갑니다.</p>
        </div>
      </div>
    </div>
  );
}
