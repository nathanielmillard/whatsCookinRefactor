// import './css/base.scss';
import './css/styles.scss';

import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';
import users from './data/users';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';

const showFavoritesButton = document.querySelector('.view-favorites');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
const welcomeMessage = document.querySelector('.greeting');

let domUser, pantry, cookbook;

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
  // if (cardArea.classList.contains('all')) {
  //   cardArea.classList.remove('all') // what does this all do?
  // }
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

const constructCard = (recipe, addedClass) => {
  return `<div class='card ${recipe.id}'>
  <header class='card-header ${recipe.id}'>
    <label for='add-button' class='hidden'>Click to add recipe</label>
    <button aria-label='add-button' class='add-button card-button ${recipe.id}'>
      <img class='add ${recipe.id}' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
      recipes to cook'>
    </button>
    <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
    <button aria-label='favorite-button' class='favorite card-button favorite${recipe.id} ${recipe.id} ${addedClass}'>
    </button>
  </header>
  <span class='recipe-name ${recipe.id}'>${recipe.name}</span>
    <img tabindex='0' class='card-picture ${recipe.id}'src='${recipe.image}' alt='Food from recipe'>
  </div>`
};

const favoriteCard = (event) => {
  let specificRecipe = cookbook.recipes.find(recipe => {
    if (event.target.classList.contains(recipe.id)) {
      return recipe;
    }
  })
  if (!event.target.classList.contains('favorite-active')) {
    showFavoritesButton.innerHTML = 'View Favorites';
    domUser.addToFavorites(specificRecipe);
  } else if (event.target.classList.contains('favorite-active')) {
    domUser.removeFromFavorites(specificRecipe)
  }
  event.target.classList.toggle('favorite-active');
};

const addToToCook = (event) => {
  let specificRecipe = cookbook.recipes.find(recipe => {
    if (event.target.classList.contains(recipe.id)) {
      return recipe;
    }
  });
  if (!event.target.classList.contains('add-active')) {
    alert(domUser.checkPantryIngredients(specificRecipe));
    domUser.addToRecipesToCook(specificRecipe);
  } else if (event.target.classList.contains('add-active')) {
    domUser.removeFromRecipesToCook(specificRecipe)
  };
  event.target.classList.toggle('add-active');
};

const viewFavorites = () => {
  if (cardArea.classList.contains('all')) {
    cardArea.classList.remove('all')
  }
  if (!domUser.favoriteRecipes.length) {
    showFavoritesButton.innerHTML = 'You have no favorites!';
    populateCards(cookbook.recipes);
    return
  } else {
    showFavoritesButton.innerHTML = 'Refresh Favorites'
    cardArea.innerHTML = '';
    domUser.favoriteRecipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', constructCard(recipe, "favorite-active"))
    })
  }
};

const cardButtonConditionals = (event) => {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
  } else if (event.target.classList.contains('add')) {
    addToToCook(event);
  } else if (event.target.classList.contains('card-picture')) {
    displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    showFavoritesButton.innerHTML = 'View Favorites';
    populateCards(cookbook.recipes);
  }
}

const displayDirections = (event) => {
  let newRecipe = cookbook.recipes.find(recipe => {
    if (event.target.classList.contains(`${recipe.id}`)) {
      return recipe;
    };
  });
  let cost = newRecipe.calculateCost();
  cardArea.innerHTML = '';
  let neededIngredients = [];
  newRecipe.ingredients.forEach(ingredient => {
    neededIngredients.push(`${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} ${ingredient.name}`)
  })
  let neededSteps = [];
  newRecipe.instructions.forEach(step => {
   neededSteps.push(`${step.number}. ${step.instruction} `)
  })
  cardArea.innerHTML = `<h3>${newRecipe.name}</h3>
  <img src='${newRecipe.image}' alt='Recipe image for ${newRecipe.name}'>
  <div class='all-recipe-info'>
  <h5>You will need: </h5>
  <ul>
  <li>${neededIngredients.join('</li><li>')}</li>
  </ul>
  <h5>Instructions: </h5>
  <ul style='list-style-type:none;'>
  <li>${neededSteps.join('</li><li>')}</li>
  </ul>
  <h5>This recipe generally costs: $${cost} </h5>
  </div>`;
};

// for display 'to cook' cards function
displayToCookCards = () => {
  let neededIngredientsAndAmounts = domUser.checkHowMuchMore(recipe).map(obj => {
    return `${obj.quantityNeeded} cups more ${obj.name}`;
  });
  let neededCost = domUser.checkHowMuchMore(recipe).reduce((total, ingredient) => {
    return total += ingredient.cost;
  }, 0);
  cardArea.innerHTML =
    `<section class='to-cook'>
  <h1>Recipes To Cook</h1>
  <div class='card-section'>
  </div>
</section>`
  let cardSection = document.querySelector('.card-section')

  domUser.recipesToCook.forEach(recipe => {
    cardSection.insertAdjacentHTML('beforeend', `<div class='card ${recipe.id}'>
  <header class='recipe-name ${recipe.id}'>${recipe.name}</header>
  <img tabindex='0' class='card-picture ${recipe.id}'
  src='${recipe.image}' alt='Food from recipe'>
  <label>Have Cooked</label> //this might not be the right tag
  <input type="checkbox">
  <p>Ingredients Still Needed:</p>
  <ul >
  <li>${neededIngredientsAndAmounts.join('</li><li>')}</li>
  </ul>
  <p>Cost to Still Get:$${neededCost}</p>
</div>`);
  });
}
// for display 'to cook' cards function
const showToCookButton = document.querySelector('.to-cook-button');
const showToCookRecipes = () => {
if (!domUser.favoriteRecipes.length) {
  showToCookButton.innerText = 'You have no saved Recipes!';
  populateCards(cookbook.recipes);
  return
} else {
  displayToCookCards();
}}

window.onload = onStartup(users[1]);
homeButton.addEventListener('click', cardButtonConditionals);
cardArea.addEventListener('click', cardButtonConditionals);
showFavoritesButton.addEventListener('click', viewFavorites);
showToCookButton.addEventListener('click', showToCookRecipes);
