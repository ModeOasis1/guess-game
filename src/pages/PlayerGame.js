import "../assets/css/game.css";
import Canvas from "../components/Canvas";
import React, { useCallback, useEffect, useRef, useState } from "react";
import words from "./words.json";
import Answer from "../components/Answer";

const PlayerGame = (props) => {
    const [word, setWord] = useState();
    const [guess, setGuess] = useState([]);

    window.addEventListener('storage', () => {
        const guess1 = localStorage.getItem("guess");

        if(guess1 !== null && guess1){
            setGuess(guess1);
        }
    });

    const name = window.localStorage.getItem('name');
    const score = window.localStorage.getItem('score');

    const easy = () => {
        localStorage.setItem('point', '1');
        const word1 = words.easy[Math.floor(Math.random() * words.easy.length)]
        setWord(word1);
        localStorage.setItem('word', word1);
    }
    const medium = () => {
        localStorage.setItem('point', '3');
        const word1 = words.medium[Math.floor(Math.random() * words.medium.length)]
        setWord(word1);
        localStorage.setItem('word', word1);
    }
    const hard = () => {
        localStorage.setItem('point', '5');
        const word1 = words.hard[Math.floor(Math.random() * words.hard.length)]
        setWord(word1);
        localStorage.setItem('word', word1);
    }

    return (
        <section className="page_game">
            <h1>Welcome To The Game {name}</h1>
            <div className="game">
                <div className="canvas">
                    <Canvas />
                </div>

                <div>

                    <div className="levels">
                        <h3>Easy: 3-4 letters</h3>
                        <h3>Medium: 5 letters</h3>
                        <h3>Hard: 6 or more letters</h3>
                    </div>

                    <button className="home_button" onClick={easy}>
                        Easy
                    </button>
                    <button className="home_button" onClick={medium}>
                        Medium
                    </button>
                    <button className="home_button" onClick={hard}>
                        Hard
                    </button>
                    <hr />
                    <br />
                </div>

                <div>Word to drew : {word}</div>

                <input type='text' disabled value={guess} />

                <div> Score : {score}</div>
            </div>
        </section>
    );
};
export default PlayerGame;
