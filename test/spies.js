const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
import domUpdates from '../src/domUpdates';

chai.use(spies);


//import domUpdates?

describe.only('domUpdates', () => {
  beforeEach(() => {
    global.domUpdates = {};
    chai.spy.on(domUpdates, [
      'getWhatsCookingData',
      'updateDisplay',
      'greetUser',
      'populateCards',
      'favoriteCard',
      'viewFavorites',
      'addToToCook',
      'showToCookRecipes',
      'removeFromToCook',
      'displayDirections',
      'filterRecipes'
    ], () => {})
  });

  afterEach(() => {
    chai.spy.restore(domUpdates);
  });

  it('should instantiate data', () => {
    domUpdates.getWhatsCookingData();
    expect(domUpdates.getWhatsCookingData).to.have.been.called(1);
  });

  it('should greet the user', () => {
    domUpdates.greetUser();
    expect(domUpdates.greetUser).to.have.been.called(1);
  });

  it('should display recipe cards', () => {
    domUpdates.updateDisplay();
    expect(domUpdates.populateCards).to.have.been.called.with('domUpdates.cookbook.recipes');
    //arguments?
  });

  it('should add cards to favorites', () => {
    domUpdates.favoriteCard();
    expect(domUpdates.favoriteCard).to.have.been.called(1);
  });

  it('should show favorites', () => {
    domUpdates.viewFavorites();
    expect(domUpdates.viewFavorites).to.have.been.called(1);
  });

  it('should add cards to to cook section', () => {
    domUpdates.addToToCook();
    expect(domUpdates.addToToCook).to.have.been.called.with('event');
  });

  it('should display to cook section', () => {
    domUpdates.showToCookRecipes();
    expect(domUpdates.showToCookRecipes).to.have.been.called(1);
  });

  it('should remove cards from to cook section', () => {
    domUpdates.removeFromToCook();
    expect(domUpdates.removeFromToCook).to.have.been.called(1);
  });

  it('should show recipe directions', () => {
    domUpdates.displayDirections();
    expect(domUpdates.displayDirections).to.have.been.called.with('event');
  });

  it('should filter recipes by search', () => {
    domUpdates.filterRecipes();
    expect(domUpdates.filterRecipes).to.have.been.called(1);
  });
})
