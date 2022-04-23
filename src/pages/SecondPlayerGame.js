import "../assets/css/secondPlayerGame.css";
import React, {useEffect, useState} from "react";
import words from "./words.json";


const SecondPlayerGame = () => {

    const [drawImage, setDrawImage] = useState([]);
    const [guess, setGuess] = useState();
    const [score, setScore] = useState();

    window.addEventListener('storage', () => {
        setDrawImage(localStorage.getItem("img"))
    });

    const sendGuess = () => {
        try {
            const word = window.localStorage.getItem('word');
            setGuess(guess);
            if((guess) === word.toLowerCase()) {
                alert('good answer');
                const rightScore = parseInt(localStorage.getItem('score')) + parseInt(localStorage.getItem('point'));
                localStorage.setItem('score', rightScore );
                setScore(rightScore);
            } else {
                alert('bad answer');
            }
            localStorage.setItem("guess", guess);
        } catch (error) {
            console.log(error)
        }
        window.localStorage.setItem("guess", guess);
    };


    return (
        <section className="secondPlayer">
            <div className="container">
                <div>
                    <b>{window.localStorage.getItem('name')}</b>
                    <p>score : {score}</p>
                    <div className='drawImageBox'>
                        <img src={drawImage}/>
                    </div>
                    <div><input onChange={(e)=>setGuess(e.target.value)} type="text"/></div>
                    <input className="btn-login" type="submit" value="send" onClick={sendGuess}/>
                </div>
            </div>
        </section>
    );
};

export default SecondPlayerGame;
