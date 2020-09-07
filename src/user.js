class User {
  constructor(user, pantry) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1)
  }

  filterFavorites(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findFavorites(strgToSrch) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(strgToSrch)
      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(strgToSrch)
      });
    });
  }

  checkPantry(recipe) {
    let missingIngredients = recipe.ingredients.reduce((notPresent, ingredient) => {
      let ingredientName = ingredient.name;
      if(ingredient.quantity.amount > this.pantry.userIngredients[ingredientName]) {
        notPresent.push(ingredientName);
      };
    }, []);
    if(missingIngredients === undefined) {
      return 'You have the ingredients!';
    } else {
      return `You still need ${missingIngredients.join(' and ')}`
    };
  }
}


export default User;
