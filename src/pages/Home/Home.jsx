import Header from "../../components/Header/Header";
import Contact from "../../pages/Contact/Contact";
import PortfolioScroll from "../Portfolio/PortfolioScroll";
import AboutSnippet from "../../pages/About/AboutSnippet";
import "./Home.css";

const Home = () => {
  return (
    <div className="content">
      <div className="header">
        <Header />
      </div>

      <PortfolioScroll />
      <div className="gradient-background">
        <AboutSnippet />
        <div className="contact ">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
