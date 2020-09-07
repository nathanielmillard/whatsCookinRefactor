// import './css/base.scss';
import './css/styles.scss';

import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';
import users from './data/users';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';

const showFavorites = document.querySelector('.view-favorites');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
const welcomeMessage = document.querySelector('.greeting');

let user, pantry, cookbook; //comma syntax is interesting

window.onload = onStartup();
homeButton.addEventListener('click', cardButtonConditionals);
showFavorites.addEventListener('click', viewFavorites);
cardArea.addEventListener('click', cardButtonConditionals);

function onStartup() {
  let recipeDeck = [];
  recipeData.forEach((recipe) => {
    let instance = new Recipe(recipe, ingredientsData)
    recipeDeck.push(instance)
  });
  cookbook = new Cookbook(recipeDeck);
  pantry = new Pantry(users[0].pantry);
  user = new User(users[0], pantry);
  populateCards(cookbook.recipes);
  greetUser();
}

function populateCards(recipes) {
  cardArea.innerHTML = '';
  if (cardArea.classList.contains('all')) {
    cardArea.classList.remove('all') // what does this all do?
  }
  recipes.forEach(recipe => { // I want to break this into a more modular card function that accepts a recipe argument
    cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
    class='card'>
    <header id='${recipe.id}' class='card-header'>
    <label for='add-button' class='hidden'>Click to add recipe</label>
    <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
    <img id='${recipe.id} favorite' class='add'
    src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
    recipes to cook'>
    </button>
    <label for='favorite-button' class='hidden'>Click to favorite recipe
    </label>
    <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
    </header>
    <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
    <img id='${recipe.id}' tabindex='0' class='card-picture'
    src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
    </div>`)
  })
  getFavorites();
};

const greetUser = () => {
  welcomeMessage.innerText = `Welcome ${user.name}!`;
};

function viewFavorites() {
  if (cardArea.classList.contains('all')) {
    cardArea.classList.remove('all')
  }

  function favoriteCard(event) {
    let specificRecipe = cookbook.recipes.find(recipe => {
      if (recipe.id  === Number(event.target.id)) {
        return recipe;
      }
    })
    if (!event.target.classList.contains('favorite-active')) {
      event.target.classList.add('favorite-active');
      favButton.innerHTML = 'View Favorites';
      user.addToFavorites(specificRecipe);
    } else if (event.target.classList.contains('favorite-active')) {
      event.target.classList.remove('favorite-active');
      user.removeFromFavorites(specificRecipe)
    }
  }
  if (!user.favoriteRecipes.length) {
    favButton.innerHTML = 'You have no favorites!';
    populateCards(cookbook.recipes);
    return
  } else {
    favButton.innerHTML = 'Refresh Favorites'
    cardArea.innerHTML = '';
    user.favoriteRecipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
      class='card'>
      <header id='${recipe.id}' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
      <img id='${recipe.id}' class='add'
      src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
      recipes to cook'></button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite-active card-button'>
      </button></header>
      <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
      <img id='${recipe.id}' tabindex='0' class='card-picture'
      src='${recipe.image}' alt='Food from recipe'>
      </div>`)
    })
  }
}

function cardButtonConditionals(event) {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
  } else if (event.target.classList.contains('card-picture')) {
    displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    favButton.innerHTML = 'View Favorites';
    populateCards(cookbook.recipes);
  }
}



function displayDirections(event) {
  let newRecipeInfo = cookbook.recipes.find(recipe => {
    if (recipe.id === Number(event.target.id)) {
      return recipe;
    };
  });
  let recipeObject = new Recipe(newRecipeInfo, ingredientData);// could we be instantiating recipes earlier in the class?
  let cost = recipeObject.calculateCost();
  let costInDollars = (cost / 100).toFixed(2);// this functionality could be moved into calcualte cost
  cardArea.classList.add('all');// could be more semantically named
  let neededIngredients = [];
  recipeObject.ingredients.forEach(ingredient => {
    neededIngredients.push(`${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} ${ingredient.name}`)
  })
  let neededSteps = [];
  recipeObject.instructions.forEach(step => {
   neededSteps.push(`${step.number}. ${step.instruction} `)
  })
  cardArea.innerHTML = `<h3>${recipeObject.name}</h3>
  <img src='${recipeObject.image}' alt='Recipe image for ${recipeObject.name}'>
  <div class='all-recipe-info'>
  <h4>It will cost: ${costInDollars} </h4>
  <h5>You will need: ${neededIngredients.join(', ')} </h5>
  <h5>Instructions: ${neededSteps.join(', ')} </h5>
  </div>`;
};

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
    })
  } else return
}
