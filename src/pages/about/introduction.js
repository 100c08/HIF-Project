import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/about/Introduction.module.css';
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function Introduction() {
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
          {/* 여기에 실제 콘텐츠가 들어갈 예정 */}
        </div>
      </div>
    </div>
  );
}