import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/activities/Competition.module.css';
import localFont from "next/font/local";
import { useEffect, useState } from 'react';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

// 수상 내역 데이터
const awards = [
  {
    title: "제3회 삼성화재xPOSTECHx서울대 전국 대학생 리스크 관리 경진대회",
    date: "2025-06-12",
    rank: "최우수상"
  },
  {
    title: "제15회 DB 보험금융 공모전",
    date: "2025-05-03",
    rank: "가작"
  },
  {
    title: "제15회 DB 보험금융 공모전",
    date: "2025-05-03",
    rank: "입선"
  },
  {
    title: "제15회 DB 보험금융 공모전",
    date: "2025-05-03",
    rank: "입선"
  },
  {
    title: "2025 매일경제 대학(원)생 경제논문 공모전",
    date: "2025-04-10",
    rank: "우수작(2위)"
  },
  {
    title: "2024 리서치 아카데미아",
    date: "2024-12-07",
    rank: "장려"
  },
  {
    title: "2024 DB 이노베이션챌린지 공모전",
    date: "2024-11-26",
    rank: "대상"
  },
  {
    title: "제12회 산업통상자원부 공공데이터 활용 아이디어 공모전",
    date: "2024-08-27",
    rank: "대상(장관상)"
  },
  {
    title: "제14회 DB 금융경제 공모전",
    date: "2024-05-09",
    rank: "가작"
  },
  {
    title: "제14회 DB 금융경제 공모전",
    date: "2024-05-09",
    rank: "가작"
  },
  {
    title: "2023 DMC 빅데이터 아이디어 오디션",
    date: "2023-11-10",
    rank: "대상"
  },
  {
    title: "제4회 중소기업 통계데이터 활용 정책아이디어 공모전",
    date: "2023-09-22",
    rank: "장려상"
  },
  {
    title: "2023 미래에셋 빅데이터 페스티벌",
    date: "2023-09-21",
    rank: "장려상"
  },
  {
    title: "제82회 한국경제신문 TESAT 동아리대항전",
    date: "2023-09-01",
    rank: "대상"
  },
  {
    title: "제31회 중소벤처기업 정책 아이디어 공모전",
    date: "2023-08-31",
    rank: "최우수상"
  },
  {
    title: "2023년 문화관광 데이터 분석대회",
    date: "2023-08-26",
    rank: "대상"
  },
  {
    title: "2023 KISA블록체인·핀테크 경진대회『BEST Challenge』(신용평가 부문)",
    date: "2023-08-17",
    rank: "최우수상"
  },
  {
    title: "2022 하나 디지털 파워온 프로젝트",
    date: "2023-07-13",
    rank: "최우수상"
  },
  {
    title: "제5회 한국투자증권 리서치 대회",
    date: "2023-06-09",
    rank: "대상(1위)"
  },
  {
    title: "제81회 한국경제신문 TESAT 동아리대항전",
    date: "2023-06-02",
    rank: "최우수상"
  },
  {
    title: "제13회 DB 금융경제 공모전",
    date: "2023-04-28",
    rank: "가작"
  },
  {
    title: "제13회 DB 금융경제 공모전",
    date: "2023-04-28",
    rank: "가작"
  },
  {
    title: "제79회 한국경제신문 TESAT 동아리대항전",
    date: "2023-03-03",
    rank: "대상"
  },
  {
    title: "2022-2023 CFA Institute Research Challenge",
    date: "2023-01-14",
    rank: "3위"
  },
  {
    title: "2022년 NH투자증권 빅데이터 경진대회",
    date: "2022-12-13",
    rank: "우수상(2위)"
  },
  {
    title: "제78회 한국경제신문 TESAT 동아리대항전",
    date: "2022-12-01",
    rank: "우수상"
  },
  {
    title: "제2회 디지털산업혁신 빅데이터 플랫폼 금융 아이디어 경진대회",
    date: "2022-11-30",
    rank: "최우수상"
  },
  {
    title: "제8회 DB GAPS 투자대회",
    date: "2022-11-28",
    rank: "금융동아리상"
  },
  {
    title: "제8회 DB GAPS 투자대회",
    date: "2022-11-28",
    rank: "운용철학상"
  },
  {
    title: "2022년 데이터안심구역 활용경진대회",
    date: "2022-11-01",
    rank: "대상(장관상)"
  },
  {
    title: "2022 하나 디지털 파워온 프로젝트",
    date: "2022-10-27",
    rank: "최종선발"
  },
  {
    title: "2022 FSI Data Challenge (금융데이터 경진대회)",
    date: "2022-10-13",
    rank: "신한은행장상"
  },
  {
    title: "제4회 KB Future Finance A.I. Challenge",
    date: "2022-08-31",
    rank: "우수상"
  },
  {
    title: "SK증권 DT 아이디어 공모전",
    date: "2022-08-26",
    rank: "우수상"
  },
  {
    title: "2022년 문화·관광 빅데이터 분석대회",
    date: "2022-08-25",
    rank: "우수상(신한카드 우수상)"
  },
  {
    title: "제30회 중소벤처기업 정책 아이디어 공모전",
    date: "2022-08-04",
    rank: "최우수상"
  },
  {
    title: "제30회 중소벤처기업 정책 아이디어 공모전",
    date: "2022-08-04",
    rank: "우수상"
  },
  {
    title: "제74회 한국경제신문 TESAT 동아리대항전",
    date: "2022-06-03",
    rank: "최우수상"
  },
  {
    title: "KB증권 디지털 Idea Market 공모전",
    date: "2022-05-23",
    rank: "장려상"
  },
  {
    title: "제12회 DB 금융경제 공모전",
    date: "2022-05-06",
    rank: "입선"
  },
  {
    title: "제12회 DB 금융경제 공모전",
    date: "2022-05-06",
    rank: "가작"
  },
  {
    title: "제12회 DB 금융경제 공모전",
    date: "2022-05-06",
    rank: "장려상"
  },
  {
    title: "공공기관 혁신 아이디어 공모전",
    date: "2021-12-07",
    rank: "우수상"
  },
  {
    title: "제70회 한국경제신문 TESAT 동아리대항전",
    date: "2021-12-03",
    rank: "최우수상"
  },
  {
    title: "제16회 금융감독원 금융공모전",
    date: "2021-11-05",
    rank: "최우수상"
  },
  {
    title: "제29회 중소벤처기업 정책 아이디어 공모전",
    date: "2021-10-19",
    rank: "우수상"
  },
  {
    title: "제29회 중소벤처기업 정책 아이디어 공모전",
    date: "2021-10-19",
    rank: "우수상"
  },
  {
    title: "제29회 중소벤처기업 정책 아이디어 공모전",
    date: "2021-10-19",
    rank: "우수상"
  },
  {
    title: "제29회 중소벤처기업 정책 아이디어 공모전",
    date: "2021-10-19",
    rank: "장려상"
  },
  {
    title: "제68회 한국경제신문 TESAT 동아리대항전",
    date: "2021-08-25",
    rank: "최우수상"
  },
  {
    title: "제66회 한국경제신문 TESAT 동아리대항전",
    date: "2021-05-28",
    rank: "최우수상"
  },
  {
    title: "우리은행 온택트 해커톤",
    date: "2021-05-08",
    rank: "장려상"
  },
  {
    title: "제11회 DB 금융경제 공모전",
    date: "2021-04-27",
    rank: "가작"
  },
  {
    title: "제16회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2021-02-18",
    rank: "장려상"
  },
  {
    title: "제62회 한국경제신문 TESAT 동아리대항전",
    date: "2020-12-11",
    rank: "최우수상"
  },
  {
    title: "제28회 중소벤처기업 정책 아이디어 공모전",
    date: "2020-10-08",
    rank: "장려상"
  },
  {
    title: "제60회 한국경제신문 TESAT 동아리대항전",
    date: "2020-09-03",
    rank: "대상"
  },
  {
    title: "제10회 DB 금융경제 공모전",
    date: "2020-05-14",
    rank: "가작"
  },
  {
    title: "제58회 한국경제신문 TESAT 동아리대항전",
    date: "2020-02-27",
    rank: "최우수상"
  },
  {
    title: "제5회 DB GAPS 투자대회",
    date: "2019-11-24",
    rank: "운용철학우수상"
  },
  {
    title: "제5회 아카데미쿠스 연합학술제",
    date: "2019-11-21",
    rank: "최우수상"
  },
  {
    title: "제14회 금융감독원 금융공모전",
    date: "2019-10-31",
    rank: "우수상"
  },
  {
    title: "제27회 중소벤처기업 정책 아이디어 공모전",
    date: "2019-06-17",
    rank: "장려상"
  },
  {
    title: "제54회 한국경제신문 TESAT 동아리대항전",
    date: "2019-05-30",
    rank: "우수상"
  },
  {
    title: "제9회 DB 금융제안 공모전",
    date: "2019-05-17",
    rank: "장려상"
  },
  {
    title: "제9회 DB 금융제안 공모전",
    date: "2019-05-17",
    rank: "가작"
  },
  {
    title: "제52회 한국경제신문 TESAT 동아리대항전",
    date: "2019-02-28",
    rank: "최우수상"
  },
  {
    title: "제14회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2019-02-14",
    rank: "장려상"
  },
  {
    title: "제51회 한국경제신문 TESAT 동아리대항전",
    date: "2018-11-29",
    rank: "우수상"
  },
  {
    title: "경제활동역량 UCC 콘테스트",
    date: "2018-11-28",
    rank: "우수상"
  },
  {
    title: "제7회 한국수출입은행 대학(원)생 국가개발경시대회",
    date: "2018-11-05",
    rank: "최우수상"
  },
  {
    title: "제7회 한국수출입은행 대학(원)생 국가개발경시대회",
    date: "2018-11-05",
    rank: "장려상"
  },
  {
    title: "제26회 중소벤처기업 정책 아이디어 공모전",
    date: "2018-07-06",
    rank: "최우수상"
  },
  {
    title: "제26회 중소벤처기업 정책 아이디어 공모전",
    date: "2018-07-06",
    rank: "장려상"
  },
  {
    title: "키움증권 UCC 공모전",
    date: "2018-06-04",
    rank: "우수상"
  },
  {
    title: "제8회 DB 금융제안 공모전",
    date: "2018-05-02",
    rank: "가작"
  },
  {
    title: "제25회 중소기업 정책 아이디어 공모전",
    date: "2017-11-30",
    rank: "대상"
  },
  {
    title: "제2회 한화생명 대학생 보험 아이디어 공모전",
    date: "2017-03-24",
    rank: "장려상"
  },
  {
    title: "2016 FTA 활용 우수사례 경진대회",
    date: "2016-12-25",
    rank: "최우수상"
  },
  {
    title: "제24회 중소기업 정책 아이디어 공모전",
    date: "2016-11-08",
    rank: "최우수상"
  },
  {
    title: "2016 IBK 창조금융 아이디어 공모전",
    date: "2016-10-24",
    rank: "우수상"
  },
  {
    title: "제3회 한국주택금융공사 대학(원)생 논문경진대회",
    date: "2016-10-05",
    rank: "우수상"
  },
  {
    title: "제5회 머니투데이 금융페스티벌 공모전",
    date: "2016-08-31",
    rank: "최우수상"
  },
  {
    title: "한국수출입은행 창립 40주년 연구논문 경시대회",
    date: "2016-06-22",
    rank: "최우수상"
  },
  {
    title: "제11회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2016-02-21",
    rank: "우수상"
  },
  {
    title: "제11회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2016-02-21",
    rank: "장려상"
  },
  {
    title: "제4회 한국수출입은행 대학(원)생 국가개발경시대회",
    date: "2015-11-20",
    rank: "우수상"
  },
  {
    title: "제17회 대학생 키움 모의투자대회",
    date: "2015-08-01",
    rank: "입상"
  },
  {
    title: "제10회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2015-02-01",
    rank: "입상"
  },
  {
    title: "제10회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2015-02-01",
    rank: "입상"
  },
  {
    title: "제5회 동부금융 대학생 금융논문 공모전",
    date: "2014-10-30",
    rank: "우수상"
  },
  {
    title: "제5회 동부금융 대학생 금융논문 공모전",
    date: "2014-10-30",
    rank: "장려상"
  },
  {
    title: "제9회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2014-02-01",
    rank: "장려상"
  },
  {
    title: "제9회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2014-02-01",
    rank: "이코노미스트상"
  },
  {
    title: "제2회 한국기업평가 대학생 신용평가 논문 공모전",
    date: "2013-10-01",
    rank: "장려상"
  },
  {
    title: "제8회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2013-02-01",
    rank: "장려상"
  },
  {
    title: "제3회 동부금융 대학생 금융논문 공모전",
    date: "2012-10-01",
    rank: "장려상"
  },
  {
    title: "제1회 한국기업평가 대학생 신용평가 논문 공모전",
    date: "2012-07-01",
    rank: "장려상"
  },
  {
    title: "제1회 한국농수산식품 유통공사 논문공모전",
    date: "2012-06-01",
    rank: "장려상"
  },
  {
    title: "제7회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2012-02-01",
    rank: "장려상"
  },
  {
    title: "2011 한국은행 통화정책 경시대회",
    date: "2011-08-01",
    rank: "장려상"
  },
  {
    title: "제5회 동부화재 보험상품개발 아이디어 공모전",
    date: "2011-05-01",
    rank: "장려상"
  },
  {
    title: "제4회 한국금융연구원 대학(원)생 금융논문 공모전",
    date: "2011-05-01",
    rank: "장려상"
  },
  {
    title: "제6회 한국거래소(KRX) 증권파생상품 경시대회",
    date: "2011-02-01",
    rank: "장려상"
  },
  {
    title: "제1회 생명보험협회 생명보험 논문 공모전",
    date: "2011-01-01",
    rank: "대상"
  }
];

