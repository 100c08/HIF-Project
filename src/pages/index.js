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
import Section3 from '../components/Home/Section3';
import Section5 from '../components/Home/Section5';

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
  const [section3Active, setSection3Active] = useState(false);
  const [section5Active, setSection5Active] = useState(false);

  useEffect(() => {
    // 푸터 네비게이터 아이템 숨기기
    const navigator = document.querySelector("#fp-nav > ul");
    if (navigator) {
      const footerItem = navigator.children[navigator.children.length - 1];
      if (footerItem) {
        footerItem.style.display = 'none';
      }
    }

    // 초기 네비게이터 스타일 설정
    const items = document.querySelectorAll('#fp-nav > ul > li > a > span');
    items.forEach(item => {
      item.style.background = '#ffffff';
    });

    // 페이지 언마운트 시 스타일 초기화
    return () => {
      const logo = document.querySelector('.logoImage');
      if (logo) {
        logo.style.filter = 'brightness(1)';
      }
      items.forEach(item => {
        item.style.background = '#ffffff';
      });
    };
  }, []);

  useEffect(() => {
    // iOS Safari의 주소창 높이 변화에 대응
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    
    window.addEventListener('resize', appHeight);
    window.addEventListener('orientationchange', appHeight);
    appHeight();
    
    return () => {
      window.removeEventListener('resize', appHeight);
      window.removeEventListener('orientationchange', appHeight);
    };
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
          const items = document.querySelectorAll('#fp-nav > ul > li > a > span');
          const logo = document.querySelector('.logoImage');
          
          // 화면 크기가 1400px 초과일 때만 색상 변경 적용
          if (window.innerWidth > 1400) {
            if (destination.index === 1) {
              document.documentElement.setAttribute('data-section', '2');
              items.forEach(item => {
                item.style.cssText = 'background: #000000; transition: background 0.8s ease';
              });
              if (logo) {
                logo.style.cssText = 'filter: brightness(0); transition: filter 0.8s ease';
              }
            } else {
              document.documentElement.removeAttribute('data-section');
              items.forEach(item => {
                item.style.cssText = 'background: #ffffff; transition: background 0.8s ease';
              });
              if (logo) {
                logo.style.cssText = 'filter: brightness(1); transition: filter 0.8s ease';
              }
            }
          }
          // 섹션 전환 시 스크롤 위치 리셋
          window.scrollTo(0, 0);
        }}
        afterLoad={(origin, destination) => {
          setSection2Active(destination.index === 1);
          setSection3Active(destination.index === 2);
          setSection4Active(destination.index === 3);
          setSection5Active(destination.index === 4);
          setIsFooterActive(destination.index === 5);
          // 섹션 로드 후 높이 재조정
          const currentSection = document.querySelector('.fp-section.active');
          if (currentSection) {
            currentSection.style.height = `${window.innerHeight}px`;
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

            <div className="section">
              <Section3 isActive={section3Active} />
            </div>

            <div className="section">
              <Section4 isActive={section4Active} />
            </div>

            <div className="section">
              <Section5 isActive={section5Active} />
            </div>

            <div className={`section fp-auto-height ${styles.footerSection}`} style={{ backgroundColor: '#111111' }}>
              <Footer isActive={isFooterActive} />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}

