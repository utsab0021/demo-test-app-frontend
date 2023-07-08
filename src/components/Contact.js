const Contact = () => {
    return (
        <>
            <div id="contact" class="contact-us section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-heading">
                                <h2>Feel free to <em>Contact</em> us via the <span>HTML form</span></h2>
                                <div id="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48440.25732258441!2d88.45712773391651!3d23.401752523530817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f920440311b935%3A0x9cda677e2c6a67af!2sKrishnanagar%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1688823923064!5m2!1sen!2sin" style={{ width: "100%", height: "360px", frameborder: "0", allowfullscreen: "" }}></iframe>
                                </div>
                                <div class="info">
                                    <span><i class="fa fa-phone"></i> <a href="#">010-020-0340<br />090-080-0760</a></span>
                                    <span><i class="fa fa-envelope"></i> <a href="#">info@company.com<br />mail@company.com</a></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 align-self-center">
                            <form id="contact" action="" method="get">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <input type="subject" name="subject" id="subject" placeholder="Subject" autocomplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" id="message" placeholder="Your Message" required></textarea>
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" class="main-button">Submit Request</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="contact-dec">
                    <img src="assets/images/contact-dec.png" alt="" />
                </div>
                <div class="contact-left-dec">
                    <img src="assets/images/contact-left-dec.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Contact