import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/join/Recruiting.module.css';
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

const iropke = localFont({
  src: "../../pages/fonts/IropkeBatangM.woff",
  variable: "--font-iropke"
});

export default function Recruiting() {
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
            <Link href="/" className={styles.breadcrumbLink}>JOIN US</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>Recruiting</span>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.contentSection}>
            <h2 className={styles.recruitingTitle}>HIF&apos;s Philosophy</h2>
            <div className={styles.underline}></div>
            <p className={styles.recruitingDesc}>
              HIF is looking for...
            </p>

            <div className={styles.circleContainer}>
                <div className={`${styles.circleItem} ${styles.fadeInFirst}`}>
                    <div className={styles.circleWrapper}>
                        <Image src="/H.svg" alt="H" width={250} height={250} />
                        <h3 className={`${styles.pointTitle} ${styles.heartColor}`}>Heart</h3>
                        <p className={styles.circleText}>
                            배우고자하는 열정과 의지가 뛰어나신 분
                        </p>
                    </div>
                </div>
                <div className={`${styles.circleItem} ${styles.fadeInSecond}`}>
                    <div className={styles.circleWrapper}>
                        <Image src="/I.svg" alt="I" width={250} height={250} />
                        <h3 className={`${styles.pointTitle} ${styles.interactionColor}`}>Interaction</h3>
                        <p className={styles.circleText}>
                            열린 자세로 타인과 의견을 교환하며 교류하실 분
                        </p>
                    </div>
                </div>
                <div className={`${styles.circleItem} ${styles.fadeInThird}`}>
                    <div className={styles.circleWrapper}>
                        <Image src="/F.svg" alt="F" width={250} height={250} />
                        <h3 className={`${styles.pointTitle} ${styles.financeColor}`}>Finance</h3>
                        <p className={styles.circleText}>
                            금융권에 대한 관심이 높으신 분
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
                  페이지 하단에서 지원서를 다운받아 작성 후 <a href="mailto:hufsvalue15@naver.com" className={styles.emailLink}>hufsvalue15@naver.com</a>으로 제출
                </p>
              </div>
            </div>

            <div className={styles.timelineSection}>
              <Image 
                src="/timeline.svg" 
                alt="Recruitment Timeline" 
                width={1000} 
                height={250}
                className={styles.timelineImage}
              />
              
              <p className={styles.finalMessage}>
                한국외국어대학교 최고의 금융학회 금융연구회에서<br />
                잠재력을 발휘하고 미래 금융인으로 성장하실 분을 찾습니다.
              </p>

              <a 
                href="/application_form.txt" 
                download 
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