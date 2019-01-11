import React, { Component } from 'react';
import font from './norse.regular.otf'
import './App.css';
import {Jumbotron} from'react-bootstrap';
import {Button} from'react-bootstrap';
import {Navbar} from'react-bootstrap';
import {Nav} from'react-bootstrap';
import {NavItem} from'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <body>
          <Navbar>
              <Navbar.Header>
          </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#createGod">
                  Create God
              </NavItem>
              <NavItem eventKey={2} href="#deleteGod">
                  Delete God
              </NavItem>
              </Nav>
              </Navbar>
          <Jumbotron>
            <h1 id = "rcorners1"><div class = "third"></div>Norse Pantheon</h1>
          </Jumbotron>
          </body>
        </header>
      </div>
    );
  }
}

export default App;
