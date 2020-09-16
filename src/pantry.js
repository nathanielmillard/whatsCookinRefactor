class Pantry {
  constructor(userPantry) {
    this.userPantry = userPantry;
    this.userIngredients = {};
  }

  compilePantry() {
    this.userIngredients = this.userPantry.reduce((pantry, ingredient) => {
      if (!pantry[ingredient.ingredient]) {
        pantry[ingredient.ingredient] = ingredient.amount;
      } else {
        pantry[ingredient.ingredient] += ingredient.amount;
      }
      return pantry;
    }, {});
  }
}

export default Pantry;
