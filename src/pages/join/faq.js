import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/join/Faq.module.css';
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: "지원 요건이 궁금합니다.",
            answer: "전공, 학번에 관계없이 한국외국어대학교 서울캠퍼스 재학생 및 휴학생이라면 모두 지원 가능합니다."
        },
        {
            question: "필수적으로 2개 학기를 연속으로 활동해야 하나요?",
            answer: "군입대, 교환학생 등 불가피한 사유로 2개 학기 연속 활동이 불가한 경우 나눠서 활동을 진행할 수 있습니다. 다만, 가급적 2개 학기 연속 활동을 권고 드립니다."
        },
        {
            question: "방학 기간에도 활동을 진행하나요?",
            answer: "방학 기간에는 정기 세미나와 신문 스터디는 진행되지 않습니다. 하지만, 학회 내에서 자율적으로 공모전 참가, 자격증 스터디 등 다양한 활동을 진행하고 있습니다."
        },
        {
            question: "지원자의 나이/학번 제한이 있나요?",
            answer: "없습니다. 졸업을 앞둔 상황이더라도 2개 학기 이상 활동이 가능하다면 지원 가능합니다."
        },
        {
            question: "상경계열이 아닐 경우 지원 시 불이익이나 입회 이후 어려움이 있나요?",
            answer: "금융학회 특성상 상경계열 전공자가 다수인 것은 사실입니다. 하지만, 금융연구회는 학회원의 소속 학과에 제한을 두고 있지 않으며, 현재도 다양한 비상경계열 전공 학회원들이 함께 활동하고 있습니다. 전공과 무관하게 금융에 대한 관심과 열정을 가지신 분이라면 금융연구회 학회원들과 함께 성장할 수 있습니다."
        },
        {
            question: "면접은 어떠한 방식으로 이루어지나요?",
            answer: "다대다 대면 면접으로, 한국외국어대학교 서울캠퍼스 내에서 진행됩니다. 한 그룹 당 4-5명의 지원자가 면접에 참여하게 되며, 시간은 약 30-40분 가량 소요됩니다. (추후 변동이 있을 수 있습니다.)"
        },
        {
            question: "면접 복장 규정이 있나요?",
            answer: "없습니다. 자율적인 복장으로 면접에 참여하시면 됩니다."
        },
        {
            question: "면접에서 요구하는 관련 지식의 수준이 궁금합니다.",
            answer: "금융연구회는 함께 배우고 성장하는 학회입니다. 지원서와 면접을 통해 금융 분야에 대한 관심과 열정을 보여주신다면 충분합니다. 대다수의 질문은 자기소개서를 기반으로 이루어집니다."
        },
        {
            question: "학회원들의 세부적인 진로는 어떻게 되나요?",
            answer: "금융연구회 학회원들은 졸업 후 증권사, 자산운용사, 은행, 여전사, 금융공기업, 대기업 재무팀 등 다양한 분야에 진출해 있습니다. 이렇게 다양한 커리어를 준비하는 데 있어 금융연구회는 학회원들을 물심양면으로 지원하고 있습니다."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={playfairDisplay.variable}>
            <Head>
                <title>FAQ | HIF</title>
                <meta property="og:title" content="FAQ | HIF" />
                <meta name="description" content="HIF FAQ page" />
            </Head>

            {/* Hero Section */}
            <div className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>
                    FAQ
                </h1>
                <div className={styles.breadcrumb}>
                    <span className={styles.breadcrumbText}>JOIN US</span>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>FAQ</span>
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
                <div className={styles.contentSection}>
                    <h2 className={styles.mainTitle}>
                        HIF <span className={styles.boldText}>Answers</span>
                    </h2>
                    <div className={styles.faqContainer}>
                        {faqItems.map((item, index) => (
                            <div key={index} className={styles.faqItem}>
                                <button 
                                    className={`${styles.questionButton} ${openIndex === index ? styles.active : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className={styles.questionIcon}>Q</span>
                                    {item.question}
                                    <span className={styles.arrow}></span>
                                </button>
                                <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}