// import React, { Component } from 'react';
// import styles from './App.module.scss';
// import Header from '../../components/Header';
// import Searchbar from '../../components/Searchbar';


// class App extends Component {


//   grabRecipe = (event) => {
//     const recipeName = event.target.elements.recipeName.value;
//     event.preventDefault();
//     console.log(recipeName);
//   }

//   render () {
//     return (
//       <div className={styles.App}>
//         <Header />
//         <Searchbar 
//           grabRecipe={this.grabRecipe}/>
//       </div>
//     );
//   }
// }

// export default App;




import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
// import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Searchbar';

const APP_ID = '77fb557f';
const APP_KEY = "143f9aa7bc82dcdc94f52953fe0ce3d1";

class App extends Component {
  state = {
    recipes: [],
  }

  grabRecipe = async (event) => {
    const recipeName = event.target.elements.recipeName.value;
    event.preventDefault();
    const exampleRequest = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`); 
    console.log(recipeName);

    const data = await exampleRequest.json();
    console.log(data);
    console.log(data.hits);
    // console.log(data.hits[0].recipe.label);
    this.setState({ recipes: data.hits });
    console.log(this.state.recipes);
  }

  render () {
    return (
      <div className={styles.App}>
        <Header />
        {/* <Navbar /> */}
        <Searchbar 
          grabRecipe={this.grabRecipe}/>
          {this.state.recipes.map((recipe) => {
            return (
              <div>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                <p key={recipe.recipe.url}>{ recipe.recipe.label }</p>
              </div>  
            )
          })}
      </div>
    );
  }
}

export default App;






