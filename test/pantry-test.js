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
  });

  it('should store a user pantry', () => {
    expect(pantry.userIngredients.length).to.equal(users[0].pantry.length);
  });

  it.only('Should update the user pantry when a recipe has been cooked', () => {
    pantry.updatePantry(recipe1);
    pantry.createPantry(ingredientsData);
    expect(pantry.userPantry[1].amount).to.equal(0);
  });

  it('should add name and estimated cost to pantry item', () => {
    pantry.createPantry(ingredientsData);
    expect(pantry.userIngredients[0]).to.deep.equal(pantryItem);
  })
})
