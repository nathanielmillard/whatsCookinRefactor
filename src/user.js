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

  updateUserPantry(){
    fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
    .then(response => response.json())
    .then(response => {
      let pantry = new Pantry(response.wcUsersData[this.id - 1].pantry)
      this.pantry = pantry
      this.pantry.createPantry(this.ingredientsData)
    }
  )
  .catch(err => console.log(err))
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
    this.pantry.createPantry(this.ingredientsData);
    let missingIngredients = recipe.ingredients.reduce((notPresent, ingredient) => {
      let ingredientID = ingredient.id;
      if(!this.pantry.userIngredients[ingredientID] || ingredient.quantity.amount > this.pantry.userIngredients[ingredientID]) {
        notPresent.push(ingredientID);
      };
      return notPresent;
    }, []);
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
    // console.log(missingIngredients);
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
