// _app.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/globals.css";
import Header from "../components/Header"; // 공통 헤더
import { Layout } from "../components/Layout"; // 레이아웃 컴포넌트

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,    // 애니메이션 지속 시간
      once: false,       // 애니메이션 반복 실행 여부
      mirror: true,      // 요소가 화면을 벗어날 때 반대 애니메이션 실행
      offset: 0,         // 요소가 화면에 나타나는 시점 조정
      easing: 'ease-out-cubic'  // 이징 함수
    });
  }, []);

  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}