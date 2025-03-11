import "./App.css";
import Header from "./components/Header.jsx";
import bg from "./assets/bg.jpg";

function App() {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <main className="h-screen w-screen" style={style}>
        <Header />

        <div className="h-full w-full flex flex-col justify-center px-[4rem]">
          <h1 className="text-[#FF7514] font-bold text-[5rem]">Sabor que Vicia!</h1>
          <h3 className="text-white text-[2rem] font-bold">O melhor hambúrguer da cidade</h3>

          <button className="w-[10rem] py-[6px] bg-[#FF7514] rounded-3xl hover:bg-[#f3a282] mt-[1rem]">Fale conosco</button>
        </div>
      </main>
    </>
  );
}

export default App;
