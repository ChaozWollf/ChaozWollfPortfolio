import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Nav from './components/NavTabs';
import Portfolio from './pages/Portfolio';
import { Outlet } from 'react-router-dom';




export default function App() {
  return (
    <Routes>
          <Route
            path="/" 
            element={ 
            <>
            <Nav/>
        <main className="mx-3">
          <Outlet />
        </main>
          </>
            }
            >
       <Route path="AboutMe" element={<AboutMe />} />
    <Route path="Portfolio" element={<Portfolio />} />
        </Route>
        </Routes>
  );

          }
