let domUpdates = {

  users: [{}],
  recipeData: [{}],
  ingredientsData: [{}],
  user: //class instance,
  cookbook: //class instance,

  getWhatsCookingData() {
    Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData'),
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData'),
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
    ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(responses => {
      this.users = responses[0];
      this.recipeData = responses[1];
      this.ingredientsData = responses[2];
    })
    .catch(error => console.log(error))
  }

//We want user to be a certain index.
  createDataModel(user) {
    let pantry = new Pantry(user.pantry);
    this.user = new User(user, pantry);
    let recipeDeck = this.recipeData.map(recipe => {
      return recipe = new Recipe(recipe);
    })
    this.cookbook = new Cookbook(recipeDeck);
  }

};

export default  domUpdates;
