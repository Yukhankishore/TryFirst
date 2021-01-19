import React from 'react';
import "./style.css";
import Button from "./Button";

const App = () => {
    return(
        <div>
        <h1 className="head" style={{textAlign:"center"}}>hello world</h1>
        <botton className="button">click me</botton>
        <Button title="play store" />
        <Button title="App store" />
        </div>
    );
}

export default App;