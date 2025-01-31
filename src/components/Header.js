import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "../styles/Header.module.css";
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = (menu) => {
    setVisibleDropdown(menu);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setVisibleDropdown(null);
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    
    if (router.pathname === '/') {
      // 홈페이지에서는 fullpage.js의 moveTo 메서드 사용
      if (typeof window !== 'undefined' && window.fullpage_api) {
        window.fullpage_api.moveTo(1);
      }
    } else {
      // 다른 페이지에서는 홈으로 이동 후 첫 섹션으로
      router.push('/').then(() => {
        setTimeout(() => {
          if (window.fullpage_api) {
            window.fullpage_api.moveTo(1);
          }
        }, 100);
      });
    }
  };

  const menuItems = [
    {
      title: "ABOUT US",
      menu: "about",
      href: "/about/introduction",
      items: [
        { label: "Introduction", href: "/about/introduction" },
        { label: "Greetings", href: "/about/greetings" },
      ],
    },
    {
      title: "ACTIVITIES",
      menu: "activities",
      href: "/activities/regular-session",
      items: [
        { label: "Regular Session", href: "/activities/regular-session" },
        { label: "Competition", href: "/activities/competition" },
        { label: "Research", href: "/activities/research" },
        { label: "DSAI", href: "https://hif-dsai.github.io/", isExternal: true },
      ],
    },
    {
      title: "MEMBERS",
      menu: "members",
      href: "/members",
      items: [],
    },
    {
      title: "JOIN US",
      menu: "join",
      href: "/join/recruiting",
      items: [
        { label: "Recruiting", href: "/join/recruiting" },
        { label: "FAQ", href: "/join/faq" },
      ],
    },
  ];

  useEffect(() => {
    // 현재 페이지가 메인 페이지인지 확인
    const isMainPage = router.pathname === '/';
    
    // 초기 상태 설정
    if (!isMainPage) {
      // 서브 페이지에서는 hero 섹션이 있으므로 처음에는 투명 배경
      setIsScrolled(false);
    }

    const handleScroll = () => {
      if (isMainPage) {
        // 메인 페이지에서는 기존 로직 유지
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
      } else {
        // 서브 페이지에서는 hero 섹션을 지나면 배경색 변경
        const heroSection = document.querySelector('[class*="heroSection"]');
        if (heroSection) {
          const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
          const scrolled = window.scrollY > (heroBottom - 100);
          setIsScrolled(scrolled);
        }
      }
    };

    // 페이지 로드 시 초기 스크롤 위치에 따른 상태 설정
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  return (
    <header 
      className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''} ${playfairDisplay.variable} ${isScrolled ? styles.scrolled : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.logoContainer}>
        <Link href="/" onClick={handleLogoClick}>
          <Image
            src="/white_no.svg"
            alt="HIF Logo"
            className={`${styles.logoImage} logoImage`}
            width={50}
            height={50}
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navMenu}>
          {menuItems.map(({ title, menu, items, href }) => (
            <li 
              key={menu} 
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(menu)}
            >
              <Link 
                href={href}
                className={styles.navLink}
                onClick={handleLinkClick}
              >
                {title}
              </Link>
              {items.length > 0 && (
                <ul className={`${styles.dropdownMenu} ${visibleDropdown === menu ? styles.show : ''}`}>
                  {items.map(({ label, href, className, isExternal }) => (
                    <li key={label} className={styles.dropdownItem}>
                      {isExternal ? (
                        <a 
                          href={href}
                          className={`${styles.dropdownLink} ${className || ''}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                        >
                          {label}
                          <svg 
                            className={styles.externalLinkIcon}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      ) : (
                        <Link 
                          href={href} 
                          className={`${styles.dropdownLink} ${className || ''}`}
                          onClick={handleLinkClick}
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}