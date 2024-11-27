export default function Footer() {
    return (
      <footer
        style={{
          background: "#000",
          color: "#fff",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap", // 반응형 지원
            maxWidth: "1200px", // 내용 최대 너비 제한
            margin: "0 auto", // 가운데 정렬
            fontWeight: "300", // 전체 글자를 얇게 설정
          }}
        >
          {/* 왼쪽 콘텐츠 */}
          <div style={{ maxWidth: "50%" }}>
            <div
              style={{
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
              }}
            >
              HUFS Institute of Finance,
            </div>
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              HIF
            </div>
            <div
              style={{
                fontSize: "0.9rem",
              }}
            >
              © 2010-2024 HIF. All Rights Reserved.
            </div>
          </div>
  
          {/* 오른쪽 콘텐츠 */}
          <div style={{ textAlign: "right", maxWidth: "50%" }}>
            <div
              style={{
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
              }}
            >
              이메일: abc@abc.com
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
              }}
            >
              회장 윤미르 | 010-3108-7767
            </div>
            <div
              style={{
                fontSize: "0.9rem",
              }}
            >
              부회장 강지원 | 010-8537-7843
            </div>
          </div>
        </div>
      </footer>
    );
  }
  