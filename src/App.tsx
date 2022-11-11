import Boxs from "components/boxs/Boxs";
import Contact from "components/contact/Contact";
import Crypto from "components/crypto/Crypto";
import Description from "components/description/Description";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import Order from "components/Order/Order";
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
      <Crypto/>
      <Order/>
      <Contact/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
