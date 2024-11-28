export default function Footer() {
    return (
      <footer
        style={{
          background: "#000",
          color: "#fff",
          padding: "2rem 1rem 0", // 상단과 좌우 여백만 설정
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            maxWidth: "1200px",
            margin: "0 auto",
            fontWeight: "300",
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
                fontWeight: "bold", // HIF 글자를 두껍게 설정
              }}
            >
              HIF
            </div>
          </div>
  
          {/* 오른쪽 콘텐츠 */}
          <div style={{ textAlign: "left", maxWidth: "50%" }}>
            <div
              style={{
                display: "flex",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ minWidth: "80px", fontWeight: "bold" }}>이메일</span>
              <span>abc@abc.com</span>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ minWidth: "80px", fontWeight: "bold" }}>회장</span>
              <span>윤미르 | 010-3108-7767</span>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <span style={{ minWidth: "80px", fontWeight: "bold" }}>부회장</span>
              <span>강지원 | 010-8537-7843</span>
            </div>
          </div>
        </div>
  
        {/* 카피라이트 */}
        <div
          style={{
            textAlign: "center",
            color: "#aaa", // 회색 텍스트
            fontSize: "0.8rem", // 작은 글씨
            marginTop: "1rem", // 상단 여백
            padding: "1rem 0", // 아래 패딩 추가
            borderTop: "1px solid #333", // 상단 경계선
          }}
        >
          © 2010-2024 HIF. All Rights Reserved.
        </div>
      </footer>
    );
  }
  