import { expect } from 'chai';

import Pantry from '../src/pantry.js';
import users from '../src/data/users.js';
import ingredientsData from '../src/data/ingredients.js';

let pantry;

describe('Pantry', () => {
  beforeEach(() => {
    pantry = new Pantry(users[0].pantry);
  });

  it('should store a user pantry', () => {
    expect(pantry.userPantry.length).to.equal(users[0].pantry.length);
  });

  it('should convert array into ingredients object', () => {
    pantry.compilePantry(ingredientsData);
    expect(pantry.userIngredients).to.be.an('object');
  });
})
