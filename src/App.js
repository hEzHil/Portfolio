import NavBar from"./components/NavBar/navBar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Contact/>  
      <Footer/>
    </div>
  );
}

export default App;
