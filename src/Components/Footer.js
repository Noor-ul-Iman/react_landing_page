function Foorter(){
return (
    <section className="Footer ">
    <div className="bar">
        <li className="bar-img"><img src={require("../images/Kallyas-Logo.png")} alt="Logo" /></li >
        <li className="bar-item"><a href="/">Home</a></li>
        <li className="bar-item"><a href="/">Services</a></li>
        <li className="bar-item"><a href="/">Works</a></li>
        <li className="bar-item"><a href="/">About Us</a></li>
        <li className="bar-item"><a href="/">Contact</a></li>
    </div>
    <div className="bar2 container-fluid">
        <div className="row">
            <div className="contact col-md-5">
                <h6>Contact</h6>
                <p>758 E. Beechwood Lane Bay Shore, NY 11706 youremail@address.com, +1-202-555-0158</p>
            </div>
            <div className="newsletter col-md-5">
                <h6>Subscribe to newsletter</h6>
                <input type="email" id="newsletterEmail" placeholder="your.address@gmail.com" />
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
    <div className="bar3 container-fluid">
        <div className="row">
            <div className="social-icons col-md-5">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank"  rel="noreferrer" className="btn btn-outline-danger">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank"  rel="noreferrer" className="btn btn-outline-primary">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="btn btn-outline-info">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
            <div className="side-footer col-md-5">
                <p>&copy; 2019. All rights are reserved.</p>
            </div>
        </div>

    </div>
</section>
)
}

export default Foorter;