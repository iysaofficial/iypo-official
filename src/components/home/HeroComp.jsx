const HeroComp = () => {
    return(
        <>
       
        <section className="hero-section">
            <div className="hero-container">
                <br />
                <br />
                <img src="./assets/images/logo/IYPO.png" alt=""/>
                <h1>International Youth Physics Olympiad</h1>
                <p>Registration is now open for the International Youth Physics Olympiad! <br /> Join this prestigious event and gain an unforgettable experience!
                </p>
                <br />
                <br />
                <a href="https://registrasi-iypo.vercel.app/" target="_blank" className="registration-button">Registration</a>
                
                <div className="hero-social-icon">
                    <br />
                    <br />
                    <span>Follow us</span>
                    <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="https://www.instagram.com/iyp.olympiad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></a>
                    <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></a>
                    <a href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></a>
                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroComp