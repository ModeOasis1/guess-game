import "../assets/css/player.css";
import React from "react";
import axios from "axios";
import player_image from "../assets/images/player_image.jpeg"
import  { Link } from 'react-router-dom'

const baseURL = "http://localhost:4000/addPlayer";

const Player = () => {

    const [player, setPlayer] = React.useState('');

    const addPlayer = (e) => {
        e.preventDefault();
        axios.post(baseURL, {name: player}).then((res) => {
            localStorage.setItem('name', player);
            localStorage.setItem('score' , '0');
            window.location = res.data;
        }).catch((err) => {
           console.log("Server respondend with error: ", err);
        })
    }


    return (
        <section className="player-page">
            <div className="container">
                <img src={player_image} alt={"player"}/>
                <form className="form">
                    <label for="player_name">Enter Your Name </label>
                    <br/>
                    <input value={player} onChange={(e)=>setPlayer(e.target.value)} type="text"/>
                    <input className="btn-login" onClick={addPlayer} type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    );
};

export default Player;
