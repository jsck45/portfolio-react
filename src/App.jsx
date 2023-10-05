import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Router>
 <Navigation />
 <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
