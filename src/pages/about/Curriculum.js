import styles from '../../styles/about/Curriculum.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Curriculum() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showFixedDot, setShowFixedDot] = useState(false);
  const [visitedIndexes, setVisitedIndexes] = useState(new Set());
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector(`.${styles.timeline}`);
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.66;
      
      // 타임라인 선이 트리거 포인트에 있을 때 동그라미 표시
      setShowFixedDot(
        rect.top <= triggerPoint && 
        rect.bottom >= triggerPoint
      );

      const now = Date.now();
      if (now - lastScrollTime.current > 50) {
        lastScrollTime.current = now;
        
        const items = document.querySelectorAll(`.${styles.timelineItem}`);
        const timelineLine = document.querySelector(`.${styles.timelineLine}`);
        const lineRect = timelineLine.getBoundingClientRect();
        
        // 트리거 포인트가 타임라인 선과 교차하는지 확인
        if (lineRect.left <= window.innerWidth / 2 && lineRect.right >= window.innerWidth / 2) {
          items.forEach((item, idx) => {
            const itemRect = item.getBoundingClientRect();
            const index = Number(item.getAttribute('data-index'));
            
            // 트리거 포인트가 현재 아이템보다 아래에 있으면 활성화
            if (itemRect.top <= triggerPoint) {
              setVisitedIndexes(prev => new Set([...prev, index]));
            }
            
            // 현재 가장 가까운 아이템을 activeIndex로 설정
            if (Math.abs(itemRect.top - triggerPoint) < 100) {
              setActiveIndex(index);
            }
          });
        }
      }
    };

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = Number(entry.target.getAttribute('data-index'));
          const rect = entry.target.getBoundingClientRect();
          const triggerPoint = window.innerHeight * 0.66;
          
          if (rect.top <= triggerPoint) {
            setVisitedIndexes(prev => new Set([...prev, index]));
            if (Math.abs(rect.top - triggerPoint) < 100) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-33% 0px -33% 0px'
      }
    );

    const items = document.querySelectorAll(`.${styles.timelineItem}`);
    items.forEach(item => itemObserver.observe(item));

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      itemObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineItems = [
    { title: "입회", description: "" },
    { title: "정규세션 (Junior)", description: "매주 목요일 정규세션을 통해 기초적인 금융 지식을 쌓습니다. 산업분석,  정책금융, 매크로 이슈 등 금융시장에 대한 실무적 인사이트를 습득합니다. 심도 있는 기업분석 및 투자전략 수립 과정을 통해 리서치 역량을 제고합니다." },
    { title: "방학 (Mid-Season)", description: "방학 중에는 다양한 금융 공모전에 참가하여 실전 경험을 쌓습니다. 역대 수상 실적을 보유한 선배들의 Know-How와 멘토링을 통해 체계적으로 준비합니다." },
    { title: "정규세션 (Senior)", description: "선배기수로서 팀장 또는 부팀장이 되어 신입기수들을 교육합니다. 정규세션의 주축이 되어 심화된 학습과 프로젝트를 수행합니다. 금융권 취업을 위한 실질적인 준비와 네트워킹을 진행합니다." },
    { title: "수료 (Alumni)", description: "" }
  ];

  return (
    <div className={styles.curriculumSection} ref={sectionRef}>
      <div className={styles.smallDivider}></div>
      <h2 className={styles.curriculumTitle}>Curriculum</h2>
      
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          <div className={`${styles.activeDot} ${showFixedDot ? styles.show : ''}`}></div>
          
          {timelineItems.map((item, index) => (
            <div 
              key={index}
              data-index={index}
              className={`${styles.timelineItem} ${visitedIndexes.has(index) ? styles.active : ''}`}
            >
              <div className={styles.staticDot}></div>
              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
              </div>
              {item.description && (
                <div className={styles.timelineDescription}>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className={styles.curriculumDescription}>
        금융연구회는 선배들의 실전 경험과 노하우를 바탕으로 한 체계적인 커리큘럼을 통해,<br />
        실무 역량을 효과적으로 쌓을 수 있는 환경을 제공합니다.
      </p>
    </div>
  );
}