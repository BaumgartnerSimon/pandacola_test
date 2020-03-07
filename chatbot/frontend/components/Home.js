// HOME

import React, {Component} from "react";
import 'whatwg-fetch';
import {AppBar, IconButton, Typography, Toolbar, Button } from "@material-ui/core";
import ChatBot from "./ChatBot";
import logo from '../assets/logo.png'

import "../css/App.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="App" style={{alignItems: "center", justifyContent: "center"}}>
                <div style={{alignItems: "center", justifyContent: "center"}}>
                    <AppBar style={{background: "#E86B62"}} className="Appbar" position="static">
                        <Toolbar>
                            <Typography variant="h6" className="title">
                                Pandacola ChatBot
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div style={{justifyContent: "center", alignContent: "center", alignItems: "center", justifyItems: "center"}}>
                    <img className="center" alt="my_image" src={logo} style={{marginBottom: "30px", marginTop: "30px", height: "95px", width: "200px"}}/>
                    <ChatBot />
                </div>
            </div>
        );
    }
}

export default Home;
