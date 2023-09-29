import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg'

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT3?</a></p>
        <p><a href="#possibility">Open Ai</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>
                    Sign up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {
                    toggleMenu ?
                        <p onClick={() => setToggleMenu(false)} className='close-btn'>x</p>
                        : <p onClick={() => setToggleMenu(true)} className='three-dots'>
                             <div />
                             <div />
                             <div />
                            </p>
                }
                {
                    toggleMenu && (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className='gpt3__navbar-menu_container-links'>
                                <Menu />
                                <div className='gpt3__navbar-menu_container-links-sign'>
                                    <p>Sign in</p>
                                    <button type='button'>
                                        Sign up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;