import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import Layout from "./Layout";
import "./styles/reset.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>
);
