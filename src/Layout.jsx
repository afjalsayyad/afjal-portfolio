import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <main className="flex-grow px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
