import React, { Component } from "react";
import { Router, globalHistory } from "@reach/router";
import Main from '../components/Main';
import Login from '../components/Login';
import Recipe from '../components/Recipe';
import firebase, { providers } from "../firebase";
import FavouriteList from '../components/FavouriteList';
import PrivateRoutes from "./PrivateRoutes";

const PageNotFound = () => (<h2>Sorry, page not found</h2>);

class Routes extends Component {
    state = {
        user: null
    }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({user: result.user})
                console.log(this.state.user.displayName + ' has logged in');
            })
            .catch(error => {
                console.log(error);
            })
    }

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({user: null});
                console.log(this.state.user);
                globalHistory.navigate("/login");
            })
    }

    render() {
        return (
            <Router>
                {/* <Redirect noThrow from="/" to="/" /> */}
                <Main path="/" exact />
                <Login path="login" signIn={this.signIn} />
                <Recipe path="/recipe/*" />
                <PrivateRoutes path="private" user={this.state.user}>
                    <FavouriteList path="favourites" user={this.state.user} signOut={this.signOut} />
                </PrivateRoutes>
                <PageNotFound default />
            </Router>
        );
    }
}

export default Routes;