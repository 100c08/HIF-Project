import { useState, useEffect, useRef } from 'react';
import localFont from "next/font/local";
import styles from '../../styles/Home/Section4.module.css';
import Link from 'next/link';

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
              videoRef.current.style.cssText = 'opacity: 0; background-color: #000;';
              setTimeout(() => {
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                  videoRef.current.style.cssText = 'opacity: 1; background-color: #000;';
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
            
            setPrize(Math.floor(199500000 * easedProgress));
            
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

        <div className={`${styles.proofText} ${styles.fadeUpAnimation5}`}>
          우리는 결과로 증명합니다.
        </div>

        <div className={`${styles.recentAwards} ${styles.fadeUpAnimation6}`}>
          <div className={styles.titleWrapper}>
            <div className={styles.recentAwardsTitle}>최근 수상내역</div>
            <div className={styles.styledLine} />
          </div>
          <div className={styles.awardsList}>
            2025 매일경제 대학(원)생 경제논문 공모전 우수작(2위), 2024 DB 이노베이션챌린지 공모전 대상, 2024 리서치 아카데미아 장려
          </div>
          <Link href="/activities/competition" className={styles.viewMore}>
            view more
          </Link>
        </div>

        <button 
          onClick={() => window.open('/activities/competition', '_blank')}
          className={styles.mobileAwardsButton}
        >
          최근 수상내역 보기
        </button>
      </div>
    </div>
  );
}