import logo from '../assets/\EK Logo.jpg';
import './header.css';
import Nav from './Nav';

export default function Header() {
    return (
        <>
        <div className="header container-fluid">
            <img src={logo} alt="Logo" className='logo' />
            <h1>Eric Kellogg</h1>
            <Nav />
        </div>
        </>
      );
};