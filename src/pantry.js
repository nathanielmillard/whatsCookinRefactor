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
  }
  createPantry(data) {
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
