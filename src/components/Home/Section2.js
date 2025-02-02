import Image from 'next/image';
import styles from '../../styles/Home/Section2.module.css';
import { useState, useEffect } from 'react';

export default function Section2({ isActive }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    // 초기 설정
    handleResize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);

    // 클린업
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundGradient}></div>
      <div className={`${styles.contentContainer} ${isActive ? styles.animate : ''}`}>
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
              경영대학 소속의 금융 전문 학회입니다
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