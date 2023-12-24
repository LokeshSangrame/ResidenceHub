import React from 'react';
import './Contact.css';
import { MdCall, MdChat, MdMessage, MdVideocam } from 'react-icons/md';

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* Left side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact Information</span>
                    <span className='primaryText'>Get in Touch with Us</span>
                    <span className='secondaryText'>We are here to assist you and provide the best services tailored to your needs. At ResidenceHub, we believe in creating a better life for you through a comfortable living experience.</span>                <div className="flexColStart contactModes">
                        {/* First Row */}
                        <div className="flexStart row">
                            {/* First mode */}
                            <div className="flexColStart mode">
                                <div className="flexColStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call Us</span>
                                        <span className='secondaryText'>+91 1234567890</span>
                                    </div>
                                </div>

                                <div className="flexCenter button">Call Now</div>
                            </div>

                            {/* Second Mode */}
                            <div className="flexColStart mode">
                                <div className="flexColStart">
                                    <div className="flexCenter icon">
                                        <MdChat size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat with Us</span>
                                        <span className='secondaryText'>Chat Support Available</span>
                                    </div>
                                </div>

                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className="flexStart row">
                            {/* Third Mode */}
                            <div className="flexColStart mode">
                                <div className="flexColStart">
                                    <div className="flexCenter icon">
                                        <MdMessage size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Send a Message</span>
                                        <span className='secondaryText'>Leave us a message</span>
                                    </div>
                                </div>

                                <div className="flexCenter button">Message Now</div>
                            </div>

                            {/* Fourth Mode */}
                            <div className="flexColStart mode">
                                <div className="flexColStart">
                                    <div className="flexCenter icon">
                                        <MdVideocam size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Schedule a Video Call</span>
                                        <span className='secondaryText'>Book an appointment</span>
                                    </div>
                                </div>

                                <div className="flexCenter button">Video Call Now</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;