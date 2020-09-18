import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://assets.brand.microsites.netflix.io/assets/884000e8-b375-11e7-9274-06c476b5c346_cm_1024w.png?v=4"
                alt="Netflix Logo"
            />

            <img 
                className="nav__avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Account Avatar"
            />
        </div>
    )
}

export default Nav; 
