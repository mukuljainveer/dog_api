import React from 'react';
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Layout>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
