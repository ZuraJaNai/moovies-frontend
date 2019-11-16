import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import Navigation from "./components/Navigation";
import PageNotFound from "./components/PageNotFound";
import Board from "./components/Board";
import { initializeMoovies } from "./actions/moovies";

store.dispatch(initializeMoovies());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Board} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
