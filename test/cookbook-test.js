import {expect} from 'chai';


import recipeData from '../src/data/recipes';
import Cookbook from '../src/cookbook';

let cookbook;
let dummyRecipe1;
let dummyRecipe2;

describe('Cookbook', () => {
  beforeEach(() => {
    dummyRecipe1 =   {
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "name": "all purpose flour",
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "name": "baking soda",
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          }
        ],
        "instructions": [
          {
            "number": 1,
            "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
          },
          {
            "number": 2,
            "instruction": "Add egg and vanilla and mix until combined."
          }
        ],
        "tags": [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]
      };
      dummyRecipe2 =  {
          "name": "stuff cake",
          "id": 595737,
          "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
          "ingredients": [
            {
              "name": "cake flour",
              "id": 20082,
              "quantity": {
                "amount": 1.5,
                "unit": "c"
              }
            },
            {
              "name": "baking soda",
              "id": 18372,
              "quantity": {
                "amount": 0.5,
                "unit": "tsp"
              }
            }
          ],
          "instructions": [
            {
              "number": 1,
              "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
            },
            {
              "number": 2,
              "instruction": "Add egg and vanilla and mix until combined."
            }
          ],
          "tags": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre",
            "test"
          ]
        };
      cookbook = new Cookbook([dummyRecipe1, dummyRecipe2]);
  });


  it('Should have an array of all recipes', () => {
    expect(cookbook.recipes).to.deep.equal([dummyRecipe1, dummyRecipe2]);
  });

  it('Should be able to filter through ingredients and return an array of recipes', () => {
    expect(cookbook.findRecipes('baking soda')).to.deep.equal([dummyRecipe1, dummyRecipe2]);
  });

  it('Should be able to find a recipe by name', () => {
    expect(cookbook.findRecipes("stuff cake")).to.deep.equal([dummyRecipe2]);
  });

  it('Should be able to filter by tags to return an array of recipes', () => {
    expect(cookbook.findRecipes('test')).to.deep.equal([dummyRecipe2]);
  });
})

// describe('findRecipe', () => {
