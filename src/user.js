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

  removePantryIngridients(recipe) {
    let initArray = [];
    recipe.ingredients.forEach((item) => {
    initArray.push(`{
      "userId": this.id,
      "ingredientID": item.id,
      "ingredientModification": -(item.quantity.amount)
    }`)
    });
    fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', {
      method: 'POST',
      headers: {
  	     'Content-Type': 'application/json'
       },
       body: JSON.stringify(`{
         "userID": this.id,
         "ingredientID": item.id,
         "ingredientModification": -(item.quantity.amount)
       }`)
     })
     .then(response => response.json())
     .then(respone => console.log(response))
     .catch(error => console.log(error));
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
      let ingredientID = ingredient.id;
      if(!this.pantry.userIngredients[ingredientID] || ingredient.quantity.amount > this.pantry.userIngredients[ingredientID]) {
        notPresent.push(ingredientID);
      };
      return notPresent;
    }, []);
    // console.log(missingIngredients);
    if(missingIngredients.length === 0) {
      return 'You have the ingredients!';
    } else {
      let missing = missingIngredients.length;
      return `You still need ${missing} more ingredients.`;
    };
  }

  checkHowMuchMore(recipe) {
    let missingIngredients = recipe.ingredients.reduce((notPresent, ingredient) => {
      if(!this.pantry.userIngredients[ingredient.id] || ingredient.quantity.amount > this.pantry.userIngredients[ingredient.id]) {
        notPresent.push(ingredient);
      };
      return notPresent;
    }, []);
    let difference = missingIngredients.map(ingredient => {
      let neededIng;
      let name = recipe.ingredientsData.find(item => {
        return item.id === ingredient.id;
      });
      name = name.name;
      if (this.pantry.userIngredients[ingredient.id]) {
        neededIng = {
          id: ingredient.id,
          cost: 0,
          name: name,
          unit: ingredient.quantity.unit,
          quantityNeeded: parseFloat(ingredient.quantity.amount - this.pantry.userIngredients[ingredient.id].toFixed(2))
        }
      } else {
          neededIng = {
            id: ingredient.id,
            cost: 0,
            name: name,
            unit: ingredient.quantity.unit,
            quantityNeeded: parseFloat(ingredient.quantity.amount.toFixed(2))
          }
        }
        let ingredientItem = recipe.ingredientsData.find(item => {
          // console.log(item.name);
          // console.log(ingredient.name);
          return ingredient.id === item.id;
        });
      let totalCost = (neededIng.quantityNeeded * ingredientItem.estimatedCostInCents) / 100;
      neededIng.cost = parseFloat((totalCost).toFixed(2));
      return neededIng;
      })
      return difference;
    }

}


export default User;
