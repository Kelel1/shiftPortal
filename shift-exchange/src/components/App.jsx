
import React from 'react';
import '../styles/styles.scss';
import { Container } from 'semantic-ui-react'
import Register from './Register';
import Login from './Login';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Planner from './Planner';
import { Provider } from 'react-redux';
import store from '../store/store';

const unsubscribe = store.subscribe( () => {
  console.log('New state is ', store.getState());
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container className='container'>    
          <Nav />
          <Switch>
            <Route path='/register' exact component={Register}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/planner' exact component={Planner}></Route>
          </Switch>   
        </Container>
      </Router>

    </Provider>
    
    
  )
}

export default App;
