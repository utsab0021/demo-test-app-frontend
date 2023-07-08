
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const MainBanner = () => {
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
    return (
        <>
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

                                        autoplayTimeout={8500}
                                        smartSpeed={450}
                                        nav={false}
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
        </>
    )
}

export default MainBanner