import React, { useEffect, useState } from "react";
import "./styles.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "5bac6774";
  const APP_KEY = "86a74db8ec1dd4d5119c2a259b12ac2e";

  // const [state, setstate] = useState(initialState)

  const [Recipes, setRecipes] = useState([]);
  const [Search, setSearch] = useState("");
  const [query, setquery] = useState("chicken");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipe();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setquery(Search);
    setSearch("");
  };


  return (
    <div className="App">
      <h1 className="heading-font">Recipe Book </h1>
      <form className="form-style">
        <input
          type="text"
          className="ip-style"
          placeholder="Type Your Recipe here....ex-chicken"
          value={Search}
          onChange={updateSearch}
        />
        <button onClick={getSearch} className="btn-style" value="submit">
          Search
        </button>
      </form>
      <Recipe recipeData={Recipes} />
    </div>
  );
}

export default App;