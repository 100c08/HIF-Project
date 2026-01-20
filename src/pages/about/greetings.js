import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/about/Greetings.module.css';
import localFont from "next/font/local";
import Image from 'next/image';

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

const imkwontaek = localFont({
  src: "../../pages/fonts/KCCImkwontaek.woff2",
  variable: "--font-imkwontaek"
});

export default function Greetings() {
    return (
      <div className={`${playfairDisplay.variable} ${imkwontaek.variable}`}>
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
            <div className={styles.greetingWrapper}>
              <div className={styles.profileCard}>
                <Image
                  src="/professor.jpg"
                  alt="Professor portrait"
                  width={240}
                  height={320}
                  className={styles.profileImage}
                />
                <div className={styles.profileText}>
                  <p>한국외대 경영대학</p>
                  <p>오준호 교수</p>
                </div>
              </div>
              <div className={styles.greetingPaper}>
                <p className={styles.greetingTitle}>한국외국어대학교 학생 여러분께</p>
                <p>안녕하십니까?</p>
                <p>
                  금융연구회는 2010년 박진우 교수님과 여러 학과 학생들의 뜻이 모여 설립된 연구 학회입니다.
                  설립 이래 지금까지 매 학기마다 학과를 가리지 않고 금융 및 경제 분야 연구에 열정이 있는 우수한 학생들을 선발하였으며,
                  수많은 학회 수료생들을 배출하여 왔습니다. 이제는 경영학과 내 금융동아리에서 굳건한 위상을 가지고 있으며,
                  학회의 위상을 현 위치까지 끌어올리기 위해 혼신의 노력을 기울여 주신 역대 회장단, 임원진, 그리고 회원 여러분께
                  다시 한번 깊은 감사를 드립니다.
                </p>
                <p>
                  금융연구회는 ‘기업가치평가 및 가치투자’를 핵심 주제로 매주 목요일 정기 세미나를 열고,
                  기업가치와 거시경제 분석은 물론 데이터사이언스와 AI를 결합한 프로젝트와 최신 동향 스터디를 체계적으로 수행합니다.
                  이를 바탕으로 CFA Institute, 금융감독원, 한국거래소, DB금융 등 여러 기관 주최 대회와 공모전에서
                  누적 100회를 상회하는 수상을 기록했으며, 국내 증권사와 자산운용사 등 금융기관 인턴십에서도 우수한 성과를 이어가고 있습니다.
                </p>
                <p>
                  금융연구회는 연구만 하는 곳이 아닙니다. 회식과 MT, 선배님들과의 멘토링, 수료식 이벤트 등 다양한 교류를 통해
                  따뜻한 우애와 활발한 소통을 장려합니다. 편안한 분위기 속에서 연구할 때는 몰입하고, 함께할 때는 즐겁게 어울리며
                  보람차고 기억에 남는 대학 생활을 만들어 갑니다.
                </p>
                <p>
                  기술의 발전으로 많은 것이 바뀌고 있지만, 변하지 않는 본질은 있습니다. 진리를 향한 탐구의 열정,
                  그리고 사람과 함께 성장하는 태도입니다. 금융연구회는 이러한 본질적인 학습과 성장을 연구 활동을 통해 체득할 수 있는 공간입니다.
                </p>
                <p>
                  여러분의 도전과 성장을 진심으로 응원합니다. 금융과 경제, 그리고 사람을 향한 열정이 있는 분들의 참여를 기다립니다.
                </p>
                <p>감사합니다.</p>
                <p className={styles.signature}>오준호 드림</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
