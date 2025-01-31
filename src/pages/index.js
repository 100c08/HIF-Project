import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section4 from '../components/Home/Section4';


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
  const [section2Active, setSection2Active] = useState(false);
  const [section4Active, setSection4Active] = useState(false);
  const [isFooterActive, setIsFooterActive] = useState(false);

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
    const cleanup = () => {
      // 필요한 경우 스타일 초기화 로직
    };
    
    hideNavigatorFooterItem();
    modifyNavigatorStyle();
    
    return cleanup;
  }, []);


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
        navigation={true}
        fitToSection={true}
        fitToSectionDelay={500}
        scrollingSpeed={800}
        scrollOverflow={true}
        touchSensitivity={5}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE_KEY}
        credits={false}
        onLeave={(origin, destination, direction) => {
          if (destination.index === 1) {  // Section2로 이동 시작할 때
            document.documentElement.setAttribute('data-section', '2');
            const items = document.querySelectorAll('#fp-nav > ul > li > a > span');
            const logo = document.querySelector('.logoImage'); // 로고 이미지 선택
            
            items.forEach(item => {
              item.style.cssText = 'background: #000000; transition: background 0.8s ease';
            });
            
            if (logo) {
              logo.style.cssText = 'filter: brightness(0); transition: filter 0.8s ease';
            }
          } else if (origin.index === 1) {  // Section2에서 다른 섹션으로 이동 시작할 때
            document.documentElement.setAttribute('data-section', '');
            const items = document.querySelectorAll('#fp-nav > ul > li > a > span');
            const logo = document.querySelector('.logoImage');
            
            items.forEach(item => {
              item.style.cssText = 'background: #ffffff; transition: background 0.8s ease';
            });
            
            if (logo) {
              logo.style.cssText = 'filter: brightness(1); transition: filter 0.8s ease';
            }
          }
        }}
        afterLoad={(origin, destination) => {
          if (destination.index === 1) {
            setSection2Active(true);
          } else {
            setSection2Active(false);
          }
          
          if (destination.index === 3) {  // Section4
            setSection4Active(true);
          } else {
            setSection4Active(false);
          }

          if (destination.index === 5) {  // Footer
            setIsFooterActive(true);
          } else {
            setIsFooterActive(false);
          }
        }}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable}`}>
            <div className={`section ${styles.heroSection}`}>
              <div className={styles.heroOverlay}>
                <Section1 />
              </div>
            </div>

            <div className="section">
              <Section2 isActive={section2Active} />
            </div>

            <div className={`section ${styles.heroSection}`}>
              <div className={styles.heroOverlay}>
                <h1 className={styles.heroTitle}>Section 3</h1>
                <p className={styles.heroSubtitle}>HUFS Institute of Finance</p>
              </div>
            </div>

            <div className="section">
              <Section4 isActive={section4Active} />
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

