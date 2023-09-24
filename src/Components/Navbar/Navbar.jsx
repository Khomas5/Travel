import React, {useState} from "react";
import "./navbar.css";
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {PiDotsNineBold} from 'react-icons/pi';


const Navbar = () => {
    const  [active, setActive] = useState('navbar')
    const showNav = () =>{
        setActive('navBar activeNavbar');
    } 

    const removeNavbar = () => {
        setActive('navBar');
    }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
            <a href="logo" className="logo flex">
                <h1><MdOutlineTravelExplore className="icon"/>
                 Travel.</h1>
            </a>

        </div>
        <div className={active}>
            <ul className="navLists flex">
                <li className="navItem">
                    <a href="home" className="navLink">Home</a>
                
                </li>
                <li className="navItem">
                    <a href="packages" className="navLink">packages</a>
                
                </li>
                <li className="navItem">
                    <a href="shop" className="navLink">Shop</a>
                
                </li>
                <li className="navItem">
                    <a href="about" className="navLink">About</a>
                
                </li>
                <li className="navItem">
                    <a href="pages" className="navLink">Pages</a>
                
                </li>
                <li className="navItem">
                    <a href="news" className="navLink">News</a>
                
                </li>
                <li className="navItem">
                    <a href="contact" className="navLink">Contact</a>
                
                </li>

                <button className="btn">
                    <a href="btn">Book Now</a>
                </button>
            </ul>

            <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className="icon"/>
            </div>

        </div>
           
            <div onClick={showNav} 
            className="toggleNavbar">
                <PiDotsNineBold className="icon"/>
            </div>

      </header>
    </section>
  );
};

export default Navbar;
