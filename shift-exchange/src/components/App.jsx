
import React from 'react';
import '../styles/styles.scss';
import { Container } from 'semantic-ui-react'
import Register from './Register';
import Login from './Login';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Container>    
        <Nav />
        <Switch>
          <Route path='/register' exact component={Register}></Route>
          <Route path='/login' exact component={Login}></Route>
        </Switch>   
      </Container>
    </Router>
    
  )
}

export default App;
