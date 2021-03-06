import Pantry from './pantry';

class User {
  constructor(user, pantry, ingredientsData) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.ingredientsData = ingredientsData;
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  addToRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    }
  }

  removeFromRecipesToCook(recipe) {
    const i = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(i, 1);
  }

  removePantryIngridients(recipe) {
    recipe.ingredients.forEach((item) => {
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userID": this.id,
          "ingredientID": item.id,
          "ingredientModification": -(item.quantity.amount)
        })
      })
        .then(response => response.json())
        .then(this.updateUserPantry())
        .catch(error => console.log(error));
      setTimeout(this.updateUserPantry(), 4000)
    });

  }

  addNeededPantryIngridients(recipe) {
    this.checkHowMuchMore(recipe).forEach((item) => {
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userID": this.id,
          "ingredientID": item.id,
          "ingredientModification": item.quantityNeeded
        })
      })
        .then(response => response.json())
        .then(this.updateUserPantry())
        .catch(error => console.log(error));
    });
  }

  updateUserPantry() {
    fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
      .then(response => response.json())
      .then(response => {
        let pantry = new Pantry(response.wcUsersData[this.id - 1].pantry)
        this.pantry = pantry
        this.pantry.compilePantry(this.ingredientsData)
      })
      .catch(error => console.log(error))
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
      return recipe.name.includes(strgToSrch) ||
        recipe.ingredients.find(ingredient => {
          return ingredient.name.includes(strgToSrch)
        });
    });
  }

  findMissingIngredients(recipe) {
    return recipe.ingredients.reduce((notPresent, ingredient) => {
      if (!this.pantry.userIngredients[ingredient.id] || ingredient.quantity.amount > this.pantry.userIngredients[ingredient.id]) {
        notPresent.push(ingredient);
      }
      return notPresent;
    }, []);
  }

  checkPantryIngredients(recipe) {
    this.pantry.compilePantry(this.ingredientsData);
    let missingIngredients = this.findMissingIngredients(recipe)
    if (missingIngredients.length === 0) {
      return 'You have the ingredients!';
    } else {
      let missing = missingIngredients.length;
      return `You still need ${missing} more ingredients.`;
    }
  }

  checkHowMuchMore(recipe) {
    let missingIngredients = this.findMissingIngredients(recipe);
    let difference = missingIngredients.map(ingredient => {
      let name = recipe.ingredientsData.find(item => item.id === ingredient.id);
      let neededIng = {
        id: ingredient.id,
        cost: 0,
        name: name.name,
        unit: ingredient.quantity.unit,
        quantityNeeded: parseFloat(ingredient.quantity.amount.toFixed(2))
      }
      if (this.pantry.userIngredients[ingredient.id]) {
        neededIng.quantityNeeded = parseFloat(ingredient.quantity.amount - this.pantry.userIngredients[ingredient.id].toFixed(2))
      }
      let ingredientItem = recipe.ingredientsData.find(item => ingredient.id === item.id)
      neededIng.cost = (neededIng.quantityNeeded * ingredientItem.estimatedCostInCents) / 100;
      return neededIng;
    })
    return difference;
  }
}


export default User;
