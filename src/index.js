import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DrumMachine from "./DrumMachine";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<DrumMachine />, document.getElementById("root"));
serviceWorker.unregister();
