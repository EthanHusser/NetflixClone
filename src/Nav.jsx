import { useEffect, useState } from 'react'

import "./Nav.css"

const Nav = () => {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <div className='nav-contents'>
                <img className='nav-logo' src="http://image.noelshack.com/fichiers/2022/21/4/1653559778-netflix-logo.png" alt=""/>
                <img className='nav-avatar' src="https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755" alt=""/>
            </div>
        </div>
    )
}

export default Nav