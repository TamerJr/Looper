import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { UserContextProvider } from "./Utiles/Context/AuthContext";
import { DBContectProvider } from "./Utiles/Context/DBContect";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <DBContectProvider>
          <App />
        </DBContectProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
