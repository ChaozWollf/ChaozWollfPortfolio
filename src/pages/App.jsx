import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';
import Portfolio from './pages/Portfolio';
import { Outlet } from 'react-router-dom';



export default function App() {
  return (
    <Router>
        <div className="app-container">
          <NavBar />
          <Switch>
            <Route path="/AboutMe" element={AboutMe} />
          </Switch>
      <AboutMe />
      <Portfolio/>
      <main className="mx-3">
        <Outlet />
      </main>
    </div>
  </Router>
  );
}


