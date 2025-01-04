import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>UP TO 20% Discount On</h4>
            <h1>Fashion Forward</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolores soluta itaque doloremque cupiditate minima maiores ipsam vel molestias, blanditiis tempore sunt voluptate tenetur commodi dicta consequatur nam quos eligendi.</p>
            <button className='btn'><Link to="/shop">EXPLORE NOW!</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner image" />
        </div>
      
    </div>
  )
}

export default Banner
