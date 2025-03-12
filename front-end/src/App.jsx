import "./App.css";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <main className="h-screen w-screen relative">
        <Header />
        <Home />
        <Testimonials/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
