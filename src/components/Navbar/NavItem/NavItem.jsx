import React, { Component } from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";

class NavItem extends Component {
    render() {
        return (
            <p className={styles.navItem}>
                <Link to={this.props.route}>{this.props.name}</Link>
            </p>
        );
    }
}

export default NavItem;