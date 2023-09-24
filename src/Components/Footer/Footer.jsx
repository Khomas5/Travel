import React, {useEffect} from "react";
import "./footer.css";
import video2 from "../../assets/video2.mp4";
import { BsSend } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { RiArrowRightSLine} from "react-icons/ri";
import Aos from "aos";
import 'aos/dist/aos.css'; 

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
     }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="containerDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Trael with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <BsSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="logo" className="logo flex">
                <MdTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 Latin words, combined with a handful of model sentence
              structures, to generate Lorem Ipsum which looks reasonable. The
              generated Lorem Ipsum is therefore always free from repetition,
              injected humour, or non-characteristic words etc.
            </div>

            <div data-aos="fade-up"  className="footerSocials flex">
              <BsTwitter className="icon" />
              <BsYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group 1 */}
            <div data-aos="fade-up"
            data-aos-duration="3000"  className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                Services
              </li>
              
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                Agency
              </li>
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                Insurance
              </li>
              
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                Tourism 
              </li>
              
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
            Payment
              </li>

            </div>
             {/* group 2 */}
             <div data-aos="fade-up"
             data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                Bookings
              </li>
              
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                Rentcars
              </li>
              
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                HostelWorld
              </li>
              
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
           Trivago
              </li>
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
          Tripadvisor
              </li>

            </div>
             {/* group 3 */}
             <div data-aos="fade-up"
             data-aos-duration="5000"  className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                London
              </li>
              
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                California
              </li>
              
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
                Indonesia
              </li>
              
              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
            Europe
              </li>

              <li className="footerList flex">
                <RiArrowRightSLine className="icon"/>
            Oceania
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
      <small>BEST TRAVEL WEBSITE THEME</small>
      <small>COPYRIGHT RESERVED KHOMAS 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
