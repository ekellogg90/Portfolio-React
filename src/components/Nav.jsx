// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  const currentPage = useLocation().pathname;
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <nav className="navbar navbar-expand-sm my-0 py-0">
      <div className="collapse navbar-collapse d-none d-md-block" id="navbarSupportedContent">
        <Navbar
          links={[
            <Link key={1} to="/" className={currentPage === '/' ? "nav-link active text-light mx-5" : "nav-link text-light mx-5"} >
              Home
            </Link>,
            <Link key={2} to="/project" className={currentPage === '/project' ? "nav-link active text-light mx-5" : "nav-link text-light mx-5"} >
              Projects
            </Link>,
            <Link key={3} to="/resume" className={currentPage === '/resume' ? "nav-link active text-light mx-5" : "nav-link text-light mx-5"} >
              Résumé
            </Link>,
            <Link key={4} to="/contact" className={currentPage === '/contact' ? "nav-link active text-light mx-5" : "nav-link text-light mx-5"} >
              Contact
            </Link>,
          ]}/>
      </div>
    </nav>
  );
}
