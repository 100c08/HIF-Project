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
  const sectionRef = useRef(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>
          Regular Session
        </h1>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>ACTIVITIES</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Regular Session</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Finance Market Insight</h2>
          
          <p className={styles.description}>
            매주 <strong>기업분석, 정책금융, 매크로이슈</strong> 등을 주제로 학회원들끼리 심도 깊은 학습을 진행하며, <strong>금융시장 이슈들을 Follow-up</strong>하고 있습니다.
            이를 통해 매크로 시황, 포트폴리오 전략 등 다양한 금융분야의 인사이트를 습득할 수 있습니다.
          </p>

          <div className={styles.newsGrid} ref={sectionRef}>
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
              <a href="/[2022.04.06 박영찬] 미 장단기 금리 역전…이번에도 '심각한 경기침체' 신호일까.docx" 
                 download 
                 className={styles.downloadLink}>
                전체 보고서 보기
              </a>
            </div>
            <div className={`${styles.newsItem} ${styles.topPosition}`}>
              <Image 
                src="/news3.png" 
                alt="Finance News 3" 
                width={200} 
                height={280} 
                className={styles.newsImage} 
                onClick={() => handleImageClick("/news3.png")} 
              />
              <a href="/[2024.10.29, 14.5기 방창현] 10월 5주차.pdf" 
                 download 
                 className={styles.downloadLink}>
                전체 보고서 보기
              </a>
            </div>
            <div className={`${styles.newsItem} ${styles.bottomPosition}`}>
              <Image 
                src="/news4.png" 
                alt="Finance News 4" 
                width={200} 
                height={280} 
                className={styles.newsImage} 
                onClick={() => handleImageClick("/news4.png")} 
              />
              <a href="/[2024.04.30] 15기 김범진_HMM 영구채.pdf" 
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

      {/* 이미지 모달 */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <Image 
              src={selectedImage} 
              alt="Enlarged news" 
              width={800} 
              height={1000} 
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}