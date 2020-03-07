// HOME

import React, {Component} from "react";
import 'whatwg-fetch';
import {AppBar, IconButton, Typography, Toolbar, Button, createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import content from '../botContent'

let conversation = [];

class ChatBot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            values: [],
            newPropositions: [],
            end: false,
        }
    }

    componentDidMount() {
        this.getProposition(content);
    }

    getButton() {
        if (!this.state.end) {
            return (
                this.state.values.map((value, index) => (
                    <Button key={index}
                            variant="contained"
                            style={{color: "white", fontFamily: 'AvenirNextW06-Bold', fontSize: 18, borderRadius: 30, backgroundColor: "#4950A6", margin: "10px"}}
                            onClick={() => {
                                conversation = conversation.concat(value);
                                this.getProposition(this.state.newPropositions[value])
                            }}>
                        {value}
                    </Button>
                ))
            )
        } else {
            return null
        }
    }

    sendConversation(conv) {
        console.log("SEEEEEEEEEND", conv);
        fetch('http://localhost:8080/postConv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                conversation: conv
            })
        }).then(res => res.json())
            .then(json => {
                console.log(json.body);
                if (json.success) {
                    console.log("Successfully saved in DB");
                } else {
                    console.log("Error");
                }
            });
    }

    getProposition(obj) {
        let keys = Object.keys(obj);
        console.log(keys[0]);
        conversation = conversation.concat(keys[0]);
        this.setState({key: keys[0], newPropositions: obj[keys[0]]});
        if (!obj[keys[0]]) {
            this.setState({end: true});
            console.log("CONVERSATION", conversation);
            this.sendConversation(conversation);
            return
        }
        for (let i = 0; obj[keys[i]]; i++) {
            let keys2 = Object.keys(obj[keys[i]]);
            this.setState({values: keys2});
        }
    }

    render() {
        return (
            <div className="Chatbot">
                <Typography style={{marginBottom: "20px", fontFamily: 'AvenirNextW06-Bold', fontSize: 30}}>{this.state.key}</Typography>
                {this.getButton()}
            </div>
        );
    }
}

export default ChatBot;
