import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import WeekOne from './WeekOne';
import WeekTwo from './WeekTwo';
import './App.css';

export default class Reports extends Component {
    render() {
        return (
            <div className="reports">
                <h1>Reports</h1>
                <strong>Pick a week</strong>
                <div className="list">
                    <ul>
                      <li>
                        <NavLink activeClassName="activeReport" to="/reports/week/1">Vecka 1 </NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName="activeReport" to="/reports/week/2">Vecka 2 </NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName="activeReport" to="/reports/week/3">Vecka 3 </NavLink>
                      </li>
                    </ul>
                    <Route path="/reports/week/1" component={WeekOne} />
                    <Route path="/reports/week/2" component={WeekTwo} />
                </div>
            </div>
        )
    }
}
