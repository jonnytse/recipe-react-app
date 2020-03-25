import React, { Component } from "react";
import styles from "./Recipe.module.scss";

class Recipe extends Component {
    render() {
        return (
            <div className={styles.recipe}>
                Specific Recipe
            </div>
        );
    }
}

export default Recipe;