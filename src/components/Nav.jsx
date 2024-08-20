// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <nav className="navbar navbar-expand-lg my-0 py-0">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Navbar
            links={[
              <Link key={1} className="nav-link text-light mx-5" to="/">
                Home
              </Link>,
              <Link key={2} className="nav-link text-light mx-5" to="/about">
                About Me
              </Link>,
              <button className="mx-5">Request I Apply</button>
            ]}/>
        </div>
      </div>
    </nav>
  );
}
