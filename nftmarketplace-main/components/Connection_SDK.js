import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://uvxxvga5mc2j.usemoralis.com:2053/server" appId="5h7z90ipCUi9YvV3WKukDhLtxfOfbyb5vs0lEJbY">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);