import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/join/Recruiting.module.css';
import localFont from "next/font/local";
import { useEffect } from 'react';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

const iropke = localFont({
  src: "../../pages/fonts/IropkeBatangM.woff",
  variable: "--font-iropke"
});

export default function Recruiting() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            // 한 번 애니메이션이 실행되면 observer 제거
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }  // 20% 정도 보일 때 실행
    );

    const mobileTimeline = document.querySelector(`.${styles.mobileTimeline}`);
    if (mobileTimeline) {
      observer.observe(mobileTimeline);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${playfairDisplay.variable} ${iropke.variable}`}>
      <Head>
        <title>Recruiting | HIF</title>
        <meta property="og:title" content="Recruiting | HIF" />
        <meta name="description" content="HIF Recruiting page" />
      </Head>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>
          Recruiting
        </h1>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbText}>JOIN US</span>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Recruiting</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentSection}>
          <h2 className={styles.recruitingTitle}>HIF&apos;s Core Values</h2>
          <div className={styles.underline}></div>
          <p className={styles.recruitingDesc}>
            HIF is looking for...
          </p>

          <div className={styles.circleContainer}>
              <div className={`${styles.circleItem} ${styles.fadeInFirst}`}>
                  <div className={styles.circleWrapper}>
                      <Image src="/H.svg" alt="H" width={250} height={250} />
                      <h3 className={`${styles.pointTitle} ${styles.heartColor}`}>Harmony</h3>
                      <p className={styles.circleText}>
                          열린 자세로 타인과 의견을 교환하며 교류하실 분
                      </p>
                  </div>
              </div>
              <div className={`${styles.circleItem} ${styles.fadeInSecond}`}>
                  <div className={styles.circleWrapper}>
                      <Image src="/I.svg" alt="I" width={250} height={250} />
                      <h3 className={`${styles.pointTitle} ${styles.interactionColor}`}>Initiative</h3>
                      <p className={styles.circleText}>
                          배우고자 하는 열정과 의지가 뛰어나신 분
                      </p>
                  </div>
              </div>
              <div className={`${styles.circleItem} ${styles.fadeInThird}`}>
                  <div className={styles.circleWrapper}>
                      <Image src="/F.svg" alt="F" width={250} height={250} />
                      <h3 className={`${styles.pointTitle} ${styles.financeColor}`}>Finance</h3>
                      <p className={styles.circleText}>
                          금융에 대한 관심이 높으신 분
                      </p>
                  </div>
              </div>
          </div>

          <div className={styles.applicationInfo}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>지원자격</span>
              <p className={styles.infoContent}>
                한국외국어대학교 <strong>서울캠퍼스</strong>에서 재학 중이며, <strong>2개 학기 연속 참여</strong>가 가능하신 분
              </p>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>지원방법</span>
              <p className={styles.infoContent}>
                페이지 하단에서 지원서를 다운로드하여 작성 후 <a href="mailto:hufsvalue15@naver.com" className={styles.emailLink}>hufsvalue15@naver.com</a>으로 제출
              </p>
            </div>
          </div>

          <div className={styles.timelineSection}>
            {/* 데스크탑 버전 타임라인 */}
            <div className={styles.desktopTimeline}>
              <Image 
                src="/timeline.svg" 
                alt="Recruitment Timeline" 
                width={1000} 
                height={250}
                className={styles.timelineImage}
              />
            </div>

            {/* 모바일 버전 타임라인 */}
            <div className={styles.mobileTimeline}>
              <div className={styles.timelineItem}>
                <Image src="/timeline_1.svg" alt="Timeline 1" width={100} height={100} />
                <div className={styles.timelineText}>
                  <p className={styles.timelineTitle}>서류전형</p>
                  <p className={styles.timelineDate}>08/04(월) ~ 08/15(금)</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <Image src="/timeline_2.svg" alt="Timeline 2" width={100} height={100} />
                <div className={styles.timelineText}>
                  <p className={styles.timelineTitle}>면접진행</p>
                  <p className={styles.timelineDate}>08/22(금) ~ 08/23(토)</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <Image src="/timeline_3.svg" alt="Timeline 3" width={100} height={100} />
                <div className={styles.timelineText}>
                  <p className={styles.timelineTitle}>합격자발표</p>
                  <p className={styles.timelineDate}>08/24(일)</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <Image src="/timeline_4.svg" alt="Timeline 4" width={100} height={100} />
                <div className={styles.timelineText}>
                  <p className={styles.timelineTitle}>OT</p>
                  <p className={styles.timelineDate}>09/04(목)</p>
                </div>
              </div>
            </div>
            
            <p className={styles.finalMessage}>
              대한민국 최고의 금융학회, 금융연구회에서<br />
              잠재력을 발휘하고 미래 금융인으로 성장하실 분을 찾습니다.
            </p>

            <a 
              href="/000_16.5기 지원서.docx"
              download="000_16.5기 지원서.docx"
              className={styles.downloadButton}
            >
              지원서 다운로드
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}