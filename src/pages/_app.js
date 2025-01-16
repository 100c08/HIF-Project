// _app.js
import "../styles/globals.css";
import Header from "../components/Header"; // 공통 헤더
import { Layout } from "../components/Layout"; // 레이아웃 컴포넌트

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}