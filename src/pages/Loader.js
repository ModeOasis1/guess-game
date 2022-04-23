import "../assets/css/loader.css";
import React from "react";
import axios from "axios";





const Loader = () => {

    console.log(window.localStorage.getItem('name'));
    const baseURL = "http://localhost:4000/startGame";

    const ifStartGame = () => {
        axios.get(baseURL).then((res) => {
            if(res.data === 'start')
                window.location = '/firstPlayerGame';
        }).catch((err) => {
            console.log("Server respondend with error: ", err);
        })
    }

    const interval = setInterval(() => {
        ifStartGame();
    }, 3000);

    return (
        <section className="loader-page">
            <div className="loader"></div>
            <p>Waiting for more player...</p>
        </section>
    );
};

export default Loader;
