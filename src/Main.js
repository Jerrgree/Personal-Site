import React, {Component} from "react";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import Links from "./Links";

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <h1 className="contentHeader">Jeremy Greenburg</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/experience">Experience</NavLink></li>
                    <li><NavLink to="/projects">Other Projects</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                </ul>
                <div className="content">
                </div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/experience" component={Experience}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/links" component={Links}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
