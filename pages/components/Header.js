import { useState } from "react";

export default function Header() {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setVisibleDropdown(menu);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
  };

  return (
    <header
      style={{
        background: "#000",
        color: "#fff",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* 로고 */}
      <div style={{ fontSize: "1.1rem", fontWeight: "300" }}>HIF</div>

      {/* 네비게이션 메뉴 */}
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {/* 공통 스타일 */}
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
              style={{ margin: "0 1rem", position: "relative" }}
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "300",
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center", // 텍스트와 화살표를 정렬
                  gap: "0.3rem", // 텍스트와 화살표 간격
                }}
              >
                {title} <span style={{ fontSize: "0.7rem" }}>▼</span>
              </a>
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#000",
                  color: "#fff",
                  listStyle: "none",
                  margin: 0,
                  padding: "0.5rem 0",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  minWidth: "150px",
                  opacity: visibleDropdown === menu ? 1 : 0, // 투명도 설정
                  visibility: visibleDropdown === menu ? "visible" : "hidden", // 보임 상태
                  transition: "opacity 0.3s ease, visibility 0.3s ease", // 애니메이션 추가
                }}
              >
                {items.map(({ label, href }) => (
                  <li key={label} style={{ padding: "0.5rem 1rem" }}>
                    <a
                      href={href}
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "0.8rem",
                        fontWeight: "300",
                      }}
                    >
                      {label}
                    </a>
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
