import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/Home.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import { MenuProvider } from "./context/MenuContext.jsx";

function App() {
  return (
    <Router>
      <MenuProvider>
        <main className="flex flex-col min-h-screen bg-white">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cardapio" element={<MenuPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </MenuProvider>
    </Router>
  );
}

export default App;
