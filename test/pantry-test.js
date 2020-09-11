import { expect } from 'chai';

import Recipe from '../src/recipe.js';
import Pantry from '../src/pantry.js';
import users from '../src/data/users.js';
import recipes from '../src/data/recipes.js';
import ingredientsData from '../src/data/ingredients.js';

let pantry;
let pantryItem;
let recipe1;
let newPantry;

describe('Pantry', () => {
  beforeEach(() => {
    pantry = new Pantry(users[0].pantry);
    pantryItem = {
      ingredient: 11477,
      name: 'zucchini squash',
      estimatedCostInCents: 742,
      amount: 1
    };
    recipe1 = new Recipe(recipes[0])
    // newPantry =
  });

  it('should store a user pantry', () => {
    expect(pantry.userIngredients.length).to.equal(users[0].pantry.length);
  });

  it.only('should remove an item from the pantry', () => {
    pantry.removeFromPantry(pantryItem);
    expect(pantry.userPantry).to.deep.equal(pantry.userPantry)
  })

  it.only('Should update the user pantry when a recipe has been cooked', () => {
    pantry.updatePantry(recipe1);
    pantry.createPantry(ingredientsData);
    console.log(pantry.userIngredients);
    expect(pantry.userPantry).to.deep.equal(newPantry);
  });

  it('should add name and estimated cost to pantry item', () => {
    pantry.createPantry(ingredientsData);
    // console.log(users[0].pantry);
    expect(pantry.userIngredients[0]).to.deep.equal(pantryItem);
  })
})
