import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h1>Food Recipe Search</h1>
            </div>
        )
    }
}

export default Header;