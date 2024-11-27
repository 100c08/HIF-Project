// _app.js
import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Layout } from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
