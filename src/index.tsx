import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeProvider from "react-bootstrap/ThemeProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md"]}
    minBreakpoint="sm"
  >
    <App />
  </ThemeProvider>
);

// https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided
