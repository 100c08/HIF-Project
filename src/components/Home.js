import styles from "@/styles/Home.module.css";
import Footer from './Footer';
import { useState } from 'react';

export default function Home() {
  const [isFooterActive, setIsFooterActive] = useState(false);

  // 스크롤 이벤트 리스너 추가
  const handleScroll = () => {
    const footerSection = document.getElementById('footer-section');
    if (footerSection) {
      const rect = footerSection.getBoundingClientRect();
      // 푸터 섹션이 화면에 보이면 애니메이션 활성화
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsFooterActive(true);
      } else {
        setIsFooterActive(false);
      }
    }
  };

  // 컴포넌트 마운트시 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* 다른 섹션들 */}
      <section className={styles.heroSection}>
        {/* 기존 heroSection 내용 */}
      </section>

      <section className={styles.contentSection}>
        {/* 기존 contentSection 내용 */}
      </section>

      {/* Footer 섹션 */}
      <section id="footer-section" className={styles.footerSection}>
        <Footer isActive={isFooterActive} />
      </section>
    </div>
  );
}