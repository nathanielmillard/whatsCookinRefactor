import { expect } from 'chai';

import Recipe from '../src/recipe.js';
import recipeData from '../src/data/recipes.js';
import ingredientsData from '../src/data/ingredients.js';

let recipe;

describe('Recipe', () => {
  beforeEach(() => {
    recipe = new Recipe(recipeData[47], ingredientsData);
  });

  it('Should have a name', () => {
    expect(recipe.name).to.equal(recipeData[47].name);
  });

  it('Should have an id', () => {
    expect(recipe.id).to.equal(recipeData[47].id);
  });

  it('Should have tags', () => {
    expect(recipe.tags).to.equal(recipeData[47].tags);
  });

  it('Should hold its own ingredient data', () => {
    expect(recipe.ingredients).to.equal(recipeData[47].ingredients);
  });

  it('Should hold its own instruction data', () => {
    expect(recipe.instructions).to.equal(recipeData[47].instructions);
  });

  it('Should take in data from ingredientsData', () => {
    expect(recipe.ingredientsData).to.equal(ingredientsData);
  });

  it('Should be able to calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost()).to.equal(41.66);
  });

});
