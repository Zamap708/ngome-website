import { useState } from "react";
import "./app.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Pilgrims from "./components/Pilgrims";
import About from "./components/About"
import History from "./components/History"
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {

  const [activePage, setActivePage] = useState({
    Home: true,
    Pilgrims: false,
    About: false,
    History: false,
    Contact: false
  })

  const changePage = (e) => {
    const active = e.target.id
    setActivePage(prevState => {
      const newState = {}
      for (const key in prevState) {
        newState[key] = false
      }   
      return {
        ...newState, 
        [active]: true
      }
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar handleClick = {changePage} />
      </header>

      <div className="page-wrapper">
      {activePage.Home ? <Home handleClick = {changePage}/> : "" }
      {activePage.Pilgrims ? <Pilgrims /> : ""}
      {activePage.History ? <History /> : "" }
      {activePage.About ? <About /> : "" }
      {activePage.Contact ? <Contact /> : ""}
      </div>

      <Footer handleClick = {changePage}/>
    </div>
  );
}

export default App;
