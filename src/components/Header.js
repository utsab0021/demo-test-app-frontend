import React, { Fragment , useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };
    const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a navigation item is clicked
  };
    return (
        <>
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo.png" />
                                </a>

                                <ul className={`nav ${isMenuOpen ? 'show' : ''}`}>
                                    <li className="scroll-to-section"><a href="#top"
                                        className="active"
                                    >Home</a></li>
                                    <li className="scroll-to-section" onClick={handleMenuItemClick}><a href="#services">Services</a></li>
                                    <li className="scroll-to-section" onClick={handleMenuItemClick}><a href="#about">About</a></li>
                                    {/* <li className="scroll-to-section" onClick={handleMenuItemClick}><a href="#portfolio">Portfolio</a></li>
              <li className="scroll-to-section" onClick={handleMenuItemClick}><a href="#video">Videos</a></li>  */}
                                    <li className="scroll-to-section" onClick={handleMenuItemClick}><a href="#contact">Contact Us</a></li>
                                    <li className="scroll-to-section" onClick={handleMenuItemClick}><div className="main-red-button-hover"><a href="#contact">Contact Us Now</a></div></li>
                                </ul>
                                <a className='menu-trigger' onClick={handleMenuToggle}>
                                    <span>Menu</span>
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header