import { expect } from 'chai';

import ingredientsData from '../src/data/ingredients.js';
import Pantry from '../src/pantry.js';
import User from '../src/user.js';
import recipeData from '../src/data/recipes.js';

let user1;
let user;
let pantry;
let recipe1;
let recipe2;

describe.only('User', () => {
  beforeEach(() => {
    user = {
      id: 1,
      name: 'Boba',
      pantry: [
        {
          'ingredient': 1077,
          'amount': 10
        },
        {
          'ingredient': 14412,
          'amount': 10
        },
        {
          'ingredient': 1009054,
          'amount': 3
        }]
    };
    recipe1 = {
      "name": "ice milk",
      "id": 595700,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "name": "full-fat milk",
          "id": 1077,
          "quantity": {
            "amount": 1,
            "unit": "c"
          }
        },
        {
          "name": "ice water",
          "id": 14412,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        } ]
      };
      recipe2 = {
        "name": "milk ice",
        "id": 595701,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "name": "full-fat milk",
            "id": 1077,
            "quantity": {
              "amount": 1,
              "unit": "c"
            }
          },
          {
            "name": "ice water",
            "id": 14412,
            "quantity": {
              "amount": 1,
              "unit": "tsp"
            }
          },
          {
            "name": "tapioca starch",
            "id": 93696,
            "quantity": {
              "amount": 4,
              "unit": "cup"
            }
          },
          {
            "name": "xanthan gum",
            "id": 93626,
            "quantity": {
              "amount": 2,
              "unit": "teaspoons"
            }
          }
        ]
        };
    pantry = new Pantry(user.pantry);
    user1 = new User(user, pantry);
    user1.pantry.createPantry(ingredientsData);
  });

  it('Should have an id', () => {
    expect(user1.id).to.equal(1);
  });

  it('Should have a name', () => {
    expect(user1.name).to.equal('Boba');
  });

  it('Should have a pantry', () => {
    expect(user1.pantry).to.deep.equal(pantry);
  });

  it('Should have a property of favoriteRecipes with a default value', () => {
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to add recipes to favoriteRecipes', () =>{
    user1.addToFavorites(recipeData[0])
    expect(user1.favoriteRecipes.includes(recipeData[0])).to.eql(true);
  });

  it('Should be able to remove recipes from favoriteRecipes', () =>{
    user1.removeFromFavorites(recipeData);
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to filter through favoriteRecipes by tag', () => {
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[1]);
    expect(user1.filterFavorites('antipasti')).to.eql([recipeData[0]]);
  });

  it('Should be able to search favoriteRecipes by name or ingredient', () => {
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[1]);
    expect(user1.findFavorites('egg')).to.eql([recipeData[0]]);
  });

  it('Should be able to check ingredients in User/s pantry for a given recipe', () => {
    expect(user1.checkPantry(recipe1)).to.eql('You have the ingredients!');
  });

  it('Should inform User of the ingredients that they lack for a given recipe', () => {
    expect(user1.checkPantry(recipe2)).to.eql('You still need tapioca starch and xanthan gum.');
  });
});
