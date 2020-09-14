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
    const cardArea = document.querySelector('.all-cards');
    cardArea.innerHTML = '';
    recipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', domUpdates.constructCard(recipe))
    });
    // domUpdates.getFavorites();
  },

  constructCard: (recipe) => {
    let classList
    if(domUpdates.user.favoriteRecipes.includes(recipe)){
      classList = 'favorite card-button favorite-active'
    } else (
      classList = 'favorite card-button'
    )
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
      <img tabindex='0' class='card-picture ${recipe.id}'src='${recipe.image}' alt='Food from recipe'>
      <label>Buy Needed Ingredients</label>
      <input type="checkbox" class="bought-ingridients ${recipe.id}">
    </div>`
  },

  // getFavorites: () => {
  //   if (domUpdates.user.favoriteRecipes.length) {
  //     domUpdates.user.favoriteRecipes.forEach(recipe => {
  //       console.log(`.favorite${recipe.id}`)
  //       document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
  //     })
  //   }
  // },

  favoriteCard: (event) => {
    const showFavoritesButton = document.querySelector('.view-favorites');
    let specificRecipe = domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    })
    if (!event.target.classList.contains('favorite-active')) {
      showFavoritesButton.innerHTML = 'View Favorites';
      domUpdates.user.addToFavorites(specificRecipe);
    } else if (event.target.classList.contains('favorite-active')) {
      domUpdates.user.removeFromFavorites(specificRecipe)
    }
    event.target.classList.toggle('favorite-active');
  },

  viewFavorites: () => {
    const showFavoritesButton = document.querySelector('.view-favorites');
    const cardArea = document.querySelector('.all-cards');
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
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
    // domUpdates.getFavorites();
    }
  },

  addToToCook: (event) => {
    let specificRecipe = domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    });
    if (!event.target.classList.contains('add-active')) {
      alert(domUpdates.user.checkPantryIngredients(specificRecipe));
      domUpdates.user.addToRecipesToCook(specificRecipe);
    } else if (event.target.classList.contains('add-active')) {
      domUpdates.user.removeFromRecipesToCook(specificRecipe)
    };
    event.target.classList.toggle('add-active');
  },

  displayToCookCards: () => {
    const cardArea = document.querySelector('.all-cards');
    cardArea.innerHTML =
      `<section class='to-cook'>
        <h1>Recipes To Cook</h1>
        <div class='card-section'>
        </div>
      </section>`
    let cardSection = document.querySelector('.card-section')
    domUpdates.user.recipesToCook.forEach(recipe => {
      let neededIngredientsAndAmounts = domUpdates.user.checkHowMuchMore(recipe).map(obj => {
        return `${obj.quantityNeeded} ${obj.unit} more ${obj.name}`;
      });
      let neededCost = domUpdates.user.checkHowMuchMore(recipe).reduce((total, ingredient) => {
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
      <input type="checkbox" class = "have-cooked ${recipe.id}">
      <p>Ingredients Still Needed:</p>
      <ul >
      <li>${neededIngredientsAndAmounts.join('</li><li>')}</li>
      </ul>
      <p>Cost to Still Get:$${neededCost}</p>
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
    const cardArea = document.querySelector('.all-cards');
    let newRecipe = domUpdates.cookbook.recipes.find(recipe => {
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
    let allRecipeResults = domUpdates.cookbook.recipes.filter((recipe)=>{
      let ingredientNames = recipe.ingredients.map((ingredient)=>{
        return ingredient.name
      })
      return recipe.name.toLowerCase().includes(searchTerm) || recipe.tags.includes(searchTerm) || ingredientNames.includes(searchTerm)
    })
    domUpdates.populateCards(allRecipeResults)
  },

  haveCookedRecipe: (event) => {
    let specificRecipe = domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    })
    if (domUpdates.user.checkPantryIngredients(specificRecipe) !== 'You have the ingredients!'){
      alert("You don't have what you need yet")
    } else {
      domUpdates.user.removePantryIngridients(specificRecipe)
    }
  },

  buyIngredients: (event) => {
    let specificRecipe = domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    })
    domUpdates.user.addNeededPantryIngridients(specificRecipe)
  }

};

export default  domUpdates;
