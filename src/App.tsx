import Boxs from "components/boxs/Boxs";
import Contact from "components/contact/Contact";
import Description from "components/description/Description";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import Question from "components/question/Question";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Description />
      <Boxs/>
      <Contact/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
