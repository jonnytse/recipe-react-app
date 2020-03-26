import React from "react";
import styles from "./Recipe.module.scss";

const Recipe = ({location}) => {
    console.log(location.state.recipe);
    return (
        <div className={styles.recipe}>
            <p>Specific recipe</p>
            {/* {location.state} */}
        </div>
    );
}

export default Recipe;