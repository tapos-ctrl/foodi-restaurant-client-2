
import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Services from "./Services/services";
import Testimonials from "./Testimonials/Testimonials";
import TopFoodItems from "./TopFoodItems/TopFoodItems";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Foodi Restaurant | Home</title>
            </Helmet>
            <Banner></Banner>
            <TopFoodItems></TopFoodItems>
            <Testimonials></Testimonials>
            <Services></Services>
        </div>
    );
};

export default Home;