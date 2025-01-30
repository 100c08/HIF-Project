import { useState, useEffect, useRef } from 'react';
import localFont from "next/font/local";
import styles from '../../styles/Home/Section4.module.css';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function Section4() {
  const [awards, setAwards] = useState(0);
  const [prize, setPrize] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const easeOutQuart = t => 1 - Math.pow(1 - t, 4);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.addEventListener('timeupdate', () => {
          if (videoRef.current) {
            const timeLeft = videoRef.current.duration - videoRef.current.currentTime;
            if (timeLeft < 1) {
              videoRef.current.style.opacity = '0';
              setTimeout(() => {
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                  videoRef.current.style.opacity = '1';
                }
              }, 1000);
            }
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
          
          let startTime;
          const duration = 2000;

          const animateAwards = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min(1, (timestamp - startTime) / duration);
            const easedProgress = easeOutQuart(progress);
            
            setAwards(Math.floor(100 * easedProgress));
            
            if (progress < 1) {
              requestAnimationFrame(animateAwards);
            }
          };

          let prizeStartTime;
          const prizeDuration = 2000;

          const animatePrize = (timestamp) => {
            if (!prizeStartTime) prizeStartTime = timestamp;
            const progress = Math.min(1, (timestamp - prizeStartTime) / prizeDuration);
            const easedProgress = easeOutQuart(progress);
            
            setPrize(Math.floor(200000000 * easedProgress));
            
            if (progress < 1) {
              requestAnimationFrame(animatePrize);
            }
          };

          requestAnimationFrame(animateAwards);
          requestAnimationFrame(animatePrize);
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
      <video 
        ref={videoRef}
        className={styles.backgroundVideo}
        autoPlay 
        muted 
        playsInline
        loop
      >
        <source src="/section4.mp4" type="video/mp4" />
      </video>

      <div className={`${styles.container} ${animationStarted ? styles.animate : ''}`}>
        <div className={`${styles.title} ${styles.fadeUpAnimation1}`}>
          Achievements
        </div>
      
        <div className={styles.stats}>
          <div className={`${styles.statItem} ${styles.fadeUpAnimation2}`}>
            <span className={styles.number}>16</span>
            <span className={styles.label}>년간</span>
          </div>
          <div className={`${styles.statItem} ${styles.fadeUpAnimation3}`}>
            <span className={styles.label}>수상</span>
            <span className={styles.number}>{Math.floor(awards)}</span>
            <span className={styles.label}>회</span>
          </div>
          <div className={`${styles.statItem} ${styles.fadeUpAnimation4}`}>
            <span className={styles.label}>누적상금</span>
            <span className={styles.number}>
              {Math.floor(prize).toLocaleString()}
            </span>
            <span className={styles.label}>원</span>
          </div>
        </div>

        <div className={`${styles.recentAwards} ${styles.fadeUpAnimation5}`}>
          <div className={styles.titleWrapper}>
            <div className={styles.recentAwardsTitle}>최근 3개년 수상내역</div>
            <div className={styles.styledLine} />
          </div>
          <div className={styles.awardsList}>
            2024 DB 이노베이션 챌린지 대상, 핀서치 대상, 2023 DB금융경제공모전 가작 2회, 2022 CFA Research challenge
          </div>
          <button className={styles.viewMore}>view more</button>
        </div>
      </div>
    </div>
  );
}