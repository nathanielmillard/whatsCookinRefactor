import { expect } from 'chai';

import Pantry from '../src/pantry.js';
import users from '../src/data/users.js';
import ingredientsData from '../src/data/ingredients.js';

let pantry
let pantryItem

describe.only('Pantry', () => {
  beforeEach(() => {
    pantry = new Pantry(users[0].pantry);
    pantryItem = {
      ingredient: 11477,
      name: 'zucchini squash',
      estimatedCostInCents: 742,
      amount: 1
    }
  });

  it('should store a user pantry', () => {
    expect(pantry.userIngredients.length).to.equal(users[0].pantry.length);
  });

  it( 'should add name and estimated cost to pantry item', () => {
    pantry.createPantry(ingredientsData);
    // console.log(users[0].pantry);
    expect(pantry.userIngredients[0]).to.deep.equal(pantryItem);
  })
})
