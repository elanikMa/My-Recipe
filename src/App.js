import { useEffect, useState } from 'react';
import './App.css';
import food from "./food.mp4";
import MyRecipeComponent from './MyRecipeComponent';

function App() {

const API_ID = "3c69a85a";
const API_KEY = "a80682218d2d4553f75b11cd731df82b";

const [mySearch, setMySearch] = useState('');
const [myRecipe, setMyRecipe] = useState([]);
const [wordSubmit, setWordSubmit] = useState('muffin');

useEffect(() =>  {
  async function fetchData() {
  const response = await fetch (`https://api.edamam.com/search?q=${wordSubmit}&app_id=${API_ID}&app_key=${API_KEY}`);
  const data = await response.json();
  setMyRecipe(data.hits);
}
fetchData();
}, [wordSubmit] )

const finalSearch = (e) => {
e.preventDefault();
setWordSubmit(mySearch);
}

const myRecipeSearch = (e) => {
console.log(e.target.value);
setMySearch(e.target.value);
}
return (
  <div className="App">
<div className='container'> 
<video autoPlay muted> 
<source src={ food } type='video/mp4' />
</video>
<h1>Find a Recipe</h1>
</div>
<div className='container'> 
<form onSubmit={finalSearch}> 
<input onChange={myRecipeSearch} value={mySearch} placeholder='Search...' className='search' > 
</input>
</form>
<button> 
<img src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-eat-vegan-and-vegetarian-flaticons-lineal-color-flat-icons.png' className='icon' alt='icon' />
</button>
</div>
<div className='allContainer'>  
{myRecipe.map((element, index) => (
<MyRecipeComponent key={index} labelProps = {element.recipe.label} caloriesProps = {element.recipe.calories} imageProps = {element.recipe.image} ingredientsProps = {element.recipe.ingredientLines} urlRecipeProps = {element.recipe.url} />
))}
</div>
  </div>
  );
}
export default App;

