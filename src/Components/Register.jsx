import React, { Component } from "react";
import '../style/App.css';

export default class Register extends Component {
    onClick = () => {
        if (document.getElementById("pass").type === "password") {
            document.getElementById("pass").type = "text";
        } else {
            document.getElementById("pass").type = "password";
        }
    }
    render() {
        return (
            <div className="register">
                <h1>Register here</h1>
                <form>
                    <div className="form-group">
                        <label>Name</label>

                        <input type="text" name="name" className="form-control" placeholder="Enter your name here"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="pass" type="password" name="password" className="form-control" placeholder="Enter password here"/>
                        <i className="fa fa-eye icon" onClick={this.onClick}></i>
                    </div>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter E-Mail here"/>
                    </div>
                    <div className="form-group">
                        <label>Date of birth</label>
                        <input type="date" name="date" className="form-control" />
                    </div>
                    <input type="submit" value="Register" name="submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}
