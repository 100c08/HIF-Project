import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../pages/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair"
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleDropdown, setVisibleDropdown] = useState(null);

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
      items: [
        { label: "Regular Session", href: "/regular-session" },
        { label: "공모전", href: "/competition", className: styles.koreanText },
        { label: "Research", href: "/research" },
        { label: "DS/AI", href: "/ds-ai" },
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
      items: [
        { label: "Recruiting", href: "/recruiting" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ];

  return (
    <header 
      className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''} ${playfairDisplay.variable}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/white_no.svg"
            alt="HIF Logo"
            className={styles.logoImage}
            width={40}
            height={40}
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
                href={href || "#"} 
                className={styles.navLink}
                onClick={handleLinkClick}  // 클릭 핸들러 추가
              >
                {title}
              </Link>
              {items.length > 0 && (
                <ul className={`${styles.dropdownMenu} ${visibleDropdown === menu ? styles.show : ''}`}>
                  {items.map(({ label, href, className }) => (
                    <li key={label} className={styles.dropdownItem}>
                      <Link 
                        href={href} 
                        className={`${styles.dropdownLink} ${className || ''}`}
                        onClick={handleLinkClick}  // 클릭 핸들러 추가
                      >
                        {label}
                      </Link>
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