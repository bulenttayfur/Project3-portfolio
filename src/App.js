import "./App.css";
import MainImage from "./components/main-info/MainImage";
import Skills from "./components/main-info/Skills";
import AboutMe from "./components/main-info/AboutMe";
import Projects from "./components/main-info/Projects";
import Blogs from "./components/main-info/Blogs";


function App() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column" style={{gap: '100px', paddingBottom: '150px'}}>
          <MainImage />
          <AboutMe/>
          <Skills />
          <Projects/>
          <Blogs/>
        </div>
      </div>
    </>
  );
}

export default App;
