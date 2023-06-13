import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
// import { FocusScreen } from "../04-useRef/FocusScreen";
// import { Layout } from "../05-useLayoutEffect/Layout";
// import { Memorize } from "../06-memos/Memorize";
// import { MemoHook } from "../06-memos/MemoHook";
import { CallBackHook } from "../06-memos/CallBackHook";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <CallBackHook />
    </>
);
