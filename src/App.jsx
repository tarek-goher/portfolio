
import Header from "./components/header/header";
import Hero from "./components/header/hero/hero";
import Main from "./components/header/main/main";
import Contact from "./components/header/contactUs/contact";
import Footer from "./components/foter/footer";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setscrolly(true);
      } else {
        setscrolly(false);
      }
    });
  });
  const [scrollbtn, setscrolly] = useState(false);
  return (
    <>
      <div id="up" className="container">
        <Header />
        <Hero />
        <div className="divder"></div>
        <Main />
        <div className="divder"></div>
        <Contact />
        <Footer />
        <a
          href="#up"
          style={{ opacity: scrollbtn ? 1 : 0, transition: "0.5s" }}
        >
          <button className="scroll-top  icon-keyboard_arrow_up"></button>
        </a>
      </div>
    </>
  );
}

export default App;
