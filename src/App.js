import React from "react";
import Navbar from "./Components/Navbar";
import MainTop from "./Components/MainTop";
import SocialMedia from "./Components/SocialMedia";
import TabArea from "./Components/TabArea";
import SubList from "./Components/SubList";
import StandartPicture from "./Components/StandartPicture";
import Awesome from "./Components/Awesome";
import PricingOptions from "./Components/PricingOptions";
import CustomerComment from "./Components/CustomerComment";
import StylishDesign from "./Components/StylishDesign";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="all-container">
        <MainTop />
        <SocialMedia />
        <TabArea />
        <SubList />
        <StandartPicture />
        <Awesome />
        <PricingOptions />
        <CustomerComment />
        <StylishDesign />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
