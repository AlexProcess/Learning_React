import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { HeroesApp } from "./heroes/Pages/HeroesApp";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HeroesApp />
    </React.StrictMode>
);
