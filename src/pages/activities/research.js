import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/activities/Research.module.css';
import localFont from "next/font/local";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function Research() {
  const [selectedImage, setSelectedImage] = useState(null);
  const marketInsightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 페이지 마운트 시 바로 visible 상태를 false로 설정
    setIsVisible(false);
    
    // 약간의 지연 후 visible로 변경
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      {
        threshold: 0.2
      }
    );

    if (marketInsightRef.current) {
      observer.observe(marketInsightRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (marketInsightRef.current) {
        observer.unobserve(marketInsightRef.current);
      }
    };
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={playfairDisplay.variable}>
      <Head>
        <title>Valuation Study | HIF</title>
        <meta property="og:title" content="Valuation Study | HIF" />
        <meta name="description" content="HIF Valuation Study page" />
      </Head>

      <div className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>
          Valuation Study
        </h1>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbText}>ACTIVITIES</span>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Valuation Study</span>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Valuation Study</h2>
          
          <p className={styles.description}>
            밸류에이션 스터디는 학회원들이 심도 있는 <strong>기업분석</strong>과 <strong>투자전략</strong> 수립 과정을 통해<br />
            금융 시장에 대한 이해를 높이고 실무 역량을 강화할 수 있는 팀 활동입니다.
          </p>

          <div className={styles.studyIntro}>
            <ul className={styles.studyDetails}>
              <li>
                <strong>기업분석팀</strong>과 <strong>투자전략팀</strong>으로 나눠 각각 기업분석과 투자전략에 관한 프로젝트를 수행하며 스터디 결과물을 발표하는 형태로 진행됩니다.
              </li>
              <li>
                밸류에이션 스터디는 이론적인 학습뿐만 아니라 <strong>현직에 종사하고 계신 선배님들의 도움</strong>으로 실질적인 사례 연구까지 더해 금융 및 투자 분야에서의 전문성을 배양합니다.
              </li>
            </ul>
          </div>

          <div className={styles.divider}></div>
        </div>

        <div className={styles.teamsContainer}>
          {/* 기업분석팀 섹션 */}
          <div className={styles.teamSection}>
            <h2 className={styles.teamTitle}>기업분석팀</h2>
            
            <div className={styles.teamContent}>
              <div className={styles.teamInfo}>
                <h3 className={styles.teamSubtitle}>기업분석팀 한 줄 소개</h3>
                <p className={styles.teamDescription}>
                  산업 분석, 사업 분석, 기업 분석까지 대상 기업의 전반적인 분석 및 밸류에이션
                </p>

                <h3 className={styles.teamSubtitle}>활동 내용</h3>
                <ul className={styles.activityList}>
                  <li>금융/경제 이론 학습</li>
                  <li>국내외 최신 시황 스터디</li>
                  <li>제도권 수준의 분석보고서 작성</li>
                  <li>투자전략 세미나 진행</li>
                </ul>
              </div>

              <div className={styles.teamImages}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/Research1.png"
                    alt="Research Image 1"
                    width={400}
                    height={300}
                    className={styles.teamImage}
                    quality={100}
                    onClick={() => handleImageClick("/Research1.png")}
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/Research2.png"
                    alt="Research Image 2"
                    width={400}
                    height={300}
                    className={styles.teamImage}
                    quality={100}
                    onClick={() => handleImageClick("/Research2.png")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 투자전략팀 섹션 */}
          <div className={styles.teamSection}>
            <h2 className={styles.teamTitle}>투자전략팀</h2>
            
            <div className={styles.teamContent}>
              <div className={styles.teamInfo}>
                <h3 className={styles.teamSubtitle}>투자전략팀 한 줄 소개</h3>
                <p className={styles.teamDescription}>
                  거시경제를 중심으로(Top-Down) 자산시장을 분석하고 시의적절한 투자전략을 제시
                </p>

                <h3 className={styles.teamSubtitle}>활동 내용</h3>
                <ul className={styles.activityList}>
                  <li>밸류에이션 방법론 학습</li>
                  <li>분석 대상 기업의 재무재표 및 경영성과 분석</li>
                  <li>산업 트렌드 및 Peer 분석</li>
                  <li>분석 결과를 토대로 투자 아이디어 제안</li>
                </ul>
              </div>

              <div className={styles.teamImages}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/Research3.png"
                    alt="Research Image 3"
                    width={400}
                    height={300}
                    className={styles.teamImage}
                    quality={100}
                    onClick={() => handleImageClick("/Research3.png")}
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/Research4.png"
                    alt="Research Image 4"
                    width={400}
                    height={300}
                    className={styles.teamImage}
                    quality={100}
                    onClick={() => handleImageClick("/Research4.png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomDescription}>
          밸류에이션 스터디는 실무 중심의 학습을 통해 학회원들에게 기업 분석 및 전략적 사고 능력을 배양하며, 이론과 실무를 연결하는 중요한 학습 기회를 제공합니다.
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <Image 
              src={selectedImage} 
              alt="Enlarged research" 
              width={1200}
              height={800}
              className={styles.modalImage}
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}