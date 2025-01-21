import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Section1 from '../components/Home/Section1'; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair",
});

export default function Home() {
  const [isFooterActive, setIsFooterActive] = useState(false);  // useState 추가

  const hideNavigatorFooterItem = () => {
    const navigator = document.querySelector("#fp-nav > ul")
    const footerItem = navigator.children[navigator.children.length - 1]

    footerItem.style.cssText = 'display: none'
  }

  const modifyNavigatorStyle = () => {
    const items = document.querySelectorAll('#fp-nav > ul > li > a > span')

    items.forEach(item => {
      item.style.cssText = 'background: #ffffff'
    })
  }

  useEffect(() => {
    hideNavigatorFooterItem()
    modifyNavigatorStyle()
  }, [])


  return (
    <>
      <Head>
       <title>금융연구회 | HUFS Institute of Finance</title>
        <meta property="og:title" content="금융연구회 | HUFS Institute of Finance" />
        <meta property="og:description" content="HUFS Institute of Finance - Where Vision Meets Finance" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 인디케이터 네비게이션 (Fullpage.js 내장 네비게이션 사용) */}
      <ReactFullpage
        navigation={true} // Fullpage.js 내장 네비게이션 활성화
        fitToSection={true} // 섹션을 화면에 맞추도록 설정
        fitToSectionDelay={500} // 섹션 전환 딜레이
        scrollingSpeed={800} // 스크롤 전환 속도 최적화
        scrollOverflow={true} // 섹션 내용 스크롤 허용
        touchSensitivity={5} // 터치 감도 조정
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE_KEY}
        credits={false}
        afterLoad={(origin, destination) => {
          console.log('Section loaded:', destination.index); // 디버깅용
          if (destination.index === 5) { // 푸터가 6번째 섹션
            console.log('Footer section activated'); // 디버깅용
            setIsFooterActive(true);
          } else {
            setIsFooterActive(false);
          }
        }}
        render={() => (
          <ReactFullpage.Wrapper className ={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable}`}>
            <div className={`section ${styles.heroSection}`}>
              <div className={styles.heroOverlay}>
                <Section1 />
              </div>
            </div>

            <div className={`section ${styles.heroSection}`}>
              <div className={styles.heroOverlay}>
                <h1 className={styles.heroTitle}>Section 2</h1>
                <p className={styles.heroSubtitle}>HUFS Institute of Finance</p>
              </div>
            </div>

            <div className={`section ${styles.heroSection}`}>
              <div className={styles.heroOverlay}>
                <h1 className={styles.heroTitle}>Section 3</h1>
                <p className={styles.heroSubtitle}>HUFS Institute of Finance</p>
              </div>
            </div>

            <div className={`section ${styles.heroSection}`}>
              <div className={styles.heroOverlay}>
                <h1 className={styles.heroTitle}>Section 4</h1>
                <p className={styles.heroSubtitle}>HUFS Institute of Finance</p>
              </div>
            </div>

            <div className={`section ${styles.heroSection}`}>
              <div className={styles.heroOverlay}>
                <h1 className={styles.heroTitle}>Section 5</h1>
                <p className={styles.heroSubtitle}>HUFS Institute of Finance</p>
              </div>
            </div>

            {/* 푸터 섹션 */}
            <div className={`section fp-auto-height ${styles.footerSection}`} style={{ backgroundColor: '#000' }}>
             <Footer isActive={isFooterActive} />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}

