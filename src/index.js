import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyErrorBoundaryExample from "./Components/MyErrorBoundaryExample";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <MyErrorBoundaryExample>
        <App />
      </MyErrorBoundaryExample>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
