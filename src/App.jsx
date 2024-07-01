import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route , Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Service from './components/pages/Service';
import CaseStudies from './components/pages/CaseStudies';
import Courses from './components/pages/Courses';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

function App() {

  return (
      <div>
          <NavBar />
          <Routes>
            <Route path="/" exact element= {<Home />} />
            <Route path="/aboutUs" exact element= {<AboutUs/>} />
            <Route path="/service" exact element= {<Service/>} />
            <Route path="/caseStudies" exact element= {<CaseStudies/>} />
            <Route path="/courses" exact element= {<Courses/>} />
            <Route path="/blog" exact element= {<Blog/>} />
            <Route path="/Contact" exact element= {<Contact/>} />
          </Routes>
          <Footer />
      </div>
  )
}

export default App
