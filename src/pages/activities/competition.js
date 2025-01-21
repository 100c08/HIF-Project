import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/activities/Competition.module.css';
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function Competition() {
    return (
      <div className={playfairDisplay.variable}>
        <Head>
          <title>Competition | HIF</title>
          <meta property="og:title" content="Competition | HIF" />
          <meta name="description" content="HIF Competition page" />
        </Head>

        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <h1 className={styles.heroTitle}>
            Competition
          </h1>
          {/* Breadcrumb Navigation */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>ACTIVITIES</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>Competition</span>
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