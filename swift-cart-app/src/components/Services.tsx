import Wins from '../assets/service-icon1.svg';
import Concrete from '../assets/service-icon2.svg';
import Growth from '../assets/service-icon3.svg';

const Services = () => {
    return (
        <>
            <section className="services-container">
                <section className="services-description">
                    <h4>Featured Products</h4>
                    <h3>THE BEST SERVICES</h3>
                    <p>Problems trying to resolve the conflict between </p>
                </section>
                <div className="services-wrapper">
                    <section className="service-card">
                        <img src={Wins} alt="service-icon1" />
                        <h3>Easy Wins</h3>
                        <p>Get your best looking smile now!</p>
                    </section>
                    <section className="service-card">
                        <img src={Concrete} alt="service-icon2" />
                        <h3>Concrete</h3>
                        <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                    </section>
                    <section className="service-card">
                        <img src={Growth} alt="service-icon3" />
                        <h3>Hack Growth</h3>
                        <p>Overcame any hurdle or any other problem.</p>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Services;