import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home/Section2.module.css';

export default function Section2() {
  const [isMobile, setIsMobile] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Intersection Observer 설정
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
      window.removeEventListener('resize', handleResize);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationStarted]);

  return (
    <div className={styles.wrapper} ref={sectionRef}>
      <div className={styles.backgroundGradient}></div>
      <div className={`${styles.contentContainer} ${animationStarted ? styles.animate : ''}`}>
        <div className={styles.textSection}>
          <div className={styles.horizontalLine}></div>
          <div className={styles.textContent}>
            <div className={styles.titleGroup}>
              <h1 className={`${styles.mainTitle} ${styles.fadeUpAnimation1}`}>HUFS HIF</h1>
              <h2 className={`${styles.subTitle} ${styles.fadeUpAnimation2}`}>한국외대 금융연구회</h2>
            </div>
            <h3 className={`${styles.description} ${styles.fadeUpAnimation3}`}>
              HUFS to Heights, Finance to Futures
            </h3>
            <p className={`${styles.introText} ${styles.fadeUpAnimation4}`}>
              금융연구회는 2010년 설립된 한국외국어대학교
              {isMobile ? ' ' : <br />}
              경영대학 소속의 금융 전문 학회입니다.
            </p>
            <p className={`${styles.detailText} ${styles.fadeUpAnimation5}`}>
              우리 학회는 금융세미나, 신문스터디, 공모전 참가 등 다양한 활동을 통해
              {isMobile ? ' ' : <br />}
              경제와 금융에 대한 폭넓은 지식을 쌓고, 선후배 간의 긴밀한 네트워크를
              {isMobile ? ' ' : <br />}
              바탕으로 금융시장 동향 및 실무 인사이트를 학습합니다.
              {isMobile ? ' ' : <br />}
              이를 통해 구성원들은 전문성을 갖춘
              {isMobile ? ' ' : <br />}
              금융 인재로 성장해 나갑니다.
            </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/Section2.svg"
            alt="Section 2 Image"
            fill
            className={styles.sectionImage}
            priority
          />
        </div>
      </div>
    </div>
  );
}