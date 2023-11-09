import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TopFoodSection from "../../components/layout/TopFoodSection";
import Reservation from "../../components/layout/Reservation";
import ExtraSection from "../../components/layout/extraSection";
import { Helmet } from "react-helmet";

const Home = () => {
    const cards = useLoaderData()
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Banner></Banner>
            <TopFoodSection cards={cards}></TopFoodSection>
            <Reservation></Reservation>

            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;