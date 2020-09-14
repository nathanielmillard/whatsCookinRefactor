// import './css/base.scss';
import './css/styles.scss';

import domUpdates from './domUpdates';

const showFavoritesButton = document.querySelector('.view-favorites');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
const searchBar = document.querySelector('.search-input');
const showToCookButton = document.querySelector('.to-cook');

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
searchBar.addEventListener('keyup', domUpdates.filterRecipes);
