import React, { useEffect, useRef, useState } from "react";

const Answer = () => {
    const [guess, setGuess] = useState('')

    useEffect(() => {
        const answer = window.localStorage.getItem("guess");
        setGuess(answer)
    })

    return (
        <input type='text' disabled value={guess} />
    )
}
export default Answer