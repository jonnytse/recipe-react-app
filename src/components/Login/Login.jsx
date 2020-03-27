import React, { Component } from "react";
import styles from "./Login.module.scss";

class Login extends Component {
    render() {
        return (
            <div onClick={this.props.signIn} className={styles.google}>
                <button className={styles.googleButton}>
                    Sign in with Google
                </button>
            </div>
        );
    }
}

export default Login;