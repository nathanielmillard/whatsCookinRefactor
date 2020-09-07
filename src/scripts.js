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

let domUser, pantry, cookbook; //comma syntax is interesting



const onStartup = (user) => {
  let recipeDeck = [];
  recipeData.forEach((recipe) => {
    let instance = new Recipe(recipe, ingredientsData)
    recipeDeck.push(instance)
  });
  cookbook = new Cookbook(recipeDeck);
  pantry = new Pantry(users[0].pantry);
  domUser = new User(user, pantry);
  populateCards(cookbook.recipes);
  greetUser();
}

const greetUser = () => {
  welcomeMessage.innerText = `Welcome ${domUser.name}!`;
};

const populateCards = (recipes) => {
  cardArea.innerHTML = '';
  if (cardArea.classList.contains('all')) {
    cardArea.classList.remove('all') // what does this all do?
  }
  recipes.forEach(recipe => {
    cardArea.insertAdjacentHTML('afterbegin', constructCard(recipe))
  });
  getFavorites();
};

const getFavorites = () => {
  if (domUser.favoriteRecipes.length) {
    domUser.favoriteRecipes.forEach(recipe => {
      document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
    })
  }
}

const constructCard = (recipe) => {
  return `<div id='${recipe.id}'
  class='card'>
  <header id='${recipe.id}' class='card-header'>
  <label for='add-button' class='hidden'>Click to add recipe</label>
  <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
  <img id='${recipe.id}' class='add'
  src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
  recipes to cook'></button>
  <label for='favorite-button' class='hidden'>Click to favorite recipe
  </label>
  <button id='${recipe.id}' aria-label='favorite-button' class='favorite card-button'>
  </button></header>
  <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
  <img id='${recipe.id}' tabindex='0' class='card-picture'
  src='${recipe.image}' alt='Food from recipe'>
  </div>`
  //The over use of ID's makes me nervous but idk if it's a real issue
};

const favoriteCard = (event) => {
  let specificRecipe = cookbook.recipes.find(recipe => {
    if (recipe.id  === Number(event.target.id)) {
      return recipe;
    }
  })
  if (!event.target.classList.contains('favorite-active')) {
    event.target.classList.add('favorite-active'); //may be a use case for toggle
    // showFavorites.innerHTML = 'View Favorites'; seems not needed
    domUser.addToFavorites(specificRecipe);
  } else if (event.target.classList.contains('favorite-active')) {
    event.target.classList.remove('favorite-active');
    domUser.removeFromFavorites(specificRecipe)
  }
};

const viewFavorites = () => {
  if (cardArea.classList.contains('all')) {
    cardArea.classList.remove('all')
  }
  if (!domUser.favoriteRecipes.length) {
    favButton.innerHTML = 'You have no favorites!';
    populateCards(cookbook.recipes);
    return
  } else {
    showFavorites.innerHTML = 'Refresh Favorites'
    cardArea.innerHTML = '';
    domUser.favoriteRecipes.forEach(recipe => {
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
      //need to figure how to flexible show favorites availability if I recycle card constructor.
    })
  }
};

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



window.onload = onStartup(users[0]);
homeButton.addEventListener('click', cardButtonConditionals);
showFavorites.addEventListener('click', viewFavorites);
cardArea.addEventListener('click', cardButtonConditionals);
