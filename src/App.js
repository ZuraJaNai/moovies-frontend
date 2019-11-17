import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { initializeMoovies } from "./actions/moovieActions";
import Navigation from "./components/Navigation";
import PageNotFound from "./components/PageNotFound";
import Board from "./components/Board";
import MoovieInfo from "./components/MoovieInfo";
import MoovieAdd from "./components/MoovieAdd";
import SearchResult from "./components/SearchResult";

store.dispatch(initializeMoovies());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Board} />
            <Route exact path="/search" component={SearchResult} />
            <Route exact path="/add" component={MoovieAdd} />
            <Route exact path="/info/:id" component={MoovieInfo} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
