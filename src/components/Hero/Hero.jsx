import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section className="hero-wrapper">
            <div className="flexCenter paddings innerWidth hero-container">
                {/* Left Side */}
                <div className="flexColStart hero-left">
                    <div className="hero-image-container" /> {/* Background image container */}
                    <div className="hero-title">
                        <motion.div
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}
                        >
                            <h1>Elevate <br /> Your Property <br /> Search</h1>
                        </motion.div>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Discover a wide range of properties tailored to your needs effortlessly.</span>
                        <span className='secondaryText'>Bid farewell to the challenges of finding your perfect home.</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>

                    {/* Numbers Statistical data */}
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={5000} end={5200} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Housing Properties</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={420} end={450} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={15} end={20} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Awards Winning</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
