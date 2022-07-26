import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided
