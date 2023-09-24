import React, {useEffect} from "react";
import './home.css';
import video from '../../assets/bg-video.mp4';
import {FaLocationDot} from 'react-icons/fa6';
import {HiFilter} from 'react-icons/hi';
import {FiFacebook} from 'react-icons/fi';
import {BsInstagram } from 'react-icons/bs';
import {FaTripadvisor} from 'react-icons/fa';
import {BsListUl} from 'react-icons/bs';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import Aos from "aos";
import 'aos/dist/aos.css'


const Home = () => {
     useEffect(()=>{
    Aos.init({duration:2000})
     }, [])


    return(
<section className="home">
    <div className="overlay">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
       
    <div className="homeContent container">
        <div className="textDiv">
           
            <span data-aos="fade-up" className="smallText">
                our packages
            </span>
          
            <h1 data-aos="fade-up" className="homeTitle">
                Search your Holidays
            </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">

            <div className="destinationInput">
                <label htmlFor="city">Search your destination:</label>
               <div className="input flex">
                <input type="text"
                placeholder="Enter Name here..." />
                <FaLocationDot className="icon" />
               </div>
            </div>
            <div className="dateInput">
                <label htmlFor="date">Select your Date:</label>
               <div className="input flex">
                <input type="date"
               />
               
               </div>
            </div>
            <div className="priceInput">
               <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">$5000</h3>
               </div>
               <div className="input flex">
                <input type="range" max="5000" min="1000" />
               </div>
               </div>

               <div className="searchOptions flex">
                <HiFilter className="icon"/>
               <span>MORE FILTER</span>
               </div>
            </div>

            <div data-aos="fade-up" className="homeFooterIcons flex">
                <div className="rightIcons">
                    <FiFacebook className="icon"/>
                    <BsInstagram className="icon"/>
                    <FaTripadvisor className="icon"/>
                </div>

                <div className="leftIcons">
                <BsListUl className="icon" />
                <AiOutlineAppstoreAdd className="icon" />
                </div>
            </div>

        </div>
    </div>

</section>
    )
}

export default Home;