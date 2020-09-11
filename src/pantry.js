class Pantry {
  constructor(userPantry) {
    this.userPantry = userPantry;
    this.userIngredients = {};
  }

  updatePantry(recipe) {
    let allIngredients = recipe.ingredients.reduce((allIngredients, item) => {
      allIngredients[item.id] = item.quantity.amount
      return allIngredients
    }, {})
    this.userPantry.forEach(item => {
      if(allIngredients[item.ingredient]) {
        item.amount = (item.amount - allIngredients[item.ingredient])
      }
    });
    // console.log(this.userPantry);


    // let newPantry;
    // recipe.ingredients.forEach(ingredient => {
    //   let adjIngredients = this.userPantry.find(specificIngredient => {
    //     if (specificIngredient.ingredient === ingredient.id) {
    //       specificIngredient.amount = (specificIngredient.amount - ingredient.quantity.amount)
    //       return specificIngredient
    //     }
    //   })
    //   console.log(adjIngredients);
    //   return adjIngredients;
    //   newPantry = this.userPantry.map(item => {
    //     if(item.ingredient === adjIngredients.ingredient) {
    //       removeFromPantry(item);
    //       newPantry.push(adjIngredients);
    //     }
    //     return newPantry
    //   })
    //   console.log(newPantry);
    // })
    // let recipeIds = recipe.ingredients.map(item => {
    //   return item.id;
    // });
    // console.log(recipeIds);
    // let reqdIngredients = this.userPantry.filter(item => {
    //   return item.ingredient === recipe.ingredient.id;
    // })
    // console.log(reqdIngredients);
    // recipe.ingredients.forEach

  //Psuedo: Iterate (map?) through the pantry array. Check to see if the recipe ingredient id matches the pantry item id. If that is true, then subtract the recipe ingredient amount from the pantry item amount. If false, do nothing. Return the new array
  }
  createPantry(data) {
    // this.userIngredients = this.userIngredients.map((ingredient) => {
    //   let foodItem = data.find((food) => {
    //     return food.id === ingredient.ingredient;
    //   })
    //   if(foodItem === undefined) {
    //     foodItem = {
    //       name: 'not present',
    //       estimatedCostInCents: 'n/a'
    //     }
    //   }
    //   ingredient['name'] = foodItem.name;
    //   ingredient['estimatedCostInCents'] = foodItem.estimatedCostInCents;
    //   return ingredient;
    // })
    this.userIngredients = this.userPantry.reduce((pantry, ingredient) => {
      let foodItem = data.find((food) => {
         return food.id === ingredient.ingredient;
       });
      if(foodItem) {
        pantry[foodItem.name] = ingredient.amount;
      };
      return pantry;
    }, {});
  }
}

export default Pantry;
