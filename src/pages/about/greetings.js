import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/about/Greetings.module.css';
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function Greetings() {
    return (
      <div className={playfairDisplay.variable}>
        <Head>
          <title>Greetings | HIF</title>
          <meta property="og:title" content="Greetings | HIF" />
          <meta name="description" content="HIF Greetings page" />
        </Head>

        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <h1 className={styles.heroTitle}>
            Greetings
          </h1>
          {/* Breadcrumb Navigation */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>ABOUT US</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>Greetings</span>
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