import React, { Component } from "react";
import '../style/App.css';

export default class Register extends Component {
    constructor(props) {
        super(props);
        const years = [];
        const days = []
        for (var i = 2020; i > 1899; i--) {
            years.push(i)
        }

        for (i = 0; i < 32; i++) {
            days.push(i)
        }

        this.state = {
            year: years,
            day: days,
            name: "",
            password: "",
            email: "",
            selectedYear: "",
            selectedMonth: "",
            selectedDay: "",
            errors: []
        }
    }

    validate(name, email, password, selectedYear, selectedMonth, selectedDay) {
        // we are going to store errors for all fields
        // in a signle array
        const errors = [];

        if (name.length === 0) {
            errors.push("Name can't be empty");
        }

        if (email.length < 5) {
            errors.push("Email should be at least 5 charcters long");
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
            errors.push("Email should contain a @");
        }
        if (email.indexOf(".") === -1) {
            errors.push("Email should contain at least one dot");
        }

        if (password.length < 6) {
            errors.push("Password should be at least 6 characters long");
        }

        if (selectedYear === "") {
            errors.push("Please pick a year")
        }

        if (selectedMonth === "") {
            errors.push("Please pick a month")
        }

        if (selectedDay === "") {
            errors.push("Please pick a day")
        }

        return errors;
    }

    onClick = () => {
        if (document.getElementById("pass").type === "password") {
            document.getElementById("pass").type = "text";
        } else {
            document.getElementById("pass").type = "password";
        }
    }

    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }

    onChangePass = (e) => {
        this.setState({password: e.target.value})
    }

    onChangeMail = (e) => {
        this.setState({email: e.target.value})
    }

    onChangeYear = (e) => {
        this.setState({selectedYear: e.target.value})
    }

    onChangeMonth = (e) => {
        this.setState({selectedMonth: e.target.value})
    }

    onChangeDay = (e) => {
        this.setState({selectedDay: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, selectedYear, selectedMonth, selectedDay} = this.state;

        const errors = this.validate(name, email, password, selectedYear, selectedMonth, selectedDay);
        if (errors.length > 0) {
            document.getElementById("error").style.display = "block";
            this.setState({ errors });
            return;
        } else {
            console.log("You're now registered")
            document.getElementById("green").style.display = "block";
            document.getElementById("error").style.display = "none";
        }
    }

    render() {
        const { errors } = this.state;
        const months = [
            {id: 1, name: "January"},
            {id: 2, name: "February"},
            {id: 3, name: "March"},
            {id: 4, name: "April"},
            {id: 5, name: "May"},
            {id: 6, name: "June"},
            {id: 7, name: "July"},
            {id: 8, name: "August"},
            {id: 9, name: "September"},
            {id: 10, name: "October"},
            {id: 11, name: "November"},
            {id: 12, name: "December"}
        ];

        const arr = months.map((month, key) => <option key={month.id}>{month.name}</option>)
        // console.log(this.state)

        return (
            <div className="register">
                <h1>Register here</h1>
                <form onSubmit={this.onSubmit}>
                    <div id="green" className="success" style={{display: "none"}}>You're now registered!</div>
                    <div id="error" className="errors" style={{display: "none"}}>
                        {errors.map(error => (
                            <p key={error}>Error: {error}</p>
                        ))}
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter your name here" onChange={this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="pass" type="password" name="password" className="form-control" placeholder="Enter password here" onChange={this.onChangePass}/>
                        <label><input type="checkbox" name="check" onClick={this.onClick} style={{marginTop: "1em"}}/>Show password</label>
                    </div>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter E-Mail here" onChange={this.onChangeMail}/>
                    </div>
                    <div className="form-group">
                        <label>Date of birth</label>
                        <select name="year" className="form-control selcls" onChange={this.onChangeYear}>
                            <option hidden defaultValue>Select a year</option>
                            {this.state.year.map((year, index) => <option key={index}>{year}</option>)}
                        </select>
                        <select name="month" className="form-control selcls" onChange={this.onChangeMonth}>
                            <option hidden defaultValue>Select a month</option>
                            {arr}
                        </select>

                        <select name="day" className="form-control selcls" onChange={this.onChangeDay}>
                            <option hidden defaultValue>Select a day</option>
                            {this.state.day.map((day, index) => <option key={index}>{day}</option>)}
                        </select>
                    </div>
                    <input type="submit" value="Register" name="submit" className="btn btn-primary"/>
                    <div id="registered"></div>
                </form>
            </div>
        )
    }
}
