import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "./pages/Articles";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Article} />
        <Route exact path="/articles/saved" component={Saved} />
        <Route exact path="/article/:id" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
