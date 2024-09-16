import logo from '../assets/\EK Logo.jpg';
import './header.css';
import Nav from './Nav';

export default function Header() {
    return (
        <>
        <header>
        <div className="header container-fluid">
            <img src={logo} alt="Logo" className='logo' />
            <h1 className='d-none d-sm-block'>Eric Kellogg, PMP</h1>
            <img src={logo} alt="Logo" className='logo' />
        </div>
        <div className="header container-fluid">
            <Nav />
        </div>
        </header>
        </>
      );
};