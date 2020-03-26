import React, { Component } from "react";
import { Router } from "@reach/router";
import Main from '../components/Main';
import Recipe from '../components/Recipe';

const PageNotFound = () => (<h2>Sorry, page not found</h2>);

class Routes extends Component {
    render() {
        return (
            <Router>
                {/* <Redirect noThrow from="/" to="/" /> */}
                <Main path="/" exact />
                <Recipe path="/recipe/*" />
                <PageNotFound default />
            </Router>
        );
    }
}

export default Routes;