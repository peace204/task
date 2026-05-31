import React, { useState } from "react";

function ColorBox(props) {
    return (
        <div
        style={{
            backgroundColor: props.color,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <button onClick={props.changeColor}>
        Change Background Color
        </button>
        </div>
    );
}

function App() {
    const [bgColor, setBgColor] =
    useState("lightblue");

    function changeBackground(){
        if (bgColor === "lightblue"){
            setBgColor("lightgreen");
        } else {
            setBgColor("lightblue");
        }
    }
    return (
        <ColorBox color={bgColor}
        changeColor={changeBackground} />
    );
}

export default App;