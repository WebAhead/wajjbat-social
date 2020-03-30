import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Feed, AddPost, Profile, ViewPost, NotFound, Followers } from './pages';
import "./App.css";
import { scrollToBottom } from "react-scroll/modules/mixins/animate-scroll";


function App() {
  const [scrollToComments,setScrollToComments] = React.useState(false)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/AddPost" component={AddPost} />
          <Route path="/ViewPost"><ViewPost scrollToComments={scrollToComments}/></Route>
          <Route path="/Profile" component={Profile} />
          <Route path="/Followers" component={Followers} />

          <Route path="/" exact><Feed setScrollToComments={setScrollToComments}/></Route>
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
