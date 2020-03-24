import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Feed, AddPost, Profile, ViewPost,NotFound } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/AddPost" component={AddPost} />
          <Route path="/ViewPost" component={ViewPost} />
          <Route path="/Profile" component={Profile} />
          <Route path="/" component={Feed} exact/>
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
