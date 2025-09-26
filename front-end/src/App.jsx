import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/Home.jsx";
import MenuPage from "./pages/MenuPage.jsx"; // Importa a nova página

function App() {
  return (
    <Router>
      <main className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cardapio" element={<MenuPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
