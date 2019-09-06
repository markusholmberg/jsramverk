import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Me from './Me';
import Reports from './Reports';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav className="nav">
                            <ul>
                                <li>
                                    <NavLink activeClassName="active" exact={true} to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/reports">Reports</NavLink>
                                </li>
                                <li style={{float: "right", display: "block", padding: "14px 16px", color: "#ff8000"}}>
                                    JSRamverk Me-page
                                </li>
                            </ul>
                        </nav>
                    <Route exact path="/" component={Me} />
                    <Route path="/reports" component={Reports} />
                  </div>
                </Router>
            </div>
        );
    }
}
