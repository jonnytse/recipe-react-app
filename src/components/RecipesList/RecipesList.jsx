import React, { Component } from "react";
import styles from "./RecipesList.module.scss";

class RecipesList extends Component {
    render() {
        return (
           <div className={styles.recipelist}>
            {this.props.recipes.map((reCipe) => {
                return (
                    <div className={styles.recipeCard}>
                        <div key={reCipe.recipe.url}>
                            <img className ={styles.imgBorder} src={reCipe.recipe.image} alt={reCipe.recipe.label} />
                            <p>{ reCipe.recipe.label }</p>
                        </div>  
                        <button className={styles.viewRecipe}>Click for Recipe</button>
                    </div>
                );
            })}
           </div>
        )
    }
}

export default RecipesList;


