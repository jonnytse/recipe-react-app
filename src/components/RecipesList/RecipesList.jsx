import React, { Component } from "react";
import styles from "./RecipesList.module.scss";
import { Link } from "@reach/router";

class RecipesList extends Component {
    render() {
        return (
           <div className={styles.recipelist}>
            {this.props.recipes.map(({recipe}) => {
                const recipeId = recipe.uri.split("_")[1];

                return (
                    <div className={styles.recipeCard} key={recipe.url}>
                        <div >
                            <img className ={styles.imgBorder} src={recipe.image} alt={recipe.label} />
                            <p>{ recipe.label.length < 25 ? `${recipe.label}` : `${recipe.label.substring(0, 30)} ...` }</p>
                        </div>  
                        <button className={styles.viewRecipe}>
                            <Link to={`recipe/${recipeId}`} 
                                state={{ recipe }} 
                                style={{color: '#dc143c'}}>
                                View recipe
                            </Link>
                        </button>
                    </div>
                );
            })}
           </div>
        )
    }
}

export default RecipesList;


