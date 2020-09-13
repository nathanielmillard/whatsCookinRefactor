// import './css/base.scss';
import './css/styles.scss';

import domUpdates from './domUpdates';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';

const showFavoritesButton = document.querySelector('.view-favorites');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
const searchBar = document.querySelector('.search-input');
const showToCookButton = document.querySelector('.to-cook');

let domUser, pantry, cookbook;

// const displayDirections = (event) => {
//   let newRecipe = cookbook.recipes.find(recipe => {
//     if (event.target.classList.contains(`${recipe.id}`)) {
//       return recipe;
//     };
//   });
//   let cost = newRecipe.calculateCost();
//   cardArea.innerHTML = '';
//   let neededIngredients = [];
//   newRecipe.ingredients.forEach(ingredient => {
//     neededIngredients.push(`${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} ${ingredient.name}`)
//   })
//   let neededSteps = [];
//   newRecipe.instructions.forEach(step => {
//    neededSteps.push(`${step.number}. ${step.instruction} `)
//   })
//   cardArea.innerHTML = `<h3>${newRecipe.name}</h3>
//   <img src='${newRecipe.image}' alt='Recipe image for ${newRecipe.name}'>
//   <div class='all-recipe-info'>
//   <h5>You will need: </h5>
//   <ul>
//   <li>${neededIngredients.join('</li><li>')}</li>
//   </ul>
//   <h5>Instructions: </h5>
//   <ul style='list-style-type:none;'>
//   <li>${neededSteps.join('</li><li>')}</li>
//   </ul>
//   <h5>This recipe generally costs: $${cost} </h5>
//   </div>`;
// };

const filterRecipes = () => {
  var searchTerm = event.target.value.toLowerCase();
  if (searchTerm !== '') {
    cardArea.innerHTML = '';
    displayFilteredRecipes(searchTerm);
  } else {
    populateCards(cookbook.recipes);
  }
};

const displayFilteredRecipes = (searchTerm) => {
  let allRecipeResults = cookbook.recipes.filter((recipe)=>{
    let ingredientNames = recipe.ingredients.map((ingredient)=>{
      return ingredient.name
    })
    return recipe.name.toLowerCase().includes(searchTerm) || recipe.tags.includes(searchTerm) || ingredientNames.includes(searchTerm)
  })
  populateCards(allRecipeResults)
};

const cardButtonConditionals = (event) => {
  if (event.target.classList.contains('favorite')) {
    domUpdates.favoriteCard(event);
  } else if (event.target.classList.contains('add-button')) {
    domUpdates.addToToCook(event);
  } else if (event.target.classList.contains('card-picture')) {
    domUpdates.displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    showFavoritesButton.innerHTML = 'View Favorites';
    domUpdates.populateCards(domUpdates.cookbook.recipes);
  } else if (event.target.classList.contains('close-button')) {
    domUpdates.removeFromToCook(event);
  }
}

window.onload = domUpdates.getWhatsCookingData()
homeButton.addEventListener('click', cardButtonConditionals);
cardArea.addEventListener('click', cardButtonConditionals);
showFavoritesButton.addEventListener('click', domUpdates.viewFavorites);
showToCookButton.addEventListener('click', domUpdates.showToCookRecipes);
searchBar.addEventListener('keyup', filterRecipes);
