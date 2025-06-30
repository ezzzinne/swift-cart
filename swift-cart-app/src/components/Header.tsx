import Phone from "../assets/phone-icon.svg";
import Mail from "../assets/mail-icon.svg";
import Instagram from "../assets/instagram.svg";
import Youtube from "../assets/youtube.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";

const Header = () => {
    return (
        <>
            <header className="header-container">
                <section className="first-item">
                    <div className="item">
                        <img src={Phone} alt="Phone icon" />
                        <p>(225) 555-0118</p>
                    </div>
                    <div className="item">
                        <img src={Mail} alt="Mail icon" />
                        <p>ezinne.nwani22@gmail.com</p>
                    </div>
                </section>
                <section className="second-item">
                    <p>Follow Us  and get a chance to win 13.2% off</p>
                </section>
                <section className="third-item">
                    <p>Follow Us  :</p>
                    <div>
                        <img src={Instagram} alt="Instagram icon" />
                        <img src={Youtube} alt="Youtube icon" />
                        <img src={Facebook} alt="Facebook icon" />
                        <img src={Twitter} alt="Twitter icon" />
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;