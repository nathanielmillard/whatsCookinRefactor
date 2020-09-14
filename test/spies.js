import { expect } from 'chai';
import spies from 'chai-spies';
chai.use(spies);

//import domUpdates?

describe('domUpdates', () => {

  beforeEach(() => {
    global.domUpdates = {};
    chai.spy.on(domUpdates, [
      'getWhatsCookingData',
      'greetUser',
      'populateCards',
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
    domUpdates.getWhatsCookingData();
    expect(domUpdates.getWhatsCookingData()).to.have.been.called(1);
  });

  it('should greet the user', () => {
    domUpdates.greetUser();
    expect(domUpdates.greetUser()).to.have.been.called(1);
  });

  

})
