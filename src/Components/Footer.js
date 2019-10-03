import React from 'react'

function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <i className="fab fa-delicious footer-logo "></i><span className="footer-logo">STRWEAR</span>
                        <p className="text-left">This Street Wear clothing and skater website is supplied to you by Anita Ewesiobi, sole creator and founder. For any copyright rights, license requirements, or hiring inquiries, feel free to contact Anita Ewesiobi directly through email, phone or linkedin.</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Features</h3>
                        <p>Quality Fabric</p>
                        <p>Patented Design</p>
                        <p>Custom Styles</p>
                        <p>Highly Rated</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Quick Contact</h3>
                        <p><i className="fas fa-phone-square footer-icon"></i>+1 123 456 789</p>
                        <p><i className="fas fa-phone-square footer-icon"></i>+1 123 456 789</p>
                        <p><i className="fas fa-envelope footer-icon"></i>contact@website.com</p>
                        <p><i className="fas fa-home footer-icon"></i>xyz Road, xyz Complex</p>

                    </div>
                    <div className="col-md-3">
                        <h3>Follow Us </h3>
                        <p><i className="fab fa-facebook-f footer-icon"></i>Facebook</p>
                        <p><i className="fab fa-youtube footer-icon"></i>Youtube</p>
                        <p><i className="fab fa-linkedin footer-icon"></i>Linkedin</p>
                        <p><i className="fab fa-twitter footer-icon"></i>Twitter</p>
                    </div>
                </div>
                <hr/>
                    <p className="copyright text-center"><i className="far fa-copyright"></i> Copyright 2019 Made by Anita Ewesiobi </p>
            </div>
        </div>
    )
}

export default Footer
