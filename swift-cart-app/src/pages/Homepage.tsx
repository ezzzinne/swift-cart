import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

const Homepage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Hero />
            <Products />
            <Services />
            <Posts />
            <Footer />
        </>
    )
}

export default Homepage;