import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Members.module.css';
import localFont from "next/font/local";


const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

const palatino = localFont({
  src: "./fonts/palatino-regular.woff",
  variable: "--font-palatino"
});

const generations = [
  "16th Generation", "15th Generation", "14th Generation", "13th Generation", 
  "12th Generation", "11th Generation", "10th Generation",
  "9th Generation", "8th Generation", "7th Generation", 
  "6th Generation", "5th Generation", "4th Generation", 
  "3rd Generation", "2nd Generation", "1st Generation"
];

const membersData = {
  "16th Generation": [
    { name: "Kim Byung-jun", major: "Business Administration" },
    { name: "Kim Yong-un", major: "Economics" },
    { name: "Roh Ji-hoon", major: "Language & Trade" },
    { name: "Park Seon-yang", major: "Business Administration" },
    { name: "Seo Ji-won", major: "Language & Trade" },
    { name: "Sung Ji-won", major: "French Language" },
    { name: "Son Hyeong-ju", major: "Business Administration" },
    { name: "Lee Eun-jeong", major: "International Economics and Law" },
    { name: "Chang Seo-hyun", major: "English Literature and Culture" },
    { name: "Joo Seong-pyo", major: "German" },
    { name: "Hyeon Chae-yeon", major: "Business Administration" }
  ],
  "15th Generation": [
    { name: "Kang Ji-won", major: "Language & Trade" },
    { name: "Kwon Do-yoon", major: "Dutch" },
    { name: "Kim Min-jeong", major: "Business Administration" },
    { name: "Kim Bum-jin", major: "Business Administration" },
    { name: "Park Min-ji", major: "Italian" },
    { name: "Park Ha-eun", major: "Malay-Indonesian" },
    { name: "Um Deok-sang", major: "Chinese Education" },
    { name: "Yun Mi-reu", major: "Business Administration" },
    { name: "Lee Geon-ho", major: "Business Administration" },
    { name: "Lee Young-gi", major: "International Economics and Law" },
    { name: "Kim Yeo-rim", major: "Economics" },
    { name: "Park Kang-in", major: "English Literature and Language Technology" },
    { name: "Seo Ji-woo", major: "Language & Trade" },
    { name: "Shin Hae-su", major: "Media & Communication" },
    { name: "Oh Sang-jun", major: "Economics" },
    { name: "Oh Soo-been", major: "Economics" },
    { name: "Lee Su-hyeon", major: "Business Administration" },
    { name: "In Seo-yeon", major: "Chinese Foreign Affairs and Commerce" },
    { name: "Jung Myung-jo", major: "International Economics and Law" },
    { name: "Han Min-seo", major: "International Economics and Law" },
    { name: "Han Se-bin", major: "Italian" },
    { name: "Hwang Zi-won", major: "English for International Conferences and Communication" }
  ],
  "14th Generation": [
    { name: "Park Jae-hyeon", major: "Integrated Japanese Studies" },
    { name: "Koo Yoon-mo", major: "Language & Trade" },
    { name: "Baek Jong-hyeon", major: "Arabic" },
    { name: "Shin Seong-jin", major: "Business Administration" },
    { name: "Park Ji-hoon", major: "Business Administration" },
    { name: "Park Seon-hong", major: "International Economics and Law" },
    { name: "Ko Da-eun", major: "Economics" },
    { name: "Kim Na-yeon", major: "Economics" },
    { name: "Kim Seo-yeon", major: "Political Science and Diplomacy" },
    { name: "Lee Jeong-eun", major: "Business Administration" },
    { name: "Lee Ji-soo", major: "Spanish" },
    { name: "Lee Su-jin", major: "English for International Conferences and Communication" },
    { name: "Kim Ryun-woo", major: "Integrated Japanese Studies" },
    { name: "Bang Chang-hyeon", major: "International Economics and Law" },
    { name: "Bae Da-hyun", major: "Business Administration" },
    { name: "Song Chae-won", major: "Thai" },
    { name: "Shin Do-hyun", major: "Business Administration" },
    { name: "An Sang-min", major: "Business Administration" },
    { name: "Yu Seung-ri", major: "Russian" },
    { name: "Lee Young-seop", major: "Business Administration" },
    { name: "Jeong Da-na", major: "International Economics and Law" },
    { name: "Choi Eun-bin", major: "French Language" }
  ],
  "13th Generation": [
    { name: "Kong Do-youn", major: "English Linguistics" },
    { name: "Kwon Tae-hoon", major: "Russian" },
    { name: "Kim Dong-hyun", major: "Business Administration" },
    { name: "Song Young-seo", major: "Chinese Education" },
    { name: "Shin Ji-hyeon", major: "German" },
    { name: "Shin Hyun-wook", major: "Business Administration" },
    { name: "Yoo Chae-eun", major: "English Literature and Language Technology" },
    { name: "Yoon Woo-jin", major: "Hindi" },
    { name: "Jang Se-un", major: "Dutch" },
    { name: "Jin Byeong-hyeon", major: "Economics" },
    { name: "Choi Yun-seo", major: "Language & Trade" },
    { name: "Han Yu-kyeong", major: "Economics" },
    { name: "Kim Hyun-il", major: "Economics" },
    { name: "Park Gi-won", major: "English for International Conferences and Communication" },
    { name: "Song Geun-su", major: "Business Administration" },
    { name: "Yang Min-seok", major: "Thai" },
    { name: "Yoon Young-hyeon", major: "Economics" },
    { name: "Lee Geon-hui", major: "Economics" },
    { name: "Lee Min-gyeong", major: "English Literature and Culture" },
    { name: "Lee Ye-ji", major: "Economics" },
    { name: "Jeong Hyeon-ju", major: "English Literature and Language Technology" },
    { name: "Choi Ju-yeon", major: "Turkish and Azerbaijani" }
  ],
  "12th Generation": [
    { name: "Kwon Keun-young", major: "Chinese Foreign Affairs and Commerce" },
    { name: "Kim Gyeong-mi", major: "Business Administration" },
    { name: "Dong Jin-woo", major: "Business Administration" },
    { name: "Min Hui-won", major: "Business Administration" },
    { name: "Park Seo-bin", major: "Hindi" },
    { name: "Park Tae-geon", major: "Business Administration" },
    { name: "Yang Na-na", major: "German" },
    { name: "Lee Seong-beom", major: "Business Administration" },
    { name: "Lee Hong-woo", major: "English Linguistics" },
    { name: "Lim Ha-jin", major: "French Language" },
    { name: "Jang Ha-kyung", major: "Economics" },
    { name: "Ha Seon-woo", major: "German" },
    { name: "Kang Ye-hyun", major: "International Economics and Law" },
    { name: "Kim Soo-yeon", major: "English Literature and Language Technology" },
    { name: "Bae Jong-sung", major: "Thai" },
    { name: "Shin Jeong-hyeon", major: "International Economics and Law" },
    { name: "Lim Ji-youn", major: "Business Administration" },
    { name: "Oh Seung-hyun", major: "Economics" },
    { name: "Jeong Jae-geun", major: "Business Administration" },
    { name: "Cho Seo-hyeon", major: "Japanese Language, Literature and Culture" },
    { name: "Cho Ah-yeong", major: "Chinese Foreign Affairs and Commerce" }
  ],
  "11th Generation": [
    { name: "Kim Kyu-won", major: "Economics" },
    { name: "Kim Min-su", major: "German" },
    { name: "Kim Jang-mi", major: "Business Administration" },
    { name: "Kim Hye-ji", major: "Business Administration" },
    { name: "Park Young-chan", major: "Business Administration" },
    { name: "Yoo Jin", major: "Arabic" },
    { name: "Ryu Hye-seung", major: "Vietnamese" },
    { name: "Lee Won-gyu", major: "Chinese Language, Literature and Culture" },
    { name: "Lee Jeong-myeong", major: "Public Administration" },
    { name: "Lee Ha-eun", major: "International Economics and Law" },
    { name: "Cho Wan-kyu", major: "German Education" },
    { name: "Kwon So-yeon", major: "Business Administration" },
    { name: "Kim Tae-sub", major: "Thai" },
    { name: "Song Ui-hyeon", major: "Business Administration" },
    { name: "Lee Su-hong", major: "Economics" },
    { name: "Lim Ji-hye", major: "Chinese Foreign Affairs and Commerce" },
    { name: "Jeon Hee-joo", major: "Mongolian" },
    { name: "Jin Chae-yeon", major: "Thai" },
    { name: "Cheon Seo-hui", major: "English Linguistics" }
  ],
  "10th Generation": [
    { name: "Bae Ji-won", major: "Economics" },
    { name: "Kim Ui-jin", major: "Integrated Japanese Studies" },
    { name: "Kim Ju-ho", major: "Media & Communication" },
    { name: "Son Jeong-bae", major: "Business Administration" },
    { name: "Yang Min-seok", major: "Economics" },
    { name: "Um Hye-jin", major: "Vietnamese" },
    { name: "Oh Su-yeon", major: "Economics" },
    { name: "Lee Ye-jin", major: "Chinese Language, Literature and Culture" },
    { name: "Jeon Min-ji", major: "Language & Trade" },
    { name: "Lee Ha-rin", major: "Chinese Language, Literature and Culture" },
    { name: "Joo Hyun-seok", major: "Business Administration" },
    { name: "Kim Ki-jun", major: "Italian" },
    { name: "Park Seung-gyun", major: "Vietnamese" },
    { name: "Son Jin-kyu", major: "Scandinavian Languages" },
    { name: "Oh Se-min", major: "Malay-Indonesian" },
    { name: "Lee Min-kyung", major: "Portuguese" },
    { name: "Lee Yeon-su", major: "Dutch" },
    { name: "Choi Young-jin", major: "International Studies" },
    { name: "Han Kyu-ri", major: "Turkish and Azerbaijani" }
  ],
  "9th Generation": [
    { name: "Park Ji-gan", major: "English Linguistics" },
    { name: "Kim Hye-min", major: "Public Administration" },
    { name: "Kim Jae-yoon", major: "English Linguistics" },
    { name: "Jung Hyun-sin", major: "German" },
    { name: "Myung Jun-gu", major: "Business Administration" },
    { name: "Kim Chan-jong", major: "Economics" },
    { name: "Kim Yong-su", major: "German Education" },
    { name: "Han Ji-yeon", major: "French" },
    { name: "Chun Su-hwan", major: "English Literature" },
    { name: "Hwang Chi-yeon", major: "Business Administration" },
    { name: "Park Jee-young", major: "German" },
    { name: "Woo Yu-jeong", major: "Dutch" },
    { name: "Kim Hye-yeong", major: "French Language" },
    { name: "Lee Won-Bok", major: "Business Administration" },
    { name: "Cho Ye-jin", major: "Mongolian" },
    { name: "Moon Seung-hwan", major: "Dutch" }
  ],
  "8th Generation": [
    { name: "Kim Do-yun", major: "English Linguistics" },
    { name: "Choi Yun-young", major: "International Economics and Law" },
    { name: "Kim Ha-rim", major: "German" },
    { name: "Jung Yun-jip", major: "Business Administration" },
    { name: "Jung Hee-ji", major: "Spanish" },
    { name: "Ji So-hee", major: "Japanese Language, Literature and Culture" },
    { name: "Kim Jung-su", major: "English Linguistics" },
    { name: "Min Se-hong", major: "Business Administration" },
    { name: "Yoon Tae-won", major: "Business Administration" },
    { name: "Shin Hyo-yeub", major: "Business Administration" },
    { name: "Cha Seok-jin", major: "English Interpretation and Translation" },
    { name: "Park Ki-young", major: "Business Administration" },
    { name: "Ye Bo-keun", major: "Economics" }
  ],
  "7th Generation": [
    { name: "Lee Deok-gyu", major: "German" },
    { name: "Lee Ju-yeon", major: "Economics" },
    { name: "Bae Hyun-ju", major: "Economics" },
    { name: "Noh Ji-won", major: "Business Administration" },
    { name: "Shim In-bo", major: "English Literature" },
    { name: "Kwon Na-yun", major: "Chinese Language, Literature and Culture" },
    { name: "Lee Dong-hyun", major: "Economics" },
    { name: "Kim Ji-min", major: "German" },
    { name: "Park Chan-hyuk", major: "Economics" },
    { name: "Shin Ji-hwan", major: "Economics" },
    { name: "Lee Woo-young", major: "Business Administration" },
    { name: "Jung Eun-ju", major: "English Linguistics" },
    { name: "Jo Yong-sang", major: "Economics" }
  ],
  "6th Generation": [
    { name: "Lee Jun-su", major: "Malay-Indonesian" },
    { name: "Yu Gwi-hyun", major: "Economics" },
    { name: "Park Shin-young", major: "Economics" },
    { name: "Kim Hoe-seung", major: "Economics" },
    { name: "Na Seon-young", major: "German" },
    { name: "Baek Seong-jin", major: "Business Administration" },
    { name: "Lee Hyun-woo", major: "Economics" },
    { name: "Im So-yeon", major: "English Interpretation and Translation" },
    { name: "Cheon Ji-hun", major: "English Linguistics" }
  ],
  "5th Generation": [
    { name: "Hwang Jun-hyung", major: "Business Administration" },
    { name: "Jo In-su", major: "Business Administration" },
    { name: "Gu Hyo-jung", major: "Business Administration" },
    { name: "Choi Ji-young", major: "Economics" },
    { name: "Na Young", major: "Economics" },
    { name: "Noh Ji-min", major: "Economics" },
    { name: "Park Jae-min", major: "Economics" },
    { name: "Lee Dong-hwi", major: "Business Administration" }
  ],
  "4th Generation": [
    { name: "Jeon Byung-ha", major: "Japanese" },
    { name: "Jung Bong-hyun", major: "Business Administration" },
    { name: "Kim Bo-ra", major: "Economics" },
    { name: "Kim Jin-sung", major: "Economics" },
    { name: "Park Kyung-shin", major: "Interdisciplinary Studies in Social Science" },
    { name: "Seok Eun-jin", major: "Business Administration" },
    { name: "Lee Sang-chul", major: "Vietnamese" },
    { name: "Lee Jin-young", major: "Business Administration" },
    { name: "Jang Ji-ye", major: "Business Administration" },
    { name: "Lee Young-rae", major: "Business Administration" },
    { name: "Choi Min-hye", major: "Korean Education" },
    { name: "Park Seung-oh", major: "Economics" }
  ],
  "3rd Generation": [
    { name: "Kim Hee-gyeom", major: "Business Administration" },
    { name: "Kim Eun-jung", major: "English Interpretation and Translation" },
    { name: "Kim Jong-yun", major: "Economics" },
    { name: "Min Ji-young", major: "Economics" },
    { name: "Park Jun-young", major: "Business Administration" },
    { name: "Lee Seo-bin", major: "Thai" },
    { name: "Jeon Ju-hwan", major: "English Linguistics" },
    { name: "Han Seung-ah", major: "Economics" },
    { name: "Han Yu-ra", major: "Hindi" }
  ],
  "2nd Generation": [
    { name: "Lee Tae-hwan", major: "Arabic" },
    { name: "Ma Seung-hyun", major: "Business Administration" },
    { name: "Park Kwang-yeom", major: "German" },
    { name: "Jung Il-kwon", major: "Economics" }
  ],
  "1st Generation": [
    { name: "Yu Seong-woo", major: "Japanese" },
    { name: "Choi Woo-seok", major: "English Linguistics" },
    { name: "Im Seong-won", major: "Business Administration" },
    { name: "Kwak Yong-jung", major: "Business Administration" },
    { name: "Moon Han-gil", major: "Law" },
    { name: "Baek Seung-hun", major: "Japanese" },
    { name: "Yu Hye-yun", major: "German" }
  ]
};



