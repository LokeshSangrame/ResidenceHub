import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
        return { right: !menuOpened && "-100%" };
    }
};

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logonew.png" alt="logo" width={100} />

                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false);
                    }}
                >
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="">Housing</a>
                        <a href="">Our Values</a>
                        <a href="">Contact Us</a>
                        <a href="">Subscribe Us</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
};

export default Header;
