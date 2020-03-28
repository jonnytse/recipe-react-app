// eslint-disable-next-line
import React, { Component } from "react";
import styles from './FavouriteList.module.scss';
import { firestore } from "../../firebase";


class FavouriteList extends Component {
    state = {
        recipes: [],
    }

    componentDidMount() {
        firestore
        .collection('fave_recipes')
        .get()
        .then((query) => {
            const faveRecipes = query.docs.map(doc => doc.data()); 
            this.setState({
                recipes: faveRecipes,
            });
            console.log(this.state.recipes);
        })
    }

    render() {
        return (
            <>  
                <div onClick={this.props.signOut}>
                    <button className={styles.signoutButton}>
                        Sign out
                    </button>
                </div>
            <div className={styles.favouriteContainer}>
                {this.state.recipes.map((favouriteRecipe) => {
                    return (
                        <div className={styles.favouriteRecipeCards}>
                            <div key={favouriteRecipe.url}>
                                <img className={styles.faveImageBorder} src={favouriteRecipe.picture} alt="foodPicture" />
                                <p>{ favouriteRecipe.description.length < 25 ? `${favouriteRecipe.description}` : `${favouriteRecipe.description.substring(0,30)} ...` }</p>
                                <p className={styles.urlStyling}><span>
                                        {/* <a href={favouriteRecipe.url}>{favouriteRecipe.url}</a> */}
                                        <a href={favouriteRecipe.url}>Click for recipe!</a>
                                    </span>
                                </p>
                            </div>    
                        </div>
                    );
                })}
            
            </div>
            </>    
        );
    }
}

export default FavouriteList;