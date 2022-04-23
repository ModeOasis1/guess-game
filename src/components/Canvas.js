import React, { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

const Canvas = () => {
    const [sendImg, setSendImg] = useState(null);
    const canvasRef = useRef(null);
    useEffect(() => {
        window.localStorage.setItem("img", sendImg);
        window.dispatchEvent(new Event("storage"));
    })

    const clears = () => {
        canvasRef.current.clear();
    };
    const backDraw = () => {
        canvasRef.current.undo();
    };
    const sendImage = () => {

        try {
            setSendImg(canvasRef.current.getDataURL());
            alert("Image send")
        } catch (error) {
            console.log(error)
        }
        window.localStorage.setItem("img", sendImg);
    };

    return (
        <section>
            <div className="canvas_container">
                <CanvasDraw ref={canvasRef} brushRadius={2} />
            </div>
            <button onClick={clears}>Clear All</button>
            <button onClick={backDraw}>Back</button>
            <button onClick={sendImage}>Send to user</button>
        </section>
    );
};
export default Canvas;
