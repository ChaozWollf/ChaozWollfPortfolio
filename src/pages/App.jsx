import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';
import Portfolio from './pages/Portfolio';
import { Outlet } from 'react-router-dom';



export default function App() {
  return (
    <div>
      <Nav />
      <AboutMe />
      <Portfolio/>
      <main className="mx-3">
        <Outlet />
      </main>
    </div>
  );
}


