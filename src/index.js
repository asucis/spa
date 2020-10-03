import React from "react";
import ReactDOM from "react-dom";
import "./scss/App.scss";
import App from "./App";
// import Wechat from "./screens/Wechat";
// import { Route, HashRouter, Switch } from "react-router-dom";

// const router = (
//   <HashRouter basename={process.env.PUBLIC_URL}>
//     <Switch>
//       <Route exact path={process.env.PUBLIC_URL + "/"} component={App} />
//       <Route path={process.env.PUBLIC_URL + "/weixin"} component={Wechat} />
//     </Switch>
//   </HashRouter>
// );

ReactDOM.render(<App />, document.getElementById("root"));
