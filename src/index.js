import React from "react";
import ReactDOM from "react-dom";
import "./scss/App.scss";
// import App from "./App";
import Error from "./components/Error";
import Wechat from "./screens/Wechat";
import { Route, BrowserRouter as Router } from "react-router-dom";

const router = (
  <Router>
    <div>
      <Route exact path="/" component={Error} />
      <Route path="/weixin" component={Wechat} />
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));
