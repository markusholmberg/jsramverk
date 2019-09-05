import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Me from './Me';
import Reports from './Reports';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>JSRamverk Me-sida</h1>
                <Router>
                  <div>
                      <ul>
                          <li>
                            <NavLink activeClassName="active" exact={true} to="/">Hem</NavLink>
                          </li>
                          <li>
                            <NavLink activeClassName="active" to="/reports">Rapporter</NavLink>
                          </li>
                        </ul>
                        <hr />
                    <Route exact path="/" component={Me} />
                    <Route path="/reports" component={Reports} />
                  </div>
                </Router>
            </div>
        );
    }
}
