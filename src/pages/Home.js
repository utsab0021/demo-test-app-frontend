import React, { Fragment , useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
  
  const testiMonials = [
      {
          name: 'Rekob Ramya',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
          address: 'USA',
          img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
      },
      {
          name: 'Brandon Savage',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
          address: 'USA',
          img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
      },
      {
          name: 'Steve Burns',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
          address: 'USA',
          img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
      },
      {
          name: 'Kevin Canlas',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
          address: 'USA',
          img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
      },
  ]
  //Owl Carousel Settings
  const options = {
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      nav: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 3
          }
      }
  };
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };
    const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a navigation item is clicked
  };
  return (
    <Fragment>
    
  {/* <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div> */}
 
 <header className="header-area header-sticky wow slideInDown"  data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
           
            <a href="index.html" className="logo">
              <img src="assets/images/logo.png"/>
            </a>
         
            <ul className={`nav ${isMenuOpen ? 'show' : ''}`}>
              <li className="scroll-to-section"><a href="#top" 
               className="active"
              >Home</a></li>
              <li className="scroll-to-section" onClick={handleMenuItemClick}><a href="#services">Services</a></li>
              <li className="scroll-to-section" onClick={handleMenuItemClick}><a href="#about">About</a></li>
              <li className="scroll-to-section" onClick={handleMenuItemClick}><a href="#portfolio">Portfolio</a></li>
              <li className="scroll-to-section" onClick={handleMenuItemClick}><a href="#video">Videos</a></li> 
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


  <div className="main-banner" id="top">
  {/* <OwlCarousel    loop={true}
        center= {true}
        items= {2}
        margin={ 0}
        autoplay={ true}
        dots={ true}
        autoplayTimeout ={8500}
        smartSpeed={ 450}
        nav={ false}
       
        > */}
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 align-self-center">
            <OwlCarousel  
              loop={true}
        center={true}
        items={1}
         margin={50}
        autoplay={true}
        dots={true}
         
        autoplayTimeout ={8500}
        smartSpeed={450}
        nav={ false}
        //  className="owl-carousel owl-banner"
        > 
              {/* <div className="owl-carousel owl-banner"> */}
                <div className="item header-text">
                  <h6>Welcome to Onix Digital</h6>
                  <h2>Build <em>your website</em> the best in <span>SEO</span>?</h2>
                  <p>This is a professional looking HTML Bootstrap 5 website template brought to you by TemplateMo website.</p>
                  <div className="down-buttons">
                    <div className="main-blue-button-hover">
                      <a href="#contact">Message Us Now</a>
                    </div>
                    <div className="call-button">
                      <a href="#"><i className="fa fa-phone"></i> 010-020-0340</a>
                    </div>
                  </div>
                </div>
                <div className="item header-text">
                  <h6>Online Marketing</h6>
                  <h2>Get the <em>best ideas</em> for <span>your website</span></h2>
                  <p>You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites. Contact us for more info. Thank you.</p>
                  <div className="down-buttons">
                    <div className="main-blue-button-hover">
                      <a href="#services">Our Services</a>
                    </div>
                    <div className="call-button">
                      <a href="#"><i className="fa fa-phone"></i> 090-080-0760</a>
                    </div>
                  </div>
                </div>
                <div className="item header-text">
                  <h6>Video Tutorials</h6>
                  <h2>Watch <em>our videos</em> for your <span>projects</span></h2>
                  <p>Please <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little via PayPal if this digital marketing HTML template is useful for you. Thank you.</p>
                  <div className="down-buttons">
                    <div className="main-blue-button-hover">
                      <a href="#video">Watch Videos</a>
                    </div>
                    <div className="call-button">
                      <a href="#"><i className="fa fa-phone"></i> 050-040-0320</a>
                    </div>
                  </div>
                </div>
              {/* </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </OwlCarousel> */}
  </div>

  <div id="services" className="our-services section">
    <div className="services-right-dec">
      <img src="assets/images/services-right-dec.png" alt=""/>
    </div>
    <div className="container">
      <div className="services-left-dec">
        <img src="assets/images/services-left-dec.png" alt=""/>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>We <em>Provide</em> The Best Service With <span>Our Tools</span></h2>
            <span>Our Services</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
        <OwlCarousel    loop={true}
        center= {true}
        items= {3}
        margin={ 50}
        autoplay={ true}
        dots={ true}
        autoplayTimeout ={8500}
        smartSpeed={ 450}
        nav={ false}
       
        >
          {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>Learn More about our Guidelines</h4>
              <div className="icon"><img src="assets/images/service-icon-01.png" alt=""/></div>
              <p>Feel free to use this template for your business</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>Develop The Best Strategy for Business</h4>
              <div className="icon"><img src="assets/images/service-icon-02.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>UI / UX Design and Development</h4>
              <div className="icon"><img src="assets/images/service-icon-03.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>Discover &amp; Explore our SEO Tips</h4>
              <div className="icon"><img src="assets/images/service-icon-04.png" alt=""/></div>
              <p>Feel free to use this template for your business</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>Optimizing your websites for Speed</h4>
              <div className="icon"><img src="assets/images/service-icon-01.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>See The Strategy In The Market</h4>
              <div className="icon"><img src="assets/images/service-icon-02.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>Best Content Ideas for your pages</h4>
              <div className="icon"><img src="assets/images/service-icon-03.png" alt=""/></div>
              <p>Feel free to use this template for your business</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>Optimizing Speed for your web pages</h4>
              <div className="icon"><img src="assets/images/service-icon-04.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>Accessibility for mobile viewing</h4>
              <div className="icon"><img src="assets/images/service-icon-01.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>Content Ideas for your next project</h4>
              <div className="icon"><img src="assets/images/service-icon-02.png" alt=""/></div>
              <p>Feel free to use this template for your business</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>UI &amp; UX Design &amp; Development</h4>
              <div className="icon"><img src="assets/images/service-icon-03.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="item">
              <h4>Discover the digital marketing trend</h4>
              <div className="icon"><img src="assets/images/service-icon-04.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            {/* </div> */}
          </OwlCarousel>
        </div>
      </div>
    </div>
  </div>

  <div id="about" className="about-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="left-image">
            <img src="assets/images/about-left-image.png" alt="Two Girls working together"/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-heading">
            <h2>Grow your website with our <em>SEO Tools</em> &amp; <span>Project</span> Management</h2>
            <p>You can browse free HTML templates on Too CSS website. Visit the website and explore latest website templates for your projects.</p>
            <div className="row">
              <div className="col-lg-4">
                <div className="fact-item">
                  <div className="count-area-content">
                    <div className="icon">
                      <img src="assets/images/service-icon-01.png" alt=""/>
                    </div>
                    <div className="count-digit">320</div>
                    <div className="count-title">SEO Projects</div>
                    <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fact-item">
                  <div className="count-area-content">
                    <div className="icon">
                      <img src="assets/images/service-icon-02.png" alt=""/>
                    </div>
                    <div className="count-digit">640</div>
                    <div className="count-title">Websites</div>
                    <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fact-item">
                  <div className="count-area-content">
                    <div className="icon">
                      <img src="assets/images/service-icon-03.png" alt=""/>
                    </div>
                    <div className="count-digit">120</div>
                    <div className="count-title">Satisfied Clients</div>
                    <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <div id="portfolio" className="our-portfolio section">
    <div className="portfolio-left-dec">
      <img src="assets/images/portfolio-left-dec.png" alt=""/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>Our Recent <em>Projects</em> &amp; Case Studies <span>for Clients</span></h2>
            <span>Our Portfolio</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-carousel owl-portfolio">
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-01.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a rel="sponsored" href="https://templatemo.com/tm-564-plot-listing" target="_parent"><h4>First Project</h4></a>
                    <span>Plot Listing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-02.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Project Two</h4></a>
                    <span>SEO &amp; Marketing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-03.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a rel="sponsored" href="https://templatemo.com/tm-562-space-dynamic" target="_parent"><h4>Third Project</h4></a>
                    <span>Space Dynamic SEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-04.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Project Four</h4></a>
                    <span>Website Marketing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-01.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Fifth Project</h4></a>
                    <span>Digital Assets</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-02.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Sixth Project</h4></a>
                    <span>SEO &amp; Marketing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-03.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>7th Project</h4></a>
                    <span>SEO &amp; Marketing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-04.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>8th Project</h4></a>
                    <span>SEO &amp; Marketing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-01.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>9th Project</h4></a>
                    <span>SEO &amp; Marketing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-02.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Project Ten</h4></a>
                    <span>SEO &amp; Marketing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-03.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Project Eleven</h4></a>
                    <span>SEO &amp; Marketing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/portfolio-04.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>12th Project</h4></a>
                    <span>SEO &amp; Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}

  {/* <div id="pricing" className="pricing-tables">
    <div className="tables-left-dec">
      <img src="assets/images/tables-left-dec.png" alt=""/>
    </div>
    <div className="tables-right-dec">
      <img src="assets/images/tables-right-dec.png" alt=""/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>Select a suitable <em>plan</em> for your next <span>projects</span></h2>
            <span>Our Plans</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="item first-item">
            <h4>Starter Plan</h4>
            <em>$160/mo</em>
            <span>$140</span>
            <ul>
              <li>10 Projects</li>
              <li>100 GB space</li>
              <li>20 SEO checkups</li>
              <li>Basic Support</li>
            </ul>
            <div className="main-blue-button-hover">
              <a href="#">Get Started</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item second-item">
            <h4>Standard Plan</h4>
            <em>$240/mo</em>
            <span>$200</span>
            <ul>
              <li>20 Projects</li>
              <li>200 GB space</li>
              <li>50 SEO checkups</li>
              <li>Pro Support</li>
            </ul>
            <div className="main-blue-button-hover">
              <a href="#">Get it Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item third-item">
            <h4>Advanced Plan</h4>
            <em>$360/mo</em>
            <span>$280</span>
            <ul>
              <li>30 Projects</li>
              <li>300 GB space</li>
              <li>100 SEO checkups</li>
              <li>Best Support</li>
            </ul>
            <div className="main-blue-button-hover">
              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="subscribe" className="subscribe">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h2>Know Your Website SEO Score by Email</h2>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="video" className="our-videos section">
    <div className="videos-left-dec">
      <img src="assets/images/videos-left-dec.png" alt=""/>
    </div>
    <div className="videos-right-dec">
      <img src="assets/images/videos-right-dec.png" alt=""/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="naccs">
            <div className="grid">
              <div className="row">
                <div className="col-lg-8">
                  <ul className="nacc">
                    <li className="active">
                      <div>
                        <div className="thumb">
                          <iframe width="100%" height="auto" src="https://www.youtube.com/embed/JynGuQx4a1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          <div className="overlay-effect">
                            <a href="#"><h4>Project One</h4></a>
                            <span>SEO &amp; Marketing</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="thumb">
                          <iframe width="100%" height="auto" src="https://www.youtube.com/embed/RdJBSFpcO4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          <div className="overlay-effect">
                            <a href="#"><h4>Second Project</h4></a>
                            <span>Advertising &amp; Marketing</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="thumb">
                          <iframe width="100%" height="auto" src="https://www.youtube.com/embed/ZlfAjbQiL78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          <div className="overlay-effect">
                            <a href="#"><h4>Project Three</h4></a>
                            <span>Digital &amp; Marketing</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="thumb">
                          <iframe width="100%" height="auto" src="https://www.youtube.com/embed/mx1WseE7-0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          <div className="overlay-effect">
                            <a href="#"><h4>Fourth Project</h4></a>
                            <span>SEO &amp; Advertising</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <div className="menu">
                    <div className="active">
                      <div className="thumb">
                        <img src="assets/images/video-thumb-01.png" alt=""/>
                        <div className="inner-content">
                          <h4>Project One</h4>
                          <span>SEO &amp; Marketing</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumb">
                        <img src="assets/images/video-thumb-02.png" alt=""/>
                        <div className="inner-content">
                          <h4>Second Project</h4>
                          <span>Advertising &amp; Marketing</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumb">
                        <img src="assets/images/video-thumb-03.png" alt="Marketing"/>
                        <div className="inner-content">
                          <h4>Project Three</h4>
                          <span>Digital &amp; Marketing</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumb">
                        <img src="assets/images/video-thumb-04.png" alt="SEO Work"/>
                        <div className="inner-content">
                          <h4>Fourth Project</h4>
                          <span>SEO &amp; Advertising</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}

  <div id="contact" className="contact-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="section-heading">
            <h2>Feel free to <em>Contact</em> us via the <span>HTML form</span></h2>
            <div id="map">
            </div>
            <div className="info">
              <span><i className="fa fa-phone"></i> <a href="#">010-020-0340<br/>090-080-0760</a></span>
              <span><i className="fa fa-envelope"></i> <a href="#">info@company.com<br/>mail@company.com</a></span>
            </div>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <form id="contact" action="" method="get">
            <div className="row">
              <div className="col-lg-12">
                <fieldset>
                  <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="text" name="website" id="website" placeholder="Your Website URL" required=""/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="main-button">Submit Request</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="contact-dec">
      <img src="assets/images/contact-dec.png" alt=""/>
    </div>
    <div className="contact-left-dec">
      <img src="assets/images/contact-left-dec.png" alt=""/>
    </div>
  </div>

  <div className="footer-dec">
    <img src="assets/images/footer-dec.png" alt=""/>
  </div>

  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="about footer-item">
            <div className="logo">
              <a href="#"><img src="assets/images/logo.png" alt="Onix Digital TemplateMo"/></a>
            </div>
            <a href="#">info@company.com</a>
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-behance"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="services footer-item">
            <h4>Services</h4>
            <ul>
              <li><a href="#">SEO Development</a></li>
              <li><a href="#">Business Growth</a></li>
              <li><a href="#">Social Media Managment</a></li>
              <li><a href="#">Website Optimization</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="community footer-item">
            <h4>Community</h4>
            <ul>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Business Ideas</a></li>
              <li><a href="#">Website Checkup</a></li>
              <li><a href="#">Page Speed Test</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="subscribe-newsletters footer-item">
            <h4>Subscribe Newsletters</h4>
            <p>Get our latest news and ideas to your inbox</p>
            <form action="#" method="get">
              <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>
              <button type="submit" id="form-submit" className="main-button "><i className="fa fa-paper-plane-o"></i></button>
            </form>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="copyright">
            <p>Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved. 
            <br/>
            Designed by <a rel="nofollow" href="https://templatemo.com" title="free CSS templates">TemplateMo</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </Fragment>
    
  )
}
