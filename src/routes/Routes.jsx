import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import App from '../container/App';
import Recipe from '../components/Recipe';
class Routes extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App} />
                <Route path="/recipe" component={Recipe} />
            </Router>
        );
    }
}

export default Routes;