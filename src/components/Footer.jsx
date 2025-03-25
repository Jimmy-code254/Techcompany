const Footer = () => {
    return ( 
        <footer>
        <div className="container">
            <div className="row footer-container">

                <div className="col-md-3 footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQs</a></li>
                    </ul>
                </div>
    
            
                <div className="col-md-3 footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Email: <a href="mailto:info@primrose.com">info@primrose.com</a></li>
                        <li>Phone: <a href="tel:+1234567890">+254 740641514</a></li>
                        <li>Address: 254 Main St,Wellness City</li>
                    </ul>
                </div>
    
        
                <div className="col-md-3 footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/Primrose" target="_blank">Facebook</a></li>
                        <li><a href="https://twitter.com/Primrose" target="_blank">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/company/Primrose" target="_blank">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/Primrose" target="_blank">Instagram</a></li>
                    </ul>
                </div>
    
            
                <div className="col-md-3 footer-legal">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                        <li><a href="/cookie-policy">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
    

            <div className="footer-bottom">
                <p className="text-info">&copy; 2025 Primrose Tech. All rights reserved.</p>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;