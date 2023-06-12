import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import { FocusScreen } from "../04-useRef/FocusScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FocusScreen />
    </React.StrictMode>
);
