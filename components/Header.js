import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setVisibleDropdown(menu);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
  };

  return (
    <header className={styles.header}>
      {/* 로고 */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/logo_white.PNG"
            alt="HIF Logo"
            className={styles.logoImage}
            width={40}
            height={40}
          />
        </Link>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav>
        <ul className={styles.navMenu}>
          {[
            {
              title: "ABOUT US",
              menu: "about",
              items: [
                { label: "INTRODUCTION", href: "/introduction" },
                { label: "GREETINGS", href: "/greetings" },
              ],
            },
            {
              title: "ACTIVITIES",
              menu: "activities",
              items: [
                { label: "EDUCATION", href: "/education" },
                { label: "INDUSTRIAL COLLABORATION", href: "/collaboration" },
                { label: "NETWORKING", href: "/networking" },
              ],
            },
            {
              title: "OUR PEOPLE",
              menu: "people",
              items: [
                { label: "MEMBERS", href: "/members" },
                { label: "ALUMNI MESSAGE", href: "/alumni" },
              ],
            },
            {
              title: "JOIN US",
              menu: "join",
              items: [
                { label: "PROCESS", href: "/process" },
                { label: "FAQ", href: "/faq" },
                { label: "NOTICE", href: "/notice" },
              ],
            },
          ].map(({ title, menu, items }) => (
            <li
              key={menu}
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="#" className={styles.navLink}>
                {title} <span className={styles.dropdownArrow}>▼</span>
              </Link>
              <ul
                className={`${styles.dropdownMenu} ${
                  visibleDropdown === menu ? styles.show : ""
                }`}
              >
                {items.map(({ label, href }) => (
                  <li key={label} className={styles.dropdownItem}>
                    <Link href={href} className={styles.dropdownLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
