import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation"; 
import Portfolio from "../../pages/Portfolio/Portfolio"; 

const Home = () => {

  return (
<>
      <Navigation />
      <Header />

     <Portfolio />

      <Footer />
    </>
  );
};

export default Home;