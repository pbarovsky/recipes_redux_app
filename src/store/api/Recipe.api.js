import { api } from "./api";

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipe: builder.mutation({
      query: (recipe) => ({
        url: "/",
        method: "POST",
        body: recipe,
      }),
      invalidatesTags: () => [{
        type: 'Recipe',
      }]
    }),
  }),
});

export const { useCreateRecipeMutation } = recipeApi;
