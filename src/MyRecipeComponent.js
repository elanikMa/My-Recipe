function MyRecipeComponent({labelProps, caloriesProps, imageProps, ingredientsProps, urlRecipeProps}) {

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

<button  className="button-directions">
    <a href={ urlRecipeProps } target="_blank" rel="noreferrer"> 
    directions
    </a>
</button>
</div>
</div>
)
}

export default MyRecipeComponent;
