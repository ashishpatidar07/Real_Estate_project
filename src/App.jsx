import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Companies from "./components/Companies/companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import "./App.css";


function App() {
  return (
    <>
      <div className="app">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
