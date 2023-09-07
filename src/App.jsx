import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Nav from './components/NavTabs';
import Portfolio from './pages/Portfolio';

// Footers file was named so to differenciate the names
import Footer from './components/Footers'


export default function App() {
  return (
   <div>
   <Nav>
    </Nav>
    <Routes>
        
          <Route
            path="/" 
            element={ 
            <AboutMe/>} />    
    <Route path="AboutMe" element={<AboutMe />} />
    <Route path="Portfolio" element={<Portfolio />} />
        </Routes>
  <Footer>

  </Footer>
</div>
  );       
 };
