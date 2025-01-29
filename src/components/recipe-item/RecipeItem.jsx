import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";
import sc from "./RecipeItem.module.css";

export const RecipeItem = ({ recipe }) => {
  const { favorites } = useFavorites()
  const { toggleFavorites } = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={sc.item}>
      <h2>{recipe.name}</h2>
      <img className={sc.image} src={recipe.image} alt={recipe.name}/>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists ? "remove from fav" : "add to fav"}
      </button>
    </div>
  );
};
