import Adventure from "../../Components/Home/Adventure/Adventure";
import Banner from "../../Components/Home/Banner/Banner";
import BookNow from "../../Components/Home/BookNow/BookNow";
import Destinations from "../../Components/Home/Destinations/Destinations";
import DiscountsAvailable from "../../Components/Home/DiscountsAvailable/DiscountsAvailable";
import Testimonials from "../../Components/Home/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Adventure></Adventure>
            <Destinations></Destinations>
            <DiscountsAvailable></DiscountsAvailable>
            <BookNow></BookNow>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;