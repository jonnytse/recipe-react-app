import React, { Component } from "react";
import styles from "./RecipesList.module.scss";

class RecipesList extends Component {
    render() {
        return (
           <div className={styles.recipelist}>
            {this.props.recipes.map((recipe) => {
                return (
                    <div key={recipe.recipe.url}>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                        <p>{ recipe.recipe.label }</p>
                    </div>  
                );
            })}
           </div>
        )
    }
}

export default RecipesList;


