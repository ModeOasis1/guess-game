import "../assets/css/home.css";
import React from "react";
import bg_image from "../assets/images/bg1.jpeg";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home">
            <img src={bg_image} alt={"background"} />
            <div className="container">
                <h1 className="title">Draw, Guess, Win</h1>
                <p>
                    Draw and Guess Online is the funniest,
                    the most colorful and creative game for Android.
                    You can draw and guess in real time.
                </p>
                <button className="btn-login"> <Link to={"/Player"}>Let`s play!</Link></button>
            </div>
        </section>
    );
};

export default Home;
