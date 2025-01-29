import { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/Recipe.api";

const defaultValue = {
  name: "",
  image: "",
}

export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(defaultValue);

  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue)
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Create new recipe</p>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
