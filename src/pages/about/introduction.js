import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/about/Introduction.module.css';
import localFont from "next/font/local";
import Image from 'next/image';
import { useEffect } from 'react';
import Curriculum from './Curriculum';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function Introduction() {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.animate);
            }
          });
        },
        { threshold: 0.2 }
      );

      // 각 요소들을 개별적으로 관찰
      const visionTitle = document.querySelector(`.${styles.visionTitle}`);
      const visionText = document.querySelector(`.${styles.visionText}`);
      const featureItems = document.querySelectorAll(`.${styles.featureItem}`);

      if (visionTitle) observer.observe(visionTitle);
      if (visionText) observer.observe(visionText);
      featureItems.forEach(item => observer.observe(item));

      return () => observer.disconnect();
    }, []);

    return (
      <div className={playfairDisplay.variable}>
        <Head>
        <title>Introduction | 금융연구회</title>
        <meta property="og:title" content="Introduction | 금융연구회" />
        <meta name="description" content="금융연구회 소개 페이지입니다." />
      </Head>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>
          Introduction
        </h1>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>ABOUT US</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Introduction</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftSection}>
              <Image
                src="/검정_글자O.svg"
                alt="HIF Logo"
                width={400}
                height={400}
                className={styles.logo}
              />
            </div>
            
            <div className={styles.rightSection}>
              <span className={styles.aboutTitle}>ABOUT US</span>
              <h2 className={styles.mainDescription}>
                <strong>금융연구회</strong>는 2010년 설립된 한국외국어대학교 경영대학 소속의 금융 전문 학회입니다.
              </h2>
              <div className={styles.contentBody}>
                <p>
                  우리 학회는 금융세미나, 신문스터디, 공모전 참가 등 다양한 활동을 통해 경제와 금융에 대한 폭넓은 지식을 쌓고, 선후배 간의 긴밀한 네트워크를 바탕으로 금융시장 동향 및 실무 인사이트를 학습합니다. 특히, 다양한 공모전에서 압도적인 수상 실적을 자랑하며, 선배들이 축적한 실전 Know-How를 바탕으로 공모전 준비와 실무 학습에서 큰 도움을 받고 있습니다. 이러한 경험은 학회원들이 금융권 진출을 준비하는 데 강력한 자산이 되고 있습니다.
                </p>
                <p>
                  설립 이후 현재까지 200명이 넘는 Alumni를 배출하였으며, 선배님들께서는 증권사, 은행, 여전사, 금융공기업 등 다양한 금융권에 진출해 전문성을 발휘하고 있습니다. 또한, 금융권 선배님들과의 지속적인 교류를 통해 탄탄한 네트워크를 유지하고 있으며, 이는 학회원들이 금융권에 도전하고 자신의 역량을 확장하는 데 큰 도움이 되고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.visionSection}>
          <h2 className={styles.visionTitle}>Vision</h2>
          <p className={styles.visionText}>
            금융연구회는 <strong>학회원들이 금융 시장을 깊이 이해하고 실무 역량을 갖춘 전문가로 성장할 수 있도록 지원</strong>합니다.<br />
            이를 위해 학술 연구, 공모전, 네트워크 형성 등 실전 중심의 경험을 제공하며,<br />
            <strong>금융권에서 경쟁력을 갖춘 인재를 양성하는 것</strong>을 목표로 합니다.
          </p>

          <div className={styles.featureSection}>
            <div className={`${styles.featureContainer} scroll-animation`}>
              <div className={styles.featureItem}>
                <p className={styles.featureText}>
                  기업분석, 정책금융, 매크로 이슈 등을 주제로 학회원들끼리 심도깊은 학습을 진행하며, 이를 통해 다양한 <strong>금융분야의 인사이트를 도출</strong>하는 것을 목표로 합니다.
                </p>
                <Image src="/intro_1.svg" alt="Feature 1" width={250} height={250} />
              </div>

              <div className={`${styles.featureItem} ${styles.rightAlign}`}>
                <p className={styles.featureText}>
                  <strong>학술활동을 위한 학회, 그 이상의 가치를 지향</strong>합니다. 이러한 <strong>네트워크 형성</strong>은 학회활동을 통해 지식을 얻는 것뿐만 아니라 <strong>향후 금융 업계에서 종사할 평생의 동반자</strong>들을 만날 수 있는 소중한 기회입니다.
                </p>
                <Image src="/intro_2.svg" alt="Feature 2" width={250} height={250} />
              </div>

              <div className={styles.featureItem}>
                <p className={styles.featureText}>
                  학회원들의 학구적 열정과 이를 뒷받침하는 역량과 학회의 <strong>체계적인 공모전 커리큘럼을 가지고 있습니다.</strong> 무엇보다 <strong>선배님들의 수상 KNOW-HOW 및 레퍼런스 전수</strong>를 통해 한단계 더 나은 성장을 이루고 있습니다.
                </p>
                <Image src="/intro_3.svg" alt="Feature 3" width={250} height={250} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Curriculum />
    </div>
  );
}