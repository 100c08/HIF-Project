import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/activities/RegularSession.module.css';
import localFont from "next/font/local";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function RegularSession() {
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
        <title>Regular Session | HIF</title>
        <meta property="og:title" content="Regular Session | HIF" />
        <meta name="description" content="HIF Regular Session page" />
      </Head>

      <div className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>
          Regular Session
        </h1>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbText}>ACTIVITIES</span>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Regular Session</span>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Seminar</h2>
          
          <p className={styles.description}>
            금융연구회는 <strong>학회원 전원이 참여하는 세미나 활동을 진행</strong>하고 있습니다.<br />
            세미나는 4명 내외의 학회원이 팀을 이뤄 주제 선정부터 자료 준비, 발표까지 함께 협력하며<br />
            금융과 경제 분야에 있어 <strong>학술 역량을 배양하는 핵심 활동</strong>입니다.
          </p>

          <div className={`${styles.seminarGrid} ${isVisible ? styles.visible : ''}`}>
            <div className={`${styles.seminarItem}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/Seminar1.jpeg" 
                  alt="Seminar 1" 
                  width={400}
                  height={560}
                  className={styles.seminarImage}
                  onClick={() => handleImageClick("/Seminar1.jpeg")}
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <a href="/[2024.10.03 세미나 A조] 크레딧 일부 발췌.pdf" 
                 download 
                 className={styles.downloadLink}>
                세미나 자료 보기
              </a>
            </div>
            <div className={`${styles.seminarItem}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/Seminar2.jpeg" 
                  alt="Seminar 2" 
                  width={400}
                  height={560}
                  className={styles.seminarImage}
                  onClick={() => handleImageClick("/Seminar2.jpeg")}
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <a href="/[2024.04.04 세미나 A조] SPAC투자 일부 발췌.pdf" 
                 download 
                 className={styles.downloadLink}>
                세미나 자료 보기
              </a>
            </div>
            <div className={`${styles.seminarItem}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/Seminar3.jpeg" 
                  alt="Seminar 3" 
                  width={400}
                  height={560}
                  className={styles.seminarImage}
                  onClick={() => handleImageClick("/Seminar3.jpeg")}
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <a href="/[2024.05.16 세미나 A조] 환리스크 관리 일부 발췌.pdf" 
                 download 
                 className={styles.downloadLink}>
                세미나 자료 보기
              </a>
            </div>
          </div>

          <p className={styles.seminarFooter}>
            세미나는 학회원의 학문적 깊이를 더하고, 분석 능력과 발표 능력을 함양하며,<br />
            미래 금융인으로 성장할 수 있는 중요한 발판이 될 것입니다.
          </p>

          {/* 구분선 */}
          <div className={styles.divider}></div>

          {/* Finance Market Insight 섹션 */}
          <h2 className={styles.sectionTitle}>Finance Market Insight</h2>
          
          <p className={styles.description}>
            매주 <strong>기업분석, 정책금융, 매크로이슈</strong> 등을 주제로 학회원 간의 심도 깊은 학습을 진행하며, <strong>금융시장 이슈들을 Follow-up</strong>하고 있습니다.
            이를 통해 매크로 시황, 포트폴리오 전략 등 다양한 금융분야의 인사이트를 습득할 수 있습니다.
          </p>

          <div className={styles.newsGrid} ref={marketInsightRef}>
            <div className={`${styles.newsItem} ${styles.topPosition}`}>
              <Image 
                src="/news1.png" 
                alt="Finance News 1" 
                width={200} 
                height={280} 
                className={styles.newsImage} 
                onClick={() => handleImageClick("/news1.png")} 
              />
              <a href="/[2024.03.26 15기 이영기] The $27 Trillion Treasury Market Is Only Getting Bigger.pdf" 
                 download 
                 className={styles.downloadLink}>
                전체 보고서 보기
              </a>
            </div>
            <div className={`${styles.newsItem} ${styles.bottomPosition}`}>
              <Image 
                src="/news2.png" 
                alt="Finance News 2" 
                width={200} 
                height={280} 
                className={styles.newsImage} 
                onClick={() => handleImageClick("/news2.png")} 
              />
              <a href="/[2022.04.06 박영찬] 미 장단기 금리 역전…이번에도 ‘심각한 경기침체’ 신호일까.pdf" 
                 download 
                 className={styles.downloadLink}>
                전체 보고서 보기
              </a>
            </div>
            <div className={styles.newsItem}>
              <Image 
                src="/news3.png" 
                alt="Finance News 3" 
                width={200} 
                height={280} 
                className={styles.newsImage} 
                onClick={() => handleImageClick("/news3.png")} 
              />
              <a href="/[2024.04.30] 15기 김범진_HMM 영구채.pdf" 
                 download 
                 className={styles.downloadLink}>
                전체 보고서 보기
              </a>
            </div>
            <div className={styles.newsItem}>
              <Image 
                src="/news4.png" 
                alt="Finance News 4" 
                width={200} 
                height={280} 
                className={styles.newsImage} 
                onClick={() => handleImageClick("/news4.png")} 
              />
              <a href="/[2024.10.29, 14.5기 방창현] 10월 5주차.pdf" 
                 download 
                 className={styles.downloadLink}>
                전체 보고서 보기
              </a>
            </div>
            <div className={`${styles.newsItem} ${styles.topPosition}`}>
              <Image 
                src="/news5.png" 
                alt="Finance News 5" 
                width={200} 
                height={280} 
                className={styles.newsImage} 
                onClick={() => handleImageClick("/news5.png")} 
              />
              <a href="/[2024.09.28. 15기 이영기] 미국서 외면받는 배당성장 ETF…한국 개미만 쓸어담아.pdf" 
                 download 
                 className={styles.downloadLink}>
                전체 보고서 보기
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <Image 
              src={selectedImage} 
              alt="Enlarged seminar" 
              width={1200}
              height={1680}
              className={styles.modalImage}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}