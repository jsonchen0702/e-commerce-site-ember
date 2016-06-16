import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  cartTotal: Ember.computed('shoppingCart', function() {
    var totalCost = 0.00;
    this.get('shoppingCart.items').forEach(function(item) {
      totalCost += item.get('price');
    });
    return totalCost.toFixed(2);
  }),

});
