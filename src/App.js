import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/index';

import './globalStyle.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
