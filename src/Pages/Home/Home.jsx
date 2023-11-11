import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenue from "../Popular/PopularMenue";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenue></PopularMenue>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;