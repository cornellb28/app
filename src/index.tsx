import * as React from "react";
import * as ReactDOM from "react-dom";
import Homepage from './App'

function render() {
  ReactDOM.render(<Homepage />, document.getElementById("root"));
}

render();

// https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided
