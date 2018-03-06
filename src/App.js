import React, { Component } from 'react';
import { Grid, PageHeader } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import editForm from './components/editForm/editForm';
import List from './components/list/list';
import store from './store/index';
import './App.css';


const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (      
      <Grid>
        <PageHeader>
          <img className="header image" src={require('./images/movie.png')} alt="" height="100px" />
          Homemage React IMDB
        </PageHeader>
        <Router history={history}>
          <Route path="/list" exact component={List} />
          <Route path="/edit/:id" exact component={editForm} />
        </Router>
      </Grid>      
    );
  }
}

export default App;
