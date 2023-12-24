import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">

                {/* Left side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" />

                    <span className='secondaryText'>Our vision is to create the perfect living space for every individual, <br />where they can truly thrive and experience a blissful life.</span>
                </div>

                {/* Right Side */}

                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>Civil lines , Nagpur, India</span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer