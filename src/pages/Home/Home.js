import "./Home.scss";
import { Intro } from "../../components/Intro";
import { Header } from "../../components/Header";

export const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Intro />
        </div>
    )
};