import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import registerServiceWorker from "./serviceWorkerRegistration";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(<App />);

registerServiceWorker();
