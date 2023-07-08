const Footer = () => {
    return (
        <>
            <div className="footer-dec">
                <img src="assets/images/footer-dec.png" alt="" />
            </div>
            <footer>
                <div className="containerr">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="about footer-item">
                                <div className="logo">
                                    <a href="#"><img src="assets/images/logo.png" alt="Onix Digital TemplateMo" /></a>
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
                                    <li><a href="#contact">SEO Development</a></li>
                                    <li><a href="#contact">Business Growth</a></li>
                                    <li><a href="#contact">Social Media Managment</a></li>
                                    <li><a href="#contact">Website Optimization</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="community footer-item">
                                <h4>Community</h4>
                                <ul>
                                    <li><a href="#contact">Digital Marketing</a></li>
                                    <li><a href="#contact">Business Ideas</a></li>
                                    <li><a href="#contact">Website Checkup</a></li>
                                    <li><a href="#contact">Page Speed Test</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="subscribe-newsletters footer-item">
                                <h4>Subscribe Newsletters</h4>
                                <p>Get our latest news and ideas to your inbox</p>
                                <form action="#" method="get">
                                    <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                                    <button type="submit" id="form-submit" className="main-button "><i className="fa fa-paper-plane-o"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="copyright">
                                <p>Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved.
                                    <br />
                                    Designed by <a rel="nofollow" href="https://templatemo.com" title="free CSS templates">TemplateMo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer