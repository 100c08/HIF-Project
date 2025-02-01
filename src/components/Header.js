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
      if (window.fullpage_api) {
        window.fullpage_api.moveTo(1);
      }
    } else {
      router.push('/').then(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(1);
        }
      });
    }
  };

  const menuItems = [
    {
      title: "ABOUT US",
      menu: "about",
      href: "/about/introduction",
      items: [],
    },
    {
      title: "ACTIVITIES",
      menu: "activities",
      href: "/activities/regular-session",
      items: [
        { label: "Regular Session", href: "/activities/regular-session" },
        { label: "Awards", href: "/activities/competition" },
        { label: "Research", href: "/activities/research" },
        { label: "DS/AI", href: "https://hif-dsai.github.io/", isExternal: true },
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
    const isMainPage = router.pathname === '/';
    const isMembersPage = router.pathname.includes('/members');
    const isAwardsPage = router.pathname === '/activities/competition';

    if (!isMainPage && !isMembersPage && !isAwardsPage) {
      setIsScrolled(false);
    }

    const handleScroll = () => {
      if (isMainPage) {
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
      } else if (isMembersPage || isAwardsPage) {
        setIsScrolled(false);
      } else {
        const heroSection = document.querySelector('[class*="heroSection"]');
        if (heroSection) {
          const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
          const scrolled = window.scrollY > (heroBottom - 100);
          setIsScrolled(scrolled);
        }
      }
    };

    const handleRouteChange = () => {
      document.documentElement.removeAttribute('data-section');
      
      const logo = document.querySelector('.logoImage');
      if (logo) {
        logo.style.filter = 'brightness(0) invert(1)';
      }

      setIsMenuOpen(false);
      setVisibleDropdown(null);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.pathname]);

  const headerClass = `${styles.header} ${
    isScrolled ? styles.scrolled : ''
  } ${router.pathname.includes('/members') ? styles.darkHeader : ''}`;

  return (
    <header 
      className={`${headerClass} 
        ${isMenuOpen ? styles.menuOpen : ''} 
        ${playfairDisplay.variable}
      `}
      style={{ transition: 'background-color 0.8s ease, color 0.8s ease' }}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.logoContainer}>
        <Link href="/" onClick={handleLogoClick}>
          <Image
            src="/white_no.svg"
            alt="HIF Logo"
            className={`${styles.logoImage} logoImage`}
            width={40}
            height={40}
            style={{ transition: 'filter 0.8s ease' }}
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
