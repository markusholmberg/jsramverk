import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import WeekOne from './Reports/WeekOne';
import WeekTwo from './Reports/WeekTwo';
import '../style/App.css';

export default class Reports extends Component {
    render() {
        return (
            <div className="reports">
                <h1>Reports</h1>
                <strong>Pick a week</strong>
                <div className="list">
                    <ul>
                      <li>
                        <NavLink activeClassName="activeReport" to="/reports/week/1">Week 1 </NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName="activeReport" to="/reports/week/2">Week 2 </NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName="activeReport" to="/reports/week/3">Week 3 </NavLink>
                      </li>
                    </ul>
                    <Route path="/reports/week/1" component={WeekOne} />
                    <Route path="/reports/week/2" component={WeekTwo} />
                </div>
            </div>
        )
    }
}
