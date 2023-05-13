import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Assets/css/styles.css";
import "../src/Assets/css/override.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoaderProvider from "./context/loader";
import {AuthProvider} from "./context/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
      <AuthProvider>
    <LoaderProvider>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </LoaderProvider>
          </AuthProvider>
  </React.StrictMode>
);
