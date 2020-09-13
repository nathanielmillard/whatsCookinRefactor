import scripts from './scripts';
import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';


let domUpdates = {

  users: [{}],
  recipeData: [{}],
  ingredientsData: [{}],
  user: {},
  cookbook: null,

  getWhatsCookingData: () => {
    Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData'),
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData'),
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
    ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(responses => {
      console.log(responses);
      domUpdates.users = responses[0].wcUsersData;
      domUpdates.recipeData = responses[1].recipeData;
      domUpdates.ingredientsData = responses[2].ingredientsData;
      domUpdates.createDataModel();
      domUpdates.updateDisplay();
    })
    .catch(error => console.log(error))
  },

  createDataModel: () => {
    let pantry = new Pantry(domUpdates.users[0].pantry);
    domUpdates.user = new User(domUpdates.users[0], pantry);
    let recipeDeck = domUpdates.recipeData.map(recipe => {
      return recipe = new Recipe(recipe);
    })
    domUpdates.cookbook = new Cookbook(recipeDeck);
  },

  updateDisplay: () => {
    domUpdates.greetUser();
    domUpdates.populateCards(domUpdates.cookbook.recipes);
  },

  greetUser: () => {
    const welcomeMessage = document.querySelector('.greeting');
    welcomeMessage.innerText = `Welcome ${domUpdates.user.name}!`;
  },

  populateCards: (recipes) => {
    const cardArea = document.querySelector('.all-cards');
    cardArea.innerHTML = '';
    recipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', domUpdates.constructCard(recipe))
    });
    domUpdates.getFavorites();
  },

  constructCard: (recipe) => {
    return `<div class='card ${recipe.id}'>
    <header class='card-header ${recipe.id}'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button aria-label='add-button' class='add-button card-button ${recipe.id}'>
        <img class='add ${recipe.id} add-button' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
        recipes to cook'>
      </button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
      <button aria-label='favorite-button' class='favorite card-button favorite${recipe.id} ${recipe.id}'>
      </button>
    </header>
    <span class='recipe-name ${recipe.id}'>${recipe.name}</span>
      <img tabindex='0' class='card-picture ${recipe.id}'src='${recipe.image}' alt='Food from recipe'>
    </div>`
  },

  getFavorites: () => {
    if (domUpdates.user.favoriteRecipes.length) {
      domUpdates.user.favoriteRecipes.forEach(recipe => {
        document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
      })
    }
  },
};

export default  domUpdates;
