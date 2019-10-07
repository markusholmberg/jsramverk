import React, { Component } from "react";

export default class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <h1>Chat with other users</h1>
                <h2>Messages:</h2>
                <div id="all-messages" className="all-messages"></div>

                <p><strong>Write new message:</strong></p>
                <input id="new-message" className="new-message" value=""/>
            </div>
        )
    }
}
