import Hero from "./Hero";
import SubHero from "./SubHero";
import Main from "./Main"
import Projects from "./Projects";
import "./home.css"

function Home(props) {
    return (
      <div className="home fade-in">
        <Hero />
        <SubHero handlerMethod={props.handleClick} />
        <Projects />
        <Main />
      </div>
    );
  }
  
  export default Home;