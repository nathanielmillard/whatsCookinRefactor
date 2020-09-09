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
      this.favoriteRecipes.push(recipe);
    };
  }

  addToRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    };
  }

  removeFromRecipesToCook(recipe){
    const i = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(i, 1);
  }

  updatePantry() {
  //remove ingredient quantities from user Pantry, leave till later [ ]
  //remove recipe from array [x]
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1);
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

  checkPantryIngredients(recipe) {
    let missingIngredients = recipe.ingredients.reduce((notPresent, ingredient) => {
      let ingredientName = ingredient.name;
      if(!this.pantry.userIngredients[ingredientName] || ingredient.quantity.amount > this.pantry.userIngredients[ingredientName]) {
        notPresent.push(ingredientName);
      };
      return notPresent;
    }, []);
    if(missingIngredients.length === 0) {
      return 'You have the ingredients!';
    } else {
      let missing = missingIngredients.join(' and ');
      return `You still need more ${missing}.`;
    };
  }

  checkHowMuchMore(recipe) {
    //want to return quantity and cost to fufill a recipe.
    let missingIngredients = recipe.ingredients.reduce((notPresent, ingredient) => {
      let ingredientName = ingredient.name;
      if(!this.pantry.userIngredients[ingredientName] || ingredient.quantity.amount > this.pantry.userIngredients[ingredientName]) {
        notPresent.push(ingredient);
      };
      return notPresent;
    }, []);
    // console.log(missingIngredients);
    let difference = missingIngredients.map(ingredient => {
      if (!this.pantry.userIngredients[ingredient.id] === undefined) {
        let neededIng = {
          name: ingredient.name,
          quantityNeeded: ingredient.quantity.amount - this.pantry.userIngredients[ingredient.id]
        };
        console.log(neededIng);
      };
    })
  }
}


export default User;
