import "@/styles/globals.css";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="grid grid-cols-12 grid-flow-cols" dir="rtl">
        <div className="col-span-1 h-screen sticky top-0 z-40">
          <Sidebar />
        </div>
        <div className="col-span-11 bg-slate-100">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
}
