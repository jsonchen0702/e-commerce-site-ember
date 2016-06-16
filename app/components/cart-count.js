import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  cartQuantity: Ember.computed('shoppingCart.items.[]', function() {
    return this.get('shoppingCart.items.length');
  }),
});
