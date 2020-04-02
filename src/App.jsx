import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Feed, AddPost, Profile, ViewPost, NotFound, Followers, Signin } from './pages';
import axios from 'axios';
import './App.css';
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';
function App() {
  const [logged, setLogged] = React.useState(false);
  const [scrollToComments, setScrollToComments] = React.useState(false);
  useEffect(async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/isLoggedIn`, {
        withCredentials: true
      });

      if (data.id) setLogged(true);
      return 1;
    } catch (error) {
      console.log(error);
      return 1;
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/AddPost">
            <AddPost logged={logged} />
          </Route>
          <Route path="/ViewPost">
            <ViewPost scrollToComments={scrollToComments} />
          </Route>
          <Route path="/Profile" component={Profile} />
          <Route path="/Followers" component={Followers} />
          <Route path="/Signin" component={Signin} />

          <Route path="/" exact>
            <Feed setScrollToComments={setScrollToComments} />
          </Route>
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
