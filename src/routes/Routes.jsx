import React, { Component } from "react";
// import { Router, Redirect, globalHistory } from "@reach/router";
import { Router, Redirect } from "@reach/router";
import App from '../container/App/App';
import Recipe from '../components/Recipe';

const PageNotFound = () => (<h2>Sorry, page not found</h2>);

class Routes extends Component {
    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="/" />
                <App path="/" exact />
                <Recipe path="/recipe" />
                <PageNotFound default />
            </Router>
        );
    }
}

export default Routes;