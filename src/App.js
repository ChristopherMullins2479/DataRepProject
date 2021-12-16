import React, { Component } from 'react';
import './App.css';
import Content from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';
import Ireland from './components/Ireland';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Counties Of Ireland</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/ireland">Ireland</Nav.Link>
              <Nav.Link href="/read">Counties</Nav.Link>
              <Nav.Link href="/create">Add County</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
        <Route path="/" exact><Home/></Route>
          <Route path="/ireland" exact><Ireland /></Route>
          <Route path="/create"><Create></Create></Route>
          <Route path="/read"><Read></Read></Route>
          <Route path={"/edit/:id"} component={Edit}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
