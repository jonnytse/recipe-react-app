// eslint-disable-next-line
import React, { Component } from "react";
import styles from './FavouriteList.module.scss';
import { firestore } from "../../firebase";


class FavouriteList extends Component {
    state = {
        recipes: [],
    }
    
    // componentDidMount() {
    //     firestore
    //     .collection("fave_recipes")
    //     .get()
    //     .then((query) => {
    //         const newRecipes = query.docs.map(doc => doc.data());
    //         this.setState({
    //             recipes: newRecipes,
    //         });
    //     })
    // }

    componentDidMount() {
        firestore
        .collection('fave_recipes')
        .get()
        .then((query) => {
            const newRecipes = query.docs.map(doc => doc.data());
            console.log(newRecipes);  
            this.setState({
                recipes: newRecipes,
            });
            console.log(newRecipes[0].description);
        })
    }

    render() {
        return (
            <>  
            <div className="favouriteContainer">
            
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