export default function Competition() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,  // 10%만 보여도 애니메이션 시작
        rootMargin: '50px'  // 약간 일찍 시작
      }
    );

    // 모든 award 카드에 observer 적용
    document.querySelectorAll(`.${styles.awardCard}`).forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={playfairDisplay.variable}>
      <Head>
        <title>Award List | HIF</title>
        <meta property="og:title" content="Award List | HIF" />
        <meta name="description" content="HIF Award List page" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap"
        />
      </Head>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>
          Awards
        </h1>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbText}>ACTIVITIES</span>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Awards</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Awards List</h2>

          <p className={styles.description}>
            {isMobile ? (
              <>
                금융연구회는 2011년부터 현재까지<br />
                <strong>105여 건의 수상실적</strong>을 보유하고 있습니다.<br />
                금융, 경제, 데이터 분석 등 다양한 분야의<br />공모전에서 우수한 성과를
                거두며<br /><strong>누적 상금 206,500,000원</strong>을 수상하였고,<br />
                <strong>대한민국 최고의 금융동아리로서의 위상</strong>을<br />보여주고 있습니다.
              </>
            ) : (
              <>
                금융연구회는 <strong>2011년부터 현재까지 105여 건의 수상실적</strong>을 보유하고 있습니다.<br />
                금융, 경제, 데이터 분석 등 다양한 분야의 공모전에서 우수한 성과를 거두며<br />
                <strong>누적 상금 206,500,000원</strong>을 수상하였고,<br />
                <strong>대한민국 최고의 금융동아리로서의 위상</strong>을 보여주고 있습니다.
              </>
            )}
          </p>
          
          <div className={styles.timeline}>
            {/* 연도별로 그룹화하여 표시 */}
            {[2025,2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011].map(year => (
              <div key={year} className={styles.yearSection}>
                <div className={styles.yearMarker}>{year}</div>
                <div className={styles.awardsList}>
                  {awards
                    .filter(award => new Date(award.date).getFullYear() === year)
                    .map((award, index) => (
                      <div key={index} className={styles.awardCard}>
                        <div className={styles.awardDate}>
                          {new Date(award.date).toLocaleDateString('ko-KR', {
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className={styles.awardDetails}>
                          <h3>{award.title}</h3>
                          <span className={styles.awardRank}>{award.rank}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}