export default function Members() {
    const [selectedGen, setSelectedGen] = useState(null);
  
    const scrollToGeneration = (gen) => {
      setSelectedGen(gen);
      const element = document.getElementById(gen);
      element?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div className={`${playfairDisplay.variable} ${palatino.variable}`}>
        <Head>
          <title>Members | HIF</title>
          <meta property="og:title" content="Members | HIF" />
          <meta name="description" content="Members of HIF" />
        </Head>
  
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <h1 className={styles.heroTitle}>
            Members
          </h1>
          {/* Breadcrumb Navigation */}
          <div className={styles.breadcrumb}>
            <span className={styles.current}>Members</span>
          </div>
        </div>
  
        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.contentSection}>
        {/* 기수 선택 버튼들 */}
        <div className={styles.generationButtons}>
          {generations.map((gen) => (
            <button
              key={gen}
              className={`${styles.genButton} ${selectedGen === gen ? styles.selected : ''}`}
              onClick={() => scrollToGeneration(gen)}
            >
              {gen}
            </button>
          ))}
        </div>
  
        {/* 멤버 리스트 */}
        <div className={styles.membersList}>
          {generations.map((gen) => (
            <section key={gen} id={gen} className={styles.generationSection}>
              <h2 className={styles.generationTitle}>{gen}</h2>
              <div className={styles.membersGrid}>
                {membersData[gen]?.map((member, index) => (
                  <div key={index} className={styles.memberCard}>
                    <h3>{member.name}</h3>
                    <p>{member.major}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
            </div>
          </div>
        </div>
      </div>
    );
  }