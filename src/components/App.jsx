import { Header } from "./header/Header";
import { RecipeItem } from "./recipe-item/RecipeItem";
import { CreateRecipe } from "./create-recipe/CreateRecipe";
import { useGetRecipesQuery } from "../store/api/api";
import sc from "./App.module.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [queryTerm, setQueryTerm] = useState('');
  const { isLoading, data, error } = useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(searchTerm)
    console.log(`Searching for: ${searchTerm}`);
  };

  console.log(`Query term: ${queryTerm}`)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipes</p>;

  return (
    <section>
      <Header />
      <div className={sc.recipe_container}>
        <CreateRecipe></CreateRecipe>

        <div className={sc.search}>
          <p>Find a recipe</p>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className={sc.recipe_container}>
          {data?.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
