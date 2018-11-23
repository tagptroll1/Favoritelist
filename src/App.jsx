import React, { Fragment } from "react";
import store from "./reduxStore";
import Reddit from "./RedditApp/Reddit";
import TestApp from "./TestApp/App";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "lightgrey",
  width: '100vw',
  boxShadow: '0 1px 4px 1px grey',
  padding: '10px 0'
};

const linkStyle = {
  padding: 10,
  color: "black",
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <nav style={navStyle}>
            <Link style={linkStyle} to={'/'} >Home</Link>
            <Link style={linkStyle} to={'/reddit'}>Reddit</Link>
            <Link style={linkStyle} to={'/counter'}>Counter</Link>
          </nav>
          <main>
            <Route path='/' exact={true} render={() => <h1>Welcome</h1>}/>
            <Route path='/reddit' component={Reddit}/>
            <Route path='/counter' component={TestApp}/>
          </main>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
