import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

import Layout from './hocs/Layout'
import Dashboard from './containers/Dashboard'
import CreateProject from './containers/CreateProject'


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/dashboard' Component={Dashboard}></Route>
            <Route exact path='/create/project' Component={CreateProject}></Route>
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
