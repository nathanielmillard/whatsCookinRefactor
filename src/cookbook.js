class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  findRecipes(searchText) {
     return this.recipes.filter((recipe)=>{
      let ingredientNames = recipe.ingredients.map((ingredient)=>{
        return ingredient.name
      })
      return recipe.name.toLowerCase().includes(searchText) || recipe.tags.includes(searchText) || ingredientNames.includes(searchText)
    })
  }
}

export default Cookbook;
