import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Article} />
        <Route exact path="/articles" component={Article} />
        <Route exact path="/article/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
