import { expect } from 'chai';
import spies from 'chai-spies';
chai.use(spies);

describe('domUpdates', () => {

  beforeEach(() => {
    global.domUpdates = {};
    chai.spy.on(domUpdates, [
      'getWhatsCookingData',
      'createDataModel',
      'updateDisplay',
      'greetUser',
      'populateCards'
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

  it('should instantiate data', () => {
    domUser.getWhatsCookingData();
    expect(domUpdates.createDataModel()).to.have.been.called(1);
  });

  it('should display the instantiated data', () => {
    domUser.getWhatsCookingData();
    expect(domUpdates.updateDisplay()).to.have.been.called(1);
  });


})
