import Footer from './Footer';

export function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;