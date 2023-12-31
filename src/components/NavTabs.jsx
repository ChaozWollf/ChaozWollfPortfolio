import { Link, useLocation } from 'react-router-dom';
// function Nav({NavTab, name}) {
//   return ()
// }


function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <div>
    <h2 id='header'>Brandon Witkowski</h2>
        <ul className="nav-tabs">
      <li className="nav-item-about">
        <Link
          to="/AboutMe"
             className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item-portfolio">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
        <li className="nav-item-resume">
          <Link
            to="https://1drv.ms/w/s!AvMsHLIpaVqo1UgbfaZvhUb-b5Xf?e=ZxZZpJ"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
      </li>
      </ul>
  </div>
  );
}

export default Nav;
