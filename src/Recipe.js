import React from "react";
import "./recipe-style.css";
// const Recipe = ({title,calorie,imageUrl,ingredients})=>{
const Recipe = props => {
  return (
    <div className="recipe-container">
      {props.recipeData.slice(0, 5).map((recipeData, index) => (
        <div className="card-style" key={index}>
          <h1 className="heading"> {recipeData.recipe.label} </h1>
          <img className="recipe-image" src={recipeData.recipe.image} alt="" />
          <h2 className="sub-heading">Ingredients </h2>
          <ol>
            {recipeData.recipe.ingredientLines.map(ingredients => (
              <li>{ingredients} </li>
            ))}
          </ol>
          <p className="cal-style">
            Total Energy {Math.round(recipeData.recipe.calories)} kcal{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
