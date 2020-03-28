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
            <div className="favouriteContainer">
                {this.state.recipes.map((favouriteRecipe) => {
                    return (
                        <div>
                            <img src="{favourite.Recipe}" alt=""/>
                            <p key={favouriteRecipe.url}>{favouriteRecipe.description}</p>
                        </div>
                    );
                })}
                <div onClick={this.props.signOut}>
                    <button className={styles.signoutButton}>
                        Sign out
                    </button>
                </div>
            </div>
            </>    
        );
    }
}

export default FavouriteList;