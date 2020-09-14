const spies = require('chai-spies');
chai.use(spies);

describe('domUpdates', () => {

  beforeEach(() => {
    global.domUpdates = {};
    chai.spy.on(domUpdates, [
      'createDataModel',
      'updateDisplay',
      'getFavorites',
      'favoriteCard',
      'viewFavorites',
      'addToToCook',
      'showToCookRecipes',
      'removeFromToCook',
      'displayDirections',
      'filterRecipes',
      'displayFilteredRecipes'
    ], () => {})
  });

  afterEach(() => {
    chai.spy.restore(domUpdates);
  });

  
})
