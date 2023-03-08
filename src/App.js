// import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SubHero from "./components/SubHero";
import Mission from "./components/Mission";
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Mission />
        <SubHero />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
