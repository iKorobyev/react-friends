import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Store from "./store/store";
import Webpage from "./webpage";

const store = Store();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Webpage />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
