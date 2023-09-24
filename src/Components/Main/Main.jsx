import React, {useEffect} from "react";
import './main.css';
import img from '../../assets/photo1.jpg';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsClipboardCheck} from 'react-icons/bs';
import Aos from "aos";
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img, 
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: '1st Class',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id:2,
    imgSrc: img, 
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: '1st Class',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id:3,
    imgSrc: img, 
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: '1st Class',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id:4,
    imgSrc: img, 
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: '1st Class',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id:5,
    imgSrc: img, 
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: '1st Class',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id:6,
    imgSrc: img, 
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: '1st Class',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
     }, [])


    return(
  <div className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right" className="title">
        Most visited destinations
      </h3>
    </div>

    <div className="secContent grid">
    {
      Data.map(({id, imgSrc, destTitle,location, grade, fees, description}) =>{
        return(
          <div key={id}
          data-aos="fade-up" 
           className="singleDestination">
           <div className="imageDiv">
            <img src={imgSrc} alt={destTitle} />
           </div>
           <div className="cardInfo">
            <h4 className="destTitle">
              {destTitle}
            </h4>
            <span className="continent flex">
              <HiOutlineLocationMarker className="icon"/>
            <span className="name">{location}</span>
            </span>
            <div className="fees flex">
              <div className="grade">
                <span>{grade}<small>+1</small></span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>

            <div className="desc">
              <p>{description}</p>
            </div>

            <button className="btn flex">
              DETAILS <BsClipboardCheck className="icon" />
            </button>

           </div>
          </div>
        )
      })
    }
    </div>
  </div>
    )
}

export default Main;