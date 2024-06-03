import Banner from "../../layout/layout.banner";
import Faq from "../../layout/layout.faq";
import Services from "../../layout/layout.services";
import Carousel from "../../layout/layout.carousel";
import WhyUs from "../../layout/layout.whyus";

const Home = () => {
    return (
        <>
            <Services />
            <WhyUs />
            <Carousel />
            <Banner />
            <Faq />
        </>
    );
};

export default Home;