import React, { Component } from "react";
import styles from "./Searchbar.module.scss";

class Searchbar extends Component {
    render() {
        return (
            <div className={styles.searchbar}>
                <form onSubmit={this.props.grabRecipe}>
                    <input type="text" name="recipeName" placeholder="Search ingredients~" />
                    <button className={styles.buttonStyle}>Search</button>
                </form>
            </div>
        )
    }
}

export default Searchbar;