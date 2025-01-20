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

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    {
      title: "ABOUT US",
      menu: "about",
      items: [
        { label: "Introduction", href: "/introduction" },
        { label: "Greetings", href: "/greetings" },
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
      onMouseEnter={handleMouseEnter}
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
            <li key={menu} className={styles.navItem}>
              <Link href={href || "#"} className={styles.navLink}>
                {title}
              </Link>
              {items.length > 0 && (
                <ul className={styles.dropdownMenu}>
                  {items.map(({ label, href, className }) => (
                    <li key={label} className={styles.dropdownItem}>
                      <Link 
                        href={href} 
                        className={`${styles.dropdownLink} ${className || ''}`}
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