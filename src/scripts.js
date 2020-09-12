// import './css/base.scss';
import './css/styles.scss';

// import recipeData from './data/recipes';
// import ingredientsData from './data/ingredients';
// import users from './data/users';

let users = [{}];
let serverRecipeData = [{}];
let ingredientsData = [{}];

fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
  .then(response => response.json())
  .then(data => {
    users = data.wcUsersData
    onStartup(users[1]);
  })
  .catch(err => console.log('error'))

fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
  .then(response => response.json())
  .then(recipeData => {
    serverRecipeData = recipeData.recipeData
    onStartup(users[1]);
  })
  .catch(err => console.log('error'))

fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
  .then(response => response.json())
  .then(data => {
    ingredientsData = data.ingredientsData
    onStartup(users[1]);
  })
  .catch(err => console.log('error'))


import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';

const showFavoritesButton = document.querySelector('.view-favorites');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
const welcomeMessage = document.querySelector('.greeting');
const searchBar = document.querySelector('.search-input');

let domUser, pantry, cookbook;

const onStartup = (user) => {
  let recipeDeck = [];
  serverRecipeData.forEach((recipe) => {
    let instance = new Recipe(recipe, ingredientsData)
    recipeDeck.push(instance)
  });
  cookbook = new Cookbook(recipeDeck);
  pantry = new Pantry(users[1].pantry);
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

const constructCard = (recipe) => {
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
    // console.log(domUser.recipesToCook);
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
const displayToCookCards = () => {
  cardArea.innerHTML =
    `<section class='to-cook'>
  <h1>Recipes To Cook</h1>
  <div class='card-section'>
  </div>
</section>`
let cardSection = document.querySelector('.card-section')

  domUser.recipesToCook.forEach(recipe => {
    let neededIngredientsAndAmounts = domUser.checkHowMuchMore(recipe).map(obj => {
      return `${obj.quantityNeeded} ${obj.unit} more ${obj.name}`;
    });
    let neededCost = domUser.checkHowMuchMore(recipe).reduce((total, ingredient) => {
      return total += ingredient.cost;
    }, 0);
    cardSection.insertAdjacentHTML('beforeend', `<div class='card ${recipe.id}'>
  <header class='recipe-name ${recipe.id}'>
    <label for='close-button' class='hidden'></label>
    <button aria-label='close-button' class='close-button card-button ${recipe.id}'>
      <img class='close ${recipe.id}' src='https://www.flaticon.com/svg/static/icons/svg/446/446091.svg' alt='remove from recipes to cook'>
    </button>
    <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
    <button aria-label='favorite-button' class='favorite card-button favorite${recipe.id} ${recipe.id}'>
    </button>
</header>
  <h3>${recipe.name}</h3>
  <img tabindex='0' class='card-picture ${recipe.id}'
  src='${recipe.image}' alt='Food from recipe'>
  <label>Have Cooked</label>
  <input type="checkbox">
  <p>Ingredients Still Needed:</p>
  <ul >
  <li>${neededIngredientsAndAmounts.join('</li><li>')}</li>
  </ul>
  <p>Cost to Still Get:$${neededCost}</p>
</div>`);
  });
};
// for display 'to cook' cards function
const showToCookButton = document.querySelector('.to-cook');
const showToCookRecipes = () => {
if (!domUser.recipesToCook.length) {
  showToCookButton.innerText = 'You have no saved Recipes!';
  populateCards(cookbook.recipes);
  return
} else {
  displayToCookCards();
}};

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

const removeFromToCook = (event) => {
  let specificRecipe = cookbook.recipes.find(recipe => {
    if (event.target.classList.contains(recipe.id)) {
      return recipe;
    }
  })
  domUser.removeFromRecipesToCook(specificRecipe);
  displayToCookCards();
}

const cardButtonConditionals = (event) => {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
  } else if (event.target.classList.contains('add-button')) {
    addToToCook(event);
  } else if (event.target.classList.contains('card-picture')) {
    displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    showFavoritesButton.innerHTML = 'View Favorites';
    populateCards(cookbook.recipes);
  } else if (event.target.classList.contains('close-button')) {
    removeFromToCook(event);
  }
}

homeButton.addEventListener('click', cardButtonConditionals);
cardArea.addEventListener('click', cardButtonConditionals);
showFavoritesButton.addEventListener('click', viewFavorites);
showToCookButton.addEventListener('click', showToCookRecipes);
searchBar.addEventListener('keyup', filterRecipes);
