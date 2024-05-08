const ContactComp = () =>{
    return(
        <>
        <section id="contact-section-wrapper">
            <br />
            <br />
            <br />
            <div className="contact-box-wrapper">
                <div className="contact-info-wrap">
                    <h2 className="contact-info-title">Contact Information</h2>
                    <h3 className="contact-info-sub-title">Feel free to contact us. We are here to assist you with all your needs.</h3>
                    <ul className="contact-info-details">
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <span></span><a href="https://goo.gl/maps/9x18coXGCmSscKec6" target="_blank">Jl. Kemang No. 63 RT 03 RW 06</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <span></span><a href="mailto:youngscientist.iysa@gmail.com" target="_blank">youngscientist.iysa@gmail.com</a>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span></span><a href="https://wa.me/+6281770914129" target="_blank">+62817-7091-4129</a>
                        </li>
                    </ul>
                    <ul class="contact-social-icons">
                        <li><a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/iyp.olympiad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i class="fab fa-youtube"></i></a></li>
                        <li><a href="https://www.tiktok.com/@iysa.official" target='_blank'><i class="fab fa-tiktok"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="contact-form-wrap">
                    <form action="https://formspree.io/f/xyyroqvw" method="POST">
                        <h2 className="contact-form-title">Send us a message</h2>
                        <div className="contact-form-fields">
                            <div className="contact-form-group">
                                <input type="text" name="name" className="fname" placeholder="Enter your name"/>
                            </div>
                          
                            <div className="contact-form-group">
                                <input type="email" name="email" className="email" placeholder="Enter your email"/>
                            </div>

                            <div className="contact-form-group">
                                <textarea name="message" id="" placeholder="Enter message"></textarea>
                            </div>
                            <input type="submit" value={"Send message"} className="contact-submit-button"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContactComp