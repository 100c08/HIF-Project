import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Members.module.css';
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

const generations = [
  "15th Generation", "14th Generation", "13th Generation", 
  "12th Generation", "11th Generation", "10th Generation",
  "9th Generation", "8th Generation", "7th Generation", 
  "6th Generation", "5th Generation", "4th Generation", 
  "3rd Generation", "2nd Generation", "1st Generation"
];

const membersData = {
  "15th Generation": [
    { name: "Kang Ji-won", major: "LT" },
    { name: "Kwon Do-yun", major: "Dutch" },
    { name: "Kim Min-jeong", major: "Business Administration" },
    { name: "Kim Beom-jin", major: "Business Administration" },
    { name: "Park Min-ji", major: "Italian" },
    { name: "Park Ha-eun", major: "Malay-Indonesian" },
    { name: "Eom Deok-sang", major: "Chinese Language Education" },
    { name: "Yoon Mi-reu", major: "Business Administration" },
    { name: "Lee Geon-ho", major: "Business Administration" },
    { name: "Lee Young-gi", major: "International Economics & Law" },
    { name: "Kim Yeo-rim", major: "Economics" },
    { name: "Park Kang-in", major: "ELLT" },
    { name: "Seo Ji-woo", major: "LT" },
    { name: "Shin Hae-su", major: "Advertising/PR/Branding" },
    { name: "Oh Sang-jun", major: "Economics" },
    { name: "Oh Su-bin", major: "Economics" },
    { name: "Lee Su-hyeon", major: "Business Administration" },
    { name: "In Seo-yeon", major: "Chinese Foreign Affairs & Trade" },
    { name: "Jeong Myeong-jo", major: "International Economics & Law" },
    { name: "Han Min-seo", major: "International Economics & Law" },
    { name: "Han Se-bin", major: "Italian" },
    { name: "Hwang Ji-won", major: "EICC" }
  ],
  "14th Generation": [
    { name: "Park Jae-hyeon", major: "Japanese" },
    { name: "Gu Yun-mo", major: "LT" },
    { name: "Baek Jong-hyeon", major: "Arabic" },
    { name: "Shin Seong-jin", major: "Business Administration" },
    { name: "Park Ji-hoon", major: "Business Administration" },
    { name: "Park Seon-hong", major: "International Economics & Law" },
    { name: "Go Da-eun", major: "Economics" },
    { name: "Kim Na-yeon", major: "Economics" },
    { name: "Kim Seo-yeon", major: "Political Science & Int'l Relations" },
    { name: "Lee Jeong-eun", major: "Business Administration" },
    { name: "Lee Ji-su", major: "Spanish" },
    { name: "Lee Su-jin", major: "EICC" },
    { name: "Kim Ryun-woo", major: "Japanese-Convergent Studies" },
    { name: "Bang Chang-hyeon", major: "International Economics & Law" },
    { name: "Bae Da-hyeon", major: "Business Administration" },
    { name: "Song Chae-won", major: "Thai" },
    { name: "Shin Do-hyeon", major: "Business Administration" },
    { name: "An Sang-min", major: "Business Administration" },
    { name: "Yoo Seung-ri", major: "Russian" },
    { name: "Lee Young-seop", major: "Business Administration" },
    { name: "Jeong Da-na", major: "International Economics & Law" },
    { name: "Choi Eun-bin", major: "French Language" }
  ],
  "13th Generation": [
    { name: "Gong Do-yeon", major: "English" },
    { name: "Kwon Tae-hun", major: "Russian" },
    { name: "Kim Dong-hyeon", major: "Business Administration" },
    { name: "Song Young-seo", major: "Chinese Language Education" },
    { name: "Shin Ji-hyeon", major: "German" },
    { name: "Shin Hyeon-uk", major: "Business Administration" },
    { name: "Yoo Chae-eun", major: "ELLT" },
    { name: "Yoon Woo-jin", major: "Indian Studies" },
    { name: "Jang Se-un", major: "Dutch" },
    { name: "Jin Byeong-hyeon", major: "Economics" },
    { name: "Choi Yun-seo", major: "LT" },
    { name: "Han Yu-gyeong", major: "Economics" },
    { name: "Kim Hyeon-il", major: "Economics" },
    { name: "Park Gi-won", major: "EICC" },
    { name: "Song Geun-su", major: "Business Administration" },
    { name: "Yang Min-seok", major: "Thai" },
    { name: "Yoon Young-hyeon", major: "Economics" },
    { name: "Lee Geon-hui", major: "Economics" },
    { name: "Lee Min-gyeong", major: "English & American Literature/Culture" },
    { name: "Lee Ye-ji", major: "Economics" },
    { name: "Jeong Hyeon-ju", major: "ELLT" },
    { name: "Choi Ju-yeon", major: "Turkish & Azerbaijani" }
  ],
  "12th Generation": [
    { name: "Kwon Geun-young", major: "Chinese Foreign Affairs & Trade" },
    { name: "Kim Gyeong-mi", major: "Business Administration" },
    { name: "Dong Jin-woo", major: "Business Administration" },
    { name: "Min Hee-won", major: "Business Administration" },
    { name: "Park Seo-bin", major: "Indian Studies" },
    { name: "Park Tae-geon", major: "Business Administration" },
    { name: "Yang Na-na", major: "German" },
    { name: "Lee Seong-beom", major: "Business Administration" },
    { name: "Lee Hong-woo", major: "English" },
    { name: "Im Ha-jin", major: "French Language" },
    { name: "Jang Ha-gyeong", major: "Economics" },
    { name: "Ha Seon-woo", major: "German" },
    { name: "Kang Ye-hyeon", major: "International Economics & Law" },
    { name: "Kim Su-yeon", major: "ELLT" },
    { name: "Bae Jong-seong", major: "Thai" },
    { name: "Shin Jeong-hyeon", major: "International Economics & Law" },
    { name: "Im Ji-yoon", major: "Business Administration" },
    { name: "Oh Seung-hyeon", major: "Economics" },
    { name: "Jeong Jae-geun", major: "Business Administration" },
    { name: "Jo Seo-hyeon", major: "Japanese Language & Culture" },
    { name: "Jo A-yeong", major: "Chinese Foreign Affairs & Trade" }
  ],
  "11th Generation": [
    { name: "Kim Gyu-won", major: "Economics" },
    { name: "Kim Min-su", major: "German" },
    { name: "Kim Jang-mi", major: "Business Administration" },
    { name: "Kim Hye-ji", major: "Business Administration" },
    { name: "Park Young-chan", major: "Business Administration" },
    { name: "Yu Jin", major: "Arabic" },
    { name: "Yu Hye-seung", major: "Vietnamese" },
    { name: "Lee Won-gyu", major: "Chinese Language & Culture" },
    { name: "Lee Jeong-myeong", major: "Public Administration" },
    { name: "Lee Ha-eun", major: "International Economics & Law" },
    { name: "Jo Wan-gyu", major: "German Education" },
    { name: "Kwon So-yeon", major: "Business Administration" },
    { name: "Kim Tae-seop", major: "Thai" },
    { name: "Song Ui-hyeon", major: "Business Administration" },
    { name: "Lee Su-hong", major: "Economics" },
    { name: "Im Ji-hye", major: "Chinese Foreign Affairs & Trade" },
    { name: "Jeon Hee-ju", major: "Mongolian" },
    { name: "Jin Chae-yeon", major: "Thai" },
    { name: "Cheon Seo-hee", major: "English" }
  ],
  "10th Generation": [
    { name: "Bae Ji-won", major: "Economics" },
    { name: "Kim Eui-jin", major: "Japanese-Convergent Studies" },
    { name: "Kim Ju-ho", major: "Advertising/PR/Branding" },
    { name: "Son Jeong-bae", major: "Business Administration" },
    { name: "Yang Min-seok", major: "Economics" },
    { name: "Eom Hye-jin", major: "Vietnamese" },
    { name: "Lee Ye-jin", major: "Chinese Language & Culture" },
    { name: "Jeon Min-ji", major: "LT" },
    { name: "Lee Ha-rin", major: "Chinese Language & Culture" },
    { name: "Joo Hyeon-seok", major: "Business Administration" },
    { name: "Kim Gi-jun", major: "Italian" },
    { name: "Park Seung-gyun", major: "Vietnamese" },
    { name: "Son Jin-gyu", major: "Scandinavian Languages" },
    { name: "Oh Se-min", major: "Malay–Indonesian" },
    { name: "Lee Min-gyeong", major: "Portuguese" },
    { name: "Lee Yeon-su", major: "Dutch" },
    { name: "Choi Young-jin", major: "International Studies" },
    { name: "Han Gyu-ri", major: "Turkish & Azerbaijani" }
  ],
  "9th Generation": [
    { name: "Park Ji-gan", major: "English" },
    { name: "Kim Hye-min", major: "Public Administration" },
    { name: "Kim Jae-yun", major: "English" },
    { name: "Jeong Hyeon-shin", major: "German" },
    { name: "Myeong Jun-gu", major: "Business Administration" },
    { name: "Kim Chan-jong", major: "Economics" },
    { name: "Kim Yong-su", major: "German Education" },
    { name: "Han Ji-yeon", major: "French" },
    { name: "Cheon Su-hwan", major: "English Literature" },
    { name: "Hwang Chi-yeon", major: "Spanish" },
    { name: "Park Ji-young", major: "German" },
    { name: "Woo Yu-jeong", major: "Dutch" },
    { name: "Kim Hye-young", major: "French Language" },
    { name: "Lee Won-bok", major: "Business Administration" },
    { name: "Jo Ye-jin", major: "Mongolian" },
    { name: "Moon Seung-hwan", major: "Dutch" }
  ],
  "8th Generation": [
    { name: "Kim Do-yun", major: "English" },
    { name: "Choi Yun-young", major: "International Economics & Law" },
    { name: "Kim Ha-rim", major: "German" },
    { name: "Jeong Yun-jip", major: "Business Administration" },
    { name: "Jeong Hee-ji", major: "Spanish" },
    { name: "Ji So-hui", major: "Japanese Language & Culture" },
    { name: "Kim Jeong-su", major: "English" },
    { name: "Min Se-hong", major: "Business Administration" },
    { name: "Yoon Tae-won", major: "Business Administration" },
    { name: "Shin Hyo-yeop", major: "Business Administration" },
    { name: "Cha Seok-jin", major: "English Interpretation & Translation" },
    { name: "Park Gi-young", major: "Business Administration" },
    { name: "Jo Eun-hyeong", major: "Vietnamese" },
    { name: "Ye Bo-geun", major: "Economics" }
  ],
  "7th Generation": [
    { name: "Lee Deok-gyu", major: "German" },
    { name: "Lee Ju-yeon", major: "Economics" },
    { name: "Bae Hyeon-ju", major: "Economics" },
    { name: "No Ji-won", major: "Business Administration" },
    { name: "Sim In-bo", major: "English Literature" },
    { name: "Kwon Na-yun", major: "Chinese Language & Culture" },
    { name: "Lee Dong-hyun", major: "Economics" },
    { name: "Kim Ji-min", major: "German" },
    { name: "Park Chan-hyeok", major: "Economics" },
    { name: "Shin Ji-hwan", major: "Economics" },
    { name: "Lee Woo-young", major: "Business Administration" },
    { name: "Jeong Eun-ju", major: "English" },
    { name: "Jo Yong-sang", major: "Economics" }
  ],
  "6th Generation": [
    { name: "Lee Jun-su", major: "Malay–Indonesian" },
    { name: "Yu Gwi-hyeon", major: "Economics" },
    { name: "Park Shin-young", major: "Economics" },
    { name: "Kim Hoe-seung", major: "Economics" },
    { name: "Na Seon-young", major: "German" },
    { name: "Baek Seong-jin", major: "Business Administration" },
    { name: "Lee Hyun-woo", major: "Economics" },
    { name: "Im So-yeon", major: "English Interpretation & Translation" },
    { name: "Cheon Ji-hoon", major: "English" }
  ],
  "5th Generation": [
    { name: "Hwang Jun-hyeong", major: "Business Administration" },
    { name: "Jo In-su", major: "Business Administration" },
    { name: "Goo Hyo-jeong", major: "Business Administration" },
    { name: "Choi Ji-yeong", major: "Economics" },
    { name: "Na Young", major: "Economics" },
    { name: "No Ji-min", major: "Economics" },
    { name: "Park Jae-min", major: "Economics" },
    { name: "Lee Dong-hwi", major: "Business Administration" }
  ],
  "4th Generation": [
    { name: "Jeon Byeong-ha", major: "Japanese" },
    { name: "Jeong Bong-hyeon", major: "Business Administration" },
    { name: "Kim Bo-ra", major: "Economics" },
    { name: "Kim Jin-seong", major: "Economics" },
    { name: "Park Gyeong-shin", major: "Division of General Studies" },
    { name: "Seok Eun-jin", major: "Business Administration" },
    { name: "Lee Sang-cheol", major: "Vietnamese" },
    { name: "Lee Jin-young", major: "Business Administration" },
    { name: "Jang Ji-ye", major: "Business Administration" },
    { name: "Lee Young-rae", major: "Business Administration" },
    { name: "Choi Min-hye", major: "Korean Language Education" },
    { name: "Park Seung-o", major: "Economics" }
  ],
  "3rd Generation": [
    { name: "Kim Hee-gyeom", major: "Business Administration" },
    { name: "Kim Eun-jeong", major: "English Interpretation & Translation" },
    { name: "Kim Jong-yun", major: "Economics" },
    { name: "Min Ji-yeong", major: "Economics" },
    { name: "Park Jun-yeong", major: "Business Administration" },
    { name: "Lee Seo-bin", major: "Thai" },
    { name: "Jeon Ju-hwan", major: "English" },
    { name: "Han Seung-a", major: "Economics" },
    { name: "Han Yu-ra", major: "Indian Studies" }
  ],
  "2nd Generation": [
    { name: "Lee Tae-hwan", major: "Arabic" },
    { name: "Ma Seung-hyeon", major: "Business Administration" },
    { name: "Park Gwang-yeom", major: "German" },
    { name: "Jeong Il-gwon", major: "Economics" }
  ],
  "1st Generation": [
    { name: "Yu Seong-woo", major: "Japanese" },
    { name: "Choi Woo-seok", major: "English" },
    { name: "Im Seong-won", major: "Business Administration" },
    { name: "Gwak Yong-jeong", major: "Business Administration" },
    { name: "Mun Han-gil", major: "Law" },
    { name: "Baek Seung-hoon", major: "Japanese" },
    { name: "Yu Hye-yoon", major: "German" }
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
      <div className={playfairDisplay.variable}>
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