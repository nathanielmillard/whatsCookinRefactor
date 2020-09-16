// import scripts from './scripts';
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
    domUpdates.user = new User(domUpdates.users[0], pantry, domUpdates.ingredientsData);
    let recipeDeck = domUpdates.recipeData.map(recipe => {
      return recipe = new Recipe(recipe, domUpdates.ingredientsData);
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
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = 'all-cards';
    cardArea.innerHTML = '';
    recipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', domUpdates.constructCard(recipe))
    });
  },

  constructCard: (recipe) => {
    let classList
    if (domUpdates.user.favoriteRecipes.includes(recipe)) {
      classList = 'favorite card-button favorite-active'
    } else {
      classList = 'favorite card-button'
    }
    return `<div class='card ${recipe.id}'>
    <header class='card-header ${recipe.id}'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button aria-label='add-button' class='add-button card-button ${recipe.id}'>
        <img class='add ${recipe.id} add-button' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
        recipes to cook'>
      </button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
      <button aria-label='favorite-button' class='${classList} favorite${recipe.id} ${recipe.id}'>
      </button>
    </header>
    <span class='recipe-name ${recipe.id}'>${recipe.name}</span>
      <button aria-label='recipe-info' class='card-picture ${recipe.id} wrap'>
        <img tabindex='0' class='card-picture ${recipe.id}'src='${recipe.image}' alt='Food from recipe'>
      </button>
    </div>`
  },

  findSpecificRecipe: (event) => {
    return domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    })
  },

  favoriteCard: (event) => {
    const showFavoritesButton = document.querySelector('.view-favorites');
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    if (!event.target.classList.contains('favorite-active')) {
      showFavoritesButton.innerHTML = 'View Favorites';
      domUpdates.user.addToFavorites(specificRecipe);
    } else if (event.target.classList.contains('favorite-active')) {
      domUpdates.user.removeFromFavorites(specificRecipe)
    }
    event.target.classList.toggle('favorite-active');
  },

  viewFavorites: () => {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.add('hidden')
    const showFavoritesButton = document.querySelector('.view-favorites');
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = 'all-cards';
    if (!domUpdates.user.favoriteRecipes.length) {
      showFavoritesButton.innerHTML = 'You have no favorites!';
      domUpdates.populateCards(domUpdates.cookbook.recipes);
      return
    } else {
      showFavoritesButton.innerHTML = 'Refresh Favorites'
      cardArea.innerHTML = '';
      domUpdates.user.favoriteRecipes.forEach(recipe => {
        cardArea.insertAdjacentHTML('afterbegin', domUpdates.constructCard(recipe))
      })
    }
  },

  addToToCook: (event) => {
    const showToCookButton = document.querySelector('.to-cook');
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    if (!event.target.classList.contains('add-active')) {
      showToCookButton.innerText = 'To Cook'
      alert(domUpdates.user.checkPantryIngredients(specificRecipe));
      domUpdates.user.addToRecipesToCook(specificRecipe);
    } else if (event.target.classList.contains('add-active')) {
      domUpdates.user.removeFromRecipesToCook(specificRecipe)
    }
    event.target.classList.toggle('add-active');
  },

  displayToCookCards: () => {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.add('hidden')
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = '';
    cardArea.innerHTML =
      `<section class='to-cook'>
        <h1 class='to-cook-greeting'>Recipes To Cook</h1>
        <div class='card-section all-cards'>
        </div>
      </section>`
    let cardSection = document.querySelector('.card-section')
    domUpdates.user.recipesToCook.forEach(recipe => {
      let values = domUpdates.user.checkHowMuchMore(recipe).map(obj => {
        return `${obj.quantityNeeded} ${obj.unit} more ${obj.name}`;
      });
      let neededCost = domUpdates.user.checkHowMuchMore(recipe).reduce((total, ingredient) => {
        return total += ingredient.cost;
      }, 0);
      cardSection.insertAdjacentHTML('beforeend', `<div class='card ${recipe.id}'>
    <header class='card-header ${recipe.id}'>
      <label for='close-button' class='hidden'></label>
      <button aria-label='close-button' class='close-button card-button ${recipe.id}'>
        <img class='close-button ${recipe.id}' src='https://www.flaticon.com/svg/static/icons/svg/446/446091.svg' alt='remove from recipes to cook'>
      </button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
      <button aria-label='favorite-button' class='favorite card-button favorite${recipe.id} ${recipe.id}'>
      </button>
    </header>
      <h3>${recipe.name}</h3>
      <img tabindex='0' class='card-picture ${recipe.id}'
      src='${recipe.image}' alt='Food from recipe'>
      <div class = "pantry-buttons">
        <button type="button" name="Add Needed Ingredients" class="bought-ingredients bought-ingredients${recipe.id} ${recipe.id}">Add Needed Ingredients</button>
        <button type="button" name="Have Cooked" class="have-cooked have-cooked${recipe.id} ${recipe.id}">Have Cooked</button>
      </div>
      <p class='needed-ings'>Ingredients Still Needed:</p>
      <ul >
      <li>${values.join('</li><li>')}</li>
      </ul>
      <p class='ing-cost'>Cost to Still Get:$${neededCost}</p>
    </div>`);
    });
  },

  showToCookRecipes: () => {
    const showToCookButton = document.querySelector('.to-cook');
    if (!domUpdates.user.recipesToCook.length) {
      showToCookButton.innerText = 'You have no saved Recipes!';
      domUpdates.populateCards(domUpdates.cookbook.recipes);
      return
    } else {
      domUpdates.displayToCookCards();
    }
  },

  removeFromToCook: () => {
    let specificRecipe = domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    })
    domUpdates.user.removeFromRecipesToCook(specificRecipe);
    domUpdates.displayToCookCards();
  },

  displayDirections: (event) => {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.add('hidden')
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = 'recipe-directions';
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    let cost = specificRecipe.calculateCost();
    cardArea.innerHTML = '';
    let neededIngredients = [];
    specificRecipe.ingredients.forEach(ingredient => {
      let name = specificRecipe.ingredientsData.find(item => item.id === ingredient.id).name
      neededIngredients.push(`${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} ${name}`)
    })
    let neededSteps = [];
    specificRecipe.instructions.forEach(step => {
      neededSteps.push(`${step.number}. ${step.instruction} `)
    })
    cardArea.innerHTML = `<section class='display-recipe'>
    <div class='display-recipe-info'>
      <h3>${specificRecipe.name}</h3>
      <img class='card-picture' src='${specificRecipe.image}' alt='Recipe image for ${specificRecipe.name}'>
    </div>
    <div class='recipe-ingredients'>
    <h5 class='recipe-ingredients-title'>You will need: </h5>
    <ul>
    <li>${neededIngredients.join('</li><li>')}</li>
    </ul>
    </div>
    <div class='recipe-instructions'>
    <h5>Instructions: </h5>
    <ul class='instruction-list' style='list-style-type:none;'>
    <li>${neededSteps.join('</li><li>')}</li>
    </ul>
    <h5>This recipe generally costs: $${cost} </h5>
    </div>
    </section>`;
  },

  filterRecipes: () => {
    const cardArea = document.querySelector('.all-cards');
    var searchTerm = event.target.value.toLowerCase();
    if (searchTerm !== '') {
      cardArea.innerHTML = '';
      domUpdates.displayFilteredRecipes(searchTerm);
    } else {
      domUpdates.populateCards(domUpdates.cookbook.recipes);
    }
  },

  displayFilteredRecipes: (searchTerm) => {
    domUpdates.populateCards(domUpdates.cookbook.findRecipes(searchTerm));
  },

  haveCookedRecipe: (event) => {
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    const haveCookedButton = document.querySelector(`.have-cooked${specificRecipe.id}`);
    if (domUpdates.user.checkPantryIngredients(specificRecipe) !== 'You have the ingredients!') {
      alert("You don't have what you need yet")
    } else {
      domUpdates.user.removePantryIngridients(specificRecipe)
      haveCookedButton.disabled = true;
    }
  },

  buyIngredients: (event) => {
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    const buyButton = document.querySelector(`.bought-ingredients${specificRecipe.id}`)
    domUpdates.user.addNeededPantryIngridients(specificRecipe)
    buyButton.disabled = true;
  },

};

export default  domUpdates;
