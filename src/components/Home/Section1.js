import { useRef, useEffect } from 'react';
import localFont from "next/font/local";
import styles from '../../styles/Home/Section1.module.css';
import Link from 'next/link';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

const Section1 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // loadedmetadata 이벤트를 사용하여 비디오가 로드된 후에 처리
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.addEventListener('timeupdate', () => {
          if (videoRef.current) {  // null 체크 추가
            const timeLeft = videoRef.current.duration - videoRef.current.currentTime;
            if (timeLeft < 1) {
              videoRef.current.style.opacity = '0';
              setTimeout(() => {
                if (videoRef.current) {  // null 체크 추가
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

  return (
    <div className={`${styles.wrapper} ${playfairDisplay.variable}`}>
      <video 
        ref={videoRef}
        className={styles.backgroundVideo}
        autoPlay 
        muted 
        playsInline
        loop
      >
        <source src="/FinanceCenter.mp4" type="video/mp4" />
      </video>
      
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.title} ${styles.fadeUpAnimation1}`}>
            HUFS to Heights, Finance to Futures
          </h1>
          <p className={`${styles.subtitle} ${styles.fadeUpAnimation2}`}>
            Where Vision Meets Finance
          </p>
          
          <div className={`${styles.buttonContainer} ${styles.fadeUpAnimation3}`}>
            <Link href="/join/recruiting" className={styles.button}>
              Recruiting
            </Link>
            
            <a 
              href="/금융연구회 16기 지원서.docx"
              download="금융연구회 16기 지원서.docx"
              className={styles.button}
            >
              2025 - Spring (16기) 지원서 다운로드
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;