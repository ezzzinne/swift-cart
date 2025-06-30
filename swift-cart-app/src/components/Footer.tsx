import FacebookIcon from '../assets/facebook-icon.svg';
import InstagramIcon from '../assets/instagram-icon.svg';
import TwitterIcon from '../assets/twitter-icon.svg';

const Footer = () => {
  return (
    <footer className="footer-container">
        <section className="footer-top-row">
            <h3>SwiftCart</h3>
            <div className="social-icons">
                <img src={FacebookIcon} alt="Facebook" />
                <img src={InstagramIcon} alt="Instagram" />
                <img src={TwitterIcon} alt="Twitter" />
            </div>
        </section>

        <section className="footer-link-grid">
            <div>
                <h5>Company Info</h5>
                <ul>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h5>Legal</h5>
                <ul>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h5>Features</h5>
                <ul>
                    <li>Business Marketing</li>
                    <li>User Analytic</li>
                    <li>Live Chat</li>
                    <li>Unlimited Support</li>
                </ul>
            </div>
            <div>
                <h5>Resources</h5>
                <ul>
                    <li>IOS & Android</li>
                    <li>Watch a Demo</li>
                    <li>Customers</li>
                    <li>API</li>
                </ul>
            </div>
            <div className="subscribe">
                <h5>Get In Touch</h5>
                <div className="input-wrapper">
                    <input type="email" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </section>

        <section className="footer-bottom-note">
            <p>Made With Love By Ezinne All Right Reserved</p>
        </section>
    </footer>
  );
};

export default Footer;
