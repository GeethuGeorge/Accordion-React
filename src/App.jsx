import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordion from "./Accordion";
import accordionData from "./accordionData";

function App() {
    return (
        <div className="App">
            <header>
                <img src="\public\coverimage.jpg" alt="" height="300px" width="550px" />
            </header>
            <h2>FRANCE FAQs</h2>
            <Accordion accordionData={accordionData} />
        </div>
    );
}

export default App;
