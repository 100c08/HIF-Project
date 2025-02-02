import { useState, useEffect, useRef } from 'react';
import localFont from "next/font/local";
import Chart from 'chart.js/auto';
import styles from '../../styles/Home/Section5.module.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

// 전역 폰트 설정 추가
Chart.defaults.font.size = 32;  // 기본 폰트 크기를 32px로 설정
Chart.defaults.font.family = 'var(--font-playfair)';  // 기본 폰트 패밀리 설정

// 파일 최상단에 Chart.js 설정 추가
Chart.defaults.set('plugins.datalabels', {
  color: '#fff',
  font: {
    size: 48,
    family: 'var(--font-playfair)'
  }
});

// 파일 상단에 플러그인 등록
Chart.register(ChartDataLabels);

export default function Section5() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
          
          if (chartRef.current) {
            if (chartInstance.current) {
              chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            
            // 화면 크기에 따른 설정 변경
            const getChartConfig = () => {
              let fontSize = 48;
              let labelSize = 18;
              let padding = { top: 100, right: 150, bottom: 100, left: 150 };
              let labelRadius = 35;
              let dotSize = 4;
              let outerCircleOffset = 50;  // 바깥 원과의 거리
              let labelOffset = {          // 라벨 위치 미세 조정
                default: 35,
                financialPublic: 45,      // 금융공기업
                etc: 25                   // 기타
              };

              if (window.innerWidth <= 1400) {
                fontSize = 40;
                labelSize = 16;
                padding = { top: 80, right: 120, bottom: 80, left: 120 };
                labelRadius = 30;
                dotSize = 3;
                outerCircleOffset = 40;
                labelOffset = {
                  default: 30,
                  financialPublic: 40,
                  etc: 20
                };
              }

              if (window.innerWidth <= 820) {
                fontSize = 32;
                labelSize = 14;
                padding = { top: 60, right: 90, bottom: 60, left: 90 };
                labelRadius = 25;
                dotSize = 2.5;
                outerCircleOffset = 30;
                labelOffset = {
                  default: 25,
                  financialPublic: 35,
                  etc: 15
                };
              }

              if (window.innerWidth <= 480) {
                fontSize = 24;
                labelSize = 12;
                padding = { top: 40, right: 60, bottom: 40, left: 60 };
                labelRadius = 20;
                dotSize = 2;
                outerCircleOffset = 20;
                labelOffset = {
                  default: 20,
                  financialPublic: 25,
                  etc: 10
                };
              }

              return { fontSize, labelSize, padding, labelRadius, dotSize, outerCircleOffset, labelOffset };
            };

            const config = getChartConfig();
            
            // 차트 기본 설정 업데이트
            Chart.defaults.font.size = config.fontSize;
            
            chartInstance.current = new Chart(ctx, {
              type: 'doughnut',
              data: {
                labels: ['증권사/자산운용사', '여전사/은행', '대기업', '금융공기업', '기타'],
                datasets: [{
                  data: [30, 25, 20, 12, 13],
                  backgroundColor: [
                    'rgba(180, 180, 200, 0.7)',
                    'rgba(140, 140, 170, 0.7)',
                    'rgba(100, 100, 140, 0.7)',
                    'rgba(70, 70, 110, 0.7)',
                    'rgba(40, 40, 80, 0.7)'
                  ],
                  borderWidth: 0,
                  cutout: '60%'
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                  padding: config.padding
                },
                plugins: {
                  legend: {
                    display: false
                  },
                  tooltip: {
                    enabled: false
                  },
                  datalabels: {
                    display: false
                  }
                },
                hover: {
                  mode: null
                },
                animation: {
                  animateRotate: true,
                  animateScale: true,
                  duration: 2000,
                  easing: 'easeInOutQuart'
                }
              },
              plugins: [{
                afterDraw: function(chart) {
                  const config = getChartConfig();
                  const ctx = chart.ctx;
                  const centerX = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
                  const centerY = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;
                  const radius = chart.getDatasetMeta(0).data[0].outerRadius;
                  const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;

                  // 안쪽 원 그리기
                  ctx.beginPath();
                  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                  ctx.arc(centerX, centerY, innerRadius * 0.9, 0, Math.PI * 2);
                  ctx.fill();

                  // 바깥쪽 원 그리기
                  const outerRadius = radius + config.outerCircleOffset;
                  ctx.beginPath();
                  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                  ctx.lineWidth = 1;
                  ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
                  ctx.stroke();

                  // 라벨과 점 그리기
                  chart.data.labels.forEach((label, i) => {
                    const meta = chart.getDatasetMeta(0);
                    const arc = meta.data[i];
                    const angle = (arc.startAngle + arc.endAngle) / 2;
                    
                    // 점 그리기
                    const dotX = centerX + Math.cos(angle) * outerRadius;
                    const dotY = centerY + Math.sin(angle) * outerRadius;
                    ctx.beginPath();
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    ctx.arc(dotX, dotY, config.dotSize, 0, Math.PI * 2);
                    ctx.fill();

                    // 라벨 그리기
                    ctx.save();
                    ctx.font = `${config.labelSize}px 'NanumMyeongjo'`;
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    
                    let labelRadius = outerRadius + config.labelOffset.default;
                    if (label === '금융공기업') {
                      labelRadius = outerRadius + config.labelOffset.financialPublic;
                      // 480px 이하일 때 추가 위치 조정
                      if (window.innerWidth <= 480) {
                        const adjustedAngle = angle + (Math.PI / 180) * 5;  // 5도 정도 시계방향으로 조정
                        const labelX = centerX + Math.cos(adjustedAngle) * labelRadius;
                        const labelY = centerY + Math.sin(adjustedAngle) * labelRadius;
                        ctx.fillText(label, labelX, labelY);
                        ctx.restore();
                        return;  // 여기서 종료
                      }
                    } else if (label === '기타') {
                      labelRadius = outerRadius + config.labelOffset.etc;
                    }
                    
                    const labelX = centerX + Math.cos(angle) * labelRadius;
                    const labelY = centerY + Math.sin(angle) * labelRadius;
                    
                    ctx.fillText(label, labelX, labelY);
                    ctx.restore();
                  });
                }
              }]
            });
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // cleanup 시 전역 폰트 설정 초기화
      Chart.defaults.font.size = 12;  // 기본값으로 복구
      Chart.defaults.font.family = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
      
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationStarted]);

  return (
    <div className={`${styles.wrapper} ${playfairDisplay.variable}`} ref={sectionRef}>
      <div className={`${styles.container} ${animationStarted ? styles.animate : ''}`}>
        <div className={`${styles.title} ${styles.fadeUpAnimation1} ${playfairDisplay.variable}`}>Alumni</div>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={`${styles.mainText} ${styles.fadeUpAnimation1}`}>
              함께할 때,<br />
              비로소 우리는<br />
              더 멀리 나아갑니다.
            </div>
            <div className={styles.description}>
              <p className={styles.fadeUpAnimation2}>
                HIF는 <strong className={styles.highlight}>금융권, 주요 대기업, 컨설팅펌</strong> 등 다양한 분야에서 활약하는 Alumni들과 함께합니다.<br />
                이들은 특강, 멘토링, 홈커밍데이를 통해 실질적인 도움을 주고받으며 <strong className={styles.highlight}>끈끈한 유대관계</strong>를 이어가고 있습니다.
              </p>
              <p className={styles.fadeUpAnimation3}>
                이렇듯 HIF는 단순한 학회 활동을 넘어, 졸업 후에도 서로를 이끌어주는 <strong className={styles.highlight}>강력한 네트워크</strong>입니다.<br />
                바로 이것이 <strong className={styles.highlight}>우리가 지향하는 가치이자 자부심</strong>입니다.
              </p>
            </div>
          </div>
          <div className={`${styles.chartSection} ${styles.fadeUpAnimation3}`}>
            <canvas ref={chartRef}></canvas>
            {animationStarted && (
              <div className={styles.logoWrapper}>
                <img src="/검정_글자O.svg" alt="logo" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 