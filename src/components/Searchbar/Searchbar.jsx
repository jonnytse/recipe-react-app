import React, { Component } from "react";
import styles from "./Searchbar.module.scss";

class Searchbar extends Component {
    render() {
        return (
            <div className={styles.searchbar}>
                <form>
                    <input type="text"/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Searchbar;