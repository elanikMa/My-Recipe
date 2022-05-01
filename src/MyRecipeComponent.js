import { useState } from "react";

function MyRecipeComponent({labelProps, caloriesProps, imageProps, ingredientsProps, urlRecipeProps}) {

const[directions, setDirections] = useState('DIRECTIONS');

function functionDirections() {
    setDirections({urlRecipeProps});
}


return(   
<div className='allContainer'>
<div className='allContainerCss'> 
<div className="containerHeadingLabel">   
<h2> {labelProps} </h2>
</div> 
<img src={imageProps} alt='recipe' />
<h3> {caloriesProps.toFixed()} calories </h3>
<ul className="list"> 
{ingredientsProps.map((element, index) =>(
    <li key={index}> {element} </li>
))}  
</ul>
<h3 onClick={functionDirections}> {directions} </h3>
</div>
</div>
)
}

export default MyRecipeComponent;
