
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id="nav_main"className='nav_flex'  >
            <div  >
                <ul className='nav_flex'>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About Us</Link>
                </li>
                <li>
                    <Link>Contact Us</Link>
                </li>
                </ul>
            </div>
            <div className="additional-box">
                <ul className='nav_flex'>
                    <li>
                        <Link>Login</Link>
                    </li>
                    <li>
                        <Link>Offer</Link>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
