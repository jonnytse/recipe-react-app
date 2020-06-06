import React, { Component } from "react";  
import Searchbar from "../Searchbar";
import RecipesList from "../RecipesList";

const APP_ID = '77fb557f';
const APP_KEY = "143f9aa7bc82dcdc94f52953fe0ce3d1";

class Main extends Component {
    state = {
        recipes: []
    }

    grabRecipe = async (event) => {
        const recipeName = event.target.elements.recipeName.value;
        event.preventDefault();
        const exampleRequest = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=51&calories=591-722&health=alcohol-free`); 
        console.log(recipeName); //this is the actual text typed into searchbar
        const data = await exampleRequest.json();
        console.log(data);
        // console.log(data.hits);
        // console.log(data.hits[0].recipe.label);
        this.setState({ recipes: data.hits });
        console.log(this.state.recipes);
    }
    
    render() {
        return (
            <section>
                <Searchbar grabRecipe={this.grabRecipe}/>
                <RecipesList recipes={this.state.recipes} />    
            </section>
        );  
    }
}

export default Main;