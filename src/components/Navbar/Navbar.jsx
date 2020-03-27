import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import NavItem from "./NavItem";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className={styles.navList}>
                    <NavItem route="/" name="Home" />
                    <NavItem route="/login" name="Login" />
                    <NavItem route="/private/favourites" name="Favourites List" />
                </ul>
            </nav>
        )
    }
}

export default Navbar;