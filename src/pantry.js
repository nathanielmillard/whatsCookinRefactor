class Pantry {
  constructor(userPantry) {
    this.userIngredients = userPantry
    // console.log(this.userIngredients);
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
    this.userIngredients = this.userIngredients.reduce((pantry, ingredient) => {
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
