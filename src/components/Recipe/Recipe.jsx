import React from "react";
import styles from "./Recipe.module.scss";

const APP_ID = '77fb557f';
const APP_KEY = "143f9aa7bc82dcdc94f52953fe0ce3d1";

class Recipe extends React.Component {
    state = {
        clickedRecipe: []
    }
    componentDidMount = async () => {
        const label = this.props.location.state.recipe.label;
        const requestRecipe = await fetch(`https://api.edamam.com/search?q=${label}&app_id=${APP_ID}&app_key=${APP_KEY}&calories=591-722&health=alcohol-free`); 
        // console.log(label);
        const recipeResult = await requestRecipe.json();
        this.setState({ clickedRecipe: recipeResult });
        // console.log(this.state.clickedRecipe);
        // console.log(this.state.clickedRecipe.hits);
        // console.log(this.state.clickedRecipe.hits.recipe);
        // console.log(recipeResult);
        // console.log(data.hits);
        // console.log(data.hits[0].recipe.label);
        // this.setState({ recipes: data.hits });
        // console.log(this.state.recipes);
    }
    
    render() {
        // console.log(this.props);
        console.log(this.props.location.state);
        const recipe = this.props.location.state.recipe;
        const label = recipe.label;
        const requestImage = recipe.image;
        const website = recipe.url;
        
        return (
           <div className="container">
               <div>
                    <img className={styles.requestedImageStyling} src={requestImage} alt="foodPhotograph"/>
                    <p>{label}</p>
                    <p><span><a href={website}>{website}</a></span> </p>
               </div>
           </div>
        );
    }
};

export default Recipe;