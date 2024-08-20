import logo from '../assets/\EK Logo.jpg';
import './header.css';
import Nav from './Nav';

export default function Header() {
    return (
        <>
        <div className="header container-fluid">
            <img src={logo} alt="Logo" className='logo ml-5' />
            <h1>Eric Kellogg</h1>
            <img src={logo} alt="Logo" className='logo ml-5' />
        </div>
        <div className="header container-fluid">
            <Nav />
        </div>
        </>
      );
};