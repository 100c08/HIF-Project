import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/MobileHeader.module.css';
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

const MobileHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [whiteBackground, setWhiteBackground] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setActiveDropdown(null);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
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

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''} 
      ${whiteBackground ? styles.whiteBackground : ''} 
      ${playfairDisplay.variable}`}
    >
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/white_no.svg"
            alt="HIF Logo"
            width={40}
            height={40}
            className={styles.logoImage}
          />
        </Link>

        <button className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <span className={styles.menuIcon}></span>
        </button>
      </div>

      <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ''}`}>
        <ul className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <li key={item.menu} className={styles.mobileMenuItem}>
              {item.items.length > 0 ? (
                <>
                  <button 
                    className={styles.dropdownButton}
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.title}
                    <span className={`${styles.arrow} ${activeDropdown === index ? styles.active : ''}`}></span>
                  </button>
                  <ul className={`${styles.mobileSubmenu} ${activeDropdown === index ? styles.active : ''}`}>
                    {item.items.map((subItem) => (
                      <li key={subItem.href}>
                        {subItem.isExternal ? (
                          <a 
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link href={subItem.href}>
                            {subItem.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} className={styles.mobileMenuLink}>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader; 